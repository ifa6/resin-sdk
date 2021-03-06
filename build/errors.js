
/**
 * @namespace errors
 */

(function() {
  var ResinApplicationNotFound, ResinDeviceNotFound, ResinDirectoryNotGitRepository, ResinInvalidApplication, ResinInvalidDataKey, ResinInvalidDeviceType, ResinInvalidOption, ResinInvalidParameter, ResinInvalidPath, ResinKeyNotFound, ResinMissingCredential, ResinMissingDataPrefix, ResinMissingOption, ResinMissingParameter, ResinNoInternetConnection, ResinNoSuchDirectory, ResinNonAllowedOption, ResinNotAny, ResinRequestError, TypedError,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  TypedError = require('typed-error');


  /**
   * An invalid device type error
   * @class ResinInvalidDeviceType
   * @protected
   * @memberof errors
   *
   * @param {String} type - the invalid device type
   */

  exports.ResinInvalidDeviceType = ResinInvalidDeviceType = (function(_super) {
    __extends(ResinInvalidDeviceType, _super);

    function ResinInvalidDeviceType(type) {
      this.type = type;

      /**
      		 * @name type
      		 * @type String
      		 * @memberof errors.ResinInvalidDeviceType
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinInvalidDeviceType
      		 * @instance
      		 * @constant
      		 * @default Invalid device type: this.type
       */
      ResinInvalidDeviceType.__super__.constructor.call(this, "Invalid device type: " + this.type);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinInvalidDeviceType
    	 * @instance
    	 * @constant
    	 * @default ResinInvalidDeviceType
     */

    ResinInvalidDeviceType.prototype.code = 'ResinInvalidDeviceType';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinInvalidDeviceType
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinInvalidDeviceType.prototype.exitCode = 1;

    return ResinInvalidDeviceType;

  })(TypedError);


  /**
   * A missing credential error
   * @class ResinMissingCredential
   * @protected
   * @memberof errors
   *
   * @param {String} credential - the missing credential name
   */

  exports.ResinMissingCredential = ResinMissingCredential = (function(_super) {
    __extends(ResinMissingCredential, _super);

    function ResinMissingCredential(credential) {
      this.credential = credential;

      /**
      		 * @name credential
      		 * @type String
      		 * @memberof errors.ResinMissingCredential
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinMissingCredential
      		 * @instance
      		 * @constant
      		 * @default Missing credential: this.credential
       */
      ResinMissingCredential.__super__.constructor.call(this, "Missing credential: " + this.credential);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinMissingCredential
    	 * @instance
    	 * @constant
    	 * @default ResinMissingCredential
     */

    ResinMissingCredential.prototype.code = 'ResinMissingCredential';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinMissingCredential
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinMissingCredential.prototype.exitCode = 1;

    return ResinMissingCredential;

  })(TypedError);


  /**
   * A missing data prefix error
   * @class ResinMissingDataPrefix
   * @protected
   * @memberof errors
   */

  exports.ResinMissingDataPrefix = ResinMissingDataPrefix = (function(_super) {
    __extends(ResinMissingDataPrefix, _super);

    function ResinMissingDataPrefix() {

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinMissingDataPrefix
      		 * @instance
      		 * @constant
      		 * @default Did you forget to set a prefix?
       */
      ResinMissingDataPrefix.__super__.constructor.call(this, 'Did you forget to set a prefix?');
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinMissingDataPrefix
    	 * @instance
    	 * @constant
    	 * @default ResinMissingDataPrefix
     */

    ResinMissingDataPrefix.prototype.code = 'ResinMissingDataPrefix';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinMissingDataPrefix
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinMissingDataPrefix.prototype.exitCode = 1;

    return ResinMissingDataPrefix;

  })(TypedError);


  /**
   * A no internet connection error
   * @class ResinNoInternetConnection
   * @protected
   * @memberof errors
   */

  exports.ResinNoInternetConnection = ResinNoInternetConnection = (function(_super) {
    __extends(ResinNoInternetConnection, _super);

    function ResinNoInternetConnection() {

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinNoInternetConnection
      		 * @instance
      		 * @constant
      		 * @default You need internet connection to perform this task
       */
      ResinNoInternetConnection.__super__.constructor.call(this, 'You need internet connection to perform this task');
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinNoInternetConnection
    	 * @instance
    	 * @constant
    	 * @default ResinNoInternetConnection
     */

    ResinNoInternetConnection.prototype.code = 'ResinNoInternetConnection';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinNoInternetConnection
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinNoInternetConnection.prototype.exitCode = 1;

    return ResinNoInternetConnection;

  })(TypedError);


  /**
   * An invalid option error
   * @class ResinInvalidOption
   * @protected
   * @memberof errors
   *
   * @param {String} name - the invalid option name
   * @param {*} value - the invalid option value
   * @param {String} [explanation] - an optional explanation
   */

  exports.ResinInvalidOption = ResinInvalidOption = (function(_super) {
    __extends(ResinInvalidOption, _super);

    function ResinInvalidOption(name, value, explanation) {
      var message;
      this.name = name;
      this.value = value;
      this.explanation = explanation;

      /**
      		 * @name name
      		 * @type String
      		 * @memberof errors.ResinInvalidOption
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name value
      		 * @type *
      		 * @memberof errors.ResinInvalidOption
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name explanation
      		 * @type String
      		 * @memberof errors.ResinInvalidOption
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinInvalidOption
      		 * @instance
      		 * @constant
      		 * @default Invalid option this.name: this.value. this.explanation.
       */
      message = "Invalid option " + this.name + ": " + this.value;
      if (this.explanation != null) {
        message += ". " + this.explanation + ".";
      }
      ResinInvalidOption.__super__.constructor.call(this, message);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinInvalidOption
    	 * @instance
    	 * @constant
    	 * @default ResinInvalidOption
     */

    ResinInvalidOption.prototype.code = 'ResinInvalidOption';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinInvalidOption
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinInvalidOption.prototype.exitCode = 1;

    return ResinInvalidOption;

  })(TypedError);


  /**
   * A missing option error
   * @class ResinMissingOption
   * @protected
   * @memberof errors
   *
   * @param {String} name - the missing option name
   */

  exports.ResinMissingOption = ResinMissingOption = (function(_super) {
    __extends(ResinMissingOption, _super);

    function ResinMissingOption(name) {
      this.name = name;

      /**
      		 * @name name
      		 * @type String
      		 * @memberof errors.ResinMissingOption
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinMissingOption
      		 * @instance
      		 * @constant
      		 * @default Missing option: this.name
       */
      ResinMissingOption.__super__.constructor.call(this, "Missing option: " + this.name);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinMissingOption
    	 * @instance
    	 * @constant
    	 * @default ResinMissingOption
     */

    ResinMissingOption.prototype.code = 'ResinMissingOption';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinMissingOption
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinMissingOption.prototype.exitCode = 1;

    return ResinMissingOption;

  })(TypedError);


  /**
   * A non allowed option error
   * @class ResinNonAllowedOption
   * @protected
   * @memberof errors
   *
   * @param {String} name - the non allowed option name
   */

  exports.ResinNonAllowedOption = ResinNonAllowedOption = (function(_super) {
    __extends(ResinNonAllowedOption, _super);

    function ResinNonAllowedOption(name) {
      this.name = name;

      /**
      		 * @name name
      		 * @type String
      		 * @memberof errors.ResinNonAllowedOption
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinNonAllowedOption
      		 * @instance
      		 * @constant
      		 * @default Non allowed option: this.name
       */
      ResinNonAllowedOption.__super__.constructor.call(this, "Non allowed option: " + this.name);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinNonAllowedOption
    	 * @instance
    	 * @constant
    	 * @default ResinNonAllowedOption
     */

    ResinNonAllowedOption.prototype.code = 'ResinNonAllowedOption';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinNonAllowedOption
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinNonAllowedOption.prototype.exitCode = 1;

    return ResinNonAllowedOption;

  })(TypedError);


  /**
   * An invalid parameter error
   * @class ResinInvalidParameter
   * @protected
   * @memberof errors
   *
   * @param {String} name - the invalid parameter name
   * @param {*} value - the invalid parameter value
   * @param {String} [explanation] - an optional explanation
   */

  exports.ResinInvalidParameter = ResinInvalidParameter = (function(_super) {
    __extends(ResinInvalidParameter, _super);

    function ResinInvalidParameter(name, value, explanation) {
      var message;
      this.name = name;
      this.value = value;
      this.explanation = explanation;

      /**
      		 * @name name
      		 * @type String
      		 * @memberof errors.ResinInvalidParameter
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name value
      		 * @type *
      		 * @memberof errors.ResinInvalidParameter
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name explanation
      		 * @type String
      		 * @memberof errors.ResinInvalidParameter
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinInvalidParameter
      		 * @instance
      		 * @constant
      		 * @default Invalid parameter this.name: this.value. this.explanation.
       */
      message = "Invalid parameter " + this.name + ": " + this.value;
      if (this.explanation != null) {
        message += ". " + this.explanation + ".";
      }
      ResinInvalidParameter.__super__.constructor.call(this, message);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinInvalidParameter
    	 * @instance
    	 * @constant
    	 * @default ResinInvalidParameter
     */

    ResinInvalidParameter.prototype.code = 'ResinInvalidParameter';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinInvalidParameter
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinInvalidParameter.prototype.exitCode = 1;

    return ResinInvalidParameter;

  })(TypedError);


  /**
   * A missing parameter error
   * @class ResinMissingParameter
   * @protected
   * @memberof errors
   *
   * @param {String} name - the missing parameter name
   */

  exports.ResinMissingParameter = ResinMissingParameter = (function(_super) {
    __extends(ResinMissingParameter, _super);

    function ResinMissingParameter(name) {
      this.name = name;

      /**
      		 * @name name
      		 * @type String
      		 * @memberof errors.ResinMissingParameter
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinMissingParameter
      		 * @instance
      		 * @constant
      		 * @default Missing parameter: this.name
       */
      ResinMissingParameter.__super__.constructor.call(this, "Missing parameter: " + this.name);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinMissingParameter
    	 * @instance
    	 * @constant
    	 * @default ResinMissingParameter
     */

    ResinMissingParameter.prototype.code = 'ResinMissingParameter';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinMissingParameter
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinMissingParameter.prototype.exitCode = 1;

    return ResinMissingParameter;

  })(TypedError);


  /**
   * An invalid data key error
   * @class ResinInvalidDataKey
   * @protected
   * @memberof errors
   *
   * @param {String} key - the invalid data key
   */

  exports.ResinInvalidDataKey = ResinInvalidDataKey = (function(_super) {
    __extends(ResinInvalidDataKey, _super);

    function ResinInvalidDataKey(key) {
      this.key = key;

      /**
      		 * @name key
      		 * @type String
      		 * @memberof errors.ResinInvalidDataKey
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinInvalidDataKey
      		 * @instance
      		 * @constant
      		 * @default Invalid data key: this.key
       */
      ResinInvalidDataKey.__super__.constructor.call(this, "Invalid data key: " + this.key);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinInvalidDataKey
    	 * @instance
    	 * @constant
    	 * @default ResinInvalidDataKey
     */

    ResinInvalidDataKey.prototype.code = 'ResinInvalidDataKey';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinInvalidDataKey
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinInvalidDataKey.prototype.exitCode = 1;

    return ResinInvalidDataKey;

  })(TypedError);


  /**
   * An invalid path error
   * @class ResinInvalidPath
   * @protected
   * @memberof errors
   *
   * @param {String} path - the invalid path
   */

  exports.ResinInvalidPath = ResinInvalidPath = (function(_super) {
    __extends(ResinInvalidPath, _super);

    function ResinInvalidPath(path) {
      this.path = path;

      /**
      		 * @name path
      		 * @type String
      		 * @memberof errors.ResinInvalidPath
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinInvalidPath
      		 * @instance
      		 * @constant
      		 * @default Invalid path: this.path
       */
      ResinInvalidPath.__super__.constructor.call(this, "Invalid path: " + this.path);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinInvalidPath
    	 * @instance
    	 * @constant
    	 * @default ResinInvalidPath
     */

    ResinInvalidPath.prototype.code = 'ResinInvalidPath';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinInvalidPath
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinInvalidPath.prototype.exitCode = 1;

    return ResinInvalidPath;

  })(TypedError);


  /**
   * A no such directory error
   * @class ResinNoSuchDirectory
   * @protected
   * @memberof errors
   *
   * @param {String} path - the path that is not a directory
   */

  exports.ResinNoSuchDirectory = ResinNoSuchDirectory = (function(_super) {
    __extends(ResinNoSuchDirectory, _super);

    function ResinNoSuchDirectory(path) {
      this.path = path;

      /**
      		 * @name path
      		 * @type String
      		 * @memberof errors.ResinNoSuchDirectory
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinNoSuchDirectory
      		 * @instance
      		 * @constant
      		 * @default No such directory: this.path
       */
      ResinNoSuchDirectory.__super__.constructor.call(this, "No such directory: " + this.path);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinNoSuchDirectory
    	 * @instance
    	 * @constant
    	 * @default ResinNoSuchDirectory
     */

    ResinNoSuchDirectory.prototype.code = 'ResinNoSuchDirectory';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinNoSuchDirectory
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinNoSuchDirectory.prototype.exitCode = 1;

    return ResinNoSuchDirectory;

  })(TypedError);


  /**
   * An application not found error
   * @class ResinApplicationNotFound
   * @protected
   * @memberof errors
   *
   * @param {String|Number} id - the not found application id
   */

  exports.ResinApplicationNotFound = ResinApplicationNotFound = (function(_super) {
    __extends(ResinApplicationNotFound, _super);

    function ResinApplicationNotFound(id) {
      this.id = id;

      /**
      		 * @name id
      		 * @type String|Number
      		 * @memberof errors.ResinApplicationNotFound
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinApplicationNotFound
      		 * @instance
      		 * @constant
      		 * @default Application not found: this.id
       */
      ResinApplicationNotFound.__super__.constructor.call(this, "Application not found: " + this.id);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinApplicationNotFound
    	 * @instance
    	 * @constant
    	 * @default ResinApplicationNotFound
     */

    ResinApplicationNotFound.prototype.code = 'ResinApplicationNotFound';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinApplicationNotFound
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinApplicationNotFound.prototype.exitCode = 1;

    return ResinApplicationNotFound;

  })(TypedError);


  /**
   * A device not found error
   * @class ResinDeviceNotFound
   * @protected
   * @memberof errors
   *
   * @param {String|Number} id - the not found device id
   */

  exports.ResinDeviceNotFound = ResinDeviceNotFound = (function(_super) {
    __extends(ResinDeviceNotFound, _super);

    function ResinDeviceNotFound(id) {
      this.id = id;

      /**
      		 * @name id
      		 * @type String|Number
      		 * @memberof errors.ResinDeviceNotFound
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinDeviceNotFound
      		 * @instance
      		 * @constant
      		 * @default Device not found: this.id
       */
      ResinDeviceNotFound.__super__.constructor.call(this, "Device not found: " + this.id);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinDeviceNotFound
    	 * @instance
    	 * @constant
    	 * @default ResinDeviceNotFound
     */

    ResinDeviceNotFound.prototype.code = 'ResinDeviceNotFound';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinDeviceNotFound
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinDeviceNotFound.prototype.exitCode = 1;

    return ResinDeviceNotFound;

  })(TypedError);


  /**
   * A key not found error
   * @class ResinKeyNotFound
   * @protected
   * @memberof errors
   *
   * @param {String|Number} id - the not found key id
   */

  exports.ResinKeyNotFound = ResinKeyNotFound = (function(_super) {
    __extends(ResinKeyNotFound, _super);

    function ResinKeyNotFound(id) {
      this.id = id;

      /**
      		 * @name id
      		 * @type String|Number
      		 * @memberof errors.ResinKeyNotFound
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinKeyNotFound
      		 * @instance
      		 * @constant
      		 * @default Key not found: this.id
       */
      ResinKeyNotFound.__super__.constructor.call(this, "Key not found: " + this.id);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinKeyNotFound
    	 * @instance
    	 * @constant
    	 * @default ResinKeyNotFound
     */

    ResinKeyNotFound.prototype.code = 'ResinKeyNotFound';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinKeyNotFound
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinKeyNotFound.prototype.exitCode = 1;

    return ResinKeyNotFound;

  })(TypedError);


  /**
   * A request error
   * @class ResinKeyNotFound
   * @protected
   * @memberof errors
   *
   * @param {String|Object} body - the response body
   */

  exports.ResinRequestError = ResinRequestError = (function(_super) {
    __extends(ResinRequestError, _super);

    function ResinRequestError(body) {
      this.body = body;

      /**
      		 * @name body
      		 * @type String|Object
      		 * @memberof errors.ResinRequestError
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinRequestError
      		 * @instance
      		 * @constant
      		 * @default Request error: this.body
       */
      ResinRequestError.__super__.constructor.call(this, "Request error: " + this.body);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinRequestError
    	 * @instance
    	 * @constant
    	 * @default ResinRequestError
     */

    ResinRequestError.prototype.code = 'ResinRequestError';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinRequestError
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinRequestError.prototype.exitCode = 1;

    return ResinRequestError;

  })(TypedError);


  /**
   * An invalid application error
   * @class ResinInvalidApplication
   * @protected
   * @memberof errors
   *
   * @param {String} application - the invalid application name
   */

  exports.ResinInvalidApplication = ResinInvalidApplication = (function(_super) {
    __extends(ResinInvalidApplication, _super);

    function ResinInvalidApplication(application) {
      this.application = application;

      /**
      		 * @name application
      		 * @type String
      		 * @memberof errors.ResinInvalidApplication
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinInvalidApplication
      		 * @instance
      		 * @constant
      		 * @default Invalid application: this.application
       */
      ResinInvalidApplication.__super__.constructor.call(this, "Invalid application: " + this.application);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinInvalidApplication
    	 * @instance
    	 * @constant
    	 * @default ResinInvalidApplication
     */

    ResinInvalidApplication.prototype.code = 'ResinInvalidApplication';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinInvalidApplication
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinInvalidApplication.prototype.exitCode = 1;

    return ResinInvalidApplication;

  })(TypedError);


  /**
   * A directory not git repository error
   * @class ResinDirectoryNotGitRepository
   * @protected
   * @memberof errors
   *
   * @param {String} directory - the directory path
   */

  exports.ResinDirectoryNotGitRepository = ResinDirectoryNotGitRepository = (function(_super) {
    __extends(ResinDirectoryNotGitRepository, _super);

    function ResinDirectoryNotGitRepository(directory) {
      this.directory = directory;

      /**
      		 * @name directory
      		 * @type String
      		 * @memberof errors.ResinDirectoryNotGitRepository
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinDirectoryNotGitRepository
      		 * @instance
      		 * @constant
      		 * @default Invalid application: this.application
       */
      ResinDirectoryNotGitRepository.__super__.constructor.call(this, "Directory is not a git repository: " + this.directory);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinDirectoryNotGitRepository
    	 * @instance
    	 * @constant
    	 * @default ResinDirectoryNotGitRepository
     */

    ResinDirectoryNotGitRepository.prototype.code = 'ResinDirectoryNotGitRepository';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinDirectoryNotGitRepository
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinDirectoryNotGitRepository.prototype.exitCode = 1;

    return ResinDirectoryNotGitRepository;

  })(TypedError);


  /**
   * A not any error
   * @class ResinNotAny
   * @protected
   * @memberof errors
   *
   * @param {String} resource - the resource name
   */

  exports.ResinNotAny = ResinNotAny = (function(_super) {
    __extends(ResinNotAny, _super);

    function ResinNotAny(resource) {
      this.resource = resource;

      /**
      		 * @name resource
      		 * @type String
      		 * @memberof errors.ResinNotAny
      		 * @instance
      		 * @constant
       */

      /**
      		 * @name message
      		 * @type String
      		 * @memberof errors.ResinNotAny
      		 * @instance
      		 * @constant
      		 * @default You don't have any this.resource
       */
      ResinNotAny.__super__.constructor.call(this, "You don't have any " + this.resource);
    }


    /**
    	 * @name code
    	 * @type String
    	 * @memberof errors.ResinNotAny
    	 * @instance
    	 * @constant
    	 * @default ResinNotAny
     */

    ResinNotAny.prototype.code = 'ResinNotAny';


    /**
    	 * @name exitCode
    	 * @type Number
    	 * @memberof errors.ResinNotAny
    	 * @instance
    	 * @constant
    	 * @default 1
     */

    ResinNotAny.prototype.exitCode = 1;

    return ResinNotAny;

  })(TypedError);

}).call(this);
