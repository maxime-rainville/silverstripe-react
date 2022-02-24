/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/bundles/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/boot/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registerComponents = __webpack_require__("./client/src/boot/registerComponents.js");

var _registerComponents2 = _interopRequireDefault(_registerComponents);

var _registerRoutes = __webpack_require__("./client/src/boot/registerRoutes.js");

var _registerRoutes2 = _interopRequireDefault(_registerRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.document.addEventListener('DOMContentLoaded', function () {
  (0, _registerRoutes2.default)();
  (0, _registerComponents2.default)();
});

/***/ }),

/***/ "./client/src/boot/registerComponents.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__("lib/Injector");

var _Injector2 = _interopRequireDefault(_Injector);

var _LeftAndMain = __webpack_require__("./client/src/components/LeftAndMain.js");

var _LeftAndMain2 = _interopRequireDefault(_LeftAndMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _Injector2.default.component.registerMany({
    LeftAndMain: _LeftAndMain2.default
  });
};

/***/ }),

/***/ "./client/src/boot/registerRoutes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ReactRouteRegister = __webpack_require__("lib/ReactRouteRegister");

var _ReactRouteRegister2 = _interopRequireDefault(_ReactRouteRegister);

var _Config = __webpack_require__("lib/Config");

var _Config2 = _interopRequireDefault(_Config);

var _ReactAdminBoostrap = __webpack_require__("./client/src/components/ReactAdminBoostrap.js");

var _ReactAdminBoostrap2 = _interopRequireDefault(_ReactAdminBoostrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var sectionConfig = _Config2.default.getSection(reactAdminConfig.configKey);

  _ReactRouteRegister2.default.add({
    path: '/' + sectionConfig.url,
    component: _ReactAdminBoostrap2.default,
    exact: false
  });
};

/***/ }),

/***/ "./client/src/bundles/bundle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./client/src/legacy/entwine/index.js");

__webpack_require__("./client/src/boot/index.js");

/***/ }),

/***/ "./client/src/components/LeftAndMain.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Toolbar = __webpack_require__("components/Toolbar/Toolbar");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Breadcrumb = __webpack_require__("components/Breadcrumb/Breadcrumb");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breadcrumbs = [{
  text: 'Innovation Week',
  href: 'innovation-week'
}];

var LeftAndMain = function LeftAndMain(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'div',
    { className: 'fill-height' },
    _react2.default.createElement(
      _Toolbar2.default,
      { className: 'fill-width' },
      _react2.default.createElement(_Breadcrumb.Component, { multiline: true, crumbs: breadcrumbs })
    ),
    children
  );
};

exports.default = LeftAndMain;

/***/ }),

/***/ "./client/src/components/ReactAdminBoostrap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Injector = __webpack_require__("lib/Injector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactAdminBoostrap = function ReactAdminBoostrap() {
  var RootComponent = (0, _Injector.loadComponent)(reactAdminConfig.component);
  var _reactAdminConfig = reactAdminConfig,
      props = _reactAdminConfig.props;

  return _react2.default.createElement(RootComponent, props);
};

exports.default = ReactAdminBoostrap;

/***/ }),

/***/ "./client/src/legacy/entwine/BootstrapReactComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Injector = __webpack_require__("lib/Injector");

var _Injector2 = _interopRequireDefault(_Injector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Injector2.default.ready(function () {
  _jquery2.default.entwine('ss', function ($) {
    $('.js-injector-boot .bootstrap-component').entwine({

      Component: null,

      onmatch: function onmatch() {
        var cmsContent = this.closest('.cms-content').attr('id');
        var context = cmsContent ? { context: cmsContent } : {};

        var componentName = this.data('component');
        var Component = (0, _Injector.loadComponent)(componentName, context);

        this.setComponent(Component);
        this._super();
        this.refresh();
      },
      refresh: function refresh() {
        var props = this.getProps();
        var Component = this.getComponent();
        _reactDom2.default.render(_react2.default.createElement(Component, props), this[0]);
      },
      getProps: function getProps() {
        return $(this).data('props') || {};
      },
      onunmatch: function onunmatch() {
        _reactDom2.default.unmountComponentAtNode(this[0]);
      }
    });
  });
});

/***/ }),

/***/ "./client/src/legacy/entwine/BootstrapReactFormField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jquery = __webpack_require__("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Injector = __webpack_require__("lib/Injector");

var _Injector2 = _interopRequireDefault(_Injector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Injector2.default.ready(function () {
  _jquery2.default.entwine('ss', function ($) {
    $('.js-injector-boot .react-form-field').entwine({

      Component: null,
      Value: null,
      HiddenInput: null,

      onmatch: function onmatch() {
        var cmsContent = this.closest('.cms-content').attr('id');
        var context = cmsContent ? { context: cmsContent } : {};

        var componentName = this.data('component');
        var Component = (0, _Injector.loadComponent)(componentName, context);
        this.setComponent(Component);

        var hiddenInputId = this.data('hidden-input-id');
        if (hiddenInputId) {
          var input = $('#' + hiddenInputId);
          this.setHiddenInput(input);
        }

        this._super();
        this.refresh();
      },
      refresh: function refresh() {
        var props = this.getProps();
        var Component = this.getComponent();
        _reactDom2.default.render(_react2.default.createElement(Component, _extends({}, props, { noHolder: true })), this[0]);
      },
      handleChange: function handleChange(event, _ref) {
        var value = _ref.value;

        var input = this.getHiddenInput();
        if (input) {
          input.val(value);
          input.trigger('change');
        }
        this.setValue(value);
        this.refresh();
      },
      getProps: function getProps() {
        var props = $(this).data('props') || {};
        var value = this.getValue();
        if (value !== null) {
          props.value = value;
        }
        props.onChange = this.handleChange.bind(this);
        return props;
      },
      onunmatch: function onunmatch() {
        _reactDom2.default.unmountComponentAtNode(this[0]);
      }
    });
  });
});

/***/ }),

/***/ "./client/src/legacy/entwine/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./client/src/legacy/entwine/BootstrapReactComponent.js");
__webpack_require__("./client/src/legacy/entwine/BootstrapReactFormField.js");

/***/ }),

/***/ "components/Breadcrumb/Breadcrumb":
/***/ (function(module, exports) {

module.exports = Breadcrumb;

/***/ }),

/***/ "components/Toolbar/Toolbar":
/***/ (function(module, exports) {

module.exports = Toolbar;

/***/ }),

/***/ "jquery":
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "lib/Config":
/***/ (function(module, exports) {

module.exports = Config;

/***/ }),

/***/ "lib/Injector":
/***/ (function(module, exports) {

module.exports = Injector;

/***/ }),

/***/ "lib/ReactRouteRegister":
/***/ (function(module, exports) {

module.exports = ReactRouteRegister;

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = ReactDom;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map