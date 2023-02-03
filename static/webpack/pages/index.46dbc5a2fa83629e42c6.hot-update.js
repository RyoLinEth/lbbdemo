webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MobileMenu/MobileMenu.js":
/*!*********************************************!*\
  !*** ./components/MobileMenu/MobileMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\Sam Lin\\OneDrive - A.S. Mazzocchi\\\u684C\u9762\\WEB\\webpageReact\\downloadable\\elito dark\\components\\MobileMenu\\MobileMenu.js",
    _this = undefined,
    _s = $RefreshSig$();








var menus = [{
  id: 1,
  title: 'Home',
  link: 'home'
}];

var MobileMenu = function MobileMenu() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      openId = _useState[0],
      setOpenId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      menuActive = _useState2[0],
      setMenuState = _useState2[1];

  var ClickHandler = function ClickHandler() {
    window.scrollTo(10, 0);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "mobileMenu ".concat(menuActive ? "show" : ""),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "menu-close",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "clox",
          onClick: function onClick() {
            return setMenuState(!menuActive);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: "ti-close"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 85
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "responsivemenu",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "menu-item-has-children",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "#scrool",
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
            activeClass: "active",
            to: "about",
            spy: true,
            smooth: true,
            duration: 500,
            children: "IDO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
            activeClass: "active",
            to: "service",
            spy: true,
            smooth: true,
            duration: 500,
            children: "\u95DC\u65BCLBB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
            activeClass: "active",
            to: "experience",
            spy: true,
            smooth: true,
            duration: 500,
            children: "\u9080\u8ACB\u9023\u7D50"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
            activeClass: "active",
            to: "portfolio",
            spy: true,
            smooth: true,
            duration: 500,
            onClick: ClickHandler,
            children: "\u9818\u5E63"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "showmenu",
      onClick: function onClick() {
        return setMenuState(!menuActive);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        className: "navbar-toggler open-btn",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "icon-bar first-angle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "icon-bar middle-angle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "icon-bar last-angle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, _this);
};

_s(MobileMenu, "R4au4CpCcBzv02GlM61NK4v8Q8s=");

_c = MobileMenu;
/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

var _c;

$RefreshReg$(_c, "MobileMenu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2JpbGVNZW51L01vYmlsZU1lbnUuanMiXSwibmFtZXMiOlsibWVudXMiLCJpZCIsInRpdGxlIiwibGluayIsIk1vYmlsZU1lbnUiLCJ1c2VTdGF0ZSIsIm9wZW5JZCIsInNldE9wZW5JZCIsIm1lbnVBY3RpdmUiLCJzZXRNZW51U3RhdGUiLCJDbGlja0hhbmRsZXIiLCJ3aW5kb3ciLCJzY3JvbGxUbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUNWO0FBQ0lDLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxNQUZYO0FBR0lDLE1BQUksRUFBRTtBQUhWLENBRFUsQ0FBZDs7QUFVQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBRU9DLHNEQUFRLENBQUMsQ0FBRCxDQUZmO0FBQUEsTUFFZEMsTUFGYztBQUFBLE1BRU5DLFNBRk07O0FBQUEsbUJBR2NGLHNEQUFRLENBQUMsS0FBRCxDQUh0QjtBQUFBLE1BR2RHLFVBSGM7QUFBQSxNQUdGQyxZQUhFOztBQUtyQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0IsRUFBaEIsRUFBb0IsQ0FBcEI7QUFDSCxHQUZEOztBQUlBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLHVCQUFnQkosVUFBVSxHQUFHLE1BQUgsR0FBWSxFQUF0QyxDQUFkO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsTUFBZjtBQUFzQixpQkFBTyxFQUFFO0FBQUEsbUJBQU1DLFlBQVksQ0FBQyxDQUFDRCxVQUFGLENBQWxCO0FBQUEsV0FBL0I7QUFBQSxpQ0FBZ0U7QUFBRyxxQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBS0k7QUFBSSxpQkFBUyxFQUFDLGdCQUFkO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBUyxFQUFDLHdCQUFkO0FBQUEsaUNBQ0kscUVBQUMsc0VBQUQ7QUFBWSxnQkFBSSxFQUFDLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJO0FBQUEsaUNBQ0kscUVBQUMsaURBQUQ7QUFBTSx1QkFBVyxFQUFDLFFBQWxCO0FBQTJCLGNBQUUsRUFBQyxPQUE5QjtBQUFzQyxlQUFHLEVBQUUsSUFBM0M7QUFBaUQsa0JBQU0sRUFBRSxJQUF6RDtBQUErRCxvQkFBUSxFQUFFLEdBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSixlQU9JO0FBQUEsaUNBQUkscUVBQUMsaURBQUQ7QUFBTSx1QkFBVyxFQUFDLFFBQWxCO0FBQTJCLGNBQUUsRUFBQyxTQUE5QjtBQUF3QyxlQUFHLEVBQUUsSUFBN0M7QUFBbUQsa0JBQU0sRUFBRSxJQUEzRDtBQUFpRSxvQkFBUSxFQUFFLEdBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSixlQVFJO0FBQUEsaUNBQ0kscUVBQUMsaURBQUQ7QUFBTSx1QkFBVyxFQUFDLFFBQWxCO0FBQTJCLGNBQUUsRUFBQyxZQUE5QjtBQUEyQyxlQUFHLEVBQUUsSUFBaEQ7QUFBc0Qsa0JBQU0sRUFBRSxJQUE5RDtBQUFvRSxvQkFBUSxFQUFFLEdBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSSixlQVdJO0FBQUEsaUNBQ0kscUVBQUMsaURBQUQ7QUFBTSx1QkFBVyxFQUFDLFFBQWxCO0FBQTJCLGNBQUUsRUFBQyxXQUE5QjtBQUEwQyxlQUFHLEVBQUUsSUFBL0M7QUFBcUQsa0JBQU0sRUFBRSxJQUE3RDtBQUFtRSxvQkFBUSxFQUFFLEdBQTdFO0FBQWtGLG1CQUFPLEVBQUVFLFlBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQThCSTtBQUFLLGVBQVMsRUFBQyxVQUFmO0FBQTBCLGFBQU8sRUFBRTtBQUFBLGVBQU1ELFlBQVksQ0FBQyxDQUFDRCxVQUFGLENBQWxCO0FBQUEsT0FBbkM7QUFBQSw2QkFDSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUMseUJBQWhDO0FBQUEsZ0NBQ0k7QUFBTSxtQkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFNLG1CQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQU0sbUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3Q0gsQ0FqREQ7O0dBQU1KLFU7O0tBQUFBLFU7QUFtRFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ2ZGJjNWEyZmE4MzYyOWU0MmM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IENvbGxhcHNlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZVwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xyXG5pbXBvcnQgTmF2TGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBBbmNob3JMaW5rIGZyb20gJ3JlYWN0LWFuY2hvci1saW5rLXNtb290aC1zY3JvbGwnXHJcblxyXG5jb25zdCBtZW51cyA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICB0aXRsZTogJ0hvbWUnLFxyXG4gICAgICAgIGxpbms6ICdob21lJyxcclxuICAgIH0sXHJcblxyXG5dXHJcblxyXG5cclxuY29uc3QgTW9iaWxlTWVudSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbb3BlbklkLCBzZXRPcGVuSWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudVN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDEwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9iaWxlTWVudSAke21lbnVBY3RpdmUgPyBcInNob3dcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtY2xvc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3hcIiBvbkNsaWNrPXsoKSA9PiBzZXRNZW51U3RhdGUoIW1lbnVBY3RpdmUpfT48aSBjbGFzc05hbWU9XCJ0aS1jbG9zZVwiPjwvaT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyZXNwb25zaXZlbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZW51LWl0ZW0taGFzLWNoaWxkcmVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbmNob3JMaW5rIGhyZWY9JyNzY3Jvb2wnPkhvbWU8L0FuY2hvckxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCIgdG89XCJhYm91dFwiIHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfT5JRE88L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIiB0bz1cInNlcnZpY2VcIiBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezUwMH0+6Zec5pa8TEJCPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiIHRvPVwiZXhwZXJpZW5jZVwiIHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfT7pgoDoq4vpgKPntZA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCIgdG89XCJwb3J0Zm9saW9cIiBzcHk9e3RydWV9IHNtb290aD17dHJ1ZX0gZHVyYXRpb249ezUwMH0gb25DbGljaz17Q2xpY2tIYW5kbGVyfT7poJjluaM8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiIHRvPVwiY29udGFjdFwiIHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfT5Db250YWN0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiIHRvPVwiYmxvZ1wiIHNweT17dHJ1ZX0gc21vb3RoPXt0cnVlfSBkdXJhdGlvbj17NTAwfT5CbG9nPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93bWVudVwiIG9uQ2xpY2s9eygpID0+IHNldE1lbnVTdGF0ZSghbWVudUFjdGl2ZSl9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXIgb3Blbi1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhciBmaXJzdC1hbmdsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uLWJhciBtaWRkbGUtYW5nbGVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1iYXIgbGFzdC1hbmdsZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTsiXSwic291cmNlUm9vdCI6IiJ9