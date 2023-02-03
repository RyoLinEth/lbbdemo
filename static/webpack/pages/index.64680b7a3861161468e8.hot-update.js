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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProjectSection_ProjectSection__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_scrollbar_scrollbar__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiT0tDTWFpbm5ldFByb3ZpZGVyIiwiQlNDTWFpbm5ldFByb3ZpZGVyIiwid2ViMyIsIldlYjMiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiLCJ1c2R0QWRkcmVzcyIsImNvbnRyYWN0QWRkcmVzcyIsIkhvbWUiLCJ1c2VTdGF0ZSIsImRlZmF1bHRBY2NvdW50Iiwic2V0RGVmYXVsdEFjY291bnQiLCJwcm92aWRlciIsInNldFByb3ZpZGVyIiwic2lnbmVyIiwic2V0U2lnbmVyIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInVzZHRDb250cmFjdCIsInNldFVzZHRDb250cmFjdCIsImhhbmRsZURlZmF1bHRBY2NvdW50IiwidmFsdWUiLCJ1cGRhdGVFdGhlcnMiLCJ0ZW1wUHJvdmlkZXIiLCJldGhlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInRlbXBTaWduZXIiLCJnZXRTaWduZXIiLCJ0ZW1wQ29udHJhY3QiLCJDb250cmFjdCIsImNvbnRyYWN0QUJJIiwidGVtcFVTRFRDb250cmFjdCIsInVzZHRBQkkiLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGtCQUFrQixHQUFHLDhCQUF6QjtBQUNBLElBQUlDLGtCQUFrQixHQUFHLG1DQUF6QjtBQUNBLElBQUlDLElBQUksR0FBRyxJQUFJQyw0Q0FBSixDQUFTLElBQUlBLDRDQUFJLENBQUNDLFNBQUwsQ0FBZUMsWUFBbkIsQ0FBZ0NMLGtCQUFoQyxDQUFULENBQVg7QUFFQSxJQUFNTSxXQUFXLEdB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RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0dBN0R1QkYsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NDY4MGI3YTM4NjExNjE0NjhlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQnO1xuaW1wb3J0IEJsb2dTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvQmxvZ1NlY3Rpb24vQmxvZ1NlY3Rpb24nO1xuaW1wb3J0IENvbW1vbkhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb25IZWFkJztcbmltcG9ydCBDb250YWN0QXJlYSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3RBcmVhJztcbmltcG9ydCBFeHByaWVuY2VTZWMgZnJvbSAnLi4vY29tcG9uZW50cy9FeHByaWVuY2UvRXhwcmllbmNlJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXIvRm9vdGVyJztcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVyby9oZXJvJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyJztcbmltcG9ydCBQcmljaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvUHJpY2luZy9QcmljaW5nJztcbmltcG9ydCBQcm9qZWN0U2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RTZWN0aW9uL1Byb2plY3RTZWN0aW9uJztcbmltcG9ydCBTY3JvbGxiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zY3JvbGxiYXIvc2Nyb2xsYmFyJztcbmltcG9ydCBTZXJ2aWNlU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1NlcnZpY2VTZWN0aW9uL1NlcnZpY2VTZWN0aW9uJztcbmltcG9ydCBUZXN0aW1vbmlhbCBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RpbW9uaWFsL1Rlc3RpbW9uaWFsJztcblxuaW1wb3J0IHVzZHRBQkkgZnJvbSAnLi4vY29tcG9uZW50cy9hYmkvdXNkdEFCSS5qc29uJ1xuaW1wb3J0IGNvbnRyYWN0QUJJIGZyb20gJy4uL2NvbXBvbmVudHMvYWJpL2lkb0FCSS5qc29uJ1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5cbmxldCBPS0NNYWlubmV0UHJvdmlkZXIgPSAnaHR0cHM6Ly9leGNoYWlucnBjLm9rZXgub3JnLyc7XG5sZXQgQlNDTWFpbm5ldFByb3ZpZGVyID0gJ2h0dHBzOi8vYnNjLWRhdGFzZWVkLmJpbmFuY2Uub3JnLyc7XG5sZXQgd2ViMyA9IG5ldyBXZWIzKG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoT0tDTWFpbm5ldFByb3ZpZGVyKSk7XG5cbmNvbnN0IHVzZHRBZGRyZXNzID0gXCIweEQwZjYxOEM2QzI5MTRkOGJmM0JFQ0U4MzcyQjFGQTc1NzU4YUJFOTlcIjtcbmNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IFwiMHhiZDVDQUJhZWNERDA1OTAzOUMwNTNmMEY1NTFkMTE1MUZGODU3ZTJCXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkZWZhdWx0QWNjb3VudCwgc2V0RGVmYXVsdEFjY291bnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgW3Byb3ZpZGVyLCBzZXRQcm92aWRlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3NpZ25lciwgc2V0U2lnbmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY29udHJhY3QsIHNldENvbnRyYWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdXNkdENvbnRyYWN0LCBzZXRVc2R0Q29udHJhY3RdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlRGVmYXVsdEFjY291bnQgPSAodmFsdWUpID0+IHtcbiAgICBzZXREZWZhdWx0QWNjb3VudCh2YWx1ZSk7XG4gIH1cblxuICBjb25zdCB1cGRhdGVFdGhlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IHRlbXBQcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgIHNldFByb3ZpZGVyKHRlbXBQcm92aWRlcik7XG5cbiAgICBsZXQgdGVtcFNpZ25lciA9IHRlbXBQcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICBzZXRTaWduZXIodGVtcFNpZ25lcik7XG5cbiAgICBsZXQgdGVtcENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGNvbnRyYWN0QUJJLCB0ZW1wU2lnbmVyKVxuICAgIHNldENvbnRyYWN0KHRlbXBDb250cmFjdCk7XG5cbiAgICBsZXQgdGVtcFVTRFRDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QodXNkdEFkZHJlc3MsIHVzZHRBQkksIHRlbXBTaWduZXIpXG4gICAgc2V0VXNkdENvbnRyYWN0KHRlbXBVU0RUQ29udHJhY3QpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNoYW5nZSBBY2NvdW50IHRvIDogXCIgKyBkZWZhdWx0QWNjb3VudClcbiAgICBpZiAoZGVmYXVsdEFjY291bnQgIT09IG51bGwpXG4gICAgICB1cGRhdGVFdGhlcnMoKVxuICB9LCBbZGVmYXVsdEFjY291bnRdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD0nc2Nyb29sJz5cbiAgICAgIDxDb21tb25IZWFkIC8+XG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnItYXBwXCI+XG4gICAgICAgICAgPE5hdmJhclxuICAgICAgICAgICAgZGVmYXVsdEFjY291bnRDaGFuZ2U9e2hhbmRsZURlZmF1bHRBY2NvdW50fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEhlcm8gLz5cbiAgICAgICAgICA8QWJvdXRcbiAgICAgICAgICAgIGRlZmF1bHRBY2NvdW50PXtkZWZhdWx0QWNjb3VudH1cbiAgICAgICAgICAgIGNvbnRyYWN0PXtjb250cmFjdH1cbiAgICAgICAgICAgIHVzZHRDb250cmFjdD17dXNkdENvbnRyYWN0fVxuICAgICAgICAgICAgcHJvdmlkZXI9e3Byb3ZpZGVyfVxuICAgICAgICAgICAgc2lnbmVyPXtzaWduZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U2VydmljZVNlY3Rpb24gLz5cbiAgICAgICAgICA8RXhwcmllbmNlU2VjIGRlZmF1bHRBY2NvdW50PXtkZWZhdWx0QWNjb3VudH0gLz5cbiAgICAgICAgICA8UHJvamVjdFNlY3Rpb24gLz5cbiAgICAgICAgICB7LyogPFRlc3RpbW9uaWFsIC8+XG4gICAgICAgICAgPFByaWNpbmcgLz5cbiAgICAgICAgICA8Q29udGFjdEFyZWEgLz5cbiAgICAgICAgICA8QmxvZ1NlY3Rpb24gLz4gKi99XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgIDxTY3JvbGxiYXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9