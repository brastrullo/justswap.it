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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_LoginPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LoginPage */ "./components/LoginPage.tsx");
/* harmony import */ var _components_RegistrationPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RegistrationPage */ "./components/RegistrationPage.tsx");
/* harmony import */ var _reducers_usersSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/usersSlice */ "./reducers/usersSlice.ts");
var _jsxFileName = "/Users/bradras/Projects/justswap.it/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var App = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].main.withConfig({
  displayName: "pages__App",
  componentId: "p9h2wp-0"
})(["font-size:", ";text-align:center;form{margin:0 auto;max-width:30rem;display:flex;flex-flow:column nowrap;}legend{margin:1rem auto;font-size:1.2rem;}& > p{margin:1rem 0 0;}"], function (_ref) {
  var theme = _ref.theme;
  return theme.fontSize.base;
});

function HomePage(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      userObj = _useState[0],
      setUserObj = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      toggleLogin = _useState2[0],
      setToggleLogin = _useState2[1];

  var notLoggedIn = Object.keys(userObj).length === 0;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (notLoggedIn) {
      console.log('Please login.');
    } else {
      console.log({
        userObj: userObj
      });
    }
  }, [userObj]);

  var hideRegistration = function hideRegistration() {
    setToggleLogin(!toggleLogin);
  };

  console.log({
    mockUsers: props.users.usersArray
  });
  return __jsx(App, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, notLoggedIn ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, "Welcome to ", props.custom.title), toggleLogin ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_LoginPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setUserObj: setUserObj,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "Need to register?"), __jsx("button", {
    onClick: hideRegistration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "Register")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_RegistrationPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, "Already registered?"), __jsx("button", {
    onClick: hideRegistration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, "Login"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Logged in"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, JSON.stringify(userObj))));
}

HomePage.getInitialProps = function (_ref2) {
  var store = _ref2.store,
      isServer = _ref2.isServer,
      pathname = _ref2.pathname,
      query = _ref2.query;
  store.dispatch(Object(_reducers_usersSlice__WEBPACK_IMPORTED_MODULE_5__["logUsers"])());
  store.dispatch(Object(_reducers_usersSlice__WEBPACK_IMPORTED_MODULE_5__["createUser"])('testuser'));
  return {
    custom: {
      title: 'JustSwap.it'
    }
  }; // pass custom props with an {object} containing key [custom]
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return state;
})(HomePage));

/***/ })

})
//# sourceMappingURL=index.js.44b80b5685f1b99b19d7.hot-update.js.map