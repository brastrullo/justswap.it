module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button.tsx":
/*!*******************************!*\
  !*** ./components/Button.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/bradras/Projects/justswap.it/components/Button.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Button({
  text,
  disabled
}) {
  return __jsx("button", {
    disabled: disabled,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 10
    }
  }, text);
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Input.tsx":
/*!******************************!*\
  !*** ./components/Input.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bradras/Projects/justswap.it/components/Input.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Input__StyledInput",
  componentId: "sc-1f5sbft-0"
})(["margin-bottom:1rem;.input-container{position:relative;}input{width:100%;box-sizing:border-box;}input.error{border:1px solid red;}.input-success::after{display:inline-block;content:'*';position:absolute;top:0;right:1rem;color:green;}"]);

function Input({
  id,
  label,
  onChange,
  value,
  type = 'text',
  required = false,
  error = '',
  autoComplete = '',
  max = '',
  min = '',
  pattern = ''
}) {
  const inputSuccess = value.length > 0 && error.length === 0;
  return __jsx(StyledInput, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, label), __jsx("div", {
    className: `input-container ${inputSuccess ? 'input-success' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: type,
    id: id,
    name: id,
    value: value,
    onChange: onChange,
    min: min,
    max: max,
    pattern: pattern,
    autoComplete: autoComplete,
    required: required,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), error.length > 0 && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, error));
}

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/LoginPage.tsx":
/*!**********************************!*\
  !*** ./components/LoginPage.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mockData_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mockData.json */ "./mockData.json");
var _mockData_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../mockData.json */ "./mockData.json", 1);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./components/Input.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");
var _jsxFileName = "/Users/bradras/Projects/justswap.it/components/LoginPage.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import GoogleLogin from 'react-google-login';

