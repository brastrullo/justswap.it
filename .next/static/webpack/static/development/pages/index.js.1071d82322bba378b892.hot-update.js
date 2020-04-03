webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_LoginPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LoginPage */ "./components/LoginPage.tsx");
/* harmony import */ var _components_RegistrationPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/RegistrationPage */ "./components/RegistrationPage.tsx");
var _jsxFileName = "/Users/bradras/Projects/justswap.it/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var App = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].main.withConfig({
  displayName: "pages__App",
  componentId: "p9h2wp-0"
})(["font-size:", ";form{margin:0 auto;max-width:30rem;display:flex;flex-flow:column nowrap;}legend{margin:1rem auto;font-size:1.2rem;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.fontSize.base;
});

function HomePage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      displayLogin = _useState[0],
      setDisplayLogin = _useState[1];

  var hideRegistration = function hideRegistration() {
    setDisplayLogin(true);
  };

  return __jsx(App, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, displayLogin ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_RegistrationPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Already registered?"), __jsx("a", {
    href: "",
    onClick: hideRegistration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Login")) : __jsx(_components_LoginPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.1071d82322bba378b892.hot-update.js.map