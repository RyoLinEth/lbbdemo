webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProjectSection/ProjectSection.js":
/*!*****************************************************!*\
  !*** ./components/ProjectSection/ProjectSection.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProjectSingle_ProjectSingle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ProjectSingle/ProjectSingle */ "./components/ProjectSingle/ProjectSingle.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\Users\\Sam Lin\\OneDrive - A.S. Mazzocchi\\\u684C\u9762\\WEB\\webpageReact\\downloadable\\elito dark\\components\\ProjectSection\\ProjectSection.js",
    _this = undefined,
    _s = $RefreshSig$();





var ProjectSection = function ProjectSection(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isClaimActive = _useState[0],
      setIsClaimActive = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var getContractValue = /*#__PURE__*/function () {
      var _ref = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var tempClaimActive;
        return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(props.contract === null)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return props.contract.isClaimActive();

              case 4:
                tempClaimActive = _context.sent;
                console.log("The claim is active? " + tempClaimActive);
                setIsClaimActive(tempClaimActive);
                console.log("\n            isClaimActive : ".concat(tempClaimActive, "\n            "));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function getContractValue() {
        return _ref.apply(this, arguments);
      };
    }();

    getContractValue();
  }, [props.defaultAccount, props.contract]);

  var handleClaim = function handleClaim() {
    if (!isClaimActive) {
      sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("錯誤", "未開放提幣", "error");
      return;
    }

    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("成功", "已成功提幣", "success");
    return;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "wpo-project-area section-padding",
    id: "portfolio",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "wpo-section-title-s2",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-4 col-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "title",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "\u63D0\u5E63"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "\u9EDE\u64CA\u6309\u9215\u5373\u53EF\u9818\u5E63"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-6 offset-lg-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "sec-title-icon",
              onClick: handleClaim,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "fi flaticon-self-growth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, _this);
};

_s(ProjectSection, "M5FE3iaYLsvyrVA6lGUTvw8qYgE=");

_c = ProjectSection;
/* harmony default export */ __webpack_exports__["default"] = (ProjectSection);

var _c;

$RefreshReg$(_c, "ProjectSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0U2VjdGlvbi9Qcm9qZWN0U2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJQcm9qZWN0U2VjdGlvbiIsInByb3BzIiwidXNlU3RhdGUiLCJpc0NsYWltQWN0aXZlIiwic2V0SXNDbGFpbUFjdGl2ZSIsInVzZUVmZmVjdCIsImdldENvbnRyYWN0VmFsdWUiLCJjb250cmFjdCIsInRlbXBDbGFpbUFjdGl2ZSIsImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0QWNjb3VudCIsImhhbmRsZUNsYWltIiwic3dhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFFWUMsc0RBQVEsQ0FBQyxJQUFELENBRnBCO0FBQUEsTUFFdkJDLGFBRnVCO0FBQUEsTUFFUkMsZ0JBRlE7O0FBSTlCQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxnQkFBZ0I7QUFBQSwwWEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDakJMLEtBQUssQ0FBQ00sUUFBTixLQUFtQixJQURGO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSx1QkFHT04sS0FBSyxDQUFDTSxRQUFOLENBQWVKLGFBQWYsRUFIUDs7QUFBQTtBQUdqQkssK0JBSGlCO0FBSXJCQyx1QkFBTyxDQUFDQyxHQUFSLENBQVksMEJBQTBCRixlQUF0QztBQUNBSixnQ0FBZ0IsQ0FBQ0ksZUFBRCxDQUFoQjtBQUVBQyx1QkFBTyxDQUFDQyxHQUFSLHlDQUNrQkYsZUFEbEI7O0FBUHFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQWhCRixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsT0FBdEI7O0FBWUFBLG9CQUFnQjtBQUNuQixHQWRRLEVBY04sQ0FBQ0wsS0FBSyxDQUFDVSxjQUFQLEVBQXVCVixLQUFLLENBQUNNLFFBQTdCLENBZE0sQ0FBVDs7QUFnQkEsTUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QixRQUFJLENBQUNULGFBQUwsRUFBb0I7QUFDaEJVLHVEQUFJLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsT0FBaEIsQ0FBSjtBQUNBO0FBQ0g7O0FBQ0RBLHFEQUFJLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsU0FBaEIsQ0FBSjtBQUNBO0FBQ0gsR0FQRDs7QUFTQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyxrQ0FBZjtBQUFrRCxNQUFFLEVBQUMsV0FBckQ7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLHdCQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLGlCQUFmO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLE9BQWY7QUFBQSxzQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFPSTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMsZ0JBQWY7QUFBZ0MscUJBQU8sRUFBRUQsV0FBekM7QUFBQSxxQ0FDSTtBQUFHLHlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFxQkgsQ0FsREQ7O0dBQU1aLGM7O0tBQUFBLGM7QUFvRFNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdkNGNkYWY4MDA1ZDQ1Y2QwMTZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb2plY3RTaW5nbGUgZnJvbSAnLi4vUHJvamVjdFNpbmdsZS9Qcm9qZWN0U2luZ2xlJztcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuXHJcblxyXG5jb25zdCBQcm9qZWN0U2VjdGlvbiA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc0NsYWltQWN0aXZlLCBzZXRJc0NsYWltQWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZ2V0Q29udHJhY3RWYWx1ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb3BzLmNvbnRyYWN0ID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVtcENsYWltQWN0aXZlID0gYXdhaXQgcHJvcHMuY29udHJhY3QuaXNDbGFpbUFjdGl2ZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBjbGFpbSBpcyBhY3RpdmU/IFwiICsgdGVtcENsYWltQWN0aXZlKVxyXG4gICAgICAgICAgICBzZXRJc0NsYWltQWN0aXZlKHRlbXBDbGFpbUFjdGl2ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgXHJcbiAgICAgICAgICAgIGlzQ2xhaW1BY3RpdmUgOiAke3RlbXBDbGFpbUFjdGl2ZX1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldENvbnRyYWN0VmFsdWUoKVxyXG4gICAgfSwgW3Byb3BzLmRlZmF1bHRBY2NvdW50LCBwcm9wcy5jb250cmFjdF0pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xhaW0gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpc0NsYWltQWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHN3YWwoXCLpjK/oqqRcIiwgXCLmnKrplovmlL7mj5DluaNcIiwgXCJlcnJvclwiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN3YWwoXCLmiJDlip9cIiwgXCLlt7LmiJDlip/mj5DluaNcIiwgXCJzdWNjZXNzXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tcHJvamVjdC1hcmVhIHNlY3Rpb24tcGFkZGluZ1wiIGlkPSdwb3J0Zm9saW8nPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tc2VjdGlvbi10aXRsZS1zMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj7mj5DluaM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPum7nuaTiuaMiemIleWNs+WPr+mgmOW5ozwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBvZmZzZXQtbGctMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWMtdGl0bGUtaWNvblwiIG9uQ2xpY2s9e2hhbmRsZUNsYWltfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmaSBmbGF0aWNvbi1zZWxmLWdyb3d0aFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RTZWN0aW9uOyJdLCJzb3VyY2VSb290IjoiIn0=