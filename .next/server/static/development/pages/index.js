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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
  disabled,
  onClick
}) {
  return __jsx("button", {
    disabled: disabled,
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
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
  min = ''
}) {
  const inputSuccess = value.length > 0 && error.length === 0;
  return __jsx(StyledInput, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx("label", {
    htmlFor: id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, label), __jsx("div", {
    className: `input-container ${inputSuccess ? 'input-success' : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
    autoComplete: autoComplete,
    required: required,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), error.length > 0 && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mockData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mockData.json */ "./mockData.json");
var _mockData_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../mockData.json */ "./mockData.json", 1);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "./components/Input.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");
/* harmony import */ var _reducers_usersSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/usersSlice */ "./reducers/usersSlice.ts");
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
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    loading,
    usersArray
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.users);
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
      setLoginReady(true);
    } else {
      setLoginReady(false);
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
    const foundUser = _mockData_json__WEBPACK_IMPORTED_MODULE_2__.users.filter(user => user.email === email);

    if (email.length > 0 && foundUser.length === 0) {
      return 'Email not found.';
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(Object(_reducers_usersSlice__WEBPACK_IMPORTED_MODULE_5__["loginUser"])(loginObj));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx("legend", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "Login JustSwap.it"), __jsx(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "user",
    label: "Email",
    autoComplete: "username",
    error: doesUserExist(loginObj.user),
    value: loginObj.user,
    onChange: inputHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "pass",
    label: "Password",
    type: "password",
    autoComplete: "current-password",
    value: loginObj.pass,
    onChange: inputHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disabled: !loginReady,
    text: "Login",
    onClick: submitHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state)(LoginPage));

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./components/Input.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");
/* harmony import */ var _reducers_usersSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/usersSlice */ "./reducers/usersSlice.ts");
/* harmony import */ var _mockData_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mockData.json */ "./mockData.json");
var _mockData_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../mockData.json */ "./mockData.json", 1);
var _jsxFileName = "/Users/bradras/Projects/justswap.it/components/RegistrationPage.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const RegistrationPage = props => {
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
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    loading,
    usersArray
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.users);
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
        pattern = /^\w{3,15}$/;
        !pattern.test(target.value) && (err += 'Username must be between 3-15 characters in length.');
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
    const getData = _mockData_json__WEBPACK_IMPORTED_MODULE_5__;
    const foundUser = getData.users.filter(user => user.username === username);
    return foundUser.length === 0;
  };

  const isEmailAvailable = email => {
    const getData = _mockData_json__WEBPACK_IMPORTED_MODULE_5__;
    const foundUser = getData.users.filter(user => user.email === email);
    return foundUser.length === 0;
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(Object(_reducers_usersSlice__WEBPACK_IMPORTED_MODULE_4__["registerUser"])(registrationObj));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx("legend", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, "Register Account"), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      lineNumber: 118,
      columnNumber: 7
    }
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "email",
    label: "Email",
    value: registrationObj.email,
    error: errorMsgObj.email,
    onChange: inputHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      lineNumber: 134,
      columnNumber: 7
    }
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      lineNumber: 144,
      columnNumber: 7
    }
  }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: submitHandler,
    disabled: !submitReady,
    text: "Submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state)(RegistrationPage));

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LoginPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LoginPage */ "./components/LoginPage.tsx");
/* harmony import */ var _components_RegistrationPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RegistrationPage */ "./components/RegistrationPage.tsx");
var _jsxFileName = "/Users/bradras/Projects/justswap.it/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const App = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.main.withConfig({
  displayName: "pages__App",
  componentId: "p9h2wp-0"
})(["font-size:", ";text-align:center;form{margin:0 auto;max-width:30rem;display:flex;flex-flow:column nowrap;}legend{margin:1rem auto;font-size:1.2rem;}& > p{margin:1rem 0 0;}"], ({
  theme
}) => theme.fontSize.base);

function HomePage(props) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    currentUser
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.users);
  const {
    0: toggleLogin,
    1: setToggleLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const notLoggedIn = Object.keys(currentUser).length === 0;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (notLoggedIn) {
      console.log('Please login.');
    } else {
      console.log({
        currentUser
      });
    }
  }, [currentUser]);

  const registrationLoginToggle = () => {
    setToggleLogin(!toggleLogin);
  };

  return __jsx(App, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, notLoggedIn ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "Welcome to ", props.custom.title), toggleLogin ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_LoginPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, "Need to register?"), __jsx("button", {
    onClick: registrationLoginToggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, "Register")) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_RegistrationPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 15
    }
  }, "Already registered?"), __jsx("button", {
    onClick: registrationLoginToggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, "Login"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Logged in"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, JSON.stringify(currentUser))));
}

HomePage.getInitialProps = ({
  store,
  isServer,
  pathname,
  query
}) => {
  // pass custom props by returning an {object} containing key [custom]
  return {
    custom: {
      title: 'JustSwap.it'
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state)(HomePage));

/***/ }),

/***/ "./reducers/usersSlice.ts":
/*!********************************!*\
  !*** ./reducers/usersSlice.ts ***!
  \********************************/
/*! exports provided: registerUser, loginUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_asyncActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/asyncActions */ "./utils/asyncActions.ts");

 // TYPESCRIPT BUILDER API EXAMPLE
// createReducer(0, builder =>
//   builder.addCase(increment, (state, action) => {
//     // action is inferred correctly here
//   })
// )

function withPayloadType() {
  return t => ({
    payload: t
  });
}

const usersLoading = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('users/loading');
const usersReceived = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('users/received');
const logUsers = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('users/log');
const setCurrentUser = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAction"])('users/setUser', withPayloadType());
const registerUser = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('users/createUser', async (obj, thunkAPI) => {
  return await Object(_utils_asyncActions__WEBPACK_IMPORTED_MODULE_1__["postNewUser"])(obj);
});
const loginUser = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('users/login', async (obj, thunkAPI) => {
  return await Object(_utils_asyncActions__WEBPACK_IMPORTED_MODULE_1__["getUserAccess"])(obj);
});
const usersSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'users',
  initialState: {
    loading: 'idle',
    currentUser: {},
    usersArray: []
  },
  reducers: {
    [setCurrentUser.type]: (state, action) => {
      state.currentUser = action.payload;
      console.log(state.currentUser);
      return state;
    },
    [usersLoading.type]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    [usersReceived.type]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.usersArray = action.payload;
      }
    },
    [logUsers.type]: (state, action) => {
      console.log('Log Users:', state.usersArray);
      return state;
    }
  },
  extraReducers: builder => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      return state;
    });
  }
});
const {
  actions,
  reducer
} = usersSlice;
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./utils/asyncActions.ts":
/*!*******************************!*\
  !*** ./utils/asyncActions.ts ***!
  \*******************************/
/*! exports provided: getUserAccess, postNewUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAccess", function() { return getUserAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postNewUser", function() { return postNewUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./utils/utils.ts");


const getUserAccess = obj => {
  const dataTransformer = data => {
    return {
      email: data.user,
      password: data.pass
    };
  };

  const transformedData = dataTransformer(obj);

  const createToken = async () => {
    return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://localhost:8000/api/auth/jwt/create', transformedData).then(function (response) {
      return response.data;
    }).catch(_utils__WEBPACK_IMPORTED_MODULE_1__["catchError"]);
  };

  const getUserInfo = async token => {
    return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://localhost:8000/api/auth/users/me', {
      params: transformedData,
      headers: {
        Authorization: `Bearer ${token.access}`
      }
    }).then(function (response) {
      return response.data;
    }).catch(_utils__WEBPACK_IMPORTED_MODULE_1__["catchError"]);
  };

  return createToken().then(token => getUserInfo(token)).then(user => user);
};
const postNewUser = obj => {
  console.log('Received', {
    obj
  });

  const dataTransformer = data => {
    return {
      username: data.username,
      email: data.email,
      password: data.password
    };
  };

  const transformedData = dataTransformer(obj);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('http://localhost:8000/api/auth/users/', transformedData).then(function (response) {
    console.log(response);
  }).catch(_utils__WEBPACK_IMPORTED_MODULE_1__["catchError"]);
};

/***/ }),

/***/ "./utils/utils.ts":
/*!************************!*\
  !*** ./utils/utils.ts ***!
  \************************/
/*! exports provided: catchError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catchError", function() { return catchError; });
const catchError = error => {
  if (error.response) {
    console.log('__Response__');
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log('Req:', error.request);
  } else {
    console.log('Error: ', error.message);
  }

  console.log(error.config);
};

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bradras/Projects/justswap.it/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

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