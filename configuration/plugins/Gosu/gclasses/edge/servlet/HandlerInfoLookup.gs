package edge.servlet

uses java.util.Map
uses edge.di.boot.Bootstrap
uses edge.di.Path
uses edge.PlatformSupport.Logger
uses edge.PlatformSupport.Reflection
uses edge.di.CapabilityAndPath
uses edge.jsonrpc.IRpcHandler
uses edge.capabilities.document.IDocumentRetrievalHandler
uses edge.servlet.security.IHttpRequestUserIdentityPlugin
uses java.util.ArrayList
uses java.util.HashMap
uses edge.jsonrpc.endpoint.EndpointUtil
uses edge.servlet.jsonrpc.JsonRpcEndpointProcessor
uses java.util.concurrent.atomic.AtomicReference
uses java.util.concurrent.locks.ReentrantLock
uses java.util.Collections
uses edge.util.either.Either
uses java.lang.RuntimeException
uses edge.di.boot.DependencyContainer

/**
 *  Singleton used to cached object instances retrieved from dependency injection service at application startup
 *  Note all object returned from DI service are assumed to be stateless
 */
class HandlerInfoLookup {
  final private static var LOGGER = new Logger(Reflection.getRelativeName(HandlerInfoLookup))

  private static final var PATH_PREFIX = "/edge/"
  internal static final var DOC_PATH_PREFIX : String = "/edge/document/"
  private static final var HANDLER_PREFIX = "handlers."
  private static final var DOC_HANDLER_PREFIX = "httphandlers."

  /** Thread-safe instance of the handler lookup. */
  private static var HOLDER = new AtomicReference<Either<List<String>, HandlerInfoLookup>>(
      Bootstrap.getStatus().mmapRight( \ container -> createHandlerLookup(container))
    )

  /** Replacement for synchronized methods missing in Gosu. */
  private static var LOCK = new ReentrantLock()


  /**
   * Map to lookup an instance for Handlers to download documents, based on HTTP Request path
   **/
  private var _documentDownloadProcessors: Map<String, DocumentDownloadEndpointProcessor > as readonly DocumentDownloadProcessors


  /**
   * Map from request paths to corresponding RPC servlet endpoint.
   */
  private var _jsonRpcProcessors: Map<String, JsonRpcEndpointProcessor > as readonly JsonRpcProcessors


  /**
   * Returns a current instance of the Handler configuration.
   */
  internal static property get Instance() : HandlerInfoLookup {
    final var info = HOLDER.get()
    if (info.isLeft) {
      throw new RuntimeException("Could not handle a request due to " + info.left.size() + " error(s).")
    }
    return info.right
  }



  /**
   * Returns a status information about handlers.
   */
  public static property get Status() : Either<List<String>, HandlerStatus> {
    return HOLDER.get().mapRight( \ info -> createStatus(info))
  }


  /**
   * Reloads dependency injection and reinitializes HTTP configuration.
   * @returns a list of errors or a status message.
   */
  @Deprecated("This method should not be used in the production environment")
  public static function reloadHandlerConfiguration() : Either<List<String>, HandlerStatus> {
    using(LOCK) {
      final var newStatus = Bootstrap.reload().mmapRight( \ container -> createHandlerLookup(container))
      HOLDER.set(newStatus)
      return newStatus.mapRight(\config -> createStatus(config))
    }
  }



  private construct(docProcessors : Map<String, DocumentDownloadEndpointProcessor>, jsonProcessors : Map<String, JsonRpcEndpointProcessor>) {
    this._documentDownloadProcessors = Collections.unmodifiableMap(docProcessors)
    this._jsonRpcProcessors = Collections.unmodifiableMap(jsonProcessors)
  }

  /**
   * Creates a lookup handler.
   */
  private static function createHandlerLookup(container : DependencyContainer) : Either<List<String>, HandlerInfoLookup> {
    var downloadProcessors = new HashMap<String, DocumentDownloadEndpointProcessor >()
    var rpcProcessors = new HashMap<String, JsonRpcEndpointProcessor >()

    final var errors = new ArrayList<String>()

    final var injectionKeys = container.ConfigurationKeys

    final var allRpcProcessorKeys = injectionKeys.where( \elt -> isHandler(elt))
    final var allDocumentDocumentDownloadProcessorKeys = injectionKeys.where( \ elt -> isDocumentHandler(elt))

    final var capabilitiesWithAuth =
        allRpcProcessorKeys.map( \ elt -> elt.Capability)
            .concat(allDocumentDocumentDownloadProcessorKeys.map( \ elt -> elt.Capability))
            .toSet()

    final var authMap = new HashMap<String,IHttpRequestUserIdentityPlugin>()

    for (cap in capabilitiesWithAuth) {
      final var authz = container.createNode(new CapabilityAndPath(cap, Path.parse("http.authorizer")), IHttpRequestUserIdentityPlugin)
      if (authz.isRight) {
        authMap.put(cap, authz.right as IHttpRequestUserIdentityPlugin)
      } else {
        for (err in authz.left) {
          errors.add("Could not create authorizer for capability " + cap + " : " + err)
        }
      }
    }

    for (handlerPath in allRpcProcessorKeys) {
      final var requestPath = "${PATH_PREFIX}${handlerPath.Capability}/${handlerPath.Path.Name}"
      final var handler = container.createNode(handlerPath, IRpcHandler)
          .mmapRight(\ obj -> EndpointUtil.endpointForObject(obj as IRpcHandler))
          .map( \endpoint -> new JsonRpcEndpointProcessor (authMap.get(handlerPath.Capability), endpoint))
      if (handler.isRight) {
        rpcProcessors.put(requestPath, handler.right)
      } else {
        for (err in handler.left) {
          errors.add("Could not create handler at " + handlerPath + " : " + err)
        }
      }
    }

    for (docPath in allDocumentDocumentDownloadProcessorKeys) {
      final var requestPath = "${DOC_PATH_PREFIX}${docPath.Capability}/${docPath.Path.Name}"
      final var handler = Bootstrap.createNode(docPath, IDocumentRetrievalHandler)
          .map(\docHandler -> new DocumentDownloadEndpointProcessor (authMap.get(docPath.Capability), docHandler as IDocumentRetrievalHandler))
      if (handler.isRight) {
        downloadProcessors.put(requestPath, handler.right)
      } else {
        for (err in handler.left) {
          errors.add("Could not create doc handler at " + docPath + " : " + err)
        }
      }
    }

    if (!errors.Empty) {
      LOGGER.logError("======  FATAL PORTAL CONFIGURATION ISSUES FOUND =========")
      errors.each( \ elt -> LOGGER.logError(elt))
      return Either.left(errors)
    }

    return Either.right<List<String>, HandlerInfoLookup>(new HandlerInfoLookup(downloadProcessors, rpcProcessors))
  }


  private static function isHandler(key: CapabilityAndPath): Boolean {
    if (key.Path.Length != 2) {
      return false
    }
    if (!"handlers".equals(key.Path.Parent.Name)) {
      return false
    }
    return true
  }


  private static function isDocumentHandler(key: CapabilityAndPath): Boolean {
    if (key.Path.Length != 2) {
      return false
    }
    if (!"httphandlers".equals(key.Path.Parent.Name)) {
      return false
    }
    return true
  }


  private static function createStatus(info : HandlerInfoLookup) : HandlerStatus {
    return new HandlerStatus(info.DocumentDownloadProcessors.size(), info.JsonRpcProcessors.size())
  }
}
