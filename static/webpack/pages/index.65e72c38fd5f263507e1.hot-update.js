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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isJoined = _useState2[0],
      setIsJoined = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var getContractValue = /*#__PURE__*/function () {
      var _ref = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var tempClaimActive, tempJoin;
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
                _context.next = 9;
                return props.contract.isAddressJoined(props.defaultAccount);

              case 9:
                tempJoin = _context.sent;
                console.log("The address has joined? " + tempJoin);
                setIsJoined(tempJoin);
                console.log("\n            isClaimActive : ".concat(tempClaimActive, "\n            isJoined : ").concat(tempJoin, "\n            "));

              case 13:
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
    // if (!isClaimActive) {
    //     swal("錯誤", "未開放提幣", "error")
    //     return;
    // }
    if (!isJoined) {
      sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("錯誤", "您並未參加IDO", "error");
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
                lineNumber: 53,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: "\u9EDE\u64CA\u6309\u9215\u5373\u53EF\u9818\u5E63"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
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
                lineNumber: 59,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }, _this);
};

_s(ProjectSection, "3Ck72OzoBXsqo+bbhLoL6MAIG0I=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0U2VjdGlvbi9Qcm9qZWN0U2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJQcm9qZWN0U2VjdGlvbiIsInByb3BzIiwidXNlU3RhdGUiLCJpc0NsYWltQWN0aXZlIiwic2V0SXNDbGFpbUFjdGl2ZSIsImlzSm9pbmVkIiwic2V0SXNKb2luZWQiLCJ1c2VFZmZlY3QiLCJnZXRDb250cmFjdFZhbHVlIiwiY29udHJhY3QiLCJ0ZW1wQ2xhaW1BY3RpdmUiLCJjb25zb2xlIiwibG9nIiwiaXNBZGRyZXNzSm9pbmVkIiwiZGVmYXVsdEFjY291bnQiLCJ0ZW1wSm9pbiIsImhhbmRsZUNsYWltIiwic3dhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFFWUMsc0RBQVEsQ0FBQyxJQUFELENBRnBCO0FBQUEsTUFFdkJDLGFBRnVCO0FBQUEsTUFFUkMsZ0JBRlE7O0FBQUEsbUJBR0VGLHNEQUFRLENBQUMsS0FBRCxDQUhWO0FBQUEsTUFHdkJHLFFBSHVCO0FBQUEsTUFHYkMsV0FIYTs7QUFLOUJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQU1DLGdCQUFnQjtBQUFBLDBYQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNqQlAsS0FBSyxDQUFDUSxRQUFOLEtBQW1CLElBREY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVCQUdPUixLQUFLLENBQUNRLFFBQU4sQ0FBZU4sYUFBZixFQUhQOztBQUFBO0FBR2pCTywrQkFIaUI7QUFJckJDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBMEJGLGVBQXRDO0FBQ0FOLGdDQUFnQixDQUFDTSxlQUFELENBQWhCO0FBTHFCO0FBQUEsdUJBT0FULEtBQUssQ0FBQ1EsUUFBTixDQUFlSSxlQUFmLENBQStCWixLQUFLLENBQUNhLGNBQXJDLENBUEE7O0FBQUE7QUFPakJDLHdCQVBpQjtBQVFyQkosdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUE2QkcsUUFBekM7QUFDQVQsMkJBQVcsQ0FBQ1MsUUFBRCxDQUFYO0FBR0FKLHVCQUFPLENBQUNDLEdBQVIseUNBQ2tCRixlQURsQixzQ0FFYUssUUFGYjs7QUFacUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBaEJQLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxPQUF0Qjs7QUFrQkFBLG9CQUFnQjtBQUNuQixHQXBCUSxFQW9CTixDQUFDUCxLQUFLLENBQUNhLGNBQVAsRUFBdUJiLEtBQUssQ0FBQ1EsUUFBN0IsQ0FwQk0sQ0FBVDs7QUFzQkEsTUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUVBLFFBQUksQ0FBQ1gsUUFBTCxFQUFlO0FBQ1hZLHVEQUFJLENBQUMsSUFBRCxFQUFPLFVBQVAsRUFBbUIsT0FBbkIsQ0FBSjtBQUNIOztBQUNEQSxxREFBSSxDQUFDLElBQUQsRUFBTyxPQUFQLEVBQWdCLFNBQWhCLENBQUo7QUFDQTtBQUNILEdBWEQ7O0FBYUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsa0NBQWY7QUFBa0QsTUFBRSxFQUFDLFdBQXJEO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyx3QkFBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQyxPQUFmO0FBQUEsc0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBT0k7QUFBSyxxQkFBUyxFQUFDLHNCQUFmO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLGdCQUFmO0FBQWdDLHFCQUFPLEVBQUVELFdBQXpDO0FBQUEscUNBQ0k7QUFBRyx5QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBcUJILENBN0REOztHQUFNaEIsYzs7S0FBQUEsYztBQStEU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjVlNzJjMzhmZDVmMjYzNTA3ZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvamVjdFNpbmdsZSBmcm9tICcuLi9Qcm9qZWN0U2luZ2xlL1Byb2plY3RTaW5nbGUnO1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0J1xyXG5cclxuXHJcbmNvbnN0IFByb2plY3RTZWN0aW9uID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzQ2xhaW1BY3RpdmUsIHNldElzQ2xhaW1BY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbaXNKb2luZWQsIHNldElzSm9pbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGdldENvbnRyYWN0VmFsdWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9wcy5jb250cmFjdCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRlbXBDbGFpbUFjdGl2ZSA9IGF3YWl0IHByb3BzLmNvbnRyYWN0LmlzQ2xhaW1BY3RpdmUoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgY2xhaW0gaXMgYWN0aXZlPyBcIiArIHRlbXBDbGFpbUFjdGl2ZSlcclxuICAgICAgICAgICAgc2V0SXNDbGFpbUFjdGl2ZSh0ZW1wQ2xhaW1BY3RpdmUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRlbXBKb2luID0gYXdhaXQgcHJvcHMuY29udHJhY3QuaXNBZGRyZXNzSm9pbmVkKHByb3BzLmRlZmF1bHRBY2NvdW50KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgYWRkcmVzcyBoYXMgam9pbmVkPyBcIiArIHRlbXBKb2luKVxyXG4gICAgICAgICAgICBzZXRJc0pvaW5lZCh0ZW1wSm9pbik7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFxyXG4gICAgICAgICAgICBpc0NsYWltQWN0aXZlIDogJHt0ZW1wQ2xhaW1BY3RpdmV9XHJcbiAgICAgICAgICAgIGlzSm9pbmVkIDogJHt0ZW1wSm9pbn1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldENvbnRyYWN0VmFsdWUoKVxyXG4gICAgfSwgW3Byb3BzLmRlZmF1bHRBY2NvdW50LCBwcm9wcy5jb250cmFjdF0pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xhaW0gPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKCFpc0NsYWltQWN0aXZlKSB7XHJcbiAgICAgICAgLy8gICAgIHN3YWwoXCLpjK/oqqRcIiwgXCLmnKrplovmlL7mj5DluaNcIiwgXCJlcnJvclwiKVxyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBpZiAoIWlzSm9pbmVkKSB7XHJcbiAgICAgICAgICAgIHN3YWwoXCLpjK/oqqRcIiwgXCLmgqjkuKbmnKrlj4PliqBJRE9cIiwgXCJlcnJvclwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzd2FsKFwi5oiQ5YqfXCIsIFwi5bey5oiQ5Yqf5o+Q5bmjXCIsIFwic3VjY2Vzc1wiKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLXByb2plY3QtYXJlYSBzZWN0aW9uLXBhZGRpbmdcIiBpZD0ncG9ydGZvbGlvJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLXNlY3Rpb24tdGl0bGUtczJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+5o+Q5bmjPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7pu57mk4rmjInpiJXljbPlj6/poJjluaM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgb2Zmc2V0LWxnLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjLXRpdGxlLWljb25cIiBvbkNsaWNrPXtoYW5kbGVDbGFpbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmkgZmxhdGljb24tc2VsZi1ncm93dGhcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0U2VjdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9