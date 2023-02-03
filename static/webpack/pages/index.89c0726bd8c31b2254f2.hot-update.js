webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_about_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/about/about */ "./components/about/about.js");
/* harmony import */ var _components_BlogSection_BlogSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BlogSection/BlogSection */ "./components/BlogSection/BlogSection.js");
/* harmony import */ var _components_commonHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/commonHead */ "./components/commonHead/index.js");
/* harmony import */ var _components_ContactArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ContactArea */ "./components/ContactArea/index.js");
/* harmony import */ var _components_Exprience_Exprience__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Exprience/Exprience */ "./components/Exprience/Exprience.js");
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/footer/Footer */ "./components/footer/Footer.js");
/* harmony import */ var _components_hero_hero__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/hero/hero */ "./components/hero/hero.js");
/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Navbar/Navbar */ "./components/Navbar/Navbar.js");
/* harmony import */ var _components_Pricing_Pricing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Pricing/Pricing */ "./components/Pricing/Pricing.js");
/* harmony import */ var _components_ProjectSection_ProjectSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ProjectSection/ProjectSection */ "./components/ProjectSection/ProjectSection.js");
/* harmony import */ var _components_scrollbar_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/scrollbar/scrollbar */ "./components/scrollbar/scrollbar.js");
/* harmony import */ var _components_ServiceSection_ServiceSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/ServiceSection/ServiceSection */ "./components/ServiceSection/ServiceSection.js");
/* harmony import */ var _components_Testimonial_Testimonial__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Testimonial/Testimonial */ "./components/Testimonial/Testimonial.js");
/* harmony import */ var _components_abi_usdtABI_json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/abi/usdtABI.json */ "./components/abi/usdtABI.json");
var _components_abi_usdtABI_json__WEBPACK_IMPORTED_MODULE_18___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../components/abi/usdtABI.json */ "./components/abi/usdtABI.json", 1);
/* harmony import */ var _components_abi_idoABI_json__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/abi/idoABI.json */ "./components/abi/idoABI.json");
var _components_abi_idoABI_json__WEBPACK_IMPORTED_MODULE_19___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../components/abi/idoABI.json */ "./components/abi/idoABI.json", 1);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! web3 */ "../../../../../../node_modules/web3/dist/web3.min.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");




var _jsxFileName = "C:\\Users\\Sam Lin\\OneDrive - A.S. Mazzocchi\\\u684C\u9762\\WEB\\webpageReact\\downloadable\\elito dark\\pages\\index.js",
    _s = $RefreshSig$();




















var OKCMainnetProvider = 'https://exchainrpc.okex.org/';
var BSCMainnetProvider = 'https://bsc-dataseed.binance.org/';
var web3 = new web3__WEBPACK_IMPORTED_MODULE_20___default.a(new web3__WEBPACK_IMPORTED_MODULE_20___default.a.providers.HttpProvider(OKCMainnetProvider));
var usdtAddress = "0xD0f618C6C2914d8bf3BECE8372B1FA75758aBE99";
var contractAddress = "0xbd5CABaecDD059039C053f0F551d1151FF857e2B";
function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      defaultAccount = _useState[0],
      setDefaultAccount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      provider = _useState2[0],
      setProvider = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      signer = _useState3[0],
      setSigner = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      contract = _useState4[0],
      setContract = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      usdtContract = _useState5[0],
      setUsdtContract = _useState5[1];

  var handleDefaultAccount = function handleDefaultAccount(value) {
    setDefaultAccount(value);
  };

  var updateEthers = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var tempProvider, tempSigner, tempContract, tempUSDTContract;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tempProvider = new ethers__WEBPACK_IMPORTED_MODULE_21__["ethers"].providers.Web3Provider(window.ethereum);
              setProvider(tempProvider);
              tempSigner = tempProvider.getSigner();
              setSigner(tempSigner);
              tempContract = new ethers__WEBPACK_IMPORTED_MODULE_21__["ethers"].Contract(contractAddress, _components_abi_idoABI_json__WEBPACK_IMPORTED_MODULE_19__, tempSigner);
              setContract(tempContract);
              tempUSDTContract = new ethers__WEBPACK_IMPORTED_MODULE_21__["ethers"].Contract(usdtAddress, _components_abi_usdtABI_json__WEBPACK_IMPORTED_MODULE_18__, tempSigner);
              setUsdtContract(tempUSDTContract);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateEthers() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    console.log("Change Account to : " + defaultAccount);
    if (defaultAccount !== null) updateEthers();
  }, [defaultAccount]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "scrool",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_commonHead__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "br-app",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
          defaultAccountChange: handleDefaultAccount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_hero_hero__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_about_about__WEBPACK_IMPORTED_MODULE_5__["default"], {
          defaultAccount: defaultAccount,
          contract: contract,
          usdtContract: usdtContract,
          provider: provider,
          signer: signer
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ServiceSection_ServiceSection__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Exprience_Exprience__WEBPACK_IMPORTED_MODULE_9__["default"], {
          defaultAccount: defaultAccount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_scrollbar_scrollbar__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, this);
}