const LoginPage = () => {
  const loginInit = {
    user: '',
    pass: ''
  };
  const {
    0: loginObj,
    1: setLoginObj
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(loginInit);
  const {
    0: loginReady,
    1: setLoginReady
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(loginObj);
    const allFieldsFilled = Object.values(loginObj).every(item => item.length > 0);

    if (allFieldsFilled) {
      setLoginReady(!loginReady);
    } else {
      setLoginReady(!loginReady);
    }
  }, [loginObj]);

  const inputHandler = e => {
    e.preventDefault();
    setLoginObj(_objectSpread({}, loginObj, {}, {
      [e.target.id]: e.target.value
    }));
  }; // const responseGoogle = (response) => {
  //   console.log(response);
  // }


  const doesUserExist = email => {
    const foundUser = _mockData_json__WEBPACK_IMPORTED_MODULE_1__.users.filter(user => user.email === email);

    if (email.length > 0 && foundUser.length === 0) {
      return 'Email not found.';
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("legend", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Login JustSwap.it"), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "user",
    label: "Email",
    autoComplete: "username",
    error: doesUserExist(loginObj.user),
    value: loginObj.user,
    onChange: inputHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "pass",
    label: "Password",
    type: "password",
    autoComplete: "current-password",
    value: loginObj.pass,
    onChange: inputHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    disabled: loginReady,
    text: "Login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

/***/ }),

/***/ "./components/RegistrationPage.tsx":
/*!*****************************************!*\
  !*** ./components/RegistrationPage.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ "./components/Input.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");
/* harmony import */ var _mockData_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mockData.json */ "./mockData.json");
var _mockData_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../mockData.json */ "./mockData.json", 1);
var _jsxFileName = "/Users/bradras/Projects/justswap.it/components/RegistrationPage.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const RegistrationPage = () => {
  const registrationInit = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  const errorMsg = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  const {
    0: registrationObj,
    1: setRegistrationObj
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(registrationInit);
  const {
    0: errorMsgObj,
    1: setErrorMsgsObj
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(errorMsg);
  const {
    0: submitReady,
    1: setSubmitReady
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    isValid();
  }, [errorMsgObj]);

  const inputHandler = e => {
    e.preventDefault();
    setRegistrationObj(_objectSpread({}, registrationObj, {}, {
      [e.target.id]: e.target.value
    }));
    setMessages(e.target);
  };

  const isValid = () => {
    const arr = Object.entries(errorMsgObj);
    arr.forEach(entry => {
      const element = document.querySelectorAll(`#${entry[0]}`);
      element.forEach(item => {
        if (entry[1].length > 0) {
          item.classList.add('error');
          item.classList.remove('success');
        } else {
          item.classList.remove('error');
          item.classList.add('success');
        }
      });
    });
    const allFieldsFilled = Object.values(registrationObj).every(item => item.length > 0);
    const isZeroErrors = arr.every(item => item[1].length === 0);
    setSubmitReady(isZeroErrors && allFieldsFilled);
  };

  const setMessages = target => {
    let pattern;
    let err = '';

    switch (true) {
      case target.id === 'username':
        pattern = /^.{4,10}$/;
        !pattern.test(target.value) && (err += 'Username must be between 4-10 characters in length.');
        !isNameAvailable(target.value) && (err = 'Username taken.');
        break;

      case target.id === 'email':
        pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        !pattern.test(target.value) && (err += 'Incorrect email format');
        !isEmailAvailable(target.value) && (err = 'Email already registered.');
        break;

      case target.id === 'password' || target.id === 'confirmPassword':
        const pMatch = target.id === 'password' && registrationObj.confirmPassword === target.value || target.id === 'confirmPassword' && registrationObj.password === target.value;
        const pLengthCorrect = registrationObj.password.length >= 8 && registrationObj.password.length <= 16;
        !pLengthCorrect && (err += 'Must be 8-16 characters in length. ');
        !pMatch && (err += 'Passwords must match. ');

      default:
        break;
    }

    target.id === 'password' || target.id === 'confirmPassword' ? setErrorMsgsObj(_objectSpread({}, errorMsgObj, {}, {
      confirmPassword: `${err}`
    })) : setErrorMsgsObj(_objectSpread({}, errorMsgObj, {}, {
      [target.id]: `${err}`
    }));
  };

  const isNameAvailable = username => {
    const getData = _mockData_json__WEBPACK_IMPORTED_MODULE_3__;
    const foundUser = getData.users.filter(user => user.username === username);
    return foundUser.length === 0;
  };

  const isEmailAvailable = email => {
    const getData = _mockData_json__WEBPACK_IMPORTED_MODULE_3__;
    const foundUser = getData.users.filter(user => user.email === email);
    return foundUser.length === 0;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx("legend", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, "Register Account"), __jsx(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "username",
    label: "Username",
    min: "4",
    max: "10",
    value: registrationObj.username,
    error: errorMsgObj.username,
    onChange: inputHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "email",
    label: "Email",
    value: registrationObj.email,
    error: errorMsgObj.email,
    onChange: inputHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "password",
    label: "Password",
    type: "password",
    min: "8",
    max: "16",
    autoComplete: "new-password",
    value: registrationObj.password,
    onChange: inputHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    min: "8",
    max: "16",
    autoComplete: "new-password",
    value: registrationObj.confirmPassword,
    error: errorMsgObj.confirmPassword,
    onChange: inputHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    disabled: !submitReady,
    text: "Submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RegistrationPage);

/***/ }),

/***/ "./mockData.json":
/*!***********************!*\
  !*** ./mockData.json ***!
  \***********************/
/*! exports provided: users, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"users\":[{\"id\":0,\"email\":\"brastrullo@gmail.com\",\"username\":\"bradras\"},{\"id\":1,\"email\":\"radek@gmail.com\",\"username\":\"radek\"}]}");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_LoginPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LoginPage */ "./components/LoginPage.tsx");
/* harmony import */ var _components_RegistrationPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/RegistrationPage */ "./components/RegistrationPage.tsx");
var _jsxFileName = "/Users/bradras/Projects/justswap.it/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const App = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "pages__App",
  componentId: "p9h2wp-0"
})(["font-size:", ";text-align:center;form{margin:0 auto;max-width:30rem;display:flex;flex-flow:column nowrap;}legend{margin:1rem auto;font-size:1.2rem;}& > p{margin:1rem 0 0;}"], ({
  theme
}) => theme.fontSize.base);

function HomePage() {
  const {
    0: toggleLogin,
    1: setToggleLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const hideRegistration = () => {
    setToggleLogin(!toggleLogin);
  };

  return __jsx(App, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, toggleLogin ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_LoginPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Need to register?"), __jsx("button", {
    onClick: hideRegistration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "Register")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_RegistrationPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Already registered?"), __jsx("button", {
    onClick: hideRegistration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Login")));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bradras/Projects/justswap.it/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map