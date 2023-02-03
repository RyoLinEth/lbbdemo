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



function Navbar(props) {
  _s();

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
  }, []);

  var handleDefaultAccount = function handleDefaultAccount(value) {
    props.defaultAccountChange(value);
  };

  var className = scroll > 80 ? "fixed-navbar active" : "fixed-navbar";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: className,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      hclass: props.hclass,
      Logo: props.Logo,
      topbarNone: props.topbarNone,
      defaultAccountChange: handleDefaultAccount
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNjcm9sbCIsInNldFNjcm9sbCIsImhhbmRsZVNjcm9sbCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVEZWZhdWx0QWNjb3VudCIsInZhbHVlIiwiZGVmYXVsdEFjY291bnRDaGFuZ2UiLCJjbGFzc05hbWUiLCJoY2xhc3MiLCJMb2dvIiwidG9wYmFyTm9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBQUEsd0JBQ1JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBRFE7QUFBQTtBQUFBLE1BQzdCQyxNQUQ2QjtBQUFBLE1BQ3JCQyxTQURxQjs7QUFHcEMsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxXQUFNRCxTQUFTLENBQUNFLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBMUIsQ0FBZjtBQUFBLEdBQXJCOztBQUVBUCw4Q0FBSyxDQUFDUSxTQUFOLENBQWdCLFlBQU07QUFDcEJDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NOLFlBQWxDO0FBQ0EsV0FBTztBQUFBLGFBQU1LLE1BQU0sQ0FBQ0UsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNQLFlBQXJDLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FIRCxFQUdHLEVBSEg7O0FBS0EsTUFBTVEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxLQUFELEVBQVc7QUFDdENkLFNBQUssQ0FBQ2Usb0JBQU4sQ0FBMkJELEtBQTNCO0FBQ0QsR0FGRDs7QUFHQSxNQUFNRSxTQUFTLEdBQUdiLE1BQU0sR0FBRyxFQUFULEdBQWMscUJBQWQsR0FBc0MsY0FBeEQ7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWEsU0FBaEI7QUFBQSwyQkFDRSxxRUFBQyxzREFBRDtBQUNFLFlBQU0sRUFBRWhCLEtBQUssQ0FBQ2lCLE1BRGhCO0FBRUUsVUFBSSxFQUFFakIsS0FBSyxDQUFDa0IsSUFGZDtBQUdFLGdCQUFVLEVBQUVsQixLQUFLLENBQUNtQixVQUhwQjtBQUlFLDBCQUFvQixFQUFFTjtBQUp4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0dBekJ1QmQsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYmNmMmFhMGE2Y2IwZWM0MzVmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2hlYWRlci9IZWFkZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKHByb3BzKSB7XHJcbiAgY29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiBzZXRTY3JvbGwoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWZhdWx0QWNjb3VudCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgcHJvcHMuZGVmYXVsdEFjY291bnRDaGFuZ2UodmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IGNsYXNzTmFtZSA9IHNjcm9sbCA+IDgwID8gXCJmaXhlZC1uYXZiYXIgYWN0aXZlXCIgOiBcImZpeGVkLW5hdmJhclwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgIDxIZWFkZXJcclxuICAgICAgICBoY2xhc3M9e3Byb3BzLmhjbGFzc31cclxuICAgICAgICBMb2dvPXtwcm9wcy5Mb2dvfVxyXG4gICAgICAgIHRvcGJhck5vbmU9e3Byb3BzLnRvcGJhck5vbmV9XHJcbiAgICAgICAgZGVmYXVsdEFjY291bnRDaGFuZ2U9e2hhbmRsZURlZmF1bHRBY2NvdW50fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=