_s(Home, "A5ULgFBBnQsU4Xg1TURYcprQY9M=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiT0tDTWFpbm5ldFByb3ZpZGVyIiwiQlNDTWFpbm5ldFByb3ZpZGVyIiwid2ViMyIsIldlYjMiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiLCJ1c2R0QWRkcmVzcyIsImNvbnRyYWN0QWRkcmVzcyIsIkhvbWUiLCJ1c2VTdGF0ZSIsImRlZmF1bHRBY2NvdW50Iiwic2V0RGVmYXVsdEFjY291bnQiLCJwcm92aWRlciIsInNldFByb3ZpZGVyIiwic2lnbmVyIiwic2V0U2lnbmVyIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInVzZHRDb250cmFjdCIsInNldFVzZHRDb250cmFjdCIsImhhbmRsZURlZmF1bHRBY2NvdW50IiwidmFsdWUiLCJ1cGRhdGVFdGhlcnMiLCJ0ZW1wUHJvdmlkZXIiLCJldGhlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInRlbXBTaWduZXIiLCJnZXRTaWduZXIiLCJ0ZW1wQ29udHJhY3QiLCJDb250cmFjdCIsImNvbnRyYWN0QUJJIiwidGVtcFVTRFRDb250cmFjdCIsInVzZHRBQkkiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGtCQUFrQixHQUFHLDhCQUF6QjtBQUNBLElBQUlDLGtCQUFrQixHQUFHLG1DQUF6QjtBQUNBLElBQUlDLElBQUksR0FBRyxJQUFJQyw0Q0FBSixDQUFTLElBQUlBLDRDQUFJLENBQUNDLFNBQUwsQ0FBZUMsWUFBbkIsQ0FBZ0NMLGtCQUFoQyxDQUFULENBQVg7QUFFQSxJQUFNTSxXQUFXLEdB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QUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1DRDs7R0FuRXVCRixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg5YzA3MjZiZDhjMzFiMjI1NGYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9hYm91dC9hYm91dCc7XG5pbXBvcnQgQmxvZ1NlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9CbG9nU2VjdGlvbi9CbG9nU2VjdGlvbic7XG5pbXBvcnQgQ29tbW9uSGVhZCBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbkhlYWQnO1xuaW1wb3J0IENvbnRhY3RBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdEFyZWEnO1xuaW1wb3J0IEV4cHJpZW5jZVNlYyBmcm9tICcuLi9jb21wb25lbnRzL0V4cHJpZW5jZS9FeHByaWVuY2UnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9oZXJvL2hlcm8nO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXInO1xuaW1wb3J0IFByaWNpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9QcmljaW5nL1ByaWNpbmcnO1xuaW1wb3J0IFByb2plY3RTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdFNlY3Rpb24vUHJvamVjdFNlY3Rpb24nO1xuaW1wb3J0IFNjcm9sbGJhciBmcm9tICcuLi9jb21wb25lbnRzL3Njcm9sbGJhci9zY3JvbGxiYXInO1xuaW1wb3J0IFNlcnZpY2VTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvU2VydmljZVNlY3Rpb24vU2VydmljZVNlY3Rpb24nO1xuaW1wb3J0IFRlc3RpbW9uaWFsIGZyb20gJy4uL2NvbXBvbmVudHMvVGVzdGltb25pYWwvVGVzdGltb25pYWwnO1xuXG5pbXBvcnQgdXNkdEFCSSBmcm9tICcuLi9jb21wb25lbnRzL2FiaS91c2R0QUJJLmpzb24nXG5pbXBvcnQgY29udHJhY3RBQkkgZnJvbSAnLi4vY29tcG9uZW50cy9hYmkvaWRvQUJJLmpzb24nXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcblxubGV0IE9LQ01haW5uZXRQcm92aWRlciA9ICdodHRwczovL2V4Y2hhaW5ycGMub2tleC5vcmcvJztcbmxldCBCU0NNYWlubmV0UHJvdmlkZXIgPSAnaHR0cHM6Ly9ic2MtZGF0YXNlZWQuYmluYW5jZS5vcmcvJztcbmxldCB3ZWIzID0gbmV3IFdlYjMobmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihPS0NNYWlubmV0UHJvdmlkZXIpKTtcblxuY29uc3QgdXNkdEFkZHJlc3MgPSBcIjB4RDBmNjE4QzZDMjkxNGQ4YmYzQkVDRTgzNzJCMUZBNzU3NThhQkU5OVwiO1xuY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweGJkNUNBQmFlY0REMDU5MDM5QzA1M2YwRjU1MWQxMTUxRkY4NTdlMkJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RlZmF1bHRBY2NvdW50LCBzZXREZWZhdWx0QWNjb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBbcHJvdmlkZXIsIHNldFByb3ZpZGVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2lnbmVyLCBzZXRTaWduZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt1c2R0Q29udHJhY3QsIHNldFVzZHRDb250cmFjdF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVEZWZhdWx0QWNjb3VudCA9ICh2YWx1ZSkgPT4ge1xuICAgIHNldERlZmF1bHRBY2NvdW50KHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZUV0aGVycyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgdGVtcFByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgc2V0UHJvdmlkZXIodGVtcFByb3ZpZGVyKTtcblxuICAgIGxldCB0ZW1wU2lnbmVyID0gdGVtcFByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgIHNldFNpZ25lcih0ZW1wU2lnbmVyKTtcblxuICAgIGxldCB0ZW1wQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgY29udHJhY3RBQkksIHRlbXBTaWduZXIpXG4gICAgc2V0Q29udHJhY3QodGVtcENvbnRyYWN0KTtcblxuICAgIGxldCB0ZW1wVVNEVENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdCh1c2R0QWRkcmVzcywgdXNkdEFCSSwgdGVtcFNpZ25lcilcbiAgICBzZXRVc2R0Q29udHJhY3QodGVtcFVTRFRDb250cmFjdCk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlIEFjY291bnQgdG8gOiBcIiArIGRlZmF1bHRBY2NvdW50KVxuICAgIGlmIChkZWZhdWx0QWNjb3VudCAhPT0gbnVsbClcbiAgICAgIHVwZGF0ZUV0aGVycygpXG4gIH0sIFtkZWZhdWx0QWNjb3VudF0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPSdzY3Jvb2wnPlxuICAgICAgPENvbW1vbkhlYWQgLz5cbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJici1hcHBcIj5cbiAgICAgICAgICA8TmF2YmFyXG4gICAgICAgICAgICBkZWZhdWx0QWNjb3VudENoYW5nZT17aGFuZGxlRGVmYXVsdEFjY291bnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SGVybyAvPlxuICAgICAgICAgIDxBYm91dFxuICAgICAgICAgICAgZGVmYXVsdEFjY291bnQ9e2RlZmF1bHRBY2NvdW50fVxuICAgICAgICAgICAgY29udHJhY3Q9e2NvbnRyYWN0fVxuICAgICAgICAgICAgdXNkdENvbnRyYWN0PXt1c2R0Q29udHJhY3R9XG4gICAgICAgICAgICBwcm92aWRlcj17cHJvdmlkZXJ9XG4gICAgICAgICAgICBzaWduZXI9e3NpZ25lcn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTZXJ2aWNlU2VjdGlvbiAvPlxuICAgICAgICAgIDxFeHByaWVuY2VTZWMgZGVmYXVsdEFjY291bnQ9e2RlZmF1bHRBY2NvdW50fSAvPlxuICAgICAgICAgIHsvKiA8UHJvamVjdFNlY3Rpb25cbiAgICAgICAgICAgIGRlZmF1bHRBY2NvdW50PXtkZWZhdWx0QWNjb3VudH1cbiAgICAgICAgICAgIGNvbnRyYWN0PXtjb250cmFjdH1cbiAgICAgICAgICAgIHVzZHRDb250cmFjdD17dXNkdENvbnRyYWN0fVxuICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgc2lnbmVyPXtzaWduZXJ9IFxuICAgICAgICAgIC8+ICovfVxuICAgICAgICAgIHsvKiA8VGVzdGltb25pYWwgLz5cbiAgICAgICAgICA8UHJpY2luZyAvPlxuICAgICAgICAgIDxDb250YWN0QXJlYSAvPlxuICAgICAgICAgIDxCbG9nU2VjdGlvbiAvPiAqL31cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPFNjcm9sbGJhciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=