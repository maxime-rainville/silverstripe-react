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

var _LeftAndMain = __webpack_require__("./client/src/components/LeftAndMain/index.js");

var _ReactAdminDefaultComponent = __webpack_require__("./client/src/components/ReactAdminDefaultComponent.js");

var _ReactAdminDefaultComponent2 = _interopRequireDefault(_ReactAdminDefaultComponent);

var _ReactAdminErrorComponent = __webpack_require__("./client/src/components/ReactAdminErrorComponent.js");

var _ReactAdminErrorComponent2 = _interopRequireDefault(_ReactAdminErrorComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _Injector2.default.component.registerMany({
    LeftAndMain: _LeftAndMain.LeftAndMain,
    ReactAdminDefaultComponent: _ReactAdminDefaultComponent2.default,
    ReactAdminErrorComponent: _ReactAdminErrorComponent2.default
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
  if (typeof reactAdminConfig === 'undefined') {
    return;
  }

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

/***/ "./client/src/components/LeftAndMain/ActionBar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = __webpack_require__("components/Button/Button");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionBar = function ActionBar(_ref) {
  var actions = _ref.actions,
      isBottomActionBar = _ref.isBottomActionBar;

  var actionBarClass = (0, _classnames2.default)({
    "action-bar": true,
    "fill-width": true,
    "action-bar--bottom": isBottomActionBar
  });

  var actionButtons = actions.map(function (action) {
    return _react2.default.createElement(
      _Button2.default,
      _extends({ key: action.value }, action),
      action.label
    );
  });

  return _react2.default.createElement(
    'div',
    { className: actionBarClass },
    _react2.default.createElement(
      'div',
      { className: 'btn-toolbar' },
      actionButtons
    )
  );
};

ActionBar.propTypes = _extends({}, _Button2.default.propTypes, {
  actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.string.isRequired,
    label: _propTypes2.default.string.isRequired
  })),
  isBottomActionBar: _propTypes2.default.bool
});

ActionBar.defaultProps = _extends({}, _Button2.default.defaultProps, {
  actions: [],
  isBottomActionBar: false
});

exports.default = ActionBar;

/***/ }),

/***/ "./client/src/components/LeftAndMain/HeaderComponent.js":
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

var _NavTabs = __webpack_require__("./client/src/components/LeftAndMain/NavTabs.js");

var _NavTabs2 = _interopRequireDefault(_NavTabs);

var _propTypes = __webpack_require__("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onBackButtonClick = function onBackButtonClick() {
  var lastCrumb = document.querySelector('.breadcrumb > .breadcrumb__item:last-child > *');
  if (lastCrumb) {
    lastCrumb.click();
  }
};

var HeaderComponent = function HeaderComponent(_ref) {
  var breadcrumbs = _ref.breadcrumbs,
      title = _ref.title,
      tabProps = _ref.tabProps;

  var crumbs = breadcrumbs && breadcrumbs.length > 0 ? breadcrumbs : [{ text: title }];

  return _react2.default.createElement(
    _Toolbar2.default,
    {
      className: 'fill-width',
      showBackButton: crumbs.length > 1,
      onBackButtonClick: onBackButtonClick
    },
    _react2.default.createElement(_Breadcrumb.Component, { multiline: true, crumbs: crumbs }),
    tabProps && _react2.default.createElement(_NavTabs2.default, tabProps)
  );
};

HeaderComponent.propTypes = {
  title: _propTypes2.default.string,
  breadcrumbs: _Breadcrumb.Component.propTypes.crumbs,
  tabProps: _propTypes2.default.shape(_NavTabs2.default.propTypes)
};

exports.default = HeaderComponent;

/***/ }),

/***/ "./client/src/components/LeftAndMain/LeftAndMain.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _HeaderComponent = __webpack_require__("./client/src/components/LeftAndMain/HeaderComponent.js");

var _HeaderComponent2 = _interopRequireDefault(_HeaderComponent);

var _ActionBar = __webpack_require__("./client/src/components/LeftAndMain/ActionBar.js");

var _ActionBar2 = _interopRequireDefault(_ActionBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeftAndMain = function LeftAndMain(_ref) {
  var children = _ref.children,
      topActions = _ref.topActions,
      bottomActions = _ref.bottomActions,
      title = _ref.title,
      breadcrumbs = _ref.breadcrumbs,
      tabProps = _ref.tabProps;
  return _react2.default.createElement(
    'div',
    { className: 'left-and-main fill-height' },
    _react2.default.createElement(_HeaderComponent2.default, { breadcrumbs: breadcrumbs, title: title, tabProps: tabProps }),
    _react2.default.createElement(
      'div',
      { className: 'panel panel--padded panel--scrollable' },
      topActions.length > 0 && _react2.default.createElement(_ActionBar2.default, { actions: topActions }),
      children,
      bottomActions.length > 0 && _react2.default.createElement(_ActionBar2.default, { actions: bottomActions, isBottomActionBar: true })
    )
  );
};

LeftAndMain.propTypes = _extends({}, _HeaderComponent2.default.propTypes, {
  topActions: _propTypes2.default.array,
  bottomActions: _propTypes2.default.array
});

LeftAndMain.defaultProps = {
  topActions: [],
  bottomActions: [],
  tabs: [],
  breadcrumbs: []
};

exports.default = LeftAndMain;

/***/ }),

