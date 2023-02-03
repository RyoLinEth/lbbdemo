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
var contractAddress = "0xe13af19f22038F16Abb94625ABdC6F3a731eEc36";
var defaultInviter = "0x3Da22618ABd874623cA479CA1FB49674174EA970";
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
          usdtContract: usdtContract
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ServiceSection_ServiceSection__WEBPACK_IMPORTED_MODULE_16__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Exprience_Exprience__WEBPACK_IMPORTED_MODULE_9__["default"], {
          defaultAccount: defaultAccount
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_scrollbar_scrollbar__WEBPACK_IMPORTED_MODULE_15__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiT0tDTWFpbm5ldFByb3ZpZGVyIiwiQlNDTWFpbm5ldFByb3ZpZGVyIiwid2ViMyIsIldlYjMiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiLCJ1c2R0QWRkcmVzcyIsImNvbnRyYWN0QWRkcmVzcyIsImRlZmF1bHRJbnZpdGVyIiwiSG9tZSIsInVzZVN0YXRlIiwiZGVmYXVsdEFjY291bnQiLCJzZXREZWZhdWx0QWNjb3VudCIsInByb3ZpZGVyIiwic2V0UHJvdmlkZXIiLCJzaWduZXIiLCJzZXRTaWduZXIiLCJjb250cmFjdCIsInNldENvbnRyYWN0IiwidXNkdENvbnRyYWN0Iiwic2V0VXNkdENvbnRyYWN0IiwiaGFuZGxlRGVmYXVsdEFjY291bnQiLCJ2YWx1ZSIsInVwZGF0ZUV0aGVycyIsInRlbXBQcm92aWRlciIsImV0aGVycyIsIldlYjNQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwidGVtcFNpZ25lciIsImdldFNpZ25lciIsInRlbXBDb250cmFjdCIsIkNvbnRyYWN0IiwiY29udHJhY3RBQkkiLCJ0ZW1wVVNEVENvbnRyYWN0IiwidXNkdEFCSSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsa0JBQWtCLEdBQUcsOEJBQXpCO0FBQ0EsSUFBSUMsa0JBQWtCLEdBQUcsbUNBQXpCO0FBQ0EsSUFBSUMsSUFBSSxHQUFHLElBQUlDLDRDQUFKLENBQVMsSUFBSUEsNENBQUksQ0FBQ0MsU0FBTCxDQUFlQyxZQUFuQixDQUFnQ0wsa0JBQWhDLENBQVQsQ0FBWDtB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QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQ7O0dBM0R1QkYsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYTVkMjU2ZjFjODk5NTVhMDUzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQnO1xuaW1wb3J0IEJsb2dTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvQmxvZ1NlY3Rpb24vQmxvZ1NlY3Rpb24nO1xuaW1wb3J0IENvbW1vbkhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb25IZWFkJztcbmltcG9ydCBDb250YWN0QXJlYSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3RBcmVhJztcbmltcG9ydCBFeHByaWVuY2VTZWMgZnJvbSAnLi4vY29tcG9uZW50cy9FeHByaWVuY2UvRXhwcmllbmNlJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXIvRm9vdGVyJztcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvaGVyby9oZXJvJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyJztcbmltcG9ydCBQcmljaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvUHJpY2luZy9QcmljaW5nJztcbmltcG9ydCBQcm9qZWN0U2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RTZWN0aW9uL1Byb2plY3RTZWN0aW9uJztcbmltcG9ydCBTY3JvbGxiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zY3JvbGxiYXIvc2Nyb2xsYmFyJztcbmltcG9ydCBTZXJ2aWNlU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1NlcnZpY2VTZWN0aW9uL1NlcnZpY2VTZWN0aW9uJztcbmltcG9ydCBUZXN0aW1vbmlhbCBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RpbW9uaWFsL1Rlc3RpbW9uaWFsJztcblxuaW1wb3J0IHVzZHRBQkkgZnJvbSAnLi4vY29tcG9uZW50cy9hYmkvdXNkdEFCSS5qc29uJ1xuaW1wb3J0IGNvbnRyYWN0QUJJIGZyb20gJy4uL2NvbXBvbmVudHMvYWJpL2lkb0FCSS5qc29uJ1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5cbmxldCBPS0NNYWlubmV0UHJvdmlkZXIgPSAnaHR0cHM6Ly9leGNoYWlucnBjLm9rZXgub3JnLyc7XG5sZXQgQlNDTWFpbm5ldFByb3ZpZGVyID0gJ2h0dHBzOi8vYnNjLWRhdGFzZWVkLmJpbmFuY2Uub3JnLyc7XG5sZXQgd2ViMyA9IG5ldyBXZWIzKG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoT0tDTWFpbm5ldFByb3ZpZGVyKSk7XG5jb25zdCB1c2R0QWRkcmVzcyA9IFwiMHhEMGY2MThDNkMyOTE0ZDhiZjNCRUNFODM3MkIxRkE3NTc1OGFCRTk5XCI7XG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4ZTEzYWYxOWYyMjAzOEYxNkFiYjk0NjI1QUJkQzZGM2E3MzFlRWMzNlwiO1xuY29uc3QgZGVmYXVsdEludml0ZXIgPSBcIjB4M0RhMjI2MThBQmQ4NzQ2MjNjQTQ3OUNBMUZCNDk2NzQxNzRFQTk3MFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGVmYXVsdEFjY291bnQsIHNldERlZmF1bHRBY2NvdW50XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IFtwcm92aWRlciwgc2V0UHJvdmlkZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzaWduZXIsIHNldFNpZ25lcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VzZHRDb250cmFjdCwgc2V0VXNkdENvbnRyYWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZURlZmF1bHRBY2NvdW50ID0gKHZhbHVlKSA9PiB7XG4gICAgc2V0RGVmYXVsdEFjY291bnQodmFsdWUpO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlRXRoZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCB0ZW1wUHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICBzZXRQcm92aWRlcih0ZW1wUHJvdmlkZXIpO1xuXG4gICAgbGV0IHRlbXBTaWduZXIgPSB0ZW1wUHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgc2V0U2lnbmVyKHRlbXBTaWduZXIpO1xuXG4gICAgbGV0IHRlbXBDb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBjb250cmFjdEFCSSwgdGVtcFNpZ25lcilcbiAgICBzZXRDb250cmFjdCh0ZW1wQ29udHJhY3QpO1xuXG4gICAgbGV0IHRlbXBVU0RUQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KHVzZHRBZGRyZXNzLCB1c2R0QUJJLCB0ZW1wU2lnbmVyKVxuICAgIHNldFVzZHRDb250cmFjdCh0ZW1wVVNEVENvbnRyYWN0KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJDaGFuZ2UgQWNjb3VudCB0byA6IFwiICsgZGVmYXVsdEFjY291bnQpXG4gICAgaWYgKGRlZmF1bHRBY2NvdW50ICE9PSBudWxsKVxuICAgICAgdXBkYXRlRXRoZXJzKClcbiAgfSwgW2RlZmF1bHRBY2NvdW50XSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9J3Njcm9vbCc+XG4gICAgICA8Q29tbW9uSGVhZCAvPlxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyLWFwcFwiPlxuICAgICAgICAgIDxOYXZiYXJcbiAgICAgICAgICAgIGRlZmF1bHRBY2NvdW50Q2hhbmdlPXtoYW5kbGVEZWZhdWx0QWNjb3VudH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxIZXJvIC8+XG4gICAgICAgICAgPEFib3V0XG4gICAgICAgICAgICBkZWZhdWx0QWNjb3VudD17ZGVmYXVsdEFjY291bnR9XG4gICAgICAgICAgICBjb250cmFjdD17Y29udHJhY3R9XG4gICAgICAgICAgICB1c2R0Q29udHJhY3Q9e3VzZHRDb250cmFjdH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTZXJ2aWNlU2VjdGlvbiAvPlxuICAgICAgICAgIDxFeHByaWVuY2VTZWMgZGVmYXVsdEFjY291bnQ9e2RlZmF1bHRBY2NvdW50fSAvPlxuICAgICAgICAgIHsvKiA8UHJvamVjdFNlY3Rpb24gLz5cbiAgICAgICAgICA8VGVzdGltb25pYWwgLz5cbiAgICAgICAgICA8UHJpY2luZyAvPlxuICAgICAgICAgIDxDb250YWN0QXJlYSAvPlxuICAgICAgICAgIDxCbG9nU2VjdGlvbiAvPiAqL31cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPFNjcm9sbGJhciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=