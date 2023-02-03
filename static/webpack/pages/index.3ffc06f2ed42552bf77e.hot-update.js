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
  }, []);

  var handleDefaultAccount = function handleDefaultAccount(value) {
    console.log(value);
    defaultAccountChange(value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmpzIl0sIm5hbWVzIjpbIk5hdmJhciIsInByb3BzIiwiZGVmYXVsdEFjY291bnRDaGFuZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwic2Nyb2xsIiwic2V0U2Nyb2xsIiwiaGFuZGxlU2Nyb2xsIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZURlZmF1bHRBY2NvdW50IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NOYW1lIiwiaGNsYXNzIiwiTG9nbyIsInRvcGJhck5vbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixRQUFpRDtBQUFBOztBQUFBLE1BQXhCQyxvQkFBd0IsUUFBeEJBLG9CQUF3Qjs7QUFBQSx3QkFDbENDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBRGtDO0FBQUE7QUFBQSxNQUN2REMsTUFEdUQ7QUFBQSxNQUMvQ0MsU0FEK0M7O0FBRzlELE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsV0FBTUQsU0FBUyxDQUFDRSxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQTFCLENBQWY7QUFBQSxHQUFyQjs7QUFFQVAsOENBQUssQ0FBQ1EsU0FBTixDQUFnQixZQUFNO0FBQ3BCQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDTixZQUFsQztBQUNBLFdBQU87QUFBQSxhQUFNSyxNQUFNLENBQUNFLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDUCxZQUFyQyxDQUFOO0FBQUEsS0FBUDtBQUNELEdBSEQsRUFHRyxFQUhIOztBQUtBLE1BQU1RLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBZCx3QkFBb0IsQ0FBQ2MsS0FBRCxDQUFwQjtBQUNELEdBSEQ7O0FBSUEsTUFBTUcsU0FBUyxHQUFHZCxNQUFNLEdBQUcsRUFBVCxHQUFjLHFCQUFkLEdBQXNDLGNBQXhEO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVjLFNBQWhCO0FBQUEsMkJBQ0UscUVBQUMsc0RBQUQ7QUFBUSxZQUFNLEVBQUVsQixLQUFLLENBQUNtQixNQUF0QjtBQUE4QixVQUFJLEVBQUVuQixLQUFLLENBQUNvQixJQUExQztBQUFnRCxnQkFBVSxFQUFFcEIsS0FBSyxDQUFDcUIsVUFBbEU7QUFBOEUsMEJBQW9CLEVBQUVQO0FBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7R0FyQnVCZixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNmZmMwNmYyZWQ0MjU1MmJmNzdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vaGVhZGVyL0hlYWRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIocHJvcHMsIHsgZGVmYXVsdEFjY291bnRDaGFuZ2UgfSkge1xyXG4gIGNvbnN0IFtzY3JvbGwsIHNldFNjcm9sbF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4gc2V0U2Nyb2xsKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVmYXVsdEFjY291bnQgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgIGRlZmF1bHRBY2NvdW50Q2hhbmdlKHZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBjbGFzc05hbWUgPSBzY3JvbGwgPiA4MCA/IFwiZml4ZWQtbmF2YmFyIGFjdGl2ZVwiIDogXCJmaXhlZC1uYXZiYXJcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICA8SGVhZGVyIGhjbGFzcz17cHJvcHMuaGNsYXNzfSBMb2dvPXtwcm9wcy5Mb2dvfSB0b3BiYXJOb25lPXtwcm9wcy50b3BiYXJOb25lfSBkZWZhdWx0QWNjb3VudENoYW5nZT17aGFuZGxlRGVmYXVsdEFjY291bnR9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==