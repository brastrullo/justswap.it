webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/RegistrationPage.tsx":
/*!*****************************************!*\
  !*** ./components/RegistrationPage.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./components/Input.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");


var _this = undefined,
    _jsxFileName = "/Users/bradras/Projects/justswap.it/components/RegistrationPage.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var RegistrationPage = function RegistrationPage() {
  var registrationInit = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  var errorMsg = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(registrationInit),
      registrationObj = _useState[0],
      setRegistrationObj = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(errorMsg),
      errorMsgObj = _useState2[0],
      setErrorMsgsObj = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      submitReady = _useState3[0],
      setSubmitReady = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    checkValidity();
  }, [errorMsgObj]);

  var inputHandler = function inputHandler(e) {
    e.preventDefault();
    setRegistrationObj(_objectSpread({}, registrationObj, {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.id, e.target.value)));
    setMessages(e.target);
  };

  var checkValidity = function checkValidity() {
    var arr = Object.entries(errorMsgObj);
    arr.forEach(function (entry) {
      var element = document.querySelectorAll("#".concat(entry[0]));
      element.forEach(function (item) {
        if (entry[1].length > 0) {
          item.classList.add('error');
          item.classList.remove('success');
        } else {
          item.classList.remove('error');
          item.classList.add('success');
        }
      });
    });
    console.log(Object.values(registrationObj));
    var isZeroErrors = arr.every(function (item) {
      return item[1].length === 0;
    });
    setSubmitReady(isZeroErrors);
  };

  var setMessages = function setMessages(target) {
    var pattern;
    var err = '';

    switch (true) {
      case target.id === 'username':
        pattern = /^.{4,10}$/;
        !pattern.test(target.value) && (err += 'Username must be between 4-10 characters in length');
        break;

      case target.id === 'email':
        pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        !pattern.test(target.value) && (err += 'Incorrect email format');
        break;

      case target.id === 'password' || target.id === 'confirmPassword':
        var pMatch = target.id === 'password' && registrationObj.confirmPassword === target.value || target.id === 'confirmPassword' && registrationObj.password === target.value;
        var pLengthCorrect = target.value.length >= 8 && target.value.length <= 16;
        !pLengthCorrect && (err += 'Must be 8-16 characters in length. ');
        !pMatch && (err += 'Passwords must match. ');

      default:
        break;
    }

    target.id === 'password' || target.id === 'confirmPassword' ? setErrorMsgsObj(_objectSpread({}, errorMsgObj, {}, {
      confirmPassword: "".concat(err)
    })) : setErrorMsgsObj(_objectSpread({}, errorMsgObj, {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target.id, "".concat(err))));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx("legend", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "email",
    label: "Email",
    value: registrationObj.email,
    error: errorMsgObj.email,
    onChange: inputHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }), __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    disabled: submitReady,
    text: "Submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RegistrationPage);

/***/ })

})
//# sourceMappingURL=index.js.320f82bfa699f42e213d.hot-update.js.map