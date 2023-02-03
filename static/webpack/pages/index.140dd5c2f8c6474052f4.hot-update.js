webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Navbar/Navbar.js":
/*!*************************************!*\
  !*** ./components/Navbar/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/Header */ "./components/header/Header.js");



var _jsxFileName = "C:\\Users\\Sam Lin\\OneDrive - A.S. Mazzocchi\\\u684C\u9762\\WEB\\webpageReact\\downloadable\\elito dark\\components\\Navbar\\Navbar.js",
    _s = $RefreshSig$();



function Navbar(props, _ref) {
  _s();

  var defaultAccountChange = _ref.defaultAccountChange;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      scroll = _React$useState2[0],
      setScroll = _React$useState2[1];

  var handleScroll = function handleScroll() {
    return setScroll(document.documentElement.scrollTop);
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    window.addEventListener("scroll", handleScroll);
    return function () {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []); // const handleDefaultAccount = (value) => {
  //   console.log(value);
  //   defaultAccountChange(value)
  // }

  var className = scroll > 80 ? "fixed-navbar active" : "fixed-navbar";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: className,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      hclass: props.hclass,
      Logo: props.Logo,
      topbarNone: props.topbarNone // defaultAccountChange={handleDefaultAccount}

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

_s(Navbar, "JTWh8Ghx6FsMkBul6++zT/uRfFc=");

_c = Navbar;

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsInByb3BzIiwiZGVmYXVsdEFjY291bnRDaGFuZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwic2Nyb2xsIiwic2V0U2Nyb2xsIiwiaGFuZGxlU2Nyb2xsIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzTmFtZSIsImhjbGFzcyIsIkxvZ28iLCJ0b3BiYXJOb25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsUUFBaUQ7QUFBQTs7QUFBQSxNQUF4QkMsb0JBQXdCLFFBQXhCQSxvQkFBd0I7O0FBQUEsd0JBQ2xDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQURrQztBQUFBO0FBQUEsTUFDdkRDLE1BRHVEO0FBQUEsTUFDL0NDLFNBRCtDOztBQUc5RCxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU1ELFNBQVMsQ0FBQ0UsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUExQixDQUFmO0FBQUEsR0FBckI7O0FBRUFQLDhDQUFLLENBQUNRLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ04sWUFBbEM7QUFDQSxXQUFPO0FBQUEsYUFBTUssTUFBTSxDQUFDRSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1AsWUFBckMsQ0FBTjtBQUFBLEtBQVA7QUFDRCxHQUhELEVBR0csRUFISCxFQUw4RCxDQVU5RDtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNUSxTQUFTLEdBQUdWLE1BQU0sR0FBRyxFQUFULEdBQWMscUJBQWQsR0FBc0MsY0FBeEQ7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRVUsU0FBaEI7QUFBQSwyQkFDRSxxRUFBQyxzREFBRDtBQUNFLFlBQU0sRUFBRWQsS0FBSyxDQUFDZSxNQURoQjtBQUVFLFVBQUksRUFBRWYsS0FBSyxDQUFDZ0IsSUFGZDtBQUdFLGdCQUFVLEVBQUVoQixLQUFLLENBQUNpQixVQUhwQixDQUlFOztBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7R0ExQnVCbEIsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNDBkZDVjMmY4YzY0NzQwNTJmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9IZWFkZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHByb3BzLCB7IGRlZmF1bHRBY2NvdW50Q2hhbmdlIH0pIHtcclxuICBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHNldFNjcm9sbChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZURlZmF1bHRBY2NvdW50ID0gKHZhbHVlKSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgLy8gICBkZWZhdWx0QWNjb3VudENoYW5nZSh2YWx1ZSlcclxuICAvLyB9XHJcbiAgY29uc3QgY2xhc3NOYW1lID0gc2Nyb2xsID4gODAgPyBcImZpeGVkLW5hdmJhciBhY3RpdmVcIiA6IFwiZml4ZWQtbmF2YmFyXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgPEhlYWRlclxyXG4gICAgICAgIGhjbGFzcz17cHJvcHMuaGNsYXNzfVxyXG4gICAgICAgIExvZ289e3Byb3BzLkxvZ299XHJcbiAgICAgICAgdG9wYmFyTm9uZT17cHJvcHMudG9wYmFyTm9uZX1cclxuICAgICAgICAvLyBkZWZhdWx0QWNjb3VudENoYW5nZT17aGFuZGxlRGVmYXVsdEFjY291bnR9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==