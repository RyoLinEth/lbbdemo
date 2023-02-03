webpackHotUpdate_N_E("pages/index",{

/***/ "./components/header/WallectConnector.js":
/*!***********************************************!*\
  !*** ./components/header/WallectConnector.js ***!
  \***********************************************/
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
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ "../../../../../../node_modules/ethers/lib.esm/index.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\Users\\Sam Lin\\OneDrive - A.S. Mazzocchi\\\u684C\u9762\\WEB\\webpageReact\\downloadable\\elito dark\\components\\header\\WallectConnector.js",
    _this = undefined,
    _s = $RefreshSig$();





var WalletConnect = function WalletConnect(_ref) {
  _s();

  var defaultAccountChange = _ref.defaultAccountChange,
      language = _ref.language;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      defaultAccount = _useState[0],
      setDefaultAccount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      correctNetwork = _useState2[0],
      setCorrectNetwork = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("連接錢包"),
      connectButtonText = _useState3[0],
      setConnectButtonText = _useState3[1];

  var ChineseConnect = "連接錢包";
  var EnglishConnect = "Connect Wallet";

  var setLanguage = function setLanguage() {
    if (language !== "中") {
      if (connectButtonText === ChineseConnect) {
        setConnectButtonText(EnglishConnect);
        return;
      }
    } else if (connectButtonText === EnglishConnect) {
      setConnectButtonText(ChineseConnect);
      return;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setLanguage();
  }, [language]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    changingAccount();
    defaultAccountChange(defaultAccount);
  }, [defaultAccount]);

  function changingAccount() {
    return _changingAccount.apply(this, arguments);
  }

  function _changingAccount() {
    _changingAccount = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (window.ethereum) {
                window.ethereum.on('accountsChanged', function () {
                  connectWalletHandler();
                });
              }

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _changingAccount.apply(this, arguments);
  }

  var connectWalletHandler = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (window.ethereum) {
                window.ethereum.request({
                  method: 'eth_requestAccounts'
                }).then( /*#__PURE__*/function () {
                  var _ref3 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(result) {
                    return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return accountChangeHandler(result[0]);

                          case 2:
                            setConnectButtonText("".concat(result[0].slice(0, 4), "...").concat(result[0].slice(-4)));

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref3.apply(this, arguments);
                  };
                }());
              } else {
                alert('Need to install MetaMask!');
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function connectWalletHandler() {
      return _ref2.apply(this, arguments);
    };
  }();

  var accountChangeHandler = /*#__PURE__*/function () {
    var _ref4 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(newAccount) {
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              checkCorrectNetwork();
              setDefaultAccount(newAccount);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function accountChangeHandler(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var checkCorrectNetwork = /*#__PURE__*/function () {
    var _ref5 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      var _window, ethereum, chainId, netWorkID;

      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _window = window, ethereum = _window.ethereum;
              _context4.next = 3;
              return ethereum.request({
                method: 'eth_chainId'
              });

            case 3:
              chainId = _context4.sent;
              // console.log('Connected to chain:' + chainId)
              netWorkID = '0x42'; // const netWorkID = '0x38'

              if (chainId !== netWorkID) {
                // setCorrectNetwork(network => network = false)
                setCorrectNetwork(false);
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Error", "Please Connect to the Correct Network", "error");
              } else {
                setCorrectNetwork(true);
              }

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function checkCorrectNetwork() {
      return _ref5.apply(this, arguments);
    };
  }();

  var styles = {
    button: {
      position: 'fixed',
      right: '5vw',
      top: '2vh',
      maxWidth: '120px',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '40px'
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "btnConnect",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: connectWalletHandler,
      className: "btn btn-primary rounded-pill",
      style: styles.button,
      children: connectButtonText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 9
  }, _this);
};

_s(WalletConnect, "I6Q1V0sZkOVojsK0dssSuptCtPQ=");

_c = WalletConnect;
/* harmony default export */ __webpack_exports__["default"] = (WalletConnect);

var _c;

$RefreshReg$(_c, "WalletConnect");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvV2FsbGVjdENvbm5lY3Rvci5qcyJdLCJuYW1lcyI6WyJXYWxsZXRDb25uZWN0IiwiZGVmYXVsdEFjY291bnRDaGFuZ2UiLCJsYW5ndWFnZSIsInVzZVN0YXRlIiwiZGVmYXVsdEFjY291bnQiLCJzZXREZWZhdWx0QWNjb3VudCIsImNvcnJlY3ROZXR3b3JrIiwic2V0Q29ycmVjdE5ldHdvcmsiLCJjb25uZWN0QnV0dG9uVGV4dCIsInNldENvbm5lY3RCdXR0b25UZXh0IiwiQ2hpbmVzZUNvbm5lY3QiLCJFbmdsaXNoQ29ubmVjdCIsInNldExhbmd1YWdlIiwidXNlRWZmZWN0IiwiY2hhbmdpbmdBY2NvdW50Iiwid2luZG93IiwiZXRoZXJldW0iLCJvbiIsImNvbm5lY3RXYWxsZXRIYW5kbGVyIiwicmVxdWVzdCIsIm1ldGhvZCIsInRoZW4iLCJyZXN1bHQiLCJhY2NvdW50Q2hhbmdlSGFuZGxlciIsInNsaWNlIiwiYWxlcnQiLCJuZXdBY2NvdW50IiwiY2hlY2tDb3JyZWN0TmV0d29yayIsImNoYWluSWQiLCJuZXRXb3JrSUQiLCJzd2FsIiwic3R5bGVzIiwiYnV0dG9uIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsIm1heFdpZHRoIiwiZm9udFNpemUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQXdDO0FBQUE7O0FBQUEsTUFBckNDLG9CQUFxQyxRQUFyQ0Esb0JBQXFDO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNkQyxzREFBUSxDQUFDLElBQUQsQ0FETTtBQUFBLE1BQ25EQyxjQURtRDtBQUFBLE1BQ25DQyxpQkFEbUM7O0FBQUEsbUJBRWRGLHNEQUFR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QUVDLHNCQUFNLEVBQUU7QUFBVixlQUFqQixDQUZJOztBQUFBO0FBRXBCUSxxQkFGb0I7QUFHeEI7QUFFTUMsdUJBTGtCLEdBS04sTUFMTSxFQU14Qjs7QUFFQSxrQkFBSUQsT0FBTyxLQUFLQyxTQUFoQixFQUEyQjtBQUN2QjtBQUNBdEIsaUNBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNBdUIsaUVBQUksQ0FBQyxPQUFELEVBQVUsdUNBQVYsRUFBbUQsT0FBbkQsQ0FBSjtBQUNILGVBSkQsTUFJTztBQUNIdkIsaUNBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNIOztBQWR1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFuQm9CLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxLQUF6Qjs7QUFnQkEsTUFBTUksTUFBTSxHQUFHO0FBQ1hDLFVBQU0sRUFBRTtBQUNKQyxjQUFRLEVBQUUsT0FETjtBQUVKQyxXQUFLLEVBQUUsS0FGSDtBQUdKQyxTQUFHLEVBQUUsS0FIRDtBQUlKQyxjQUFRLEVBQUUsT0FKTjtBQUtKQyxjQUFRLEVBQUUsTUFMTjtBQU1KQyxhQUFPLEVBQUUsTUFOTDtBQU9KQyxnQkFBVSxFQUFFLFFBUFI7QUFRSkMsb0JBQWMsRUFBRSxRQVJaO0FBU0pDLFlBQU0sRUFBRTtBQVRKO0FBREcsR0FBZjtBQWFBLHNCQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQSwyQkFDSTtBQUNJLGFBQU8sRUFBRXZCLG9CQURiO0FBRUksZUFBUyxFQUFDLDhCQUZkO0FBR0ksV0FBSyxFQUFFYSxNQUFNLENBQUNDLE1BSGxCO0FBQUEsZ0JBSUV4QjtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQTdGRDs7R0FBTVIsYTs7S0FBQUEsYTtBQStGU0EsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDU4YzY1MDBkMDFmMTM4MTgxZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuXHJcbmNvbnN0IFdhbGxldENvbm5lY3QgPSAoeyBkZWZhdWx0QWNjb3VudENoYW5nZSwgbGFuZ3VhZ2UgfSkgPT4ge1xyXG4gICAgY29uc3QgW2RlZmF1bHRBY2NvdW50LCBzZXREZWZhdWx0QWNjb3VudF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gICAgY29uc3QgW2NvcnJlY3ROZXR3b3JrLCBzZXRDb3JyZWN0TmV0d29ya10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtjb25uZWN0QnV0dG9uVGV4dCwgc2V0Q29ubmVjdEJ1dHRvblRleHRdID0gdXNlU3RhdGUoXCLpgKPmjqXpjKLljIVcIilcclxuXHJcbiAgICBjb25zdCBDaGluZXNlQ29ubmVjdCA9IFwi6YCj5o6l6Yyi5YyFXCJcclxuICAgIGNvbnN0IEVuZ2xpc2hDb25uZWN0ID0gXCJDb25uZWN0IFdhbGxldFwiXHJcbiAgICBjb25zdCBzZXRMYW5ndWFnZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAobGFuZ3VhZ2UgIT09IFwi5LitXCIpIHtcclxuICAgICAgICAgICAgaWYgKGNvbm5lY3RCdXR0b25UZXh0ID09PSBDaGluZXNlQ29ubmVjdCkge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29ubmVjdEJ1dHRvblRleHQoRW5nbGlzaENvbm5lY3QpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBpZiAoY29ubmVjdEJ1dHRvblRleHQgPT09IEVuZ2xpc2hDb25uZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb25uZWN0QnV0dG9uVGV4dChDaGluZXNlQ29ubmVjdClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0TGFuZ3VhZ2UoKVxyXG4gICAgfSwgW2xhbmd1YWdlXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNoYW5naW5nQWNjb3VudCgpO1xyXG4gICAgICAgIGRlZmF1bHRBY2NvdW50Q2hhbmdlKGRlZmF1bHRBY2NvdW50KTtcclxuICAgIH0sIFtkZWZhdWx0QWNjb3VudF0pXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY2hhbmdpbmdBY2NvdW50KCkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25uZWN0V2FsbGV0SGFuZGxlcigpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbm5lY3RXYWxsZXRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgICAgICAgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGFjY291bnRDaGFuZ2VIYW5kbGVyKHJlc3VsdFswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29ubmVjdEJ1dHRvblRleHQoYCR7cmVzdWx0WzBdLnNsaWNlKDAsIDQpfS4uLiR7cmVzdWx0WzBdLnNsaWNlKC00KX1gKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoJ05lZWQgdG8gaW5zdGFsbCBNZXRhTWFzayEnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY2NvdW50Q2hhbmdlSGFuZGxlciA9IGFzeW5jIChuZXdBY2NvdW50KSA9PiB7XHJcbiAgICAgICAgY2hlY2tDb3JyZWN0TmV0d29yaygpO1xyXG4gICAgICAgIHNldERlZmF1bHRBY2NvdW50KG5ld0FjY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrQ29ycmVjdE5ldHdvcmsgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93XHJcbiAgICAgICAgbGV0IGNoYWluSWQgPSBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2NoYWluSWQnIH0pXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0Nvbm5lY3RlZCB0byBjaGFpbjonICsgY2hhaW5JZClcclxuXHJcbiAgICAgICAgY29uc3QgbmV0V29ya0lEID0gJzB4NDInXHJcbiAgICAgICAgLy8gY29uc3QgbmV0V29ya0lEID0gJzB4MzgnXHJcblxyXG4gICAgICAgIGlmIChjaGFpbklkICE9PSBuZXRXb3JrSUQpIHtcclxuICAgICAgICAgICAgLy8gc2V0Q29ycmVjdE5ldHdvcmsobmV0d29yayA9PiBuZXR3b3JrID0gZmFsc2UpXHJcbiAgICAgICAgICAgIHNldENvcnJlY3ROZXR3b3JrKGZhbHNlKVxyXG4gICAgICAgICAgICBzd2FsKFwiRXJyb3JcIiwgXCJQbGVhc2UgQ29ubmVjdCB0byB0aGUgQ29ycmVjdCBOZXR3b3JrXCIsIFwiZXJyb3JcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDb3JyZWN0TmV0d29yayh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAnNXZ3JyxcclxuICAgICAgICAgICAgdG9wOiAnMnZoJyxcclxuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMjBweCcsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnNDBweCcsXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5Db25uZWN0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Nvbm5lY3RXYWxsZXRIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IHJvdW5kZWQtcGlsbFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmJ1dHRvbn1cclxuICAgICAgICAgICAgPntjb25uZWN0QnV0dG9uVGV4dH08L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2FsbGV0Q29ubmVjdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9