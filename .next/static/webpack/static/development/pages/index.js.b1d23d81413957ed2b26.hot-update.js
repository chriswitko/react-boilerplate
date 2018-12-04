webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@mapbox/point-geometry/index.js":
false,

/***/ "./node_modules/eventemitter3/index.js":
false,

/***/ "./node_modules/google-map-react/lib/google_heatmap.js":
false,

/***/ "./node_modules/google-map-react/lib/google_map.js":
false,

/***/ "./node_modules/google-map-react/lib/google_map_map.js":
false,

/***/ "./node_modules/google-map-react/lib/google_map_markers.js":
false,

/***/ "./node_modules/google-map-react/lib/google_map_markers_prerender.js":
false,

/***/ "./node_modules/google-map-react/lib/index.js":
false,

/***/ "./node_modules/google-map-react/lib/loaders/google_map_loader.js":
false,

/***/ "./node_modules/google-map-react/lib/marker_dispatcher.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/detect.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/detectElementResize.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/geo.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/isArraysEqualEps.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/isEmpty.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/isNumber.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/isPlainObject.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/lat_lng.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/transform.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/wrap.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/math/log2.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/omit.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/passiveEvents.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/pick.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/raf.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/shallowEqual.js":
false,

/***/ "./node_modules/scriptjs/dist/script.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../index.js */ "./index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");








var menu = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"].Item, {
  key: "0"
}, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
  href: "http://www.alipay.com/"
}, "Show All")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"].Divider, null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"].Item, {
  key: "1"
}, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
  href: "http://www.taobao.com/"
}, "Notes")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"].Item, {
  key: "3"
}, "Shops"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"].Item, {
  key: "4"
}, "Food & Drink"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"].Divider, null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Menu"].Item, {
  key: "5"
}, "Want To Go"));
var FormItem = antd__WEBPACK_IMPORTED_MODULE_7__["Form"].Item;
var Option = antd__WEBPACK_IMPORTED_MODULE_7__["Select"].Option;

var AnyReactComponent = function AnyReactComponent(_ref) {
  var text = _ref.text;
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, text);
};

var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(IndexPage, _React$Component);

  function IndexPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IndexPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(IndexPage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IndexPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_index_js__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          display: "flex",
          flex: 1,
          height: "100vh",
          width: "100vw"
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          zIndex: 100,
          position: "absolute",
          top: 10,
          left: 10,
          background: "white",
          padding: 10,
          borderRadius: 3,
          boxShadow: "0 2px 4px rgba(0,0,0,0.2), 0 -1px 0px rgba(0,0,0,0.02)"
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Avatar"], {
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
        type: "vertical"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "environment"
      }), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        style: {
          color: 'black'
        }
      }, "See"), "gment"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
        type: "vertical"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        type: "primary"
      }, "Add New Story"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Dropdown"], {
        overlay: menu,
        trigger: ["click"]
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "ant-dropdown-link",
        href: "#"
      }, "Show All ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        type: "down"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
        type: "vertical"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        type: "ghost",
        icon: "search"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(GoogleMapReactComponent, null)));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.b1d23d81413957ed2b26.hot-update.js.map