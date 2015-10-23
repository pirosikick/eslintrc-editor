/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _inherits = __webpack_require__(1)["default"];
	
	var _createClass = __webpack_require__(6)["default"];
	
	var _classCallCheck = __webpack_require__(9)["default"];
	
	var _interopRequireDefault = __webpack_require__(10)["default"];
	
	var _react = __webpack_require__(11);
	
	var _reactDom = __webpack_require__(12);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _redux = __webpack_require__(13);
	
	var _actionsApp = __webpack_require__(23);
	
	var _reactRedux = __webpack_require__(93);
	
	var _reduxThunk = __webpack_require__(102);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _middlewaresSaveState = __webpack_require__(103);
	
	var _middlewaresSaveState2 = _interopRequireDefault(_middlewaresSaveState);
	
	var _reducersIndex = __webpack_require__(104);
	
	var _reducersIndex2 = _interopRequireDefault(_reducersIndex);
	
	var _componentsApp = __webpack_require__(118);
	
	var _componentsApp2 = _interopRequireDefault(_componentsApp);
	
	"use strict";
	
	var saveToLocalStorage = _middlewaresSaveState2["default"](function (state) {
	  var ecmaOrParser = state.view.get("ecmaOrParser");
	  var view = { ecmaOrParser: ecmaOrParser };
	  var output = state.output.toJS();
	  window.localStorage.eslintrcEditor = JSON.stringify({ output: output, view: view });
	});
	
	var createStoreWithMiddleware = _redux.applyMiddleware(_reduxThunk2["default"], saveToLocalStorage)(_redux.createStore);
	var store = createStoreWithMiddleware(_reducersIndex2["default"]);
	
	if (window.localStorage.eslintrcEditor) {
	  try {
	    var deserialized = JSON.parse(window.localStorage.eslintrcEditor);
	    store.dispatch(_actionsApp.init(deserialized));
	  } catch (e) {}
	}
	
	var Outer = (function (_Component) {
	  function Outer() {
	    _classCallCheck(this, Outer);
	
	    if (_Component != null) {
	      _Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Outer, _Component);
	
	  _createClass(Outer, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        React.createElement(_componentsApp2["default"], null)
	      );
	    }
	  }]);
	
	  return Outer;
	})(_react.Component);
	
	_reactDom2["default"].render(React.createElement(Outer, null), document.getElementById("app"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(2)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global = typeof self != 'undefined' ? self : Function('return this')()
	  , core   = {}
	  , defineProperty = Object.defineProperty
	  , hasOwnProperty = {}.hasOwnProperty
	  , ceil  = Math.ceil
	  , floor = Math.floor
	  , max   = Math.max
	  , min   = Math.min;
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC = !!function(){
	  try {
	    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
	  } catch(e){ /* empty */ }
	}();
	var hide = createDefiner(1);
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	}
	function desc(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return $.setDesc(object, key, desc(bitmap, value));
	  } : simpleSet;
	}
	
	function isObject(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	}
	
	var $ = module.exports = __webpack_require__(5)({
	  g: global,
	  core: core,
	  html: global.document && document.documentElement,
	  // http://jsperf.com/core-js-isobject
	  isObject:   isObject,
	  isFunction: isFunction,
	  that: function(){
	    return this;
	  },
	  // 7.1.4 ToInteger
	  toInteger: toInteger,
	  // 7.1.15 ToLength
	  toLength: function(it){
	    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	  },
	  toIndex: function(index, length){
	    index = toInteger(index);
	    return index < 0 ? max(index + length, 0) : min(index, length);
	  },
	  has: function(it, key){
	    return hasOwnProperty.call(it, key);
	  },
	  create:     Object.create,
	  getProto:   Object.getPrototypeOf,
	  DESC:       DESC,
	  desc:       desc,
	  getDesc:    Object.getOwnPropertyDescriptor,
	  setDesc:    defineProperty,
	  setDescs:   Object.defineProperties,
	  getKeys:    Object.keys,
	  getNames:   Object.getOwnPropertyNames,
	  getSymbols: Object.getOwnPropertySymbols,
	  assertDefined: assertDefined,
	  // Dummy, fix for not array-like ES3 string in es5 module
	  ES5Object: Object,
	  toObject: function(it){
	    return $.ES5Object(assertDefined(it));
	  },
	  hide: hide,
	  def: createDefiner(0),
	  set: global.Symbol ? simpleSet : hide,
	  each: [].forEach
	});
	/* eslint-disable no-undef */
	if(typeof __e != 'undefined')__e = core;
	if(typeof __g != 'undefined')__g = global;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function($){
	  $.FW   = false;
	  $.path = $.core;
	  return $;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(7)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(8), __esModule: true };

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _createStore = __webpack_require__(14);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _utilsCombineReducers = __webpack_require__(16);
	
	var _utilsCombineReducers2 = _interopRequireDefault(_utilsCombineReducers);
	
	var _utilsBindActionCreators = __webpack_require__(20);
	
	var _utilsBindActionCreators2 = _interopRequireDefault(_utilsBindActionCreators);
	
	var _utilsApplyMiddleware = __webpack_require__(21);
	
	var _utilsApplyMiddleware2 = _interopRequireDefault(_utilsApplyMiddleware);
	
	var _utilsCompose = __webpack_require__(22);
	
	var _utilsCompose2 = _interopRequireDefault(_utilsCompose);
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _utilsCombineReducers2['default'];
	exports.bindActionCreators = _utilsBindActionCreators2['default'];
	exports.applyMiddleware = _utilsApplyMiddleware2['default'];
	exports.compose = _utilsCompose2['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createStore;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsIsPlainObject = __webpack_require__(15);
	
	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	exports.ActionTypes = ActionTypes;
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	
	function createStore(reducer, initialState) {
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = initialState;
	  var listeners = [];
	  var isDispatching = false;
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    listeners.push(listener);
	
	    return function unsubscribe() {
	      var index = listeners.indexOf(listener);
	      listeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!_utilsIsPlainObject2['default'](action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    listeners.slice().forEach(function (listener) {
	      return listener();
	    });
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};
	
	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	
	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }
	
	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;
	
	  if (proto === null) {
	    return true;
	  }
	
	  var constructor = proto.constructor;
	
	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}
	
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _createStore = __webpack_require__(14);
	
	var _utilsIsPlainObject = __webpack_require__(15);
	
	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);
	
	var _utilsMapValues = __webpack_require__(18);
	
	var _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);
	
	var _utilsPick = __webpack_require__(19);
	
	var _utilsPick2 = _interopRequireDefault(_utilsPick);
	
	/* eslint-disable no-console */
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateKeyWarningMessage(inputState, outputState, action) {
	  var reducerKeys = Object.keys(outputState);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!_utilsIsPlainObject2['default'](inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + ({}).toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return reducerKeys.indexOf(key) < 0;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	
	function combineReducers(reducers) {
	  var finalReducers = _utilsPick2['default'](reducers, function (val) {
	    return typeof val === 'function';
	  });
	  var sanityError;
	
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  var defaultState = _utilsMapValues2['default'](finalReducers, function () {
	    return undefined;
	  });
	
	  return function combination(state, action) {
	    if (state === undefined) state = defaultState;
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    var finalState = _utilsMapValues2['default'](finalReducers, function (reducer, key) {
	      var newState = reducer(state[key], action);
	      if (typeof newState === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      return newState;
	    });
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateKeyWarningMessage(state, finalState, action);
	      if (warningMessage) {
	        console.error(warningMessage);
	      }
	    }
	
	    return finalState;
	  };
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Applies a function to every key-value pair inside an object.
	 *
	 * @param {Object} obj The source object.
	 * @param {Function} fn The mapper function that receives the value and the key.
	 * @returns {Object} A new object that contains the mapped values for the keys.
	 */
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = mapValues;
	
	function mapValues(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    result[key] = fn(obj[key], key);
	    return result;
	  }, {});
	}
	
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Picks key-value pairs from an object where values satisfy a predicate.
	 *
	 * @param {Object} obj The object to pick from.
	 * @param {Function} fn The predicate the values must satisfy to be copied.
	 * @returns {Object} The object with the values that satisfied the predicate.
	 */
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = pick;
	
	function pick(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    if (fn(obj[key])) {
	      result[key] = obj[key];
	    }
	    return result;
	  }, {});
	}
	
	module.exports = exports["default"];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsMapValues = __webpack_require__(18);
	
	var _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);
	
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null || actionCreators === undefined) {
	    // eslint-disable-line no-eq-null
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  return _utilsMapValues2['default'](actionCreators, function (actionCreator) {
	    return bindActionCreator(actionCreator, dispatch);
	  });
	}
	
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _compose = __webpack_require__(22);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (next) {
	    return function (reducer, initialState) {
	      var store = next(reducer, initialState);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Composes single-argument functions from right to left.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing functions from right to
	 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
	 */
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return function (arg) {
	    return funcs.reduceRight(function (composed, f) {
	      return f(composed);
	    }, arg);
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilRedux = __webpack_require__(24);
	
	var _view = __webpack_require__(84);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _output = __webpack_require__(85);
	
	var _output2 = _interopRequireDefault(_output);
	
	'use strict';
	exports['default'] = _utilRedux.createActions({
	  init: function init(deserialized) {
	    deserialized = deserialized || {};
	    var view = deserialized.view || {};
	    var output = deserialized.output || {};
	    return { view: view, output: output };
	  },
	  reset: function reset() {}
	});
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(25)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	// https://gist.github.com/skevy/8a4ffc3cfdaf5fd68739
	
	var _lodashArrayZipObject = __webpack_require__(32);
	
	var _lodashArrayZipObject2 = _interopRequireDefault(_lodashArrayZipObject);
	
	var _lodashCollectionMap = __webpack_require__(40);
	
	var _lodashCollectionMap2 = _interopRequireDefault(_lodashCollectionMap);
	
	var _lodashObjectMapValues = __webpack_require__(81);
	
	var _lodashObjectMapValues2 = _interopRequireDefault(_lodashObjectMapValues);
	
	var _uniqueid = __webpack_require__(83);
	
	var _uniqueid2 = _interopRequireDefault(_uniqueid);
	
	// Create actions that don't need constants :)
	var createActions = function createActions(actionObj) {
	  var baseId = _uniqueid2['default']();
	  return _lodashArrayZipObject2['default'](_lodashCollectionMap2['default'](actionObj, function (actionCreator, key) {
	    var actionId = '' + baseId + '-' + key;
	    var method = function method() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      var result = actionCreator.apply(undefined, args);
	
	      if (typeof result === 'function') {
	        return result;
	      }
	
	      return _extends({ type: actionId }, result || {});
	    };
	    method._id = actionId;
	    return [key, method];
	  }));
	};
	
	exports.createActions = createActions;
	// Get action ids from actions created with `createActions`
	var getActionIds = function getActionIds(actionCreators) {
	  return _lodashObjectMapValues2['default'](actionCreators, function (value, key) {
	    return value._id;
	  });
	};
	
	exports.getActionIds = getActionIds;
	// Replace switch statements in stores (taken from the Redux README)
	var createReducer = function createReducer(initialState, handlers) {
	  return function (_x, action) {
	    var state = arguments[0] === undefined ? initialState : arguments[0];
	    return handlers[action.type] ? handlers[action.type](state, action) : state;
	  };
	};
	exports.createReducer = createReducer;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$assign = __webpack_require__(26)["default"];
	
	exports["default"] = _Object$assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	exports.__esModule = true;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(27), __esModule: true };

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(28);
	module.exports = __webpack_require__(4).core.Object.assign;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $def = __webpack_require__(29);
	$def($def.S, 'Object', {assign: __webpack_require__(30)});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(4)
	  , global     = $.g
	  , core       = $.core
	  , isFunction = $.isFunction;
	function ctx(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	}
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	function $def(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {}).prototype
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && !isFunction(target[key]))exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp.prototype = C.prototype;
	    }(out);
	    else exp = isProto && isFunction(out) ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports.prototype || (exports.prototype = {}))[key] = out;
	  }
	}
	module.exports = $def;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , enumKeys = __webpack_require__(31);
	// 19.1.2.1 Object.assign(target, source, ...)
	/* eslint-disable no-unused-vars */
	module.exports = Object.assign || function assign(target, source){
	/* eslint-enable no-unused-vars */
	  var T = Object($.assertDefined(target))
	    , l = arguments.length
	    , i = 1;
	  while(l > i){
	    var S      = $.ES5Object(arguments[i++])
	      , keys   = enumKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)T[key = keys[j++]] = S[key];
	  }
	  return T;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getDesc    = $.getDesc
	    , getSymbols = $.getSymbols;
	  if(getSymbols)$.each.call(getSymbols(it), function(key){
	    if(getDesc(it, key).enumerable)keys.push(key);
	  });
	  return keys;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(33);
	
	/**
	 * The inverse of `_.pairs`; this method returns an object composed from arrays
	 * of property names and values. Provide either a single two dimensional array,
	 * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
	 * and one of corresponding values.
	 *
	 * @static
	 * @memberOf _
	 * @alias object
	 * @category Array
	 * @param {Array} props The property names.
	 * @param {Array} [values=[]] The property values.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * _.zipObject([['fred', 30], ['barney', 40]]);
	 * // => { 'fred': 30, 'barney': 40 }
	 *
	 * _.zipObject(['fred', 'barney'], [30, 40]);
	 * // => { 'fred': 30, 'barney': 40 }
	 */
	function zipObject(props, values) {
	  var index = -1,
	      length = props ? props.length : 0,
	      result = {};
	
	  if (length && !values && !isArray(props[0])) {
	    values = [];
	  }
	  while (++index < length) {
	    var key = props[index];
	    if (values) {
	      result[key] = values[index];
	    } else if (key) {
	      result[key[0]] = key[1];
	    }
	  }
	  return result;
	}
	
	module.exports = zipObject;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(34),
	    isLength = __webpack_require__(39),
	    isObjectLike = __webpack_require__(38);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(35);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(36),
	    isObjectLike = __webpack_require__(38);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(37);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 37 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(41),
	    baseCallback = __webpack_require__(42),
	    baseMap = __webpack_require__(75),
	    isArray = __webpack_require__(33);
	
	/**
	 * Creates an array of values by running each element in `collection` through
	 * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * If a property name is provided for `iteratee` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `iteratee` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
	 * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
	 * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
	 * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
	 * `sum`, `uniq`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @alias collect
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function timesThree(n) {
	 *   return n * 3;
	 * }
	 *
	 * _.map([1, 2], timesThree);
	 * // => [3, 6]
	 *
	 * _.map({ 'a': 1, 'b': 2 }, timesThree);
	 * // => [3, 6] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // using the `_.property` callback shorthand
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee, thisArg) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  iteratee = baseCallback(iteratee, thisArg, 3);
	  return func(collection, iteratee);
	}
	
	module.exports = map;


/***/ },
/* 41 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(43),
	    baseMatchesProperty = __webpack_require__(64),
	    bindCallback = __webpack_require__(71),
	    identity = __webpack_require__(72),
	    property = __webpack_require__(73);
	
	/**
	 * The base implementation of `_.callback` which supports specifying the
	 * number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function baseCallback(func, thisArg, argCount) {
	  var type = typeof func;
	  if (type == 'function') {
	    return thisArg === undefined
	      ? func
	      : bindCallback(func, thisArg, argCount);
	  }
	  if (func == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return baseMatches(func);
	  }
	  return thisArg === undefined
	    ? property(func)
	    : baseMatchesProperty(func, thisArg);
	}
	
	module.exports = baseCallback;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(44),
	    getMatchData = __webpack_require__(61),
	    toObject = __webpack_require__(60);
	
	/**
	 * The base implementation of `_.matches` which does not clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];
	
	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      return object[key] === value && (value !== undefined || (key in toObject(object)));
	    };
	  }
	  return function(object) {
	    return baseIsMatch(object, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(45),
	    toObject = __webpack_require__(60);
	
	/**
	 * The base implementation of `_.isMatch` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} matchData The propery names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = toObject(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(46),
	    isObject = __webpack_require__(37),
	    isObjectLike = __webpack_require__(38);
	
	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(47),
	    equalByTag = __webpack_require__(49),
	    equalObjects = __webpack_require__(50),
	    isArray = __webpack_require__(33),
	    isTypedArray = __webpack_require__(59);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);
	
	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);
	
	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
	
	  stackA.pop();
	  stackB.pop();
	
	  return result;
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(48);
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
	
	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalArrays;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 49 */
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        : object == +other;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(51);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;
	
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalObjects;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(34),
	    isArrayLike = __webpack_require__(52),
	    isObject = __webpack_require__(37),
	    shimKeys = __webpack_require__(55);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(53),
	    isLength = __webpack_require__(39);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(54);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 54 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(56),
	    isArray = __webpack_require__(33),
	    isIndex = __webpack_require__(57),
	    isLength = __webpack_require__(39),
	    keysIn = __webpack_require__(58);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(52),
	    isObjectLike = __webpack_require__(38);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 57 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(56),
	    isArray = __webpack_require__(33),
	    isIndex = __webpack_require__(57),
	    isLength = __webpack_require__(39),
	    isObject = __webpack_require__(37);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(39),
	    isObjectLike = __webpack_require__(38);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}
	
	module.exports = isTypedArray;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(37);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(62),
	    pairs = __webpack_require__(63);
	
	/**
	 * Gets the propery names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = pairs(object),
	      length = result.length;
	
	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(37);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(51),
	    toObject = __webpack_require__(60);
	
	/**
	 * Creates a two dimensional array of the key-value pairs for `object`,
	 * e.g. `[[key1, value1], [key2, value2]]`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * _.pairs({ 'barney': 36, 'fred': 40 });
	 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	 */
	function pairs(object) {
	  object = toObject(object);
	
	  var index = -1,
	      props = keys(object),
	      length = props.length,
	      result = Array(length);
	
	  while (++index < length) {
	    var key = props[index];
	    result[index] = [key, object[key]];
	  }
	  return result;
	}
	
	module.exports = pairs;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(65),
	    baseIsEqual = __webpack_require__(45),
	    baseSlice = __webpack_require__(66),
	    isArray = __webpack_require__(33),
	    isKey = __webpack_require__(67),
	    isStrictComparable = __webpack_require__(62),
	    last = __webpack_require__(68),
	    toObject = __webpack_require__(60),
	    toPath = __webpack_require__(69);
	
	/**
	 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to compare.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  var isArr = isArray(path),
	      isCommon = isKey(path) && isStrictComparable(srcValue),
	      pathKey = (path + '');
	
	  path = toPath(path);
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    var key = pathKey;
	    object = toObject(object);
	    if ((isArr || !isCommon) && !(key in object)) {
	      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	      if (object == null) {
	        return false;
	      }
	      key = last(path);
	      object = toObject(object);
	    }
	    return object[key] === srcValue
	      ? (srcValue !== undefined || (key in object))
	      : baseIsEqual(srcValue, object[key], undefined, true);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(60);
	
	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  if (pathKey !== undefined && pathKey in toObject(object)) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  start = start == null ? 0 : (+start || 0);
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = (end === undefined || end > length) ? length : (+end || 0);
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(33),
	    toObject = __webpack_require__(60);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || (object != null && value in toObject(object));
	}
	
	module.exports = isKey;


/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}
	
	module.exports = last;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(70),
	    isArray = __webpack_require__(33);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}
	
	module.exports = toPath;


/***/ },
/* 70 */
/***/ function(module, exports) {

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}
	
	module.exports = baseToString;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(72);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 72 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(54),
	    basePropertyDeep = __webpack_require__(74),
	    isKey = __webpack_require__(67);
	
	/**
	 * Creates a function that returns the property value at `path` on a
	 * given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(65),
	    toPath = __webpack_require__(69);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  var pathKey = (path + '');
	  path = toPath(path);
	  return function(object) {
	    return baseGet(object, path, pathKey);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(76),
	    isArrayLike = __webpack_require__(52);
	
	/**
	 * The base implementation of `_.map` without support for callback shorthands
	 * and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];
	
	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}
	
	module.exports = baseMap;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(77),
	    createBaseEach = __webpack_require__(80);
	
	/**
	 * The base implementation of `_.forEach` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object|string} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(78),
	    keys = __webpack_require__(51);
	
	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(79);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(60);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(53),
	    isLength = __webpack_require__(39),
	    toObject = __webpack_require__(60);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    var length = collection ? getLength(collection) : 0;
	    if (!isLength(length)) {
	      return eachFunc(collection, iteratee);
	    }
	    var index = fromRight ? length : -1,
	        iterable = toObject(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var createObjectMapper = __webpack_require__(82);
	
	/**
	 * Creates an object with the same keys as `object` and values generated by
	 * running each own enumerable property of `object` through `iteratee`. The
	 * iteratee function is bound to `thisArg` and invoked with three arguments:
	 * (value, key, object).
	 *
	 * If a property name is provided for `iteratee` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `iteratee` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Object} Returns the new mapped object.
	 * @example
	 *
	 * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	 *   return n * 3;
	 * });
	 * // => { 'a': 3, 'b': 6 }
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * // using the `_.property` callback shorthand
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	var mapValues = createObjectMapper();
	
	module.exports = mapValues;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var baseCallback = __webpack_require__(42),
	    baseForOwn = __webpack_require__(77);
	
	/**
	 * Creates a function for `_.mapKeys` or `_.mapValues`.
	 *
	 * @private
	 * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	 * @returns {Function} Returns the new map function.
	 */
	function createObjectMapper(isMapKeys) {
	  return function(object, iteratee, thisArg) {
	    var result = {};
	    iteratee = baseCallback(iteratee, thisArg, 3);
	
	    baseForOwn(object, function(value, key, object) {
	      var mapped = iteratee(value, key, object);
	      key = isMapKeys ? mapped : key;
	      value = isMapKeys ? value : mapped;
	      result[key] = value;
	    });
	    return result;
	  };
	}
	
	module.exports = createObjectMapper;


/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';
	
	
	var count = 0;
	
	/**
	 * Generate a unique ID.
	 *
	 * Optionally pass a prefix to prepend, a suffix to append, or a
	 * multiplier to use on the ID.
	 *
	 * ```js
	 * uniqueId(); //=> '25'
	 *
	 * uniqueId({prefix: 'apple_'});
	 * //=> 'apple_10'
	 *
	 * uniqueId({suffix: '_orange'});
	 * //=> '10_orange'
	 *
	 * uniqueId({multiplier: 5});
	 * //=> 5, 10, 15, 20...
	 * ```
	 *
	 * To reset the `id` to zero, do `id.reset()`.
	 *
	 * @param  {Object} `options` Optionally pass a `prefix`, `suffix` and/or `multiplier.
	 * @return {String} The unique id.
	 * @api public
	 */
	
	var id = module.exports = function (options) {
	  options = options || {};
	
	  var prefix = options.prefix;
	  var suffix = options.suffix;
	
	  var id = ++count * (options.multiplier || 1);
	
	  if (prefix == null) {
	    prefix = '';
	  }
	
	  if (suffix == null) {
	    suffix = '';
	  }
	
	  return String(prefix) + id + String(suffix);
	};
	
	
	id.reset = function() {
	  return count = 0;
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilRedux = __webpack_require__(24);
	
	'use strict';
	
	var actions = _utilRedux.createActions({
	  init: function init() {
	    return function (dispatch) {
	      actions.loadDocument('docs/user-guide/configuring.md')(dispatch);
	    };
	  },
	  selectMenuItem: function selectMenuItem(name) {
	    return { name: name };
	  },
	  loadDocument: function loadDocument(url) {
	    return function (dispatch) {
	      return fetch(url).then(function (res) {
	        return res.text();
	      }).then(function (md) {
	        dispatch(actions.setDocumentMarkdown(url, md));
	      });
	    };
	  },
	  openDocument: function openDocument() {
	    var url = arguments[0] === undefined ? 'docs/user-guide/configuring.md' : arguments[0];
	
	    return function (dispatch) {
	      return actions.loadDocument(url)(dispatch).then(function (md) {
	        dispatch(actions.selectMenuItem('document'));
	      });
	    };
	  },
	  setDocumentMarkdown: function setDocumentMarkdown(url, md) {
	    return { url: url, md: md };
	  },
	  openRuleDocument: function openRuleDocument(name) {
	    return actions.openDocument('docs/rules/' + name + '.md');
	  },
	  setEcmaOrParser: function setEcmaOrParser(value) {
	    return { value: value };
	  }
	});
	
	exports['default'] = actions;
	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilRedux = __webpack_require__(24);
	
	var _lodashCollectionForEachRight = __webpack_require__(86);
	
	var _lodashCollectionForEachRight2 = _interopRequireDefault(_lodashCollectionForEachRight);
	
	var _lodashLangIsNull = __webpack_require__(92);
	
	var _lodashLangIsNull2 = _interopRequireDefault(_lodashLangIsNull);
	
	'use strict';
	exports['default'] = _utilRedux.createActions({
	  init: function init(output) {
	    return { output: output };
	  },
	  reset: function reset() {},
	  setEnv: function setEnv() {
	    var env = arguments[0] === undefined ? [] : arguments[0];
	    return { env: env };
	  },
	  setEcmaFeatures: function setEcmaFeatures() {
	    var ecmaFeatures = arguments[0] === undefined ? [] : arguments[0];
	    return { ecmaFeatures: ecmaFeatures };
	  },
	  setParser: function setParser(parser) {
	    return { parser: parser };
	  },
	  setGlobals: function setGlobals(globals) {
	    return { globals: globals };
	  },
	  setRules: function setRules(rules) {
	    return { rules: rules };
	  },
	  setEcmaOrParser: function setEcmaOrParser(value) {
	    return { value: value };
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEachRight = __webpack_require__(87),
	    baseEachRight = __webpack_require__(88),
	    createForEach = __webpack_require__(91);
	
	/**
	 * This method is like `_.forEach` except that it iterates over elements of
	 * `collection` from right to left.
	 *
	 * @static
	 * @memberOf _
	 * @alias eachRight
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Array|Object|string} Returns `collection`.
	 * @example
	 *
	 * _([1, 2]).forEachRight(function(n) {
	 *   console.log(n);
	 * }).value();
	 * // => logs each value from right to left and returns the array
	 */
	var forEachRight = createForEach(arrayEachRight, baseEachRight);
	
	module.exports = forEachRight;


/***/ },
/* 87 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEachRight` for arrays without support for
	 * callback shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEachRight(array, iteratee) {
	  var length = array.length;
	
	  while (length--) {
	    if (iteratee(array[length], length, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEachRight;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwnRight = __webpack_require__(89),
	    createBaseEach = __webpack_require__(80);
	
	/**
	 * The base implementation of `_.forEachRight` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object|string} Returns `collection`.
	 */
	var baseEachRight = createBaseEach(baseForOwnRight, true);
	
	module.exports = baseEachRight;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var baseForRight = __webpack_require__(90),
	    keys = __webpack_require__(51);
	
	/**
	 * The base implementation of `_.forOwnRight` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwnRight(object, iteratee) {
	  return baseForRight(object, iteratee, keys);
	}
	
	module.exports = baseForOwnRight;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(79);
	
	/**
	 * This function is like `baseFor` except that it iterates over properties
	 * in the opposite order.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseForRight = createBaseFor(true);
	
	module.exports = baseForRight;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(71),
	    isArray = __webpack_require__(33);
	
	/**
	 * Creates a function for `_.forEach` or `_.forEachRight`.
	 *
	 * @private
	 * @param {Function} arrayFunc The function to iterate over an array.
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @returns {Function} Returns the new each function.
	 */
	function createForEach(arrayFunc, eachFunc) {
	  return function(collection, iteratee, thisArg) {
	    return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	      ? arrayFunc(collection, iteratee)
	      : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	  };
	}
	
	module.exports = createForEach;


/***/ },
/* 92 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is `null`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	 * @example
	 *
	 * _.isNull(null);
	 * // => true
	 *
	 * _.isNull(void 0);
	 * // => false
	 */
	function isNull(value) {
	  return value === null;
	}
	
	module.exports = isNull;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _componentsProvider = __webpack_require__(94);
	
	exports.Provider = _interopRequire(_componentsProvider);
	
	var _componentsConnect = __webpack_require__(96);
	
	exports.connect = _interopRequire(_componentsConnect);

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(11);
	
	var _utilsStoreShape = __webpack_require__(95);
	
	var _utilsStoreShape2 = _interopRequireDefault(_utilsStoreShape);
	
	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	
	  didWarnAboutReceivingStore = true;
	  console.error( // eslint-disable-line no-console
	  '<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/rackt/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}
	
	var Provider = (function (_Component) {
	  _inherits(Provider, _Component);
	
	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };
	
	  function Provider(props, context) {
	    _classCallCheck(this, Provider);
	
	    _Component.call(this, props, context);
	    this.store = props.store;
	  }
	
	  Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;
	
	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	
	  Provider.prototype.render = function render() {
	    var children = this.props.children;
	
	    return _react.Children.only(children);
	  };
	
	  return Provider;
	})(_react.Component);
	
	exports['default'] = Provider;
	
	Provider.propTypes = {
	  store: _utilsStoreShape2['default'].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _utilsStoreShape2['default'].isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(11);
	
	exports['default'] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});
	module.exports = exports['default'];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = connect;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsStoreShape = __webpack_require__(95);
	
	var _utilsStoreShape2 = _interopRequireDefault(_utilsStoreShape);
	
	var _utilsShallowEqual = __webpack_require__(97);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	var _utilsIsPlainObject = __webpack_require__(98);
	
	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);
	
	var _utilsWrapActionCreators = __webpack_require__(99);
	
	var _utilsWrapActionCreators2 = _interopRequireDefault(_utilsWrapActionCreators);
	
	var _hoistNonReactStatics = __webpack_require__(100);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant = __webpack_require__(101);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var defaultMapStateToProps = function defaultMapStateToProps() {
	  return {};
	};
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	
	// Helps track hot reloading.
	var nextVersion = 0;
	
	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	  var shouldSubscribe = Boolean(mapStateToProps);
	  var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
	  var finalMapDispatchToProps = _utilsIsPlainObject2['default'](mapDispatchToProps) ? _utilsWrapActionCreators2['default'](mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;
	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var shouldUpdateStateProps = finalMapStateToProps.length > 1;
	  var shouldUpdateDispatchProps = finalMapDispatchToProps.length > 1;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;
	
	  // Helps track hot reloading.
	  var version = nextVersion++;
	
	  function computeStateProps(store, props) {
	    var state = store.getState();
	    var stateProps = shouldUpdateStateProps ? finalMapStateToProps(state, props) : finalMapStateToProps(state);
	
	    _invariant2['default'](_utilsIsPlainObject2['default'](stateProps), '`mapStateToProps` must return an object. Instead received %s.', stateProps);
	    return stateProps;
	  }
	
	  function computeDispatchProps(store, props) {
	    var dispatch = store.dispatch;
	
	    var dispatchProps = shouldUpdateDispatchProps ? finalMapDispatchToProps(dispatch, props) : finalMapDispatchToProps(dispatch);
	
	    _invariant2['default'](_utilsIsPlainObject2['default'](dispatchProps), '`mapDispatchToProps` must return an object. Instead received %s.', dispatchProps);
	    return dispatchProps;
	  }
	
	  function _computeNextState(stateProps, dispatchProps, parentProps) {
	    var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	    _invariant2['default'](_utilsIsPlainObject2['default'](mergedProps), '`mergeProps` must return an object. Instead received %s.', mergedProps);
	    return mergedProps;
	  }
	
	  return function wrapWithConnect(WrappedComponent) {
	    var Connect = (function (_Component) {
	      _inherits(Connect, _Component);
	
	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        if (!pure) {
	          this.updateStateProps(nextProps);
	          this.updateDispatchProps(nextProps);
	          this.updateState(nextProps);
	          return true;
	        }
	
	        var storeChanged = nextState.storeState !== this.state.storeState;
	        var propsChanged = !_utilsShallowEqual2['default'](nextProps, this.props);
	        var mapStateProducedChange = false;
	        var dispatchPropsChanged = false;
	
	        if (storeChanged || propsChanged && shouldUpdateStateProps) {
	          mapStateProducedChange = this.updateStateProps(nextProps);
	        }
	
	        if (propsChanged && shouldUpdateDispatchProps) {
	          dispatchPropsChanged = this.updateDispatchProps(nextProps);
	        }
	
	        if (propsChanged || mapStateProducedChange || dispatchPropsChanged) {
	          this.updateState(nextProps);
	          return true;
	        }
	
	        return false;
	      };
	
	      function Connect(props, context) {
	        _classCallCheck(this, Connect);
	
	        _Component.call(this, props, context);
	        this.version = version;
	        this.store = props.store || context.store;
	
	        _invariant2['default'](this.store, 'Could not find "store" in either the context or ' + ('props of "' + this.constructor.displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + this.constructor.displayName + '".'));
	
	        this.stateProps = computeStateProps(this.store, props);
	        this.dispatchProps = computeDispatchProps(this.store, props);
	        this.state = { storeState: null };
	        this.updateState();
	      }
	
	      Connect.prototype.computeNextState = function computeNextState() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	        return _computeNextState(this.stateProps, this.dispatchProps, props);
	      };
	
	      Connect.prototype.updateStateProps = function updateStateProps() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	        var nextStateProps = computeStateProps(this.store, props);
	        if (_utilsShallowEqual2['default'](nextStateProps, this.stateProps)) {
	          return false;
	        }
	
	        this.stateProps = nextStateProps;
	        return true;
	      };
	
	      Connect.prototype.updateDispatchProps = function updateDispatchProps() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	        var nextDispatchProps = computeDispatchProps(this.store, props);
	        if (_utilsShallowEqual2['default'](nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }
	
	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };
	
	      Connect.prototype.updateState = function updateState() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	        this.nextState = this.computeNextState(props);
	      };
	
	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };
	
	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };
	
	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };
	
	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };
	
	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	      };
	
	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }
	
	        this.setState({
	          storeState: this.store.getState()
	        });
	      };
	
	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        _invariant2['default'](withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');
	
	        return this.refs.wrappedInstance;
	      };
	
	      Connect.prototype.render = function render() {
	        var ref = withRef ? 'wrappedInstance' : null;
	        return _react2['default'].createElement(WrappedComponent, _extends({}, this.nextState, { ref: ref }));
	      };
	
	      return Connect;
	    })(_react.Component);
	
	    Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _utilsStoreShape2['default']
	    };
	    Connect.propTypes = {
	      store: _utilsStoreShape2['default']
	    };
	
	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }
	
	        // We are hot reloading!
	        this.version = version;
	
	        // Update the state and bindings.
	        this.trySubscribe();
	        this.updateStateProps();
	        this.updateDispatchProps();
	        this.updateState();
	      };
	    }
	
	    return _hoistNonReactStatics2['default'](Connect, WrappedComponent);
	  };
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ },
/* 97 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = shallowEqual;
	
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports["default"];

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};
	
	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	
	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }
	
	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;
	
	  if (proto === null) {
	    return true;
	  }
	
	  var constructor = proto.constructor;
	
	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}
	
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = wrapActionCreators;
	
	var _redux = __webpack_require__(13);
	
	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return _redux.bindActionCreators(actionCreators, dispatch);
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    var keys = Object.getOwnPropertyNames(sourceComponent);
	    for (var i=0; i<keys.length; ++i) {
	        if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	            targetComponent[keys[i]] = sourceComponent[keys[i]];
	        }
	    }
	
	    return targetComponent;
	};


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ },
/* 102 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = thunkMiddleware;
	
	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;
	
	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	'use strict';
	
	var saveState = function saveState(save) {
	  var currentState = undefined;
	
	  window.addEventListener('unload', function () {
	    return currentState && save(currentState);
	  });
	
	  return function (store) {
	    return function (next) {
	      return function (action) {
	        var result = next(action);
	        currentState = store.getState();
	        return result;
	      };
	    };
	  };
	};
	
	exports['default'] = saveState;
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _redux = __webpack_require__(13);
	
	var _view = __webpack_require__(105);
	
	var _view2 = _interopRequireDefault(_view);
	
	var _output = __webpack_require__(108);
	
	var _output2 = _interopRequireDefault(_output);
	
	'use strict';
	exports['default'] = _redux.combineReducers({ view: _view2['default'], output: _output2['default'] });
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(106)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createReducer;
	
	var _immutable = __webpack_require__(107);
	
	var _utilRedux = __webpack_require__(24);
	
	var _actionsApp = __webpack_require__(23);
	
	var _actionsApp2 = _interopRequireDefault(_actionsApp);
	
	var _actionsView = __webpack_require__(84);
	
	var _actionsView2 = _interopRequireDefault(_actionsView);
	
	'use strict';
	
	var _getActionIds = _utilRedux.getActionIds(_actionsApp2['default']);
	
	var init = _getActionIds.init;
	
	var _getActionIds2 = _utilRedux.getActionIds(_actionsView2['default']);
	
	var selectMenuItem = _getActionIds2.selectMenuItem;
	var showPreview = _getActionIds2.showPreview;
	var openDocument = _getActionIds2.openDocument;
	var openRuleDocument = _getActionIds2.openRuleDocument;
	var setDocumentMarkdown = _getActionIds2.setDocumentMarkdown;
	var setEcmaOrParser = _getActionIds2.setEcmaOrParser;
	
	var initialState = _immutable.Map({
	  selectedMenuItem: 'preview',
	  documentUrl: '',
	  documentMarkdown: '',
	  ecmaOrParser: 'parser'
	});
	
	exports['default'] = _utilRedux.createReducer(initialState, (_createReducer = {}, _defineProperty(_createReducer, init, function (state, _ref) {
	  var view = _ref.view;
	  return state.merge(view);
	}), _defineProperty(_createReducer, selectMenuItem, function (state, action) {
	  return state.set('selectedMenuItem', action.name);
	}), _defineProperty(_createReducer, showPreview, function (state, action) {
	  return state.set('selectedMenuItem', 'preview');
	}), _defineProperty(_createReducer, setDocumentMarkdown, function (state, action) {
	  return state.merge({
	    documentUrl: action.url,
	    documentMarkdown: action.md
	  });
	}), _defineProperty(_createReducer, openRuleDocument, function (state, action) {
	  return state.merge({
	    selectedMenuItem: 'document',
	    documentUrl: action.url || state.get('documentUrl')
	  });
	}), _defineProperty(_createReducer, setEcmaOrParser, function (state, action) {
	  return state.set('ecmaOrParser', action.value);
	}), _createReducer));
	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(7)["default"];
	
	exports["default"] = function (obj, key, value) {
	  return _Object$defineProperty(obj, key, {
	    value: value,
	    enumerable: true,
	    configurable: true,
	    writable: true
	  });
	};
	
	exports.__esModule = true;

/***/ },
/* 107 */
/***/ function(module, exports) {

	module.exports = Immutable;

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _defineProperty = __webpack_require__(106)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createReducer;
	
	var _immutable = __webpack_require__(107);
	
	var _lodashLangIsObject = __webpack_require__(37);
	
	var _lodashLangIsObject2 = _interopRequireDefault(_lodashLangIsObject);
	
	var _lodashLangIsArray = __webpack_require__(33);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	var _lodashCollectionReduce = __webpack_require__(109);
	
	var _lodashCollectionReduce2 = _interopRequireDefault(_lodashCollectionReduce);
	
	var _utilRedux = __webpack_require__(24);
	
	var _actionsApp = __webpack_require__(23);
	
	var _actionsApp2 = _interopRequireDefault(_actionsApp);
	
	var _actionsEnv = __webpack_require__(113);
	
	var _actionsEnv2 = _interopRequireDefault(_actionsEnv);
	
	var _actionsGlobals = __webpack_require__(114);
	
	var _actionsGlobals2 = _interopRequireDefault(_actionsGlobals);
	
	var _actionsEcmaFeatures = __webpack_require__(115);
	
	var _actionsEcmaFeatures2 = _interopRequireDefault(_actionsEcmaFeatures);
	
	var _actionsParser = __webpack_require__(116);
	
	var _actionsParser2 = _interopRequireDefault(_actionsParser);
	
	var _actionsRule = __webpack_require__(117);
	
	var _actionsRule2 = _interopRequireDefault(_actionsRule);
	
	'use strict';
	
	var app = _utilRedux.getActionIds(_actionsApp2['default']);
	var env = _utilRedux.getActionIds(_actionsEnv2['default']);
	var globals = _utilRedux.getActionIds(_actionsGlobals2['default']);
	var ecmaFeatures = _utilRedux.getActionIds(_actionsEcmaFeatures2['default']);
	var parser = _utilRedux.getActionIds(_actionsParser2['default']);
	var rule = _utilRedux.getActionIds(_actionsRule2['default']);
	
	var initialState = _immutable.Map({
	  env: [],
	  globals: _immutable.Map({}),
	  ecmaFeatures: [],
	  parser: null,
	  rules: _immutable.Map({})
	});
	
	exports['default'] = _utilRedux.createReducer(initialState, (_createReducer = {}, _defineProperty(_createReducer, app.init, function (state, _ref) {
	  var output = _ref.output;
	  return _lodashLangIsObject2['default'](output) ? state.merge(output) : state;
	}), _defineProperty(_createReducer, app.reset, function () {
	  return initialState;
	}), _defineProperty(_createReducer, env.change, function (state, action) {
	  return state.set('env', action.values);
	}), _defineProperty(_createReducer, globals.add, function (state, _ref2) {
	  var name = _ref2.name;
	  return state.setIn(['globals', name], true);
	}), _defineProperty(_createReducer, globals.change, function (state, _ref3) {
	  var name = _ref3.name;
	  var value = _ref3.value;
	  return state.setIn(['globals', name], value);
	}), _defineProperty(_createReducer, globals.remove, function (state, _ref4) {
	  var name = _ref4.name;
	  return state.deleteIn(['globals', name]);
	}), _defineProperty(_createReducer, ecmaFeatures.change, function (state, _ref5) {
	  var values = _ref5.values;
	  return state.set('ecmaFeatures', values);
	}), _defineProperty(_createReducer, parser.change, function (state, _ref6) {
	  var value = _ref6.value;
	  return state.set('parser', value);
	}), _defineProperty(_createReducer, rule.changeStatus, function (state, _ref7) {
	  var name = _ref7.name;
	  var status = _ref7.status;
	
	  if (!state.hasIn(['rules', name])) {
	    state = state.setIn(['rules', name], _immutable.List());
	  }
	  return state.setIn(['rules', name, 0], status);
	}), _defineProperty(_createReducer, rule.changeArgs, function (state, _ref8) {
	  var name = _ref8.name;
	  var args = _ref8.args;
	
	  return _lodashCollectionReduce2['default'](args, function (state, arg, index) {
	    return state.setIn(['rules', name, index + 1], arg);
	  }, state);
	}), _defineProperty(_createReducer, rule.remove, function (state, _ref9) {
	  var name = _ref9.name;
	  return state.deleteIn(['rules', name]);
	}), _createReducer));
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var arrayReduce = __webpack_require__(110),
	    baseEach = __webpack_require__(76),
	    createReduce = __webpack_require__(111);
	
	/**
	 * Reduces `collection` to a value which is the accumulated result of running
	 * each element in `collection` through `iteratee`, where each successive
	 * invocation is supplied the return value of the previous. If `accumulator`
	 * is not provided the first element of `collection` is used as the initial
	 * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
	 * (accumulator, value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.reduce`, `_.reduceRight`, and `_.transform`.
	 *
	 * The guarded methods are:
	 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `sortByAll`,
	 * and `sortByOrder`
	 *
	 * @static
	 * @memberOf _
	 * @alias foldl, inject
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {*} Returns the accumulated value.
	 * @example
	 *
	 * _.reduce([1, 2], function(total, n) {
	 *   return total + n;
	 * });
	 * // => 3
	 *
	 * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
	 *   result[key] = n * 3;
	 *   return result;
	 * }, {});
	 * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
	 */
	var reduce = createReduce(arrayReduce, baseEach);
	
	module.exports = reduce;


/***/ },
/* 110 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initFromArray] Specify using the first element of `array`
	 *  as the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initFromArray) {
	  var index = -1,
	      length = array.length;
	
	  if (initFromArray && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}
	
	module.exports = arrayReduce;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var baseCallback = __webpack_require__(42),
	    baseReduce = __webpack_require__(112),
	    isArray = __webpack_require__(33);
	
	/**
	 * Creates a function for `_.reduce` or `_.reduceRight`.
	 *
	 * @private
	 * @param {Function} arrayFunc The function to iterate over an array.
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @returns {Function} Returns the new each function.
	 */
	function createReduce(arrayFunc, eachFunc) {
	  return function(collection, iteratee, accumulator, thisArg) {
	    var initFromArray = arguments.length < 3;
	    return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	      ? arrayFunc(collection, iteratee, accumulator, initFromArray)
	      : baseReduce(collection, baseCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
	  };
	}
	
	module.exports = createReduce;


/***/ },
/* 112 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.reduce` and `_.reduceRight` without support
	 * for callback shorthands and `this` binding, which iterates over `collection`
	 * using the provided `eachFunc`.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} accumulator The initial value.
	 * @param {boolean} initFromCollection Specify using the first or last element
	 *  of `collection` as the initial value.
	 * @param {Function} eachFunc The function to iterate over `collection`.
	 * @returns {*} Returns the accumulated value.
	 */
	function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
	  eachFunc(collection, function(value, index, collection) {
	    accumulator = initFromCollection
	      ? (initFromCollection = false, value)
	      : iteratee(accumulator, value, index, collection);
	  });
	  return accumulator;
	}
	
	module.exports = baseReduce;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilRedux = __webpack_require__(24);
	
	'use strict';
	
	var actions = _utilRedux.createActions({
	  change: function change(values) {
	    return { values: values };
	  } });
	
	exports['default'] = actions;
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilRedux = __webpack_require__(24);
	
	'use strict';
	
	var actions = _utilRedux.createActions({
	  add: function add(name) {
	    return { name: name };
	  },
	  change: function change(name, value) {
	    return { name: name, value: value };
	  },
	  remove: function remove(name) {
	    return { name: name };
	  }
	});
	
	exports['default'] = actions;
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilRedux = __webpack_require__(24);
	
	'use strict';
	
	var actions = _utilRedux.createActions({
	  reset: function reset() {},
	  change: function change(values) {
	    return { values: values };
	  } });
	
	exports['default'] = actions;
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilRedux = __webpack_require__(24);
	
	'use strict';
	
	var actions = _utilRedux.createActions({
	  reset: function reset() {},
	  change: function change(value) {
	    return { value: value };
	  } });
	
	exports['default'] = actions;
	module.exports = exports['default'];

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _utilRedux = __webpack_require__(24);
	
	var _view = __webpack_require__(84);
	
	var _view2 = _interopRequireDefault(_view);
	
	'use strict';
	
	var actions = _utilRedux.createActions({
	  changeStatus: function changeStatus(name, status) {
	    return { name: name, status: status };
	  },
	  changeArgs: function changeArgs(name, args) {
	    return { name: name, args: args };
	  },
	  remove: function remove(name) {
	    return { name: name };
	  },
	  openDocument: function openDocument(name) {
	    return _view2['default'].openDocument('docs/rules/' + name + '.md');
	  }
	});
	
	exports['default'] = actions;
	module.exports = exports['default'];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(1)['default'];
	
	var _createClass = __webpack_require__(6)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _reactRedux = __webpack_require__(93);
	
	var _actionsView = __webpack_require__(84);
	
	var _Header = __webpack_require__(126);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Wrapper = __webpack_require__(127);
	
	var _Wrapper2 = _interopRequireDefault(_Wrapper);
	
	var _Main = __webpack_require__(132);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _SideMenu = __webpack_require__(133);
	
	var _SideMenu2 = _interopRequireDefault(_SideMenu);
	
	var _OptionGroup = __webpack_require__(119);
	
	var _OptionGroup2 = _interopRequireDefault(_OptionGroup);
	
	var _CheckList = __webpack_require__(134);
	
	var _CheckList2 = _interopRequireDefault(_CheckList);
	
	var _RadioSet = __webpack_require__(163);
	
	var _RadioSet2 = _interopRequireDefault(_RadioSet);
	
	var _Globals = __webpack_require__(164);
	
	var _Globals2 = _interopRequireDefault(_Globals);
	
	var _Env = __webpack_require__(165);
	
	var _Env2 = _interopRequireDefault(_Env);
	
	var _EcmaFeatures = __webpack_require__(170);
	
	var _EcmaFeatures2 = _interopRequireDefault(_EcmaFeatures);
	
	var _Parser = __webpack_require__(171);
	
	var _Parser2 = _interopRequireDefault(_Parser);
	
	var _MarkdownViewer = __webpack_require__(172);
	
	var _MarkdownViewer2 = _interopRequireDefault(_MarkdownViewer);
	
	var _Preview = __webpack_require__(190);
	
	var _Preview2 = _interopRequireDefault(_Preview);
	
	var _Rules = __webpack_require__(193);
	
	var _Rules2 = _interopRequireDefault(_Rules);
	
	var _Menu = __webpack_require__(200);
	
	var _constantsEslintRuleSchemaJson = __webpack_require__(201);
	
	var _constantsEslintRuleSchemaJson2 = _interopRequireDefault(_constantsEslintRuleSchemaJson);
	
	var App = (function (_Component) {
	  function App() {
	    _classCallCheck(this, _App);
	
	    if (_Component != null) {
	      _Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(App, _Component);
	
	  var _App = App;
	
	  _createClass(_App, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var view = _props.view;
	      var output = _props.output;
	      var dispatch = _props.dispatch;
	
	      return React.createElement(
	        'div',
	        { className: 'app' },
	        React.createElement(
	          _Wrapper2['default'],
	          { className: 'pure-g' },
	          React.createElement(
	            _Main2['default'],
	            { className: 'pure-u-17-24' },
	            React.createElement(_Menu.Menu, { selectedItem: view.selectedMenuItem, onAction: dispatch }),
	            React.createElement(
	              'div',
	              { className: 'main__contents' },
	              (function (selectedMenuItem) {
	                if (selectedMenuItem === 'preview') {
	                  return React.createElement(_Preview2['default'], {
	                    target: output,
	                    ecmaOrParser: view.ecmaOrParser,
	                    onAction: dispatch });
	                } else {
	                  return React.createElement(_MarkdownViewer2['default'], {
	                    url: view.documentUrl,
	                    md: view.documentMarkdown,
	                    onAction: dispatch });
	                }
	              })(view.selectedMenuItem)
	            )
	          ),
	          React.createElement(
	            _SideMenu2['default'],
	            { className: 'pure-u-7-24' },
	            React.createElement(
	              _OptionGroup2['default'],
	              { name: 'Environments' },
	              React.createElement(_Env2['default'], { values: output.env, onAction: dispatch })
	            ),
	            React.createElement(
	              _OptionGroup2['default'],
	              { name: 'Globals' },
	              React.createElement(_Globals2['default'], { value: output.globals, onAction: dispatch })
	            ),
	            React.createElement(
	              _OptionGroup2['default'],
	              { name: 'ecmaFeatures | parser' },
	              React.createElement(_RadioSet2['default'], {
	                name: 'ecma-or-parser',
	                options: [{ value: '', label: 'none' }, { value: 'ecmaFeatures', label: 'use ecmaFeatures option' }, { value: 'parser', label: 'use parser option' }],
	                defaultValue: view.ecmaOrParser,
	                onChange: function (_ref) {
	                  var value = _ref.value;
	                  return dispatch(_actionsView.setEcmaOrParser(value));
	                } }),
	              (function (ecmaOrParser) {
	                if (ecmaOrParser === 'ecmaFeatures') {
	                  return React.createElement(
	                    'div',
	                    { className: 'option' },
	                    React.createElement(
	                      'h4',
	                      { className: 'option__title' },
	                      'ecmaFeatures'
	                    ),
	                    React.createElement(_EcmaFeatures2['default'], { values: output.ecmaFeatures, onAction: dispatch })
	                  );
	                } else if (ecmaOrParser === 'parser') {
	                  return React.createElement(
	                    'div',
	                    { className: 'option parser-option' },
	                    React.createElement(
	                      'h4',
	                      { className: 'option__title' },
	                      'parser'
	                    ),
	                    React.createElement(_Parser2['default'], { value: output.parser, onAction: dispatch })
	                  );
	                }
	              })(view.ecmaOrParser)
	            ),
	            React.createElement(
	              _OptionGroup2['default'],
	              { name: 'Rules' },
	              React.createElement(_Rules2['default'], { value: output.rules, schema: _constantsEslintRuleSchemaJson2['default'], onAction: dispatch })
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  App = _reactRedux.connect(function (state) {
	    return {
	      view: state.view.toJS(),
	      output: state.output.toJS() };
	  })(App) || App;
	  return App;
	})(_react.Component);
	
	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(1)['default'];
	
	var _createClass = __webpack_require__(6)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _get = __webpack_require__(120)['default'];
	
	var _defineProperty = __webpack_require__(106)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	'use strict';
	
	var Icon = (function (_Component) {
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    if (_Component != null) {
	      _Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Icon, _Component);
	
	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var type = _props.type;
	      var className = _props.className;
	
	      return _react2['default'].createElement('i', { className: _classnames2['default']('fa fa-' + type, className) });
	    }
	  }]);
	
	  return Icon;
	})(_react.Component);
	
	var OptionGroup = (function (_Component2) {
	  function OptionGroup(props) {
	    _classCallCheck(this, OptionGroup);
	
	    _get(Object.getPrototypeOf(OptionGroup.prototype), 'constructor', this).call(this, props);
	
	    this.state = { opened: props.defaultOpened || false };
	  }
	
	  _inherits(OptionGroup, _Component2);
	
	  _createClass(OptionGroup, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.setState({ opened: !this.state.opened });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var prefix = 'option-group';
	
	      var opened = this.state.opened;
	      var _props2 = this.props;
	      var name = _props2.name;
	      var children = _props2.children;
	
	      var className = _classnames2['default'](prefix, _defineProperty({}, '' + prefix + '-is-opened', opened));
	      var iconType = opened ? 'angle-down' : 'angle-right';
	
	      return _react2['default'].createElement(
	        'div',
	        { className: className },
	        _react2['default'].createElement(
	          'a',
	          {
	            href: 'javascript:void(0)',
	            className: 'option-group__header option-group-header',
	            onClick: this.toggle.bind(this) },
	          _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	              'h3',
	              { className: 'option-group-header__title' },
	              name
	            ),
	            _react2['default'].createElement(Icon, { type: iconType, className: 'option-group-header__icon' })
	          )
	        ),
	        _react2['default'].createElement(
	          'article',
	          { className: 'option-group__body' },
	          children
	        )
	      );
	    }
	  }]);
	
	  return OptionGroup;
	})(_react.Component);
	
	exports['default'] = OptionGroup;
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(121)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    _again = false;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(4);
	__webpack_require__(123);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , $def     = __webpack_require__(29)
	  , isObject = $.isObject
	  , toObject = $.toObject;
	$.each.call(('freeze,seal,preventExtensions,isFrozen,isSealed,isExtensible,' +
	  'getOwnPropertyDescriptor,getPrototypeOf,keys,getOwnPropertyNames').split(',')
	, function(KEY, ID){
	  var fn     = ($.core.Object || {})[KEY] || Object[KEY]
	    , forced = 0
	    , method = {};
	  method[KEY] = ID == 0 ? function freeze(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 1 ? function seal(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 2 ? function preventExtensions(it){
	    return isObject(it) ? fn(it) : it;
	  } : ID == 3 ? function isFrozen(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 4 ? function isSealed(it){
	    return isObject(it) ? fn(it) : true;
	  } : ID == 5 ? function isExtensible(it){
	    return isObject(it) ? fn(it) : false;
	  } : ID == 6 ? function getOwnPropertyDescriptor(it, key){
	    return fn(toObject(it), key);
	  } : ID == 7 ? function getPrototypeOf(it){
	    return fn(Object($.assertDefined(it)));
	  } : ID == 8 ? function keys(it){
	    return fn(toObject(it));
	  } : __webpack_require__(124).get;
	  try {
	    fn('z');
	  } catch(e){
	    forced = 1;
	  }
	  $def($def.S + $def.F * forced, 'Object', method);
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var $ = __webpack_require__(4)
	  , toString = {}.toString
	  , getNames = $.getNames;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	function getWindowNames(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	}
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames($.toObject(it));
	};

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	
	(function () {
		'use strict';
	
		function classNames () {
	
			var classes = '';
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;
	
				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);
	
				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}
	
			return classes.substr(1);
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	
	}());


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(1)['default'];
	
	var _createClass = __webpack_require__(6)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	'use strict';
	
	var Header = (function (_Component) {
	  function Header() {
	    _classCallCheck(this, Header);
	
	    if (_Component != null) {
	      _Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Header, _Component);
	
	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      var selectedTabName = this.props.selectedTabName;
	
	      return _react2['default'].createElement(
	        'header',
	        { className: 'nav' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'pure-menu pure-menu-horizontal' },
	          _react2['default'].createElement(
	            'a',
	            { className: 'pure-menu-heading', href: '/' },
	            '.eslintrc editor'
	          ),
	          _react2['default'].createElement(
	            'ul',
	            { className: 'pure-menu-list' },
	            _react2['default'].createElement(
	              'li',
	              {
	                className: _classnames2['default']('pure-menu-item', {
	                  'pure-menu-selected': selectedTabName == 'preview'
	                }) },
	              _react2['default'].createElement(
	                'a',
	                { className: 'pure-menu-link', href: 'javascript:void(0)' },
	                'Preview'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              {
	                className: _classnames2['default']('pure-menu-item', {
	                  'pure-menu-selected': selectedTabName == 'document'
	                }) },
	              _react2['default'].createElement(
	                'a',
	                { className: 'pure-menu-link', href: 'javascript:void(0)' },
	                'Document'
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'ul',
	            { className: 'pure-menu-list pure-menu-list-right' },
	            _react2['default'].createElement(
	              'li',
	              { className: 'pure-menu-item' },
	              _react2['default'].createElement(
	                'a',
	                { className: 'pure-menu-link', href: 'http://eslint.org/', target: '_blank' },
	                'ESLint'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              { className: 'pure-menu-item' },
	              _react2['default'].createElement(
	                'a',
	                { className: 'pure-menu-link', href: 'https://github.com/pirosikick/eslintrc-editor', target: '_blank' },
	                'Github'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Header;
	})(_react.Component);
	
	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(1)['default'];
	
	var _createClass = __webpack_require__(6)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(11);
	
	var _onResizeReact = __webpack_require__(128);
	
	'use strict';
	
	var Wrapper = (function (_Component) {
	  function Wrapper() {
	    _classCallCheck(this, _Wrapper);
	
	    if (_Component != null) {
	      _Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Wrapper, _Component);
	
	  var _Wrapper = Wrapper;
	
	  _createClass(_Wrapper, [{
	    key: 'render',
	    value: function render() {
	      var height = this.props.height;
	
	      var className = _classnames2['default']('wrapper', this.props.className);
	      return React.createElement(
	        'div',
	        { className: className, style: { height: height - 0 } },
	        this.props.children
	      );
	    }
	  }]);
	
	  Wrapper = _onResizeReact.onResize()(Wrapper) || Wrapper;
	  return Wrapper;
	})(_react.Component);
	
	exports['default'] = Wrapper;
	module.exports = exports['default'];

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _libReactDecorator = __webpack_require__(129);
	
	var _libReactDecorator2 = _interopRequireDefault(_libReactDecorator);
	
	var _libReactHigherOrderComponent = __webpack_require__(131);
	
	var _libReactHigherOrderComponent2 = _interopRequireDefault(_libReactHigherOrderComponent);
	
	exports.onResize = _libReactDecorator2["default"];
	exports.bindOnResize = _libReactHigherOrderComponent2["default"];

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports["default"] = onResize;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _options = __webpack_require__(130);
	
	var _react = __webpack_require__(11);
	
	/**
	 * @onResize()
	 * @onResize((props) => ({ ... }))
	 * @onResize({
	 *   select: (props) => {{ ... }),
	 *   eventTarget: window,
	 *   callOnMounted: true
	 * })
	 */
	
	function onResize(arg) {
	  var options = undefined;
	
	  if (typeof arg === "object") {
	    options = arg;
	  } else {
	    options = (0, _options.create)();
	
	    if (typeof arg === "function") {
	      options.select = arg;
	    }
	  }
	
	  var select = options.select;
	  var eventTarget = options.eventTarget;
	  var callOnMounted = options.callOnMounted;
	  var bind = options.bind;
	  var unbind = options.unbind;
	
	  return function (Component) {
	    var WrappedComponent = (function (_ReactComponent) {
	      _inherits(WrappedComponent, _ReactComponent);
	
	      function WrappedComponent(props) {
	        _classCallCheck(this, WrappedComponent);
	
	        _get(Object.getPrototypeOf(WrappedComponent.prototype), "constructor", this).call(this, props);
	
	        this.state = { selected: {} };
	        this._onWindowResize = this.onWindowResize.bind(this);
	      }
	
	      _createClass(WrappedComponent, [{
	        key: "onWindowResize",
	        value: function onWindowResize() {
	          this.setState({ selected: select(this.props) });
	        }
	      }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	          bind(eventTarget, this._onWindowResize);
	
	          if (callOnMounted) this._onWindowResize();
	        }
	      }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	          unbind(eventTarget, this._onWindowResize);
	        }
	      }, {
	        key: "render",
	        value: function render() {
	          var selected = this.state.selected;
	
	          return React.createElement(Component, _extends({}, this.props, selected));
	        }
	      }]);
	
	      return WrappedComponent;
	    })(_react.Component);
	
	    return WrappedComponent;
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 130 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.create = create;
	var defaultOptions = {
	  select: function select(props) {
	    return {
	      width: window.innerWidth - (props.offsetWidth - 0 || 0),
	      height: window.innerHeight - (props.offsetHeight - 0 || 0)
	    };
	  },
	  eventTarget: typeof window === 'object' ? window : false,
	  callOnMounted: true,
	  bind: function bind(target, listener) {
	    target && target.addEventListener('resize', listener, false);
	  },
	  unbind: function unbind(target, listener) {
	    target && target.removeEventListener('resize', listener, false);
	  }
	};
	
	exports.defaultOptions = defaultOptions;
	
	function create() {
	  return Object.create(defaultOptions);
	}

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports["default"] = bindOnResize;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _options2 = __webpack_require__(130);
	
	var _react = __webpack_require__(11);
	
	function bindOnResize(Component, options) {
	  var _options = undefined;
	
	  if (typeof options === "object") {
	    _options = options;
	  } else {
	    _options = (0, _options2.create)();
	
	    if (typeof options === "function") {
	      _options.select = options;
	    }
	  }
	
	  var select = _options.select;
	  var eventTarget = _options.eventTarget;
	  var callOnMounted = _options.callOnMounted;
	  var bind = _options.bind;
	  var unbind = _options.unbind;
	
	  var WrappedComponent = (function (_ReactComponent) {
	    _inherits(WrappedComponent, _ReactComponent);
	
	    function WrappedComponent(props) {
	      _classCallCheck(this, WrappedComponent);
	
	      _get(Object.getPrototypeOf(WrappedComponent.prototype), "constructor", this).call(this, props);
	
	      this.state = { selected: {} };
	      this._onWindowResize = this.onWindowResize.bind(this);
	    }
	
	    _createClass(WrappedComponent, [{
	      key: "onWindowResize",
	      value: function onWindowResize() {
	        this.setState({ selected: select(this.props) });
	      }
	    }, {
	      key: "componentDidMount",
	      value: function componentDidMount() {
	        bind(eventTarget, this._onWindowResize);
	
	        if (callOnMounted) this._onWindowResize();
	      }
	    }, {
	      key: "componentWillUnmount",
	      value: function componentWillUnmount() {
	        unbind(eventTarget, this._onWindowResize);
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var selected = this.state.selected;
	
	        return React.createElement(Component, _extends({}, this.props, selected));
	      }
	    }]);
	
	    return WrappedComponent;
	  })(_react.Component);
	
	  return WrappedComponent;
	}
	
	module.exports = exports["default"];

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = __webpack_require__(25)["default"];
	
	var _inherits = __webpack_require__(1)["default"];
	
	var _createClass = __webpack_require__(6)["default"];
	
	var _classCallCheck = __webpack_require__(9)["default"];
	
	var _Object$defineProperty = __webpack_require__(7)["default"];
	
	var _interopRequireDefault = __webpack_require__(10)["default"];
	
	_Object$defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(11);
	
	var Main = (function (_Component) {
	  function Main() {
	    _classCallCheck(this, Main);
	
	    if (_Component != null) {
	      _Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(Main, _Component);
	
	  _createClass(Main, [{
	    key: "render",
	    value: function render() {
	      var className = this.props.className;
	
	      return React.createElement("div", _extends({}, this.props, { ref: "main", className: _classnames2["default"]("main", className) }));
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate() {
	      this.refs.main.scrollTop = 0;
	    }
	  }]);
	
	  return Main;
	})(_react.Component);
	
	exports["default"] = Main;
	module.exports = exports["default"];

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = __webpack_require__(25)['default'];
	
	var _inherits = __webpack_require__(1)['default'];
	
	var _createClass = __webpack_require__(6)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	'use strict';
	
	var SideMenu = (function (_Component) {
	  function SideMenu() {
	    _classCallCheck(this, SideMenu);
	
	    if (_Component != null) {
	      _Component.apply(this, arguments);
	    }
	  }
	
	  _inherits(SideMenu, _Component);
	
	  _createClass(SideMenu, [{
	    key: 'render',
	    value: function render() {
	      var className = _classnames2['default']('sidemenu', this.props.className);
	
	      return _react2['default'].createElement('div', _extends({}, this.props, { className: className }));
	    }
	  }]);
	
	  return SideMenu;
	})(_react.Component);
	
	exports['default'] = SideMenu;
	module.exports = exports['default'];

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(1)['default'];
	
	var _get = __webpack_require__(120)['default'];
	
	var _createClass = __webpack_require__(6)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _uniqueid = __webpack_require__(83);
	
	var _uniqueid2 = _interopRequireDefault(_uniqueid);
	
	var _lodashLangToArray = __webpack_require__(135);
	
	var _lodashLangToArray2 = _interopRequireDefault(_lodashLangToArray);
	
	var _lodashLangClone = __webpack_require__(139);
	
	var _lodashLangClone2 = _interopRequireDefault(_lodashLangClone);
	
	var _lodashArrayDifference = __webpack_require__(149);
	
	var _lodashArrayDifference2 = _interopRequireDefault(_lodashArrayDifference);
	
	var _lodashArrayRemove = __webpack_require__(160);
	
	var _lodashArrayRemove2 = _interopRequireDefault(_lodashArrayRemove);
	
	var _lodashUtilityNoop = __webpack_require__(162);
	
	var _lodashUtilityNoop2 = _interopRequireDefault(_lodashUtilityNoop);
	
	var CheckList = (function (_Component) {
	  function CheckList(props) {
	    _classCallCheck(this, CheckList);
	
	    _get(Object.getPrototypeOf(CheckList.prototype), 'constructor', this).call(this, props);
	
	    this.idPrefix = _uniqueid2['default']({ prefix: 'checklist' });
	    this.onChange = this.onChange.bind(this);
	    this.toggleAll = this.toggleAll.bind(this);
	  }
	
	  _inherits(CheckList, _Component);
	
	  _createClass(CheckList, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var _props = this.props;
	      var name = _props.name;
	      var keys = _props.keys;
	      var defaultChecked = _props.defaultChecked;
	
	      var idPrefix = this.idPrefix;
	
	      var rows = keys.map(function (key) {
	        return React.createElement(TableRow, {
	          key: '' + idPrefix + '-' + key,
	          value: key,
	          onChange: _this.onChange,
	          checked: defaultChecked.indexOf(key) !== -1 });
	      });
	
	      return React.createElement(
	        'table',
	        { className: 'checklist-table' },
	        React.createElement(
	          'thead',
	          { className: 'checklist-table__header' },
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'th',
	              null,
	              React.createElement(
	                'label',
	                null,
	                React.createElement('input', {
	                  type: 'checkbox',
	                  checked: this.isToggleAllChecked(),
	                  className: 'checkbox__input',
	                  onChange: this.toggleAll }),
	                React.createElement(
	                  'span',
	                  { className: 'checkbox__label' },
	                  'toggle all'
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(
	          'tbody',
	          { ref: 'tbody' },
	          rows
	        )
	      );
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.defaultChecked !== nextProps.defaultChecked;
	    }
	  }, {
	    key: 'isToggleAllChecked',
	    value: function isToggleAllChecked() {
	      var _props2 = this.props;
	      var keys = _props2.keys;
	      var defaultChecked = _props2.defaultChecked;
	
	      return _lodashArrayDifference2['default'](keys, defaultChecked).length === 0;
	    }
	  }, {
	    key: 'toggleAll',
	    value: function toggleAll(e) {
	      var checked = e.target.checked;
	
	      this.props.onChange(checked ? this.props.keys : []);
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(e) {
	      var _props3 = this.props;
	      var keys = _props3.keys;
	      var defaultChecked = _props3.defaultChecked;
	
	      var newChecked = _lodashLangClone2['default'](defaultChecked);
	      var value = e.value;
	      var checked = e.checked;
	
	      if (checked) {
	        newChecked.push(value);
	      } else {
	        _lodashArrayRemove2['default'](newChecked, function (v) {
	          return v === value;
	        });
	      }
	
	      newChecked.sort(function (a, b) {
	        return keys.indexOf(a) - keys.indexOf(b);
	      });
	
	      this.props.onChange(newChecked);
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      defaultChecked: []
	    },
	    enumerable: true
	  }]);
	
	  return CheckList;
	})(_react.Component);
	
	exports['default'] = CheckList;
	
	var TableRow = (function (_Component2) {
	  function TableRow() {
	    _classCallCheck(this, TableRow);
	
	    if (_Component2 != null) {
	      _Component2.apply(this, arguments);
	    }
	  }
	
	  _inherits(TableRow, _Component2);
	
	  _createClass(TableRow, [{
	    key: 'render',
	    value: function render() {
	      var _props4 = this.props;
	      var key = _props4.key;
	      var value = _props4.value;
	      var onChange = _props4.onChange;
	      var checked = _props4.checked;
	
	      return React.createElement(
	        'tr',
	        { key: key },
	        React.createElement(
	          'td',
	          null,
	          React.createElement(
	            'label',
	            null,
	            React.createElement('input', {
	              type: 'checkbox',
	              value: value,
	              checked: checked,
	              className: 'checkbox__input',
	              onChange: this.onChange.bind(this) }),
	            React.createElement(
	              'span',
	              { className: 'checkbox__label' },
	              value
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(e) {
	      var checked = e.target.checked;
	
	      this.props.onChange({ value: this.props.value, checked: checked });
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      key: _react.PropTypes.string,
	      value: _react.PropTypes.string,
	      onChange: _react.PropTypes.func,
	      defaultChecked: _react.PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      key: '',
	      value: '',
	      onChange: _lodashUtilityNoop2['default'],
	      defaultChecked: false
	    },
	    enumerable: true
	  }]);
	
	  return TableRow;
	})(_react.Component);
	
	module.exports = exports['default'];

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var arrayCopy = __webpack_require__(136),
	    getLength = __webpack_require__(53),
	    isLength = __webpack_require__(39),
	    values = __webpack_require__(137);
	
	/**
	 * Converts `value` to an array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Array} Returns the converted array.
	 * @example
	 *
	 * (function() {
	 *   return _.toArray(arguments).slice(1);
	 * }(1, 2, 3));
	 * // => [2, 3]
	 */
	function toArray(value) {
	  var length = value ? getLength(value) : 0;
	  if (!isLength(length)) {
	    return values(value);
	  }
	  if (!length) {
	    return [];
	  }
	  return arrayCopy(value);
	}
	
	module.exports = toArray;


/***/ },
/* 136 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function arrayCopy(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = arrayCopy;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(138),
	    keys = __webpack_require__(51);
	
	/**
	 * Creates an array of the own enumerable property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return baseValues(object, keys(object));
	}
	
	module.exports = values;


/***/ },
/* 138 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  var index = -1,
	      length = props.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = object[props[index]];
	  }
	  return result;
	}
	
	module.exports = baseValues;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(140),
	    bindCallback = __webpack_require__(71),
	    isIterateeCall = __webpack_require__(148);
	
	/**
	 * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
	 * otherwise they are assigned by reference. If `customizer` is provided it is
	 * invoked to produce the cloned values. If `customizer` returns `undefined`
	 * cloning is handled by the method instead. The `customizer` is bound to
	 * `thisArg` and invoked with two argument; (value [, index|key, object]).
	 *
	 * **Note:** This method is loosely based on the
	 * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	 * The enumerable properties of `arguments` objects and objects created by
	 * constructors other than `Object` are cloned to plain `Object` objects. An
	 * empty object is returned for uncloneable values such as functions, DOM nodes,
	 * Maps, Sets, and WeakMaps.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {Function} [customizer] The function to customize cloning values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {*} Returns the cloned value.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * var shallow = _.clone(users);
	 * shallow[0] === users[0];
	 * // => true
	 *
	 * var deep = _.clone(users, true);
	 * deep[0] === users[0];
	 * // => false
	 *
	 * // using a customizer callback
	 * var el = _.clone(document.body, function(value) {
	 *   if (_.isElement(value)) {
	 *     return value.cloneNode(false);
	 *   }
	 * });
	 *
	 * el === document.body
	 * // => false
	 * el.nodeName
	 * // => BODY
	 * el.childNodes.length;
	 * // => 0
	 */
	function clone(value, isDeep, customizer, thisArg) {
	  if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
	    isDeep = false;
	  }
	  else if (typeof isDeep == 'function') {
	    thisArg = customizer;
	    customizer = isDeep;
	    isDeep = false;
	  }
	  return typeof customizer == 'function'
	    ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1))
	    : baseClone(value, isDeep);
	}
	
	module.exports = clone;


/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var arrayCopy = __webpack_require__(136),
	    arrayEach = __webpack_require__(141),
	    baseAssign = __webpack_require__(142),
	    baseForOwn = __webpack_require__(77),
	    initCloneArray = __webpack_require__(144),
	    initCloneByTag = __webpack_require__(145),
	    initCloneObject = __webpack_require__(147),
	    isArray = __webpack_require__(33),
	    isObject = __webpack_require__(37);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	cloneableTags[dateTag] = cloneableTags[float32Tag] =
	cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[stringTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[mapTag] = cloneableTags[setTag] =
	cloneableTags[weakMapTag] = false;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * The base implementation of `_.clone` without support for argument juggling
	 * and `this` binding `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {Function} [customizer] The function to customize cloning values.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The object `value` belongs to.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates clones with source counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return arrayCopy(value, result);
	    }
	  } else {
	    var tag = objToString.call(value),
	        isFunc = tag == funcTag;
	
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return baseAssign(result, value);
	      }
	    } else {
	      return cloneableTags[tag]
	        ? initCloneByTag(value, tag, isDeep)
	        : (object ? value : {});
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stackA || (stackA = []);
	  stackB || (stackB = []);
	
	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == value) {
	      return stackB[length];
	    }
	  }
	  // Add the source value to the stack of traversed objects and associate it with its clone.
	  stackA.push(value);
	  stackB.push(result);
	
	  // Recursively populate clone (susceptible to call stack limits).
	  (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	    result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	  });
	  return result;
	}
	
	module.exports = baseClone;


/***/ },
/* 141 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(143),
	    keys = __webpack_require__(51);
	
	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 143 */
/***/ function(module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}
	
	module.exports = baseCopy;


/***/ },
/* 144 */
/***/ function(module, exports) {

	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);
	
	  // Add array properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}
	
	module.exports = initCloneArray;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var bufferClone = __webpack_require__(146);
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return bufferClone(object);
	
	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);
	
	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      var buffer = object.buffer;
	      return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);
	
	    case numberTag:
	    case stringTag:
	      return new Ctor(object);
	
	    case regexpTag:
	      var result = new Ctor(object.source, reFlags.exec(object));
	      result.lastIndex = object.lastIndex;
	  }
	  return result;
	}
	
	module.exports = initCloneByTag;


/***/ },
/* 146 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Native method references. */
	var ArrayBuffer = global.ArrayBuffer,
	    Uint8Array = global.Uint8Array;
	
	/**
	 * Creates a clone of the given array buffer.
	 *
	 * @private
	 * @param {ArrayBuffer} buffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function bufferClone(buffer) {
	  var result = new ArrayBuffer(buffer.byteLength),
	      view = new Uint8Array(result);
	
	  view.set(new Uint8Array(buffer));
	  return result;
	}
	
	module.exports = bufferClone;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 147 */
/***/ function(module, exports) {

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  var Ctor = object.constructor;
	  if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	    Ctor = Object;
	  }
	  return new Ctor;
	}
	
	module.exports = initCloneObject;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(52),
	    isIndex = __webpack_require__(57),
	    isObject = __webpack_require__(37);
	
	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(150),
	    baseFlatten = __webpack_require__(157),
	    isArrayLike = __webpack_require__(52),
	    isObjectLike = __webpack_require__(38),
	    restParam = __webpack_require__(159);
	
	/**
	 * Creates an array of unique `array` values not included in the other
	 * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The arrays of values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.difference([1, 2, 3], [4, 2]);
	 * // => [1, 3]
	 */
	var difference = restParam(function(array, values) {
	  return (isObjectLike(array) && isArrayLike(array))
	    ? baseDifference(array, baseFlatten(values, false, true))
	    : [];
	});
	
	module.exports = difference;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(151),
	    cacheIndexOf = __webpack_require__(153),
	    createCache = __webpack_require__(154);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of `_.difference` which accepts a single array
	 * of values to exclude.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values) {
	  var length = array ? array.length : 0,
	      result = [];
	
	  if (!length) {
	    return result;
	  }
	  var index = -1,
	      indexOf = baseIndexOf,
	      isCommon = true,
	      cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	      valuesLength = values.length;
	
	  if (cache) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	    values = cache;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index];
	
	    if (isCommon && value === value) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === value) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (indexOf(values, value, 0) < 0) {
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseDifference;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(152);
	
	/**
	 * The base implementation of `_.indexOf` without support for binary searches.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 152 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = indexOfNaN;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(37);
	
	/**
	 * Checks if `value` is in `cache` mimicking the return signature of
	 * `_.indexOf` by returning `0` if the value is found, else `-1`.
	 *
	 * @private
	 * @param {Object} cache The cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `0` if `value` is found, else `-1`.
	 */
	function cacheIndexOf(cache, value) {
	  var data = cache.data,
	      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
	
	  return result ? 0 : -1;
	}
	
	module.exports = cacheIndexOf;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var SetCache = __webpack_require__(155),
	    getNative = __webpack_require__(34);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 * Creates a `Set` cache object to optimize linear searches of large arrays.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	 */
	function createCache(values) {
	  return (nativeCreate && Set) ? new SetCache(values) : null;
	}
	
	module.exports = createCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var cachePush = __webpack_require__(156),
	    getNative = __webpack_require__(34);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 *
	 * Creates a cache object to store unique values.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var length = values ? values.length : 0;
	
	  this.data = { 'hash': nativeCreate(null), 'set': new Set };
	  while (length--) {
	    this.push(values[length]);
	  }
	}
	
	// Add functions to the `Set` cache.
	SetCache.prototype.push = cachePush;
	
	module.exports = SetCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(37);
	
	/**
	 * Adds `value` to the cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var data = this.data;
	  if (typeof value == 'string' || isObject(value)) {
	    data.set.add(value);
	  } else {
	    data.hash[value] = true;
	  }
	}
	
	module.exports = cachePush;


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(158),
	    isArguments = __webpack_require__(56),
	    isArray = __webpack_require__(33),
	    isArrayLike = __webpack_require__(52),
	    isObjectLike = __webpack_require__(38);
	
	/**
	 * The base implementation of `_.flatten` with added support for restricting
	 * flattening and specifying the start index.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);
	
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var value = array[index];
	    if (isObjectLike(value) && isArrayLike(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ },
/* 158 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 159 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var baseCallback = __webpack_require__(42),
	    basePullAt = __webpack_require__(161);
	
	/**
	 * Removes all elements from `array` that `predicate` returns truthy for
	 * and returns an array of the removed elements. The predicate is bound to
	 * `thisArg` and invoked with three arguments: (value, index, array).
	 *
	 * If a property name is provided for `predicate` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `predicate` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * **Note:** Unlike `_.filter`, this method mutates `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to modify.
	 * @param {Function|Object|string} [predicate=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `predicate`.
	 * @returns {Array} Returns the new array of removed elements.
	 * @example
	 *
	 * var array = [1, 2, 3, 4];
	 * var evens = _.remove(array, function(n) {
	 *   return n % 2 == 0;
	 * });
	 *
	 * console.log(array);
	 * // => [1, 3]
	 *
	 * console.log(evens);
	 * // => [2, 4]
	 */
	function remove(array, predicate, thisArg) {
	  var result = [];
	  if (!(array && array.length)) {
	    return result;
	  }
	  var index = -1,
	      indexes = [],
	      length = array.length;
	
	  predicate = baseCallback(predicate, thisArg, 3);
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result.push(value);
	      indexes.push(index);
	    }
	  }
	  basePullAt(array, indexes);
	  return result;
	}
	
	module.exports = remove;


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var isIndex = __webpack_require__(57);
	
	/** Used for native method references. */
	var arrayProto = Array.prototype;
	
	/** Native method references. */
	var splice = arrayProto.splice;
	
	/**
	 * The base implementation of `_.pullAt` without support for individual
	 * index arguments and capturing the removed elements.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {number[]} indexes The indexes of elements to remove.
	 * @returns {Array} Returns `array`.
	 */
	function basePullAt(array, indexes) {
	  var length = array ? indexes.length : 0;
	  while (length--) {
	    var index = indexes[length];
	    if (index != previous && isIndex(index)) {
	      var previous = index;
	      splice.call(array, index, 1);
	    }
	  }
	  return array;
	}
	
	module.exports = basePullAt;


/***/ },
/* 162 */
/***/ function(module, exports) {

	/**
	 * A no-operation function that returns `undefined` regardless of the
	 * arguments it receives.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.noop(object) === undefined;
	 * // => true
	 */
	function noop() {
	  // No operation performed.
	}
	
	module.exports = noop;


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(1)['default'];
	
	var _get = __webpack_require__(120)['default'];
	
	var _createClass = __webpack_require__(6)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _uniqueid = __webpack_require__(83);
	
	var _uniqueid2 = _interopRequireDefault(_uniqueid);
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	'use strict';
	
	var RadioSet = (function (_Component) {
	  function RadioSet(props) {
	    _classCallCheck(this, RadioSet);
	
	    _get(Object.getPrototypeOf(RadioSet.prototype), 'constructor', this).call(this, props);
	    this.id = _uniqueid2['default']({ prefix: 'radio-set' });
	    this.onChange = this.onChange.bind(this);
	  }
	
	  _inherits(RadioSet, _Component);
	
	  _createClass(RadioSet, [{
	    key: 'onChange',
	    value: function onChange(value) {
	      this.props.onChange({ name: this.props.name, value: value });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var _props = this.props;
	      var options = _props.options;
	      var defaultValue = _props.defaultValue;
	      var horizontal = _props.horizontal;
	
	      var className = _classnames2['default']('radioset', {
	        'radioset--is-horizontal': horizontal
	      });
	      var items = options.map(function (_ref) {
	        var value = _ref.value;
	        var label = _ref.label;
	        return _react2['default'].createElement(Radio, {
	          key: '' + _this.id + '-' + value,
	          name: _this.id,
	          value: value,
	          label: label,
	          defaultChecked: value === defaultValue,
	          onChange: _this.onChange });
	      });
	
	      return _react2['default'].createElement(List, { horizontal: horizontal, items: items });
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      defaultValue: '',
	      horizontal: false,
	      onChange: function onChange() {}
	    },
	    enumerable: true
	  }]);
	
	  return RadioSet;
	})(_react.Component);
	
	exports['default'] = RadioSet;
	
	var List = (function (_Component2) {
	  function List() {
	    _classCallCheck(this, List);
	
	    if (_Component2 != null) {
	      _Component2.apply(this, arguments);
	    }
	  }
	
	  _inherits(List, _Component2);
	
	  _createClass(List, [{
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var name = _props2.name;
	      var horizontal = _props2.horizontal;
	      var items = _props2.items;
	
	      var className = _classnames2['default']('radioset', { 'radioset--is-horizontal': horizontal });
	      var lists = items.map(this.wrapListItem, this);
	
	      return _react2['default'].createElement(
	        'ul',
	        { className: className },
	        lists
	      );
	    }
	  }, {
	    key: 'wrapListItem',
	    value: function wrapListItem(children, index) {
	      var name = this.props.name;
	
	      return _react2['default'].createElement(
	        ListItem,
	        { name: name, index: index },
	        children
	      );
	    }
	  }]);
	
	  return List;
	})(_react.Component);
	
	var ListItem = (function (_Component3) {
	  function ListItem() {
	    _classCallCheck(this, ListItem);
	
	    if (_Component3 != null) {
	      _Component3.apply(this, arguments);
	    }
	  }
	
	  _inherits(ListItem, _Component3);
	
	  _createClass(ListItem, [{
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var name = _props3.name;
	      var index = _props3.index;
	
	      var key = 'radioset-' + name + '-' + index;
	
	      return _react2['default'].createElement(
	        'li',
	        { key: key, className: 'radioset__item' },
	        this.props.children
	      );
	    }
	  }]);
	
	  return ListItem;
	})(_react.Component);
	
	var Radio = (function (_Component4) {
	  function Radio() {
	    _classCallCheck(this, Radio);
	
	    if (_Component4 != null) {
	      _Component4.apply(this, arguments);
	    }
	  }
	
	  _inherits(Radio, _Component4);
	
	  _createClass(Radio, [{
	    key: 'render',
	    value: function render() {
	      var _props4 = this.props;
	      var name = _props4.name;
	      var value = _props4.value;
	      var label = _props4.label;
	      var defaultChecked = _props4.defaultChecked;
	      var onChange = _props4.onChange;
	
	      return _react2['default'].createElement(
	        'label',
	        null,
	        _react2['default'].createElement('input', {
	          className: 'radioset__radio',
	          type: 'radio',
	          name: name,
	          defaultChecked: defaultChecked,
	          onChange: function () {
	            return onChange(value);
	          } }),
	        _react2['default'].createElement(
	          'span',
	          { className: 'radioset__label-text' },
	          label
	        )
	      );
	    }
	  }]);
	
	  return Radio;
	})(_react.Component);
	
	module.exports = exports['default'];

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(1)['default'];
	
	var _get = __webpack_require__(120)['default'];
	
	var _createClass = __webpack_require__(6)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _lodashCollectionMap = __webpack_require__(40);
	
	var _lodashCollectionMap2 = _interopRequireDefault(_lodashCollectionMap);
	
	var _lodashLangClone = __webpack_require__(139);
	
	var _lodashLangClone2 = _interopRequireDefault(_lodashLangClone);
	
	var _lodashUtilityNoop = __webpack_require__(162);
	
	var _lodashUtilityNoop2 = _interopRequireDefault(_lodashUtilityNoop);
	
	var _uniqueid = __webpack_require__(83);
	
	var _uniqueid2 = _interopRequireDefault(_uniqueid);
	
	var _react = __webpack_require__(11);
	
	var _RadioSet = __webpack_require__(163);
	
	var _RadioSet2 = _interopRequireDefault(_RadioSet);
	
	var _actionsGlobals = __webpack_require__(114);
	
	var _actionsGlobals2 = _interopRequireDefault(_actionsGlobals);
	
	'use strict';
	
	var Globals = (function (_Component) {
	  function Globals(props) {
	    _classCallCheck(this, Globals);
	
	    _get(Object.getPrototypeOf(Globals.prototype), 'constructor', this).call(this, props);
	    this.id = 'globals';
	    this.onAdd = this.onAdd.bind(this);
	    this.onRemove = this.onRemove.bind(this);
	    this.onChange = this.onChange.bind(this);
	  }
	
	  _inherits(Globals, _Component);
	
	  _createClass(Globals, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var value = this.props.value;
	
	      var rows = _lodashCollectionMap2['default'](value, function (v, name) {
	        return React.createElement(TableRow, {
	          key: '' + _this.id + '-row-' + name,
	          name: name,
	          value: v,
	          onRemove: _this.onRemove,
	          onChange: _this.onChange });
	      });
	
	      return React.createElement(
	        'div',
	        { className: 'globals' },
	        React.createElement(InputForm, {
	          globals: value,
	          onAdd: function (name) {
	            return _this.onChange(name, true);
	          } }),
	        React.createElement(
	          Table,
	          null,
	          rows
	        )
	      );
	    }
	  }, {
	    key: 'onAdd',
	    value: function onAdd(name) {
	      this.emitAction(_actionsGlobals2['default'].add(name));
	    }
	  }, {
	    key: 'onRemove',
	    value: function onRemove(name) {
	      this.emitAction(_actionsGlobals2['default'].remove(name));
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(name, value) {
	      this.emitAction(_actionsGlobals2['default'].change(name, value));
	    }
	  }, {
	    key: 'emitAction',
	    value: function emitAction(action) {
	      this.props.onAction(action);
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      value: _react.PropTypes.object,
	      onAction: _react.PropTypes.func.isRequired
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: { value: {} },
	    enumerable: true
	  }]);
	
	  return Globals;
	})(_react.Component);
	
	exports['default'] = Globals;
	
	var InputForm = (function (_Component2) {
	  function InputForm(props) {
	    _classCallCheck(this, InputForm);
	
	    _get(Object.getPrototypeOf(InputForm.prototype), 'constructor', this).call(this, props);
	    this.state = { isPlusButtonDisabled: true };
	  }
	
	  _inherits(InputForm, _Component2);
	
	  _createClass(InputForm, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'globals__form pure-form' },
	        React.createElement('input', { ref: 'input', type: 'text', onInput: this.onInput.bind(this) }),
	        React.createElement(
	          'button',
	          {
	            className: 'globals__plus pure-button',
	            disabled: this.state.isPlusButtonDisabled,
	            onClick: this.onClickAddButton.bind(this) },
	          React.createElement('i', { className: 'fa fa-plus' })
	        )
	      );
	    }
	  }, {
	    key: 'onClickAddButton',
	    value: function onClickAddButton() {
	      this.props.onAdd(this.getValue());
	      this.clear();
	    }
	  }, {
	    key: 'onInput',
	    value: function onInput(e) {
	      var value = e.target.value;
	
	      var isPlusButtonDisabled = this.isPlusButtonDisabled(value);
	
	      this.setState({ isPlusButtonDisabled: isPlusButtonDisabled });
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.refs.input.value;
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.refs.input.value = '';
	    }
	  }, {
	    key: 'isPlusButtonDisabled',
	    value: function isPlusButtonDisabled(value) {
	      return value.length === 0 || this.exists(value);
	    }
	  }, {
	    key: 'exists',
	    value: function exists(name) {
	      return typeof this.props.globals[name] !== 'undefined';
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      globals: _react.PropTypes.object,
	      onAdd: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: { globals: {}, onAdd: _lodashUtilityNoop2['default'] },
	    enumerable: true
	  }]);
	
	  return InputForm;
	})(_react.Component);
	
	var Table = (function (_Component3) {
	  function Table() {
	    _classCallCheck(this, Table);
	
	    if (_Component3 != null) {
	      _Component3.apply(this, arguments);
	    }
	  }
	
	  _inherits(Table, _Component3);
	
	  _createClass(Table, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'table',
	        { className: 'global-list' },
	        React.createElement(
	          'thead',
	          { className: 'global-list__head' },
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'th',
	              { className: 'global-list__var-name-col' },
	              'name'
	            ),
	            React.createElement(
	              'th',
	              { className: 'global-list__value-col' },
	              'value'
	            )
	          )
	        ),
	        React.createElement(
	          'tbody',
	          null,
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return Table;
	})(_react.Component);
	
	var radioSetOptions = [{ label: 'true', value: true }, { label: 'false', value: false }];
	
	var TableRow = (function (_Component4) {
	  function TableRow() {
	    _classCallCheck(this, TableRow);
	
	    if (_Component4 != null) {
	      _Component4.apply(this, arguments);
	    }
	  }
	
	  _inherits(TableRow, _Component4);
	
	  _createClass(TableRow, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var name = _props.name;
	      var value = _props.value;
	
	      return React.createElement(
	        'tr',
	        { key: 'globals-' + name },
	        React.createElement(
	          'td',
	          null,
	          React.createElement(
	            'a',
	            { onClick: this.onRemove.bind(this),
	              href: 'javascript:void(0)',
	              className: 'global-list__remove' },
	            React.createElement('i', { className: 'fa fa-times' })
	          ),
	          React.createElement(
	            'span',
	            { className: 'global-list__var-name' },
	            name
	          )
	        ),
	        React.createElement(
	          'td',
	          null,
	          React.createElement(_RadioSet2['default'], {
	            name: name,
	            horizontal: true,
	            options: radioSetOptions,
	            defaultValue: value,
	            onChange: this.onChange.bind(this)
	          })
	        )
	      );
	    }
	  }, {
	    key: 'onRemove',
	    value: function onRemove() {
	      this.props.onRemove(this.props.name);
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(_ref) {
	      var name = _ref.name;
	      var value = _ref.value;
	
	      this.props.onChange(name, value);
	    }
	  }]);
	
	  return TableRow;
	})(_react.Component);
	
	module.exports = exports['default'];

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(1)['default'];
	
	var _get = __webpack_require__(120)['default'];
	
	var _createClass = __webpack_require__(6)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _CheckList = __webpack_require__(134);
	
	var _CheckList2 = _interopRequireDefault(_CheckList);
	
	var _constants = __webpack_require__(166);
	
	var _actionsEnv = __webpack_require__(113);
	
	var _actionsEnv2 = _interopRequireDefault(_actionsEnv);
	
	'use strict';
	
	var Env = (function (_Component) {
	  function Env(props) {
	    _classCallCheck(this, Env);
	
	    _get(Object.getPrototypeOf(Env.prototype), 'constructor', this).call(this, props);
	    this.onChange = this.onChange.bind(this);
	  }
	
	  _inherits(Env, _Component);
	
	  _createClass(Env, [{
	    key: 'render',
	    value: function render() {
	      var values = this.props.values;
	
	      return React.createElement(_CheckList2['default'], {
	        id: 'ecma-features',
	        name: 'ecmaFeatures',
	        keys: _constants.Environments,
	        defaultChecked: values,
	        onChange: this.onChange });
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(values) {
	      this.props.onAction(_actionsEnv2['default'].change(values));
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      values: _react.PropTypes.array.isRequired,
	      onAction: _react.PropTypes.func.isRequired
	    },
	    enumerable: true
	  }]);
	
	  return Env;
	})(_react.Component);
	
	exports['default'] = Env;
	module.exports = exports['default'];

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _constantsEnvironments = __webpack_require__(167);
	
	var _constantsEnvironments2 = _interopRequireDefault(_constantsEnvironments);
	
	var _constantsECMAFeatures = __webpack_require__(168);
	
	var _constantsECMAFeatures2 = _interopRequireDefault(_constantsECMAFeatures);
	
	var _constantsParsers = __webpack_require__(169);
	
	var _constantsParsers2 = _interopRequireDefault(_constantsParsers);
	
	'use strict';
	exports.Environments = _constantsEnvironments2['default'];
	exports.ECMAFeatures = _constantsECMAFeatures2['default'];

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	'use strict';
	exports['default'] = ['browser', 'node', 'amd', 'mocha', 'jasmine', 'phantomjs', 'jquery', 'prototypejs', 'shelljs', 'meteor', 'es6'];
	module.exports = exports['default'];

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	'use strict';
	exports['default'] = ['arrowFunctions', 'binaryLiterals', 'blockBindings', 'classes', 'defaultParams', 'destructuring', 'forOf', 'generators', 'modules', 'objectLiteralComputedProperties', 'objectLiteralDuplicateProperties', 'objectLiteralShorthandMethods', 'objectLiteralShorthandProperties', 'octalLiterals', 'regexUFlag', 'regexYFlag', 'spread', 'superInFunctions', 'templateStrings', 'unicodeCodePointEscapes', 'globalReturn', 'jsx'];
	module.exports = exports['default'];

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(7)["default"];
	
	_Object$defineProperty(exports, "__esModule", {
	  value: true
	});
	
	"use strict";
	exports["default"] = ["esprima", "esprima-fb", "babel-parser"];
	module.exports = exports["default"];

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(1)['default'];
	
	var _get = __webpack_require__(120)['default'];
	
	var _createClass = __webpack_require__(6)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _CheckList = __webpack_require__(134);
	
	var _CheckList2 = _interopRequireDefault(_CheckList);
	
	var _constants = __webpack_require__(166);
	
	var _actionsEcmaFeatures = __webpack_require__(115);
	
	var _actionsEcmaFeatures2 = _interopRequireDefault(_actionsEcmaFeatures);
	
	'use strict';
	
	var EcmaFeatures = (function (_Component) {
	  function EcmaFeatures(props) {
	    _classCallCheck(this, EcmaFeatures);
	
	    _get(Object.getPrototypeOf(EcmaFeatures.prototype), 'constructor', this).call(this, props);
	    this.onChange = this.onChange.bind(this);
	  }
	
	  _inherits(EcmaFeatures, _Component);
	
	  _createClass(EcmaFeatures, [{
	    key: 'render',
	    value: function render() {
	      var values = this.props.values;
	
	      return React.createElement(_CheckList2['default'], {
	        id: 'ecma-features',
	        name: 'ecmaFeatures',
	        keys: _constants.ECMAFeatures,
	        defaultChecked: values,
	        onChange: this.onChange });
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(values) {
	      this.props.onAction(_actionsEcmaFeatures2['default'].change(values));
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      values: _react.PropTypes.array.isRequired,
	      onAction: _react.PropTypes.func.isRequired
	    },
	    enumerable: true
	  }]);
	
	  return EcmaFeatures;
	})(_react.Component);
	
	exports['default'] = EcmaFeatures;
	module.exports = exports['default'];

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(1)['default'];
	
	var _get = __webpack_require__(120)['default'];
	
	var _createClass = __webpack_require__(6)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _constantsParsers = __webpack_require__(169);
	
	var _constantsParsers2 = _interopRequireDefault(_constantsParsers);
	
	var _actionsParser = __webpack_require__(116);
	
	var _actionsParser2 = _interopRequireDefault(_actionsParser);
	
	'use strict';
	
	var Parser = (function (_Component) {
	  function Parser(props) {
	    _classCallCheck(this, Parser);
	
	    _get(Object.getPrototypeOf(Parser.prototype), 'constructor', this).call(this, props);
	    this.id = 'parser';
	    this.onChange = this.onChange.bind(this);
	  }
	
	  _inherits(Parser, _Component);
	
	  _createClass(Parser, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var value = this.props.value;
	
	      var options = _constantsParsers2['default'].map(function (p) {
	        return React.createElement(
	          'option',
	          { key: '' + _this.id + '-' + p, value: p },
	          p
	        );
	      });
	
	      return React.createElement(
	        'div',
	        { className: 'pure-form' },
	        React.createElement(
	          'select',
	          {
	            className: 'parser-option__pulldown',
	            value: value,
	            onChange: this.onChange },
	          React.createElement(
	            'option',
	            { value: '' },
	            'select parser'
	          ),
	          options
	        )
	      );
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(e) {
	      this.props.onAction(_actionsParser2['default'].change(e.target.value));
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      value: _react.PropTypes.string,
	      onAction: _react.PropTypes.func
	    },
	    enumerable: true
	  }]);
	
	  return Parser;
	})(_react.Component);
	
	exports['default'] = Parser;
	module.exports = exports['default'];

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(1)['default'];
	
	var _get = __webpack_require__(120)['default'];
	
	var _createClass = __webpack_require__(6)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _actionsView = __webpack_require__(84);
	
	var _pirosikickMd2react = __webpack_require__(173);
	
	var _pirosikickMd2react2 = _interopRequireDefault(_pirosikickMd2react);
	
	var _lodashUtilityNoop = __webpack_require__(162);
	
	var _lodashUtilityNoop2 = _interopRequireDefault(_lodashUtilityNoop);
	
	'use strict';
	
	var MarkdownViewer = (function (_Component) {
	  function MarkdownViewer(props) {
	    _classCallCheck(this, MarkdownViewer);
	
	    _get(Object.getPrototypeOf(MarkdownViewer.prototype), 'constructor', this).call(this, props);
	    this.link = this.link.bind(this);
	    this.onClick = this.onClick.bind(this);
	  }
	
	  _inherits(MarkdownViewer, _Component);
	
	  _createClass(MarkdownViewer, [{
	    key: 'render',
	    value: function render() {
	      var customComponents = { link: this.link };
	
	      return React.createElement(
	        'div',
	        { className: 'document markdown-body' },
	        _pirosikickMd2react2['default'](this.props.md, { customComponents: customComponents })
	      );
	    }
	  }, {
	    key: 'link',
	    value: function link(node, defs, key) {
	      return React.createElement(Link, {
	        node: node,
	        key: key,
	        baseUrl: this.getBaseUrl(),
	        onClick: this.onClick });
	    }
	  }, {
	    key: 'getBaseUrl',
	    value: function getBaseUrl() {
	      var url = this.props.url;
	
	      return url.split('/').slice(0, -1).join('/');
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      if (e.target.isExternal) {
	        return;
	      }
	
	      e.preventDefault();
	      var documentUrl = e.currentTarget.getAttribute('data-document-url');
	      this.props.onAction(_actionsView.openDocument(documentUrl));
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      md: _react.PropTypes.string,
	      url: _react.PropTypes.string,
	      onAction: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      url: '',
	      md: '',
	      onClickLink: _lodashUtilityNoop2['default']
	    },
	    enumerable: true
	  }]);
	
	  return MarkdownViewer;
	})(_react.Component);
	
	exports['default'] = MarkdownViewer;
	
	var Link = (function (_Component2) {
	  function Link(props) {
	    _classCallCheck(this, Link);
	
	    _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).call(this, props);
	    var href = props.node.href || '';
	    this.isExternal = /^http/.test(href);
	    this.isAbsolute = /^\//.test(href);
	  }
	
	  _inherits(Link, _Component2);
	
	  _createClass(Link, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var node = _props.node;
	      var key = _props.key;
	
	      var props = {
	        key: key,
	        href: this.getHref(),
	        title: node.title,
	        onClick: this.props.onClick,
	        children: [node.children[0].value]
	      };
	
	      if (this.isExternal) {
	        props.target = '_blank';
	      } else {
	        props['data-document-url'] = this.getDocumentUrl();
	      }
	
	      return React.createElement('a', props);
	    }
	  }, {
	    key: 'getHref',
	    value: function getHref() {
	      var _props2 = this.props;
	      var node = _props2.node;
	      var baseUrl = _props2.baseUrl;
	
	      if (this.isExternal) {
	        return node.href;
	      }
	
	      return 'javascript:void(0);';
	    }
	  }, {
	    key: 'getDocumentUrl',
	    value: function getDocumentUrl() {
	      var _props3 = this.props;
	      var node = _props3.node;
	      var baseUrl = _props3.baseUrl;
	
	      if (this.isExternal) {
	        return '';
	      } else if (this.isAbsolute) {
	        return node.href;
	      }
	
	      var url = '' + baseUrl + '/' + node.href;
	      if (!/\.md$/.test(url)) {
	        url += '.md';
	      }
	      return url;
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      baseUrl: _react.PropTypes.string,
	      node: _react.PropTypes.object,
	      key: _react.PropTypes.string,
	      onClick: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      baseUrl: _react.PropTypes.string,
	      node: {},
	      key: '',
	      onClick: _lodashUtilityNoop2['default']
	    },
	    enumerable: true
	  }]);
	
	  return Link;
	})(_react.Component);
	
	module.exports = exports['default'];

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// Generated by CoffeeScript 1.10.0
	(function() {
	  var $, ATTR_WHITELIST, compile, components, defaultComponents, defaultHTMLWrapperComponent, getPropsFromHTMLNode, highlight, htmlWrapperComponent, isValidDocument, mdast, preprocess, rawValueWrapper, sanitize, toChildren,
	    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
	  mdast = __webpack_require__(174);
	
	  preprocess = __webpack_require__(189);
	
	  ATTR_WHITELIST = ['href', 'src', 'target'];
	
	  $ = React.createElement;
	
	  defaultHTMLWrapperComponent = React.createClass({
	    _update: function() {
	      var current, node;
	      current = this.props.html;
	      if (this._lastHtml !== current) {
	        this._lastHtml = current;
	        node = this.refs.htmlWrapper.getDOMNode();
	        node.contentDocument.body.innerHTML = this.props.html;
	        node.style.height = node.contentWindow.document.body.scrollHeight + 'px';
	        return node.style.width = node.contentWindow.document.body.scrollWidth + 'px';
	      }
	    },
	    componentDidUpdate: function() {
	      return this._update();
	    },
	    componentDidMount: function() {
	      return this._update();
	    },
	    render: function() {
	      return $('iframe', {
	        ref: 'htmlWrapper',
	        html: this.props.html,
	        style: {
	          border: 'none'
	        }
	      });
	    }
	  });
	
	  toChildren = function(node, defs, parentKey, tableAlign) {
	    var child, i;
	    if (tableAlign == null) {
	      tableAlign = [];
	    }
	    return (function() {
	      var j, len, ref, results;
	      ref = node.children;
	      results = [];
	      for (i = j = 0, len = ref.length; j < len; i = ++j) {
	        child = ref[i];
	        results.push(compile(child, defs, parentKey + '_' + i, tableAlign));
	      }
	      return results;
	    })();
	  };
	
	  isValidDocument = function(doc) {
	    var parsererrorNS;
	    parsererrorNS = (new DOMParser()).parseFromString('INVALID', 'text/xml').getElementsByTagName("parsererror")[0].namespaceURI;
	    return doc.getElementsByTagNameNS(parsererrorNS, 'parsererror').length === 0;
	  };
	
	  getPropsFromHTMLNode = function(node, attrWhitelist) {
	    var attr, attrs, doc, i, j, parser, props, ref, ref1, string;
	    string = node.subtype === 'folded' ? node.startTag.value + node.endTag.value : node.subtype === 'void' ? node.value : null;
	    if (string == null) {
	      return null;
	    }
	    parser = new DOMParser();
	    doc = parser.parseFromString(string, 'text/html');
	    if (!isValidDocument(doc)) {
	      return null;
	    }
	    attrs = doc.body.firstElementChild.attributes;
	    props = {};
	    for (i = j = 0, ref = attrs.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
	      attr = attrs.item(i);
	      if ((attrWhitelist == null) || (ref1 = attr.name, indexOf.call(attrWhitelist, ref1) >= 0)) {
	        props[attr.name] = attr.value;
	      }
	    }
	    return props;
	  };
	
	  sanitize = null;
	
	  highlight = null;
	
	  compile = function(node, defs, parentKey, tableAlign) {
	    var key;
	    if (parentKey == null) {
	      parentKey = '_start';
	    }
	    if (tableAlign == null) {
	      tableAlign = null;
	    }
	    key = parentKey + '_' + node.type;
	    if (typeof components[node.type] === 'function') {
	      return components[node.type](node, defs, key, tableAlign);
	    } else {
	      throw node.type + ' is unsuppoted node type. report to https://github.com/mizchi/md2react/issues';
	    }
	  };
	
	  defaultComponents = {
	    text: function(node) {
	      return rawValueWrapper(node.value);
	    },
	    escape: function() {
	      return '\\';
	    },
	    "break": function(node, defs, key) {
	      return $('br', {
	        key: key
	      });
	    },
	    horizontalRule: function(node, defs, key) {
	      return $('hr', {
	        key: key
	      });
	    },
	    image: function(node, defs, key) {
	      return $('img', {
	        key: key,
	        src: node.src,
	        title: node.title,
	        alt: node.alt
	      });
	    },
	    inlineCode: function(node, defs, key) {
	      return $('code', {
	        key: key,
	        className: 'inlineCode'
	      }, node.value);
	    },
	    code: function(node, defs, key) {
	      return highlight(node.value, node.lang, key);
	    },
	    root: function(node, defs, key) {
	      return $('div', {
	        key: key
	      }, toChildren(node, defs, key));
	    },
	    strong: function(node, defs, key) {
	      return $('strong', {
	        key: key
	      }, toChildren(node, defs, key));
	    },
	    emphasis: function(node, defs, key) {
	      return $('em', {
	        key: key
	      }, toChildren(node, defs, key));
	    },
	    "delete": function(node, defs, key) {
	      return $('s', {
	        key: key
	      }, toChildren(node, defs, key));
	    },
	    paragraph: function(node, defs, key) {
	      return $('p', {
	        key: key
	      }, toChildren(node, defs, key));
	    },
	    link: function(node, defs, key) {
	      return $('a', {
	        key: key,
	        href: node.href,
	        title: node.title
	      }, toChildren(node, defs, key));
	    },
	    heading: function(node, defs, key) {
	      return $('h' + node.depth.toString(), {
	        key: key
	      }, toChildren(node, defs, key));
	    },
	    list: function(node, defs, key) {
	      return $((node.ordered ? 'ol' : 'ul'), {
	        key: key
	      }, toChildren(node, defs, key));
	    },
	    listItem: function(node, defs, key) {
	      var className;
	      className = node.checked === true ? 'checked' : node.checked === false ? 'unchecked' : '';
	      return $('li', {
	        key: key,
	        className: className
	      }, toChildren(node, defs, key));
	    },
	    blockquote: function(node, defs, key) {
	      return $('blockquote', {
	        key: key
	      }, toChildren(node, defs, key));
	    },
	    linkReference: function(node, defs, key) {
	      var def, j, len;
	      for (j = 0, len = defs.length; j < len; j++) {
	        def = defs[j];
	        if (def.type === 'definition' && def.identifier === node.identifier) {
	          return $('a', {
	            key: key,
	            href: def.link,
	            title: def.title
	          }, toChildren(node, defs, key));
	        }
	      }
	      if (node.referenceType === 'full') {
	        return $('span', {
	          key: key
	        }, ['[', toChildren(node, defs, key), ']', "[" + node.identifier + "]"]);
	      } else {
	        return $('span', {
	          key: key
	        }, ['[', toChildren(node, defs, key), ']']);
	      }
	    },
	    footnoteReference: function(node, defs, key) {
	      var def, j, len, ref, title;
	      title = '';
	      for (j = 0, len = defs.length; j < len; j++) {
	        def = defs[j];
	        if (def.footnoteNumber === node.footnoteNumber) {
	          title = (ref = def.link) != null ? ref : "...";
	          return $('sup', {
	            key: key,
	            id: "fnref" + node.footnoteNumber
	          }, [
	            $('a', {
	              key: key + '-a',
	              href: "#fn" + node.footnoteNumber,
	              title: title
	            }, "" + node.footnoteNumber)
	          ]);
	        }
	      }
	      return $('span', {
	        key: key
	      }, "[^" + node.identifier + "]");
	    },
	    footnoteDefinitionCollection: function(node, defs, key) {
	      var items;
	      items = node.children.map(function(def, i) {
	        var defBody, k, para;
	        k = key + '-ol-li' + i;
	        defBody = null;
	        if (def.children != null) {
	          if ((para = def.children[def.children.length - 1]).type === 'paragraph') {
	            para.children.push({
	              type: 'text',
	              value: ' '
	            });
	            para.children.push({
	              type: 'link',
	              href: "#fnref" + def.footnoteNumber,
	              children: [
	                {
	                  type: 'text',
	                  value: '↩'
	                }
	              ]
	            });
	          }
	          defBody = toChildren(def, defs, key);
	        } else {
	          defBody = $('p', {
	            key: k + '-p'
	          }, [
	            def.link, ' ', $('a', {
	              key: k + '-p-a',
	              href: "#fnref" + def.footnoteNumber
	            }, '↩')
	          ]);
	        }
	        return $('li', {
	          key: k,
	          id: "fn" + def.footnoteNumber
	        }, defBody);
	      });
	      return $('div', {
	        key: key,
	        className: 'footnotes'
	      }, [
	        $('hr', {
	          key: key + '-hr'
	        }), $('ol', {
	          key: key + '-ol'
	        }, items)
	      ]);
	    },
	    table: function(node, defs, key) {
	      return $('table', {
	        key: key
	      }, toChildren(node, defs, key, node.align));
	    },
	    tableHeader: function(node, defs, key, tableAlign) {
	      return $('thead', {
	        key: key
	      }, [
	        $('tr', {
	          key: key + '-_inner-tr'
	        }, node.children.map(function(cell, i) {
	          var k, ref;
	          k = key + '-th' + i;
	          return $('th', {
	            key: k,
	            style: {
	              textAlign: (ref = tableAlign[i]) != null ? ref : 'left'
	            }
	          }, toChildren(cell, defs, k));
	        }))
	      ]);
	    },
	    tableRow: function(node, defs, key, tableAlign) {
	      return $('tbody', {
	        key: key
	      }, [
	        $('tr', {
	          key: key + '-_inner-td'
	        }, node.children.map(function(cell, i) {
	          var k, ref;
	          k = key + '-td' + i;
	          return $('td', {
	            key: k,
	            style: {
	              textAlign: (ref = tableAlign[i]) != null ? ref : 'left'
	            }
	          }, toChildren(cell, defs, k));
	        }))
	      ]);
	    },
	    tableCell: function(node, defs, key) {
	      return $('span', {
	        key: key
	      }, toChildren(node, defs, key));
	    },
	    html: function(node, defs, key) {
	      var k, name, props, ref, ref1, ref2, ref3, value;
	      if (node.subtype === 'raw') {
	        return $(htmlWrapperComponent, {
	          key: key,
	          html: node.value
	        });
	      } else if (node.subtype === 'computed') {
	        k = key + '_' + node.tagName;
	        props = {};
	        ref1 = (ref = node.attrs) != null ? ref : {};
	        for (name in ref1) {
	          value = ref1[name];
	          props[name] = value;
	        }
	        props.key = k;
	        if (node.children != null) {
	          return $(node.tagName, props, toChildren(node, defs, k));
	        } else {
	          return $(node.tagName, props);
	        }
	      } else if (node.subtype === 'folded') {
	        k = key + '_' + node.tagName;
	        props = (ref2 = getPropsFromHTMLNode(node, ATTR_WHITELIST)) != null ? ref2 : {};
	        props.key = k;
	        return $(node.startTag.tagName, props, toChildren(node, defs, k));
	      } else if (node.subtype === 'void') {
	        k = key + '_' + node.tagName;
	        props = (ref3 = getPropsFromHTMLNode(node, ATTR_WHITELIST)) != null ? ref3 : {};
	        props.key = k;
	        return $(node.tagName, props);
	      } else if (node.subtype === 'special') {
	        return $('span', {
	          key: key + ':special',
	          style: {
	            color: 'gray'
	          }
	        }, node.value);
	      } else {
	        return $('span', {
	          key: key + ':parse-error',
	          style: {
	            backgroundColor: 'red',
	            color: 'white'
	          }
	        }, node.value);
	      }
	    }
	  };
	
	  htmlWrapperComponent = null;
	
	  rawValueWrapper = null;
	
	  components = null;
	
	  module.exports = function(raw, options) {
	    var ast, customComponents, defs, nodeType, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
	    if (options == null) {
	      options = {};
	    }
	    sanitize = (ref = options.sanitize) != null ? ref : true;
	    htmlWrapperComponent = (ref1 = options.htmlWrapperComponent) != null ? ref1 : defaultHTMLWrapperComponent;
	    rawValueWrapper = (ref2 = options.rawValueWrapper) != null ? ref2 : function(text) {
	      return text;
	    };
	    customComponents = (ref3 = options.customComponents) != null ? ref3 : {};
	    components = {};
	    for (nodeType in defaultComponents) {
	      components[nodeType] = (ref4 = customComponents[nodeType]) != null ? ref4 : defaultComponents[nodeType];
	    }
	    highlight = (ref5 = options.highlight) != null ? ref5 : function(code, lang, key) {
	      return $('pre', {
	        key: key,
	        className: 'code'
	      }, [
	        $('code', {
	          key: key + '-_inner-code'
	        }, code)
	      ]);
	    };
	    ast = mdast.parse(raw, options);
	    ref6 = preprocess(ast, raw, options), ast = ref6[0], defs = ref6[1];
	    ast = (ref7 = typeof options.preprocessAST === "function" ? options.preprocessAST(ast) : void 0) != null ? ref7 : ast;
	    return compile(ast, defs, null, null);
	  };
	
	}).call(this);


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*
	 * Dependencies.
	 */
	
	var Ware = __webpack_require__(175);
	var parser = __webpack_require__(179);
	var stringifier = __webpack_require__(186);
	var File = __webpack_require__(188);
	var utilities = __webpack_require__(183);
	
	/*
	 * Methods.
	 */
	
	var clone = utilities.clone;
	var Parser = parser.Parser;
	var parseProto = Parser.prototype;
	var Compiler = stringifier.Compiler;
	var compileProto = Compiler.prototype;
	
	/**
	 * Throws if passed an exception.
	 *
	 * Here until the following PR is merged into
	 * segmentio/ware:
	 *
	 *   https://github.com/segmentio/ware/pull/21
	 *
	 * @param {Error?} exception
	 */
	function fail(exception) {
	    if (exception) {
	        throw exception;
	    }
	}
	
	/**
	 * Create a custom, cloned, Parser.
	 *
	 * @return {Function}
	 */
	function constructParser() {
	    var customProto;
	    var expressions;
	    var key;
	
	    /**
	     * Extensible prototype.
	     */
	    function CustomProto() {}
	
	    CustomProto.prototype = parseProto;
	
	    customProto = new CustomProto();
	
	    /**
	     * Extensible constructor.
	     */
	    function CustomParser() {
	        Parser.apply(this, arguments);
	    }
	
	    CustomParser.prototype = customProto;
	
	    /*
	     * Construct new objects for things that plugin's
	     * might modify.
	     */
	
	    customProto.blockTokenizers = clone(parseProto.blockTokenizers);
	    customProto.blockMethods = clone(parseProto.blockMethods);
	    customProto.inlineTokenizers = clone(parseProto.inlineTokenizers);
	    customProto.inlineMethods = clone(parseProto.inlineMethods);
	
	    expressions = parseProto.expressions;
	    customProto.expressions = {};
	
	    for (key in expressions) {
	        customProto.expressions[key] = clone(expressions[key]);
	    }
	
	    return CustomParser;
	}
	
	/**
	 * Create a custom, cloned, Compiler.
	 *
	 * @return {Function}
	 */
	function constructCompiler() {
	    var customProto;
	
	    /**
	     * Extensible prototype.
	     */
	    function CustomProto() {}
	
	    CustomProto.prototype = compileProto;
	
	    customProto = new CustomProto();
	
	    /**
	     * Extensible constructor.
	     */
	    function CustomCompiler() {
	        Compiler.apply(this, arguments);
	    }
	
	    CustomCompiler.prototype = customProto;
	
	    return CustomCompiler;
	}
	
	/**
	 * Construct an MDAST instance.
	 *
	 * @constructor {MDAST}
	 */
	function MDAST() {
	    var self = this;
	
	    if (!(self instanceof MDAST)) {
	        return new MDAST();
	    }
	
	    self.ware = new Ware();
	    self.attachers = [];
	
	    self.Parser = constructParser();
	    self.Compiler = constructCompiler();
	}
	
	/**
	 * Attach a plugin.
	 *
	 * @param {Function|Array.<Function>} attach
	 * @param {Object?} options
	 * @return {MDAST}
	 */
	function use(attach, options) {
	    var self = this;
	    var index;
	    var transformer;
	
	    if (!(self instanceof MDAST)) {
	        self = new MDAST();
	    }
	
	    /*
	     * Multiple attachers.
	     */
	
	    if ('length' in attach && typeof attach !== 'function') {
	        index = attach.length;
	
	        while (attach[--index]) {
	            self.use(attach[index]);
	        }
	
	        return self;
	    }
	
	    /*
	     * Single plugin.
	     */
	
	    if (self.attachers.indexOf(attach) === -1) {
	        transformer = attach(self, options);
	
	        self.attachers.push(attach);
	
	        if (transformer) {
	            self.ware.use(transformer);
	        }
	    }
	
	    return self;
	}
	
	/**
	 * Apply transformers to `node`.
	 *
	 * @param {Node} ast
	 * @param {File?} [file]
	 * @param {Function?} [done]
	 * @return {Node} - `ast`.
	 */
	function run(ast, file, done) {
	    var self = this;
	
	    if (typeof file === 'function') {
	        done = file;
	        file = null;
	    }
	
	    file = new File(file);
	
	    done = typeof done === 'function' ? done : fail;
	
	    if (typeof ast !== 'object' && typeof ast.type !== 'string') {
	        utilities.raise(ast, 'ast');
	    }
	
	    /*
	     * Only run when this is an instance of MDAST.
	     */
	
	    if (self.ware) {
	        self.ware.run(ast, file, done);
	    } else {
	        done(null, ast, file);
	    }
	
	    return ast;
	}
	
	/**
	 * Wrapper to pass a file to `parser`.
	 */
	function parse(value, options) {
	    return parser.call(this, new File(value), options);
	}
	
	/**
	 * Wrapper to pass a file to `stringifier`.
	 */
	function stringify(ast, file, options) {
	    if (options === null || options === undefined) {
	        options = file;
	        file = null;
	    }
	
	    return stringifier.call(this, ast, new File(file), options);
	}
	
	/**
	 * Parse a value and apply transformers.
	 *
	 * @param {string|File} value
	 * @param {Object?} [options]
	 * @param {Function?} [done]
	 * @return {string?}
	 */
	function process(value, options, done) {
	    var file = new File(value);
	    var self = this instanceof MDAST ? this : new MDAST();
	    var result = null;
	    var ast;
	
	    if (typeof options === 'function') {
	        done = options;
	        options = null;
	    }
	
	    if (!options) {
	        options = {};
	    }
	
	    /**
	     * Invoked when `run` completes. Hoists `result` into
	     * the upper scope to return something for sync
	     * operations.
	     */
	    function callback(exception) {
	        if (exception) {
	            (done || fail)(exception);
	        } else {
	            result = self.stringify(ast, file, options);
	
	            if (done) {
	                done(null, result, file);
	            }
	        }
	    }
	
	    ast = self.parse(file, options);
	    self.run(ast, file, callback);
	
	    return result;
	}
	
	/*
	 * Methods.
	 */
	
	var proto = MDAST.prototype;
	
	proto.use = use;
	proto.parse = parse;
	proto.run = run;
	proto.stringify = stringify;
	proto.process = process;
	
	/*
	 * Functions.
	 */
	
	MDAST.use = use;
	MDAST.parse = parse;
	MDAST.run = run;
	MDAST.stringify = stringify;
	MDAST.process = process;
	
	/*
	 * Expose `mdast`.
	 */
	
	module.exports = MDAST;


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module Dependencies
	 */
	
	var slice = [].slice;
	var wrap = __webpack_require__(176);
	
	/**
	 * Expose `Ware`.
	 */
	
	module.exports = Ware;
	
	/**
	 * Throw an error.
	 *
	 * @param {Error} error
	 */
	
	function fail (err) {
	  throw err;
	}
	
	/**
	 * Initialize a new `Ware` manager, with optional `fns`.
	 *
	 * @param {Function or Array or Ware} fn (optional)
	 */
	
	function Ware (fn) {
	  if (!(this instanceof Ware)) return new Ware(fn);
	  this.fns = [];
	  if (fn) this.use(fn);
	}
	
	/**
	 * Use a middleware `fn`.
	 *
	 * @param {Function or Array or Ware} fn
	 * @return {Ware}
	 */
	
	Ware.prototype.use = function (fn) {
	  if (fn instanceof Ware) {
	    return this.use(fn.fns);
	  }
	
	  if (fn instanceof Array) {
	    for (var i = 0, f; f = fn[i++];) this.use(f);
	    return this;
	  }
	
	  this.fns.push(fn);
	  return this;
	};
	
	/**
	 * Run through the middleware with the given `args` and optional `callback`.
	 *
	 * @param {Mixed} args...
	 * @param {Function} callback (optional)
	 * @return {Ware}
	 */
	
	Ware.prototype.run = function () {
	  var fns = this.fns;
	  var ctx = this;
	  var i = 0;
	  var last = arguments[arguments.length - 1];
	  var done = 'function' == typeof last && last;
	  var args = done
	    ? slice.call(arguments, 0, arguments.length - 1)
	    : slice.call(arguments);
	
	  // next step
	  function next (err) {
	    if (err) return (done || fail)(err);
	    var fn = fns[i++];
	    var arr = slice.call(args);
	
	    if (!fn) {
	      return done && done.apply(null, [null].concat(args));
	    }
	
	    wrap(fn, next).apply(ctx, arr);
	  }
	
	  next();
	
	  return this;
	};


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module Dependencies
	 */
	
	var noop = function(){};
	var co = __webpack_require__(177);
	
	/**
	 * Export `wrap-fn`
	 */
	
	module.exports = wrap;
	
	/**
	 * Wrap a function to support
	 * sync, async, and gen functions.
	 *
	 * @param {Function} fn
	 * @param {Function} done
	 * @return {Function}
	 * @api public
	 */
	
	function wrap(fn, done) {
	  done = once(done || noop);
	
	  return function() {
	    // prevents arguments leakage
	    // see https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) args[i] = arguments[i];
	
	    var ctx = this;
	
	    // done
	    if (!fn) {
	      return done.apply(ctx, [null].concat(args));
	    }
	
	    // async
	    if (fn.length > args.length) {
	      // NOTE: this only handles uncaught synchronous errors
	      try {
	        return fn.apply(ctx, args.concat(done));
	      } catch (e) {
	        return done(e);
	      }
	    }
	
	    // generator
	    if (generator(fn)) {
	      return co(fn).apply(ctx, args.concat(done));
	    }
	
	    // sync
	    return sync(fn, done).apply(ctx, args);
	  }
	}
	
	/**
	 * Wrap a synchronous function execution.
	 *
	 * @param {Function} fn
	 * @param {Function} done
	 * @return {Function}
	 * @api private
	 */
	
	function sync(fn, done) {
	  return function () {
	    var ret;
	
	    try {
	      ret = fn.apply(this, arguments);
	    } catch (err) {
	      return done(err);
	    }
	
	    if (promise(ret)) {
	      ret.then(function (value) { done(null, value); }, done);
	    } else {
	      ret instanceof Error ? done(ret) : done(null, ret);
	    }
	  }
	}
	
	/**
	 * Is `value` a generator?
	 *
	 * @param {Mixed} value
	 * @return {Boolean}
	 * @api private
	 */
	
	function generator(value) {
	  return value
	    && value.constructor
	    && 'GeneratorFunction' == value.constructor.name;
	}
	
	
	/**
	 * Is `value` a promise?
	 *
	 * @param {Mixed} value
	 * @return {Boolean}
	 * @api private
	 */
	
	function promise(value) {
	  return value && 'function' == typeof value.then;
	}
	
	/**
	 * Once
	 */
	
	function once(fn) {
	  return function() {
	    var ret = fn.apply(this, arguments);
	    fn = noop;
	    return ret;
	  };
	}


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {
	/**
	 * slice() reference.
	 */
	
	var slice = Array.prototype.slice;
	
	/**
	 * Expose `co`.
	 */
	
	module.exports = co;
	
	/**
	 * Wrap the given generator `fn` and
	 * return a thunk.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 * @api public
	 */
	
	function co(fn) {
	  var isGenFun = isGeneratorFunction(fn);
	
	  return function (done) {
	    var ctx = this;
	
	    // in toThunk() below we invoke co()
	    // with a generator, so optimize for
	    // this case
	    var gen = fn;
	
	    // we only need to parse the arguments
	    // if gen is a generator function.
	    if (isGenFun) {
	      var args = slice.call(arguments), len = args.length;
	      var hasCallback = len && 'function' == typeof args[len - 1];
	      done = hasCallback ? args.pop() : error;
	      gen = fn.apply(this, args);
	    } else {
	      done = done || error;
	    }
	
	    next();
	
	    // #92
	    // wrap the callback in a setImmediate
	    // so that any of its errors aren't caught by `co`
	    function exit(err, res) {
	      setImmediate(function(){
	        done.call(ctx, err, res);
	      });
	    }
	
	    function next(err, res) {
	      var ret;
	
	      // multiple args
	      if (arguments.length > 2) res = slice.call(arguments, 1);
	
	      // error
	      if (err) {
	        try {
	          ret = gen.throw(err);
	        } catch (e) {
	          return exit(e);
	        }
	      }
	
	      // ok
	      if (!err) {
	        try {
	          ret = gen.next(res);
	        } catch (e) {
	          return exit(e);
	        }
	      }
	
	      // done
	      if (ret.done) return exit(null, ret.value);
	
	      // normalize
	      ret.value = toThunk(ret.value, ctx);
	
	      // run
	      if ('function' == typeof ret.value) {
	        var called = false;
	        try {
	          ret.value.call(ctx, function(){
	            if (called) return;
	            called = true;
	            next.apply(ctx, arguments);
	          });
	        } catch (e) {
	          setImmediate(function(){
	            if (called) return;
	            called = true;
	            next(e);
	          });
	        }
	        return;
	      }
	
	      // invalid
	      next(new TypeError('You may only yield a function, promise, generator, array, or object, '
	        + 'but the following was passed: "' + String(ret.value) + '"'));
	    }
	  }
	}
	
	/**
	 * Convert `obj` into a normalized thunk.
	 *
	 * @param {Mixed} obj
	 * @param {Mixed} ctx
	 * @return {Function}
	 * @api private
	 */
	
	function toThunk(obj, ctx) {
	
	  if (isGeneratorFunction(obj)) {
	    return co(obj.call(ctx));
	  }
	
	  if (isGenerator(obj)) {
	    return co(obj);
	  }
	
	  if (isPromise(obj)) {
	    return promiseToThunk(obj);
	  }
	
	  if ('function' == typeof obj) {
	    return obj;
	  }
	
	  if (isObject(obj) || Array.isArray(obj)) {
	    return objectToThunk.call(ctx, obj);
	  }
	
	  return obj;
	}
	
	/**
	 * Convert an object of yieldables to a thunk.
	 *
	 * @param {Object} obj
	 * @return {Function}
	 * @api private
	 */
	
	function objectToThunk(obj){
	  var ctx = this;
	  var isArray = Array.isArray(obj);
	
	  return function(done){
	    var keys = Object.keys(obj);
	    var pending = keys.length;
	    var results = isArray
	      ? new Array(pending) // predefine the array length
	      : new obj.constructor();
	    var finished;
	
	    if (!pending) {
	      setImmediate(function(){
	        done(null, results)
	      });
	      return;
	    }
	
	    // prepopulate object keys to preserve key ordering
	    if (!isArray) {
	      for (var i = 0; i < pending; i++) {
	        results[keys[i]] = undefined;
	      }
	    }
	
	    for (var i = 0; i < keys.length; i++) {
	      run(obj[keys[i]], keys[i]);
	    }
	
	    function run(fn, key) {
	      if (finished) return;
	      try {
	        fn = toThunk(fn, ctx);
	
	        if ('function' != typeof fn) {
	          results[key] = fn;
	          return --pending || done(null, results);
	        }
	
	        fn.call(ctx, function(err, res){
	          if (finished) return;
	
	          if (err) {
	            finished = true;
	            return done(err);
	          }
	
	          results[key] = res;
	          --pending || done(null, results);
	        });
	      } catch (err) {
	        finished = true;
	        done(err);
	      }
	    }
	  }
	}
	
	/**
	 * Convert `promise` to a thunk.
	 *
	 * @param {Object} promise
	 * @return {Function}
	 * @api private
	 */
	
	function promiseToThunk(promise) {
	  return function(fn){
	    promise.then(function(res) {
	      fn(null, res);
	    }, fn);
	  }
	}
	
	/**
	 * Check if `obj` is a promise.
	 *
	 * @param {Object} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isPromise(obj) {
	  return obj && 'function' == typeof obj.then;
	}
	
	/**
	 * Check if `obj` is a generator.
	 *
	 * @param {Mixed} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isGenerator(obj) {
	  return obj && 'function' == typeof obj.next && 'function' == typeof obj.throw;
	}
	
	/**
	 * Check if `obj` is a generator function.
	 *
	 * @param {Mixed} obj
	 * @return {Boolean}
	 * @api private
	 */
	
	function isGeneratorFunction(obj) {
	  return obj && obj.constructor && 'GeneratorFunction' == obj.constructor.name;
	}
	
	/**
	 * Check for plain object.
	 *
	 * @param {Mixed} val
	 * @return {Boolean}
	 * @api private
	 */
	
	function isObject(val) {
	  return val && Object == val.constructor;
	}
	
	/**
	 * Throw `err` in a new stack.
	 *
	 * This is used when co() is invoked
	 * without supplying a callback, which
	 * should only be for demonstrational
	 * purposes.
	 *
	 * @param {Error} err
	 * @api private
	 */
	
	function error(err) {
	  if (!err) return;
	  setImmediate(function(){
	    throw err;
	  });
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(178).setImmediate))

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(17).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(178).setImmediate, __webpack_require__(178).clearImmediate))

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer. All rights reserved.
	 * @module Parse
	 * @fileoverview Parse a markdown document into an
	 *   abstract syntax tree.
	 */
	
	'use strict';
	
	/*
	 * Dependencies.
	 */
	
	var he = __webpack_require__(180);
	var repeat = __webpack_require__(182);
	var utilities = __webpack_require__(183);
	var defaultExpressions = __webpack_require__(184);
	var defaultOptions = __webpack_require__(185).parse;
	
	/*
	 * Methods.
	 */
	
	var clone = utilities.clone;
	var copy = utilities.copy;
	var raise = utilities.raise;
	var trim = utilities.trim;
	var trimRightLines = utilities.trimRightLines;
	var clean = utilities.clean;
	var validate = utilities.validate;
	var normalize = utilities.normalizeIdentifier;
	var objectCreate = utilities.create;
	var arrayPush = [].push;
	
	/*
	 * Characters.
	 */
	
	var AT_SIGN = '@';
	var CARET = '^';
	var EQUALS = '=';
	var EXCLAMATION_MARK = '!';
	var MAILTO_PROTOCOL = 'mailto:';
	var NEW_LINE = '\n';
	var SPACE = ' ';
	var TAB = '\t';
	var EMPTY = '';
	var LT = '<';
	var GT = '>';
	var BRACKET_OPEN = '[';
	
	/*
	 * Types.
	 */
	
	var BLOCK = 'block';
	var INLINE = 'inline';
	var HORIZONTAL_RULE = 'horizontalRule';
	var HTML = 'html';
	var YAML = 'yaml';
	var TABLE = 'table';
	var TABLE_CELL = 'tableCell';
	var TABLE_HEADER = 'tableHeader';
	var TABLE_ROW = 'tableRow';
	var PARAGRAPH = 'paragraph';
	var TEXT = 'text';
	var CODE = 'code';
	var LIST = 'list';
	var LIST_ITEM = 'listItem';
	var FOOTNOTE_DEFINITION = 'footnoteDefinition';
	var HEADING = 'heading';
	var BLOCKQUOTE = 'blockquote';
	var LINK = 'link';
	var IMAGE = 'image';
	var FOOTNOTE = 'footnote';
	var ESCAPE = 'escape';
	var STRONG = 'strong';
	var EMPHASIS = 'emphasis';
	var DELETE = 'delete';
	var INLINE_CODE = 'inlineCode';
	var BREAK = 'break';
	var ROOT = 'root';
	
	/**
	 * Wrapper around he's `decode` function.
	 *
	 * @example
	 *   decode('&amp;'); // '&'
	 *   decode('&amp'); // '&'
	 *
	 * @param {string} value
	 * @param {function(string)} eat
	 * @return {string}
	 * @throws {Error} - When `eat.file.quiet` is not `true`.
	 *   However, by default `he` does not throw on incorrect
	 *   encoded entities, but when
	 *   `he.decode.options.strict: true`, they occur on
	 *   entities with a missing closing semi-colon.
	 */
	function decode(value, eat) {
	    try {
	        return he.decode(value);
	    } catch (exception) {
	        eat.file.fail(exception, eat.now());
	    }
	}
	
	/**
	 * Factory to de-escape a value, based on an expression
	 * at `key` in `scope`.
	 *
	 * @example
	 *   var expressions = {escape: /\\(a)/}
	 *   var descape = descapeFactory(expressions, 'escape');
	 *
	 * @param {Object} scope - Map of expressions.
	 * @param {string} key - Key in `map` at which the
	 *   non-global expression exists.
	 * @return {function(string): string} - Function which
	 *   takes a value and returns its unescaped version.
	 */
	function descapeFactory(scope, key) {
	    var globalExpression;
	    var expression;
	
	    /**
	     * Private method to get a global expression
	     * from the expression at `key` in `scope`.
	     * This method is smart about not recreating
	     * the expressions every time.
	     *
	     * @private
	     * @return {RegExp}
	     */
	    function generate() {
	        if (scope[key] !== globalExpression) {
	            globalExpression = scope[key];
	            expression = new RegExp(
	                scope[key].source.replace(CARET, EMPTY), 'g'
	            );
	        }
	
	        return expression;
	    }
	
	    /**
	     * De-escape a string using the expression at `key`
	     * in `scope`.
	     *
	     * @example
	     *   var expressions = {escape: /\\(a)/}
	     *   var descape = descapeFactory(expressions, 'escape');
	     *   descape('\a'); // 'a'
	     *
	     * @param {string} value - Escaped string.
	     * @return {string} - Unescaped string.
	     */
	    function descape(value) {
	        return value.replace(generate(), '$1');
	    }
	
	    return descape;
	}
	
	/*
	 * Tab size.
	 */
	
	var TAB_SIZE = 4;
	
	/*
	 * Expressions.
	 */
	
	var EXPRESSION_RIGHT_ALIGNMENT = /^[ \t]*-+:[ \t]*$/;
	var EXPRESSION_CENTER_ALIGNMENT = /^[ \t]*:-+:[ \t]*$/;
	var EXPRESSION_LEFT_ALIGNMENT = /^[ \t]*:-+[ \t]*$/;
	var EXPRESSION_TABLE_FENCE = /^[ \t]*|\|[ \t]*$/g;
	var EXPRESSION_TABLE_INITIAL = /^[ \t]*\|/g;
	var EXPRESSION_TABLE_CONTENT =
	    /[ \t]*?((?:\\[\s\S]|[^\|])+?)([ \t]?\|[ \t]?\n?|\n?$)/g;
	var EXPRESSION_TABLE_BORDER = /[ \t]*\|[ \t]*/;
	var EXPRESSION_BLOCK_QUOTE = /^[ \t]*>[ \t]?/gm;
	var EXPRESSION_BULLET = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t)([^\n]*)/;
	var EXPRESSION_PEDANTIC_BULLET = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/;
	var EXPRESSION_INITIAL_INDENT = /^( {1,4}|\t)?/gm;
	var EXPRESSION_INITIAL_TAB = /^( {4}|\t)?/gm;
	var EXPRESSION_HTML_LINK_OPEN = /^<a /i;
	var EXPRESSION_HTML_LINK_CLOSE = /^<\/a>/i;
	var EXPRESSION_LOOSE_LIST_ITEM = /\n\n(?!\s*$)/;
	var EXPRESSION_TASK_ITEM = /^\[([\ \t]|x|X)\][\ \t]/;
	
	/*
	 * A map of characters, and their column length,
	 * which can be used as indentation.
	 */
	
	var INDENTATION_CHARACTERS = objectCreate();
	
	INDENTATION_CHARACTERS[SPACE] = SPACE.length;
	INDENTATION_CHARACTERS[TAB] = TAB_SIZE;
	
	/**
	 * Gets indentation information for a line.
	 *
	 * @example
	 *   getIndent('  foo');
	 *   // {indent: 2, stops: {1: 0, 2: 1}}
	 *
	 *   getIndent('\tfoo');
	 *   // {indent: 4, stops: {4: 0}}
	 *
	 *   getIndent('  \tfoo');
	 *   // {indent: 4, stops: {1: 0, 2: 1, 4: 2}}
	 *
	 *   getIndent('\t  foo')
	 *   // {indent: 6, stops: {4: 0, 5: 1, 6: 2}}
	 *
	 * @param {string} value - Indented line.
	 * @return {Object}
	 */
	function getIndent(value) {
	    var index = 0;
	    var indent = 0;
	    var character = value.charAt(index);
	    var stops = {};
	    var size;
	
	    while (character in INDENTATION_CHARACTERS) {
	        size = INDENTATION_CHARACTERS[character];
	
	        indent += size;
	
	        if (size > 1) {
	            indent = Math.floor(indent / size) * size;
	        }
	
	        stops[indent] = index;
	
	        character = value.charAt(++index);
	    }
	
	    return {
	        'indent': indent,
	        'stops': stops
	    };
	}
	
	/**
	 * Remove the minimum indent from every line in `value`.
	 * Supports both tab, spaced, and mixed indentation (as
	 * well as possible).
	 *
	 * @example
	 *   removeIndentation('  foo'); // 'foo'
	 *   removeIndentation('    foo', 2); // '  foo'
	 *   removeIndentation('\tfoo', 2); // '  foo'
	 *   removeIndentation('  foo\n bar'); // ' foo\n bar'
	 *
	 * @param {string} value
	 * @param {number?} [maximum] - Maximum indentation
	 *   to remove.
	 * @return {string} - Unindented `value`.
	 */
	function removeIndentation(value, maximum) {
	    var values = value.split(NEW_LINE);
	    var position = values.length + 1;
	    var minIndent = Infinity;
	    var matrix = [];
	    var index;
	    var indentation;
	    var stops;
	    var padding;
	
	    values.unshift(repeat(SPACE, maximum) + EXCLAMATION_MARK);
	
	    while (position--) {
	        indentation = getIndent(values[position]);
	
	        matrix[position] = indentation.stops;
	
	        if (trim(values[position]).length === 0) {
	            continue;
	        }
	
	        if (indentation.indent) {
	            if (indentation.indent > 0 && indentation.indent < minIndent) {
	                minIndent = indentation.indent;
	            }
	        } else {
	            minIndent = Infinity;
	
	            break;
	        }
	    }
	
	    if (minIndent !== Infinity) {
	        position = values.length;
	
	        while (position--) {
	            stops = matrix[position];
	            index = minIndent;
	
	            while (index && !(index in stops)) {
	                index--;
	            }
	
	            if (
	                trim(values[position]).length !== 0 &&
	                minIndent &&
	                index !== minIndent
	            ) {
	                padding = TAB;
	            } else {
	                padding = EMPTY;
	            }
	
	            values[position] = padding + values[position].slice(
	                index in stops ? stops[index] + 1 : 0
	            );
	        }
	    }
	
	    values.shift();
	
	    return values.join(NEW_LINE);
	}
	
	/**
	 * Ensure that `value` is at least indented with
	 * `indent` spaces.  Does not support tabs. Does support
	 * multiple lines.
	 *
	 * @example
	 *   ensureIndentation('foo', 2); // '  foo'
	 *   ensureIndentation('  foo', 4); // '    foo'
	 *
	 * @param {string} value
	 * @param {number} indent - The maximum amount of
	 *   spacing to insert.
	 * @return {string} - indented `value`.
	 */
	function ensureIndentation(value, indent) {
	    var values = value.split(NEW_LINE);
	    var length = values.length;
	    var index = -1;
	    var line;
	    var position;
	
	    while (++index < length) {
	        line = values[index];
	
	        position = -1;
	
	        while (++position < indent) {
	            if (line.charAt(position) !== SPACE) {
	                values[index] = repeat(SPACE, indent - position) + line;
	                break;
	            }
	        }
	    }
	
	    return values.join(NEW_LINE);
	}
	
	/**
	 * Get the alignment from a table rule.
	 *
	 * @example
	 *   getAlignment([':-', ':-:', '-:', '--']);
	 *   // ['left', 'center', 'right', null];
	 *
	 * @param {Array.<string>} cells
	 * @return {Array.<string?>}
	 */
	function getAlignment(cells) {
	    var results = [];
	    var index = -1;
	    var length = cells.length;
	    var alignment;
	
	    while (++index < length) {
	        alignment = cells[index];
	
	        if (EXPRESSION_RIGHT_ALIGNMENT.test(alignment)) {
	            results[index] = 'right';
	        } else if (EXPRESSION_CENTER_ALIGNMENT.test(alignment)) {
	            results[index] = 'center';
	        } else if (EXPRESSION_LEFT_ALIGNMENT.test(alignment)) {
	            results[index] = 'left';
	        } else {
	            results[index] = null;
	        }
	    }
	
	    return results;
	}
	
	/**
	 * Construct a state `toggler`: a function which inverses
	 * `property` in context based on its current value.
	 * The by `toggler` returned function restores that value.
	 *
	 * @example
	 *   var context = {};
	 *   var key = 'foo';
	 *   var val = true;
	 *   context[key] = val;
	 *   context.enter = stateToggler(key, val);
	 *   context[key]; // true
	 *   var exit = context.enter();
	 *   context[key]; // false
	 *   var nested = context.enter();
	 *   context[key]; // false
	 *   nested();
	 *   context[key]; // false
	 *   exit();
	 *   context[key]; // true
	 *
	 * @param {string} key - Property to toggle.
	 * @param {boolean} state - It's default state.
	 * @return {function(): function()} - Enter.
	 */
	function stateToggler(key, state) {
	    /**
	     * Construct a toggler for the bound `key`.
	     *
	     * @return {Function} - Exit state.
	     */
	    function enter() {
	        var self = this;
	        var current = self[key];
	
	        self[key] = !state;
	
	        /**
	         * State canceler, cancels the state, if allowed.
	         */
	        function exit() {
	            self[key] = current;
	        }
	
	        return exit;
	    }
	
	    return enter;
	}
	
	/**
	 * Construct a state toggler which doesn't toggle.
	 *
	 * @example
	 *   var context = {};
	 *   var key = 'foo';
	 *   var val = true;
	 *   context[key] = val;
	 *   context.enter = noopToggler();
	 *   context[key]; // true
	 *   var exit = context.enter();
	 *   context[key]; // true
	 *   exit();
	 *   context[key]; // true
	 *
	 * @return {function(): function()} - Enter.
	 */
	function noopToggler() {
	    /**
	     * No-operation.
	     */
	    function exit() {}
	
	    /**
	     * @return {Function}
	     */
	    function enter() {
	        return exit;
	    }
	
	    return enter;
	}
	
	/*
	 * Define nodes of a type which can be merged.
	 */
	
	var MERGEABLE_NODES = objectCreate();
	
	/**
	 * Merge two text nodes: `token` into `prev`.
	 *
	 * @param {Object} prev - Preceding sibling.
	 * @param {Object} token - Following sibling.
	 * @return {Object} - `prev`.
	 */
	MERGEABLE_NODES.text = function (prev, token) {
	    prev.value += token.value;
	
	    return prev;
	};
	
	/**
	 * Merge two blockquotes: `token` into `prev`, unless in
	 * CommonMark mode.
	 *
	 * @param {Object} prev - Preceding sibling.
	 * @param {Object} token - Following sibling.
	 * @return {Object} - `prev`, or `token` in CommonMark mode.
	 */
	MERGEABLE_NODES.blockquote = function (prev, token) {
	    if (this.options.commonmark) {
	        return token;
	    }
	
	    prev.children = prev.children.concat(token.children);
	
	    return prev;
	};
	
	/**
	 * Merge two lists: `token` into `prev`. Knows, about
	 * which bullets were used.
	 *
	 * @param {Object} prev - Preceding sibling.
	 * @param {Object} token - Following sibling.
	 * @return {Object} - `prev`, or `token` when the lists are
	 *   of different types (a different bullet is used).
	 */
	MERGEABLE_NODES.list = function (prev, token) {
	    if (
	        !this.currentBullet ||
	        this.currentBullet !== this.previousBullet ||
	        this.currentBullet.length !== 1
	    ) {
	        return token;
	    }
	
	    prev.children = prev.children.concat(token.children);
	
	    return prev;
	};
	
	/**
	 * Tokenise a line.  Unsets `currentBullet` and
	 * `previousBullet` if more than one lines are found, thus
	 * preventing lists from merging when they use different
	 * bullets.
	 *
	 * @example
	 *   tokenizeNewline(eat, '\n\n');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Lines.
	 */
	function tokenizeNewline(eat, $0) {
	    if ($0.length > 1) {
	        this.currentBullet = null;
	        this.previousBullet = null;
	    }
	
	    eat($0);
	}
	
	/**
	 * Tokenise an indented code block.
	 *
	 * @example
	 *   tokenizeCode(eat, '\tfoo');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole code.
	 * @return {Node} - `code` node.
	 */
	function tokenizeCode(eat, $0) {
	    $0 = trimRightLines($0);
	
	    return eat($0)(this.renderCodeBlock(
	        removeIndentation($0, TAB_SIZE), null, eat)
	    );
	}
	
	/**
	 * Tokenise a fenced code block.
	 *
	 * @example
	 *   var $0 = '```js\nfoo()\n```';
	 *   tokenizeFences(eat, $0, '', '```', '`', 'js', 'foo()\n');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole code.
	 * @param {string} $1 - Initial spacing.
	 * @param {string} $2 - Initial fence.
	 * @param {string} $3 - Fence marker.
	 * @param {string} $4 - Programming language flag.
	 * @param {string} $5 - Content.
	 * @return {Node} - `code` node.
	 */
	function tokenizeFences(eat, $0, $1, $2, $3, $4, $5) {
	    $0 = trimRightLines($0);
	
	    /*
	     * If the initial fence was preceded by spaces,
	     * exdent that amount of white space from the code
	     * block.  Because it's possible that the code block
	     * is exdented, we first have to ensure at least
	     * those spaces are available.
	     */
	
	    if ($1) {
	        $5 = removeIndentation(ensureIndentation($5, $1.length), $1.length);
	    }
	
	    return eat($0)(this.renderCodeBlock($5, $4, eat));
	}
	
	/**
	 * Tokenise an ATX-style heading.
	 *
	 * @example
	 *   tokenizeHeading(eat, ' # foo', ' ', '#', ' ', 'foo');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole heading.
	 * @param {string} $1 - Initial spacing.
	 * @param {string} $2 - Hashes.
	 * @param {string} $3 - Internal spacing.
	 * @param {string} $4 - Content.
	 * @return {Node} - `heading` node.
	 */
	function tokenizeHeading(eat, $0, $1, $2, $3, $4) {
	    var now = eat.now();
	
	    now.column += ($1 + $2 + ($3 || '')).length;
	
	    return eat($0)(this.renderHeading($4, $2.length, now));
	}
	
	/**
	 * Tokenise a Setext-style heading.
	 *
	 * @example
	 *   tokenizeLineHeading(eat, 'foo\n===', '', 'foo', '=');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole heading.
	 * @param {string} $1 - Initial spacing.
	 * @param {string} $2 - Content.
	 * @param {string} $3 - Underline marker.
	 * @return {Node} - `heading` node.
	 */
	function tokenizeLineHeading(eat, $0, $1, $2, $3) {
	    var now = eat.now();
	
	    now.column += $1.length;
	
	    return eat($0)(this.renderHeading($2, $3 === EQUALS ? 1 : 2, now));
	}
	
	/**
	 * Tokenise a horizontal rule.
	 *
	 * @example
	 *   tokenizeHorizontalRule(eat, '***');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole rule.
	 * @return {Node} - `horizontalRule` node.
	 */
	function tokenizeHorizontalRule(eat, $0) {
	    return eat($0)(this.renderVoid(HORIZONTAL_RULE));
	}
	
	/**
	 * Tokenise a blockquote.
	 *
	 * @example
	 *   tokenizeBlockquote(eat, '> Foo');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole blockquote.
	 * @return {Node} - `blockquote` node.
	 */
	function tokenizeBlockquote(eat, $0) {
	    var now = eat.now();
	    var indent = this.indent(now.line);
	    var value = trimRightLines($0);
	    var add = eat(value);
	
	    value = value.replace(EXPRESSION_BLOCK_QUOTE, function (prefix) {
	        indent(prefix.length);
	
	        return '';
	    });
	
	    return add(this.renderBlockquote(value, now));
	}
	
	/**
	 * Tokenise a list.
	 *
	 * @example
	 *   tokenizeList(eat, '- Foo', '', '-');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole list.
	 * @param {string} $1 - Indent.
	 * @param {string} $2 - Bullet.
	 * @return {Node} - `list` node.
	 */
	function tokenizeList(eat, $0, $1, $2) {
	    var self = this;
	    var firstBullet = $2;
	    var value = trimRightLines($0);
	    var matches = value.match(self.rules.item);
	    var length = matches.length;
	    var index = 0;
	    var isLoose = false;
	    var now;
	    var bullet;
	    var item;
	    var enterTop;
	    var exitBlockquote;
	    var node;
	    var indent;
	    var size;
	    var position;
	    var end;
	
	    /*
	     * Determine if all list-items belong to the
	     * same list.
	     */
	
	    if (!self.options.pedantic) {
	        while (++index < length) {
	            bullet = self.rules.bullet.exec(matches[index])[0];
	
	            if (
	                firstBullet !== bullet &&
	                (
	                    firstBullet.length === 1 && bullet.length === 1 ||
	                    bullet.charAt(bullet.length - 1) !==
	                    firstBullet.charAt(firstBullet.length - 1)
	                )
	            ) {
	                matches = matches.slice(0, index);
	                matches[index - 1] = trimRightLines(matches[index - 1]);
	
	                length = matches.length;
	
	                break;
	            }
	        }
	    }
	
	    if (self.options.commonmark) {
	        index = -1;
	
	        while (++index < length) {
	            item = matches[index];
	            indent = self.rules.indent.exec(item);
	            indent = indent[1] + repeat(SPACE, indent[2].length) + indent[3];
	            size = getIndent(indent).indent;
	            position = indent.length;
	            end = item.length;
	
	            while (++position < end) {
	                if (
	                    item.charAt(position) === NEW_LINE &&
	                    item.charAt(position - 1) === NEW_LINE &&
	                    getIndent(item.slice(position + 1)).indent < size
	                ) {
	                    matches[index] = item.slice(0, position - 1);
	
	                    matches = matches.slice(0, index + 1);
	                    length = matches.length;
	
	                    break;
	                }
	            }
	        }
	    }
	
	    self.previousBullet = self.currentBullet;
	    self.currentBullet = firstBullet;
	
	    index = -1;
	
	    node = eat(matches.join(NEW_LINE)).reset(
	        self.renderList([], firstBullet)
	    );
	
	    enterTop = self.exitTop();
	    exitBlockquote = self.enterBlockquote();
	
	    while (++index < length) {
	        item = matches[index];
	        now = eat.now();
	
	        item = eat(item)(self.renderListItem(item, now), node);
	
	        if (item.loose) {
	            isLoose = true;
	        }
	
	        if (index !== length - 1) {
	            eat(NEW_LINE);
	        }
	    }
	
	    node.loose = isLoose;
	
	    enterTop();
	    exitBlockquote();
	
	    return node;
	}
	
	/**
	 * Tokenise HTML.
	 *
	 * @example
	 *   tokenizeHtml(eat, '<span>foo</span>');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole HTML.
	 * @return {Node} - `html` node.
	 */
	function tokenizeHtml(eat, $0) {
	    $0 = trimRightLines($0);
	
	    return eat($0)(this.renderRaw(HTML, $0));
	}
	
	/**
	 * Tokenise a definition.
	 *
	 * @example
	 *   var $0 = '[foo]: http://example.com "Example Domain"';
	 *   var $1 = 'foo';
	 *   var $2 = 'http://example.com';
	 *   var $3 = 'Example Domain';
	 *   tokenizeDefinition(eat, $0, $1, $2, $3);
	 *
	 * @property {boolean} onlyAtTop
	 * @property {boolean} notInBlockquote
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole definition.
	 * @param {string} $1 - Key.
	 * @param {string} $2 - URL.
	 * @param {string} $3 - Title.
	 * @return {Node} - `definition` node.
	 */
	function tokenizeDefinition(eat, $0, $1, $2, $3) {
	    var link = $2;
	
	    /*
	     * Remove angle-brackets from `link`.
	     */
	
	    if (link.charAt(0) === LT && link.charAt(link.length - 1) === GT) {
	        link = link.slice(1, -1);
	    }
	
	    return eat($0)({
	        'type': 'definition',
	        'identifier': normalize($1),
	        'title': $3 ? decode(this.descape($3), eat) : null,
	        'link': decode(this.descape(link), eat)
	    });
	}
	
	tokenizeDefinition.onlyAtTop = true;
	tokenizeDefinition.notInBlockquote = true;
	
	/**
	 * Tokenise YAML front matter.
	 *
	 * @example
	 *   var $0 = '---\nfoo: bar\n---';
	 *   var $1 = 'foo: bar';
	 *   tokenizeYAMLFrontMatter(eat, $0, $1);
	 *
	 * @property {boolean} onlyAtStart
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole front matter.
	 * @param {string} $1 - Content.
	 * @return {Node} - `yaml` node.
	 */
	function tokenizeYAMLFrontMatter(eat, $0, $1) {
	    return eat($0)(this.renderRaw(YAML, $1 ? trimRightLines($1) : EMPTY));
	}
	
	tokenizeYAMLFrontMatter.onlyAtStart = true;
	
	/**
	 * Tokenise a footnote definition.
	 *
	 * @example
	 *   var $0 = '[foo]: Bar.';
	 *   var $1 = '[foo]';
	 *   var $2 = 'foo';
	 *   var $3 = 'Bar.';
	 *   tokenizeFootnoteDefinition(eat, $0, $1, $2, $3);
	 *
	 * @property {boolean} onlyAtTop
	 * @property {boolean} notInBlockquote
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole definition.
	 * @param {string} $1 - Whole key.
	 * @param {string} $2 - Key.
	 * @param {string} $3 - Whole value.
	 * @return {Node} - `footnoteDefinition` node.
	 */
	function tokenizeFootnoteDefinition(eat, $0, $1, $2, $3) {
	    var self = this;
	    var now = eat.now();
	    var indent = self.indent(now.line);
	
	    $3 = $3.replace(EXPRESSION_INITIAL_TAB, function (value) {
	        indent(value.length);
	
	        return EMPTY;
	    });
	
	    now.column += $1.length;
	
	    return eat($0)(self.renderFootnoteDefinition(normalize($2), $3, now));
	}
	
	tokenizeFootnoteDefinition.onlyAtTop = true;
	tokenizeFootnoteDefinition.notInBlockquote = true;
	
	/**
	 * Tokenise a table.
	 *
	 * @example
	 *   var $0 = ' | foo |\n | --- |\n | bar |';
	 *   var $1 = ' | foo |';
	 *   var $2 = '| foo |';
	 *   var $3 = ' | --- |';
	 *   var $4 = '| --- |';
	 *   var $5 = ' | bar |';
	 *   tokenizeTable(eat, $0, $1, $2, $3, $4, $5);
	 *
	 * @property {boolean} onlyAtTop
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole table.
	 * @param {string} $1 - Whole heading.
	 * @param {string} $2 - Trimmed heading.
	 * @param {string} $3 - Whole alignment.
	 * @param {string} $4 - Trimmed alignment.
	 * @param {string} $5 - Rows.
	 * @return {Node} - `table` node.
	 */
	function tokenizeTable(eat, $0, $1, $2, $3, $4, $5) {
	    var self = this;
	    var node;
	    var index;
	    var length;
	
	    $0 = trimRightLines($0);
	
	    node = eat($0).reset({
	        'type': TABLE,
	        'align': [],
	        'children': []
	    });
	
	    /**
	     * Eat a fence.  Returns an empty string so it can be
	     * passed to `String#replace()`.
	     *
	     * @param {string} value - Fence.
	     * @return {string} - Empty string.
	     */
	    function eatFence(value) {
	        eat(value);
	
	        return EMPTY;
	    }
	
	    /**
	     * Factory to eat a cell to a bound `row`.
	     *
	     * @param {Object} row - Parent to add cells to.
	     * @return {Function} - `eatCell` bound to `row`.
	     */
	    function eatCellFactory(row) {
	        /**
	         * Eat a cell.  Returns an empty string so it can be
	         * passed to `String#replace()`.
	         *
	         * @param {string} value - Complete match.
	         * @param {string} content - Cell content.
	         * @param {string} pipe - Fence.
	         * @return {string} - Empty string.
	         */
	        function eatCell(value, content, pipe) {
	            var cell = utilities.trimLeft(content);
	            var diff = content.length - cell.length;
	            var now;
	
	            eat(content.slice(0, diff));
	
	            now = eat.now();
	
	            eat(cell)(self.renderInline(
	                TABLE_CELL, utilities.trimRight(cell), now
	            ), row);
	
	            eat(pipe);
	
	            return EMPTY;
	        }
	
	        return eatCell;
	    }
	
	    /**
	     * Eat a row of type `type`.
	     *
	     * @param {string} type - Type of the returned node,
	     *   such as `tableHeader` or `tableRow`.
	     * @param {string} value - Row, including initial and
	     *   final fences.
	     */
	    function renderRow(type, value) {
	        var row = eat(value).reset(self.renderParent(type, []), node);
	
	        value
	            .replace(EXPRESSION_TABLE_INITIAL, eatFence)
	            .replace(EXPRESSION_TABLE_CONTENT, eatCellFactory(row));
	    }
	
	    /*
	     * Add the table's header.
	     */
	
	    renderRow(TABLE_HEADER, $1);
	
	    eat(NEW_LINE);
	
	    /*
	     * Add the table's alignment.
	     */
	
	    eat($3);
	
	    $4 = $4
	        .replace(EXPRESSION_TABLE_FENCE, EMPTY)
	        .split(EXPRESSION_TABLE_BORDER);
	
	    node.align = getAlignment($4);
	
	    /*
	     * Add the table rows to table's children.
	     */
	
	    $5 = trimRightLines($5).split(NEW_LINE);
	
	    index = -1;
	    length = $5.length;
	
	    while (++index < length) {
	        renderRow(TABLE_ROW, $5[index]);
	
	        if (index !== length - 1) {
	            eat(NEW_LINE);
	        }
	    }
	
	    return node;
	}
	
	tokenizeTable.onlyAtTop = true;
	
	/**
	 * Tokenise a paragraph token.
	 *
	 * @example
	 *   tokenizeParagraph(eat, 'Foo.');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole paragraph.
	 * @return {Node?} - `paragraph` node, when the node does
	 *   not just contain white space.
	 */
	function tokenizeParagraph(eat, $0) {
	    var now = eat.now();
	
	    if (trim($0) === EMPTY) {
	        eat($0);
	
	        return null;
	    }
	
	    $0 = trimRightLines($0);
	
	    return eat($0)(this.renderInline(PARAGRAPH, $0, now));
	}
	
	/**
	 * Tokenise a text token.
	 *
	 * @example
	 *   tokenizeText(eat, 'foo');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole text.
	 * @return {Node} - `text` node.
	 */
	function tokenizeText(eat, $0) {
	    return eat($0)(this.renderRaw(TEXT, $0));
	}
	
	/**
	 * Create a code-block token.
	 *
	 * @example
	 *   renderCodeBlock('foo()', 'js', now());
	 *
	 * @param {string?} [value] - Code.
	 * @param {string?} [language] - Optional language flag.
	 * @param {Function} eat
	 * @return {Object} - `code` node.
	 */
	function renderCodeBlock(value, language, eat) {
	    return {
	        'type': CODE,
	        'lang': language ? decode(this.descape(language), eat) : null,
	        'value': trimRightLines(value || EMPTY)
	    };
	}
	
	/**
	 * Create a list token.
	 *
	 * @example
	 *   var children = [renderListItem('- foo')];
	 *   renderList(children, '-');
	 *
	 * @param {string} children - Children.
	 * @param {string} bullet - First bullet.
	 * @return {Object} - `list` node.
	 */
	function renderList(children, bullet) {
	    var start = parseInt(bullet, 10);
	
	    if (start !== start) {
	        start = null;
	    }
	
	    /*
	     * `loose` should be added later.
	     */
	
	    return {
	        'type': LIST,
	        'ordered': bullet.length > 1,
	        'start': start,
	        'loose': null,
	        'children': children
	    };
	}
	
	/**
	 * Create a list-item using overly simple mechanics.
	 *
	 * @example
	 *   renderPedanticListItem('- _foo_', now());
	 *
	 * @param {string} value - List-item.
	 * @param {Object} position - List-item location.
	 * @return {string} - Cleaned `value`.
	 */
	function renderPedanticListItem(value, position) {
	    var self = this;
	    var indent = self.indent(position.line);
	
	    /**
	     * A simple replacer which removed all matches,
	     * and adds their length to `offset`.
	     *
	     * @param {string} $0
	     * @return {string}
	     */
	    function replacer($0) {
	        indent($0.length);
	
	        return EMPTY;
	    }
	
	    /*
	     * Remove the list-item's bullet.
	     */
	
	    value = value.replace(EXPRESSION_PEDANTIC_BULLET, replacer);
	
	    /*
	     * The initial line was also matched by the below, so
	     * we reset the `line`.
	     */
	
	    indent = self.indent(position.line);
	
	    return value.replace(EXPRESSION_INITIAL_INDENT, replacer);
	}
	
	/**
	 * Create a list-item using sane mechanics.
	 *
	 * @example
	 *   renderNormalListItem('- _foo_', now());
	 *
	 * @param {string} value - List-item.
	 * @param {Object} position - List-item location.
	 * @return {string} - Cleaned `value`.
	 */
	function renderNormalListItem(value, position) {
	    var self = this;
	    var indent = self.indent(position.line);
	    var bullet;
	    var rest;
	    var lines;
	    var trimmedLines;
	    var index;
	    var length;
	    var max;
	
	    /*
	     * Remove the list-item's bullet.
	     */
	
	    value = value.replace(EXPRESSION_BULLET, function ($0, $1, $2, $3, $4) {
	        bullet = $1 + $2 + $3;
	        rest = $4;
	
	       /*
	        * Make sure that the first nine numbered list items
	        * can indent with an extra space.  That is, when
	        * the bullet did not receive an extra final space.
	        */
	
	        if (Number($2) < 10 && bullet.length % 2 === 1) {
	            $2 = SPACE + $2;
	        }
	
	        max = $1 + repeat(SPACE, $2.length) + $3;
	
	        return max + rest;
	    });
	
	    lines = value.split(NEW_LINE);
	
	    trimmedLines = removeIndentation(
	        value, getIndent(max).indent
	    ).split(NEW_LINE);
	
	    /*
	     * We replaced the initial bullet with something
	     * else above, which was used to trick
	     * `removeIndentation` into removing some more
	     * characters when possible. However, that could
	     * result in the initial line to be stripped more
	     * than it should be.
	     */
	
	    trimmedLines[0] = rest;
	
	    indent(bullet.length);
	
	    index = 0;
	    length = lines.length;
	
	    while (++index < length) {
	        indent(lines[index].length - trimmedLines[index].length);
	    }
	
	    return trimmedLines.join(NEW_LINE);
	}
	
	/*
	 * A map of two functions which can create list items.
	 */
	
	var LIST_ITEM_MAP = objectCreate();
	
	LIST_ITEM_MAP.true = renderPedanticListItem;
	LIST_ITEM_MAP.false = renderNormalListItem;
	
	/**
	 * Create a list-item token.
	 *
	 * @example
	 *   renderListItem('- _foo_', now());
	 *
	 * @param {Object} value - List-item.
	 * @param {Object} position - List-item location.
	 * @return {Object} - `listItem` node.
	 */
	function renderListItem(value, position) {
	    var self = this;
	    var checked = null;
	    var node;
	    var task;
	    var indent;
	
	    value = LIST_ITEM_MAP[self.options.pedantic].apply(self, arguments);
	
	    if (self.options.gfm) {
	        task = value.match(EXPRESSION_TASK_ITEM);
	
	        if (task) {
	            indent = task[0].length;
	            checked = task[1].toLowerCase() === 'x';
	
	            self.indent(position.line)(indent);
	            value = value.slice(indent);
	        }
	    }
	
	    node = {
	        'type': LIST_ITEM,
	        'loose': EXPRESSION_LOOSE_LIST_ITEM.test(value) ||
	            value.charAt(value.length - 1) === NEW_LINE
	    };
	
	    if (self.options.gfm) {
	        node.checked = checked;
	    }
	
	    node.children = self.tokenizeBlock(value, position);
	
	    return node;
	}
	
	/**
	 * Create a footnote-definition token.
	 *
	 * @example
	 *   renderFootnoteDefinition('1', '_foo_', now());
	 *
	 * @param {string} identifier - Unique reference.
	 * @param {string} value - Contents
	 * @param {Object} position - Definition location.
	 * @return {Object} - `footnoteDefinition` node.
	 */
	function renderFootnoteDefinition(identifier, value, position) {
	    var self = this;
	    var exitBlockquote = self.enterBlockquote();
	    var token;
	
	    token = {
	        'type': FOOTNOTE_DEFINITION,
	        'identifier': identifier,
	        'children': self.tokenizeBlock(value, position)
	    };
	
	    exitBlockquote();
	
	    return token;
	}
	
	/**
	 * Create a heading token.
	 *
	 * @example
	 *   renderHeading('_foo_', 1, now());
	 *
	 * @param {string} value - Content.
	 * @param {number} depth - Heading depth.
	 * @param {Object} position - Heading content location.
	 * @return {Object} - `heading` node
	 */
	function renderHeading(value, depth, position) {
	    return {
	        'type': HEADING,
	        'depth': depth,
	        'children': this.tokenizeInline(value, position)
	    };
	}
	
	/**
	 * Create a blockquote token.
	 *
	 * @example
	 *   renderBlockquote('_foo_', eat);
	 *
	 * @param {string} value - Content.
	 * @param {Object} now - Position.
	 * @return {Object} - `blockquote` node.
	 */
	function renderBlockquote(value, now) {
	    var self = this;
	    var exitBlockquote = self.enterBlockquote();
	    var token = {
	        'type': BLOCKQUOTE,
	        'children': this.tokenizeBlock(value, now)
	    };
	
	    exitBlockquote();
	
	    return token;
	}
	
	/**
	 * Create a void token.
	 *
	 * @example
	 *   renderVoid('horizontalRule');
	 *
	 * @param {string} type - Node type.
	 * @return {Object} - Node of type `type`.
	 */
	function renderVoid(type) {
	    return {
	        'type': type
	    };
	}
	
	/**
	 * Create a parent.
	 *
	 * @example
	 *   renderParent('paragraph', '_foo_');
	 *
	 * @param {string} type - Node type.
	 * @param {Array.<Object>} children - Child nodes.
	 * @return {Object} - Node of type `type`.
	 */
	function renderParent(type, children) {
	    return {
	        'type': type,
	        'children': children
	    };
	}
	
	/**
	 * Create a raw token.
	 *
	 * @example
	 *   renderRaw('inlineCode', 'foo()');
	 *
	 * @param {string} type - Node type.
	 * @param {string} value - Contents.
	 * @return {Object} - Node of type `type`.
	 */
	function renderRaw(type, value) {
	    return {
	        'type': type,
	        'value': value
	    };
	}
	
	/**
	 * Create a link token.
	 *
	 * @example
	 *   renderLink(true, 'example.com', 'example', 'Example Domain', now(), eat);
	 *   renderLink(false, 'fav.ico', 'example', 'Example Domain', now(), eat);
	 *
	 * @param {boolean} isLink - Whether linking to a document
	 *   or an image.
	 * @param {string} href - URI reference.
	 * @param {string} text - Content.
	 * @param {string?} title - Title.
	 * @param {Object} position - Location of link.
	 * @param {function(string)} eat
	 * @return {Object} - `link` or `image` node.
	 */
	function renderLink(isLink, href, text, title, position, eat) {
	    var self = this;
	    var exitLink = self.enterLink();
	    var token;
	
	    token = {
	        'type': isLink ? LINK : IMAGE,
	        'title': title ? decode(self.descape(title), eat) : null
	    };
	
	    href = decode(href, eat);
	
	    if (isLink) {
	        token.href = href;
	        token.children = self.tokenizeInline(text, position);
	    } else {
	        token.src = href;
	        token.alt = text ? decode(self.descape(text), eat) : null;
	    }
	
	    exitLink();
	
	    return token;
	}
	
	/**
	 * Create a footnote token.
	 *
	 * @example
	 *   renderFootnote('_foo_', now());
	 *
	 * @param {string} value - Contents.
	 * @param {Object} position - Location of footnote.
	 * @return {Object} - `footnote` node.
	 */
	function renderFootnote(value, position) {
	    return this.renderInline(FOOTNOTE, value, position);
	}
	
	/**
	 * Add a token with inline content.
	 *
	 * @example
	 *   renderInline('strong', '_foo_', now());
	 *
	 * @param {string} type - Node type.
	 * @param {string} value - Contents.
	 * @param {Object} position - Location of node.
	 * @return {Object} - Node of type `type`.
	 */
	function renderInline(type, value, position) {
	    return this.renderParent(type, this.tokenizeInline(value, position));
	}
	
	/**
	 * Add a token with block content.
	 *
	 * @example
	 *   renderBlock('blockquote', 'Foo.', now());
	 *
	 * @param {string} type - Node type.
	 * @param {string} value - Contents.
	 * @param {Object} position - Location of node.
	 * @return {Object} - Node of type `type`.
	 */
	function renderBlock(type, value, position) {
	    return this.renderParent(type, this.tokenizeBlock(value, position));
	}
	
	/**
	 * Tokenise an escape sequence.
	 *
	 * @example
	 *   tokenizeEscape(eat, '\\a', 'a');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole escape.
	 * @param {string} $1 - Escaped character.
	 * @return {Node} - `escape` node.
	 */
	function tokenizeEscape(eat, $0, $1) {
	    return eat($0)(this.renderRaw(ESCAPE, $1));
	}
	
	/**
	 * Tokenise a URL in carets.
	 *
	 * @example
	 *   tokenizeAutoLink(eat, '<http://foo.bar>', 'http://foo.bar', '');
	 *
	 * @property {boolean} notInLink
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole link.
	 * @param {string} $1 - URL.
	 * @param {string?} [$2] - Protocol or at.
	 * @return {Node} - `link` node.
	 */
	function tokenizeAutoLink(eat, $0, $1, $2) {
	    var self = this;
	    var href = $1;
	    var text = $1;
	    var now = eat.now();
	    var offset = 1;
	    var tokenize;
	    var node;
	
	    if ($2 === AT_SIGN) {
	        if (
	            text.substr(0, MAILTO_PROTOCOL.length).toLowerCase() !==
	            MAILTO_PROTOCOL
	        ) {
	            href = MAILTO_PROTOCOL + text;
	        } else {
	            text = text.substr(MAILTO_PROTOCOL.length);
	            offset += MAILTO_PROTOCOL.length;
	        }
	    }
	
	    now.column += offset;
	
	    /*
	     * Temporarily remove support for escapes in autolinks.
	     */
	
	    tokenize = self.inlineTokenizers.escape;
	    self.inlineTokenizers.escape = null;
	
	    node = eat($0)(self.renderLink(true, href, text, null, now, eat));
	
	    self.inlineTokenizers.escape = tokenize;
	
	    return node;
	}
	
	tokenizeAutoLink.notInLink = true;
	
	/**
	 * Tokenise a URL in text.
	 *
	 * @example
	 *   tokenizeURL(eat, 'http://foo.bar');
	 *
	 * @property {boolean} notInLink
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole link.
	 * @return {Node} - `link` node.
	 */
	function tokenizeURL(eat, $0) {
	    var now = eat.now();
	
	    return eat($0)(this.renderLink(true, $0, $0, null, now, eat));
	}
	
	tokenizeURL.notInLink = true;
	
	/**
	 * Tokenise an HTML tag.
	 *
	 * @example
	 *   tokenizeTag(eat, '<span foo="bar">');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Content.
	 * @return {Node} - `html` node.
	 */
	function tokenizeTag(eat, $0) {
	    var self = this;
	
	    if (!self.inLink && EXPRESSION_HTML_LINK_OPEN.test($0)) {
	        self.inLink = true;
	    } else if (self.inLink && EXPRESSION_HTML_LINK_CLOSE.test($0)) {
	        self.inLink = false;
	    }
	
	    return eat($0)(self.renderRaw(HTML, $0));
	}
	
	/**
	 * Tokenise a link.
	 *
	 * @example
	 *   tokenizeLink(
	 *     eat, '![foo](fav.ico "Favicon")', '![', 'foo', null,
	 *     'fav.ico', 'Foo Domain'
	 *   );
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole link.
	 * @param {string} $1 - Prefix.
	 * @param {string} $2 - Text.
	 * @param {string?} $3 - URL wrapped in angle braces.
	 * @param {string?} $4 - Literal URL.
	 * @param {string?} $5 - Title wrapped in single or double
	 *   quotes.
	 * @param {string?} [$6] - Title wrapped in double quotes.
	 * @param {string?} [$7] - Title wrapped in parentheses.
	 * @return {Node?} - `link` node, `image` node, or `null`.
	 */
	function tokenizeLink(eat, $0, $1, $2, $3, $4, $5, $6, $7) {
	    var isLink = $1 === BRACKET_OPEN;
	    var href = $4 || $3 || '';
	    var title = $7 || $6 || $5;
	    var now;
	
	    if (!isLink || !this.inLink) {
	        now = eat.now();
	
	        now.column += $1.length;
	
	        return eat($0)(this.renderLink(
	            isLink, this.descape(href), $2, title, now, eat
	        ));
	    }
	
	    return null;
	}
	
	/**
	 * Tokenise a reference link, image, or footnote;
	 * shortcut reference link, or footnote.
	 *
	 * @example
	 *   tokenizeReference(eat, '[foo]', '[', 'foo');
	 *   tokenizeReference(eat, '[foo][]', '[', 'foo', '');
	 *   tokenizeReference(eat, '[foo][bar]', '[', 'foo', 'bar');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole link.
	 * @param {string} $1 - Prefix.
	 * @param {string} $2 - identifier.
	 * @param {string} $3 - Content.
	 * @return {Node?} - `linkReference`, `imageReference`, or
	 *   `footnoteReference`.  Returns null when this is a link
	 *   reference, but we're already in a link.
	 */
	function tokenizeReference(eat, $0, $1, $2, $3) {
	    var self = this;
	    var text = $2;
	    var identifier = $3 || $2;
	    var type = $1 === BRACKET_OPEN ? 'link' : 'image';
	    var isFootnote = self.options.footnotes && identifier.charAt(0) === CARET;
	    var now = eat.now();
	    var referenceType;
	    var node;
	    var exitLink;
	
	    if ($3 === undefined) {
	        referenceType = 'shortcut';
	    } else if ($3 === '') {
	        referenceType = 'collapsed';
	    } else {
	        referenceType = 'full';
	    }
	
	    if (referenceType !== 'shortcut') {
	        isFootnote = false;
	    }
	
	    if (isFootnote) {
	        identifier = identifier.substr(1);
	    }
	
	    if (isFootnote) {
	        if (identifier.indexOf(SPACE) !== -1) {
	            return eat($0)(self.renderFootnote(identifier, eat.now()));
	        } else {
	            type = 'footnote';
	        }
	    }
	
	    if (self.inLink && type === 'link') {
	        return null;
	    }
	
	    now.column += $1.length;
	
	    node = {
	        'type': type + 'Reference',
	        'identifier': normalize(identifier)
	    };
	
	    if (type === 'link' || type === 'image') {
	        node.referenceType = referenceType;
	    }
	
	    if (type === 'link') {
	        exitLink = self.enterLink();
	        node.children = self.tokenizeInline(text, now);
	        exitLink();
	    } else if (type === 'image') {
	        node.alt = decode(self.descape(text), eat);
	    }
	
	    return eat($0)(node);
	}
	
	/**
	 * Tokenise strong emphasis.
	 *
	 * @example
	 *   tokenizeStrong(eat, '**foo**', '**', 'foo');
	 *   tokenizeStrong(eat, '__foo__', null, null, '__', 'foo');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole emphasis.
	 * @param {string?} $1 - Marker.
	 * @param {string?} $2 - Content.
	 * @param {string?} [$3] - Marker.
	 * @param {string?} [$4] - Content.
	 * @return {Node?} - `strong` node, when not empty.
	 */
	function tokenizeStrong(eat, $0, $1, $2, $3, $4) {
	    var now = eat.now();
	    var value = $2 || $4;
	
	    if (trim(value) === EMPTY) {
	        return null;
	    }
	
	    now.column += 2;
	
	    return eat($0)(this.renderInline(STRONG, value, now));
	}
	
	/**
	 * Tokenise slight emphasis.
	 *
	 * @example
	 *   tokenizeEmphasis(eat, '*foo*', '*', 'foo');
	 *   tokenizeEmphasis(eat, '_foo_', null, null, '_', 'foo');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole emphasis.
	 * @param {string?} $1 - Marker.
	 * @param {string?} $2 - Content.
	 * @param {string?} [$3] - Marker.
	 * @param {string?} [$4] - Content.
	 * @return {Node?} - `emphasis` node, when not empty.
	 */
	function tokenizeEmphasis(eat, $0, $1, $2, $3, $4) {
	    var now = eat.now();
	    var marker = $1 || $3;
	    var value = $2 || $4;
	
	    if (
	        trim(value) === EMPTY ||
	        value.charAt(0) === marker ||
	        value.charAt(value.length - 1) === marker
	    ) {
	        return null;
	    }
	
	    now.column += 1;
	
	    return eat($0)(this.renderInline(EMPHASIS, value, now));
	}
	
	/**
	 * Tokenise a deletion.
	 *
	 * @example
	 *   tokenizeDeletion(eat, '~~foo~~', '~~', 'foo');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole deletion.
	 * @param {string} $1 - Content.
	 * @return {Node} - `delete` node.
	 */
	function tokenizeDeletion(eat, $0, $1) {
	    var now = eat.now();
	
	    now.column += 2;
	
	    return eat($0)(this.renderInline(DELETE, $1, now));
	}
	
	/**
	 * Tokenise inline code.
	 *
	 * @example
	 *   tokenizeInlineCode(eat, '`foo()`', '`', 'foo()');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0 - Whole code.
	 * @param {string} $1 - Initial markers.
	 * @param {string} $2 - Content.
	 * @return {Node} - `inlineCode` node.
	 */
	function tokenizeInlineCode(eat, $0, $1, $2) {
	    return eat($0)(this.renderRaw(INLINE_CODE, trim($2 || '')));
	}
	
	/**
	 * Tokenise a break.
	 *
	 * @example
	 *   tokenizeBreak(eat, '  \n');
	 *
	 * @param {function(string)} eat
	 * @param {string} $0
	 * @return {Node} - `break` node.
	 */
	function tokenizeBreak(eat, $0) {
	    return eat($0)(this.renderVoid(BREAK));
	}
	
	/**
	 * Construct a new parser.
	 *
	 * @example
	 *   var parser = new Parser();
	 *
	 * @constructor
	 * @class {Parser}
	 * @param {Object?} [options] - Passed to
	 *   `Parser#setOptions()`.
	 */
	function Parser(options) {
	    var self = this;
	    var rules = copy({}, self.expressions.rules);
	
	    self.inLink = false;
	    self.atTop = true;
	    self.atStart = true;
	    self.inBlockquote = false;
	
	    self.rules = rules;
	    self.descape = descapeFactory(rules, 'escape');
	
	    self.options = clone(self.options);
	
	    self.setOptions(options);
	}
	
	/**
	 * Set options.  Does not overwrite previously set
	 * options.
	 *
	 * @example
	 *   var parser = new Parser();
	 *   parser.setOptions({gfm: true});
	 *
	 * @this {Parser}
	 * @throws {Error} - When an option is invalid.
	 * @param {Object?} [options] - Parse settings.
	 * @return {Parser} - `self`.
	 */
	Parser.prototype.setOptions = function (options) {
	    var self = this;
	    var expressions = self.expressions;
	    var rules = self.rules;
	    var current = self.options;
	    var key;
	
	    if (options === null || options === undefined) {
	        options = {};
	    } else if (typeof options === 'object') {
	        options = clone(options);
	    } else {
	        raise(options, 'options');
	    }
	
	    self.options = options;
	
	    for (key in defaultOptions) {
	        validate.boolean(options, key, current[key]);
	
	        if (options[key]) {
	            copy(rules, expressions[key]);
	        }
	    }
	
	    if (options.gfm && options.breaks) {
	        copy(rules, expressions.breaksGFM);
	    }
	
	    if (options.gfm && options.commonmark) {
	        copy(rules, expressions.commonmarkGFM);
	    }
	
	    if (options.commonmark) {
	        self.enterBlockquote = noopToggler();
	    }
	
	    return self;
	};
	
	/*
	 * Expose `defaults`.
	 */
	
	Parser.prototype.options = defaultOptions;
	
	/*
	 * Expose `expressions`.
	 */
	
	Parser.prototype.expressions = defaultExpressions;
	
	/**
	 * Factory to track indentation for each line corresponding
	 * to the given `start` and the number of invocations.
	 *
	 * @param {number} start - Starting line.
	 * @return {function(offset)} - Indenter.
	 */
	Parser.prototype.indent = function (start) {
	    var self = this;
	    var line = start;
	
	    /**
	     * Intender which increments the global offset,
	     * starting at the bound line, and further incrementing
	     * each line for each invocation.
	     *
	     * @example
	     *   indenter(2)
	     *
	     * @param {number} offset - Number to increment the
	     *   offset.
	     */
	    function indenter(offset) {
	        self.offset[line] = (self.offset[line] || 0) + offset;
	
	        line++;
	    }
	
	    return indenter;
	};
	
	/**
	 * Parse `value` into an AST.
	 *
	 * @example
	 *   var parser = new Parser();
	 *   parser.parse(new File('_Foo_.'));
	 *
	 * @this {Parser}
	 * @param {Object} file
	 * @return {Object} - `root` node.
	 */
	Parser.prototype.parse = function (file) {
	    var self = this;
	    var value = clean(String(file));
	    var token;
	
	    self.file = file;
	
	    /*
	     * Add an `offset` matrix, used to keep track of
	     * syntax and white space indentation per line.
	     */
	
	    self.offset = {};
	
	    token = self.renderBlock(ROOT, value);
	
	    if (self.options.position) {
	        token.position = {
	            'start': {
	                'line': 1,
	                'column': 1
	            }
	        };
	
	        token.position.end = self.eof || token.position.start;
	    }
	
	    return token;
	};
	
	/*
	 * Enter and exit helpers.
	 */
	
	Parser.prototype.enterLink = stateToggler('inLink', false);
	Parser.prototype.exitTop = stateToggler('atTop', true);
	Parser.prototype.exitStart = stateToggler('atStart', true);
	Parser.prototype.enterBlockquote = stateToggler('inBlockquote', false);
	
	/*
	 * Expose helpers
	 */
	
	Parser.prototype.renderRaw = renderRaw;
	Parser.prototype.renderVoid = renderVoid;
	Parser.prototype.renderParent = renderParent;
	Parser.prototype.renderInline = renderInline;
	Parser.prototype.renderBlock = renderBlock;
	
	Parser.prototype.renderLink = renderLink;
	Parser.prototype.renderCodeBlock = renderCodeBlock;
	Parser.prototype.renderBlockquote = renderBlockquote;
	Parser.prototype.renderList = renderList;
	Parser.prototype.renderListItem = renderListItem;
	Parser.prototype.renderFootnoteDefinition = renderFootnoteDefinition;
	Parser.prototype.renderHeading = renderHeading;
	Parser.prototype.renderFootnote = renderFootnote;
	
	/**
	 * Construct a tokenizer.  This creates both
	 * `tokenizeInline` and `tokenizeBlock`.
	 *
	 * @example
	 *   Parser.prototype.tokenizeInline = tokenizeFactory('inline');
	 *
	 * @param {string} type - Name of parser, used to find
	 *   its expressions (`%sMethods`) and tokenizers
	 *   (`%Tokenizers`).
	 * @return {function(string, Object?): Array.<Object>}
	 */
	function tokenizeFactory(type) {
	    /**
	     * Tokenizer for a bound `type`
	     *
	     * @example
	     *   parser = new Parser();
	     *   parser.tokenizeInline('_foo_');
	     *
	     * @param {string} value - Content.
	     * @param {Object?} [location] - Offset at which `value`
	     *   starts.
	     * @return {Array.<Object>} - Nodes.
	     */
	    function tokenize(value, location) {
	        var self = this;
	        var offset = self.offset;
	        var tokens = [];
	        var rules = self.rules;
	        var methods = self[type + 'Methods'];
	        var tokenizers = self[type + 'Tokenizers'];
	        var line = location ? location.line : 1;
	        var column = location ? location.column : 1;
	        var patchPosition = self.options.position;
	        var add;
	        var index;
	        var length;
	        var method;
	        var name;
	        var match;
	        var matched;
	        var valueLength;
	        var eater;
	
	        /*
	         * Trim white space only lines.
	         */
	
	        if (!value) {
	            return tokens;
	        }
	
	        /**
	         * Update line and column based on `value`.
	         *
	         * @example
	         *   updatePosition('foo');
	         *
	         * @param {string} subvalue
	         */
	        function updatePosition(subvalue) {
	            var character = -1;
	            var subvalueLength = subvalue.length;
	            var lastIndex = -1;
	
	            while (++character < subvalueLength) {
	                if (subvalue.charAt(character) === NEW_LINE) {
	                    lastIndex = character;
	                    line++;
	                }
	            }
	
	            if (lastIndex === -1) {
	                column = column + subvalue.length;
	            } else {
	                column = subvalue.length - lastIndex;
	            }
	
	            if (line in offset) {
	                if (lastIndex !== -1) {
	                    column += offset[line];
	                } else if (column <= offset[line]) {
	                    column = offset[line] + 1;
	                }
	            }
	        }
	
	        /**
	         * Get offset. Called before the fisrt character is
	         * eaten to retrieve the range's offsets.
	         *
	         * @return {Function} - `done`, to be called when
	         *   the last character is eaten.
	         */
	        function getOffset() {
	            var indentation = [];
	            var pos = line + 1;
	
	            /**
	             * Done. Called when the last character is
	             * eaten to retrieve the range's offsets.
	             *
	             * @return {Array.<number>} - Offset.
	             */
	            function done() {
	                var last = line + 1;
	
	                while (pos < last) {
	                    indentation.push((offset[pos] || 0) + 1);
	
	                    pos++;
	                }
	
	                return indentation;
	            }
	
	            return done;
	        }
	
	        /**
	         * Get the current position.
	         *
	         * @example
	         *   position = now(); // {line: 1, column: 1}
	         *
	         * @return {Object}
	         */
	        function now() {
	            return {
	                'line': line,
	                'column': column
	            };
	        }
	
	        /**
	         * Store position information for a node.
	         *
	         * @example
	         *   start = now();
	         *   updatePosition('foo');
	         *   location = new Position(start);
	         *   // {start: {line: 1, column: 1}, end: {line: 1, column: 3}}
	         *
	         * @param {Object} start
	         */
	        function Position(start) {
	            this.start = start;
	            this.end = now();
	        }
	
	        /**
	         * Throw when a value is incorrectly eaten.
	         * This shouldn’t happen but will throw on new,
	         * incorrect rules.
	         *
	         * @example
	         *   // When the current value is set to `foo bar`.
	         *   validateEat('foo');
	         *   eat('foo');
	         *
	         *   validateEat('bar');
	         *   // throws, because the space is not eaten.
	         *
	         * @param {string} subvalue - Value to be eaten.
	         * @throws {Error} - When `subvalue` cannot be eaten.
	         */
	        function validateEat(subvalue) {
	            /* istanbul ignore if */
	            if (value.substring(0, subvalue.length) !== subvalue) {
	                self.file.fail(
	                    'Incorrectly eaten value: please report this ' +
	                    'warning on http://git.io/vUYWz', now()
	                );
	            }
	        }
	
	        /**
	         * Mark position and patch `node.position`.
	         *
	         * @example
	         *   var update = position();
	         *   updatePosition('foo');
	         *   update({});
	         *   // {
	         *   //   position: {
	         *   //     start: {line: 1, column: 1}
	         *   //     end: {line: 1, column: 3}
	         *   //   }
	         *   // }
	         *
	         * @returns {function(Node): Node}
	         */
	        function position() {
	            var before = now();
	
	            /**
	             * Add the position to a node.
	             *
	             * @example
	             *   update({type: 'text', value: 'foo'});
	             *
	             * @param {Node} node - Node to attach position
	             *   on.
	             * @return {Node} - `node`.
	             */
	            function update(node, indent) {
	                var prev = node.position;
	                var start = prev ? prev.start : before;
	                var combined = [];
	                var n = prev && prev.end.line;
	                var l = before.line;
	
	                node.position = new Position(start);
	
	                /*
	                 * If there was already a `position`, this
	                 * node was merged.  Fixing `start` wasn't
	                 * hard, but the indent is different.
	                 * Especially because some information, the
	                 * indent between `n` and `l` wasn't
	                 * tracked.  Luckily, that space is
	                 * (should be?) empty, so we can safely
	                 * check for it now.
	                 */
	
	                if (prev) {
	                    combined = prev.indent;
	
	                    if (n < l) {
	                        while (++n < l) {
	                            combined.push((offset[n] || 0) + 1);
	                        }
	
	                        combined.push(before.column);
	                    }
	
	                    indent = combined.concat(indent);
	                }
	
	                node.position.indent = indent;
	
	
	                return node;
	            }
	
	            return update;
	        }
	
	        /**
	         * Add `token` to `parent`s children or to `tokens`.
	         * Performs merges where possible.
	         *
	         * @example
	         *   add({});
	         *
	         *   add({}, {children: []});
	         *
	         * @param {Object} token - Node to add.
	         * @param {Object} [parent] - Parent to insert into.
	         * @return {Object} - Added or merged into token.
	         */
	        add = function (token, parent) {
	            var isMultiple = 'length' in token;
	            var prev;
	            var children;
	
	            if (!parent) {
	                children = tokens;
	            } else {
	                children = parent.children;
	            }
	
	            if (isMultiple) {
	                arrayPush.apply(children, token);
	            } else {
	                if (type === INLINE && token.type === TEXT) {
	                    token.value = decode(token.value, eater);
	                }
	
	                prev = children[children.length - 1];
	
	                if (
	                    prev &&
	                    token.type === prev.type &&
	                    token.type in MERGEABLE_NODES
	                ) {
	                    token = MERGEABLE_NODES[token.type].call(
	                        self, prev, token
	                    );
	                }
	
	                if (token !== prev) {
	                    children.push(token);
	                }
	
	                if (self.atStart && tokens.length) {
	                    self.exitStart();
	                }
	            }
	
	            return token;
	        };
	
	        /**
	         * Remove `subvalue` from `value`.
	         * Expects `subvalue` to be at the start from
	         * `value`, and applies no validation.
	         *
	         * @example
	         *   eat('foo')({type: 'text', value: 'foo'});
	         *
	         * @param {string} subvalue - Removed from `value`,
	         *   and passed to `updatePosition`.
	         * @return {Function} - Wrapper around `add`, which
	         *   also adds `position` to node.
	         */
	        function eat(subvalue) {
	            var indent = getOffset();
	            var pos = position();
	            var current = now();
	
	            validateEat(subvalue);
	
	            /**
	             * Add the given arguments, add `position` to
	             * the returned node, and return the node.
	             *
	             * @return {Node}
	             */
	            function apply() {
	                return pos(add.apply(null, arguments), indent);
	            }
	
	            /**
	             * Functions just like apply, but resets the
	             * content:  the line and column are reversed,
	             * and the eaten value is re-added.
	             *
	             * This is useful for nodes with a single
	             * type of content, such as lists and tables.
	             *
	             * See `apply` above for what parameters are
	             * expected.
	             *
	             * @return {Node}
	             */
	            function reset() {
	                var node = apply.apply(null, arguments);
	
	                line = current.line;
	                column = current.column;
	                value = subvalue + value;
	
	                return node;
	            }
	
	            apply.reset = reset;
	
	            value = value.substring(subvalue.length);
	
	            updatePosition(subvalue);
	
	            indent = indent();
	
	            return apply;
	        }
	
	        /**
	         * Same as `eat` above, but will not add positional
	         * information to nodes.
	         *
	         * @example
	         *   noEat('foo')({type: 'text', value: 'foo'});
	         *
	         * @param {string} subvalue - Removed from `value`.
	         * @return {Function} - Wrapper around `add`.
	         */
	        function noEat(subvalue) {
	            validateEat(subvalue);
	
	            /**
	             * Add the given arguments, and return the
	             * node.
	             *
	             * @return {Node}
	             */
	            function apply() {
	                return add.apply(null, arguments);
	            }
	
	            /**
	             * Functions just like apply, but resets the
	             * content: the eaten value is re-added.
	             *
	             * @return {Node}
	             */
	            function reset() {
	                var node = apply.apply(null, arguments);
	
	                value = subvalue + value;
	
	                return node;
	            }
	
	            apply.reset = reset;
	
	            value = value.substring(subvalue.length);
	
	            return apply;
	        }
	
	        /*
	         * Expose the eater, depending on if `position`s
	         * should be patched on nodes.
	         */
	
	        eater = patchPosition ? eat : noEat;
	
	        /*
	         * Expose `now` on `eater`.
	         */
	
	        eater.now = now;
	
	        /*
	         * Expose `file` on `eater`.
	         */
	
	        eater.file = self.file;
	
	        /*
	         * Sync initial offset.
	         */
	
	        updatePosition(EMPTY);
	
	        /*
	         * Iterate over `value`, and iterate over all
	         * block-expressions.  When one matches, invoke
	         * its companion function.  If no expression
	         * matches, something failed (should not happen)
	         * and an exception is thrown.
	         */
	
	        while (value) {
	            index = -1;
	            length = methods.length;
	            matched = false;
	
	            while (++index < length) {
	                name = methods[index];
	
	                method = tokenizers[name];
	
	                match = rules[name] &&
	                    method &&
	                    (!method.onlyAtStart || self.atStart) &&
	                    (!method.onlyAtTop || self.atTop) &&
	                    (!method.notInBlockquote || !self.inBlockquote) &&
	                    (!method.notInLink || !self.inLink) &&
	                    rules[name].exec(value);
	
	                if (match) {
	                    valueLength = value.length;
	
	                    method.apply(self, [eater].concat(match));
	
	                    matched = valueLength !== value.length;
	
	                    if (matched) {
	                        break;
	                    }
	                }
	            }
	
	            /* istanbul ignore if */
	            if (!matched) {
	                self.file.fail('Infinite loop', eater.now());
	
	                /*
	                 * Errors are not thrown on `File#fail`
	                 * when `quiet: true`.
	                 */
	
	                break;
	            }
	        }
	
	        self.eof = now();
	
	        return tokens;
	    }
	
	    return tokenize;
	}
	
	/*
	 * Expose tokenizers for block-level nodes.
	 */
	
	Parser.prototype.blockTokenizers = {
	    'yamlFrontMatter': tokenizeYAMLFrontMatter,
	    'newline': tokenizeNewline,
	    'code': tokenizeCode,
	    'fences': tokenizeFences,
	    'heading': tokenizeHeading,
	    'lineHeading': tokenizeLineHeading,
	    'horizontalRule': tokenizeHorizontalRule,
	    'blockquote': tokenizeBlockquote,
	    'list': tokenizeList,
	    'html': tokenizeHtml,
	    'definition': tokenizeDefinition,
	    'footnoteDefinition': tokenizeFootnoteDefinition,
	    'looseTable': tokenizeTable,
	    'table': tokenizeTable,
	    'paragraph': tokenizeParagraph
	};
	
	/*
	 * Expose order in which to parse block-level nodes.
	 */
	
	Parser.prototype.blockMethods = [
	    'yamlFrontMatter',
	    'newline',
	    'code',
	    'fences',
	    'blockquote',
	    'heading',
	    'horizontalRule',
	    'list',
	    'lineHeading',
	    'html',
	    'definition',
	    'footnoteDefinition',
	    'looseTable',
	    'table',
	    'paragraph',
	    'blockText'
	];
	
	/**
	 * Block tokenizer.
	 *
	 * @example
	 *   var parser = new Parser();
	 *   parser.tokenizeBlock('> foo.');
	 *
	 * @param {string} value - Content.
	 * @return {Array.<Object>} - Nodes.
	 */
	
	Parser.prototype.tokenizeBlock = tokenizeFactory(BLOCK);
	
	/*
	 * Expose tokenizers for inline-level nodes.
	 */
	
	Parser.prototype.inlineTokenizers = {
	    'escape': tokenizeEscape,
	    'autoLink': tokenizeAutoLink,
	    'url': tokenizeURL,
	    'tag': tokenizeTag,
	    'link': tokenizeLink,
	    'reference': tokenizeReference,
	    'shortcutReference': tokenizeReference,
	    'strong': tokenizeStrong,
	    'emphasis': tokenizeEmphasis,
	    'deletion': tokenizeDeletion,
	    'inlineCode': tokenizeInlineCode,
	    'break': tokenizeBreak,
	    'inlineText': tokenizeText
	};
	
	/*
	 * Expose order in which to parse inline-level nodes.
	 */
	
	Parser.prototype.inlineMethods = [
	    'escape',
	    'autoLink',
	    'url',
	    'tag',
	    'link',
	    'reference',
	    'shortcutReference',
	    'strong',
	    'emphasis',
	    'deletion',
	    'inlineCode',
	    'break',
	    'inlineText'
	];
	
	/**
	 * Inline tokenizer.
	 *
	 * @example
	 *   var parser = new Parser();
	 *   parser.tokenizeInline('_foo_');
	 *
	 * @param {string} value - Content.
	 * @return {Array.<Object>} - Nodes.
	 */
	
	Parser.prototype.tokenizeInline = tokenizeFactory(INLINE);
	
	/**
	 * Transform a markdown document into an AST.
	 *
	 * @example
	 *   parse(new File('> foo.'), {gfm: true});
	 *
	 * @this {Object?} - When this function is places on an
	 *   object which also houses a `Parser` property, that
	 *   class is used.
	 * @param {File} file - Virtual file.
	 * @param {Object?} [options] - Settings for the parser.
	 * @return {Object} - Abstract syntax tree.
	 */
	function parse(file, options) {
	    var CustomParser = this.Parser || Parser;
	
	    return new CustomParser(options).parse(file);
	}
	
	/*
	 * Expose `Parser` on `parse`.
	 */
	
	parse.Parser = Parser;
	
	/*
	 * Expose `tokenizeFactory` so dependencies could create
	 * their own tokenizers.
	 */
	
	Parser.prototype.tokenizeFactory = tokenizeFactory;
	
	/*
	 * Expose `parse` on `module.exports`.
	 */
	
	module.exports = parse;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! http://mths.be/he v0.5.0 by @mathias | MIT license */
	;(function(root) {
	
		// Detect free variables `exports`.
		var freeExports = typeof exports == 'object' && exports;
	
		// Detect free variable `module`.
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;
	
		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`.
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}
	
		/*--------------------------------------------------------------------------*/
	
		// All astral symbols.
		var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
		// All ASCII symbols (not just printable ASCII) except those listed in the
		// first column of the overrides table.
		// http://whatwg.org/html/tokenization.html#table-charref-overrides
		var regexAsciiWhitelist = /[\x01-\x7F]/g;
		// All BMP symbols that are not ASCII newlines, printable ASCII symbols, or
		// code points listed in the first column of the overrides table on
		// http://whatwg.org/html/tokenization.html#table-charref-overrides.
		var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
	
		var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
		var encodeMap = {'\xC1':'Aacute','\xE1':'aacute','\u0102':'Abreve','\u0103':'abreve','\u223E':'ac','\u223F':'acd','\u223E\u0333':'acE','\xC2':'Acirc','\xE2':'acirc','\xB4':'acute','\u0410':'Acy','\u0430':'acy','\xC6':'AElig','\xE6':'aelig','\u2061':'af','\uD835\uDD04':'Afr','\uD835\uDD1E':'afr','\xC0':'Agrave','\xE0':'agrave','\u2135':'aleph','\u0391':'Alpha','\u03B1':'alpha','\u0100':'Amacr','\u0101':'amacr','\u2A3F':'amalg','&':'amp','\u2A55':'andand','\u2A53':'And','\u2227':'and','\u2A5C':'andd','\u2A58':'andslope','\u2A5A':'andv','\u2220':'ang','\u29A4':'ange','\u29A8':'angmsdaa','\u29A9':'angmsdab','\u29AA':'angmsdac','\u29AB':'angmsdad','\u29AC':'angmsdae','\u29AD':'angmsdaf','\u29AE':'angmsdag','\u29AF':'angmsdah','\u2221':'angmsd','\u221F':'angrt','\u22BE':'angrtvb','\u299D':'angrtvbd','\u2222':'angsph','\xC5':'angst','\u237C':'angzarr','\u0104':'Aogon','\u0105':'aogon','\uD835\uDD38':'Aopf','\uD835\uDD52':'aopf','\u2A6F':'apacir','\u2248':'ap','\u2A70':'apE','\u224A':'ape','\u224B':'apid','\'':'apos','\xE5':'aring','\uD835\uDC9C':'Ascr','\uD835\uDCB6':'ascr','\u2254':'colone','*':'ast','\u224D':'CupCap','\xC3':'Atilde','\xE3':'atilde','\xC4':'Auml','\xE4':'auml','\u2233':'awconint','\u2A11':'awint','\u224C':'bcong','\u03F6':'bepsi','\u2035':'bprime','\u223D':'bsim','\u22CD':'bsime','\u2216':'setmn','\u2AE7':'Barv','\u22BD':'barvee','\u2305':'barwed','\u2306':'Barwed','\u23B5':'bbrk','\u23B6':'bbrktbrk','\u0411':'Bcy','\u0431':'bcy','\u201E':'bdquo','\u2235':'becaus','\u29B0':'bemptyv','\u212C':'Bscr','\u0392':'Beta','\u03B2':'beta','\u2136':'beth','\u226C':'twixt','\uD835\uDD05':'Bfr','\uD835\uDD1F':'bfr','\u22C2':'xcap','\u25EF':'xcirc','\u22C3':'xcup','\u2A00':'xodot','\u2A01':'xoplus','\u2A02':'xotime','\u2A06':'xsqcup','\u2605':'starf','\u25BD':'xdtri','\u25B3':'xutri','\u2A04':'xuplus','\u22C1':'Vee','\u22C0':'Wedge','\u290D':'rbarr','\u29EB':'lozf','\u25AA':'squf','\u25B4':'utrif','\u25BE':'dtrif','\u25C2':'ltrif','\u25B8':'rtrif','\u2423':'blank','\u2592':'blk12','\u2591':'blk14','\u2593':'blk34','\u2588':'block','=\u20E5':'bne','\u2261\u20E5':'bnequiv','\u2AED':'bNot','\u2310':'bnot','\uD835\uDD39':'Bopf','\uD835\uDD53':'bopf','\u22A5':'bot','\u22C8':'bowtie','\u29C9':'boxbox','\u2510':'boxdl','\u2555':'boxdL','\u2556':'boxDl','\u2557':'boxDL','\u250C':'boxdr','\u2552':'boxdR','\u2553':'boxDr','\u2554':'boxDR','\u2500':'boxh','\u2550':'boxH','\u252C':'boxhd','\u2564':'boxHd','\u2565':'boxhD','\u2566':'boxHD','\u2534':'boxhu','\u2567':'boxHu','\u2568':'boxhU','\u2569':'boxHU','\u229F':'minusb','\u229E':'plusb','\u22A0':'timesb','\u2518':'boxul','\u255B':'boxuL','\u255C':'boxUl','\u255D':'boxUL','\u2514':'boxur','\u2558':'boxuR','\u2559':'boxUr','\u255A':'boxUR','\u2502':'boxv','\u2551':'boxV','\u253C':'boxvh','\u256A':'boxvH','\u256B':'boxVh','\u256C':'boxVH','\u2524':'boxvl','\u2561':'boxvL','\u2562':'boxVl','\u2563':'boxVL','\u251C':'boxvr','\u255E':'boxvR','\u255F':'boxVr','\u2560':'boxVR','\u02D8':'breve','\xA6':'brvbar','\uD835\uDCB7':'bscr','\u204F':'bsemi','\u29C5':'bsolb','\\':'bsol','\u27C8':'bsolhsub','\u2022':'bull','\u224E':'bump','\u2AAE':'bumpE','\u224F':'bumpe','\u0106':'Cacute','\u0107':'cacute','\u2A44':'capand','\u2A49':'capbrcup','\u2A4B':'capcap','\u2229':'cap','\u22D2':'Cap','\u2A47':'capcup','\u2A40':'capdot','\u2145':'DD','\u2229\uFE00':'caps','\u2041':'caret','\u02C7':'caron','\u212D':'Cfr','\u2A4D':'ccaps','\u010C':'Ccaron','\u010D':'ccaron','\xC7':'Ccedil','\xE7':'ccedil','\u0108':'Ccirc','\u0109':'ccirc','\u2230':'Cconint','\u2A4C':'ccups','\u2A50':'ccupssm','\u010A':'Cdot','\u010B':'cdot','\xB8':'cedil','\u29B2':'cemptyv','\xA2':'cent','\xB7':'middot','\uD835\uDD20':'cfr','\u0427':'CHcy','\u0447':'chcy','\u2713':'check','\u03A7':'Chi','\u03C7':'chi','\u02C6':'circ','\u2257':'cire','\u21BA':'olarr','\u21BB':'orarr','\u229B':'oast','\u229A':'ocir','\u229D':'odash','\u2299':'odot','\xAE':'reg','\u24C8':'oS','\u2296':'ominus','\u2295':'oplus','\u2297':'otimes','\u25CB':'cir','\u29C3':'cirE','\u2A10':'cirfnint','\u2AEF':'cirmid','\u29C2':'cirscir','\u2232':'cwconint','\u201D':'rdquo','\u2019':'rsquo','\u2663':'clubs',':':'colon','\u2237':'Colon','\u2A74':'Colone',',':'comma','@':'commat','\u2201':'comp','\u2218':'compfn','\u2102':'Copf','\u2245':'cong','\u2A6D':'congdot','\u2261':'equiv','\u222E':'oint','\u222F':'Conint','\uD835\uDD54':'copf','\u2210':'coprod','\xA9':'copy','\u2117':'copysr','\u21B5':'crarr','\u2717':'cross','\u2A2F':'Cross','\uD835\uDC9E':'Cscr','\uD835\uDCB8':'cscr','\u2ACF':'csub','\u2AD1':'csube','\u2AD0':'csup','\u2AD2':'csupe','\u22EF':'ctdot','\u2938':'cudarrl','\u2935':'cudarrr','\u22DE':'cuepr','\u22DF':'cuesc','\u21B6':'cularr','\u293D':'cularrp','\u2A48':'cupbrcap','\u2A46':'cupcap','\u222A':'cup','\u22D3':'Cup','\u2A4A':'cupcup','\u228D':'cupdot','\u2A45':'cupor','\u222A\uFE00':'cups','\u21B7':'curarr','\u293C':'curarrm','\u22CE':'cuvee','\u22CF':'cuwed','\xA4':'curren','\u2231':'cwint','\u232D':'cylcty','\u2020':'dagger','\u2021':'Dagger','\u2138':'daleth','\u2193':'darr','\u21A1':'Darr','\u21D3':'dArr','\u2010':'dash','\u2AE4':'Dashv','\u22A3':'dashv','\u290F':'rBarr','\u02DD':'dblac','\u010E':'Dcaron','\u010F':'dcaron','\u0414':'Dcy','\u0434':'dcy','\u21CA':'ddarr','\u2146':'dd','\u2911':'DDotrahd','\u2A77':'eDDot','\xB0':'deg','\u2207':'Del','\u0394':'Delta','\u03B4':'delta','\u29B1':'demptyv','\u297F':'dfisht','\uD835\uDD07':'Dfr','\uD835\uDD21':'dfr','\u2965':'dHar','\u21C3':'dharl','\u21C2':'dharr','\u02D9':'dot','`':'grave','\u02DC':'tilde','\u22C4':'diam','\u2666':'diams','\xA8':'die','\u03DD':'gammad','\u22F2':'disin','\xF7':'div','\u22C7':'divonx','\u0402':'DJcy','\u0452':'djcy','\u231E':'dlcorn','\u230D':'dlcrop','$':'dollar','\uD835\uDD3B':'Dopf','\uD835\uDD55':'dopf','\u20DC':'DotDot','\u2250':'doteq','\u2251':'eDot','\u2238':'minusd','\u2214':'plusdo','\u22A1':'sdotb','\u21D0':'lArr','\u21D4':'iff','\u27F8':'xlArr','\u27FA':'xhArr','\u27F9':'xrArr','\u21D2':'rArr','\u22A8':'vDash','\u21D1':'uArr','\u21D5':'vArr','\u2225':'par','\u2913':'DownArrowBar','\u21F5':'duarr','\u0311':'DownBreve','\u2950':'DownLeftRightVector','\u295E':'DownLeftTeeVector','\u2956':'DownLeftVectorBar','\u21BD':'lhard','\u295F':'DownRightTeeVector','\u2957':'DownRightVectorBar','\u21C1':'rhard','\u21A7':'mapstodown','\u22A4':'top','\u2910':'RBarr','\u231F':'drcorn','\u230C':'drcrop','\uD835\uDC9F':'Dscr','\uD835\uDCB9':'dscr','\u0405':'DScy','\u0455':'dscy','\u29F6':'dsol','\u0110':'Dstrok','\u0111':'dstrok','\u22F1':'dtdot','\u25BF':'dtri','\u296F':'duhar','\u29A6':'dwangle','\u040F':'DZcy','\u045F':'dzcy','\u27FF':'dzigrarr','\xC9':'Eacute','\xE9':'eacute','\u2A6E':'easter','\u011A':'Ecaron','\u011B':'ecaron','\xCA':'Ecirc','\xEA':'ecirc','\u2256':'ecir','\u2255':'ecolon','\u042D':'Ecy','\u044D':'ecy','\u0116':'Edot','\u0117':'edot','\u2147':'ee','\u2252':'efDot','\uD835\uDD08':'Efr','\uD835\uDD22':'efr','\u2A9A':'eg','\xC8':'Egrave','\xE8':'egrave','\u2A96':'egs','\u2A98':'egsdot','\u2A99':'el','\u2208':'in','\u23E7':'elinters','\u2113':'ell','\u2A95':'els','\u2A97':'elsdot','\u0112':'Emacr','\u0113':'emacr','\u2205':'empty','\u25FB':'EmptySmallSquare','\u25AB':'EmptyVerySmallSquare','\u2004':'emsp13','\u2005':'emsp14','\u2003':'emsp','\u014A':'ENG','\u014B':'eng','\u2002':'ensp','\u0118':'Eogon','\u0119':'eogon','\uD835\uDD3C':'Eopf','\uD835\uDD56':'eopf','\u22D5':'epar','\u29E3':'eparsl','\u2A71':'eplus','\u03B5':'epsi','\u0395':'Epsilon','\u03F5':'epsiv','\u2242':'esim','\u2A75':'Equal','=':'equals','\u225F':'equest','\u21CC':'rlhar','\u2A78':'equivDD','\u29E5':'eqvparsl','\u2971':'erarr','\u2253':'erDot','\u212F':'escr','\u2130':'Escr','\u2A73':'Esim','\u0397':'Eta','\u03B7':'eta','\xD0':'ETH','\xF0':'eth','\xCB':'Euml','\xEB':'euml','\u20AC':'euro','!':'excl','\u2203':'exist','\u0424':'Fcy','\u0444':'fcy','\u2640':'female','\uFB03':'ffilig','\uFB00':'fflig','\uFB04':'ffllig','\uD835\uDD09':'Ffr','\uD835\uDD23':'ffr','\uFB01':'filig','\u25FC':'FilledSmallSquare','fj':'fjlig','\u266D':'flat','\uFB02':'fllig','\u25B1':'fltns','\u0192':'fnof','\uD835\uDD3D':'Fopf','\uD835\uDD57':'fopf','\u2200':'forall','\u22D4':'fork','\u2AD9':'forkv','\u2131':'Fscr','\u2A0D':'fpartint','\xBD':'half','\u2153':'frac13','\xBC':'frac14','\u2155':'frac15','\u2159':'frac16','\u215B':'frac18','\u2154':'frac23','\u2156':'frac25','\xBE':'frac34','\u2157':'frac35','\u215C':'frac38','\u2158':'frac45','\u215A':'frac56','\u215D':'frac58','\u215E':'frac78','\u2044':'frasl','\u2322':'frown','\uD835\uDCBB':'fscr','\u01F5':'gacute','\u0393':'Gamma','\u03B3':'gamma','\u03DC':'Gammad','\u2A86':'gap','\u011E':'Gbreve','\u011F':'gbreve','\u0122':'Gcedil','\u011C':'Gcirc','\u011D':'gcirc','\u0413':'Gcy','\u0433':'gcy','\u0120':'Gdot','\u0121':'gdot','\u2265':'ge','\u2267':'gE','\u2A8C':'gEl','\u22DB':'gel','\u2A7E':'ges','\u2AA9':'gescc','\u2A80':'gesdot','\u2A82':'gesdoto','\u2A84':'gesdotol','\u22DB\uFE00':'gesl','\u2A94':'gesles','\uD835\uDD0A':'Gfr','\uD835\uDD24':'gfr','\u226B':'gg','\u22D9':'Gg','\u2137':'gimel','\u0403':'GJcy','\u0453':'gjcy','\u2AA5':'gla','\u2277':'gl','\u2A92':'glE','\u2AA4':'glj','\u2A8A':'gnap','\u2A88':'gne','\u2269':'gnE','\u22E7':'gnsim','\uD835\uDD3E':'Gopf','\uD835\uDD58':'gopf','\u2AA2':'GreaterGreater','\u2273':'gsim','\uD835\uDCA2':'Gscr','\u210A':'gscr','\u2A8E':'gsime','\u2A90':'gsiml','\u2AA7':'gtcc','\u2A7A':'gtcir','>':'gt','\u22D7':'gtdot','\u2995':'gtlPar','\u2A7C':'gtquest','\u2978':'gtrarr','\u2269\uFE00':'gvnE','\u200A':'hairsp','\u210B':'Hscr','\u042A':'HARDcy','\u044A':'hardcy','\u2948':'harrcir','\u2194':'harr','\u21AD':'harrw','^':'Hat','\u210F':'hbar','\u0124':'Hcirc','\u0125':'hcirc','\u2665':'hearts','\u2026':'mldr','\u22B9':'hercon','\uD835\uDD25':'hfr','\u210C':'Hfr','\u2925':'searhk','\u2926':'swarhk','\u21FF':'hoarr','\u223B':'homtht','\u21A9':'larrhk','\u21AA':'rarrhk','\uD835\uDD59':'hopf','\u210D':'Hopf','\u2015':'horbar','\uD835\uDCBD':'hscr','\u0126':'Hstrok','\u0127':'hstrok','\u2043':'hybull','\xCD':'Iacute','\xED':'iacute','\u2063':'ic','\xCE':'Icirc','\xEE':'icirc','\u0418':'Icy','\u0438':'icy','\u0130':'Idot','\u0415':'IEcy','\u0435':'iecy','\xA1':'iexcl','\uD835\uDD26':'ifr','\u2111':'Im','\xCC':'Igrave','\xEC':'igrave','\u2148':'ii','\u2A0C':'qint','\u222D':'tint','\u29DC':'iinfin','\u2129':'iiota','\u0132':'IJlig','\u0133':'ijlig','\u012A':'Imacr','\u012B':'imacr','\u2110':'Iscr','\u0131':'imath','\u22B7':'imof','\u01B5':'imped','\u2105':'incare','\u221E':'infin','\u29DD':'infintie','\u22BA':'intcal','\u222B':'int','\u222C':'Int','\u2124':'Zopf','\u2A17':'intlarhk','\u2A3C':'iprod','\u2062':'it','\u0401':'IOcy','\u0451':'iocy','\u012E':'Iogon','\u012F':'iogon','\uD835\uDD40':'Iopf','\uD835\uDD5A':'iopf','\u0399':'Iota','\u03B9':'iota','\xBF':'iquest','\uD835\uDCBE':'iscr','\u22F5':'isindot','\u22F9':'isinE','\u22F4':'isins','\u22F3':'isinsv','\u0128':'Itilde','\u0129':'itilde','\u0406':'Iukcy','\u0456':'iukcy','\xCF':'Iuml','\xEF':'iuml','\u0134':'Jcirc','\u0135':'jcirc','\u0419':'Jcy','\u0439':'jcy','\uD835\uDD0D':'Jfr','\uD835\uDD27':'jfr','\u0237':'jmath','\uD835\uDD41':'Jopf','\uD835\uDD5B':'jopf','\uD835\uDCA5':'Jscr','\uD835\uDCBF':'jscr','\u0408':'Jsercy','\u0458':'jsercy','\u0404':'Jukcy','\u0454':'jukcy','\u039A':'Kappa','\u03BA':'kappa','\u03F0':'kappav','\u0136':'Kcedil','\u0137':'kcedil','\u041A':'Kcy','\u043A':'kcy','\uD835\uDD0E':'Kfr','\uD835\uDD28':'kfr','\u0138':'kgreen','\u0425':'KHcy','\u0445':'khcy','\u040C':'KJcy','\u045C':'kjcy','\uD835\uDD42':'Kopf','\uD835\uDD5C':'kopf','\uD835\uDCA6':'Kscr','\uD835\uDCC0':'kscr','\u21DA':'lAarr','\u0139':'Lacute','\u013A':'lacute','\u29B4':'laemptyv','\u2112':'Lscr','\u039B':'Lambda','\u03BB':'lambda','\u27E8':'lang','\u27EA':'Lang','\u2991':'langd','\u2A85':'lap','\xAB':'laquo','\u21E4':'larrb','\u291F':'larrbfs','\u2190':'larr','\u219E':'Larr','\u291D':'larrfs','\u21AB':'larrlp','\u2939':'larrpl','\u2973':'larrsim','\u21A2':'larrtl','\u2919':'latail','\u291B':'lAtail','\u2AAB':'lat','\u2AAD':'late','\u2AAD\uFE00':'lates','\u290C':'lbarr','\u290E':'lBarr','\u2772':'lbbrk','{':'lcub','[':'lsqb','\u298B':'lbrke','\u298F':'lbrksld','\u298D':'lbrkslu','\u013D':'Lcaron','\u013E':'lcaron','\u013B':'Lcedil','\u013C':'lcedil','\u2308':'lceil','\u041B':'Lcy','\u043B':'lcy','\u2936':'ldca','\u201C':'ldquo','\u2967':'ldrdhar','\u294B':'ldrushar','\u21B2':'ldsh','\u2264':'le','\u2266':'lE','\u21C6':'lrarr','\u27E6':'lobrk','\u2961':'LeftDownTeeVector','\u2959':'LeftDownVectorBar','\u230A':'lfloor','\u21BC':'lharu','\u21C7':'llarr','\u21CB':'lrhar','\u294E':'LeftRightVector','\u21A4':'mapstoleft','\u295A':'LeftTeeVector','\u22CB':'lthree','\u29CF':'LeftTriangleBar','\u22B2':'vltri','\u22B4':'ltrie','\u2951':'LeftUpDownVector','\u2960':'LeftUpTeeVector','\u2958':'LeftUpVectorBar','\u21BF':'uharl','\u2952':'LeftVectorBar','\u2A8B':'lEg','\u22DA':'leg','\u2A7D':'les','\u2AA8':'lescc','\u2A7F':'lesdot','\u2A81':'lesdoto','\u2A83':'lesdotor','\u22DA\uFE00':'lesg','\u2A93':'lesges','\u22D6':'ltdot','\u2276':'lg','\u2AA1':'LessLess','\u2272':'lsim','\u297C':'lfisht','\uD835\uDD0F':'Lfr','\uD835\uDD29':'lfr','\u2A91':'lgE','\u2962':'lHar','\u296A':'lharul','\u2584':'lhblk','\u0409':'LJcy','\u0459':'ljcy','\u226A':'ll','\u22D8':'Ll','\u296B':'llhard','\u25FA':'lltri','\u013F':'Lmidot','\u0140':'lmidot','\u23B0':'lmoust','\u2A89':'lnap','\u2A87':'lne','\u2268':'lnE','\u22E6':'lnsim','\u27EC':'loang','\u21FD':'loarr','\u27F5':'xlarr','\u27F7':'xharr','\u27FC':'xmap','\u27F6':'xrarr','\u21AC':'rarrlp','\u2985':'lopar','\uD835\uDD43':'Lopf','\uD835\uDD5D':'lopf','\u2A2D':'loplus','\u2A34':'lotimes','\u2217':'lowast','_':'lowbar','\u2199':'swarr','\u2198':'searr','\u25CA':'loz','(':'lpar','\u2993':'lparlt','\u296D':'lrhard','\u200E':'lrm','\u22BF':'lrtri','\u2039':'lsaquo','\uD835\uDCC1':'lscr','\u21B0':'lsh','\u2A8D':'lsime','\u2A8F':'lsimg','\u2018':'lsquo','\u201A':'sbquo','\u0141':'Lstrok','\u0142':'lstrok','\u2AA6':'ltcc','\u2A79':'ltcir','<':'lt','\u22C9':'ltimes','\u2976':'ltlarr','\u2A7B':'ltquest','\u25C3':'ltri','\u2996':'ltrPar','\u294A':'lurdshar','\u2966':'luruhar','\u2268\uFE00':'lvnE','\xAF':'macr','\u2642':'male','\u2720':'malt','\u2905':'Map','\u21A6':'map','\u21A5':'mapstoup','\u25AE':'marker','\u2A29':'mcomma','\u041C':'Mcy','\u043C':'mcy','\u2014':'mdash','\u223A':'mDDot','\u205F':'MediumSpace','\u2133':'Mscr','\uD835\uDD10':'Mfr','\uD835\uDD2A':'mfr','\u2127':'mho','\xB5':'micro','\u2AF0':'midcir','\u2223':'mid','\u2212':'minus','\u2A2A':'minusdu','\u2213':'mp','\u2ADB':'mlcp','\u22A7':'models','\uD835\uDD44':'Mopf','\uD835\uDD5E':'mopf','\uD835\uDCC2':'mscr','\u039C':'Mu','\u03BC':'mu','\u22B8':'mumap','\u0143':'Nacute','\u0144':'nacute','\u2220\u20D2':'nang','\u2249':'nap','\u2A70\u0338':'napE','\u224B\u0338':'napid','\u0149':'napos','\u266E':'natur','\u2115':'Nopf','\xA0':'nbsp','\u224E\u0338':'nbump','\u224F\u0338':'nbumpe','\u2A43':'ncap','\u0147':'Ncaron','\u0148':'ncaron','\u0145':'Ncedil','\u0146':'ncedil','\u2247':'ncong','\u2A6D\u0338':'ncongdot','\u2A42':'ncup','\u041D':'Ncy','\u043D':'ncy','\u2013':'ndash','\u2924':'nearhk','\u2197':'nearr','\u21D7':'neArr','\u2260':'ne','\u2250\u0338':'nedot','\u200B':'ZeroWidthSpace','\u2262':'nequiv','\u2928':'toea','\u2242\u0338':'nesim','\n':'NewLine','\u2204':'nexist','\uD835\uDD11':'Nfr','\uD835\uDD2B':'nfr','\u2267\u0338':'ngE','\u2271':'nge','\u2A7E\u0338':'nges','\u22D9\u0338':'nGg','\u2275':'ngsim','\u226B\u20D2':'nGt','\u226F':'ngt','\u226B\u0338':'nGtv','\u21AE':'nharr','\u21CE':'nhArr','\u2AF2':'nhpar','\u220B':'ni','\u22FC':'nis','\u22FA':'nisd','\u040A':'NJcy','\u045A':'njcy','\u219A':'nlarr','\u21CD':'nlArr','\u2025':'nldr','\u2266\u0338':'nlE','\u2270':'nle','\u2A7D\u0338':'nles','\u226E':'nlt','\u22D8\u0338':'nLl','\u2274':'nlsim','\u226A\u20D2':'nLt','\u22EA':'nltri','\u22EC':'nltrie','\u226A\u0338':'nLtv','\u2224':'nmid','\u2060':'NoBreak','\uD835\uDD5F':'nopf','\u2AEC':'Not','\xAC':'not','\u226D':'NotCupCap','\u2226':'npar','\u2209':'notin','\u2279':'ntgl','\u22F5\u0338':'notindot','\u22F9\u0338':'notinE','\u22F7':'notinvb','\u22F6':'notinvc','\u29CF\u0338':'NotLeftTriangleBar','\u2278':'ntlg','\u2AA2\u0338':'NotNestedGreaterGreater','\u2AA1\u0338':'NotNestedLessLess','\u220C':'notni','\u22FE':'notnivb','\u22FD':'notnivc','\u2280':'npr','\u2AAF\u0338':'npre','\u22E0':'nprcue','\u29D0\u0338':'NotRightTriangleBar','\u22EB':'nrtri','\u22ED':'nrtrie','\u228F\u0338':'NotSquareSubset','\u22E2':'nsqsube','\u2290\u0338':'NotSquareSuperset','\u22E3':'nsqsupe','\u2282\u20D2':'vnsub','\u2288':'nsube','\u2281':'nsc','\u2AB0\u0338':'nsce','\u22E1':'nsccue','\u227F\u0338':'NotSucceedsTilde','\u2283\u20D2':'vnsup','\u2289':'nsupe','\u2241':'nsim','\u2244':'nsime','\u2AFD\u20E5':'nparsl','\u2202\u0338':'npart','\u2A14':'npolint','\u2933\u0338':'nrarrc','\u219B':'nrarr','\u21CF':'nrArr','\u219D\u0338':'nrarrw','\uD835\uDCA9':'Nscr','\uD835\uDCC3':'nscr','\u2284':'nsub','\u2AC5\u0338':'nsubE','\u2285':'nsup','\u2AC6\u0338':'nsupE','\xD1':'Ntilde','\xF1':'ntilde','\u039D':'Nu','\u03BD':'nu','#':'num','\u2116':'numero','\u2007':'numsp','\u224D\u20D2':'nvap','\u22AC':'nvdash','\u22AD':'nvDash','\u22AE':'nVdash','\u22AF':'nVDash','\u2265\u20D2':'nvge','>\u20D2':'nvgt','\u2904':'nvHarr','\u29DE':'nvinfin','\u2902':'nvlArr','\u2264\u20D2':'nvle','<\u20D2':'nvlt','\u22B4\u20D2':'nvltrie','\u2903':'nvrArr','\u22B5\u20D2':'nvrtrie','\u223C\u20D2':'nvsim','\u2923':'nwarhk','\u2196':'nwarr','\u21D6':'nwArr','\u2927':'nwnear','\xD3':'Oacute','\xF3':'oacute','\xD4':'Ocirc','\xF4':'ocirc','\u041E':'Ocy','\u043E':'ocy','\u0150':'Odblac','\u0151':'odblac','\u2A38':'odiv','\u29BC':'odsold','\u0152':'OElig','\u0153':'oelig','\u29BF':'ofcir','\uD835\uDD12':'Ofr','\uD835\uDD2C':'ofr','\u02DB':'ogon','\xD2':'Ograve','\xF2':'ograve','\u29C1':'ogt','\u29B5':'ohbar','\u03A9':'ohm','\u29BE':'olcir','\u29BB':'olcross','\u203E':'oline','\u29C0':'olt','\u014C':'Omacr','\u014D':'omacr','\u03C9':'omega','\u039F':'Omicron','\u03BF':'omicron','\u29B6':'omid','\uD835\uDD46':'Oopf','\uD835\uDD60':'oopf','\u29B7':'opar','\u29B9':'operp','\u2A54':'Or','\u2228':'or','\u2A5D':'ord','\u2134':'oscr','\xAA':'ordf','\xBA':'ordm','\u22B6':'origof','\u2A56':'oror','\u2A57':'orslope','\u2A5B':'orv','\uD835\uDCAA':'Oscr','\xD8':'Oslash','\xF8':'oslash','\u2298':'osol','\xD5':'Otilde','\xF5':'otilde','\u2A36':'otimesas','\u2A37':'Otimes','\xD6':'Ouml','\xF6':'ouml','\u233D':'ovbar','\u23DE':'OverBrace','\u23B4':'tbrk','\u23DC':'OverParenthesis','\xB6':'para','\u2AF3':'parsim','\u2AFD':'parsl','\u2202':'part','\u041F':'Pcy','\u043F':'pcy','%':'percnt','.':'period','\u2030':'permil','\u2031':'pertenk','\uD835\uDD13':'Pfr','\uD835\uDD2D':'pfr','\u03A6':'Phi','\u03C6':'phi','\u03D5':'phiv','\u260E':'phone','\u03A0':'Pi','\u03C0':'pi','\u03D6':'piv','\u210E':'planckh','\u2A23':'plusacir','\u2A22':'pluscir','+':'plus','\u2A25':'plusdu','\u2A72':'pluse','\xB1':'pm','\u2A26':'plussim','\u2A27':'plustwo','\u2A15':'pointint','\uD835\uDD61':'popf','\u2119':'Popf','\xA3':'pound','\u2AB7':'prap','\u2ABB':'Pr','\u227A':'pr','\u227C':'prcue','\u2AAF':'pre','\u227E':'prsim','\u2AB9':'prnap','\u2AB5':'prnE','\u22E8':'prnsim','\u2AB3':'prE','\u2032':'prime','\u2033':'Prime','\u220F':'prod','\u232E':'profalar','\u2312':'profline','\u2313':'profsurf','\u221D':'prop','\u22B0':'prurel','\uD835\uDCAB':'Pscr','\uD835\uDCC5':'pscr','\u03A8':'Psi','\u03C8':'psi','\u2008':'puncsp','\uD835\uDD14':'Qfr','\uD835\uDD2E':'qfr','\uD835\uDD62':'qopf','\u211A':'Qopf','\u2057':'qprime','\uD835\uDCAC':'Qscr','\uD835\uDCC6':'qscr','\u2A16':'quatint','?':'quest','"':'quot','\u21DB':'rAarr','\u223D\u0331':'race','\u0154':'Racute','\u0155':'racute','\u221A':'Sqrt','\u29B3':'raemptyv','\u27E9':'rang','\u27EB':'Rang','\u2992':'rangd','\u29A5':'range','\xBB':'raquo','\u2975':'rarrap','\u21E5':'rarrb','\u2920':'rarrbfs','\u2933':'rarrc','\u2192':'rarr','\u21A0':'Rarr','\u291E':'rarrfs','\u2945':'rarrpl','\u2974':'rarrsim','\u2916':'Rarrtl','\u21A3':'rarrtl','\u219D':'rarrw','\u291A':'ratail','\u291C':'rAtail','\u2236':'ratio','\u2773':'rbbrk','}':'rcub',']':'rsqb','\u298C':'rbrke','\u298E':'rbrksld','\u2990':'rbrkslu','\u0158':'Rcaron','\u0159':'rcaron','\u0156':'Rcedil','\u0157':'rcedil','\u2309':'rceil','\u0420':'Rcy','\u0440':'rcy','\u2937':'rdca','\u2969':'rdldhar','\u21B3':'rdsh','\u211C':'Re','\u211B':'Rscr','\u211D':'Ropf','\u25AD':'rect','\u297D':'rfisht','\u230B':'rfloor','\uD835\uDD2F':'rfr','\u2964':'rHar','\u21C0':'rharu','\u296C':'rharul','\u03A1':'Rho','\u03C1':'rho','\u03F1':'rhov','\u21C4':'rlarr','\u27E7':'robrk','\u295D':'RightDownTeeVector','\u2955':'RightDownVectorBar','\u21C9':'rrarr','\u22A2':'vdash','\u295B':'RightTeeVector','\u22CC':'rthree','\u29D0':'RightTriangleBar','\u22B3':'vrtri','\u22B5':'rtrie','\u294F':'RightUpDownVector','\u295C':'RightUpTeeVector','\u2954':'RightUpVectorBar','\u21BE':'uharr','\u2953':'RightVectorBar','\u02DA':'ring','\u200F':'rlm','\u23B1':'rmoust','\u2AEE':'rnmid','\u27ED':'roang','\u21FE':'roarr','\u2986':'ropar','\uD835\uDD63':'ropf','\u2A2E':'roplus','\u2A35':'rotimes','\u2970':'RoundImplies',')':'rpar','\u2994':'rpargt','\u2A12':'rppolint','\u203A':'rsaquo','\uD835\uDCC7':'rscr','\u21B1':'rsh','\u22CA':'rtimes','\u25B9':'rtri','\u29CE':'rtriltri','\u29F4':'RuleDelayed','\u2968':'ruluhar','\u211E':'rx','\u015A':'Sacute','\u015B':'sacute','\u2AB8':'scap','\u0160':'Scaron','\u0161':'scaron','\u2ABC':'Sc','\u227B':'sc','\u227D':'sccue','\u2AB0':'sce','\u2AB4':'scE','\u015E':'Scedil','\u015F':'scedil','\u015C':'Scirc','\u015D':'scirc','\u2ABA':'scnap','\u2AB6':'scnE','\u22E9':'scnsim','\u2A13':'scpolint','\u227F':'scsim','\u0421':'Scy','\u0441':'scy','\u22C5':'sdot','\u2A66':'sdote','\u21D8':'seArr','\xA7':'sect',';':'semi','\u2929':'tosa','\u2736':'sext','\uD835\uDD16':'Sfr','\uD835\uDD30':'sfr','\u266F':'sharp','\u0429':'SHCHcy','\u0449':'shchcy','\u0428':'SHcy','\u0448':'shcy','\u2191':'uarr','\xAD':'shy','\u03A3':'Sigma','\u03C3':'sigma','\u03C2':'sigmaf','\u223C':'sim','\u2A6A':'simdot','\u2243':'sime','\u2A9E':'simg','\u2AA0':'simgE','\u2A9D':'siml','\u2A9F':'simlE','\u2246':'simne','\u2A24':'simplus','\u2972':'simrarr','\u2A33':'smashp','\u29E4':'smeparsl','\u2323':'smile','\u2AAA':'smt','\u2AAC':'smte','\u2AAC\uFE00':'smtes','\u042C':'SOFTcy','\u044C':'softcy','\u233F':'solbar','\u29C4':'solb','/':'sol','\uD835\uDD4A':'Sopf','\uD835\uDD64':'sopf','\u2660':'spades','\u2293':'sqcap','\u2293\uFE00':'sqcaps','\u2294':'sqcup','\u2294\uFE00':'sqcups','\u228F':'sqsub','\u2291':'sqsube','\u2290':'sqsup','\u2292':'sqsupe','\u25A1':'squ','\uD835\uDCAE':'Sscr','\uD835\uDCC8':'sscr','\u22C6':'Star','\u2606':'star','\u2282':'sub','\u22D0':'Sub','\u2ABD':'subdot','\u2AC5':'subE','\u2286':'sube','\u2AC3':'subedot','\u2AC1':'submult','\u2ACB':'subnE','\u228A':'subne','\u2ABF':'subplus','\u2979':'subrarr','\u2AC7':'subsim','\u2AD5':'subsub','\u2AD3':'subsup','\u2211':'sum','\u266A':'sung','\xB9':'sup1','\xB2':'sup2','\xB3':'sup3','\u2283':'sup','\u22D1':'Sup','\u2ABE':'supdot','\u2AD8':'supdsub','\u2AC6':'supE','\u2287':'supe','\u2AC4':'supedot','\u27C9':'suphsol','\u2AD7':'suphsub','\u297B':'suplarr','\u2AC2':'supmult','\u2ACC':'supnE','\u228B':'supne','\u2AC0':'supplus','\u2AC8':'supsim','\u2AD4':'supsub','\u2AD6':'supsup','\u21D9':'swArr','\u292A':'swnwar','\xDF':'szlig','\t':'Tab','\u2316':'target','\u03A4':'Tau','\u03C4':'tau','\u0164':'Tcaron','\u0165':'tcaron','\u0162':'Tcedil','\u0163':'tcedil','\u0422':'Tcy','\u0442':'tcy','\u20DB':'tdot','\u2315':'telrec','\uD835\uDD17':'Tfr','\uD835\uDD31':'tfr','\u2234':'there4','\u0398':'Theta','\u03B8':'theta','\u03D1':'thetav','\u205F\u200A':'ThickSpace','\u2009':'thinsp','\xDE':'THORN','\xFE':'thorn','\u2A31':'timesbar','\xD7':'times','\u2A30':'timesd','\u2336':'topbot','\u2AF1':'topcir','\uD835\uDD4B':'Topf','\uD835\uDD65':'topf','\u2ADA':'topfork','\u2034':'tprime','\u2122':'trade','\u25B5':'utri','\u225C':'trie','\u25EC':'tridot','\u2A3A':'triminus','\u2A39':'triplus','\u29CD':'trisb','\u2A3B':'tritime','\u23E2':'trpezium','\uD835\uDCAF':'Tscr','\uD835\uDCC9':'tscr','\u0426':'TScy','\u0446':'tscy','\u040B':'TSHcy','\u045B':'tshcy','\u0166':'Tstrok','\u0167':'tstrok','\xDA':'Uacute','\xFA':'uacute','\u219F':'Uarr','\u2949':'Uarrocir','\u040E':'Ubrcy','\u045E':'ubrcy','\u016C':'Ubreve','\u016D':'ubreve','\xDB':'Ucirc','\xFB':'ucirc','\u0423':'Ucy','\u0443':'ucy','\u21C5':'udarr','\u0170':'Udblac','\u0171':'udblac','\u296E':'udhar','\u297E':'ufisht','\uD835\uDD18':'Ufr','\uD835\uDD32':'ufr','\xD9':'Ugrave','\xF9':'ugrave','\u2963':'uHar','\u2580':'uhblk','\u231C':'ulcorn','\u230F':'ulcrop','\u25F8':'ultri','\u016A':'Umacr','\u016B':'umacr','\u23DF':'UnderBrace','\u23DD':'UnderParenthesis','\u228E':'uplus','\u0172':'Uogon','\u0173':'uogon','\uD835\uDD4C':'Uopf','\uD835\uDD66':'uopf','\u2912':'UpArrowBar','\u2195':'varr','\u03C5':'upsi','\u03D2':'Upsi','\u03A5':'Upsilon','\u21C8':'uuarr','\u231D':'urcorn','\u230E':'urcrop','\u016E':'Uring','\u016F':'uring','\u25F9':'urtri','\uD835\uDCB0':'Uscr','\uD835\uDCCA':'uscr','\u22F0':'utdot','\u0168':'Utilde','\u0169':'utilde','\xDC':'Uuml','\xFC':'uuml','\u29A7':'uwangle','\u299C':'vangrt','\u228A\uFE00':'vsubne','\u2ACB\uFE00':'vsubnE','\u228B\uFE00':'vsupne','\u2ACC\uFE00':'vsupnE','\u2AE8':'vBar','\u2AEB':'Vbar','\u2AE9':'vBarv','\u0412':'Vcy','\u0432':'vcy','\u22A9':'Vdash','\u22AB':'VDash','\u2AE6':'Vdashl','\u22BB':'veebar','\u225A':'veeeq','\u22EE':'vellip','|':'vert','\u2016':'Vert','\u2758':'VerticalSeparator','\u2240':'wr','\uD835\uDD19':'Vfr','\uD835\uDD33':'vfr','\uD835\uDD4D':'Vopf','\uD835\uDD67':'vopf','\uD835\uDCB1':'Vscr','\uD835\uDCCB':'vscr','\u22AA':'Vvdash','\u299A':'vzigzag','\u0174':'Wcirc','\u0175':'wcirc','\u2A5F':'wedbar','\u2259':'wedgeq','\u2118':'wp','\uD835\uDD1A':'Wfr','\uD835\uDD34':'wfr','\uD835\uDD4E':'Wopf','\uD835\uDD68':'wopf','\uD835\uDCB2':'Wscr','\uD835\uDCCC':'wscr','\uD835\uDD1B':'Xfr','\uD835\uDD35':'xfr','\u039E':'Xi','\u03BE':'xi','\u22FB':'xnis','\uD835\uDD4F':'Xopf','\uD835\uDD69':'xopf','\uD835\uDCB3':'Xscr','\uD835\uDCCD':'xscr','\xDD':'Yacute','\xFD':'yacute','\u042F':'YAcy','\u044F':'yacy','\u0176':'Ycirc','\u0177':'ycirc','\u042B':'Ycy','\u044B':'ycy','\xA5':'yen','\uD835\uDD1C':'Yfr','\uD835\uDD36':'yfr','\u0407':'YIcy','\u0457':'yicy','\uD835\uDD50':'Yopf','\uD835\uDD6A':'yopf','\uD835\uDCB4':'Yscr','\uD835\uDCCE':'yscr','\u042E':'YUcy','\u044E':'yucy','\xFF':'yuml','\u0178':'Yuml','\u0179':'Zacute','\u017A':'zacute','\u017D':'Zcaron','\u017E':'zcaron','\u0417':'Zcy','\u0437':'zcy','\u017B':'Zdot','\u017C':'zdot','\u2128':'Zfr','\u0396':'Zeta','\u03B6':'zeta','\uD835\uDD37':'zfr','\u0416':'ZHcy','\u0436':'zhcy','\u21DD':'zigrarr','\uD835\uDD6B':'zopf','\uD835\uDCB5':'Zscr','\uD835\uDCCF':'zscr','\u200D':'zwj','\u200C':'zwnj'};
	
		var regexEscape = /["&'<>`]/g;
		var escapeMap = {
			'"': '&quot;',
			'&': '&amp;',
			'\'': '&#x27;',
			'<': '&lt;',
			// See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
			// following is not strictly necessary unless it’s part of a tag or an
			// unquoted attribute value. We’re only escaping it to support those
			// situations, and for XML support.
			'>': '&gt;',
			// In Internet Explorer ≤ 8, the backtick character can be used
			// to break out of (un)quoted attribute values or HTML comments.
			// See http://html5sec.org/#102, http://html5sec.org/#108, and
			// http://html5sec.org/#133.
			'`': '&#x60;'
		};
	
		var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
		var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
		var regexDecode = /&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+);|&(Aacute|iacute|Uacute|plusmn|otilde|Otilde|Agrave|agrave|yacute|Yacute|oslash|Oslash|Atilde|atilde|brvbar|Ccedil|ccedil|ograve|curren|divide|Eacute|eacute|Ograve|oacute|Egrave|egrave|ugrave|frac12|frac14|frac34|Ugrave|Oacute|Iacute|ntilde|Ntilde|uacute|middot|Igrave|igrave|iquest|aacute|laquo|THORN|micro|iexcl|icirc|Icirc|Acirc|ucirc|ecirc|Ocirc|ocirc|Ecirc|Ucirc|aring|Aring|aelig|AElig|acute|pound|raquo|acirc|times|thorn|szlig|cedil|COPY|Auml|ordf|ordm|uuml|macr|Uuml|auml|Ouml|ouml|para|nbsp|Euml|quot|QUOT|euml|yuml|cent|sect|copy|sup1|sup2|sup3|Iuml|iuml|shy|eth|reg|not|yen|amp|AMP|REG|uml|ETH|deg|gt|GT|LT|lt)([=a-zA-Z0-9])?/g;
		var decodeMap = {'Aacute':'\xC1','aacute':'\xE1','Abreve':'\u0102','abreve':'\u0103','ac':'\u223E','acd':'\u223F','acE':'\u223E\u0333','Acirc':'\xC2','acirc':'\xE2','acute':'\xB4','Acy':'\u0410','acy':'\u0430','AElig':'\xC6','aelig':'\xE6','af':'\u2061','Afr':'\uD835\uDD04','afr':'\uD835\uDD1E','Agrave':'\xC0','agrave':'\xE0','alefsym':'\u2135','aleph':'\u2135','Alpha':'\u0391','alpha':'\u03B1','Amacr':'\u0100','amacr':'\u0101','amalg':'\u2A3F','amp':'&','AMP':'&','andand':'\u2A55','And':'\u2A53','and':'\u2227','andd':'\u2A5C','andslope':'\u2A58','andv':'\u2A5A','ang':'\u2220','ange':'\u29A4','angle':'\u2220','angmsdaa':'\u29A8','angmsdab':'\u29A9','angmsdac':'\u29AA','angmsdad':'\u29AB','angmsdae':'\u29AC','angmsdaf':'\u29AD','angmsdag':'\u29AE','angmsdah':'\u29AF','angmsd':'\u2221','angrt':'\u221F','angrtvb':'\u22BE','angrtvbd':'\u299D','angsph':'\u2222','angst':'\xC5','angzarr':'\u237C','Aogon':'\u0104','aogon':'\u0105','Aopf':'\uD835\uDD38','aopf':'\uD835\uDD52','apacir':'\u2A6F','ap':'\u2248','apE':'\u2A70','ape':'\u224A','apid':'\u224B','apos':'\'','ApplyFunction':'\u2061','approx':'\u2248','approxeq':'\u224A','Aring':'\xC5','aring':'\xE5','Ascr':'\uD835\uDC9C','ascr':'\uD835\uDCB6','Assign':'\u2254','ast':'*','asymp':'\u2248','asympeq':'\u224D','Atilde':'\xC3','atilde':'\xE3','Auml':'\xC4','auml':'\xE4','awconint':'\u2233','awint':'\u2A11','backcong':'\u224C','backepsilon':'\u03F6','backprime':'\u2035','backsim':'\u223D','backsimeq':'\u22CD','Backslash':'\u2216','Barv':'\u2AE7','barvee':'\u22BD','barwed':'\u2305','Barwed':'\u2306','barwedge':'\u2305','bbrk':'\u23B5','bbrktbrk':'\u23B6','bcong':'\u224C','Bcy':'\u0411','bcy':'\u0431','bdquo':'\u201E','becaus':'\u2235','because':'\u2235','Because':'\u2235','bemptyv':'\u29B0','bepsi':'\u03F6','bernou':'\u212C','Bernoullis':'\u212C','Beta':'\u0392','beta':'\u03B2','beth':'\u2136','between':'\u226C','Bfr':'\uD835\uDD05','bfr':'\uD835\uDD1F','bigcap':'\u22C2','bigcirc':'\u25EF','bigcup':'\u22C3','bigodot':'\u2A00','bigoplus':'\u2A01','bigotimes':'\u2A02','bigsqcup':'\u2A06','bigstar':'\u2605','bigtriangledown':'\u25BD','bigtriangleup':'\u25B3','biguplus':'\u2A04','bigvee':'\u22C1','bigwedge':'\u22C0','bkarow':'\u290D','blacklozenge':'\u29EB','blacksquare':'\u25AA','blacktriangle':'\u25B4','blacktriangledown':'\u25BE','blacktriangleleft':'\u25C2','blacktriangleright':'\u25B8','blank':'\u2423','blk12':'\u2592','blk14':'\u2591','blk34':'\u2593','block':'\u2588','bne':'=\u20E5','bnequiv':'\u2261\u20E5','bNot':'\u2AED','bnot':'\u2310','Bopf':'\uD835\uDD39','bopf':'\uD835\uDD53','bot':'\u22A5','bottom':'\u22A5','bowtie':'\u22C8','boxbox':'\u29C9','boxdl':'\u2510','boxdL':'\u2555','boxDl':'\u2556','boxDL':'\u2557','boxdr':'\u250C','boxdR':'\u2552','boxDr':'\u2553','boxDR':'\u2554','boxh':'\u2500','boxH':'\u2550','boxhd':'\u252C','boxHd':'\u2564','boxhD':'\u2565','boxHD':'\u2566','boxhu':'\u2534','boxHu':'\u2567','boxhU':'\u2568','boxHU':'\u2569','boxminus':'\u229F','boxplus':'\u229E','boxtimes':'\u22A0','boxul':'\u2518','boxuL':'\u255B','boxUl':'\u255C','boxUL':'\u255D','boxur':'\u2514','boxuR':'\u2558','boxUr':'\u2559','boxUR':'\u255A','boxv':'\u2502','boxV':'\u2551','boxvh':'\u253C','boxvH':'\u256A','boxVh':'\u256B','boxVH':'\u256C','boxvl':'\u2524','boxvL':'\u2561','boxVl':'\u2562','boxVL':'\u2563','boxvr':'\u251C','boxvR':'\u255E','boxVr':'\u255F','boxVR':'\u2560','bprime':'\u2035','breve':'\u02D8','Breve':'\u02D8','brvbar':'\xA6','bscr':'\uD835\uDCB7','Bscr':'\u212C','bsemi':'\u204F','bsim':'\u223D','bsime':'\u22CD','bsolb':'\u29C5','bsol':'\\','bsolhsub':'\u27C8','bull':'\u2022','bullet':'\u2022','bump':'\u224E','bumpE':'\u2AAE','bumpe':'\u224F','Bumpeq':'\u224E','bumpeq':'\u224F','Cacute':'\u0106','cacute':'\u0107','capand':'\u2A44','capbrcup':'\u2A49','capcap':'\u2A4B','cap':'\u2229','Cap':'\u22D2','capcup':'\u2A47','capdot':'\u2A40','CapitalDifferentialD':'\u2145','caps':'\u2229\uFE00','caret':'\u2041','caron':'\u02C7','Cayleys':'\u212D','ccaps':'\u2A4D','Ccaron':'\u010C','ccaron':'\u010D','Ccedil':'\xC7','ccedil':'\xE7','Ccirc':'\u0108','ccirc':'\u0109','Cconint':'\u2230','ccups':'\u2A4C','ccupssm':'\u2A50','Cdot':'\u010A','cdot':'\u010B','cedil':'\xB8','Cedilla':'\xB8','cemptyv':'\u29B2','cent':'\xA2','centerdot':'\xB7','CenterDot':'\xB7','cfr':'\uD835\uDD20','Cfr':'\u212D','CHcy':'\u0427','chcy':'\u0447','check':'\u2713','checkmark':'\u2713','Chi':'\u03A7','chi':'\u03C7','circ':'\u02C6','circeq':'\u2257','circlearrowleft':'\u21BA','circlearrowright':'\u21BB','circledast':'\u229B','circledcirc':'\u229A','circleddash':'\u229D','CircleDot':'\u2299','circledR':'\xAE','circledS':'\u24C8','CircleMinus':'\u2296','CirclePlus':'\u2295','CircleTimes':'\u2297','cir':'\u25CB','cirE':'\u29C3','cire':'\u2257','cirfnint':'\u2A10','cirmid':'\u2AEF','cirscir':'\u29C2','ClockwiseContourIntegral':'\u2232','CloseCurlyDoubleQuote':'\u201D','CloseCurlyQuote':'\u2019','clubs':'\u2663','clubsuit':'\u2663','colon':':','Colon':'\u2237','Colone':'\u2A74','colone':'\u2254','coloneq':'\u2254','comma':',','commat':'@','comp':'\u2201','compfn':'\u2218','complement':'\u2201','complexes':'\u2102','cong':'\u2245','congdot':'\u2A6D','Congruent':'\u2261','conint':'\u222E','Conint':'\u222F','ContourIntegral':'\u222E','copf':'\uD835\uDD54','Copf':'\u2102','coprod':'\u2210','Coproduct':'\u2210','copy':'\xA9','COPY':'\xA9','copysr':'\u2117','CounterClockwiseContourIntegral':'\u2233','crarr':'\u21B5','cross':'\u2717','Cross':'\u2A2F','Cscr':'\uD835\uDC9E','cscr':'\uD835\uDCB8','csub':'\u2ACF','csube':'\u2AD1','csup':'\u2AD0','csupe':'\u2AD2','ctdot':'\u22EF','cudarrl':'\u2938','cudarrr':'\u2935','cuepr':'\u22DE','cuesc':'\u22DF','cularr':'\u21B6','cularrp':'\u293D','cupbrcap':'\u2A48','cupcap':'\u2A46','CupCap':'\u224D','cup':'\u222A','Cup':'\u22D3','cupcup':'\u2A4A','cupdot':'\u228D','cupor':'\u2A45','cups':'\u222A\uFE00','curarr':'\u21B7','curarrm':'\u293C','curlyeqprec':'\u22DE','curlyeqsucc':'\u22DF','curlyvee':'\u22CE','curlywedge':'\u22CF','curren':'\xA4','curvearrowleft':'\u21B6','curvearrowright':'\u21B7','cuvee':'\u22CE','cuwed':'\u22CF','cwconint':'\u2232','cwint':'\u2231','cylcty':'\u232D','dagger':'\u2020','Dagger':'\u2021','daleth':'\u2138','darr':'\u2193','Darr':'\u21A1','dArr':'\u21D3','dash':'\u2010','Dashv':'\u2AE4','dashv':'\u22A3','dbkarow':'\u290F','dblac':'\u02DD','Dcaron':'\u010E','dcaron':'\u010F','Dcy':'\u0414','dcy':'\u0434','ddagger':'\u2021','ddarr':'\u21CA','DD':'\u2145','dd':'\u2146','DDotrahd':'\u2911','ddotseq':'\u2A77','deg':'\xB0','Del':'\u2207','Delta':'\u0394','delta':'\u03B4','demptyv':'\u29B1','dfisht':'\u297F','Dfr':'\uD835\uDD07','dfr':'\uD835\uDD21','dHar':'\u2965','dharl':'\u21C3','dharr':'\u21C2','DiacriticalAcute':'\xB4','DiacriticalDot':'\u02D9','DiacriticalDoubleAcute':'\u02DD','DiacriticalGrave':'`','DiacriticalTilde':'\u02DC','diam':'\u22C4','diamond':'\u22C4','Diamond':'\u22C4','diamondsuit':'\u2666','diams':'\u2666','die':'\xA8','DifferentialD':'\u2146','digamma':'\u03DD','disin':'\u22F2','div':'\xF7','divide':'\xF7','divideontimes':'\u22C7','divonx':'\u22C7','DJcy':'\u0402','djcy':'\u0452','dlcorn':'\u231E','dlcrop':'\u230D','dollar':'$','Dopf':'\uD835\uDD3B','dopf':'\uD835\uDD55','Dot':'\xA8','dot':'\u02D9','DotDot':'\u20DC','doteq':'\u2250','doteqdot':'\u2251','DotEqual':'\u2250','dotminus':'\u2238','dotplus':'\u2214','dotsquare':'\u22A1','doublebarwedge':'\u2306','DoubleContourIntegral':'\u222F','DoubleDot':'\xA8','DoubleDownArrow':'\u21D3','DoubleLeftArrow':'\u21D0','DoubleLeftRightArrow':'\u21D4','DoubleLeftTee':'\u2AE4','DoubleLongLeftArrow':'\u27F8','DoubleLongLeftRightArrow':'\u27FA','DoubleLongRightArrow':'\u27F9','DoubleRightArrow':'\u21D2','DoubleRightTee':'\u22A8','DoubleUpArrow':'\u21D1','DoubleUpDownArrow':'\u21D5','DoubleVerticalBar':'\u2225','DownArrowBar':'\u2913','downarrow':'\u2193','DownArrow':'\u2193','Downarrow':'\u21D3','DownArrowUpArrow':'\u21F5','DownBreve':'\u0311','downdownarrows':'\u21CA','downharpoonleft':'\u21C3','downharpoonright':'\u21C2','DownLeftRightVector':'\u2950','DownLeftTeeVector':'\u295E','DownLeftVectorBar':'\u2956','DownLeftVector':'\u21BD','DownRightTeeVector':'\u295F','DownRightVectorBar':'\u2957','DownRightVector':'\u21C1','DownTeeArrow':'\u21A7','DownTee':'\u22A4','drbkarow':'\u2910','drcorn':'\u231F','drcrop':'\u230C','Dscr':'\uD835\uDC9F','dscr':'\uD835\uDCB9','DScy':'\u0405','dscy':'\u0455','dsol':'\u29F6','Dstrok':'\u0110','dstrok':'\u0111','dtdot':'\u22F1','dtri':'\u25BF','dtrif':'\u25BE','duarr':'\u21F5','duhar':'\u296F','dwangle':'\u29A6','DZcy':'\u040F','dzcy':'\u045F','dzigrarr':'\u27FF','Eacute':'\xC9','eacute':'\xE9','easter':'\u2A6E','Ecaron':'\u011A','ecaron':'\u011B','Ecirc':'\xCA','ecirc':'\xEA','ecir':'\u2256','ecolon':'\u2255','Ecy':'\u042D','ecy':'\u044D','eDDot':'\u2A77','Edot':'\u0116','edot':'\u0117','eDot':'\u2251','ee':'\u2147','efDot':'\u2252','Efr':'\uD835\uDD08','efr':'\uD835\uDD22','eg':'\u2A9A','Egrave':'\xC8','egrave':'\xE8','egs':'\u2A96','egsdot':'\u2A98','el':'\u2A99','Element':'\u2208','elinters':'\u23E7','ell':'\u2113','els':'\u2A95','elsdot':'\u2A97','Emacr':'\u0112','emacr':'\u0113','empty':'\u2205','emptyset':'\u2205','EmptySmallSquare':'\u25FB','emptyv':'\u2205','EmptyVerySmallSquare':'\u25AB','emsp13':'\u2004','emsp14':'\u2005','emsp':'\u2003','ENG':'\u014A','eng':'\u014B','ensp':'\u2002','Eogon':'\u0118','eogon':'\u0119','Eopf':'\uD835\uDD3C','eopf':'\uD835\uDD56','epar':'\u22D5','eparsl':'\u29E3','eplus':'\u2A71','epsi':'\u03B5','Epsilon':'\u0395','epsilon':'\u03B5','epsiv':'\u03F5','eqcirc':'\u2256','eqcolon':'\u2255','eqsim':'\u2242','eqslantgtr':'\u2A96','eqslantless':'\u2A95','Equal':'\u2A75','equals':'=','EqualTilde':'\u2242','equest':'\u225F','Equilibrium':'\u21CC','equiv':'\u2261','equivDD':'\u2A78','eqvparsl':'\u29E5','erarr':'\u2971','erDot':'\u2253','escr':'\u212F','Escr':'\u2130','esdot':'\u2250','Esim':'\u2A73','esim':'\u2242','Eta':'\u0397','eta':'\u03B7','ETH':'\xD0','eth':'\xF0','Euml':'\xCB','euml':'\xEB','euro':'\u20AC','excl':'!','exist':'\u2203','Exists':'\u2203','expectation':'\u2130','exponentiale':'\u2147','ExponentialE':'\u2147','fallingdotseq':'\u2252','Fcy':'\u0424','fcy':'\u0444','female':'\u2640','ffilig':'\uFB03','fflig':'\uFB00','ffllig':'\uFB04','Ffr':'\uD835\uDD09','ffr':'\uD835\uDD23','filig':'\uFB01','FilledSmallSquare':'\u25FC','FilledVerySmallSquare':'\u25AA','fjlig':'fj','flat':'\u266D','fllig':'\uFB02','fltns':'\u25B1','fnof':'\u0192','Fopf':'\uD835\uDD3D','fopf':'\uD835\uDD57','forall':'\u2200','ForAll':'\u2200','fork':'\u22D4','forkv':'\u2AD9','Fouriertrf':'\u2131','fpartint':'\u2A0D','frac12':'\xBD','frac13':'\u2153','frac14':'\xBC','frac15':'\u2155','frac16':'\u2159','frac18':'\u215B','frac23':'\u2154','frac25':'\u2156','frac34':'\xBE','frac35':'\u2157','frac38':'\u215C','frac45':'\u2158','frac56':'\u215A','frac58':'\u215D','frac78':'\u215E','frasl':'\u2044','frown':'\u2322','fscr':'\uD835\uDCBB','Fscr':'\u2131','gacute':'\u01F5','Gamma':'\u0393','gamma':'\u03B3','Gammad':'\u03DC','gammad':'\u03DD','gap':'\u2A86','Gbreve':'\u011E','gbreve':'\u011F','Gcedil':'\u0122','Gcirc':'\u011C','gcirc':'\u011D','Gcy':'\u0413','gcy':'\u0433','Gdot':'\u0120','gdot':'\u0121','ge':'\u2265','gE':'\u2267','gEl':'\u2A8C','gel':'\u22DB','geq':'\u2265','geqq':'\u2267','geqslant':'\u2A7E','gescc':'\u2AA9','ges':'\u2A7E','gesdot':'\u2A80','gesdoto':'\u2A82','gesdotol':'\u2A84','gesl':'\u22DB\uFE00','gesles':'\u2A94','Gfr':'\uD835\uDD0A','gfr':'\uD835\uDD24','gg':'\u226B','Gg':'\u22D9','ggg':'\u22D9','gimel':'\u2137','GJcy':'\u0403','gjcy':'\u0453','gla':'\u2AA5','gl':'\u2277','glE':'\u2A92','glj':'\u2AA4','gnap':'\u2A8A','gnapprox':'\u2A8A','gne':'\u2A88','gnE':'\u2269','gneq':'\u2A88','gneqq':'\u2269','gnsim':'\u22E7','Gopf':'\uD835\uDD3E','gopf':'\uD835\uDD58','grave':'`','GreaterEqual':'\u2265','GreaterEqualLess':'\u22DB','GreaterFullEqual':'\u2267','GreaterGreater':'\u2AA2','GreaterLess':'\u2277','GreaterSlantEqual':'\u2A7E','GreaterTilde':'\u2273','Gscr':'\uD835\uDCA2','gscr':'\u210A','gsim':'\u2273','gsime':'\u2A8E','gsiml':'\u2A90','gtcc':'\u2AA7','gtcir':'\u2A7A','gt':'>','GT':'>','Gt':'\u226B','gtdot':'\u22D7','gtlPar':'\u2995','gtquest':'\u2A7C','gtrapprox':'\u2A86','gtrarr':'\u2978','gtrdot':'\u22D7','gtreqless':'\u22DB','gtreqqless':'\u2A8C','gtrless':'\u2277','gtrsim':'\u2273','gvertneqq':'\u2269\uFE00','gvnE':'\u2269\uFE00','Hacek':'\u02C7','hairsp':'\u200A','half':'\xBD','hamilt':'\u210B','HARDcy':'\u042A','hardcy':'\u044A','harrcir':'\u2948','harr':'\u2194','hArr':'\u21D4','harrw':'\u21AD','Hat':'^','hbar':'\u210F','Hcirc':'\u0124','hcirc':'\u0125','hearts':'\u2665','heartsuit':'\u2665','hellip':'\u2026','hercon':'\u22B9','hfr':'\uD835\uDD25','Hfr':'\u210C','HilbertSpace':'\u210B','hksearow':'\u2925','hkswarow':'\u2926','hoarr':'\u21FF','homtht':'\u223B','hookleftarrow':'\u21A9','hookrightarrow':'\u21AA','hopf':'\uD835\uDD59','Hopf':'\u210D','horbar':'\u2015','HorizontalLine':'\u2500','hscr':'\uD835\uDCBD','Hscr':'\u210B','hslash':'\u210F','Hstrok':'\u0126','hstrok':'\u0127','HumpDownHump':'\u224E','HumpEqual':'\u224F','hybull':'\u2043','hyphen':'\u2010','Iacute':'\xCD','iacute':'\xED','ic':'\u2063','Icirc':'\xCE','icirc':'\xEE','Icy':'\u0418','icy':'\u0438','Idot':'\u0130','IEcy':'\u0415','iecy':'\u0435','iexcl':'\xA1','iff':'\u21D4','ifr':'\uD835\uDD26','Ifr':'\u2111','Igrave':'\xCC','igrave':'\xEC','ii':'\u2148','iiiint':'\u2A0C','iiint':'\u222D','iinfin':'\u29DC','iiota':'\u2129','IJlig':'\u0132','ijlig':'\u0133','Imacr':'\u012A','imacr':'\u012B','image':'\u2111','ImaginaryI':'\u2148','imagline':'\u2110','imagpart':'\u2111','imath':'\u0131','Im':'\u2111','imof':'\u22B7','imped':'\u01B5','Implies':'\u21D2','incare':'\u2105','in':'\u2208','infin':'\u221E','infintie':'\u29DD','inodot':'\u0131','intcal':'\u22BA','int':'\u222B','Int':'\u222C','integers':'\u2124','Integral':'\u222B','intercal':'\u22BA','Intersection':'\u22C2','intlarhk':'\u2A17','intprod':'\u2A3C','InvisibleComma':'\u2063','InvisibleTimes':'\u2062','IOcy':'\u0401','iocy':'\u0451','Iogon':'\u012E','iogon':'\u012F','Iopf':'\uD835\uDD40','iopf':'\uD835\uDD5A','Iota':'\u0399','iota':'\u03B9','iprod':'\u2A3C','iquest':'\xBF','iscr':'\uD835\uDCBE','Iscr':'\u2110','isin':'\u2208','isindot':'\u22F5','isinE':'\u22F9','isins':'\u22F4','isinsv':'\u22F3','isinv':'\u2208','it':'\u2062','Itilde':'\u0128','itilde':'\u0129','Iukcy':'\u0406','iukcy':'\u0456','Iuml':'\xCF','iuml':'\xEF','Jcirc':'\u0134','jcirc':'\u0135','Jcy':'\u0419','jcy':'\u0439','Jfr':'\uD835\uDD0D','jfr':'\uD835\uDD27','jmath':'\u0237','Jopf':'\uD835\uDD41','jopf':'\uD835\uDD5B','Jscr':'\uD835\uDCA5','jscr':'\uD835\uDCBF','Jsercy':'\u0408','jsercy':'\u0458','Jukcy':'\u0404','jukcy':'\u0454','Kappa':'\u039A','kappa':'\u03BA','kappav':'\u03F0','Kcedil':'\u0136','kcedil':'\u0137','Kcy':'\u041A','kcy':'\u043A','Kfr':'\uD835\uDD0E','kfr':'\uD835\uDD28','kgreen':'\u0138','KHcy':'\u0425','khcy':'\u0445','KJcy':'\u040C','kjcy':'\u045C','Kopf':'\uD835\uDD42','kopf':'\uD835\uDD5C','Kscr':'\uD835\uDCA6','kscr':'\uD835\uDCC0','lAarr':'\u21DA','Lacute':'\u0139','lacute':'\u013A','laemptyv':'\u29B4','lagran':'\u2112','Lambda':'\u039B','lambda':'\u03BB','lang':'\u27E8','Lang':'\u27EA','langd':'\u2991','langle':'\u27E8','lap':'\u2A85','Laplacetrf':'\u2112','laquo':'\xAB','larrb':'\u21E4','larrbfs':'\u291F','larr':'\u2190','Larr':'\u219E','lArr':'\u21D0','larrfs':'\u291D','larrhk':'\u21A9','larrlp':'\u21AB','larrpl':'\u2939','larrsim':'\u2973','larrtl':'\u21A2','latail':'\u2919','lAtail':'\u291B','lat':'\u2AAB','late':'\u2AAD','lates':'\u2AAD\uFE00','lbarr':'\u290C','lBarr':'\u290E','lbbrk':'\u2772','lbrace':'{','lbrack':'[','lbrke':'\u298B','lbrksld':'\u298F','lbrkslu':'\u298D','Lcaron':'\u013D','lcaron':'\u013E','Lcedil':'\u013B','lcedil':'\u013C','lceil':'\u2308','lcub':'{','Lcy':'\u041B','lcy':'\u043B','ldca':'\u2936','ldquo':'\u201C','ldquor':'\u201E','ldrdhar':'\u2967','ldrushar':'\u294B','ldsh':'\u21B2','le':'\u2264','lE':'\u2266','LeftAngleBracket':'\u27E8','LeftArrowBar':'\u21E4','leftarrow':'\u2190','LeftArrow':'\u2190','Leftarrow':'\u21D0','LeftArrowRightArrow':'\u21C6','leftarrowtail':'\u21A2','LeftCeiling':'\u2308','LeftDoubleBracket':'\u27E6','LeftDownTeeVector':'\u2961','LeftDownVectorBar':'\u2959','LeftDownVector':'\u21C3','LeftFloor':'\u230A','leftharpoondown':'\u21BD','leftharpoonup':'\u21BC','leftleftarrows':'\u21C7','leftrightarrow':'\u2194','LeftRightArrow':'\u2194','Leftrightarrow':'\u21D4','leftrightarrows':'\u21C6','leftrightharpoons':'\u21CB','leftrightsquigarrow':'\u21AD','LeftRightVector':'\u294E','LeftTeeArrow':'\u21A4','LeftTee':'\u22A3','LeftTeeVector':'\u295A','leftthreetimes':'\u22CB','LeftTriangleBar':'\u29CF','LeftTriangle':'\u22B2','LeftTriangleEqual':'\u22B4','LeftUpDownVector':'\u2951','LeftUpTeeVector':'\u2960','LeftUpVectorBar':'\u2958','LeftUpVector':'\u21BF','LeftVectorBar':'\u2952','LeftVector':'\u21BC','lEg':'\u2A8B','leg':'\u22DA','leq':'\u2264','leqq':'\u2266','leqslant':'\u2A7D','lescc':'\u2AA8','les':'\u2A7D','lesdot':'\u2A7F','lesdoto':'\u2A81','lesdotor':'\u2A83','lesg':'\u22DA\uFE00','lesges':'\u2A93','lessapprox':'\u2A85','lessdot':'\u22D6','lesseqgtr':'\u22DA','lesseqqgtr':'\u2A8B','LessEqualGreater':'\u22DA','LessFullEqual':'\u2266','LessGreater':'\u2276','lessgtr':'\u2276','LessLess':'\u2AA1','lesssim':'\u2272','LessSlantEqual':'\u2A7D','LessTilde':'\u2272','lfisht':'\u297C','lfloor':'\u230A','Lfr':'\uD835\uDD0F','lfr':'\uD835\uDD29','lg':'\u2276','lgE':'\u2A91','lHar':'\u2962','lhard':'\u21BD','lharu':'\u21BC','lharul':'\u296A','lhblk':'\u2584','LJcy':'\u0409','ljcy':'\u0459','llarr':'\u21C7','ll':'\u226A','Ll':'\u22D8','llcorner':'\u231E','Lleftarrow':'\u21DA','llhard':'\u296B','lltri':'\u25FA','Lmidot':'\u013F','lmidot':'\u0140','lmoustache':'\u23B0','lmoust':'\u23B0','lnap':'\u2A89','lnapprox':'\u2A89','lne':'\u2A87','lnE':'\u2268','lneq':'\u2A87','lneqq':'\u2268','lnsim':'\u22E6','loang':'\u27EC','loarr':'\u21FD','lobrk':'\u27E6','longleftarrow':'\u27F5','LongLeftArrow':'\u27F5','Longleftarrow':'\u27F8','longleftrightarrow':'\u27F7','LongLeftRightArrow':'\u27F7','Longleftrightarrow':'\u27FA','longmapsto':'\u27FC','longrightarrow':'\u27F6','LongRightArrow':'\u27F6','Longrightarrow':'\u27F9','looparrowleft':'\u21AB','looparrowright':'\u21AC','lopar':'\u2985','Lopf':'\uD835\uDD43','lopf':'\uD835\uDD5D','loplus':'\u2A2D','lotimes':'\u2A34','lowast':'\u2217','lowbar':'_','LowerLeftArrow':'\u2199','LowerRightArrow':'\u2198','loz':'\u25CA','lozenge':'\u25CA','lozf':'\u29EB','lpar':'(','lparlt':'\u2993','lrarr':'\u21C6','lrcorner':'\u231F','lrhar':'\u21CB','lrhard':'\u296D','lrm':'\u200E','lrtri':'\u22BF','lsaquo':'\u2039','lscr':'\uD835\uDCC1','Lscr':'\u2112','lsh':'\u21B0','Lsh':'\u21B0','lsim':'\u2272','lsime':'\u2A8D','lsimg':'\u2A8F','lsqb':'[','lsquo':'\u2018','lsquor':'\u201A','Lstrok':'\u0141','lstrok':'\u0142','ltcc':'\u2AA6','ltcir':'\u2A79','lt':'<','LT':'<','Lt':'\u226A','ltdot':'\u22D6','lthree':'\u22CB','ltimes':'\u22C9','ltlarr':'\u2976','ltquest':'\u2A7B','ltri':'\u25C3','ltrie':'\u22B4','ltrif':'\u25C2','ltrPar':'\u2996','lurdshar':'\u294A','luruhar':'\u2966','lvertneqq':'\u2268\uFE00','lvnE':'\u2268\uFE00','macr':'\xAF','male':'\u2642','malt':'\u2720','maltese':'\u2720','Map':'\u2905','map':'\u21A6','mapsto':'\u21A6','mapstodown':'\u21A7','mapstoleft':'\u21A4','mapstoup':'\u21A5','marker':'\u25AE','mcomma':'\u2A29','Mcy':'\u041C','mcy':'\u043C','mdash':'\u2014','mDDot':'\u223A','measuredangle':'\u2221','MediumSpace':'\u205F','Mellintrf':'\u2133','Mfr':'\uD835\uDD10','mfr':'\uD835\uDD2A','mho':'\u2127','micro':'\xB5','midast':'*','midcir':'\u2AF0','mid':'\u2223','middot':'\xB7','minusb':'\u229F','minus':'\u2212','minusd':'\u2238','minusdu':'\u2A2A','MinusPlus':'\u2213','mlcp':'\u2ADB','mldr':'\u2026','mnplus':'\u2213','models':'\u22A7','Mopf':'\uD835\uDD44','mopf':'\uD835\uDD5E','mp':'\u2213','mscr':'\uD835\uDCC2','Mscr':'\u2133','mstpos':'\u223E','Mu':'\u039C','mu':'\u03BC','multimap':'\u22B8','mumap':'\u22B8','nabla':'\u2207','Nacute':'\u0143','nacute':'\u0144','nang':'\u2220\u20D2','nap':'\u2249','napE':'\u2A70\u0338','napid':'\u224B\u0338','napos':'\u0149','napprox':'\u2249','natural':'\u266E','naturals':'\u2115','natur':'\u266E','nbsp':'\xA0','nbump':'\u224E\u0338','nbumpe':'\u224F\u0338','ncap':'\u2A43','Ncaron':'\u0147','ncaron':'\u0148','Ncedil':'\u0145','ncedil':'\u0146','ncong':'\u2247','ncongdot':'\u2A6D\u0338','ncup':'\u2A42','Ncy':'\u041D','ncy':'\u043D','ndash':'\u2013','nearhk':'\u2924','nearr':'\u2197','neArr':'\u21D7','nearrow':'\u2197','ne':'\u2260','nedot':'\u2250\u0338','NegativeMediumSpace':'\u200B','NegativeThickSpace':'\u200B','NegativeThinSpace':'\u200B','NegativeVeryThinSpace':'\u200B','nequiv':'\u2262','nesear':'\u2928','nesim':'\u2242\u0338','NestedGreaterGreater':'\u226B','NestedLessLess':'\u226A','NewLine':'\n','nexist':'\u2204','nexists':'\u2204','Nfr':'\uD835\uDD11','nfr':'\uD835\uDD2B','ngE':'\u2267\u0338','nge':'\u2271','ngeq':'\u2271','ngeqq':'\u2267\u0338','ngeqslant':'\u2A7E\u0338','nges':'\u2A7E\u0338','nGg':'\u22D9\u0338','ngsim':'\u2275','nGt':'\u226B\u20D2','ngt':'\u226F','ngtr':'\u226F','nGtv':'\u226B\u0338','nharr':'\u21AE','nhArr':'\u21CE','nhpar':'\u2AF2','ni':'\u220B','nis':'\u22FC','nisd':'\u22FA','niv':'\u220B','NJcy':'\u040A','njcy':'\u045A','nlarr':'\u219A','nlArr':'\u21CD','nldr':'\u2025','nlE':'\u2266\u0338','nle':'\u2270','nleftarrow':'\u219A','nLeftarrow':'\u21CD','nleftrightarrow':'\u21AE','nLeftrightarrow':'\u21CE','nleq':'\u2270','nleqq':'\u2266\u0338','nleqslant':'\u2A7D\u0338','nles':'\u2A7D\u0338','nless':'\u226E','nLl':'\u22D8\u0338','nlsim':'\u2274','nLt':'\u226A\u20D2','nlt':'\u226E','nltri':'\u22EA','nltrie':'\u22EC','nLtv':'\u226A\u0338','nmid':'\u2224','NoBreak':'\u2060','NonBreakingSpace':'\xA0','nopf':'\uD835\uDD5F','Nopf':'\u2115','Not':'\u2AEC','not':'\xAC','NotCongruent':'\u2262','NotCupCap':'\u226D','NotDoubleVerticalBar':'\u2226','NotElement':'\u2209','NotEqual':'\u2260','NotEqualTilde':'\u2242\u0338','NotExists':'\u2204','NotGreater':'\u226F','NotGreaterEqual':'\u2271','NotGreaterFullEqual':'\u2267\u0338','NotGreaterGreater':'\u226B\u0338','NotGreaterLess':'\u2279','NotGreaterSlantEqual':'\u2A7E\u0338','NotGreaterTilde':'\u2275','NotHumpDownHump':'\u224E\u0338','NotHumpEqual':'\u224F\u0338','notin':'\u2209','notindot':'\u22F5\u0338','notinE':'\u22F9\u0338','notinva':'\u2209','notinvb':'\u22F7','notinvc':'\u22F6','NotLeftTriangleBar':'\u29CF\u0338','NotLeftTriangle':'\u22EA','NotLeftTriangleEqual':'\u22EC','NotLess':'\u226E','NotLessEqual':'\u2270','NotLessGreater':'\u2278','NotLessLess':'\u226A\u0338','NotLessSlantEqual':'\u2A7D\u0338','NotLessTilde':'\u2274','NotNestedGreaterGreater':'\u2AA2\u0338','NotNestedLessLess':'\u2AA1\u0338','notni':'\u220C','notniva':'\u220C','notnivb':'\u22FE','notnivc':'\u22FD','NotPrecedes':'\u2280','NotPrecedesEqual':'\u2AAF\u0338','NotPrecedesSlantEqual':'\u22E0','NotReverseElement':'\u220C','NotRightTriangleBar':'\u29D0\u0338','NotRightTriangle':'\u22EB','NotRightTriangleEqual':'\u22ED','NotSquareSubset':'\u228F\u0338','NotSquareSubsetEqual':'\u22E2','NotSquareSuperset':'\u2290\u0338','NotSquareSupersetEqual':'\u22E3','NotSubset':'\u2282\u20D2','NotSubsetEqual':'\u2288','NotSucceeds':'\u2281','NotSucceedsEqual':'\u2AB0\u0338','NotSucceedsSlantEqual':'\u22E1','NotSucceedsTilde':'\u227F\u0338','NotSuperset':'\u2283\u20D2','NotSupersetEqual':'\u2289','NotTilde':'\u2241','NotTildeEqual':'\u2244','NotTildeFullEqual':'\u2247','NotTildeTilde':'\u2249','NotVerticalBar':'\u2224','nparallel':'\u2226','npar':'\u2226','nparsl':'\u2AFD\u20E5','npart':'\u2202\u0338','npolint':'\u2A14','npr':'\u2280','nprcue':'\u22E0','nprec':'\u2280','npreceq':'\u2AAF\u0338','npre':'\u2AAF\u0338','nrarrc':'\u2933\u0338','nrarr':'\u219B','nrArr':'\u21CF','nrarrw':'\u219D\u0338','nrightarrow':'\u219B','nRightarrow':'\u21CF','nrtri':'\u22EB','nrtrie':'\u22ED','nsc':'\u2281','nsccue':'\u22E1','nsce':'\u2AB0\u0338','Nscr':'\uD835\uDCA9','nscr':'\uD835\uDCC3','nshortmid':'\u2224','nshortparallel':'\u2226','nsim':'\u2241','nsime':'\u2244','nsimeq':'\u2244','nsmid':'\u2224','nspar':'\u2226','nsqsube':'\u22E2','nsqsupe':'\u22E3','nsub':'\u2284','nsubE':'\u2AC5\u0338','nsube':'\u2288','nsubset':'\u2282\u20D2','nsubseteq':'\u2288','nsubseteqq':'\u2AC5\u0338','nsucc':'\u2281','nsucceq':'\u2AB0\u0338','nsup':'\u2285','nsupE':'\u2AC6\u0338','nsupe':'\u2289','nsupset':'\u2283\u20D2','nsupseteq':'\u2289','nsupseteqq':'\u2AC6\u0338','ntgl':'\u2279','Ntilde':'\xD1','ntilde':'\xF1','ntlg':'\u2278','ntriangleleft':'\u22EA','ntrianglelefteq':'\u22EC','ntriangleright':'\u22EB','ntrianglerighteq':'\u22ED','Nu':'\u039D','nu':'\u03BD','num':'#','numero':'\u2116','numsp':'\u2007','nvap':'\u224D\u20D2','nvdash':'\u22AC','nvDash':'\u22AD','nVdash':'\u22AE','nVDash':'\u22AF','nvge':'\u2265\u20D2','nvgt':'>\u20D2','nvHarr':'\u2904','nvinfin':'\u29DE','nvlArr':'\u2902','nvle':'\u2264\u20D2','nvlt':'<\u20D2','nvltrie':'\u22B4\u20D2','nvrArr':'\u2903','nvrtrie':'\u22B5\u20D2','nvsim':'\u223C\u20D2','nwarhk':'\u2923','nwarr':'\u2196','nwArr':'\u21D6','nwarrow':'\u2196','nwnear':'\u2927','Oacute':'\xD3','oacute':'\xF3','oast':'\u229B','Ocirc':'\xD4','ocirc':'\xF4','ocir':'\u229A','Ocy':'\u041E','ocy':'\u043E','odash':'\u229D','Odblac':'\u0150','odblac':'\u0151','odiv':'\u2A38','odot':'\u2299','odsold':'\u29BC','OElig':'\u0152','oelig':'\u0153','ofcir':'\u29BF','Ofr':'\uD835\uDD12','ofr':'\uD835\uDD2C','ogon':'\u02DB','Ograve':'\xD2','ograve':'\xF2','ogt':'\u29C1','ohbar':'\u29B5','ohm':'\u03A9','oint':'\u222E','olarr':'\u21BA','olcir':'\u29BE','olcross':'\u29BB','oline':'\u203E','olt':'\u29C0','Omacr':'\u014C','omacr':'\u014D','Omega':'\u03A9','omega':'\u03C9','Omicron':'\u039F','omicron':'\u03BF','omid':'\u29B6','ominus':'\u2296','Oopf':'\uD835\uDD46','oopf':'\uD835\uDD60','opar':'\u29B7','OpenCurlyDoubleQuote':'\u201C','OpenCurlyQuote':'\u2018','operp':'\u29B9','oplus':'\u2295','orarr':'\u21BB','Or':'\u2A54','or':'\u2228','ord':'\u2A5D','order':'\u2134','orderof':'\u2134','ordf':'\xAA','ordm':'\xBA','origof':'\u22B6','oror':'\u2A56','orslope':'\u2A57','orv':'\u2A5B','oS':'\u24C8','Oscr':'\uD835\uDCAA','oscr':'\u2134','Oslash':'\xD8','oslash':'\xF8','osol':'\u2298','Otilde':'\xD5','otilde':'\xF5','otimesas':'\u2A36','Otimes':'\u2A37','otimes':'\u2297','Ouml':'\xD6','ouml':'\xF6','ovbar':'\u233D','OverBar':'\u203E','OverBrace':'\u23DE','OverBracket':'\u23B4','OverParenthesis':'\u23DC','para':'\xB6','parallel':'\u2225','par':'\u2225','parsim':'\u2AF3','parsl':'\u2AFD','part':'\u2202','PartialD':'\u2202','Pcy':'\u041F','pcy':'\u043F','percnt':'%','period':'.','permil':'\u2030','perp':'\u22A5','pertenk':'\u2031','Pfr':'\uD835\uDD13','pfr':'\uD835\uDD2D','Phi':'\u03A6','phi':'\u03C6','phiv':'\u03D5','phmmat':'\u2133','phone':'\u260E','Pi':'\u03A0','pi':'\u03C0','pitchfork':'\u22D4','piv':'\u03D6','planck':'\u210F','planckh':'\u210E','plankv':'\u210F','plusacir':'\u2A23','plusb':'\u229E','pluscir':'\u2A22','plus':'+','plusdo':'\u2214','plusdu':'\u2A25','pluse':'\u2A72','PlusMinus':'\xB1','plusmn':'\xB1','plussim':'\u2A26','plustwo':'\u2A27','pm':'\xB1','Poincareplane':'\u210C','pointint':'\u2A15','popf':'\uD835\uDD61','Popf':'\u2119','pound':'\xA3','prap':'\u2AB7','Pr':'\u2ABB','pr':'\u227A','prcue':'\u227C','precapprox':'\u2AB7','prec':'\u227A','preccurlyeq':'\u227C','Precedes':'\u227A','PrecedesEqual':'\u2AAF','PrecedesSlantEqual':'\u227C','PrecedesTilde':'\u227E','preceq':'\u2AAF','precnapprox':'\u2AB9','precneqq':'\u2AB5','precnsim':'\u22E8','pre':'\u2AAF','prE':'\u2AB3','precsim':'\u227E','prime':'\u2032','Prime':'\u2033','primes':'\u2119','prnap':'\u2AB9','prnE':'\u2AB5','prnsim':'\u22E8','prod':'\u220F','Product':'\u220F','profalar':'\u232E','profline':'\u2312','profsurf':'\u2313','prop':'\u221D','Proportional':'\u221D','Proportion':'\u2237','propto':'\u221D','prsim':'\u227E','prurel':'\u22B0','Pscr':'\uD835\uDCAB','pscr':'\uD835\uDCC5','Psi':'\u03A8','psi':'\u03C8','puncsp':'\u2008','Qfr':'\uD835\uDD14','qfr':'\uD835\uDD2E','qint':'\u2A0C','qopf':'\uD835\uDD62','Qopf':'\u211A','qprime':'\u2057','Qscr':'\uD835\uDCAC','qscr':'\uD835\uDCC6','quaternions':'\u210D','quatint':'\u2A16','quest':'?','questeq':'\u225F','quot':'"','QUOT':'"','rAarr':'\u21DB','race':'\u223D\u0331','Racute':'\u0154','racute':'\u0155','radic':'\u221A','raemptyv':'\u29B3','rang':'\u27E9','Rang':'\u27EB','rangd':'\u2992','range':'\u29A5','rangle':'\u27E9','raquo':'\xBB','rarrap':'\u2975','rarrb':'\u21E5','rarrbfs':'\u2920','rarrc':'\u2933','rarr':'\u2192','Rarr':'\u21A0','rArr':'\u21D2','rarrfs':'\u291E','rarrhk':'\u21AA','rarrlp':'\u21AC','rarrpl':'\u2945','rarrsim':'\u2974','Rarrtl':'\u2916','rarrtl':'\u21A3','rarrw':'\u219D','ratail':'\u291A','rAtail':'\u291C','ratio':'\u2236','rationals':'\u211A','rbarr':'\u290D','rBarr':'\u290F','RBarr':'\u2910','rbbrk':'\u2773','rbrace':'}','rbrack':']','rbrke':'\u298C','rbrksld':'\u298E','rbrkslu':'\u2990','Rcaron':'\u0158','rcaron':'\u0159','Rcedil':'\u0156','rcedil':'\u0157','rceil':'\u2309','rcub':'}','Rcy':'\u0420','rcy':'\u0440','rdca':'\u2937','rdldhar':'\u2969','rdquo':'\u201D','rdquor':'\u201D','rdsh':'\u21B3','real':'\u211C','realine':'\u211B','realpart':'\u211C','reals':'\u211D','Re':'\u211C','rect':'\u25AD','reg':'\xAE','REG':'\xAE','ReverseElement':'\u220B','ReverseEquilibrium':'\u21CB','ReverseUpEquilibrium':'\u296F','rfisht':'\u297D','rfloor':'\u230B','rfr':'\uD835\uDD2F','Rfr':'\u211C','rHar':'\u2964','rhard':'\u21C1','rharu':'\u21C0','rharul':'\u296C','Rho':'\u03A1','rho':'\u03C1','rhov':'\u03F1','RightAngleBracket':'\u27E9','RightArrowBar':'\u21E5','rightarrow':'\u2192','RightArrow':'\u2192','Rightarrow':'\u21D2','RightArrowLeftArrow':'\u21C4','rightarrowtail':'\u21A3','RightCeiling':'\u2309','RightDoubleBracket':'\u27E7','RightDownTeeVector':'\u295D','RightDownVectorBar':'\u2955','RightDownVector':'\u21C2','RightFloor':'\u230B','rightharpoondown':'\u21C1','rightharpoonup':'\u21C0','rightleftarrows':'\u21C4','rightleftharpoons':'\u21CC','rightrightarrows':'\u21C9','rightsquigarrow':'\u219D','RightTeeArrow':'\u21A6','RightTee':'\u22A2','RightTeeVector':'\u295B','rightthreetimes':'\u22CC','RightTriangleBar':'\u29D0','RightTriangle':'\u22B3','RightTriangleEqual':'\u22B5','RightUpDownVector':'\u294F','RightUpTeeVector':'\u295C','RightUpVectorBar':'\u2954','RightUpVector':'\u21BE','RightVectorBar':'\u2953','RightVector':'\u21C0','ring':'\u02DA','risingdotseq':'\u2253','rlarr':'\u21C4','rlhar':'\u21CC','rlm':'\u200F','rmoustache':'\u23B1','rmoust':'\u23B1','rnmid':'\u2AEE','roang':'\u27ED','roarr':'\u21FE','robrk':'\u27E7','ropar':'\u2986','ropf':'\uD835\uDD63','Ropf':'\u211D','roplus':'\u2A2E','rotimes':'\u2A35','RoundImplies':'\u2970','rpar':')','rpargt':'\u2994','rppolint':'\u2A12','rrarr':'\u21C9','Rrightarrow':'\u21DB','rsaquo':'\u203A','rscr':'\uD835\uDCC7','Rscr':'\u211B','rsh':'\u21B1','Rsh':'\u21B1','rsqb':']','rsquo':'\u2019','rsquor':'\u2019','rthree':'\u22CC','rtimes':'\u22CA','rtri':'\u25B9','rtrie':'\u22B5','rtrif':'\u25B8','rtriltri':'\u29CE','RuleDelayed':'\u29F4','ruluhar':'\u2968','rx':'\u211E','Sacute':'\u015A','sacute':'\u015B','sbquo':'\u201A','scap':'\u2AB8','Scaron':'\u0160','scaron':'\u0161','Sc':'\u2ABC','sc':'\u227B','sccue':'\u227D','sce':'\u2AB0','scE':'\u2AB4','Scedil':'\u015E','scedil':'\u015F','Scirc':'\u015C','scirc':'\u015D','scnap':'\u2ABA','scnE':'\u2AB6','scnsim':'\u22E9','scpolint':'\u2A13','scsim':'\u227F','Scy':'\u0421','scy':'\u0441','sdotb':'\u22A1','sdot':'\u22C5','sdote':'\u2A66','searhk':'\u2925','searr':'\u2198','seArr':'\u21D8','searrow':'\u2198','sect':'\xA7','semi':';','seswar':'\u2929','setminus':'\u2216','setmn':'\u2216','sext':'\u2736','Sfr':'\uD835\uDD16','sfr':'\uD835\uDD30','sfrown':'\u2322','sharp':'\u266F','SHCHcy':'\u0429','shchcy':'\u0449','SHcy':'\u0428','shcy':'\u0448','ShortDownArrow':'\u2193','ShortLeftArrow':'\u2190','shortmid':'\u2223','shortparallel':'\u2225','ShortRightArrow':'\u2192','ShortUpArrow':'\u2191','shy':'\xAD','Sigma':'\u03A3','sigma':'\u03C3','sigmaf':'\u03C2','sigmav':'\u03C2','sim':'\u223C','simdot':'\u2A6A','sime':'\u2243','simeq':'\u2243','simg':'\u2A9E','simgE':'\u2AA0','siml':'\u2A9D','simlE':'\u2A9F','simne':'\u2246','simplus':'\u2A24','simrarr':'\u2972','slarr':'\u2190','SmallCircle':'\u2218','smallsetminus':'\u2216','smashp':'\u2A33','smeparsl':'\u29E4','smid':'\u2223','smile':'\u2323','smt':'\u2AAA','smte':'\u2AAC','smtes':'\u2AAC\uFE00','SOFTcy':'\u042C','softcy':'\u044C','solbar':'\u233F','solb':'\u29C4','sol':'/','Sopf':'\uD835\uDD4A','sopf':'\uD835\uDD64','spades':'\u2660','spadesuit':'\u2660','spar':'\u2225','sqcap':'\u2293','sqcaps':'\u2293\uFE00','sqcup':'\u2294','sqcups':'\u2294\uFE00','Sqrt':'\u221A','sqsub':'\u228F','sqsube':'\u2291','sqsubset':'\u228F','sqsubseteq':'\u2291','sqsup':'\u2290','sqsupe':'\u2292','sqsupset':'\u2290','sqsupseteq':'\u2292','square':'\u25A1','Square':'\u25A1','SquareIntersection':'\u2293','SquareSubset':'\u228F','SquareSubsetEqual':'\u2291','SquareSuperset':'\u2290','SquareSupersetEqual':'\u2292','SquareUnion':'\u2294','squarf':'\u25AA','squ':'\u25A1','squf':'\u25AA','srarr':'\u2192','Sscr':'\uD835\uDCAE','sscr':'\uD835\uDCC8','ssetmn':'\u2216','ssmile':'\u2323','sstarf':'\u22C6','Star':'\u22C6','star':'\u2606','starf':'\u2605','straightepsilon':'\u03F5','straightphi':'\u03D5','strns':'\xAF','sub':'\u2282','Sub':'\u22D0','subdot':'\u2ABD','subE':'\u2AC5','sube':'\u2286','subedot':'\u2AC3','submult':'\u2AC1','subnE':'\u2ACB','subne':'\u228A','subplus':'\u2ABF','subrarr':'\u2979','subset':'\u2282','Subset':'\u22D0','subseteq':'\u2286','subseteqq':'\u2AC5','SubsetEqual':'\u2286','subsetneq':'\u228A','subsetneqq':'\u2ACB','subsim':'\u2AC7','subsub':'\u2AD5','subsup':'\u2AD3','succapprox':'\u2AB8','succ':'\u227B','succcurlyeq':'\u227D','Succeeds':'\u227B','SucceedsEqual':'\u2AB0','SucceedsSlantEqual':'\u227D','SucceedsTilde':'\u227F','succeq':'\u2AB0','succnapprox':'\u2ABA','succneqq':'\u2AB6','succnsim':'\u22E9','succsim':'\u227F','SuchThat':'\u220B','sum':'\u2211','Sum':'\u2211','sung':'\u266A','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','sup':'\u2283','Sup':'\u22D1','supdot':'\u2ABE','supdsub':'\u2AD8','supE':'\u2AC6','supe':'\u2287','supedot':'\u2AC4','Superset':'\u2283','SupersetEqual':'\u2287','suphsol':'\u27C9','suphsub':'\u2AD7','suplarr':'\u297B','supmult':'\u2AC2','supnE':'\u2ACC','supne':'\u228B','supplus':'\u2AC0','supset':'\u2283','Supset':'\u22D1','supseteq':'\u2287','supseteqq':'\u2AC6','supsetneq':'\u228B','supsetneqq':'\u2ACC','supsim':'\u2AC8','supsub':'\u2AD4','supsup':'\u2AD6','swarhk':'\u2926','swarr':'\u2199','swArr':'\u21D9','swarrow':'\u2199','swnwar':'\u292A','szlig':'\xDF','Tab':'\t','target':'\u2316','Tau':'\u03A4','tau':'\u03C4','tbrk':'\u23B4','Tcaron':'\u0164','tcaron':'\u0165','Tcedil':'\u0162','tcedil':'\u0163','Tcy':'\u0422','tcy':'\u0442','tdot':'\u20DB','telrec':'\u2315','Tfr':'\uD835\uDD17','tfr':'\uD835\uDD31','there4':'\u2234','therefore':'\u2234','Therefore':'\u2234','Theta':'\u0398','theta':'\u03B8','thetasym':'\u03D1','thetav':'\u03D1','thickapprox':'\u2248','thicksim':'\u223C','ThickSpace':'\u205F\u200A','ThinSpace':'\u2009','thinsp':'\u2009','thkap':'\u2248','thksim':'\u223C','THORN':'\xDE','thorn':'\xFE','tilde':'\u02DC','Tilde':'\u223C','TildeEqual':'\u2243','TildeFullEqual':'\u2245','TildeTilde':'\u2248','timesbar':'\u2A31','timesb':'\u22A0','times':'\xD7','timesd':'\u2A30','tint':'\u222D','toea':'\u2928','topbot':'\u2336','topcir':'\u2AF1','top':'\u22A4','Topf':'\uD835\uDD4B','topf':'\uD835\uDD65','topfork':'\u2ADA','tosa':'\u2929','tprime':'\u2034','trade':'\u2122','TRADE':'\u2122','triangle':'\u25B5','triangledown':'\u25BF','triangleleft':'\u25C3','trianglelefteq':'\u22B4','triangleq':'\u225C','triangleright':'\u25B9','trianglerighteq':'\u22B5','tridot':'\u25EC','trie':'\u225C','triminus':'\u2A3A','TripleDot':'\u20DB','triplus':'\u2A39','trisb':'\u29CD','tritime':'\u2A3B','trpezium':'\u23E2','Tscr':'\uD835\uDCAF','tscr':'\uD835\uDCC9','TScy':'\u0426','tscy':'\u0446','TSHcy':'\u040B','tshcy':'\u045B','Tstrok':'\u0166','tstrok':'\u0167','twixt':'\u226C','twoheadleftarrow':'\u219E','twoheadrightarrow':'\u21A0','Uacute':'\xDA','uacute':'\xFA','uarr':'\u2191','Uarr':'\u219F','uArr':'\u21D1','Uarrocir':'\u2949','Ubrcy':'\u040E','ubrcy':'\u045E','Ubreve':'\u016C','ubreve':'\u016D','Ucirc':'\xDB','ucirc':'\xFB','Ucy':'\u0423','ucy':'\u0443','udarr':'\u21C5','Udblac':'\u0170','udblac':'\u0171','udhar':'\u296E','ufisht':'\u297E','Ufr':'\uD835\uDD18','ufr':'\uD835\uDD32','Ugrave':'\xD9','ugrave':'\xF9','uHar':'\u2963','uharl':'\u21BF','uharr':'\u21BE','uhblk':'\u2580','ulcorn':'\u231C','ulcorner':'\u231C','ulcrop':'\u230F','ultri':'\u25F8','Umacr':'\u016A','umacr':'\u016B','uml':'\xA8','UnderBar':'_','UnderBrace':'\u23DF','UnderBracket':'\u23B5','UnderParenthesis':'\u23DD','Union':'\u22C3','UnionPlus':'\u228E','Uogon':'\u0172','uogon':'\u0173','Uopf':'\uD835\uDD4C','uopf':'\uD835\uDD66','UpArrowBar':'\u2912','uparrow':'\u2191','UpArrow':'\u2191','Uparrow':'\u21D1','UpArrowDownArrow':'\u21C5','updownarrow':'\u2195','UpDownArrow':'\u2195','Updownarrow':'\u21D5','UpEquilibrium':'\u296E','upharpoonleft':'\u21BF','upharpoonright':'\u21BE','uplus':'\u228E','UpperLeftArrow':'\u2196','UpperRightArrow':'\u2197','upsi':'\u03C5','Upsi':'\u03D2','upsih':'\u03D2','Upsilon':'\u03A5','upsilon':'\u03C5','UpTeeArrow':'\u21A5','UpTee':'\u22A5','upuparrows':'\u21C8','urcorn':'\u231D','urcorner':'\u231D','urcrop':'\u230E','Uring':'\u016E','uring':'\u016F','urtri':'\u25F9','Uscr':'\uD835\uDCB0','uscr':'\uD835\uDCCA','utdot':'\u22F0','Utilde':'\u0168','utilde':'\u0169','utri':'\u25B5','utrif':'\u25B4','uuarr':'\u21C8','Uuml':'\xDC','uuml':'\xFC','uwangle':'\u29A7','vangrt':'\u299C','varepsilon':'\u03F5','varkappa':'\u03F0','varnothing':'\u2205','varphi':'\u03D5','varpi':'\u03D6','varpropto':'\u221D','varr':'\u2195','vArr':'\u21D5','varrho':'\u03F1','varsigma':'\u03C2','varsubsetneq':'\u228A\uFE00','varsubsetneqq':'\u2ACB\uFE00','varsupsetneq':'\u228B\uFE00','varsupsetneqq':'\u2ACC\uFE00','vartheta':'\u03D1','vartriangleleft':'\u22B2','vartriangleright':'\u22B3','vBar':'\u2AE8','Vbar':'\u2AEB','vBarv':'\u2AE9','Vcy':'\u0412','vcy':'\u0432','vdash':'\u22A2','vDash':'\u22A8','Vdash':'\u22A9','VDash':'\u22AB','Vdashl':'\u2AE6','veebar':'\u22BB','vee':'\u2228','Vee':'\u22C1','veeeq':'\u225A','vellip':'\u22EE','verbar':'|','Verbar':'\u2016','vert':'|','Vert':'\u2016','VerticalBar':'\u2223','VerticalLine':'|','VerticalSeparator':'\u2758','VerticalTilde':'\u2240','VeryThinSpace':'\u200A','Vfr':'\uD835\uDD19','vfr':'\uD835\uDD33','vltri':'\u22B2','vnsub':'\u2282\u20D2','vnsup':'\u2283\u20D2','Vopf':'\uD835\uDD4D','vopf':'\uD835\uDD67','vprop':'\u221D','vrtri':'\u22B3','Vscr':'\uD835\uDCB1','vscr':'\uD835\uDCCB','vsubnE':'\u2ACB\uFE00','vsubne':'\u228A\uFE00','vsupnE':'\u2ACC\uFE00','vsupne':'\u228B\uFE00','Vvdash':'\u22AA','vzigzag':'\u299A','Wcirc':'\u0174','wcirc':'\u0175','wedbar':'\u2A5F','wedge':'\u2227','Wedge':'\u22C0','wedgeq':'\u2259','weierp':'\u2118','Wfr':'\uD835\uDD1A','wfr':'\uD835\uDD34','Wopf':'\uD835\uDD4E','wopf':'\uD835\uDD68','wp':'\u2118','wr':'\u2240','wreath':'\u2240','Wscr':'\uD835\uDCB2','wscr':'\uD835\uDCCC','xcap':'\u22C2','xcirc':'\u25EF','xcup':'\u22C3','xdtri':'\u25BD','Xfr':'\uD835\uDD1B','xfr':'\uD835\uDD35','xharr':'\u27F7','xhArr':'\u27FA','Xi':'\u039E','xi':'\u03BE','xlarr':'\u27F5','xlArr':'\u27F8','xmap':'\u27FC','xnis':'\u22FB','xodot':'\u2A00','Xopf':'\uD835\uDD4F','xopf':'\uD835\uDD69','xoplus':'\u2A01','xotime':'\u2A02','xrarr':'\u27F6','xrArr':'\u27F9','Xscr':'\uD835\uDCB3','xscr':'\uD835\uDCCD','xsqcup':'\u2A06','xuplus':'\u2A04','xutri':'\u25B3','xvee':'\u22C1','xwedge':'\u22C0','Yacute':'\xDD','yacute':'\xFD','YAcy':'\u042F','yacy':'\u044F','Ycirc':'\u0176','ycirc':'\u0177','Ycy':'\u042B','ycy':'\u044B','yen':'\xA5','Yfr':'\uD835\uDD1C','yfr':'\uD835\uDD36','YIcy':'\u0407','yicy':'\u0457','Yopf':'\uD835\uDD50','yopf':'\uD835\uDD6A','Yscr':'\uD835\uDCB4','yscr':'\uD835\uDCCE','YUcy':'\u042E','yucy':'\u044E','yuml':'\xFF','Yuml':'\u0178','Zacute':'\u0179','zacute':'\u017A','Zcaron':'\u017D','zcaron':'\u017E','Zcy':'\u0417','zcy':'\u0437','Zdot':'\u017B','zdot':'\u017C','zeetrf':'\u2128','ZeroWidthSpace':'\u200B','Zeta':'\u0396','zeta':'\u03B6','zfr':'\uD835\uDD37','Zfr':'\u2128','ZHcy':'\u0416','zhcy':'\u0436','zigrarr':'\u21DD','zopf':'\uD835\uDD6B','Zopf':'\u2124','Zscr':'\uD835\uDCB5','zscr':'\uD835\uDCCF','zwj':'\u200D','zwnj':'\u200C'};
		var decodeMapLegacy = {'Aacute':'\xC1','aacute':'\xE1','Acirc':'\xC2','acirc':'\xE2','acute':'\xB4','AElig':'\xC6','aelig':'\xE6','Agrave':'\xC0','agrave':'\xE0','amp':'&','AMP':'&','Aring':'\xC5','aring':'\xE5','Atilde':'\xC3','atilde':'\xE3','Auml':'\xC4','auml':'\xE4','brvbar':'\xA6','Ccedil':'\xC7','ccedil':'\xE7','cedil':'\xB8','cent':'\xA2','copy':'\xA9','COPY':'\xA9','curren':'\xA4','deg':'\xB0','divide':'\xF7','Eacute':'\xC9','eacute':'\xE9','Ecirc':'\xCA','ecirc':'\xEA','Egrave':'\xC8','egrave':'\xE8','ETH':'\xD0','eth':'\xF0','Euml':'\xCB','euml':'\xEB','frac12':'\xBD','frac14':'\xBC','frac34':'\xBE','gt':'>','GT':'>','Iacute':'\xCD','iacute':'\xED','Icirc':'\xCE','icirc':'\xEE','iexcl':'\xA1','Igrave':'\xCC','igrave':'\xEC','iquest':'\xBF','Iuml':'\xCF','iuml':'\xEF','laquo':'\xAB','lt':'<','LT':'<','macr':'\xAF','micro':'\xB5','middot':'\xB7','nbsp':'\xA0','not':'\xAC','Ntilde':'\xD1','ntilde':'\xF1','Oacute':'\xD3','oacute':'\xF3','Ocirc':'\xD4','ocirc':'\xF4','Ograve':'\xD2','ograve':'\xF2','ordf':'\xAA','ordm':'\xBA','Oslash':'\xD8','oslash':'\xF8','Otilde':'\xD5','otilde':'\xF5','Ouml':'\xD6','ouml':'\xF6','para':'\xB6','plusmn':'\xB1','pound':'\xA3','quot':'"','QUOT':'"','raquo':'\xBB','reg':'\xAE','REG':'\xAE','sect':'\xA7','shy':'\xAD','sup1':'\xB9','sup2':'\xB2','sup3':'\xB3','szlig':'\xDF','THORN':'\xDE','thorn':'\xFE','times':'\xD7','Uacute':'\xDA','uacute':'\xFA','Ucirc':'\xDB','ucirc':'\xFB','Ugrave':'\xD9','ugrave':'\xF9','uml':'\xA8','Uuml':'\xDC','uuml':'\xFC','Yacute':'\xDD','yacute':'\xFD','yen':'\xA5','yuml':'\xFF'};
		var decodeMapNumeric = {'0':'\uFFFD','128':'\u20AC','130':'\u201A','131':'\u0192','132':'\u201E','133':'\u2026','134':'\u2020','135':'\u2021','136':'\u02C6','137':'\u2030','138':'\u0160','139':'\u2039','140':'\u0152','142':'\u017D','145':'\u2018','146':'\u2019','147':'\u201C','148':'\u201D','149':'\u2022','150':'\u2013','151':'\u2014','152':'\u02DC','153':'\u2122','154':'\u0161','155':'\u203A','156':'\u0153','158':'\u017E','159':'\u0178'};
		var invalidReferenceCodePoints = [1,2,3,4,5,6,7,8,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,64976,64977,64978,64979,64980,64981,64982,64983,64984,64985,64986,64987,64988,64989,64990,64991,64992,64993,64994,64995,64996,64997,64998,64999,65000,65001,65002,65003,65004,65005,65006,65007,65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111];
	
		/*--------------------------------------------------------------------------*/
	
		var stringFromCharCode = String.fromCharCode;
	
		var object = {};
		var hasOwnProperty = object.hasOwnProperty;
		var has = function(object, propertyName) {
			return hasOwnProperty.call(object, propertyName);
		};
	
		var contains = function(array, value) {
			var index = -1;
			var length = array.length;
			while (++index < length) {
				if (array[index] == value) {
					return true;
				}
			}
			return false;
		};
	
		var merge = function(options, defaults) {
			if (!options) {
				return defaults;
			}
			var result = {};
			var key;
			for (key in defaults) {
				// A `hasOwnProperty` check is not needed here, since only recognized
				// option names are used anyway. Any others are ignored.
				result[key] = has(options, key) ? options[key] : defaults[key];
			}
			return result;
		};
	
		// Modified version of `ucs2encode`; see http://mths.be/punycode.
		var codePointToSymbol = function(codePoint, strict) {
			var output = '';
			if ((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF) {
				// See issue #4:
				// “Otherwise, if the number is in the range 0xD800 to 0xDFFF or is
				// greater than 0x10FFFF, then this is a parse error. Return a U+FFFD
				// REPLACEMENT CHARACTER.”
				if (strict) {
					parseError('character reference outside the permissible Unicode range');
				}
				return '\uFFFD';
			}
			if (has(decodeMapNumeric, codePoint)) {
				if (strict) {
					parseError('disallowed character reference');
				}
				return decodeMapNumeric[codePoint];
			}
			if (strict && contains(invalidReferenceCodePoints, codePoint)) {
				parseError('disallowed character reference');
			}
			if (codePoint > 0xFFFF) {
				codePoint -= 0x10000;
				output += stringFromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
				codePoint = 0xDC00 | codePoint & 0x3FF;
			}
			output += stringFromCharCode(codePoint);
			return output;
		};
	
		var hexEscape = function(symbol) {
			return '&#x' + symbol.charCodeAt(0).toString(16).toUpperCase() + ';';
		};
	
		var parseError = function(message) {
			throw Error('Parse error: ' + message);
		};
	
		/*--------------------------------------------------------------------------*/
	
		var encode = function(string, options) {
			options = merge(options, encode.options);
			var strict = options.strict;
			if (strict && regexInvalidRawCodePoint.test(string)) {
				parseError('forbidden code point');
			}
			var encodeEverything = options.encodeEverything;
			var useNamedReferences = options.useNamedReferences;
			var allowUnsafeSymbols = options.allowUnsafeSymbols;
			if (encodeEverything) {
				// Encode ASCII symbols.
				string = string.replace(regexAsciiWhitelist, function(symbol) {
					// Use named references if requested & possible.
					if (useNamedReferences && has(encodeMap, symbol)) {
						return '&' + encodeMap[symbol] + ';';
					}
					return hexEscape(symbol);
				});
				// Shorten a few escapes that represent two symbols, of which at least one
				// is within the ASCII range.
				if (useNamedReferences) {
					string = string
						.replace(/&gt;\u20D2/g, '&nvgt;')
						.replace(/&lt;\u20D2/g, '&nvlt;')
						.replace(/&#x66;&#x6A;/g, '&fjlig;');
				}
				// Encode non-ASCII symbols.
				if (useNamedReferences) {
					// Encode non-ASCII symbols that can be replaced with a named reference.
					string = string.replace(regexEncodeNonAscii, function(string) {
						// Note: there is no need to check `has(encodeMap, string)` here.
						return '&' + encodeMap[string] + ';';
					});
				}
				// Note: any remaining non-ASCII symbols are handled outside of the `if`.
			} else if (useNamedReferences) {
				// Apply named character references.
				// Encode `<>"'&` using named character references.
				if (!allowUnsafeSymbols) {
					string = string.replace(regexEscape, function(string) {
						return '&' + encodeMap[string] + ';'; // no need to check `has()` here
					});
				}
				// Shorten escapes that represent two symbols, of which at least one is
				// `<>"'&`.
				string = string
					.replace(/&gt;\u20D2/g, '&nvgt;')
					.replace(/&lt;\u20D2/g, '&nvlt;');
				// Encode non-ASCII symbols that can be replaced with a named reference.
				string = string.replace(regexEncodeNonAscii, function(string) {
					// Note: there is no need to check `has(encodeMap, string)` here.
					return '&' + encodeMap[string] + ';';
				});
			} else if (!allowUnsafeSymbols) {
				// Encode `<>"'&` using hexadecimal escapes, now that they’re not handled
				// using named character references.
				string = string.replace(regexEscape, hexEscape);
			}
			return string
				// Encode astral symbols.
				.replace(regexAstralSymbols, function($0) {
					// https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
					var high = $0.charCodeAt(0);
					var low = $0.charCodeAt(1);
					var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
					return '&#x' + codePoint.toString(16).toUpperCase() + ';';
				})
				// Encode any remaining BMP symbols that are not printable ASCII symbols
				// using a hexadecimal escape.
				.replace(regexBmpWhitelist, hexEscape);
		};
		// Expose default options (so they can be overridden globally).
		encode.options = {
			'allowUnsafeSymbols': false,
			'encodeEverything': false,
			'strict': false,
			'useNamedReferences': false
		};
	
		var decode = function(html, options) {
			options = merge(options, decode.options);
			var strict = options.strict;
			if (strict && regexInvalidEntity.test(html)) {
				parseError('malformed character reference');
			}
			return html.replace(regexDecode, function($0, $1, $2, $3, $4, $5, $6, $7) {
				var codePoint;
				var semicolon;
				var hexDigits;
				var reference;
				var next;
				if ($1) {
					// Decode decimal escapes, e.g. `&#119558;`.
					codePoint = $1;
					semicolon = $2;
					if (strict && !semicolon) {
						parseError('character reference was not terminated by a semicolon');
					}
					return codePointToSymbol(codePoint, strict);
				}
				if ($3) {
					// Decode hexadecimal escapes, e.g. `&#x1D306;`.
					hexDigits = $3;
					semicolon = $4;
					if (strict && !semicolon) {
						parseError('character reference was not terminated by a semicolon');
					}
					codePoint = parseInt(hexDigits, 16);
					return codePointToSymbol(codePoint, strict);
				}
				if ($5) {
					// Decode named character references with trailing `;`, e.g. `&copy;`.
					reference = $5;
					if (has(decodeMap, reference)) {
						return decodeMap[reference];
					} else {
						// Ambiguous ampersand; see http://mths.be/notes/ambiguous-ampersands.
						if (strict) {
							parseError(
								'named character reference was not terminated by a semicolon'
							);
						}
						return $0;
					}
				}
				// If we’re still here, it’s a legacy reference for sure. No need for an
				// extra `if` check.
				// Decode named character references without trailing `;`, e.g. `&amp`
				// This is only a parse error if it gets converted to `&`, or if it is
				// followed by `=` in an attribute context.
				reference = $6;
				next = $7;
				if (next && options.isAttributeValue) {
					if (strict && next == '=') {
						parseError('`&` did not start a character reference');
					}
					return $0;
				} else {
					if (strict) {
						parseError(
							'named character reference was not terminated by a semicolon'
						);
					}
					// Note: there is no need to check `has(decodeMapLegacy, reference)`.
					return decodeMapLegacy[reference] + (next || '');
				}
			});
		};
		// Expose default options (so they can be overridden globally).
		decode.options = {
			'isAttributeValue': false,
			'strict': false
		};
	
		var escape = function(string) {
			return string.replace(regexEscape, function($0) {
				// Note: there is no need to check `has(escapeMap, $0)` here.
				return escapeMap[$0];
			});
		};
	
		/*--------------------------------------------------------------------------*/
	
		var he = {
			'version': '0.5.0',
			'encode': encode,
			'decode': decode,
			'escape': escape,
			'unescape': decode
		};
	
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return he;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = he;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (var key in he) {
					has(he, key) && (freeExports[key] = he[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.he = he;
		}
	
	}(this));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(181)(module), (function() { return this; }())))

/***/ },
/* 181 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 182 */
/***/ function(module, exports) {

	/*!
	 * repeat-string <https://github.com/jonschlinkert/repeat-string>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	/**
	 * Expose `repeat`
	 */
	
	module.exports = repeat;
	
	/**
	 * Repeat the given `string` the specified `number`
	 * of times.
	 *
	 * **Example:**
	 *
	 * ```js
	 * var repeat = require('repeat-string');
	 * repeat('A', 5);
	 * //=> AAAAA
	 * ```
	 *
	 * @param {String} `string` The string to repeat
	 * @param {Number} `number` The number of times to repeat the string
	 * @return {String} Repeated string
	 * @api public
	 */
	
	function repeat(str, num) {
	  if (typeof str !== 'string') {
	    throw new TypeError('repeat-string expects a string.');
	  }
	
	  if (num === 1) return str;
	  if (num === 2) return str + str;
	
	  var max = str.length * num;
	  if (cache !== str || typeof cache === 'undefined') {
	    cache = str;
	    res = '';
	  }
	
	  while (max > res.length && num > 0) {
	    if (num & 1) {
	      res += str;
	    }
	
	    num >>= 1;
	    if (!num) break;
	    str += str;
	  }
	
	  return res.substr(0, max);
	}
	
	/**
	 * Results cache
	 */
	
	var res = '';
	var cache;


/***/ },
/* 183 */
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer. All rights reserved.
	 * @module Utilities
	 * @fileoverview Collection of tiny helpers useful for
	 *   both parsing and compiling markdown.
	 */
	
	'use strict';
	
	/*
	 * Methods.
	 */
	
	var has = Object.prototype.hasOwnProperty;
	
	/*
	 * Expressions.
	 */
	
	var WHITE_SPACE_FINAL = /\s+$/;
	var NEW_LINES_FINAL = /\n+$/;
	var WHITE_SPACE_INITIAL = /^\s+/;
	var EXPRESSION_LINE_BREAKS = /\r\n|\r/g;
	var EXPRESSION_SYMBOL_FOR_NEW_LINE = /\u2424/g;
	var WHITE_SPACE_COLLAPSABLE = /[ \t\n]+/g;
	var EXPRESSION_BOM = /^\ufeff/;
	
	/**
	 * Shallow copy `context` into `target`.
	 *
	 * @example
	 *   var target = {};
	 *   copy(target, {foo: 'bar'}); // target
	 *
	 * @param {Object} target - Object to copy into.
	 * @param {Object} context - Object to copy from.
	 * @return {Object} - `target`.
	 */
	function copy(target, context) {
	    var key;
	
	    for (key in context) {
	        if (has.call(context, key)) {
	            target[key] = context[key];
	        }
	    }
	
	    return target;
	}
	
	/**
	 * Shallow clone `context`.
	 *
	 * @example
	 *   clone({foo: 'bar'}) // {foo: 'bar'}
	 *   clone(['foo', 'bar']) // ['foo', 'bar']
	 *
	 * @return {Object|Array} context - Object to clone.
	 * @return {Object|Array} - Shallow clone of `context`.
	 */
	function clone(context) {
	    if ('concat' in context) {
	        return context.concat();
	    }
	
	    return copy({}, context);
	}
	
	/**
	 * Throw an exception with in its `message` `value`
	 * and `name`.
	 *
	 * @param {*} value - Invalid value.
	 * @param {string} name - Setting name.
	 */
	function raise(value, name) {
	    throw new Error(
	        'Invalid value `' + value + '` ' +
	        'for setting `' + name + '`'
	    );
	}
	
	/**
	 * Validate a value to be boolean. Defaults to `def`.
	 * Raises an exception with `context[name]` when not
	 * a boolean.
	 *
	 * @example
	 *   validateBoolean({foo: null}, 'foo', true) // true
	 *   validateBoolean({foo: false}, 'foo', true) // false
	 *   validateBoolean({foo: 'bar'}, 'foo', true) // Throws
	 *
	 * @throws {Error} - When a setting is neither omitted nor
	 *   a boolean.
	 * @param {Object} context - Settings.
	 * @param {string} name - Setting name.
	 * @param {boolean} def - Default value.
	 */
	function validateBoolean(context, name, def) {
	    var value = context[name];
	
	    if (value === null || value === undefined) {
	        value = def;
	    }
	
	    if (typeof value !== 'boolean') {
	        raise(value, 'options.' + name);
	    }
	
	    context[name] = value;
	}
	
	/**
	 * Validate a value to be boolean. Defaults to `def`.
	 * Raises an exception with `context[name]` when not
	 * a boolean.
	 *
	 * @example
	 *   validateNumber({foo: null}, 'foo', 1) // 1
	 *   validateNumber({foo: 2}, 'foo', 1) // 2
	 *   validateNumber({foo: 'bar'}, 'foo', 1) // Throws
	 *
	 * @throws {Error} - When a setting is neither omitted nor
	 *   a number.
	 * @param {Object} context - Settings.
	 * @param {string} name - Setting name.
	 * @param {number} def - Default value.
	 */
	function validateNumber(context, name, def) {
	    var value = context[name];
	
	    if (value === null || value === undefined) {
	        value = def;
	    }
	
	    if (typeof value !== 'number' || value !== value) {
	        raise(value, 'options.' + name);
	    }
	
	    context[name] = value;
	}
	
	/**
	 * Validate a value to be in `map`. Defaults to `def`.
	 * Raises an exception with `context[name]` when not
	 * not in `map`.
	 *
	 * @example
	 *   var map = {bar: true, baz: true};
	 *   validateString({foo: null}, 'foo', 'bar', map) // 'bar'
	 *   validateString({foo: 'baz'}, 'foo', 'bar', map) // 'baz'
	 *   validateString({foo: true}, 'foo', 'bar', map) // Throws
	 *
	 * @throws {Error} - When a setting is neither omitted nor
	 *   in `map`.
	 * @param {Object} context - Settings.
	 * @param {string} name - Setting name.
	 * @param {string} def - Default value.
	 * @param {Object} map - Enum.
	 */
	function validateString(context, name, def, map) {
	    var value = context[name];
	
	    if (value === null || value === undefined) {
	        value = def;
	    }
	
	    if (!(value in map)) {
	        raise(value, 'options.' + name);
	    }
	
	    context[name] = value;
	}
	
	/**
	 * Remove final white space from `value`.
	 *
	 * @example
	 *   trimRight('foo '); // 'foo'
	 *
	 * @param {string} value - Content to trim.
	 * @return {string} - Trimmed content.
	 */
	function trimRight(value) {
	    return String(value).replace(WHITE_SPACE_FINAL, '');
	}
	
	/**
	 * Remove final new line characters from `value`.
	 *
	 * @example
	 *   trimRightLines('foo\n\n'); // 'foo'
	 *
	 * @param {string} value - Content to trim.
	 * @return {string} - Trimmed content.
	 */
	function trimRightLines(value) {
	    return String(value).replace(NEW_LINES_FINAL, '');
	}
	
	/**
	 * Remove initial white space from `value`.
	 *
	 * @example
	 *   trimLeft(' foo'); // 'foo'
	 *
	 * @param {string} value - Content to trim.
	 * @return {string} - Trimmed content.
	 */
	function trimLeft(value) {
	    return String(value).replace(WHITE_SPACE_INITIAL, '');
	}
	
	/**
	 * Remove initial and final white space from `value`.
	 *
	 * @example
	 *   trim(' foo '); // 'foo'
	 *
	 * @param {string} value - Content to trim.
	 * @return {string} - Trimmed content.
	 */
	function trim(value) {
	    return trimLeft(trimRight(value));
	}
	
	/**
	 * Collapse white space.
	 *
	 * @example
	 *   collapse('foo\t bar'); // 'foo bar'
	 *
	 * @param {string} value - Content to collapse.
	 * @return {string} - Collapsed content.
	 */
	function collapse(value) {
	    return String(value).replace(WHITE_SPACE_COLLAPSABLE, ' ');
	}
	
	/**
	 * Clean a string in preperation of parsing.
	 *
	 * @example
	 *   clean('\ufefffoo'); // 'foo'
	 *   clean('foo\r\nbar'); // 'foo\nbar'
	 *   clean('foo\u2424bar'); // 'foo\nbar'
	 *
	 * @param {string} value - Content to clean.
	 * @return {string} - Cleaned content.
	 */
	function clean(value) {
	    return String(value)
	        .replace(EXPRESSION_BOM, '')
	        .replace(EXPRESSION_LINE_BREAKS, '\n')
	        .replace(EXPRESSION_SYMBOL_FOR_NEW_LINE, '\n');
	}
	
	/**
	 * Normalize an identifier.  Collapses multiple white space
	 * characters into a single space, and removes casing.
	 *
	 * @example
	 *   normalizeIdentifier('FOO\t bar'); // 'foo bar'
	 *
	 * @param {string} value - Content to normalize.
	 * @return {string} - Normalized content.
	 */
	function normalizeIdentifier(value) {
	    return collapse(value).toLowerCase();
	}
	
	/**
	 * Count how many characters `character` occur in `value`.
	 *
	 * @example
	 *   countCharacter('foo(bar(baz)', '(') // 2
	 *   countCharacter('foo(bar(baz)', ')') // 1
	 *
	 * @param {string} value - Content to search in.
	 * @param {string} character - Character to search for.
	 * @return {number} - Count.
	 */
	function countCharacter(value, character) {
	    var index = -1;
	    var length = value.length;
	    var count = 0;
	
	    while (++index < length) {
	        if (value.charAt(index) === character) {
	            count++;
	        }
	    }
	
	    return count;
	}
	
	/**
	 * Create an empty object.
	 *
	 * @example
	 *   objectObject(); // Same as `{}`.
	 *
	 * @return {Object}
	 */
	function objectObject() {
	    return {};
	}
	
	/*
	 * Break coverage.
	 */
	
	objectObject();
	
	/**
	 * Create an object without prototype.
	 *
	 * @example
	 *   objectNull(); // New object without prototype.
	 *
	 * @return {Object}
	 */
	function objectNull() {
	    return Object.create(null);
	}
	
	/*
	 * Expose `validate`.
	 */
	
	exports.validate = {
	    'boolean': validateBoolean,
	    'string': validateString,
	    'number': validateNumber
	};
	
	/*
	 * Expose.
	 */
	
	exports.trim = trim;
	exports.trimLeft = trimLeft;
	exports.trimRight = trimRight;
	exports.trimRightLines = trimRightLines;
	exports.collapse = collapse;
	exports.normalizeIdentifier = normalizeIdentifier;
	exports.clean = clean;
	exports.raise = raise;
	exports.copy = copy;
	exports.clone = clone;
	exports.countCharacter = countCharacter;
	
	/* istanbul ignore else */
	if ('create' in Object) {
	    exports.create = objectNull;
	} else {
	    exports.create = objectObject;
	}


/***/ },
/* 184 */
/***/ function(module, exports) {

	/* This file is generated by `script/build-expressions.js` */
	module.exports = {
	  'rules': {
	    'newline': /^\n([ \t]*\n)*/,
	    'code': /^((?: {4}|\t)[^\n]*\n?([ \t]*\n)*)+/,
	    'horizontalRule': /^[ \t]*([-*_])( *\1){2,} *(?=\n|$)/,
	    'heading': /^([ \t]*)(#{1,6})(?:([ \t]+)([^\n]+?))??(?:[ \t]+#+)?[ \t]*(?=\n|$)/,
	    'lineHeading': /^(\ {0,3})([^\n]+?)[ \t]*\n\ {0,3}(=|-){1,}[ \t]*(?=\n|$)/,
	    'definition': /^[ \t]*\[((?:[^\\](?:\\|\\(?:\\{2})+)\]|[^\]])+)\]:[ \t\n]*(<[^>\[\]]+>|[^\s\[\]]+)(?:[ \t\n]+['"(]((?:[^\n]|\n(?!\n))*?)['")])?[ \t]*(?=\n|$)/,
	    'bullet': /(?:[*+-]|\d+\.)/,
	    'indent': /^([ \t]*)((?:[*+-]|\d+\.))( {1,4}(?! )| |\t)/,
	    'item': /([ \t]*)((?:[*+-]|\d+\.))( {1,4}(?! )| |\t)[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.)[ \t])[^\n]*)*/gm,
	    'list': /^([ \t]*)((?:[*+-]|\d+\.))[ \t][\s\S]+?(?:(?=\n+\1?(?:[-*_][ \t]*){3,}(?:\n|$))|(?=\n+[ \t]*\[((?:[^\\](?:\\|\\(?:\\{2})+)\]|[^\]])+)\]:[ \t\n]*(<[^>\[\]]+>|[^\s\[\]]+)(?:[ \t\n]+['"(]((?:[^\n]|\n(?!\n))*?)['")])?[ \t]*(?=\n|$))|\n{2,}(?![ \t])(?!\1(?:[*+-]|\d+\.)[ \t])|$)/,
	    'blockquote': /^(?=[ \t]*>)(?:(?:(?:[ \t]*>[^\n]*\n)*(?:[ \t]*>[^\n]+(?=\n|$))|(?![ \t]*>)(?![ \t]*\[((?:[^\\](?:\\|\\(?:\\{2})+)\]|[^\]])+)\]:[ \t\n]*(<[^>\[\]]+>|[^\s\[\]]+)(?:[ \t\n]+['"(]((?:[^\n]|\n(?!\n))*?)['")])?[ \t]*(?=\n|$))[^\n]+)(?:\n|$))*(?:[ \t]*>[ \t]*(?:\n[ \t]*>[ \t]*)*)?/,
	    'html': /^(?:[ \t]*(?:(?:(?:<(?:article|header|aside|hgroup|blockquote|hr|iframe|body|li|map|button|object|canvas|ol|caption|output|col|p|colgroup|pre|dd|progress|div|section|dl|table|td|dt|tbody|embed|textarea|fieldset|tfoot|figcaption|th|figure|thead|footer|tr|form|ul|h1|h2|h3|h4|h5|h6|video|script|style)(?:(?:\s+)(?:[a-zA-Z_:][a-zA-Z0-9_.:-]*)(?:(?:\s+)?=(?:\s+)?(?:[^"'=<>`]+|'[^']*'|"[^"]*"))?)*(?:\s+)?\/?>?)|(?:<\/(?:article|header|aside|hgroup|blockquote|hr|iframe|body|li|map|button|object|canvas|ol|caption|output|col|p|colgroup|pre|dd|progress|div|section|dl|table|td|dt|tbody|embed|textarea|fieldset|tfoot|figcaption|th|figure|thead|footer|tr|form|ul|h1|h2|h3|h4|h5|h6|video|script|style)(?:\s+)?>))|(?:<!--(?!-?>)(?:[^-]|-(?!-))*-->)|(?:<\?(?:[^\?]|\?(?!>))+\?>)|(?:<![a-zA-Z]+\s+[\s\S]+?>)|(?:<!\[CDATA\[[\s\S]+?\]\]>))[\s\S]*?[ \t]*?(?:\n{2,}|\s*$))/i,
	    'paragraph': /^(?:(?:[^\n]+\n?(?![ \t]*([-*_])( *\1){2,} *(?=\n|$)|([ \t]*)(#{1,6})(?:([ \t]+)([^\n]+?))??(?:[ \t]+#+)?[ \t]*(?=\n|$)|(\ {0,3})([^\n]+?)[ \t]*\n\ {0,3}(=|-){1,}[ \t]*(?=\n|$)|[ \t]*\[((?:[^\\](?:\\|\\(?:\\{2})+)\]|[^\]])+)\]:[ \t\n]*(<[^>\[\]]+>|[^\s\[\]]+)(?:[ \t\n]+['"(]((?:[^\n]|\n(?!\n))*?)['")])?[ \t]*(?=\n|$)|(?=[ \t]*>)(?:(?:(?:[ \t]*>[^\n]*\n)*(?:[ \t]*>[^\n]+(?=\n|$))|(?![ \t]*>)(?![ \t]*\[((?:[^\\](?:\\|\\(?:\\{2})+)\]|[^\]])+)\]:[ \t\n]*(<[^>\[\]]+>|[^\s\[\]]+)(?:[ \t\n]+['"(]((?:[^\n]|\n(?!\n))*?)['")])?[ \t]*(?=\n|$))[^\n]+)(?:\n|$))*(?:[ \t]*>[ \t]*(?:\n[ \t]*>[ \t]*)*)?|<(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\b)(?!mailto:)\w+(?!:\/|[^\w\s@]*@)\b))+)/,
	    'escape': /^\\([\\`*{}\[\]()#+\-.!_>])/,
	    'autoLink': /^<([^ >]+(@|:\/)[^ >]+)>/,
	    'tag': /^(?:(?:<(?:[a-zA-Z][a-zA-Z0-9]*)(?:(?:\s+)(?:[a-zA-Z_:][a-zA-Z0-9_.:-]*)(?:(?:\s+)?=(?:\s+)?(?:[^"'=<>`]+|'[^']*'|"[^"]*"))?)*(?:\s+)?\/?>)|(?:<\/(?:[a-zA-Z][a-zA-Z0-9]*)(?:\s+)?>)|(?:<!--(?!-?>)(?:[^-]|-(?!-))*-->)|(?:<\?(?:[^\?]|\?(?!>))+\?>)|(?:<![a-zA-Z]+\s+[\s\S]+?>)|(?:<!\[CDATA\[[\s\S]+?\]\]>))/,
	    'strong': /^(_)_((?:\\[\s\S]|[^\\])+?)__(?!_)|^(\*)\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/,
	    'emphasis': /^\b(_)((?:__|\\[\s\S]|[^\\])+?)_\b|^(\*)((?:\*\*|\\[\s\S]|[^\\])+?)\*(?!\*)/,
	    'inlineCode': /^(`+)((?!`)[\s\S]*?(?:`\s+|[^`]))?(\1)(?!`)/,
	    'break': /^ {2,}\n(?!\s*$)/,
	    'inlineText': /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/,
	    'link': /^(!?\[)((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*(?:(?!<)((?:\((?:\\[\s\S]|[^\)])*?\)|\\[\s\S]|[\s\S])*?)|<([\s\S]*?)>)(?:\s+['"]([\s\S]*?)['"])?\s*\)/,
	    'shortcutReference': /^(!?\[)((?:\\[\s\S]|[^\[\]])+?)\]/,
	    'reference': /^(!?\[)((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\s*\[((?:\\[\s\S]|[^\[\]])*)\]/
	  },
	  'gfm': {
	    'fences': /^( *)(([`~])\3{2,})[ \t]*([^\n`~]+)?[ \t]*(?:\n([\s\S]*?))??(?:\n\ {0,3}\2\3*[ \t]*(?=\n|$)|$)/,
	    'paragraph': /^(?:(?:[^\n]+\n?(?![ \t]*([-*_])( *\1){2,} *(?=\n|$)|( *)(([`~])\5{2,})[ \t]*([^\n`~]+)?[ \t]*(?:\n([\s\S]*?))??(?:\n\ {0,3}\4\5*[ \t]*(?=\n|$)|$)|([ \t]*)((?:[*+-]|\d+\.))[ \t][\s\S]+?(?:(?=\n+\8?(?:[-*_][ \t]*){3,}(?:\n|$))|(?=\n+[ \t]*\[((?:[^\\](?:\\|\\(?:\\{2})+)\]|[^\]])+)\]:[ \t\n]*(<[^>\[\]]+>|[^\s\[\]]+)(?:[ \t\n]+['"(]((?:[^\n]|\n(?!\n))*?)['")])?[ \t]*(?=\n|$))|\n{2,}(?![ \t])(?!\8(?:[*+-]|\d+\.)[ \t])|$)|([ \t]*)(#{1,6})(?:([ \t]+)([^\n]+?))??(?:[ \t]+#+)?[ \t]*(?=\n|$)|(\ {0,3})([^\n]+?)[ \t]*\n\ {0,3}(=|-){1,}[ \t]*(?=\n|$)|[ \t]*\[((?:[^\\](?:\\|\\(?:\\{2})+)\]|[^\]])+)\]:[ \t\n]*(<[^>\[\]]+>|[^\s\[\]]+)(?:[ \t\n]+['"(]((?:[^\n]|\n(?!\n))*?)['")])?[ \t]*(?=\n|$)|(?=[ \t]*>)(?:(?:(?:[ \t]*>[^\n]*\n)*(?:[ \t]*>[^\n]+(?=\n|$))|(?![ \t]*>)(?![ \t]*\[((?:[^\\](?:\\|\\(?:\\{2})+)\]|[^\]])+)\]:[ \t\n]*(<[^>\[\]]+>|[^\s\[\]]+)(?:[ \t\n]+['"(]((?:[^\n]|\n(?!\n))*?)['")])?[ \t]*(?=\n|$))[^\n]+)(?:\n|$))*(?:[ \t]*>[ \t]*(?:\n[ \t]*>[ \t]*)*)?|<(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\b)(?!mailto:)\w+(?!:\/|[^\w\s@]*@)\b))+)/,
	    'table': /^( *\|(.+))\n( *\|( *[-:]+[-| :]*)\n)((?: *\|.*(?:\n|$))*)/,
	    'looseTable': /^( *(\S.*\|.*))\n( *([-:]+ *\|[-| :]*)\n)((?:.*\|.*(?:\n|$))*)/,
	    'escape': /^\\([\\`*{}\[\]()#+\-.!_>~|])/,
	    'url': /^https?:\/\/[^\s<]+[^<.,:;"')\]\s]/,
	    'deletion': /^~~(?=\S)([\s\S]*?\S)~~/,
	    'inlineText': /^[\s\S]+?(?=[\\<!\[_*`~]|https?:\/\/| {2,}\n|$)/
	  },
	  'footnotes': {
	    'footnoteDefinition': /^( *\[\^([^\]]+)\]: *)([^\n]+(\n+ +[^\n]+)*)/
	  },
	  'yaml': {
	    'yamlFrontMatter': /^-{3}\n([\s\S]+?\n)?-{3}/
	  },
	  'pedantic': {
	    'heading': /^([ \t]*)(#{1,6})([ \t]*)([^\n]*?)[ \t]*#*[ \t]*(?=\n|$)/,
	    'strong': /^(_)_(?=\S)([\s\S]*?\S)__(?!_)|^(\*)\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	    'emphasis': /^(_)(?=\S)([\s\S]*?\S)_(?!_)|^(\*)(?=\S)([\s\S]*?\S)\*(?!\*)/
	  },
	  'commonmark': {
	    'list': /^([ \t]*)((?:[*+-]|\d+[\.\)]))[ \t][\s\S]+?(?:(?=\n+\1?(?:[-*_][ \t]*){3,}(?:\n|$))|(?=\n+[ \t]*\[((?:[^\\](?:\\|\\(?:\\{2})+)\]|[^\]])+)\]:[ \t\n]*(<[^>\[\]]+>|[^\s\[\]]+)(?:[ \t\n]+['"(]((?:[^\n]|\n(?!\n))*?)['")])?[ \t]*(?=\n|$))|\n{2,}(?![ \t])(?!\1(?:[*+-]|\d+[\.\)])[ \t])|$)/,
	    'item': /([ \t]*)((?:[*+-]|\d+[\.\)]))( {1,4}(?! )| |\t)[^\n]*(?:\n(?!\1(?:[*+-]|\d+[\.\)])[ \t])[^\n]*)*/gm,
	    'bullet': /(?:[*+-]|\d+[\.\)])/,
	    'indent': /^([ \t]*)((?:[*+-]|\d+[\.\)]))( {1,4}(?! )| |\t)/,
	    'link': /^(!?\[)((?:(?:\[(?:\[(?:\\[\s\S]|[^\[\]])*?\]|\\[\s\S]|[^\[\]])*?\])|\\[\s\S]|[^\[\]])*?)\]\(\s*(?:(?!<)((?:\((?:\\[\s\S]|[^\(\)\s])*?\)|\\[\s\S]|[^\(\)\s])*?)|<([^\n]*?)>)(?:\s+(?:\'((?:\\[\s\S]|[^\'])*?)\'|"((?:\\[\s\S]|[^"])*?)"|\(((?:\\[\s\S]|[^\)])*?)\)))?\s*\)/,
	    'reference': /^(!?\[)((?:(?:\[(?:\[(?:\\[\s\S]|[^\[\]])*?\]|\\[\s\S]|[^\[\]])*?\])|\\[\s\S]|[^\[\]])*?)\]\s*\[((?:\\[\s\S]|[^\[\]])*)\]/,
	    'paragraph': /^(?:(?:[^\n]+\n?(?!\ {0,3}([-*_])( *\1){2,} *(?=\n|$)|(\ {0,3})(#{1,6})(?:([ \t]+)([^\n]+?))??(?:[ \t]+#+)?\ {0,3}(?=\n|$)|(?=\ {0,3}>)(?:(?:(?:\ {0,3}>[^\n]*\n)*(?:\ {0,3}>[^\n]+(?=\n|$))|(?!\ {0,3}>)(?!\ {0,3}\[((?:[^\\](?:\\|\\(?:\\{2})+)\]|[^\]])+)\]:[ \t\n]*(<[^>\[\]]+>|[^\s\[\]]+)(?:[ \t\n]+['"(]((?:[^\n]|\n(?!\n))*?)['")])?\ {0,3}(?=\n|$))[^\n]+)(?:\n|$))*(?:\ {0,3}>\ {0,3}(?:\n\ {0,3}>\ {0,3})*)?|<(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\b)(?!mailto:)\w+(?!:\/|[^\w\s@]*@)\b))+)/,
	    'blockquote': /^(?=[ \t]*>)(?:(?:(?:[ \t]*>[^\n]*\n)*(?:[ \t]*>[^\n]+(?=\n|$))|(?![ \t]*>)(?![ \t]*([-*_])( *\1){2,} *(?=\n|$)|([ \t]*)((?:[*+-]|\d+\.))[ \t][\s\S]+?(?:(?=\n+\3?(?:[-*_][ \t]*){3,}(?:\n|$))|(?=\n+[ \t]*\[((?:[^\\](?:\\|\\(?:\\{2})+)\]|[^\]])+)\]:[ \t\n]*(<[^>\[\]]+>|[^\s\[\]]+)(?:[ \t\n]+['"(]((?:[^\n]|\n(?!\n))*?)['")])?[ \t]*(?=\n|$))|\n{2,}(?![ \t])(?!\3(?:[*+-]|\d+\.)[ \t])|$)|( *)(([`~])\10{2,})[ \t]*([^\n`~]+)?[ \t]*(?:\n([\s\S]*?))??(?:\n\ {0,3}\9\10*[ \t]*(?=\n|$)|$)|((?: {4}|\t)[^\n]*\n?([ \t]*\n)*)+|[ \t]*\[((?:[^\\](?:\\|\\(?:\\{2})+)\]|[^\]])+)\]:[ \t\n]*(<[^>\[\]]+>|[^\s\[\]]+)(?:[ \t\n]+['"(]((?:[^\n]|\n(?!\n))*?)['")])?[ \t]*(?=\n|$))[^\n]+)(?:\n|$))*(?:[ \t]*>[ \t]*(?:\n[ \t]*>[ \t]*)*)?/,
	    'escape': /^\\(\n|[\\`*{}\[\]()#+\-.!_>"$%&',\/:;<=?@^~|])/
	  },
	  'commonmarkGFM': {
	    'paragraph': /^(?:(?:[^\n]+\n?(?!\ {0,3}([-*_])( *\1){2,} *(?=\n|$)|( *)(([`~])\5{2,})\ {0,3}([^\n`~]+)?\ {0,3}(?:\n([\s\S]*?))??(?:\n\ {0,3}\4\5*\ {0,3}(?=\n|$)|$)|(\ {0,3})((?:[*+-]|\d+\.))[ \t][\s\S]+?(?:(?=\n+\8?(?:[-*_]\ {0,3}){3,}(?:\n|$))|(?=\n+\ {0,3}\[((?:[^\\](?:\\|\\(?:\\{2})+)\]|[^\]])+)\]:[ \t\n]*(<[^>\[\]]+>|[^\s\[\]]+)(?:[ \t\n]+['"(]((?:[^\n]|\n(?!\n))*?)['")])?\ {0,3}(?=\n|$))|\n{2,}(?![ \t])(?!\8(?:[*+-]|\d+\.)[ \t])|$)|(\ {0,3})(#{1,6})(?:([ \t]+)([^\n]+?))??(?:[ \t]+#+)?\ {0,3}(?=\n|$)|(?=\ {0,3}>)(?:(?:(?:\ {0,3}>[^\n]*\n)*(?:\ {0,3}>[^\n]+(?=\n|$))|(?!\ {0,3}>)(?!\ {0,3}\[((?:[^\\](?:\\|\\(?:\\{2})+)\]|[^\]])+)\]:[ \t\n]*(<[^>\[\]]+>|[^\s\[\]]+)(?:[ \t\n]+['"(]((?:[^\n]|\n(?!\n))*?)['")])?\ {0,3}(?=\n|$))[^\n]+)(?:\n|$))*(?:\ {0,3}>\ {0,3}(?:\n\ {0,3}>\ {0,3})*)?|<(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\b)(?!mailto:)\w+(?!:\/|[^\w\s@]*@)\b))+)/
	  },
	  'breaks': {
	    'break': /^ *\n(?!\s*$)/,
	    'inlineText': /^[\s\S]+?(?=[\\<!\[_*`]| *\n|$)/
	  },
	  'breaksGFM': {
	    'inlineText': /^[\s\S]+?(?=[\\<!\[_*`~]|https?:\/\/| *\n|$)/
	  }
	};


/***/ },
/* 185 */
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer. All rights reserved.
	 * @module Defaults
	 * @fileoverview Default values for parse and
	 *  stringification settings.
	 */
	
	'use strict';
	
	/*
	 * Note that `stringify.entities` is a string.
	 */
	
	module.exports = {
	    'parse': {
	        'position': true,
	        'gfm': true,
	        'yaml': true,
	        'commonmark': false,
	        'footnotes': false,
	        'pedantic': false,
	        'breaks': false
	    },
	    'stringify': {
	        'entities': 'false',
	        'setext': false,
	        'closeAtx': false,
	        'looseTable': false,
	        'spacedTable': true,
	        'incrementListMarker': true,
	        'fences': false,
	        'fence': '`',
	        'bullet': '-',
	        'listItemIndent': 'tab',
	        'rule': '*',
	        'ruleSpaces': true,
	        'ruleRepetition': 3,
	        'strong': '*',
	        'emphasis': '_'
	    }
	};


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer. All rights reserved.
	 * @module Stringify
	 * @fileoverview Compile a an abstract syntax tree into
	 *   a markdown document.
	 */
	
	'use strict';
	
	/*
	 * Dependencies.
	 */
	
	var he = __webpack_require__(180);
	var table = __webpack_require__(187);
	var repeat = __webpack_require__(182);
	var utilities = __webpack_require__(183);
	var defaultOptions = __webpack_require__(185).stringify;
	
	/*
	 * Methods.
	 */
	
	var clone = utilities.clone;
	var raise = utilities.raise;
	var validate = utilities.validate;
	var count = utilities.countCharacter;
	var objectCreate = utilities.create;
	
	/*
	 * Constants.
	 */
	
	var INDENT = 4;
	var MINIMUM_CODE_FENCE_LENGTH = 3;
	var YAML_FENCE_LENGTH = 3;
	var MINIMUM_RULE_LENGTH = 3;
	var MAILTO = 'mailto:';
	
	/*
	 * Expressions.
	 */
	
	var EXPRESSIONS_WHITE_SPACE = /\s/;
	
	/*
	 * Expression for a protocol.
	 *
	 * @see http://en.wikipedia.org/wiki/URI_scheme#Generic_syntax
	 */
	
	var PROTOCOL = /^[a-z][a-z+.-]+:\/?/i;
	
	/*
	 * Characters.
	 */
	
	var ANGLE_BRACKET_CLOSE = '>';
	var ANGLE_BRACKET_OPEN = '<';
	var ASTERISK = '*';
	var CARET = '^';
	var COLON = ':';
	var DASH = '-';
	var DOT = '.';
	var EMPTY = '';
	var EQUALS = '=';
	var EXCLAMATION_MARK = '!';
	var HASH = '#';
	var LINE = '\n';
	var PARENTHESIS_OPEN = '(';
	var PARENTHESIS_CLOSE = ')';
	var PIPE = '|';
	var PLUS = '+';
	var QUOTE_DOUBLE = '"';
	var QUOTE_SINGLE = '\'';
	var SPACE = ' ';
	var SQUARE_BRACKET_OPEN = '[';
	var SQUARE_BRACKET_CLOSE = ']';
	var TICK = '`';
	var TILDE = '~';
	var UNDERSCORE = '_';
	
	/*
	 * Character combinations.
	 */
	
	var BREAK = LINE + LINE;
	var GAP = BREAK + LINE;
	var DOUBLE_TILDE = TILDE + TILDE;
	
	/*
	 * Allowed entity options.
	 */
	
	var ENTITY_OPTIONS = objectCreate();
	
	ENTITY_OPTIONS.true = true;
	ENTITY_OPTIONS.false = true;
	ENTITY_OPTIONS.numbers = true;
	ENTITY_OPTIONS.escape = true;
	
	/*
	 * Allowed list-bullet characters.
	 */
	
	var LIST_BULLETS = objectCreate();
	
	LIST_BULLETS[ASTERISK] = true;
	LIST_BULLETS[DASH] = true;
	LIST_BULLETS[PLUS] = true;
	
	/*
	 * Allowed horizontal-rule bullet characters.
	 */
	
	var HORIZONTAL_RULE_BULLETS = objectCreate();
	
	HORIZONTAL_RULE_BULLETS[ASTERISK] = true;
	HORIZONTAL_RULE_BULLETS[DASH] = true;
	HORIZONTAL_RULE_BULLETS[UNDERSCORE] = true;
	
	/*
	 * Allowed emphasis characters.
	 */
	
	var EMPHASIS_MARKERS = objectCreate();
	
	EMPHASIS_MARKERS[UNDERSCORE] = true;
	EMPHASIS_MARKERS[ASTERISK] = true;
	
	/*
	 * Allowed fence markers.
	 */
	
	var FENCE_MARKERS = objectCreate();
	
	FENCE_MARKERS[TICK] = true;
	FENCE_MARKERS[TILDE] = true;
	
	/*
	 * Which method to use based on `list.ordered`.
	 */
	
	var ORDERED_MAP = objectCreate();
	
	ORDERED_MAP.true = 'visitOrderedItems';
	ORDERED_MAP.false = 'visitUnorderedItems';
	
	/*
	 * Allowed list-item-indent's.
	 */
	
	var LIST_ITEM_INDENTS = objectCreate();
	
	var LIST_ITEM_TAB = 'tab';
	var LIST_ITEM_ONE = '1';
	var LIST_ITEM_MIXED = 'mixed';
	
	LIST_ITEM_INDENTS[LIST_ITEM_ONE] = true;
	LIST_ITEM_INDENTS[LIST_ITEM_TAB] = true;
	LIST_ITEM_INDENTS[LIST_ITEM_MIXED] = true;
	
	/*
	 * Which checkbox to use.
	 */
	
	var CHECKBOX_MAP = objectCreate();
	
	CHECKBOX_MAP.null = EMPTY;
	CHECKBOX_MAP.undefined = EMPTY;
	CHECKBOX_MAP.true = SQUARE_BRACKET_OPEN + 'x' + SQUARE_BRACKET_CLOSE + SPACE;
	CHECKBOX_MAP.false = SQUARE_BRACKET_OPEN + SPACE + SQUARE_BRACKET_CLOSE +
	    SPACE;
	
	/**
	 * Encode noop.
	 * Simply returns the given value.
	 *
	 * @example
	 *   var encode = encodeNoop();
	 *   encode('AT&T') // 'AT&T'
	 *
	 * @param {string} value - Content.
	 * @return {string} - Content, without any modifications.
	 */
	function encodeNoop(value) {
	    return value;
	}
	
	/**
	 * Factory to encode HTML entities.
	 * Creates a no-operation function when `type` is
	 * `'false'`, a function which encodes using named
	 * references when `type` is `'true'`, and a function
	 * which encodes using numbered references when `type` is
	 * `'numbers'`.
	 *
	 * By default this should not throw errors, but he does
	 * throw an error when in `strict` mode:
	 *
	 *     he.encode.options.strict = true;
	 *     encodeFactory('true')('\x01') // throws
	 *
	 * These are thrown on the currently compiled `File`.
	 *
	 * @example
	 *   var file = new File();
	 *
	 *   var encode = encodeFactory('false', file);
	 *   encode('AT&T') // 'AT&T'
	 *
	 *   encode = encodeFactory('true', file);
	 *   encode('AT&T') // 'AT&amp;T'
	 *
	 *   encode = encodeFactory('numbers', file);
	 *   encode('AT&T') // 'ATT&#x26;T'
	 *
	 * @param {string} type - Either `'true'`, `'false'`, or
	 *   `numbers`.
	 * @param {File} file - Currently compiled virtual file.
	 * @return {function(string): string} - Function which
	 *   takes a value and returns its encoded version.
	 */
	function encodeFactory(type, file) {
	    var options = {};
	    var fn;
	
	    if (type === 'false') {
	        return encodeNoop;
	    }
	
	    if (type === 'true') {
	        options.useNamedReferences = true;
	    }
	
	    fn = type === 'escape' ? 'escape' : 'encode';
	
	    /**
	     * Encode HTML entities using `he` using bound options.
	     *
	     * @see https://github.com/mathiasbynens/he#strict
	     *
	     * @example
	     *   // When `type` is `'true'`.
	     *   encode('AT&T'); // 'AT&amp;T'
	     *
	     *   // When `type` is `'numbers'`.
	     *   encode('AT&T'); // 'ATT&#x26;T'
	     *
	     * @param {string} value - Content.
	     * @param {Object} node - Node which is compiled.
	     * @return {string} - Encoded content.
	     * @throws {Error} - When `file.quiet` is not `true`.
	     *   However, by default `he` does not throw on
	     *   parse errors, but when
	     *   `he.encode.options.strict: true`, they occur on
	     *   invalid HTML.
	     */
	    function encode(value, node) {
	        try {
	            return he[fn](value, options);
	        } catch (exception) {
	            file.fail(exception, node.position);
	        }
	    }
	
	    return encode;
	}
	
	/**
	 * Checks if `url` needs to be enclosed by angle brackets.
	 *
	 * @example
	 *   encloseURI('foo bar') // '<foo bar>'
	 *   encloseURI('foo(bar(baz)') // '<foo(bar(baz)>'
	 *   encloseURI('') // '<>'
	 *   encloseURI('example.com') // 'example.com'
	 *   encloseURI('example.com', true) // '<example.com>'
	 *
	 * @param {string} uri
	 * @param {boolean?} [always] - Force enclosing.
	 * @return {boolean} - Properly enclosed `uri`.
	 */
	function encloseURI(uri, always) {
	    if (
	        always ||
	        !uri.length ||
	        EXPRESSIONS_WHITE_SPACE.test(uri) ||
	        count(uri, PARENTHESIS_OPEN) !== count(uri, PARENTHESIS_CLOSE)
	    ) {
	        return ANGLE_BRACKET_OPEN + uri + ANGLE_BRACKET_CLOSE;
	    }
	
	    return uri;
	}
	
	/**
	 * There is currently no way to support nested delimiters
	 * across Markdown.pl, CommonMark, and GitHub (RedCarpet).
	 * The following supports Markdown.pl, and GitHub.
	 * CommonMark is not supported when mixing double- and
	 * single quotes inside a title.
	 *
	 * @see https://github.com/vmg/redcarpet/issues/473
	 * @see https://github.com/jgm/CommonMark/issues/308
	 *
	 * @example
	 *   encloseTitle('foo') // '"foo"'
	 *   encloseTitle('foo \'bar\' baz') // '"foo \'bar\' baz"'
	 *   encloseTitle('foo "bar" baz') // '\'foo "bar" baz\''
	 *   encloseTitle('foo "bar" \'baz\'') // '"foo "bar" \'baz\'"'
	 *
	 * @param {string} title - Content.
	 * @return {string} - Properly enclosed title.
	 */
	function encloseTitle(title) {
	    var delimiter = QUOTE_DOUBLE;
	
	    if (title.indexOf(delimiter) !== -1) {
	        delimiter = QUOTE_SINGLE;
	    }
	
	    return delimiter + title + delimiter;
	}
	
	/**
	 * Get the count of the longest repeating streak
	 * of `character` in `value`.
	 *
	 * @example
	 *   getLongestRepetition('` foo `` bar `', '`') // 2
	 *
	 * @param {string} value - Content.
	 * @param {string} character - Single character to look
	 *   for.
	 * @return {number} - Number of characters at the place
	 *   where `character` occurs in its longest streak in
	 *   `value`.
	 */
	function getLongestRepetition(value, character) {
	    var highestCount = 0;
	    var index = -1;
	    var length = value.length;
	    var currentCount = 0;
	    var currentCharacter;
	
	    while (++index < length) {
	        currentCharacter = value.charAt(index);
	
	        if (currentCharacter === character) {
	            currentCount++;
	
	            if (currentCount > highestCount) {
	                highestCount = currentCount;
	            }
	        } else {
	            currentCount = 0;
	        }
	    }
	
	    return highestCount;
	}
	
	/**
	 * Pad `value` with `level * INDENT` spaces.  Respects
	 * lines.
	 *
	 * @example
	 *   pad('foo', 1) // '    foo'
	 *
	 * @param {string} value - Content.
	 * @param {number} level - Indentation level.
	 * @return {string} - Padded `value`.
	 */
	function pad(value, level) {
	    var index;
	    var padding;
	
	    value = value.split(LINE);
	
	    index = value.length;
	    padding = repeat(SPACE, level * INDENT);
	
	    while (index--) {
	        if (value[index].length !== 0) {
	            value[index] = padding + value[index];
	        }
	    }
	
	    return value.join(LINE);
	}
	
	/**
	 * Construct a new compiler.
	 *
	 * @example
	 *   var compiler = new Compiler(new File('> foo.'));
	 *
	 * @constructor
	 * @class {Compiler}
	 * @param {File} file - Virtual file.
	 * @param {Object?} [options] - Passed to
	 *   `Compiler#setOptions()`.
	 */
	function Compiler(file, options) {
	    var self = this;
	
	    self.file = file;
	
	    self.options = clone(self.options);
	
	    self.setOptions(options);
	}
	
	/*
	 * Cache prototype.
	 */
	
	var compilerPrototype = Compiler.prototype;
	
	/*
	 * Expose defaults.
	 */
	
	compilerPrototype.options = defaultOptions;
	
	/*
	 * Map of applicable enum's.
	 */
	
	var maps = {
	    'entities': ENTITY_OPTIONS,
	    'bullet': LIST_BULLETS,
	    'rule': HORIZONTAL_RULE_BULLETS,
	    'listItemIndent': LIST_ITEM_INDENTS,
	    'emphasis': EMPHASIS_MARKERS,
	    'strong': EMPHASIS_MARKERS,
	    'fence': FENCE_MARKERS
	};
	
	/**
	 * Set options.  Does not overwrite previously set
	 * options.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *   compiler.setOptions({bullet: '*'});
	 *
	 * @this {Compiler}
	 * @throws {Error} - When an option is invalid.
	 * @param {Object?} [options] - Stringify settings.
	 * @return {Compiler} - `self`.
	 */
	compilerPrototype.setOptions = function (options) {
	    var self = this;
	    var current = self.options;
	    var ruleRepetition;
	    var key;
	
	    if (options === null || options === undefined) {
	        options = {};
	    } else if (typeof options === 'object') {
	        options = clone(options);
	    } else {
	        raise(options, 'options');
	    }
	
	    for (key in defaultOptions) {
	        validate[typeof current[key]](
	            options, key, current[key], maps[key]
	        );
	    }
	
	    ruleRepetition = options.ruleRepetition;
	
	    if (ruleRepetition && ruleRepetition < MINIMUM_RULE_LENGTH) {
	        raise(ruleRepetition, 'options.ruleRepetition');
	    }
	
	    self.encode = encodeFactory(String(options.entities), self.file);
	
	    self.options = options;
	
	    return self;
	};
	
	/**
	 * Visit a token.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.visit({
	 *     type: 'strong',
	 *     children: [{
	 *       type: 'text',
	 *       value: 'Foo'
	 *     }]
	 *   });
	 *   // '**Foo**'
	 *
	 * @param {Object} token - Node.
	 * @param {Object?} [parent] - `token`s parent node.
	 * @return {string} - Compiled `token`.
	 */
	compilerPrototype.visit = function (token, parent) {
	    var self = this;
	
	    if (typeof self[token.type] !== 'function') {
	        self.file.fail(
	            'Missing compiler for node of type `' +
	            token.type + '`: ' + token,
	            token
	        );
	    }
	
	    return self[token.type](token, parent);
	};
	
	/**
	 * Visit all tokens.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.all({
	 *     type: 'strong',
	 *     children: [{
	 *       type: 'text',
	 *       value: 'Foo'
	 *     },
	 *     {
	 *       type: 'text',
	 *       value: 'Bar'
	 *     }]
	 *   });
	 *   // ['Foo', 'Bar']
	 *
	 * @param {Object} parent - Parent node of children.
	 * @return {Array.<string>} - List of compiled children.
	 */
	compilerPrototype.all = function (parent) {
	    var self = this;
	    var tokens = parent.children;
	    var values = [];
	    var index = -1;
	    var length = tokens.length;
	
	    while (++index < length) {
	        values[index] = self.visit(tokens[index], parent);
	    }
	
	    return values;
	};
	
	/**
	 * Visit ordered list items.
	 *
	 * Starts the list with
	 * `token.start` and increments each following list item
	 * bullet by one:
	 *
	 *     2. foo
	 *     3. bar
	 *
	 * In `incrementListMarker: false` mode, does not increment
	 * each marker ans stays on `token.start`:
	 *
	 *     1. foo
	 *     1. bar
	 *
	 * Adds an extra line after an item if it has
	 * `loose: true`.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.visitOrderedItems({
	 *     type: 'list',
	 *     ordered: true,
	 *     children: [{
	 *       type: 'listItem',
	 *       children: [{
	 *         type: 'text',
	 *         value: 'bar'
	 *       }]
	 *     }]
	 *   });
	 *   // '1.  bar'
	 *
	 * @param {Object} token - `list` node with
	 *   `ordered: true`.
	 * @return {string} - Markdown list.
	 */
	compilerPrototype.visitOrderedItems = function (token) {
	    var self = this;
	    var increment = self.options.incrementListMarker;
	    var values = [];
	    var tokens = token.children;
	    var index = -1;
	    var length = tokens.length;
	    var start = token.start;
	    var bullet;
	
	    while (++index < length) {
	        bullet = (increment ? start + index : start) + DOT;
	        values[index] = self.listItem(tokens[index], token, index, bullet);
	    }
	
	    return values.join(LINE);
	};
	
	/**
	 * Visit unordered list items.
	 *
	 * Uses `options.bullet` as each item's bullet.
	 *
	 * Adds an extra line after an item if it has
	 * `loose: true`.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.visitUnorderedItems({
	 *     type: 'list',
	 *     ordered: false,
	 *     children: [{
	 *       type: 'listItem',
	 *       children: [{
	 *         type: 'text',
	 *         value: 'bar'
	 *       }]
	 *     }]
	 *   });
	 *   // '-   bar'
	 *
	 * @param {Object} token - `list` node with
	 *   `ordered: false`.
	 * @return {string} - Markdown list.
	 */
	compilerPrototype.visitUnorderedItems = function (token) {
	    var self = this;
	    var values = [];
	    var tokens = token.children;
	    var length = tokens.length;
	    var index = -1;
	    var bullet = self.options.bullet;
	
	    while (++index < length) {
	        values[index] = self.listItem(tokens[index], token, index, bullet);
	    }
	
	    return values.join(LINE);
	};
	
	/**
	 * Stringify a block node with block children (e.g., `root`
	 * or `blockquote`).
	 *
	 * Knows about code following a list, or adjacent lists
	 * with similar bullets, and places an extra newline
	 * between them.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.block({
	 *     type: 'root',
	 *     children: [{
	 *       type: 'paragraph',
	 *       children: [{
	 *         type: 'text',
	 *         value: 'bar'
	 *       }]
	 *     }]
	 *   });
	 *   // 'bar'
	 *
	 * @param {Object} token - `root` node.
	 * @return {string} - Markdown block content.
	 */
	compilerPrototype.block = function (token) {
	    var self = this;
	    var values = [];
	    var tokens = token.children;
	    var index = -1;
	    var length = tokens.length;
	    var child;
	    var prev;
	
	    while (++index < length) {
	        child = tokens[index];
	
	        if (prev) {
	            /*
	             * Duplicate tokens, such as a list
	             * directly following another list,
	             * often need multiple new lines.
	             *
	             * Additionally, code blocks following a list
	             * might easily be mistaken for a paragraph
	             * in the list itself.
	             */
	
	            if (child.type === prev.type && prev.type === 'list') {
	                values.push(prev.ordered === child.ordered ? GAP : BREAK);
	            } else if (
	                prev.type === 'list' &&
	                child.type === 'code' &&
	                !child.lang
	            ) {
	                values.push(GAP);
	            } else {
	                values.push(BREAK);
	            }
	        }
	
	        values.push(self.visit(child, token));
	
	        prev = child;
	    }
	
	    return values.join(EMPTY);
	};
	
	/**
	 * Stringify a root.
	 *
	 * Adds a final newline to ensure valid POSIX files.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.root({
	 *     type: 'root',
	 *     children: [{
	 *       type: 'paragraph',
	 *       children: [{
	 *         type: 'text',
	 *         value: 'bar'
	 *       }]
	 *     }]
	 *   });
	 *   // 'bar'
	 *
	 * @param {Object} token - `root` node.
	 * @return {string} - Markdown document.
	 */
	compilerPrototype.root = function (token) {
	    return this.block(token) + LINE;
	};
	
	/**
	 * Stringify a heading.
	 *
	 * In `setext: true` mode and when `depth` is smaller than
	 * three, creates a setext header:
	 *
	 *     Foo
	 *     ===
	 *
	 * Otherwise, an ATX header is generated:
	 *
	 *     ### Foo
	 *
	 * In `closeAtx: true` mode, the header is closed with
	 * hashes:
	 *
	 *     ### Foo ###
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.heading({
	 *     type: 'heading',
	 *     depth: 2,
	 *     children: [{
	 *       type: 'strong',
	 *       children: [{
	 *         type: 'text',
	 *         value: 'bar'
	 *       }]
	 *     }]
	 *   });
	 *   // '## **bar**'
	 *
	 * @param {Object} token - `heading` node.
	 * @return {string} - Markdown heading.
	 */
	compilerPrototype.heading = function (token) {
	    var self = this;
	    var setext = self.options.setext;
	    var closeAtx = self.options.closeAtx;
	    var depth = token.depth;
	    var content = self.all(token).join(EMPTY);
	    var prefix;
	
	    if (setext && depth < 3) {
	        return content + LINE +
	            repeat(depth === 1 ? EQUALS : DASH, content.length);
	    }
	
	    prefix = repeat(HASH, token.depth);
	    content = prefix + SPACE + content;
	
	    if (closeAtx) {
	        content += SPACE + prefix;
	    }
	
	    return content;
	};
	
	/**
	 * Stringify text.
	 *
	 * Supports named entities in `settings.encode: true` mode:
	 *
	 *     AT&amp;T
	 *
	 * Supports numbered entities in `settings.encode: numbers`
	 * mode:
	 *
	 *     AT&#x26;T
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.text({
	 *     type: 'text',
	 *     value: 'foo'
	 *   });
	 *   // 'foo'
	 *
	 * @param {Object} token - `text` node.
	 * @return {string} - Raw markdown text.
	 */
	compilerPrototype.text = function (token) {
	    return this.encode(token.value, token);
	};
	
	/**
	 * Stringify escaped text.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.escape({
	 *     type: 'escape',
	 *     value: '\n'
	 *   });
	 *   // '\\\n'
	 *
	 * @param {Object} token - `escape` node.
	 * @return {string} - Markdown escape.
	 */
	compilerPrototype.escape = function (token) {
	    return '\\' + token.value;
	};
	
	/**
	 * Stringify a paragraph.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.paragraph({
	 *     type: 'paragraph',
	 *     children: [{
	 *       type: 'strong',
	 *       children: [{
	 *         type: 'text',
	 *         value: 'bar'
	 *       }]
	 *     }]
	 *   });
	 *   // '**bar**'
	 *
	 * @param {Object} token - `paragraph` node.
	 * @return {string} - Markdown paragraph.
	 */
	compilerPrototype.paragraph = function (token) {
	    return this.all(token).join(EMPTY);
	};
	
	/**
	 * Stringify a block quote.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.paragraph({
	 *     type: 'blockquote',
	 *     children: [{
	 *       type: 'paragraph',
	 *       children: [{
	 *         type: 'strong',
	 *         children: [{
	 *           type: 'text',
	 *           value: 'bar'
	 *         }]
	 *       }]
	 *     }]
	 *   });
	 *   // '> **bar**'
	 *
	 * @param {Object} token - `blockquote` node.
	 * @return {string} - Markdown block quote.
	 */
	compilerPrototype.blockquote = function (token) {
	    var indent = ANGLE_BRACKET_CLOSE + SPACE;
	
	    return indent + this.block(token).split(LINE).join(LINE + indent);
	};
	
	/**
	 * Stringify a list. See `Compiler#visitOrderedList()` and
	 * `Compiler#visitUnorderedList()` for internal working.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.visitUnorderedItems({
	 *     type: 'list',
	 *     ordered: false,
	 *     children: [{
	 *       type: 'listItem',
	 *       children: [{
	 *         type: 'text',
	 *         value: 'bar'
	 *       }]
	 *     }]
	 *   });
	 *   // '-   bar'
	 *
	 * @param {Object} token - `list` node.
	 * @return {string} - Markdown list.
	 */
	compilerPrototype.list = function (token) {
	    return this[ORDERED_MAP[token.ordered]](token);
	};
	
	/**
	 * Stringify a list item.
	 *
	 * Prefixes the content with a checked checkbox when
	 * `checked: true`:
	 *
	 *     [x] foo
	 *
	 * Prefixes the content with an unchecked checkbox when
	 * `checked: false`:
	 *
	 *     [ ] foo
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.listItem({
	 *     type: 'listItem',
	 *     checked: true,
	 *     children: [{
	 *       type: 'text',
	 *       value: 'bar'
	 *     }]
	 *   }, {
	 *     type: 'list',
	 *     ordered: false,
	 *     children: [{
	 *       type: 'listItem',
	 *       checked: true,
	 *       children: [{
	 *         type: 'text',
	 *         value: 'bar'
	 *       }]
	 *     }]
	 *   }, 0, '*');
	 *   '-   [x] bar'
	 *
	 * @param {Object} token - `listItem` node.
	 * @param {Object} parent - `list` node.
	 * @param {number} position - Index of `token` in `parent`.
	 * @param {string} bullet - Bullet to use.  This, and the
	 *   `listItemIndent` setting define the used indent.
	 * @return {string} - Markdown list item.
	 */
	compilerPrototype.listItem = function (token, parent, position, bullet) {
	    var self = this;
	    var style = self.options.listItemIndent;
	    var tokens = token.children;
	    var values = [];
	    var index = -1;
	    var length = tokens.length;
	    var loose = token.loose;
	    var value;
	    var indent;
	    var spacing;
	
	    while (++index < length) {
	        values[index] = self.visit(tokens[index], token);
	    }
	
	    value = CHECKBOX_MAP[token.checked] + values.join(loose ? BREAK : LINE);
	
	    if (
	        style === LIST_ITEM_ONE ||
	        (style === LIST_ITEM_MIXED && value.indexOf(LINE) === -1)
	    ) {
	        indent = bullet.length + 1;
	        spacing = SPACE;
	    } else {
	        indent = Math.ceil((bullet.length + 1) / INDENT) * INDENT;
	        spacing = repeat(SPACE, indent - bullet.length);
	    }
	
	    value = bullet + spacing + pad(value, indent / INDENT).slice(indent);
	
	    if (loose && parent.children.length - 1 !== position) {
	        value += LINE;
	    }
	
	    return value;
	};
	
	/**
	 * Stringify inline code.
	 *
	 * Knows about internal ticks (`\``), and ensures one more
	 * tick is used to enclose the inline code:
	 *
	 *     ```foo ``bar`` baz```
	 *
	 * Even knows about inital and final ticks:
	 *
	 *     `` `foo ``
	 *     `` foo` ``
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.inlineCode({
	 *     type: 'inlineCode',
	 *     value: 'foo(); `bar`; baz()'
	 *   });
	 *   // '``foo(); `bar`; baz()``'
	 *
	 * @param {Object} token - `inlineCode` node.
	 * @return {string} - Markdown inline code.
	 */
	compilerPrototype.inlineCode = function (token) {
	    var value = token.value;
	    var ticks = repeat(TICK, getLongestRepetition(value, TICK) + 1);
	    var start = ticks;
	    var end = ticks;
	
	    if (value.charAt(0) === TICK) {
	        start += SPACE;
	    }
	
	    if (value.charAt(value.length - 1) === TICK) {
	        end = SPACE + end;
	    }
	
	    return start + token.value + end;
	};
	
	/**
	 * Stringify YAML front matter.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.yaml({
	 *     type: 'yaml',
	 *     value: 'foo: bar'
	 *   });
	 *   // '---\nfoo: bar\n---'
	 *
	 * @param {Object} token - `yaml` node.
	 * @return {string} - Markdown YAML document.
	 */
	compilerPrototype.yaml = function (token) {
	    var delimiter = repeat(DASH, YAML_FENCE_LENGTH);
	    var value = token.value ? LINE + token.value : EMPTY;
	
	    return delimiter + value + LINE + delimiter;
	};
	
	/**
	 * Stringify a code block.
	 *
	 * Creates indented code when:
	 *
	 * - No language tag exists;
	 * - Not in `fences: true` mode;
	 * - A non-empty value exists.
	 *
	 * Otherwise, GFM fenced code is created:
	 *
	 *     ```js
	 *     foo();
	 *     ```
	 *
	 * When in ``fence: `~` `` mode, uses tildes as fences:
	 *
	 *     ~~~js
	 *     foo();
	 *     ~~~
	 *
	 * Knows about internal fences (Note: GitHub/Kramdown does
	 * not support this):
	 *
	 *     ````javascript
	 *     ```markdown
	 *     foo
	 *     ```
	 *     ````
	 *
	 * Supports named entities in the language flag with
	 * `settings.encode` mode.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.code({
	 *     type: 'code',
	 *     lang: 'js',
	 *     value: 'fooo();'
	 *   });
	 *   // '```js\nfooo();\n```'
	 *
	 * @param {Object} token - `code` node.
	 * @return {string} - Markdown code block.
	 */
	compilerPrototype.code = function (token) {
	    var value = token.value;
	    var marker = this.options.fence;
	    var language = this.encode(token.lang || EMPTY, token);
	    var fence;
	
	    /*
	     * Probably pedantic.
	     */
	
	    if (!language && !this.options.fences && value) {
	        return pad(value, 1);
	    }
	
	    fence = getLongestRepetition(value, marker) + 1;
	
	    fence = repeat(marker, Math.max(fence, MINIMUM_CODE_FENCE_LENGTH));
	
	    return fence + language + LINE + value + LINE + fence;
	};
	
	/**
	 * Stringify HTML.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.html({
	 *     type: 'html',
	 *     value: '<div>bar</div>'
	 *   });
	 *   // '<div>bar</div>'
	 *
	 * @param {Object} token - `html` node.
	 * @return {string} - Markdown HTML.
	 */
	compilerPrototype.html = function (token) {
	    return token.value;
	};
	
	/**
	 * Stringify a horizontal rule.
	 *
	 * The character used is configurable by `rule`: (`'_'`)
	 *
	 *     ___
	 *
	 * The number of repititions is defined through
	 * `ruleRepetition`: (`6`)
	 *
	 *     ******
	 *
	 * Whether spaces delimit each character, is configured
	 * through `ruleSpaces`: (`true`)
	 *
	 *     * * *
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.horizontalRule({
	 *     type: 'horizontalRule'
	 *   });
	 *   // '***'
	 *
	 * @return {string} - Markdown rule.
	 */
	compilerPrototype.horizontalRule = function () {
	    var options = this.options;
	    var rule = repeat(options.rule, options.ruleRepetition);
	
	    if (options.ruleSpaces) {
	        rule = rule.split(EMPTY).join(SPACE);
	    }
	
	    return rule;
	};
	
	/**
	 * Stringify a strong.
	 *
	 * The marker used is configurable by `strong`, which
	 * defaults to an asterisk (`'*'`) but also accepts an
	 * underscore (`'_'`):
	 *
	 *     _foo_
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.strong({
	 *     type: 'strong',
	 *     children: [{
	 *       type: 'text',
	 *       value: 'Foo'
	 *     }]
	 *   });
	 *   // '**Foo**'
	 *
	 * @param {Object} token - `strong` node.
	 * @return {string} - Markdown strong-emphasised text.
	 */
	compilerPrototype.strong = function (token) {
	    var marker = this.options.strong;
	
	    marker = marker + marker;
	
	    return marker + this.all(token).join(EMPTY) + marker;
	};
	
	/**
	 * Stringify an emphasis.
	 *
	 * The marker used is configurable by `emphasis`, which
	 * defaults to an underscore (`'_'`) but also accepts an
	 * asterisk (`'*'`):
	 *
	 *     *foo*
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.emphasis({
	 *     type: 'emphasis',
	 *     children: [{
	 *       type: 'text',
	 *       value: 'Foo'
	 *     }]
	 *   });
	 *   // '_Foo_'
	 *
	 * @param {Object} token - `emphasis` node.
	 * @return {string} - Markdown emphasised text.
	 */
	compilerPrototype.emphasis = function (token) {
	    var marker = this.options.emphasis;
	
	    return marker + this.all(token).join(EMPTY) + marker;
	};
	
	/**
	 * Stringify a hard break.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.break({
	 *     type: 'break'
	 *   });
	 *   // '  \n'
	 *
	 * @return {string} - Hard markdown break.
	 */
	compilerPrototype.break = function () {
	    return SPACE + SPACE + LINE;
	};
	
	/**
	 * Stringify a delete.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.delete({
	 *     type: 'delete',
	 *     children: [{
	 *       type: 'text',
	 *       value: 'Foo'
	 *     }]
	 *   });
	 *   // '~~Foo~~'
	 *
	 * @param {Object} token - `delete` node.
	 * @return {string} - Markdown strike-through.
	 */
	compilerPrototype.delete = function (token) {
	    return DOUBLE_TILDE + this.all(token).join(EMPTY) + DOUBLE_TILDE;
	};
	
	/**
	 * Stringify a link.
	 *
	 * When no title exists, the compiled `children` equal
	 * `href`, and `href` starts with a protocol, an auto
	 * link is created:
	 *
	 *     <http://example.com>
	 *
	 * Otherwise, is smart about enclosing `href` (see
	 * `encloseURI()`) and `title` (see `encloseTitle()`).
	 *
	 *    [foo](<foo at bar dot com> 'An "example" e-mail')
	 *
	 * Supports named entities in the `href` and `title` when
	 * in `settings.encode` mode.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.link({
	 *     type: 'link',
	 *     href: 'http://example.com',
	 *     title: 'Example Domain',
	 *     children: [{
	 *       type: 'text',
	 *       value: 'Foo'
	 *     }]
	 *   });
	 *   // '[Foo](http://example.com "Example Domain")'
	 *
	 * @param {Object} token - `link` node.
	 * @return {string} - Markdown link.
	 */
	compilerPrototype.link = function (token) {
	    var self = this;
	    var url = self.encode(token.href, token);
	    var value = self.all(token).join(EMPTY);
	
	    if (
	        token.title === null &&
	        PROTOCOL.test(url) &&
	        (url === value || url === MAILTO + value)
	    ) {
	        return encloseURI(url, true);
	    }
	
	    url = encloseURI(url);
	
	    if (token.title) {
	        url += SPACE + encloseTitle(self.encode(token.title, token));
	    }
	
	    value = SQUARE_BRACKET_OPEN + value + SQUARE_BRACKET_CLOSE;
	
	    value += PARENTHESIS_OPEN + url + PARENTHESIS_CLOSE;
	
	    return value;
	};
	
	/**
	 * Stringify a link label.
	 *
	 * Because link references are easily, mistakingly,
	 * created (for example, `[foo]`), reference nodes have
	 * an extra property depicting how it looked in the
	 * original document, so stringification can cause minimal
	 * changes.
	 *
	 * @example
	 *   label({
	 *     type: 'referenceImage',
	 *     referenceType: 'full',
	 *     identifier: 'foo'
	 *   });
	 *   // '[foo]'
	 *
	 *   label({
	 *     type: 'referenceImage',
	 *     referenceType: 'collapsed',
	 *     identifier: 'foo'
	 *   });
	 *   // '[]'
	 *
	 *   label({
	 *     type: 'referenceImage',
	 *     referenceType: 'shortcut',
	 *     identifier: 'foo'
	 *   });
	 *   // ''
	 *
	 * @param {Object} token - `linkReference` or
	 *   `imageReference` node.
	 * @return {string} - Markdown label reference.
	 */
	function label(token) {
	    var value = EMPTY;
	    var type = token.referenceType;
	
	    if (type === 'full') {
	        value = token.identifier;
	    }
	
	    if (type !== 'shortcut') {
	        value = SQUARE_BRACKET_OPEN + value + SQUARE_BRACKET_CLOSE;
	    }
	
	    return value;
	}
	
	/**
	 * Stringify a link reference.
	 *
	 * See `label()` on how reference labels are created.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.linkReference({
	 *     type: 'linkReference',
	 *     referenceType: 'collapsed',
	 *     identifier: 'foo',
	 *     children: [{
	 *       type: 'text',
	 *       value: 'Foo'
	 *     }]
	 *   });
	 *   // '[Foo][]'
	 *
	 * @param {Object} token - `linkReference` node.
	 * @return {string} - Markdown link reference.
	 */
	compilerPrototype.linkReference = function (token) {
	    return SQUARE_BRACKET_OPEN +
	        this.all(token).join(EMPTY) + SQUARE_BRACKET_CLOSE +
	        label(token);
	};
	
	/**
	 * Stringify an image reference.
	 *
	 * See `label()` on how reference labels are created.
	 *
	 * Supports named entities in the `alt` when
	 * in `settings.encode` mode.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.imageReference({
	 *     type: 'imageReference',
	 *     referenceType: 'full',
	 *     identifier: 'foo',
	 *     alt: 'Foo'
	 *   });
	 *   // '![Foo][foo]'
	 *
	 * @param {Object} token - `imageReference` node.
	 * @return {string} - Markdown image reference.
	 */
	compilerPrototype.imageReference = function (token) {
	    var alt = this.encode(token.alt, token);
	
	    return EXCLAMATION_MARK +
	        SQUARE_BRACKET_OPEN + alt + SQUARE_BRACKET_CLOSE +
	        label(token);
	};
	
	/**
	 * Stringify a footnote reference.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.footnoteReference({
	 *     type: 'footnoteReference',
	 *     identifier: 'foo'
	 *   });
	 *   // '[^foo]'
	 *
	 * @param {Object} token - `footnoteReference` node.
	 * @return {string} - Markdown footnote reference.
	 */
	compilerPrototype.footnoteReference = function (token) {
	    return SQUARE_BRACKET_OPEN + CARET + token.identifier +
	        SQUARE_BRACKET_CLOSE;
	};
	
	/**
	 * Stringify an link- or image definition.
	 *
	 * Is smart about enclosing `href` (see `encloseURI()`) and
	 * `title` (see `encloseTitle()`).
	 *
	 *    [foo]: <foo at bar dot com> 'An "example" e-mail'
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.definition({
	 *     type: 'definition',
	 *     link: 'http://example.com',
	 *     title: 'Example Domain',
	 *     identifier: 'foo'
	 *   });
	 *   // '[foo]: http://example.com "Example Domain"'
	 *
	 * @param {Object} token - `definition` node.
	 * @return {string} - Markdown link- or image definition.
	 */
	compilerPrototype.definition = function (token) {
	    var value = SQUARE_BRACKET_OPEN + token.identifier + SQUARE_BRACKET_CLOSE;
	    var url = encloseURI(token.link);
	
	    if (token.title) {
	        url += SPACE + encloseTitle(token.title);
	    }
	
	    return value + COLON + SPACE + url;
	};
	
	/**
	 * Stringify an image.
	 *
	 * Is smart about enclosing `href` (see `encloseURI()`) and
	 * `title` (see `encloseTitle()`).
	 *
	 *    ![foo](</fav icon.png> 'My "favourite" icon')
	 *
	 * Supports named entities in `src`, `alt`, and `title`
	 * when in `settings.encode` mode.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.image({
	 *     type: 'image',
	 *     href: 'http://example.png/favicon.png',
	 *     title: 'Example Icon',
	 *     alt: 'Foo'
	 *   });
	 *   // '![Foo](http://example.png/favicon.png "Example Icon")'
	 *
	 * @param {Object} token - `image` node.
	 * @return {string} - Markdown image.
	 */
	compilerPrototype.image = function (token) {
	    var encode = this.encode;
	    var url = encloseURI(encode(token.src, token));
	    var value;
	
	    if (token.title) {
	        url += SPACE + encloseTitle(encode(token.title, token));
	    }
	
	    value = EXCLAMATION_MARK +
	        SQUARE_BRACKET_OPEN + encode(token.alt || EMPTY, token) +
	        SQUARE_BRACKET_CLOSE;
	
	    value += PARENTHESIS_OPEN + url + PARENTHESIS_CLOSE;
	
	    return value;
	};
	
	/**
	 * Stringify a footnote.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.footnote({
	 *     type: 'footnote',
	 *     children: [{
	 *       type: 'text',
	 *       value: 'Foo'
	 *     }]
	 *   });
	 *   // '[^Foo]'
	 *
	 * @param {Object} token - `footnote` node.
	 * @return {string} - Markdown footnote.
	 */
	compilerPrototype.footnote = function (token) {
	    return SQUARE_BRACKET_OPEN + CARET + this.all(token).join(EMPTY) +
	        SQUARE_BRACKET_CLOSE;
	};
	
	/**
	 * Stringify a footnote definition.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.footnoteDefinition({
	 *     type: 'footnoteDefinition',
	 *     identifier: 'foo',
	 *     children: [{
	 *       type: 'paragraph',
	 *       children: [{
	 *         type: 'text',
	 *         value: 'bar'
	 *       }]
	 *     }]
	 *   });
	 *   // '[^foo]: bar'
	 *
	 * @param {Object} token - `footnoteDefinition` node.
	 * @return {string} - Markdown footnote definition.
	 */
	compilerPrototype.footnoteDefinition = function (token) {
	    var id = token.identifier.toLowerCase();
	
	    return SQUARE_BRACKET_OPEN + CARET + id +
	        SQUARE_BRACKET_CLOSE + COLON + SPACE +
	        this.all(token).join(BREAK + repeat(SPACE, INDENT));
	};
	
	/**
	 * Stringify table.
	 *
	 * Creates a fenced table by default, but not in
	 * `looseTable: true` mode:
	 *
	 *     Foo | Bar
	 *     :-: | ---
	 *     Baz | Qux
	 *
	 * NOTE: Be careful with `looseTable: true` mode, as a
	 * loose table inside an indented code block on GitHub
	 * renders as an actual table!
	 *
	 * Creates a spaces table by default, but not in
	 * `spacedTable: false`:
	 *
	 *     |Foo|Bar|
	 *     |:-:|---|
	 *     |Baz|Qux|
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.table({
	 *     type: 'table',
	 *     align: ['center', null],
	 *     children: [
	 *       {
	 *         type: 'tableHeader',
	 *         children: [
	 *           {
	 *             type: 'tableCell'
	 *             children: [{
	 *               type: 'text'
	 *               value: 'Foo'
	 *             }]
	 *           },
	 *           {
	 *             type: 'tableCell'
	 *             children: [{
	 *               type: 'text'
	 *               value: 'Bar'
	 *             }]
	 *           }
	 *         ]
	 *       },
	 *       {
	 *         type: 'tableRow',
	 *         children: [
	 *           {
	 *             type: 'tableCell'
	 *             children: [{
	 *               type: 'text'
	 *               value: 'Baz'
	 *             }]
	 *           },
	 *           {
	 *             type: 'tableCell'
	 *             children: [{
	 *               type: 'text'
	 *               value: 'Qux'
	 *             }]
	 *           }
	 *         ]
	 *       }
	 *     ]
	 *   });
	 *   // '| Foo | Bar |\n| :-: | --- |\n| Baz | Qux |'
	 *
	 * @param {Object} token - `table` node.
	 * @return {string} - Markdown table.
	 */
	compilerPrototype.table = function (token) {
	    var self = this;
	    var loose = self.options.looseTable;
	    var spaced = self.options.spacedTable;
	    var rows = token.children;
	    var index = rows.length;
	    var result = [];
	    var start;
	
	    while (index--) {
	        result[index] = self.all(rows[index]);
	    }
	
	    start = loose ? EMPTY : spaced ? PIPE + SPACE : PIPE;
	
	    return table(result, {
	        'align': token.align,
	        'start': start,
	        'end': start.split(EMPTY).reverse().join(EMPTY),
	        'delimiter': spaced ? SPACE + PIPE + SPACE : PIPE
	    });
	};
	
	/**
	 * Stringify a table cell.
	 *
	 * @example
	 *   var compiler = new Compiler();
	 *
	 *   compiler.tableCell({
	 *     type: 'tableCell',
	 *     children: [{
	 *       type: 'text'
	 *       value: 'Qux'
	 *     }]
	 *   });
	 *   // 'Qux'
	 *
	 * @param {Object} token - `tableCell` node.
	 * @return {string} - Markdown table cell.
	 */
	compilerPrototype.tableCell = function (token) {
	    return this.all(token).join(EMPTY);
	};
	
	/**
	 * Stringify an abstract syntax tree.
	 *
	 * @example
	 *   stringify({
	 *     type: 'strong',
	 *     children: [{
	 *       type: 'text',
	 *       value: 'Foo'
	 *     }]
	 *   }, new File());
	 *   // '**Foo**'
	 *
	 * @param {Object} ast - A node, most commonly, `root`.
	 * @param {File} file - Virtual file.
	 * @param {Object?} [options] - Passed to
	 *   `Compiler#setOptions()`.
	 * @return {string} - Markdown document.
	 */
	function stringify(ast, file, options) {
	    var CustomCompiler = this.Compiler || Compiler;
	
	    return new CustomCompiler(file, options).visit(ast);
	}
	
	/*
	 * Expose `Compiler` on `stringify`.
	 */
	
	stringify.Compiler = Compiler;
	
	/*
	 * Expose `stringify` on `module.exports`.
	 */
	
	module.exports = stringify;


/***/ },
/* 187 */
/***/ function(module, exports) {

	'use strict';
	
	/*
	 * Useful expressions.
	 */
	
	var EXPRESSION_DOT = /\./;
	var EXPRESSION_LAST_DOT = /\.[^.]*$/;
	
	/*
	 * Allowed alignment values.
	 */
	
	var LEFT = 'l';
	var RIGHT = 'r';
	var CENTER = 'c';
	var DOT = '.';
	var NULL = '';
	
	var ALLIGNMENT = [LEFT, RIGHT, CENTER, DOT, NULL];
	
	/*
	 * Characters.
	 */
	
	var COLON = ':';
	var DASH = '-';
	var PIPE = '|';
	var SPACE = ' ';
	var NEW_LINE = '\n';
	
	/**
	 * Get the length of `value`.
	 *
	 * @param {string} value
	 * @return {number}
	 */
	function lengthNoop(value) {
	    return String(value).length;
	}
	
	/**
	 * Get a string consisting of `length` `character`s.
	 *
	 * @param {number} length
	 * @param {string} [character=' ']
	 * @return {string}
	 */
	function pad(length, character) {
	    return Array(length + 1).join(character || SPACE);
	}
	
	/**
	 * Get the position of the last dot in `value`.
	 *
	 * @param {string} value
	 * @return {number}
	 */
	function dotindex(value) {
	    var match = EXPRESSION_LAST_DOT.exec(value);
	
	    return match ? match.index + 1 : value.length;
	}
	
	/**
	 * Create a table from a matrix of strings.
	 *
	 * @param {Array.<Array.<string>>} table
	 * @param {Object?} options
	 * @param {boolean?} [options.rule=true]
	 * @param {string?} [options.delimiter=" | "]
	 * @param {string?} [options.start="| "]
	 * @param {string?} [options.end=" |"]
	 * @param {Array.<string>?} options.align
	 * @param {function(string)?} options.stringLength
	 * @return {string} Pretty table
	 */
	function markdownTable(table, options) {
	    var settings = options || {};
	    var delimiter = settings.delimiter;
	    var start = settings.start;
	    var end = settings.end;
	    var alignment = settings.align;
	    var calculateStringLength = settings.stringLength || lengthNoop;
	    var cellCount = 0;
	    var rowIndex = -1;
	    var rowLength = table.length;
	    var sizes = [];
	    var align;
	    var rule;
	    var rows;
	    var row;
	    var cells;
	    var index;
	    var position;
	    var size;
	    var value;
	    var spacing;
	    var before;
	    var after;
	
	    alignment = alignment ? alignment.concat() : [];
	
	    if (delimiter === null || delimiter === undefined) {
	        delimiter = SPACE + PIPE + SPACE;
	    }
	
	    if (start === null || start === undefined) {
	        start = PIPE + SPACE;
	    }
	
	    if (end === null || end === undefined) {
	        end = SPACE + PIPE;
	    }
	
	    while (++rowIndex < rowLength) {
	        row = table[rowIndex];
	
	        index = -1;
	
	        if (row.length > cellCount) {
	            cellCount = row.length;
	        }
	
	        while (++index < cellCount) {
	            position = row[index] ? dotindex(row[index]) : null;
	
	            if (!sizes[index]) {
	                sizes[index] = 3;
	            }
	
	            if (position > sizes[index]) {
	                sizes[index] = position;
	            }
	        }
	    }
	
	    if (typeof alignment === 'string') {
	        alignment = pad(cellCount, alignment).split('');
	    }
	
	    /*
	     * Make sure only valid alignments are used.
	     */
	
	    index = -1;
	
	    while (++index < cellCount) {
	        align = alignment[index];
	
	        if (typeof align === 'string') {
	            align = align.charAt(0).toLowerCase();
	        }
	
	        if (ALLIGNMENT.indexOf(align) === -1) {
	            align = NULL;
	        }
	
	        alignment[index] = align;
	    }
	
	    rowIndex = -1;
	    rows = [];
	
	    while (++rowIndex < rowLength) {
	        row = table[rowIndex];
	
	        index = -1;
	        cells = [];
	
	        while (++index < cellCount) {
	            value = row[index];
	
	            if (value === null || value === undefined) {
	                value = '';
	            } else {
	                value = String(value);
	            }
	
	            if (alignment[index] !== DOT) {
	                cells[index] = value;
	            } else {
	                position = dotindex(value);
	
	                size = sizes[index] +
	                    (EXPRESSION_DOT.test(value) ? 0 : 1) -
	                    (calculateStringLength(value) - position);
	
	                cells[index] = value + pad(size - 1);
	            }
	        }
	
	        rows[rowIndex] = cells;
	    }
	
	    sizes = [];
	    rowIndex = -1;
	
	    while (++rowIndex < rowLength) {
	        cells = rows[rowIndex];
	
	        index = -1;
	
	        while (++index < cellCount) {
	            value = cells[index];
	
	            if (!sizes[index]) {
	                sizes[index] = 3;
	            }
	
	            size = calculateStringLength(value);
	
	            if (size > sizes[index]) {
	                sizes[index] = size;
	            }
	        }
	    }
	
	    rowIndex = -1;
	
	    while (++rowIndex < rowLength) {
	        cells = rows[rowIndex];
	
	        index = -1;
	
	        while (++index < cellCount) {
	            value = cells[index];
	
	            position = sizes[index] - (calculateStringLength(value) || 0);
	            spacing = pad(position);
	
	            if (alignment[index] === RIGHT || alignment[index] === DOT) {
	                value = spacing + value;
	            } else if (alignment[index] !== CENTER) {
	                value = value + spacing;
	            } else {
	                position = position / 2;
	
	                if (position % 1 === 0) {
	                    before = position;
	                    after = position;
	                } else {
	                    before = position + 0.5;
	                    after = position - 0.5;
	                }
	
	                value = pad(before) + value + pad(after);
	            }
	
	            cells[index] = value;
	        }
	
	        rows[rowIndex] = cells.join(delimiter);
	    }
	
	    if (settings.rule !== false) {
	        index = -1;
	        rule = [];
	
	        while (++index < cellCount) {
	            align = alignment[index];
	
	            /*
	             * When `align` is left, don't add colons.
	             */
	
	            value = align === RIGHT || align === NULL ? DASH : COLON;
	            value += pad(sizes[index] - 2, DASH);
	            value += align !== LEFT && align !== NULL ? COLON : DASH;
	
	            rule[index] = value;
	        }
	
	        rows.splice(1, 0, rule.join(delimiter));
	    }
	
	    return start + rows.join(end + NEW_LINE + start) + end;
	}
	
	/*
	 * Expose `markdownTable`.
	 */
	
	module.exports = markdownTable;


/***/ },
/* 188 */
/***/ function(module, exports) {

	/**
	 * @author Titus Wormer
	 * @copyright 2015 Titus Wormer. All rights reserved.
	 * @module File
	 * @fileoverview Virtual file format to attach additional
	 *   information related to the processed input.  Similar
	 *   to`wearefractal/vinyl`.  Additionally, File can be
	 *   passed directly to an ESLint formatter to visualise
	 *   warnings and errors relating to a file.
	 */
	
	'use strict';
	
	/**
	 * ESLint's formatter API expects `filePath` to be a
	 * string.  This hack supports invocation as well as
	 * implicit coercion.
	 *
	 * @example
	 *   var file = new File();
	 *   filePath = filePathFactory(file);
	 *
	 * @param {File} file
	 * @return {Function}
	 */
	function filePathFactory(file) {
	    /**
	     * Get the location of `file`.
	     *
	     * Returns empty string when without `filename`.
	     *
	     * @example
	     *   var file = new File({
	     *     'directory': '~',
	     *     'filename': 'example',
	     *     'extension': 'markdown'
	     *   });
	     *
	     *   String(file.filePath); // ~/example.markdown
	     *   file.filePath() // ~/example.markdown
	     *
	     * @property {Function} toString - Itself.
	     * @return {string}
	     */
	    function filePath() {
	        var directory;
	
	        if (file.filename) {
	            directory = file.directory;
	
	            if (directory.charAt(directory.length - 1) === '/') {
	                directory = directory.slice(0, -1);
	            }
	
	            if (directory === '.') {
	                directory = '';
	            }
	
	            return (directory ? directory + '/' : '') +
	                file.filename +
	                (file.extension ? '.' + file.extension : '');
	        }
	
	        return '';
	    }
	
	    filePath.toString = filePath;
	
	    return filePath;
	}
	
	/**
	 * Construct a new file.
	 *
	 * @example
	 *   var file = new File({
	 *     'directory': '~',
	 *     'filename': 'example',
	 *     'extension': 'markdown',
	 *     'contents': 'Foo *bar* baz'
	 *   });
	 *
	 *   file === File(file) // true
	 *   file === new File(file) // true
	 *   File('foo') instanceof File // true
	 *
	 * @constructor
	 * @class {File}
	 * @param {Object|File|string} [options] - either an
	 *   options object, or the value of `contents` (both
	 *   optional).  When a `file` is passed in, it's
	 *   immediately returned.
	 */
	function File(options) {
	    var self = this;
	
	    if (!(self instanceof File)) {
	        return new File(options);
	    }
	
	    if (options instanceof File) {
	        return options;
	    }
	
	    if (!options) {
	        options = {};
	    } else if (typeof options === 'string') {
	        options = {
	            'contents': options
	        };
	    }
	
	    self.filename = options.filename || null;
	    self.contents = options.contents || '';
	
	    self.directory = options.directory === undefined ? '' : options.directory;
	
	    self.extension = options.extension === undefined ?
	        'md' : options.extension;
	
	    self.messages = [];
	
	    /*
	     * Make sure eslint’s formatters stringify `filePath`
	     * properly.
	     */
	
	    self.filePath = filePathFactory(self);
	}
	
	/**
	 * Move a file by passing a new directory, filename,
	 * and extension.  When these are not given, the default
	 * values are kept.
	 *
	 * @example
	 *   var file = new File({
	 *     'directory': '~',
	 *     'filename': 'example',
	 *     'extension': 'markdown',
	 *     'contents': 'Foo *bar* baz'
	 *   });
	 *
	 *   file.move({'directory': '/var/www'});
	 *   file.filePath(); // '/var/www/example.markdown'
	 *
	 *   file.move({'extension': 'md'});
	 *   file.filePath(); // '/var/www/example.md'
	 *
	 * @this {File}
	 * @param {Object} options
	 */
	function move(options) {
	    var self = this;
	
	    if (!options) {
	        options = {};
	    }
	
	    self.directory = options.directory || self.directory || '';
	    self.filename = options.filename || self.filename || null;
	    self.extension = options.extension || self.extension || 'md';
	}
	
	/**
	 * Stringify a position.
	 *
	 * @example
	 *   stringify({'line': 1, 'column': 3}) // '1:3'
	 *   stringify({'line': 1}) // '1:1'
	 *   stringify({'column': 3}) // '1:3'
	 *   stringify() // '1:1'
	 *
	 * @param {Object?} [position] - Single position, like
	 *   those available at `node.position.start`.
	 * @return {string}
	 */
	function stringify(position) {
	    if (!position) {
	        position = {};
	    }
	
	    return (position.line || 1) + ':' + (position.column || 1);
	}
	
	/**
	 * Warn.
	 *
	 * Creates an exception (see `File#exception()`),
	 * sets `fatal: false`, and adds it to the file's
	 * `messages` list.
	 *
	 * @example
	 *   var file = new File();
	 *   file.warn('Something went wrong');
	 *
	 * @this {File}
	 * @param {string|Error} reason - Reason for warning.
	 * @param {Node|Location|Position} [position] - Location
	 *   of warning in file.
	 * @return {Error}
	 */
	function warn(reason, position) {
	    var err = this.exception(reason, position);
	
	    err.fatal = false;
	
	    this.messages.push(err);
	
	    return err;
	}
	
	/**
	 * Fail.
	 *
	 * Creates an exception (see `File#exception()`),
	 * sets `fatal: true`, adds it to the file's
	 * `messages` list.  If `quiet` is not true,
	 * throws the error.
	 *
	 * @example
	 *   var file = new File();
	 *   file.fail('Something went wrong'); // throws
	 *
	 * @this {File}
	 * @throws {Error} - When not `quiet: true`.
	 * @param {string|Error} reason - Reason for failure.
	 * @param {Node|Location|Position} [position] - Location
	 *   of failure in file.
	 * @return {Error} - Unless thrown, of course.
	 */
	function fail(reason, position) {
	    var err = this.exception(reason, position);
	
	    err.fatal = true;
	
	    this.messages.push(err);
	
	    if (!this.quiet) {
	        throw err;
	    }
	
	    return err;
	}
	
	/**
	 * Create a pretty exception with `reason` at `position`.
	 * When an error is passed in as `reason`, copies the
	 * stack.  This does not add a message to `messages`.
	 *
	 * @example
	 *   var file = new File();
	 *   var err = file.exception('Something went wrong');
	 *
	 * @this {File}
	 * @param {string|Error} reason - Reason for message.
	 * @param {Node|Location|Position} [position] - Location
	 *   of message in file.
	 * @return {Error} - An object including file information,
	 *   line and column indices.
	 */
	function exception(reason, position) {
	    var file = this.filePath();
	    var message = reason.message || reason;
	    var location;
	    var err;
	
	    /*
	     * Node / location / position.
	     */
	
	    if (position && position.position) {
	        position = position.position;
	    }
	
	    if (position && position.start) {
	        location = stringify(position.start) + '-' + stringify(position.end);
	        position = position.start;
	    } else {
	        location = stringify(position);
	    }
	
	    err = new Error(message);
	
	    err.name = (file ? file + ':' : '') + location;
	    err.file = file;
	    err.reason = message;
	    err.line = position ? position.line : null;
	    err.column = position ? position.column : null;
	
	    if (reason.stack) {
	        err.stack = reason.stack;
	    }
	
	    return err;
	}
	
	/**
	 * Check if `file` has a fatal message.
	 *
	 * @example
	 *   var file = new File();
	 *   file.quiet = true;
	 *   file.hasFailed; // false
	 *
	 *   file.fail('Something went wrong');
	 *   file.hasFailed; // true
	 *
	 * @this {File}
	 * @return {boolean}
	 */
	function hasFailed() {
	    var messages = this.messages;
	    var index = -1;
	    var length = messages.length;
	
	    while (++index < length) {
	        if (messages[index].fatal) {
	            return true;
	        }
	    }
	
	    return false;
	}
	
	/**
	 * Create a string representation of `file`.
	 *
	 * @example
	 *   var file = new File('Foo');
	 *   String(file); // 'Foo'
	 *
	 * @this {File}
	 * @return {string} - value at the `contents` property
	 *   in context.
	 */
	function toString() {
	    return this.contents;
	}
	
	/*
	 * Methods.
	 */
	
	File.prototype.move = move;
	File.prototype.exception = exception;
	File.prototype.toString = toString;
	File.prototype.warn = warn;
	File.prototype.fail = fail;
	File.prototype.hasFailed = hasFailed;
	
	/*
	 * Expose.
	 */
	
	module.exports = File;


/***/ },
/* 189 */
/***/ function(module, exports) {

	// Generated by CoffeeScript 1.10.0
	(function() {
	  var ALLOWED_TAG_NAMES, appendFootnoteDefinitionCollection, applyFootnoteNumber, convertPreToRawHTML, convertScatteredPreToRawHTML, createNodeFromHTMLFragment, decomposeHTMLNode, decomposeHTMLNodes, decomposeHTMLString, defineFootnoteNumber, endIndexFromPosition, foldHTMLNodes, isVoidElement, preprocess, removeDefinitions, sanitizeTag, startIndexFromPosition, wrapHTMLNodeInParagraph,
	    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
	
	  preprocess = function(root, sourceText, options) {
	    var defs, mapping;
	    convertPreToRawHTML(root);
	    convertScatteredPreToRawHTML(root, sourceText);
	    root.children = decomposeHTMLNodes(root.children);
	    root.children = foldHTMLNodes(root.children);
	    if (options.footnotes) {
	      mapping = defineFootnoteNumber(root).mapping;
	      applyFootnoteNumber(root, mapping);
	    }
	    defs = removeDefinitions(root);
	    if (options.footnotes) {
	      appendFootnoteDefinitionCollection(root, defs);
	    }
	    root = wrapHTMLNodeInParagraph(root);
	    root = sanitizeTag(root);
	    return [root, defs];
	  };
	
	  defineFootnoteNumber = function(node, num, mapping) {
	    var child, id, j, len1, ref;
	    if (num == null) {
	      num = 1;
	    }
	    if (mapping == null) {
	      mapping = {};
	    }
	    ref = node.children;
	    for (j = 0, len1 = ref.length; j < len1; j++) {
	      child = ref[j];
	      if (child.type === 'footnoteReference') {
	        id = child.identifier;
	        if (mapping[id] == null) {
	          mapping[id] = num;
	          num += 1;
	        }
	        child.footnoteNumber = mapping[id];
	      }
	      if (child.children) {
	        num = defineFootnoteNumber(child, num, mapping).maxNumber;
	      }
	    }
	    return {
	      mapping: mapping,
	      maxNumber: num
	    };
	  };
	
	  applyFootnoteNumber = function(node, mapping) {
	    var child, id, isFootnoteDefLike, j, len1, ref, results;
	    if (node.children == null) {
	      return;
	    }
	    ref = node.children;
	    results = [];
	    for (j = 0, len1 = ref.length; j < len1; j++) {
	      child = ref[j];
	      isFootnoteDefLike = child.type === 'definition' && /^[^]/.test(child.identifier);
	      if (child.type === 'footnoteDefinition' || isFootnoteDefLike) {
	        id = isFootnoteDefLike ? child.identifier.slice(1) : child.identifier;
	        child.footnoteNumber = mapping[id] || 0;
	      }
	      results.push(applyFootnoteNumber(child, mapping));
	    }
	    return results;
	  };
	
	  appendFootnoteDefinitionCollection = function(node, defs) {
	    var def, footnoteDefs;
	    footnoteDefs = (function() {
	      var j, len1, results;
	      results = [];
	      for (j = 0, len1 = defs.length; j < len1; j++) {
	        def = defs[j];
	        if ((def.footnoteNumber != null) && def.footnoteNumber > 0) {
	          results.push(def);
	        }
	      }
	      return results;
	    })();
	    footnoteDefs.sort(function(a, b) {
	      return a.footnoteNumber - b.footnoteNumber;
	    });
	    if (footnoteDefs.length > 0) {
	      return node.children.push({
	        type: 'footnoteDefinitionCollection',
	        children: footnoteDefs
	      });
	    }
	  };
	
	  removeDefinitions = function(node) {
	    var child, childDefs, children, defs, j, len1, ref, ref1;
	    if (node.children == null) {
	      return [];
	    }
	    children = [];
	    defs = [];
	    ref = node.children;
	    for (j = 0, len1 = ref.length; j < len1; j++) {
	      child = ref[j];
	      if ((ref1 = child.type) === 'definition' || ref1 === 'footnoteDefinition') {
	        defs.push(child);
	      } else {
	        childDefs = removeDefinitions(child);
	        Array.prototype.push.apply(defs, childDefs);
	        children.push(child);
	      }
	    }
	    node.children = children;
	    return defs;
	  };
	
	  convertPreToRawHTML = function(root) {
	    var j, len1, node, ref, results;
	    ref = root.children;
	    results = [];
	    for (j = 0, len1 = ref.length; j < len1; j++) {
	      node = ref[j];
	      if (node.type === 'html' && /^<pre[ >][^]*<\/pre>$/i.test(node.value)) {
	        results.push(node.subtype = 'raw');
	      } else {
	        results.push(void 0);
	      }
	    }
	    return results;
	  };
	
	  convertScatteredPreToRawHTML = function(root, sourceText) {
	    var endPreNode, i, isEnd, isStart, j, k, len1, len2, node, offset, paraLastNode, pre, preTexts, rawHTML, rawHTMLNode, ref, results, sliceEnd, sliceStart, sourceLines, start, startParaIndex, startPreNode;
	    preTexts = [];
	    startPreNode = null;
	    startParaIndex = null;
	    sourceLines = null;
	    ref = root.children;
	    for (i = j = 0, len1 = ref.length; j < len1; i = ++j) {
	      node = ref[i];
	      isStart = node.type === 'html' && /^<pre[ >]/i.test(node.value);
	      if (isStart) {
	        startPreNode = node;
	        startParaIndex = i;
	      }
	      paraLastNode = null;
	      isEnd = ((startPreNode != null) && node.type === 'html' && /<\/pre>$/i.test(node.value)) || ((startPreNode != null) && node.type === 'paragraph' && (paraLastNode = node.children[node.children.length - 1]) && paraLastNode.type === 'html' && /<\/pre>$/i.test(paraLastNode.value));
	      if (isEnd) {
	        endPreNode = paraLastNode != null ? paraLastNode : node;
	        if (sourceLines == null) {
	          sourceLines = sourceText.split(/^/m);
	        }
	        sliceStart = startIndexFromPosition(startPreNode.position, sourceLines);
	        sliceEnd = endIndexFromPosition(endPreNode.position, sourceLines);
	        rawHTML = sourceText.slice(sliceStart, sliceEnd);
	        preTexts.push({
	          startParaIndex: startParaIndex,
	          paraCount: i - startParaIndex + 1,
	          rawHTML: rawHTML
	        });
	        startPreNode = null;
	        startParaIndex = null;
	      }
	    }
	    offset = 0;
	    results = [];
	    for (k = 0, len2 = preTexts.length; k < len2; k++) {
	      pre = preTexts[k];
	      rawHTMLNode = {
	        type: 'html',
	        subtype: 'raw',
	        value: pre.rawHTML
	      };
	      start = pre.startParaIndex - offset;
	      root.children.splice(start, pre.paraCount, rawHTMLNode);
	      results.push(offset = pre.paraCount - 1);
	    }
	    return results;
	  };
	
	  startIndexFromPosition = function(pos, lines) {
	    var i, index, j, ref;
	    index = 0;
	    for (i = j = 0, ref = pos.start.line - 1; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
	      index += lines[i].length;
	    }
	    index += pos.start.column - 1;
	    return index;
	  };
	
	  endIndexFromPosition = function(pos, lines) {
	    var i, index, j, ref;
	    index = 0;
	    for (i = j = 0, ref = pos.end.line - 1; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
	      index += lines[i].length;
	    }
	    index += pos.end.column - 1;
	    return index;
	  };
	
	  foldHTMLNodes = function(nodes) {
	    var children, folded, index, j, k, len1, len2, node, pNode, processedNodes, startTag, startTagIndex;
	    processedNodes = [];
	    for (j = 0, len1 = nodes.length; j < len1; j++) {
	      node = nodes[j];
	      if (node.subtype === 'end') {
	        startTagIndex = null;
	        for (index = k = 0, len2 = processedNodes.length; k < len2; index = ++k) {
	          pNode = processedNodes[index];
	          if (pNode.subtype === 'start' && pNode.tagName === node.tagName) {
	            startTagIndex = index;
	          }
	        }
	        if (startTagIndex == null) {
	          processedNodes.push(node);
	          continue;
	        }
	        startTag = processedNodes[startTagIndex];
	        children = processedNodes.splice(startTagIndex).slice(1);
	        folded = {
	          type: 'html',
	          subtype: 'folded',
	          tagName: startTag.tagName,
	          startTag: startTag,
	          endTag: node,
	          children: children
	        };
	        processedNodes.push(folded);
	      } else {
	        if (node.children != null) {
	          node.children = foldHTMLNodes(node.children);
	        }
	        processedNodes.push(node);
	      }
	    }
	    return processedNodes;
	  };
	
	  decomposeHTMLNodes = function(nodes) {
	    var fragmentNodes, j, len1, node, processedNodes;
	    processedNodes = [];
	    for (j = 0, len1 = nodes.length; j < len1; j++) {
	      node = nodes[j];
	      if (node.type === 'html' && node.subtype === 'raw') {
	        processedNodes.push(node);
	      } else if (node.type === 'html') {
	        fragmentNodes = decomposeHTMLNode(node);
	        if (fragmentNodes != null) {
	          processedNodes.push.apply(processedNodes, fragmentNodes);
	        } else {
	          node.subtype = 'malformed';
	          processedNodes.push(node);
	        }
	      } else {
	        if (node.children != null) {
	          node.children = decomposeHTMLNodes(node.children);
	        }
	        processedNodes.push(node);
	      }
	    }
	    return processedNodes;
	  };
	
	  decomposeHTMLNode = function(node) {
	    var fragments, value;
	    value = node.value;
	    if (node.position.start.line === node.position.end.line) {
	      value = value.replace(/\n\n/, '');
	    }
	    fragments = decomposeHTMLString(value);
	    return fragments != null ? fragments.map(createNodeFromHTMLFragment) : void 0;
	  };
	
	  decomposeHTMLString = function(str) {
	    var matches, sumLength;
	    if (str === '') {
	      return null;
	    }
	    matches = str.match(/<[^>]*>|[^<>]+/g);
	    sumLength = matches.reduce((function(len, s) {
	      return len + s.length;
	    }), 0);
	    if (sumLength !== str.length) {
	      return null;
	    } else {
	      return matches;
	    }
	  };
	
	  createNodeFromHTMLFragment = function(str) {
	    var j, name, ref, ref1, slash, subtype;
	    if (/^[^<]/.test(str)) {
	      return {
	        type: 'text',
	        value: str
	      };
	    }
	    ref1 = (ref = /^<(\/?)([0-9A-Z]+)/i.exec(str)) != null ? ref : [], j = ref1.length - 2, slash = ref1[j++], name = ref1[j++];
	    subtype = name == null ? 'special' : slash === '/' ? 'end' : isVoidElement(name) ? 'void' : 'start';
	    return {
	      type: 'html',
	      subtype: subtype,
	      tagName: name,
	      value: str
	    };
	  };
	
	  isVoidElement = function(elementName) {
	    var voidElementNames;
	    voidElementNames = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
	    return voidElementNames.indexOf(elementName) !== -1;
	  };
	
	  wrapHTMLNodeInParagraph = function(root) {
	    var child, children, j, len1, ref;
	    children = [];
	    ref = root.children;
	    for (j = 0, len1 = ref.length; j < len1; j++) {
	      child = ref[j];
	      if (child.type === 'html') {
	        children.push({
	          type: 'paragraph',
	          children: [child]
	        });
	      } else {
	        children.push(child);
	      }
	    }
	    root.children = children;
	    return root;
	  };
	
	  ALLOWED_TAG_NAMES = ['a', 'abbr', 'b', 'br', 'cite', 'code', 'del', 'dfn', 'em', 'i', 'img', 'input', 'ins', 'kbd', 'mark', 'ruby', 'rp', 'rt', 'q', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'u', 'wbr'];
	
	  sanitizeTag = function(node) {
	    var child, children, j, len1, ref, ref1;
	    if (node.children == null) {
	      return node;
	    }
	    children = [];
	    ref = node.children;
	    for (j = 0, len1 = ref.length; j < len1; j++) {
	      child = ref[j];
	      if (child.subtype === 'folded' && (ref1 = child.tagName, indexOf.call(ALLOWED_TAG_NAMES, ref1) < 0)) {
	        children.push(child.startTag);
	        Array.prototype.push.apply(children, sanitizeTag(child).children);
	        children.push(child.endTag);
	      } else {
	        children.push(sanitizeTag(child));
	      }
	    }
	    node.children = children;
	    return node;
	  };
	
	  module.exports = preprocess;
	
	}).call(this);


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(1)['default'];
	
	var _get = __webpack_require__(120)['default'];
	
	var _createClass = __webpack_require__(6)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _actionsApp = __webpack_require__(23);
	
	var _lodashLangIsNull = __webpack_require__(92);
	
	var _lodashLangIsNull2 = _interopRequireDefault(_lodashLangIsNull);
	
	var _lodashLangIsUndefined = __webpack_require__(191);
	
	var _lodashLangIsUndefined2 = _interopRequireDefault(_lodashLangIsUndefined);
	
	var _lodashCollectionForEach = __webpack_require__(192);
	
	var _lodashCollectionForEach2 = _interopRequireDefault(_lodashCollectionForEach);
	
	var _lodashCollectionForEachRight = __webpack_require__(86);
	
	var _lodashCollectionForEachRight2 = _interopRequireDefault(_lodashCollectionForEachRight);
	
	var _lodashUtilityNoop = __webpack_require__(162);
	
	var _lodashUtilityNoop2 = _interopRequireDefault(_lodashUtilityNoop);
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var Preview = (function (_Component) {
	  function Preview(props) {
	    _classCallCheck(this, Preview);
	
	    _get(Object.getPrototypeOf(Preview.prototype), 'constructor', this).call(this, props);
	    this.onReset = this.onReset.bind(this);
	  }
	
	  _inherits(Preview, _Component);
	
	  _createClass(Preview, [{
	    key: 'render',
	    value: function render() {
	      var hidden = this.props.hidden;
	
	      var json = this.getJSON();
	
	      return React.createElement(
	        'div',
	        { className: _classnames2['default']('preview', { hidden: hidden }) },
	        React.createElement(
	          'button',
	          { className: 'pure-button preview__button', onClick: this.onReset },
	          React.createElement('i', { className: 'fa fa-trash-o' }),
	          'reset all'
	        ),
	        React.createElement(
	          'pre',
	          { className: 'preview__json' },
	          json
	        )
	      );
	    }
	  }, {
	    key: 'onReset',
	    value: function onReset() {
	      this.props.onAction(_actionsApp.reset());
	    }
	  }, {
	    key: 'getJSON',
	    value: function getJSON() {
	      var _this = this;
	
	      var _props = this.props;
	      var target = _props.target;
	      var indent = _props.indent;
	      var ecmaOrParser = _props.ecmaOrParser;
	
	      var data = {};
	      data.env = target.env;
	      data.globals = target.globals;
	      if (ecmaOrParser === 'parser' && target.parser) {
	        data.parser = target.parser;
	      } else if (ecmaOrParser === 'ecmaFeatures' && target.ecmaFeatures) {
	        data.ecmaFeatures = target.ecmaFeatures;
	      }
	
	      data.rules = {};
	      _lodashCollectionForEach2['default'](target.rules, function (args, name) {
	        return data.rules[name] = _this.normalizeRuleArgs(args);
	      });
	
	      return JSON.stringify(data, null, indent);
	    }
	  }, {
	    key: 'normalizeRuleArgs',
	    value: function normalizeRuleArgs(args) {
	      if (args[0] == 0) {
	        return 0;
	      }
	
	      var newArgs = [];
	      _lodashCollectionForEachRight2['default'](args, function (value, i) {
	        if (_lodashLangIsNull2['default'](value) || _lodashLangIsUndefined2['default'](value)) {
	          return;
	        }
	        newArgs[i] = value;
	      });
	
	      if (newArgs.length === 1) {
	        return newArgs[0] - 0;
	      }
	
	      return newArgs;
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      indent: 2,
	      onRest: _lodashUtilityNoop2['default']
	    },
	    enumerable: true
	  }]);
	
	  return Preview;
	})(_react.Component);
	
	exports['default'] = Preview;
	module.exports = exports['default'];

/***/ },
/* 191 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	 * @example
	 *
	 * _.isUndefined(void 0);
	 * // => true
	 *
	 * _.isUndefined(null);
	 * // => false
	 */
	function isUndefined(value) {
	  return value === undefined;
	}
	
	module.exports = isUndefined;


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(141),
	    baseEach = __webpack_require__(76),
	    createForEach = __webpack_require__(91);
	
	/**
	 * Iterates over elements of `collection` invoking `iteratee` for each element.
	 * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	 * (value, index|key, collection). Iteratee functions may exit iteration early
	 * by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length" property
	 * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	 * may be used for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @alias each
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Array|Object|string} Returns `collection`.
	 * @example
	 *
	 * _([1, 2]).forEach(function(n) {
	 *   console.log(n);
	 * }).value();
	 * // => logs each value from left to right and returns the array
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	 *   console.log(n, key);
	 * });
	 * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	 */
	var forEach = createForEach(arrayEach, baseEach);
	
	module.exports = forEach;


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(1)['default'];
	
	var _get = __webpack_require__(120)['default'];
	
	var _createClass = __webpack_require__(6)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _Rule = __webpack_require__(194);
	
	var _Rule2 = _interopRequireDefault(_Rule);
	
	var _lodashLangClone = __webpack_require__(139);
	
	var _lodashLangClone2 = _interopRequireDefault(_lodashLangClone);
	
	var _lodashLangIsNull = __webpack_require__(92);
	
	var _lodashLangIsNull2 = _interopRequireDefault(_lodashLangIsNull);
	
	var _lodashLangIsArray = __webpack_require__(33);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	var _lodashLangIsUndefined = __webpack_require__(191);
	
	var _lodashLangIsUndefined2 = _interopRequireDefault(_lodashLangIsUndefined);
	
	var _lodashUtilityNoop = __webpack_require__(162);
	
	var _lodashUtilityNoop2 = _interopRequireDefault(_lodashUtilityNoop);
	
	'use strict';
	
	var Rules = (function (_Component) {
	  function Rules(props) {
	    _classCallCheck(this, Rules);
	
	    _get(Object.getPrototypeOf(Rules.prototype), 'constructor', this).call(this, props);
	    this.id = 'rules';
	  }
	
	  _inherits(Rules, _Component);
	
	  _createClass(Rules, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var _props = this.props;
	      var schema = _props.schema;
	      var value = _props.value;
	
	      var items = schema.map(function (schema) {
	        return React.createElement(_Rule2['default'], {
	          key: '' + _this.id + '-' + schema.name,
	          name: schema.name,
	          schema: schema.schema,
	          value: value[schema.name],
	          onAction: _this.props.onAction });
	      });
	
	      return React.createElement(List, { items: items });
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      schema: _react.PropTypes.array.isRequired,
	      value: _react.PropTypes.object,
	      onAction: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: { rules: {} },
	    enumerable: true
	  }]);
	
	  return Rules;
	})(_react.Component);
	
	var List = (function (_Component2) {
	  function List() {
	    _classCallCheck(this, List);
	
	    if (_Component2 != null) {
	      _Component2.apply(this, arguments);
	    }
	  }
	
	  _inherits(List, _Component2);
	
	  _createClass(List, [{
	    key: 'render',
	    value: function render() {
	      var items = this.props.items;
	
	      var lists = items.map(function (item, i) {
	        return React.createElement(
	          'li',
	          { key: 'rule-list-item-' + i, className: 'rule-list__item' },
	          item
	        );
	      });
	
	      return React.createElement(
	        'ul',
	        { className: 'rule-list' },
	        lists
	      );
	    }
	  }]);
	
	  return List;
	})(_react.Component);
	
	exports['default'] = Rules;
	module.exports = exports['default'];

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _inherits = __webpack_require__(1)["default"];
	
	var _get = __webpack_require__(120)["default"];
	
	var _createClass = __webpack_require__(6)["default"];
	
	var _classCallCheck = __webpack_require__(9)["default"];
	
	var _Object$defineProperty = __webpack_require__(7)["default"];
	
	var _interopRequireDefault = __webpack_require__(10)["default"];
	
	_Object$defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _actionsRule = __webpack_require__(117);
	
	var _actionsRule2 = _interopRequireDefault(_actionsRule);
	
	var _lodashLangIsArray = __webpack_require__(33);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	var _lodashLangClone = __webpack_require__(139);
	
	var _lodashLangClone2 = _interopRequireDefault(_lodashLangClone);
	
	var _lodashLangIsNull = __webpack_require__(92);
	
	var _lodashLangIsNull2 = _interopRequireDefault(_lodashLangIsNull);
	
	var _lodashLangIsUndefined = __webpack_require__(191);
	
	var _lodashLangIsUndefined2 = _interopRequireDefault(_lodashLangIsUndefined);
	
	var _lodashCollectionForEachRight = __webpack_require__(86);
	
	var _lodashCollectionForEachRight2 = _interopRequireDefault(_lodashCollectionForEachRight);
	
	var _lodashUtilityNoop = __webpack_require__(162);
	
	var _lodashUtilityNoop2 = _interopRequireDefault(_lodashUtilityNoop);
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _uniqueid = __webpack_require__(83);
	
	var _uniqueid2 = _interopRequireDefault(_uniqueid);
	
	var _utilNormalizeRuleSchema = __webpack_require__(195);
	
	var _utilNormalizeRuleSchema2 = _interopRequireDefault(_utilNormalizeRuleSchema);
	
	var _RuleArguments = __webpack_require__(196);
	
	var _RuleArguments2 = _interopRequireDefault(_RuleArguments);
	
	var Rule = (function (_Component) {
	  function Rule(props) {
	    _classCallCheck(this, Rule);
	
	    _get(Object.getPrototypeOf(Rule.prototype), "constructor", this).call(this, props);
	    this.onChangeArgs = this.onChangeArgs.bind(this);
	    this.onChangeStatus = this.onChangeStatus.bind(this);
	    this.onClickTrash = this.onClickTrash.bind(this);
	    this.onClickHelp = this.onClickHelp.bind(this);
	  }
	
	  _inherits(Rule, _Component);
	
	  _createClass(Rule, [{
	    key: "render",
	    value: function render() {
	      var name = this.props.name;
	
	      var status = this.getStatus();
	      var args = this.getArgs();
	      var schema = this.getSchema();
	      var disabled = !status;
	      var trashDisabled = !this.props.value;
	
	      return React.createElement(
	        "div",
	        { className: "rule" },
	        React.createElement(
	          Header,
	          null,
	          React.createElement(
	            "span",
	            { className: "rule__name" },
	            name
	          ),
	          React.createElement(TrashLink, { disabled: trashDisabled, onClick: this.onClickTrash }),
	          React.createElement(HelpLink, { onClick: this.onClickHelp }),
	          React.createElement(Status, { value: status, name: name, onChange: this.onChangeStatus })
	        ),
	        React.createElement(_RuleArguments2["default"], {
	          ruleName: name,
	          schema: schema,
	          disabled: disabled,
	          values: args,
	          onChange: this.onChangeArgs })
	      );
	    }
	  }, {
	    key: "shouldComponentUpdate",
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.value !== nextProps.value;
	    }
	  }, {
	    key: "getStatus",
	    value: function getStatus() {
	      if (_lodashLangIsArray2["default"](this.props.value)) {
	        return this.props.value[0];
	      }
	      return false;
	    }
	  }, {
	    key: "getArgs",
	    value: function getArgs() {
	      if (_lodashLangIsArray2["default"](this.props.value)) {
	        return this.props.value.slice(1);
	      }
	      return [];
	    }
	  }, {
	    key: "getSchema",
	    value: function getSchema() {
	      return _utilNormalizeRuleSchema2["default"](_lodashLangClone2["default"](this.props.schema), this.props.name);
	    }
	  }, {
	    key: "onChangeStatus",
	    value: function onChangeStatus(e) {
	      var name = this.props.name;
	
	      this.emitAction(_actionsRule2["default"].changeStatus(name, e.value));
	    }
	  }, {
	    key: "onChangeArgs",
	    value: function onChangeArgs(e) {
	      var name = this.props.name;
	
	      this.emitAction(_actionsRule2["default"].changeArgs(name, e.values));
	    }
	  }, {
	    key: "onClickTrash",
	    value: function onClickTrash(e) {
	      e.preventDefault();
	      var name = this.props.name;
	
	      this.emitAction(_actionsRule2["default"].remove(name));
	    }
	  }, {
	    key: "onClickHelp",
	    value: function onClickHelp(e) {
	      e.preventDefault();
	      var name = this.props.name;
	
	      this.emitAction(_actionsRule2["default"].openDocument(name));
	    }
	  }, {
	    key: "emitAction",
	    value: function emitAction(action) {
	      this.props.onAction(action);
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      name: _react.PropTypes.string.isRequired,
	      schema: _react.PropTypes.any,
	      value: _react.PropTypes.any,
	      onAction: _react.PropTypes.func,
	      onClickHelp: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: "defaultProps",
	    value: {
	      onAction: _lodashUtilityNoop2["default"]
	    },
	    enumerable: true
	  }]);
	
	  return Rule;
	})(_react.Component);
	
	exports["default"] = Rule;
	
	var Header = (function (_Component2) {
	  function Header() {
	    _classCallCheck(this, Header);
	
	    if (_Component2 != null) {
	      _Component2.apply(this, arguments);
	    }
	  }
	
	  _inherits(Header, _Component2);
	
	  _createClass(Header, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "header",
	        { className: "rule__header" },
	        this.props.children
	      );
	    }
	  }]);
	
	  return Header;
	})(_react.Component);
	
	var HelpLink = (function (_Component3) {
	  function HelpLink() {
	    _classCallCheck(this, HelpLink);
	
	    if (_Component3 != null) {
	      _Component3.apply(this, arguments);
	    }
	  }
	
	  _inherits(HelpLink, _Component3);
	
	  _createClass(HelpLink, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "a",
	        {
	          title: "help",
	          className: "rule__help",
	          href: "javascript:void(0);",
	          onClick: this.props.onClick },
	        React.createElement("i", { className: "fa fa-question" })
	      );
	    }
	  }], [{
	    key: "propTypes",
	    value: { onClick: _react.PropTypes.func },
	    enumerable: true
	  }, {
	    key: "defaultProps",
	    value: { onClick: _lodashUtilityNoop2["default"] },
	    enumerable: true
	  }]);
	
	  return HelpLink;
	})(_react.Component);
	
	var TrashLink = (function (_Component4) {
	  function TrashLink() {
	    _classCallCheck(this, TrashLink);
	
	    if (_Component4 != null) {
	      _Component4.apply(this, arguments);
	    }
	  }
	
	  _inherits(TrashLink, _Component4);
	
	  _createClass(TrashLink, [{
	    key: "render",
	    value: function render() {
	      var disabled = this.props.disabled;
	
	      var className = _classnames2["default"]("rule__trash", {
	        "rule__trash--is-disabled": disabled
	      });
	
	      return React.createElement(
	        "a",
	        {
	          title: "reset",
	          className: className,
	          href: "javascript:void(0);",
	          onClick: this.props.onClick },
	        React.createElement("i", { className: "fa fa-trash-o" })
	      );
	    }
	  }], [{
	    key: "propTypes",
	    value: { onClick: _react.PropTypes.func },
	    enumerable: true
	  }, {
	    key: "defaultProps",
	    value: { onClick: _lodashUtilityNoop2["default"] },
	    enumerable: true
	  }]);
	
	  return TrashLink;
	})(_react.Component);
	
	var Status = (function (_Component5) {
	  function Status(props) {
	    _classCallCheck(this, Status);
	
	    _get(Object.getPrototypeOf(Status.prototype), "constructor", this).call(this, props);
	    this.id = _uniqueid2["default"]({ prefix: "rule-status" });
	    this.onChecked = this.onChecked.bind(this);
	  }
	
	  _inherits(Status, _Component5);
	
	  _createClass(Status, [{
	    key: "render",
	    value: function render() {
	      var _this = this;
	
	      var _props = this.props;
	      var name = _props.name;
	      var value = _props.value;
	
	      var items = [0, 1, 2].map(function (v) {
	        return React.createElement(
	          "label",
	          null,
	          React.createElement("input", {
	            className: "rule-status__radio",
	            type: "radio",
	            name: _this.id,
	            value: v,
	            checked: v === value,
	            onChange: _this.onChecked }),
	          React.createElement(
	            "span",
	            { className: "rule-status__text" },
	            v
	          )
	        );
	      });
	
	      return React.createElement(
	        "ul",
	        { className: "rule-status" },
	        items.map(function (item, i) {
	          return React.createElement(
	            "li",
	            {
	              key: "" + _this.id + "." + i,
	              className: "rule-status__item" },
	            item
	          );
	        })
	      );
	    }
	  }, {
	    key: "onChecked",
	    value: function onChecked(e) {
	      var name = this.props.name;
	      var value = e.target.value;
	
	      this.props.onChange({ name: name, value: value - 0 });
	    }
	  }]);
	
	  return Status;
	})(_react.Component);
	
	module.exports = exports["default"];

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _lodashLangIsArray = __webpack_require__(33);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	var _lodashCollectionMap = __webpack_require__(40);
	
	var _lodashCollectionMap2 = _interopRequireDefault(_lodashCollectionMap);
	
	var _lodashArrayZipObject = __webpack_require__(32);
	
	var _lodashArrayZipObject2 = _interopRequireDefault(_lodashArrayZipObject);
	
	'use strict';
	
	var quotePropsSchema = [{
	  type: 'enum',
	  options: ['always', 'as-needed', 'consistent', 'consistent-as-needed']
	}, {
	  type: 'object',
	  properties: {
	    keywords: { type: 'bool' },
	    unnecessary: { type: 'bool' },
	    numbers: { type: 'bool' }
	  },
	  additionalProperties: false
	}];
	
	function normalizeRuleSchema(schema) {
	  var name = arguments[1] === undefined ? '' : arguments[1];
	
	  // TODO: parse "anyOf"
	  if (name === 'quote-props') {
	    return quotePropsSchema;
	  }
	
	  schema = _lodashLangIsArray2['default'](schema) ? schema : [schema];
	  return schema.map(normalizeArgDef);
	}
	
	function normalizeArgDef(argDef) {
	  if (argDef['enum']) {
	    return { type: 'enum', options: argDef['enum'] };
	  }
	
	  var oneOf = argDef.oneOf;
	  var type = argDef.type;
	  var properties = argDef.properties;
	
	  if (oneOf) {
	    return {
	      type: 'oneOf',
	      defs: normalizeRuleSchema(oneOf)
	    };
	  } else if (_lodashLangIsArray2['default'](type)) {
	    var types = argDef.type;
	    var toDef = function toDef(type) {
	      return type === 'object' ? { type: type, properties: argDef.properties } : { type: type };
	    };
	
	    return {
	      type: 'oneOf',
	      defs: types.map(toDef).map(normalizeArgDef)
	    };
	  } else if (typeof type === 'string') {
	    type = type.replace('boolean', 'bool');
	  }
	
	  if (type === 'object') {
	    return { type: type, properties: normalizeProperties(argDef.properties) };
	  }
	
	  return { type: type };
	}
	
	function normalizeType(type) {
	  if (typeof type === 'string') {
	    type = type.replace('boolean', 'bool');
	  }
	  return type;
	}
	
	function normalizeProperties(properties) {
	  return _lodashArrayZipObject2['default'](_lodashCollectionMap2['default'](properties, function (def, key) {
	    return [key, normalizeArgDef(def)];
	  }));
	}
	
	exports['default'] = normalizeRuleSchema;
	module.exports = exports['default'];

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(1)['default'];
	
	var _get = __webpack_require__(120)['default'];
	
	var _createClass = __webpack_require__(6)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lodashUtilityNoop = __webpack_require__(162);
	
	var _lodashUtilityNoop2 = _interopRequireDefault(_lodashUtilityNoop);
	
	var _lodashLangClone = __webpack_require__(139);
	
	var _lodashLangClone2 = _interopRequireDefault(_lodashLangClone);
	
	var _RuleArgument = __webpack_require__(197);
	
	var _RuleArgument2 = _interopRequireDefault(_RuleArgument);
	
	'use strict';
	
	var Arguments = (function (_Component) {
	  function Arguments(props) {
	    _classCallCheck(this, Arguments);
	
	    _get(Object.getPrototypeOf(Arguments.prototype), 'constructor', this).call(this, props);
	    this.emitChange = this.emitChange.bind(this);
	  }
	
	  _inherits(Arguments, _Component);
	
	  _createClass(Arguments, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var _props = this.props;
	      var ruleName = _props.ruleName;
	      var schema = _props.schema;
	      var values = _props.values;
	      var disabled = _props.disabled;
	
	      if (!schema.length) {
	        return null;
	      }
	
	      var getProps = function getProps(def, index) {
	        return {
	          ruleName: ruleName, index: index, def: def, disabled: disabled,
	          value: values[index],
	          onChange: _this.emitChange
	        };
	      };
	      var getArgument = function getArgument(props) {
	        return React.createElement(_RuleArgument2['default'], props);
	      };
	      var children = schema.map(getProps).map(getArgument);
	
	      var className = _classnames2['default']('rule__body rule-args', disabled && 'rule__body--is-disabled');
	
	      var getKey = function getKey(index) {
	        return 'rule-arg-list__item.' + ruleName + '.' + index;
	      };
	      return React.createElement(
	        'article',
	        { className: className },
	        React.createElement(
	          'header',
	          { className: 'rule-arg__header' },
	          React.createElement(
	            'h5',
	            { className: 'rule-arg__title' },
	            ruleName,
	            ' arguments'
	          )
	        ),
	        React.createElement(
	          'ul',
	          { className: 'rule-arg-list' },
	          children.map(function (child, i) {
	            return React.createElement(
	              'li',
	              { key: getKey(i), className: 'rule-arg-list__item' },
	              child
	            );
	          })
	        )
	      );
	    }
	  }, {
	    key: 'emitChange',
	    value: function emitChange(e) {
	      var values = _lodashLangClone2['default'](this.props.values);
	      values[e.index] = e.value;
	      this.props.onChange({ values: values });
	    }
	  }], [{
	    key: 'defaultProps',
	    value: { onChange: _lodashUtilityNoop2['default'] },
	    enumerable: true
	  }]);
	
	  return Arguments;
	})(_react.Component);
	
	exports['default'] = Arguments;
	module.exports = exports['default'];

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = __webpack_require__(25)["default"];
	
	var _inherits = __webpack_require__(1)["default"];
	
	var _get = __webpack_require__(120)["default"];
	
	var _createClass = __webpack_require__(6)["default"];
	
	var _classCallCheck = __webpack_require__(9)["default"];
	
	var _Object$defineProperty = __webpack_require__(7)["default"];
	
	var _interopRequireDefault = __webpack_require__(10)["default"];
	
	_Object$defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _lodashLangClone = __webpack_require__(139);
	
	var _lodashLangClone2 = _interopRequireDefault(_lodashLangClone);
	
	var _lodashLangIsObject = __webpack_require__(37);
	
	var _lodashLangIsObject2 = _interopRequireDefault(_lodashLangIsObject);
	
	var _lodashLangIsArray = __webpack_require__(33);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	var _lodashCollectionEach = __webpack_require__(198);
	
	var _lodashCollectionEach2 = _interopRequireDefault(_lodashCollectionEach);
	
	var _lodashUtilityNoop = __webpack_require__(162);
	
	var _lodashUtilityNoop2 = _interopRequireDefault(_lodashUtilityNoop);
	
	var _uniqueid = __webpack_require__(83);
	
	var _uniqueid2 = _interopRequireDefault(_uniqueid);
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _RuleArgumentArray = __webpack_require__(199);
	
	var _RuleArgumentArray2 = _interopRequireDefault(_RuleArgumentArray);
	
	var RuleArgument = (function (_Component) {
	  function RuleArgument(props) {
	    _classCallCheck(this, RuleArgument);
	
	    _get(Object.getPrototypeOf(RuleArgument.prototype), "constructor", this).call(this, props);
	    this.onChange = this.onChange.bind(this);
	  }
	
	  _inherits(RuleArgument, _Component);
	
	  _createClass(RuleArgument, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var ruleName = _props.ruleName;
	      var def = _props.def;
	      var value = _props.value;
	      var index = _props.index;
	      var disabled = _props.disabled;
	      var onChange = _props.onChange;
	
	      return React.createElement(
	        "div",
	        { className: "rule-arg" },
	        React.createElement(
	          "div",
	          { className: "rule-arg__index" },
	          React.createElement(
	            "span",
	            { className: "rule-arg__index-no" },
	            index + 1
	          )
	        ),
	        React.createElement(
	          "div",
	          { className: "rule-arg__input" },
	          React.createElement(RuleArgumentInput, {
	            def: def,
	            value: value,
	            disabled: disabled,
	            onChange: this.onChange })
	        )
	      );
	    }
	  }, {
	    key: "onChange",
	    value: function onChange(value) {
	      this.props.onChange({ index: this.props.index, value: value });
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      ruleName: _react.PropTypes.string.isRequired,
	      def: _react.PropTypes.object.isRequired,
	      value: _react.PropTypes.any,
	      index: _react.PropTypes.number,
	      disabled: _react.PropTypes.bool,
	      onChange: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: "defaultProps",
	    value: {
	      disabled: false,
	      onChange: _lodashUtilityNoop2["default"]
	    },
	    enumerable: true
	  }]);
	
	  return RuleArgument;
	})(_react.Component);
	
	exports["default"] = RuleArgument;
	
	var RuleArgumentInput = (function (_Component2) {
	  function RuleArgumentInput(props) {
	    _classCallCheck(this, RuleArgumentInput);
	
	    _get(Object.getPrototypeOf(RuleArgumentInput.prototype), "constructor", this).call(this, props);
	    this.currentValue = props.value || null;
	    this.onChange = this.onChange.bind(this);
	  }
	
	  _inherits(RuleArgumentInput, _Component2);
	
	  _createClass(RuleArgumentInput, [{
	    key: "render",
	    value: function render() {
	      var _props2 = this.props;
	      var value = _props2.value;
	      var def = _props2.def;
	      var disabled = _props2.disabled;
	
	      var props = {
	        value: value,
	        disabled: disabled,
	        onChange: this.onChange
	      };
	
	      switch (def.type) {
	        case "enum":
	          return React.createElement(Enum, _extends({}, props, { options: def.options }));
	        case "oneOf":
	          return React.createElement(OneOf, _extends({}, props, { defs: def.defs }));
	        case "object":
	          return React.createElement(ObjectValue, _extends({}, props, { properties: def.properties }));
	        case "integer":
	          return React.createElement(Integer, props);
	        case "string":
	          return React.createElement(String, props);
	        case "bool":
	          return React.createElement(Bool, props);
	        case "array":
	          return React.createElement(_RuleArgumentArray2["default"], props);
	      }
	      return null;
	    }
	  }, {
	    key: "onChange",
	    value: function onChange(value) {
	      this.currentValue = value;
	      this.props.onChange(value);
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      value: _react.PropTypes.any,
	      disabled: _react.PropTypes.bool,
	      onChange: _react.PropTypes.func
	    },
	    enumerable: true
	  }]);
	
	  return RuleArgumentInput;
	})(_react.Component);
	
	var Integer = (function (_Component3) {
	  function Integer() {
	    _classCallCheck(this, Integer);
	
	    if (_Component3 != null) {
	      _Component3.apply(this, arguments);
	    }
	  }
	
	  _inherits(Integer, _Component3);
	
	  _createClass(Integer, [{
	    key: "render",
	    value: function render() {
	      return React.createElement("input", {
	        className: "rule-arg-integer",
	        type: "number",
	        placeholder: "integer",
	        value: this.props.value,
	        disabled: this.props.disabled,
	        onChange: this.onChange.bind(this) });
	    }
	  }, {
	    key: "onChange",
	    value: function onChange(e) {
	      this.props.onChange(e.target.value - 0);
	    }
	  }]);
	
	  return Integer;
	})(_react.Component);
	
	var Bool = (function (_Component4) {
	  function Bool() {
	    _classCallCheck(this, Bool);
	
	    if (_Component4 != null) {
	      _Component4.apply(this, arguments);
	    }
	  }
	
	  _inherits(Bool, _Component4);
	
	  _createClass(Bool, [{
	    key: "render",
	    value: function render() {
	      return React.createElement("input", {
	        className: "rule-arg-bool",
	        type: "checkbox",
	        checked: this.props.value,
	        disabled: this.props.disabled,
	        onChange: this.onChange.bind(this) });
	    }
	  }, {
	    key: "onChange",
	    value: function onChange(e) {
	      this.props.onChange(e.target.checked);
	    }
	  }]);
	
	  return Bool;
	})(_react.Component);
	
	var String = (function (_Component5) {
	  function String() {
	    _classCallCheck(this, String);
	
	    if (_Component5 != null) {
	      _Component5.apply(this, arguments);
	    }
	  }
	
	  _inherits(String, _Component5);
	
	  _createClass(String, [{
	    key: "render",
	    value: function render() {
	      return React.createElement("input", {
	        className: "rule-arg-string",
	        type: "text",
	        placeholder: "string",
	        disabled: this.props.disabled,
	        onChange: this.onChange.bind(this) });
	    }
	  }, {
	    key: "onChange",
	    value: function onChange(e) {
	      this.props.onChange(e.target.value);
	    }
	  }]);
	
	  return String;
	})(_react.Component);
	
	var ObjectValue = (function (_Component6) {
	  function ObjectValue(props) {
	    _classCallCheck(this, ObjectValue);
	
	    _get(Object.getPrototypeOf(ObjectValue.prototype), "constructor", this).call(this, props);
	    this.id = _uniqueid2["default"]({ prefix: "object-value" });
	    this.onChange = this.onChange.bind(this);
	  }
	
	  _inherits(ObjectValue, _Component6);
	
	  _createClass(ObjectValue, [{
	    key: "onChange",
	    value: function onChange(key, value) {
	      var newValue = _lodashLangClone2["default"](this.props.value);
	      newValue[key] = value;
	      this.props.onChange(newValue);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this = this;
	
	      var _props3 = this.props;
	      var value = _props3.value;
	      var properties = _props3.properties;
	      var disabled = _props3.disabled;
	
	      var lines = [];
	      _lodashCollectionEach2["default"](properties, function (def, key) {
	        lines.push(React.createElement(
	          "tr",
	          { key: "" + _this.id + "-" + key },
	          React.createElement(
	            "td",
	            { className: "rule-arg-object__name-column" },
	            React.createElement(
	              "span",
	              { className: "rule-arg-object__name" },
	              key
	            )
	          ),
	          React.createElement(
	            "td",
	            { className: "rule-arg-object__input-column" },
	            React.createElement(RuleArgumentInput, {
	              value: value[key],
	              def: def,
	              disabled: disabled,
	              onChange: function (value) {
	                return _this.onChange(key, value);
	              } })
	          )
	        ));
	      });
	
	      return React.createElement(
	        "table",
	        { className: "rule-arg-object" },
	        React.createElement(
	          "tbody",
	          null,
	          lines
	        )
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: { value: {} },
	    enumerable: true
	  }]);
	
	  return ObjectValue;
	})(_react.Component);
	
	var Enum = (function (_Component7) {
	  function Enum(props) {
	    _classCallCheck(this, Enum);
	
	    _get(Object.getPrototypeOf(Enum.prototype), "constructor", this).call(this, props);
	    this.id = _uniqueid2["default"]({ prefix: "rule-arg-enum" });
	  }
	
	  _inherits(Enum, _Component7);
	
	  _createClass(Enum, [{
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      var _props4 = this.props;
	      var value = _props4.value;
	      var options = _props4.options;
	      var disabled = _props4.disabled;
	
	      var optionElements = options.map(function (value) {
	        return React.createElement(
	          "option",
	          { key: "" + _this2.id + "-" + value, value: value },
	          value
	        );
	      });
	      return React.createElement(
	        "select",
	        { className: "rule-arg-options", disabled: disabled, onChange: this.onChange.bind(this) },
	        React.createElement(
	          "option",
	          { value: "" },
	          "---"
	        ),
	        optionElements
	      );
	    }
	  }, {
	    key: "onChange",
	    value: function onChange(e) {
	      this.props.onChange(e.target.value || null);
	    }
	  }]);
	
	  return Enum;
	})(_react.Component);
	
	var OneOf = (function (_Component8) {
	  function OneOf(props) {
	    _classCallCheck(this, OneOf);
	
	    _get(Object.getPrototypeOf(OneOf.prototype), "constructor", this).call(this, props);
	    this.id = _uniqueid2["default"]({ prefix: "rule-arg-oneof" });
	    this.radioName = _uniqueid2["default"]({ prefix: "rule-arg-oneof-radio" });
	    this.onChecked = this.onChecked.bind(this);
	    this.onChangeValue = this.onChangeValue.bind(this);
	    this.state = { selected: false, values: [] };
	  }
	
	  _inherits(OneOf, _Component8);
	
	  _createClass(OneOf, [{
	    key: "render",
	    value: function render() {
	      var _this3 = this;
	
	      var _props5 = this.props;
	      var defs = _props5.defs;
	      var disabled = _props5.disabled;
	
	      var items = defs.reduce(function (items, def, index) {
	        var key = "" + _this3.id + "-" + index;
	        if (index > 0) {
	          items.push(React.createElement(OneOfOr, { key: key + "-or" }));
	        }
	        items.push(React.createElement(OneOfItem, {
	          key: key,
	          radioName: _this3.radioName,
	          index: index,
	          def: def,
	          value: _this3.getValue(index),
	          checked: _this3.isItemSelected(index),
	          disabled: disabled,
	          onChecked: _this3.onChecked,
	          onChangeValue: _this3.onChangeValue }));
	        return items;
	      }, []);
	
	      return React.createElement(
	        "ul",
	        { className: "rule-arg-oneof" },
	        items
	      );
	    }
	  }, {
	    key: "isItemSelected",
	    value: function isItemSelected(itemIndex) {
	      return this.state.selected === itemIndex;
	    }
	  }, {
	    key: "getValue",
	    value: function getValue(index) {
	      return this.state.values[index];
	    }
	  }, {
	    key: "onChecked",
	    value: function onChecked(index) {
	      this.props.onChange(this.getValue(index));
	      this.setState({ selected: index });
	    }
	  }, {
	    key: "onChangeValue",
	    value: function onChangeValue(e) {
	      var values = _lodashLangClone2["default"](this.state.values);
	      values[e.index] = e.value;
	      this.setState({ values: values });
	
	      if (this.isItemSelected(e.index)) {
	        this.props.onChange(e.value);
	      }
	    }
	  }], [{
	    key: "propTypes",
	    value: {
	      defs: _react.PropTypes.array.isRequired,
	      disabled: _react.PropTypes.bool,
	      value: _react.PropTypes.object },
	    enumerable: true
	  }]);
	
	  return OneOf;
	})(_react.Component);
	
	var OneOfOr = (function (_Component9) {
	  function OneOfOr() {
	    _classCallCheck(this, OneOfOr);
	
	    if (_Component9 != null) {
	      _Component9.apply(this, arguments);
	    }
	  }
	
	  _inherits(OneOfOr, _Component9);
	
	  _createClass(OneOfOr, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "li",
	        { className: "rule-arg-oneof__item" },
	        React.createElement(
	          "span",
	          { className: "rule-arg-oneof__or" },
	          "OR"
	        )
	      );
	    }
	  }]);
	
	  return OneOfOr;
	})(_react.Component);
	
	var OneOfItem = (function (_Component10) {
	  function OneOfItem(props) {
	    _classCallCheck(this, OneOfItem);
	
	    _get(Object.getPrototypeOf(OneOfItem.prototype), "constructor", this).call(this, props);
	    this.onChecked = this.onChecked.bind(this);
	    this.onChangeValue = this.onChangeValue.bind(this);
	  }
	
	  _inherits(OneOfItem, _Component10);
	
	  _createClass(OneOfItem, [{
	    key: "render",
	    value: function render() {
	      var _props6 = this.props;
	      var def = _props6.def;
	      var value = _props6.value;
	      var checked = _props6.checked;
	      var disabled = _props6.disabled;
	      var radioName = _props6.radioName;
	
	      return React.createElement(
	        "li",
	        { className: "rule-arg-oneof__item" },
	        React.createElement(
	          "div",
	          { className: "rule-arg-oneof__radio-column" },
	          React.createElement("input", {
	            className: "rule-arg-oneof__radio",
	            ref: "radio",
	            type: "radio",
	            checked: checked,
	            name: radioName,
	            disabled: disabled,
	            onChange: this.onChecked })
	        ),
	        React.createElement(
	          "div",
	          { className: "rule-arg-oneof__input-column" },
	          React.createElement(RuleArgumentInput, {
	            def: def,
	            ref: "input",
	            value: value,
	            disabled: disabled || !checked,
	            onChange: this.onChangeValue })
	        )
	      );
	    }
	  }, {
	    key: "onChangeValue",
	    value: function onChangeValue(value) {
	      var index = this.props.index;
	
	      this.props.onChangeValue({ index: index, value: value });
	    }
	  }, {
	    key: "onChecked",
	    value: function onChecked() {
	      this.props.onChecked(this.props.index);
	    }
	  }]);
	
	  return OneOfItem;
	})(_react.Component);
	
	module.exports = exports["default"];

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(192);


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _inherits = __webpack_require__(1)['default'];
	
	var _get = __webpack_require__(120)['default'];
	
	var _createClass = __webpack_require__(6)['default'];
	
	var _classCallCheck = __webpack_require__(9)['default'];
	
	var _Object$defineProperty = __webpack_require__(7)['default'];
	
	var _interopRequireDefault = __webpack_require__(10)['default'];
	
	_Object$defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _uniqueid = __webpack_require__(83);
	
	var _uniqueid2 = _interopRequireDefault(_uniqueid);
	
	var _lodashLangClone = __webpack_require__(139);
	
	var _lodashLangClone2 = _interopRequireDefault(_lodashLangClone);
	
	var _lodashLangIsArray = __webpack_require__(33);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	var _lodashUtilityNoop = __webpack_require__(162);
	
	var _lodashUtilityNoop2 = _interopRequireDefault(_lodashUtilityNoop);
	
	var _lodashArrayRemove = __webpack_require__(160);
	
	var _lodashArrayRemove2 = _interopRequireDefault(_lodashArrayRemove);
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	'use strict';
	
	var RuleArgumentArray = (function (_Component) {
	  function RuleArgumentArray(props) {
	    _classCallCheck(this, RuleArgumentArray);
	
	    _get(Object.getPrototypeOf(RuleArgumentArray.prototype), 'constructor', this).call(this, props);
	    this.id = _uniqueid2['default']({ prefix: 'rule-arg-array' });
	    this.onAdded = this.onAdded.bind(this);
	  }
	
	  _inherits(RuleArgumentArray, _Component);
	
	  _createClass(RuleArgumentArray, [{
	    key: 'render',
	    value: function render() {
	      var _this = this;
	
	      var disabled = this.props.disabled;
	
	      var value = this.getValue();
	
	      return React.createElement(
	        'div',
	        { className: 'rule-arg-array' },
	        React.createElement(
	          'ul',
	          { className: 'rule-arg-array__list' },
	          React.createElement(
	            'li',
	            { key: '' + this.id + '-input' },
	            React.createElement(Input, {
	              value: value,
	              onAdded: this.onAdded,
	              disabled: disabled })
	          ),
	          value.map(function (v, i) {
	            return React.createElement(
	              'li',
	              { key: '' + _this.id + '-value-' + i },
	              React.createElement(
	                'span',
	                { className: 'rule-arg-array__value' },
	                v
	              ),
	              React.createElement(TrashButton, {
	                disabled: disabled,
	                onClick: _this.onRemove.bind(_this, v) })
	            );
	          })
	        )
	      );
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      var _clone = arguments[0] === undefined ? false : arguments[0];
	
	      if (_lodashLangIsArray2['default'](this.props.value)) {
	        return _clone ? _lodashLangClone2['default'](this.props.value) : this.props.value;
	      }
	      return [];
	    }
	  }, {
	    key: 'onAdded',
	    value: function onAdded(value) {
	      var values = this.getValue(true);
	      values.push(value);
	      this.props.onChange(values);
	    }
	  }, {
	    key: 'onRemove',
	    value: function onRemove(value) {
	      var values = this.getValue(true);
	      _lodashArrayRemove2['default'](values, function (v) {
	        return v === value;
	      });
	      this.props.onChange(values.length ? values : null);
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      value: _react.PropTypes.array.isRequired,
	      onChange: _react.PropTypes.func,
	      disabled: _react.PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      value: [],
	      onChange: _lodashUtilityNoop2['default'],
	      disabled: false
	    },
	    enumerable: true
	  }]);
	
	  return RuleArgumentArray;
	})(_react.Component);
	
	var Input = (function (_Component2) {
	  function Input(props) {
	    _classCallCheck(this, Input);
	
	    _get(Object.getPrototypeOf(Input.prototype), 'constructor', this).call(this, props);
	    this.state = { buttonDisabled: true };
	    this.onInput = this.onInput.bind(this);
	    this.onClick = this.onClick.bind(this);
	  }
	
	  _inherits(Input, _Component2);
	
	  _createClass(Input, [{
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var inputValue = _state.inputValue;
	      var buttonDisabled = _state.buttonDisabled;
	
	      return React.createElement(
	        'div',
	        { className: 'rule-arg-array__input' },
	        React.createElement('input', {
	          ref: 'input',
	          className: 'rule-arg-array__string',
	          type: 'text',
	          value: inputValue,
	          placeholder: 'string',
	          disabled: this.props.disabled,
	          onInput: this.onInput }),
	        React.createElement(PlusButton, { disabled: buttonDisabled, onClick: this.onClick })
	      );
	    }
	  }, {
	    key: 'onInput',
	    value: function onInput(e) {
	      var buttonDisabled = this.isButtonDisabled(e.target.value);
	      this.setState({ buttonDisabled: buttonDisabled });
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick() {
	      if (!this.state.buttonDisabled) {
	        this.props.onAdded(this.getValue());
	        this.clearValue();
	        this.setState({ buttonDisabled: true });
	      }
	    }
	  }, {
	    key: 'isButtonDisabled',
	    value: function isButtonDisabled(value) {
	      value = value || this.getValue();
	      return !value.length || this.props.value.indexOf(value) !== -1;
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.refs.input.value;
	    }
	  }, {
	    key: 'clearValue',
	    value: function clearValue() {
	      this.refs.input.value = '';
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      onAdded: _react.PropTypes.func,
	      value: _react.PropTypes.array.isRequired,
	      disabled: _react.PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      onAdded: _lodashUtilityNoop2['default'],
	      disabled: false
	    },
	    enumerable: true
	  }]);
	
	  return Input;
	})(_react.Component);
	
	var PlusButton = (function (_Component3) {
	  function PlusButton(props) {
	    _classCallCheck(this, PlusButton);
	
	    _get(Object.getPrototypeOf(PlusButton.prototype), 'constructor', this).call(this, props);
	    this.onClick = this.onClick.bind(this);
	  }
	
	  _inherits(PlusButton, _Component3);
	
	  _createClass(PlusButton, [{
	    key: 'render',
	    value: function render() {
	      var className = _classnames2['default']('rule-arg-array__plus', {
	        'rule-arg-array__plus--is-disabled': this.props.disabled
	      });
	
	      return React.createElement(
	        'a',
	        {
	          className: className,
	          href: 'javascript:void(0)',
	          onClick: this.onClick },
	        React.createElement('i', { className: 'fa fa-plus' })
	      );
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.disabled) {
	        e.preventDefault();
	        e.stopPropagation();
	        return;
	      }
	
	      this.props.onClick(e);
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      disabled: _react.PropTypes.bool
	    },
	    enumerable: true
	  }]);
	
	  return PlusButton;
	})(_react.Component);
	
	var TrashButton = (function (_Component4) {
	  function TrashButton() {
	    _classCallCheck(this, TrashButton);
	
	    if (_Component4 != null) {
	      _Component4.apply(this, arguments);
	    }
	  }
	
	  _inherits(TrashButton, _Component4);
	
	  _createClass(TrashButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var disabled = _props.disabled;
	      var onClick = _props.onClick;
	
	      var icon = React.createElement('i', { className: 'fa fa-trash-o' });
	      if (disabled) {
	        return React.createElement(
	          'span',
	          { className: 'rule-arg-array__trash' },
	          'icon'
	        );
	      }
	      return React.createElement(
	        'a',
	        {
	          className: 'rule-arg-array__trash',
	          href: 'javascript:void(0);',
	          onClick: onClick },
	        React.createElement('i', { className: 'fa fa-trash-o' })
	      );
	    }
	  }]);
	
	  return TrashButton;
	})(_react.Component);
	
	exports['default'] = RuleArgumentArray;
	module.exports = exports['default'];

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _inherits = __webpack_require__(1)["default"];
	
	var _get = __webpack_require__(120)["default"];
	
	var _createClass = __webpack_require__(6)["default"];
	
	var _classCallCheck = __webpack_require__(9)["default"];
	
	var _Object$defineProperty = __webpack_require__(7)["default"];
	
	var _interopRequireDefault = __webpack_require__(10)["default"];
	
	_Object$defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(11);
	
	var _classnames = __webpack_require__(125);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lodashLangIsArray = __webpack_require__(33);
	
	var _lodashLangIsArray2 = _interopRequireDefault(_lodashLangIsArray);
	
	var _lodashUtilityNoop = __webpack_require__(162);
	
	var _lodashUtilityNoop2 = _interopRequireDefault(_lodashUtilityNoop);
	
	var _actionsView = __webpack_require__(84);
	
	"use strict";
	
	var homeUrl = "https://pirosikick.github.io/eslintrc-editor/";
	var eslintUrl = "http://eslint.org";
	var githubUrl = "https://github.com/pirosikick/eslintrc-editor";
	var docs = {
	  configure: "docs/user-guide/configuring.md",
	  cli: "docs/user-guide/command-line-interface.md",
	  rules: "docs/rules/README.md"
	};
	
	var Menu = (function (_Component) {
	  function Menu(props) {
	    _classCallCheck(this, Menu);
	
	    _get(Object.getPrototypeOf(Menu.prototype), "constructor", this).call(this, props);
	    this.selectPreview = this.selectMenuItem.bind(this, "preview");
	    this.selectDocument = this.selectMenuItem.bind(this, "document");
	    this.openConfigure = this.openDocument.bind(this, docs.configure);
	    this.openCLI = this.openDocument.bind(this, docs.cli);
	    this.openRules = this.openDocument.bind(this, docs.rules);
	  }
	
	  _inherits(Menu, _Component);
	
	  _createClass(Menu, [{
	    key: "render",
	    value: function render() {
	      var selectedItem = this.props.selectedItem;
	
	      return React.createElement(
	        "div",
	        { className: "menu pure-menu pure-menu-horizontal" },
	        React.createElement(
	          Link,
	          { heading: true, href: homeUrl },
	          ".eslintrc editor"
	        ),
	        React.createElement(
	          List,
	          { key: "menu-left" },
	          React.createElement(
	            ListItem,
	            { key: "menu-item-preview", selected: selectedItem === "preview" },
	            React.createElement(
	              Link,
	              { onClick: this.selectPreview },
	              "Preview"
	            )
	          ),
	          React.createElement(
	            ListItem,
	            { key: "menu-item-doc", selected: selectedItem === "document", hasChildren: true },
	            React.createElement(
	              Link,
	              { onClick: this.selectDocument },
	              "Document"
	            ),
	            React.createElement(
	              Children,
	              null,
	              React.createElement(
	                ListItem,
	                { key: "menu-item-doc-config" },
	                React.createElement(
	                  Link,
	                  { onClick: this.openConfigure },
	                  "Configure ESLint"
	                )
	              ),
	              React.createElement(
	                ListItem,
	                { key: "menu-item-doc-cli" },
	                React.createElement(
	                  Link,
	                  { onClick: this.openCLI },
	                  "Command Line Interface"
	                )
	              ),
	              React.createElement(
	                ListItem,
	                { key: "menu-item-doc-rules" },
	                React.createElement(
	                  Link,
	                  { onClick: this.openRules },
	                  "Rules"
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(
	          List,
	          { key: "menu-right", right: true },
	          React.createElement(
	            ListItem,
	            { key: "menu-item-github" },
	            React.createElement(
	              Link,
	              { href: githubUrl, target: "_blank" },
	              "GitHub"
	            )
	          ),
	          React.createElement(
	            ListItem,
	            { key: "menu-item-eslint" },
	            React.createElement(
	              Link,
	              { href: eslintUrl, target: "_blank" },
	              "ESLint"
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: "openDocument",
	    value: function openDocument(md) {
	      this.emitAction(_actionsView.openDocument(md));
	    }
	  }, {
	    key: "selectMenuItem",
	    value: function selectMenuItem(name) {
	      this.emitAction(_actionsView.selectMenuItem(name));
	    }
	  }, {
	    key: "emitAction",
	    value: function emitAction(action) {
	      this.props.onAction(action);
	    }
	  }], [{
	    key: "propsTypes",
	    value: {
	      selectedItem: _react.PropTypes.string,
	      onAction: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: "defaultProps",
	    value: {
	      selectedItem: "",
	      onAction: _lodashUtilityNoop2["default"] },
	    enumerable: true
	  }]);
	
	  return Menu;
	})(_react.Component);
	
	exports.Menu = Menu;
	
	var List = (function (_Component2) {
	  function List() {
	    _classCallCheck(this, List);
	
	    if (_Component2 != null) {
	      _Component2.apply(this, arguments);
	    }
	  }
	
	  _inherits(List, _Component2);
	
	  _createClass(List, [{
	    key: "render",
	    value: function render() {
	      var className = _classnames2["default"]("pure-menu-list menu__list", this.props.right && "menu__list--on-right");
	      return React.createElement(
	        "ul",
	        { className: className },
	        this.props.children
	      );
	    }
	  }]);
	
	  return List;
	})(_react.Component);
	
	var Children = (function (_Component3) {
	  function Children() {
	    _classCallCheck(this, Children);
	
	    if (_Component3 != null) {
	      _Component3.apply(this, arguments);
	    }
	  }
	
	  _inherits(Children, _Component3);
	
	  _createClass(Children, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "ul",
	        { className: "pure-menu-children menu__children" },
	        this.props.children
	      );
	    }
	  }]);
	
	  return Children;
	})(_react.Component);
	
	var ListItem = (function (_Component4) {
	  function ListItem() {
	    _classCallCheck(this, ListItem);
	
	    if (_Component4 != null) {
	      _Component4.apply(this, arguments);
	    }
	  }
	
	  _inherits(ListItem, _Component4);
	
	  _createClass(ListItem, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props;
	      var selected = _props.selected;
	      var hasChildren = _props.hasChildren;
	      var children = _props.children;
	
	      var className = _classnames2["default"]("menu__item pure-menu-item pure-menu-allow-hover", selected && "pure-menu-selected", hasChildren && "pure-menu-has-children");
	      return React.createElement(
	        "li",
	        { className: className },
	        children
	      );
	    }
	  }]);
	
	  return ListItem;
	})(_react.Component);
	
	var Link = (function (_Component5) {
	  function Link() {
	    _classCallCheck(this, Link);
	
	    if (_Component5 != null) {
	      _Component5.apply(this, arguments);
	    }
	  }
	
	  _inherits(Link, _Component5);
	
	  _createClass(Link, [{
	    key: "render",
	    value: function render() {
	      var _props2 = this.props;
	      var href = _props2.href;
	      var target = _props2.target;
	      var onClick = _props2.onClick;
	      var heading = _props2.heading;
	      var children = _props2.children;
	
	      var className = _classnames2["default"]("pure-menu-link menu__link", heading && "pure-menu-heading menu__heading");
	      return React.createElement(
	        "a",
	        {
	          className: className,
	          href: href || "javascript:void(0);",
	          onClick: onClick || _lodashUtilityNoop2["default"],
	          target: target || "" },
	        this.props.children
	      );
	    }
	  }]);
	
	  return Link;
	})(_react.Component);

/***/ },
/* 201 */
/***/ function(module, exports) {

	module.exports = [
		{
			"name": "accessor-pairs",
			"schema": [
				{
					"type": "object",
					"properties": {
						"getWithoutSet": {
							"type": "boolean"
						},
						"setWithoutGet": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "array-bracket-spacing",
			"schema": [
				{
					"enum": [
						"always",
						"never"
					]
				},
				{
					"type": "object",
					"properties": {
						"singleValue": {
							"type": "boolean"
						},
						"objectsInArrays": {
							"type": "boolean"
						},
						"arraysInArrays": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "arrow-parens",
			"schema": [
				{
					"enum": [
						"always",
						"as-needed"
					]
				}
			]
		},
		{
			"name": "arrow-spacing",
			"schema": [
				{
					"type": "object",
					"properties": {
						"before": {
							"type": "boolean"
						},
						"after": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "block-scoped-var",
			"schema": []
		},
		{
			"name": "block-spacing",
			"schema": [
				{
					"enum": [
						"always",
						"never"
					]
				}
			]
		},
		{
			"name": "brace-style",
			"schema": [
				{
					"enum": [
						"1tbs",
						"stroustrup",
						"allman"
					]
				},
				{
					"type": "object",
					"properties": {
						"allowSingleLine": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "callback-return",
			"schema": [
				{
					"type": "array",
					"items": {
						"type": "string"
					}
				}
			]
		},
		{
			"name": "camelcase",
			"schema": [
				{
					"type": "object",
					"properties": {
						"properties": {
							"enum": [
								"always",
								"never"
							]
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "comma-dangle",
			"schema": [
				{
					"enum": [
						"always",
						"always-multiline",
						"never"
					]
				}
			]
		},
		{
			"name": "comma-spacing",
			"schema": [
				{
					"type": "object",
					"properties": {
						"before": {
							"type": "boolean"
						},
						"after": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "comma-style",
			"schema": [
				{
					"enum": [
						"first",
						"last"
					]
				},
				{
					"type": "object",
					"properties": {
						"exceptions": {
							"type": "object",
							"additionalProperties": {
								"type": "boolean"
							}
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "complexity",
			"schema": [
				{
					"type": "integer"
				}
			]
		},
		{
			"name": "computed-property-spacing",
			"schema": [
				{
					"enum": [
						"always",
						"never"
					]
				}
			]
		},
		{
			"name": "consistent-return",
			"schema": []
		},
		{
			"name": "consistent-this",
			"schema": [
				{
					"type": "string"
				}
			]
		},
		{
			"name": "constructor-super",
			"schema": []
		},
		{
			"name": "curly",
			"schema": [
				{
					"enum": [
						"all",
						"multi",
						"multi-line",
						"multi-or-nest"
					]
				}
			]
		},
		{
			"name": "default-case",
			"schema": []
		},
		{
			"name": "dot-location",
			"schema": [
				{
					"enum": [
						"object",
						"property"
					]
				}
			]
		},
		{
			"name": "dot-notation",
			"schema": [
				{
					"type": "object",
					"properties": {
						"allowKeywords": {
							"type": "boolean"
						},
						"allowPattern": {
							"type": "string"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "eol-last",
			"schema": []
		},
		{
			"name": "eqeqeq",
			"schema": [
				{
					"enum": [
						"smart",
						"allow-null"
					]
				}
			]
		},
		{
			"name": "func-names",
			"schema": []
		},
		{
			"name": "func-style",
			"schema": [
				{
					"enum": [
						"declaration",
						"expression"
					]
				}
			]
		},
		{
			"name": "generator-star-spacing",
			"schema": [
				{
					"oneOf": [
						{
							"enum": [
								"before",
								"after",
								"both",
								"neither"
							]
						},
						{
							"type": "object",
							"properties": {
								"before": {
									"type": "boolean"
								},
								"after": {
									"type": "boolean"
								}
							},
							"additionalProperties": false
						}
					]
				}
			]
		},
		{
			"name": "global-require",
			"schema": []
		},
		{
			"name": "guard-for-in",
			"schema": []
		},
		{
			"name": "handle-callback-err",
			"schema": [
				{
					"type": "string"
				}
			]
		},
		{
			"name": "id-length",
			"schema": [
				{
					"type": "object",
					"properties": {
						"min": {
							"type": "number"
						},
						"max": {
							"type": "number"
						},
						"exceptions": {
							"type": "array",
							"uniqueItems": true,
							"items": {
								"type": "string"
							}
						},
						"properties": {
							"enum": [
								"always",
								"never"
							]
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "id-match",
			"schema": [
				{
					"type": "string"
				},
				{
					"type": "object",
					"properties": {
						"properties": {
							"enum": [
								true,
								false
							]
						}
					}
				}
			]
		},
		{
			"name": "indent",
			"schema": [
				{
					"oneOf": [
						{
							"enum": [
								"tab"
							]
						},
						{
							"type": "integer"
						}
					]
				},
				{
					"type": "object",
					"properties": {
						"SwitchCase": {
							"type": "integer"
						},
						"VariableDeclarator": {
							"type": [
								"integer",
								"object"
							],
							"properties": {
								"var": {
									"type": "integer"
								},
								"let": {
									"type": "integer"
								},
								"const": {
									"type": "integer"
								}
							}
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "init-declarations",
			"schema": [
				{
					"enum": [
						"always",
						"never"
					]
				}
			]
		},
		{
			"name": "jsx-quotes",
			"schema": [
				{
					"enum": [
						"prefer-single",
						"prefer-double"
					]
				}
			]
		},
		{
			"name": "key-spacing",
			"schema": [
				{
					"type": "object",
					"properties": {
						"align": {
							"enum": [
								"colon",
								"value"
							]
						},
						"mode": {
							"enum": [
								"strict",
								"minimum"
							]
						},
						"beforeColon": {
							"type": "boolean"
						},
						"afterColon": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "linebreak-style",
			"schema": [
				{
					"enum": [
						"unix",
						"windows"
					]
				}
			]
		},
		{
			"name": "lines-around-comment",
			"schema": [
				{
					"type": "object",
					"properties": {
						"beforeBlockComment": {
							"type": "boolean"
						},
						"afterBlockComment": {
							"type": "boolean"
						},
						"beforeLineComment": {
							"type": "boolean"
						},
						"afterLineComment": {
							"type": "boolean"
						},
						"allowBlockStart": {
							"type": "boolean"
						},
						"allowBlockEnd": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "max-depth",
			"schema": [
				{
					"type": "integer"
				}
			]
		},
		{
			"name": "max-len",
			"schema": [
				{
					"type": "integer",
					"minimum": 0
				},
				{
					"type": "integer",
					"minimum": 0
				},
				{
					"type": "object",
					"properties": {
						"ignorePattern": {
							"type": "string"
						},
						"ignoreComments": {
							"type": "boolean"
						},
						"ignoreUrls": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "max-nested-callbacks",
			"schema": [
				{
					"type": "integer"
				}
			]
		},
		{
			"name": "max-params",
			"schema": [
				{
					"type": "integer"
				}
			]
		},
		{
			"name": "max-statements",
			"schema": [
				{
					"type": "integer"
				}
			]
		},
		{
			"name": "new-cap",
			"schema": [
				{
					"type": "object",
					"properties": {
						"newIsCap": {
							"type": "boolean"
						},
						"capIsNew": {
							"type": "boolean"
						},
						"newIsCapExceptions": {
							"type": "array",
							"items": {
								"type": "string"
							}
						},
						"capIsNewExceptions": {
							"type": "array",
							"items": {
								"type": "string"
							}
						},
						"properties": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "new-parens",
			"schema": []
		},
		{
			"name": "newline-after-var",
			"schema": [
				{
					"enum": [
						"never",
						"always"
					]
				}
			]
		},
		{
			"name": "no-alert",
			"schema": []
		},
		{
			"name": "no-array-constructor",
			"schema": []
		},
		{
			"name": "no-bitwise",
			"schema": []
		},
		{
			"name": "no-caller",
			"schema": []
		},
		{
			"name": "no-catch-shadow",
			"schema": []
		},
		{
			"name": "no-class-assign",
			"schema": []
		},
		{
			"name": "no-cond-assign",
			"schema": [
				{
					"enum": [
						"except-parens",
						"always"
					]
				}
			]
		},
		{
			"name": "no-console",
			"schema": []
		},
		{
			"name": "no-const-assign",
			"schema": []
		},
		{
			"name": "no-constant-condition",
			"schema": []
		},
		{
			"name": "no-continue",
			"schema": []
		},
		{
			"name": "no-control-regex",
			"schema": []
		},
		{
			"name": "no-debugger",
			"schema": []
		},
		{
			"name": "no-delete-var",
			"schema": []
		},
		{
			"name": "no-div-regex",
			"schema": []
		},
		{
			"name": "no-dupe-args",
			"schema": []
		},
		{
			"name": "no-dupe-class-members",
			"schema": []
		},
		{
			"name": "no-dupe-keys",
			"schema": []
		},
		{
			"name": "no-duplicate-case",
			"schema": []
		},
		{
			"name": "no-else-return",
			"schema": []
		},
		{
			"name": "no-empty-character-class",
			"schema": []
		},
		{
			"name": "no-empty-label",
			"schema": []
		},
		{
			"name": "no-empty",
			"schema": []
		},
		{
			"name": "no-eq-null",
			"schema": []
		},
		{
			"name": "no-eval",
			"schema": []
		},
		{
			"name": "no-ex-assign",
			"schema": []
		},
		{
			"name": "no-extend-native",
			"schema": [
				{
					"type": "object",
					"properties": {
						"exceptions": {
							"type": "array",
							"items": {
								"type": "string"
							},
							"uniqueItems": true
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "no-extra-bind",
			"schema": []
		},
		{
			"name": "no-extra-boolean-cast",
			"schema": []
		},
		{
			"name": "no-extra-parens",
			"schema": [
				{
					"enum": [
						"all",
						"functions"
					]
				}
			]
		},
		{
			"name": "no-extra-semi",
			"schema": []
		},
		{
			"name": "no-fallthrough",
			"schema": []
		},
		{
			"name": "no-floating-decimal",
			"schema": []
		},
		{
			"name": "no-func-assign",
			"schema": []
		},
		{
			"name": "no-implicit-coercion",
			"schema": [
				{
					"type": "object",
					"properties": {
						"boolean": {
							"type": "boolean"
						},
						"number": {
							"type": "boolean"
						},
						"string": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "no-implied-eval",
			"schema": []
		},
		{
			"name": "no-inline-comments",
			"schema": []
		},
		{
			"name": "no-inner-declarations",
			"schema": [
				{
					"enum": [
						"functions",
						"both"
					]
				}
			]
		},
		{
			"name": "no-invalid-regexp",
			"schema": []
		},
		{
			"name": "no-invalid-this",
			"schema": []
		},
		{
			"name": "no-irregular-whitespace",
			"schema": []
		},
		{
			"name": "no-iterator",
			"schema": []
		},
		{
			"name": "no-label-var",
			"schema": []
		},
		{
			"name": "no-labels",
			"schema": []
		},
		{
			"name": "no-lone-blocks",
			"schema": []
		},
		{
			"name": "no-lonely-if",
			"schema": []
		},
		{
			"name": "no-loop-func",
			"schema": []
		},
		{
			"name": "no-mixed-requires",
			"schema": [
				{
					"oneOf": [
						{
							"type": "boolean"
						},
						{
							"type": "object",
							"properties": {
								"grouping": {
									"type": "boolean"
								}
							},
							"additionalProperties": false
						}
					]
				}
			]
		},
		{
			"name": "no-mixed-spaces-and-tabs",
			"schema": [
				{
					"enum": [
						"smart-tabs",
						true,
						false
					]
				}
			]
		},
		{
			"name": "no-multi-spaces",
			"schema": [
				{
					"type": "object",
					"properties": {
						"exceptions": {
							"type": "object",
							"patternProperties": {
								"^([A-Z][a-z]*)+$": {
									"type": "boolean"
								}
							},
							"additionalProperties": false
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "no-multi-str",
			"schema": []
		},
		{
			"name": "no-multiple-empty-lines",
			"schema": [
				{
					"type": "object",
					"properties": {
						"max": {
							"type": "integer"
						}
					},
					"required": [
						"max"
					],
					"additionalProperties": false
				}
			]
		},
		{
			"name": "no-native-reassign",
			"schema": [
				{
					"type": "object",
					"properties": {
						"exceptions": {
							"type": "array",
							"items": {
								"type": "string"
							},
							"uniqueItems": true
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "no-negated-condition",
			"schema": []
		},
		{
			"name": "no-negated-in-lhs",
			"schema": []
		},
		{
			"name": "no-nested-ternary",
			"schema": []
		},
		{
			"name": "no-new-func",
			"schema": []
		},
		{
			"name": "no-new-object",
			"schema": []
		},
		{
			"name": "no-new-require",
			"schema": []
		},
		{
			"name": "no-new-wrappers",
			"schema": []
		},
		{
			"name": "no-new",
			"schema": []
		},
		{
			"name": "no-obj-calls",
			"schema": []
		},
		{
			"name": "no-octal-escape",
			"schema": []
		},
		{
			"name": "no-octal",
			"schema": []
		},
		{
			"name": "no-param-reassign",
			"schema": [
				{
					"type": "object",
					"properties": {
						"props": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "no-path-concat",
			"schema": []
		},
		{
			"name": "no-plusplus",
			"schema": []
		},
		{
			"name": "no-process-env",
			"schema": []
		},
		{
			"name": "no-process-exit",
			"schema": []
		},
		{
			"name": "no-proto",
			"schema": []
		},
		{
			"name": "no-redeclare",
			"schema": [
				{
					"type": "object",
					"properties": {
						"builtinGlobals": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "no-regex-spaces",
			"schema": []
		},
		{
			"name": "no-restricted-modules",
			"schema": {
				"type": "array",
				"items": [
					{
						"enum": [
							0,
							1,
							2
						]
					}
				],
				"additionalItems": {
					"type": "string"
				},
				"uniqueItems": true
			}
		},
		{
			"name": "no-restricted-syntax",
			"schema": {
				"type": "array",
				"items": [
					{
						"enum": [
							0,
							1,
							2
						]
					},
					{
						"enum": [
							"AssignmentExpression",
							"AssignmentPattern",
							"ArrayExpression",
							"ArrayPattern",
							"ArrowFunctionExpression",
							"BlockStatement",
							"BinaryExpression",
							"BreakStatement",
							"CallExpression",
							"CatchClause",
							"ClassBody",
							"ClassDeclaration",
							"ClassExpression",
							"ConditionalExpression",
							"ContinueStatement",
							"DoWhileStatement",
							"DebuggerStatement",
							"EmptyStatement",
							"ExperimentalRestProperty",
							"ExperimentalSpreadProperty",
							"ExpressionStatement",
							"ForStatement",
							"ForInStatement",
							"ForOfStatement",
							"FunctionDeclaration",
							"FunctionExpression",
							"Identifier",
							"IfStatement",
							"Literal",
							"LabeledStatement",
							"LogicalExpression",
							"MemberExpression",
							"MetaProperty",
							"MethodDefinition",
							"NewExpression",
							"ObjectExpression",
							"ObjectPattern",
							"Program",
							"Property",
							"RestElement",
							"ReturnStatement",
							"SequenceExpression",
							"SpreadElement",
							"Super",
							"SwitchCase",
							"SwitchStatement",
							"TaggedTemplateExpression",
							"TemplateElement",
							"TemplateLiteral",
							"ThisExpression",
							"ThrowStatement",
							"TryStatement",
							"UnaryExpression",
							"UpdateExpression",
							"VariableDeclaration",
							"VariableDeclarator",
							"WhileStatement",
							"WithStatement",
							"YieldExpression",
							"JSXIdentifier",
							"JSXNamespacedName",
							"JSXMemberExpression",
							"JSXEmptyExpression",
							"JSXExpressionContainer",
							"JSXElement",
							"JSXClosingElement",
							"JSXOpeningElement",
							"JSXAttribute",
							"JSXSpreadAttribute",
							"JSXText",
							"ExportDefaultDeclaration",
							"ExportNamedDeclaration",
							"ExportAllDeclaration",
							"ExportSpecifier",
							"ImportDeclaration",
							"ImportSpecifier",
							"ImportDefaultSpecifier",
							"ImportNamespaceSpecifier"
						]
					}
				],
				"uniqueItems": true,
				"minItems": 1
			}
		},
		{
			"name": "no-return-assign",
			"schema": [
				{
					"enum": [
						"except-parens",
						"always"
					]
				}
			]
		},
		{
			"name": "no-script-url",
			"schema": []
		},
		{
			"name": "no-self-compare",
			"schema": []
		},
		{
			"name": "no-sequences",
			"schema": []
		},
		{
			"name": "no-shadow-restricted-names",
			"schema": []
		},
		{
			"name": "no-shadow",
			"schema": [
				{
					"type": "object",
					"properties": {
						"builtinGlobals": {
							"type": "boolean"
						},
						"hoist": {
							"enum": [
								"all",
								"functions",
								"never"
							]
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "no-spaced-func",
			"schema": []
		},
		{
			"name": "no-sparse-arrays",
			"schema": []
		},
		{
			"name": "no-sync",
			"schema": []
		},
		{
			"name": "no-ternary",
			"schema": []
		},
		{
			"name": "no-this-before-super",
			"schema": []
		},
		{
			"name": "no-throw-literal",
			"schema": []
		},
		{
			"name": "no-trailing-spaces",
			"schema": [
				{
					"type": "object",
					"properties": {
						"skipBlankLines": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "no-undef-init",
			"schema": []
		},
		{
			"name": "no-undef",
			"schema": [
				{
					"type": "object",
					"properties": {
						"typeof": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "no-undefined",
			"schema": []
		},
		{
			"name": "no-underscore-dangle",
			"schema": []
		},
		{
			"name": "no-unexpected-multiline",
			"schema": []
		},
		{
			"name": "no-unneeded-ternary",
			"schema": [
				{
					"type": "object",
					"properties": {
						"defaultAssignment": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "no-unreachable",
			"schema": []
		},
		{
			"name": "no-unused-expressions",
			"schema": [
				{
					"type": "object",
					"properties": {
						"allowShortCircuit": {
							"type": "boolean"
						},
						"allowTernary": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "no-unused-vars",
			"schema": [
				{
					"oneOf": [
						{
							"enum": [
								"all",
								"local"
							]
						},
						{
							"type": "object",
							"properties": {
								"vars": {
									"enum": [
										"all",
										"local"
									]
								},
								"varsIgnorePattern": {
									"type": "string"
								},
								"args": {
									"enum": [
										"all",
										"after-used",
										"none"
									]
								},
								"argsIgnorePattern": {
									"type": "string"
								}
							}
						}
					]
				}
			]
		},
		{
			"name": "no-use-before-define",
			"schema": [
				{
					"enum": [
						"nofunc"
					]
				}
			]
		},
		{
			"name": "no-useless-call",
			"schema": []
		},
		{
			"name": "no-useless-concat",
			"schema": []
		},
		{
			"name": "no-var",
			"schema": []
		},
		{
			"name": "no-void",
			"schema": []
		},
		{
			"name": "no-warning-comments",
			"schema": [
				{
					"type": "object",
					"properties": {
						"terms": {
							"type": "array",
							"items": {
								"type": "string"
							}
						},
						"location": {
							"enum": [
								"start",
								"anywhere"
							]
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "no-with",
			"schema": []
		},
		{
			"name": "object-curly-spacing",
			"schema": [
				{
					"enum": [
						"always",
						"never"
					]
				},
				{
					"type": "object",
					"properties": {
						"arraysInObjects": {
							"type": "boolean"
						},
						"objectsInObjects": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "object-shorthand",
			"schema": [
				{
					"enum": [
						"always",
						"methods",
						"properties",
						"never"
					]
				}
			]
		},
		{
			"name": "one-var",
			"schema": [
				{
					"oneOf": [
						{
							"enum": [
								"always",
								"never"
							]
						},
						{
							"type": "object",
							"properties": {
								"var": {
									"enum": [
										"always",
										"never"
									]
								},
								"let": {
									"enum": [
										"always",
										"never"
									]
								},
								"const": {
									"enum": [
										"always",
										"never"
									]
								}
							},
							"additionalProperties": false
						},
						{
							"type": "object",
							"properties": {
								"initialized": {
									"enum": [
										"always",
										"never"
									]
								},
								"uninitialized": {
									"enum": [
										"always",
										"never"
									]
								}
							},
							"additionalProperties": false
						}
					]
				}
			]
		},
		{
			"name": "operator-assignment",
			"schema": [
				{
					"enum": [
						"always",
						"never"
					]
				}
			]
		},
		{
			"name": "operator-linebreak",
			"schema": [
				{
					"enum": [
						"after",
						"before",
						"none",
						null
					]
				},
				{
					"type": "object",
					"properties": {
						"overrides": {
							"type": "object",
							"properties": {
								"anyOf": {
									"type": "string",
									"enum": [
										"after",
										"before",
										"none"
									]
								}
							}
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "padded-blocks",
			"schema": [
				{
					"enum": [
						"always",
						"never"
					]
				}
			]
		},
		{
			"name": "prefer-arrow-callback",
			"schema": []
		},
		{
			"name": "prefer-const",
			"schema": []
		},
		{
			"name": "prefer-reflect",
			"schema": [
				{
					"type": "object",
					"properties": {
						"exceptions": {
							"type": "array",
							"items": {
								"enum": [
									"apply",
									"call",
									"delete",
									"defineProperty",
									"getOwnPropertyDescriptor",
									"getPrototypeOf",
									"setPrototypeOf",
									"isExtensible",
									"getOwnPropertyNames",
									"preventExtensions"
								]
							},
							"uniqueItems": true
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "prefer-spread",
			"schema": []
		},
		{
			"name": "prefer-template",
			"schema": []
		},
		{
			"name": "quote-props",
			"schema": {
				"anyOf": [
					{
						"type": "array",
						"items": [
							{
								"enum": [
									0,
									1,
									2
								]
							},
							{
								"enum": [
									"always",
									"as-needed",
									"consistent",
									"consistent-as-needed"
								]
							}
						],
						"minItems": 1,
						"maxItems": 2
					},
					{
						"type": "array",
						"items": [
							{
								"enum": [
									0,
									1,
									2
								]
							},
							{
								"enum": [
									"always",
									"as-needed",
									"consistent",
									"consistent-as-needed"
								]
							},
							{
								"type": "object",
								"properties": {
									"keywords": {
										"type": "boolean"
									},
									"unnecessary": {
										"type": "boolean"
									},
									"numbers": {
										"type": "boolean"
									}
								},
								"additionalProperties": false
							}
						],
						"minItems": 1,
						"maxItems": 3
					}
				]
			}
		},
		{
			"name": "quotes",
			"schema": [
				{
					"enum": [
						"single",
						"double",
						"backtick"
					]
				},
				{
					"enum": [
						"avoid-escape"
					]
				}
			]
		},
		{
			"name": "radix",
			"schema": []
		},
		{
			"name": "require-jsdoc",
			"schema": []
		},
		{
			"name": "require-yield",
			"schema": []
		},
		{
			"name": "semi-spacing",
			"schema": [
				{
					"type": "object",
					"properties": {
						"before": {
							"type": "boolean"
						},
						"after": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "semi",
			"schema": [
				{
					"enum": [
						"always",
						"never"
					]
				}
			]
		},
		{
			"name": "sort-vars",
			"schema": [
				{
					"type": "object",
					"properties": {
						"ignoreCase": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "space-after-keywords",
			"schema": [
				{
					"enum": [
						"always",
						"never"
					]
				}
			]
		},
		{
			"name": "space-before-blocks",
			"schema": [
				{
					"oneOf": [
						{
							"enum": [
								"always",
								"never"
							]
						},
						{
							"type": "object",
							"properties": {
								"keywords": {
									"enum": [
										"always",
										"never"
									]
								},
								"functions": {
									"enum": [
										"always",
										"never"
									]
								}
							},
							"additionalProperties": false
						}
					]
				}
			]
		},
		{
			"name": "space-before-function-paren",
			"schema": [
				{
					"oneOf": [
						{
							"enum": [
								"always",
								"never"
							]
						},
						{
							"type": "object",
							"properties": {
								"anonymous": {
									"enum": [
										"always",
										"never"
									]
								},
								"named": {
									"enum": [
										"always",
										"never"
									]
								}
							},
							"additionalProperties": false
						}
					]
				}
			]
		},
		{
			"name": "space-before-keywords",
			"schema": [
				{
					"enum": [
						"always",
						"never"
					]
				}
			]
		},
		{
			"name": "space-in-parens",
			"schema": [
				{
					"enum": [
						"always",
						"never"
					]
				},
				{
					"type": "object",
					"properties": {
						"exceptions": {
							"type": "array",
							"items": {
								"enum": [
									"{}",
									"[]",
									"()",
									"empty"
								]
							},
							"uniqueItems": true
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "space-infix-ops",
			"schema": [
				{
					"type": "object",
					"properties": {
						"int32Hint": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "space-return-throw-case",
			"schema": []
		},
		{
			"name": "space-unary-ops",
			"schema": [
				{
					"type": "object",
					"properties": {
						"words": {
							"type": "boolean"
						},
						"nonwords": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "spaced-comment",
			"schema": [
				{
					"enum": [
						"always",
						"never"
					]
				},
				{
					"type": "object",
					"properties": {
						"exceptions": {
							"type": "array",
							"items": {
								"type": "string"
							}
						},
						"markers": {
							"type": "array",
							"items": {
								"type": "string"
							}
						},
						"line": {
							"type": "object",
							"properties": {
								"exceptions": {
									"type": "array",
									"items": {
										"type": "string"
									}
								},
								"markers": {
									"type": "array",
									"items": {
										"type": "string"
									}
								}
							},
							"additionalProperties": false
						},
						"block": {
							"type": "object",
							"properties": {
								"exceptions": {
									"type": "array",
									"items": {
										"type": "string"
									}
								},
								"markers": {
									"type": "array",
									"items": {
										"type": "string"
									}
								}
							},
							"additionalProperties": false
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "strict",
			"schema": [
				{
					"enum": [
						"never",
						"global",
						"function"
					]
				}
			]
		},
		{
			"name": "use-isnan",
			"schema": []
		},
		{
			"name": "valid-jsdoc",
			"schema": [
				{
					"type": "object",
					"properties": {
						"prefer": {
							"type": "object",
							"additionalProperties": {
								"type": "string"
							}
						},
						"requireReturn": {
							"type": "boolean"
						},
						"requireParamDescription": {
							"type": "boolean"
						},
						"requireReturnDescription": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		},
		{
			"name": "valid-typeof",
			"schema": []
		},
		{
			"name": "vars-on-top",
			"schema": []
		},
		{
			"name": "wrap-iife",
			"schema": [
				{
					"enum": [
						"outside",
						"inside",
						"any"
					]
				}
			]
		},
		{
			"name": "wrap-regex",
			"schema": []
		},
		{
			"name": "yoda",
			"schema": [
				{
					"enum": [
						"always",
						"never"
					]
				},
				{
					"type": "object",
					"properties": {
						"exceptRange": {
							"type": "boolean"
						},
						"onlyEquality": {
							"type": "boolean"
						}
					},
					"additionalProperties": false
				}
			]
		}
	]

/***/ }
/******/ ]);