/***/ "./client/src/components/LeftAndMain/NavTabs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var NavTab = function NavTab(_ref) {
  var current = _ref.current,
      TabComponent = _ref.component,
      className = _ref.className,
      title = _ref.title,
      children = _ref.children,
      tabProps = _objectWithoutProperties(_ref, ['current', 'component', 'className', 'title', 'children']);

  var tabClass = (0, _classnames2.default)('nav-tabs__tab-item', { 'nav-tabs__tab-item--current': current });

  var linkClass = (0, _classnames2.default)(className, 'nav-tabs__link', { 'nav-tabs__link--current': current });

  return _react2.default.createElement(
    'li',
    { className: tabClass },
    _react2.default.createElement(
      TabComponent,
      _extends({}, tabProps, { role: 'tab', className: linkClass }),
      children || title
    )
  );
};

var NavTabs = function NavTabs(_ref2) {
  var tabs = _ref2.tabs,
      className = _ref2.className,
      component = _ref2.component,
      current = _ref2.current;

  var navTabClass = (0, _classnames2.default)(className, 'nav-tabs');

  return _react2.default.createElement(
    'ul',
    { className: navTabClass, role: 'tablist' },
    tabs.map(function (_ref3) {
      var key = _ref3.key,
          tabProps = _objectWithoutProperties(_ref3, ['key']);

      return _react2.default.createElement(NavTab, _extends({ key: key, current: current === key, component: component }, tabProps));
    })
  );
};

NavTabs.propTypes = {
  component: _propTypes2.default.elementType,
  classNames: _propTypes2.default.string,
  current: _propTypes2.default.string,
  tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    key: _propTypes2.default.string,
    title: _propTypes2.default.string,
    component: _propTypes2.default.elementType
  }))
};

NavTabs.defaultProps = {
  component: 'a',
  tabs: []
};

exports.default = NavTabs;

/***/ }),

/***/ "./client/src/components/LeftAndMain/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeftAndMain = undefined;

var _LeftAndMain = __webpack_require__("./client/src/components/LeftAndMain/LeftAndMain.js");

var _LeftAndMain2 = _interopRequireDefault(_LeftAndMain);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.LeftAndMain = _LeftAndMain2.default;

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

var _Injector2 = _interopRequireDefault(_Injector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var takeComponent = function takeComponent(componentName) {
  if (typeof componentName === 'string' && componentName !== '') {
    try {
      _Injector2.default.component.get(componentName);
      return (0, _Injector.loadComponent)(componentName);
    } catch (error) {
      console.warn(error.message);
      return (0, _Injector.loadComponent)("ReactAdminErrorComponent");
    }
  }
  return (0, _Injector.loadComponent)("ReactAdminErrorComponent");
};

var ReactAdminBoostrap = function ReactAdminBoostrap() {
  var RootComponent = takeComponent(reactAdminConfig.component);
  var _reactAdminConfig = reactAdminConfig,
      props = _reactAdminConfig.props;


  return _react2.default.createElement(RootComponent, props);
};

exports.default = ReactAdminBoostrap;

/***/ }),

/***/ "./client/src/components/ReactAdminDefaultComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Injector = __webpack_require__("lib/Injector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breadcrumbs = [{
    text: 'React Admin Default Component',
    href: '#'
}];

var LeftAndMain = (0, _Injector.loadComponent)('LeftAndMain');

var ReactAdminDefaultComponent = function ReactAdminDefaultComponent() {

    return _react2.default.createElement(
        LeftAndMain,
        { breadcrumbs: breadcrumbs },
        'To create new component, you should to do the following...'
    );
};

exports.default = ReactAdminDefaultComponent;

/***/ }),

/***/ "./client/src/components/ReactAdminErrorComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _Injector = __webpack_require__("lib/Injector");

var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breadcrumbs = [{
    text: 'Component NOT FOUND',
    href: '#'
}];

var LeftAndMain = (0, _Injector.loadComponent)('LeftAndMain');

var ReactAdminErrorComponent = function ReactAdminErrorComponent(_ref) {
    var componentName = _ref.componentName;


    return _react2.default.createElement(
        LeftAndMain,
        { breadcrumbs: breadcrumbs },
        _react2.default.createElement(
            'div',
            { className: 'error-message' },
            _react2.default.createElement(
                'h1',
                null,
                '404'
            ),
            _react2.default.createElement(
                'h2',
                null,
                'Component Not Found :('
            )
        )
    );
};

exports.default = ReactAdminErrorComponent;

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

        var Component = void 0;

        try {
          _Injector2.default.component.get(componentName);
          Component = (0, _Injector.loadComponent)(componentName, context);
        } catch (error) {
          console.error(error.message);
          return;
        }

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

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = classnames;

/***/ }),

/***/ "components/Breadcrumb/Breadcrumb":
/***/ (function(module, exports) {

module.exports = Breadcrumb;

/***/ }),

/***/ "components/Button/Button":
/***/ (function(module, exports) {

module.exports = Button;

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

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = PropTypes;

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