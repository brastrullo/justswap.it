webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/LoginPage.tsx":
/*!**********************************!*\
  !*** ./components/LoginPage.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mockData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mockData.json */ "./mockData.json");
var _mockData_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../mockData.json */ "./mockData.json", 1);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./components/Input.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");


var _this = undefined,
    _jsxFileName = "/Users/bradras/Projects/justswap.it/components/LoginPage.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // import GoogleLogin from 'react-google-login';

var LoginPage = function LoginPage() {
  var loginInit = {
    user: '',
    pass: ''
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(loginInit),
      loginObj = _useState[0],
      setLoginObj = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loginReady = _useState2[0],
      setLoginReady = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(loginObj);
    var allFieldsFilled = Object.values(loginObj).every(function (item) {
      return item.length > 0;
    });

    if (allFieldsFilled) {
      setLoginReady(true);
    } else {
      setLoginReady(false);
    }
  }, [loginObj]);

  var inputHandler = function inputHandler(e) {
    e.preventDefault();
    setLoginObj(_objectSpread({}, loginObj, {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.id, e.target.value)));
  }; // const responseGoogle = (response) => {
  //   console.log(response);
  // }


  var doesUserExist = function doesUserExist(email) {
    var foundUser = _mockData_json__WEBPACK_IMPORTED_MODULE_2__.users.filter(function (user) {
      return user.email === email;
    });

    if (email.length > 0 && foundUser.length === 0) {
      return 'Email not found.';
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Login JustSwap.it"), __jsx(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "user",
    label: "Email",
    autoComplete: "username",
    error: doesUserExist(loginObj.user),
    value: loginObj.user,
    onChange: inputHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "pass",
    label: "Password",
    type: "password",
    autoComplete: "current-password",
    value: loginObj.pass,
    onChange: inputHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disabled: loginReady,
    text: "Login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

/***/ })

})
//# sourceMappingURL=index.js.5765009be1e2d67019eb.hot-update.js.map