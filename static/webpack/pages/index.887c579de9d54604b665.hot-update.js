webpackHotUpdate_N_E("pages/index",{

/***/ "./components/about/about.js":
/*!***********************************!*\
  !*** ./components/about/about.js ***!
  \***********************************/
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
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "../../../../../../node_modules/web3/dist/web3.min.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "C:\\Users\\Sam Lin\\OneDrive - A.S. Mazzocchi\\\u684C\u9762\\WEB\\webpageReact\\downloadable\\elito dark\\components\\about\\about.js",
    _this = undefined,
    _s = $RefreshSig$();






var defaultInviter = "0x3Da22618ABd874623cA479CA1FB49674174EA970";
var OKCMainnetProvider = 'https://exchainrpc.okex.org/';
var BSCMainnetProvider = 'https://bsc-dataseed.binance.org/';
var web3 = new web3__WEBPACK_IMPORTED_MODULE_5___default.a(new web3__WEBPACK_IMPORTED_MODULE_5___default.a.providers.HttpProvider(OKCMainnetProvider));

var About = function About(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(defaultInviter),
      inviterAddress = _useState[0],
      setInviterAddress = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isInviterSet = _useState2[0],
      setIsInviterSet = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isJoined = _useState3[0],
      setIsJoined = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isIDOActive = _useState4[0],
      setIsIDOActive = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState5[0],
      setIsLoading = _useState5[1];

  if (props.defaultAccount !== null) getContractValue();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getContractValue();
  }, [props.defaultAccount]);

  var checkBalance = /*#__PURE__*/function () {
    var _ref = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var tempBalanceHex, tempBalance;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return props.usdtContract.balanceOf(props.defaultAccount);

            case 2:
              tempBalanceHex = _context.sent;
              tempBalance = web3.utils.fromWei("".concat(tempBalanceHex), 'ether');
              console.log("My balance is " + tempBalance);
              return _context.abrupt("return", tempBalance);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function checkBalance() {
      return _ref.apply(this, arguments);
    };
  }();

  var checkAllowance = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var allowance, allowanceAmount;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log("Checking Allowance...");
              _context2.next = 3;
              return props.usdtContract.allowance(props.defaultAccount, props.contract.address);

            case 3:
              allowance = _context2.sent;
              allowanceAmount = web3.utils.fromWei("".concat(allowance), 'ether');
              return _context2.abrupt("return", allowanceAmount);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function checkAllowance() {
      return _ref2.apply(this, arguments);
    };
  }();

  var checkAllowanceAgain = /*#__PURE__*/function () {
    var _ref3 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(value) {
      var result;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return checkAllowance();

            case 2:
              result = _context4.sent;
              console.log("In check allowance again : " + result);

              if (result < value) {
                setIsLoading(true);
                setTimeout( /*#__PURE__*/Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
                  return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return checkAllowanceAgain(value);

                        case 2:
                          return _context3.abrupt("return");

                        case 3:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                })), 3000);
              } else handleContribute(value);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function checkAllowanceAgain(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleContribute = /*#__PURE__*/function () {
    var _ref5 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(value) {
      var etherAmount, result;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setIsLoading(false);
              _context5.prev = 1;
              etherAmount = ethers__WEBPACK_IMPORTED_MODULE_6__["ethers"].utils.parseEther("".concat(value));
              console.log("In handle contribute");
              console.log("\n            Inviter : ".concat(inviterAddress, "\n            USDT Amount : ").concat(etherAmount));
              _context5.next = 7;
              return props.contract.makeIDO(inviterAddress, etherAmount, {
                gasLimit: "1000000"
              });

            case 7:
              result = _context5.sent;

              if (!result) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "認購失敗", "error");
              } else {
                setIsJoined(true);
                if (value === 50) sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("成功", "成功認購 50 USDT", "success");
                if (value === 100) sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("成功", "成功認購 100 USDT", "success");
              }

              _context5.next = 14;
              break;

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](1);
              console.log(_context5.t0);

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 11]]);
    }));

    return function handleContribute(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var joinIDO = /*#__PURE__*/function () {
    var _ref6 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(value) {
      var balance, result, approveAmount, result2;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              console.log(isJoined);

              if (!(props.defaultAccount === null)) {
                _context6.next = 4;
                break;
              }

              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "請先連結錢包", "error");
              return _context6.abrupt("return");

            case 4:
              if (!(isIDOActive === false)) {
                _context6.next = 7;
                break;
              }

              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "IDO 未開啟", "error");
              return _context6.abrupt("return");

            case 7:
              if (!(isJoined === true)) {
                _context6.next = 10;
                break;
              }

              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "您已參加過IDO", "error");
              return _context6.abrupt("return");

            case 10:
              _context6.next = 12;
              return checkBalance();

            case 12:
              balance = _context6.sent;

              if (!(value > balance)) {
                _context6.next = 16;
                break;
              }

              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "您沒有足夠的USDT", "error");
              return _context6.abrupt("return");

            case 16:
              _context6.next = 18;
              return checkAllowance();

            case 18:
              result = _context6.sent;
              approveAmount = web3.utils.toWei("".concat(value), 'ether');

              if (!(result >= value)) {
                _context6.next = 27;
                break;
              }

              console.log("Allowance ".concat(result));
              console.log("ApproveAmount ".concat(approveAmount));
              console.log("Allowance is enought for ".concat(value, " USDT"));
              handleContribute(value);
              _context6.next = 38;
              break;

            case 27:
              _context6.prev = 27;
              console.log("Allowance is NOT enought for ".concat(value, " USDT"));
              _context6.next = 31;
              return props.usdtContract.approve(props.contract.address, approveAmount);

            case 31:
              result2 = _context6.sent;
              if (result2) checkAllowanceAgain(value);
              _context6.next = 38;
              break;

            case 35:
              _context6.prev = 35;
              _context6.t0 = _context6["catch"](27);
              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "授權USDT失敗", "error");

            case 38:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[27, 35]]);
    }));

    return function joinIDO(_x3) {
      return _ref6.apply(this, arguments);
    };
  }();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var pathname = router.pathname,
      query = router.query;

  var analyzeLink = function analyzeLink() {
    if (inviterAddress !== defaultInviter) return;
    if (isInviterSet === true) return;
    var tempInviter = query['inviter'];

    if (tempInviter !== undefined) {
      try {
        var checkSumAddress = web3.utils.toChecksumAddress(tempInviter);
        setInviterAddress(checkSumAddress);
        console.log("The Inviter Set to : " + checkSumAddress);
      } catch (err) {
        console.log("Address : ".concat(tempInviter, " cannot be transformed into a checksum address"));
      }
    }
  };

  var getContractValue = /*#__PURE__*/function () {
    var _ref7 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
      var tempJoin, tempIDOActive;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!(props.contract === null)) {
                _context7.next = 2;
                break;
              }

              return _context7.abrupt("return");

            case 2:
              _context7.next = 4;
              return props.contract.isAddressJoined(props.defaultAccount);

            case 4:
              tempJoin = _context7.sent;
              console.log("The address has joined? " + tempJoin);
              setIsJoined(tempJoin);
              _context7.next = 9;
              return props.contract.isIDOActive();

            case 9:
              tempIDOActive = _context7.sent;
              console.log("The ido is active? " + tempIDOActive);
              setIsIDOActive(tempIDOActive);

            case 12:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function getContractValue() {
      return _ref7.apply(this, arguments);
    };
  }();

  analyzeLink();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "wpo-about-area section-padding",
    id: "about",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row align-items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-lg-5 col-md-12 col-sm-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "wpo-about-exprience-wrap",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "wpo-about-exprience",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "IDO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "\u53C3\u8207IDO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "client",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  "data-count": "100",
                  children: "100"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 37
                }, _this), "%"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["\u667A\u80FD\u5408\u7D04", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 40
                }, _this), "\u81EA\u52D5\u57F7\u884C"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-lg-6 offset-lg-1 col-md-12 col-sm-12",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "wpo-about-content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "wpo-about-title",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: "LBB - \u4E09\u4EE3\u8FD4\u50AD"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 52
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "\u4E09\u4EE3IDO USDT\u5BE6\u6642\u8FD4\u50AD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "wpo-about-funfact",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  display: "flex",
                  flexDirection: "row"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "grid",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "grid-inner",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        "data-count": "98",
                        children: "6"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 188,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 188,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E00\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 189,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "grid",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "grid-inner",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        "data-count": "92",
                        children: "2"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 194,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 194,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E8C\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "grid",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "grid-inner",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                        "data-count": "88",
                        children: "1"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 200,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 200,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E09\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 201,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 199,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "IDO\u984D\u5EA6 50 / 100 USDT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "wpo-about-funfact",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "grid",
                style: {
                  cursor: "pointer"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "grid-inner",
                  onClick: function onClick() {
                    return joinIDO(50);
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      "data-count": "72",
                      children: "50"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "USDT"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 212,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 209,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "grid",
                style: {
                  cursor: "pointer"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "grid-inner",
                  onClick: function onClick() {
                    return joinIDO(100);
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      "data-count": "43",
                      children: "100"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 217,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "USDT"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 218,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 215,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 208,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              style: {
                color: 'red'
              },
              children: "** \u9EDE\u64CA\u4E0A\u65B9\u6309\u9215\u76F4\u63A5\u53C3\u52A0IDO **"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ab-shape",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        width: "995",
        height: "1495",
        viewBox: "0 0 995 1495",
        fill: "none",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
          opacity: "0.3",
          filter: "url(#filter0_f_39_4267)",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
            cx: "247.5",
            cy: "747.5",
            r: "247.5",
            fill: "#FFE500"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 230,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("filter", {
            id: "filter0_f_39_4267",
            x: "-500",
            y: "0",
            width: "1495",
            height: "1495",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 235,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feBlend", {
              mode: "normal",
              "in": "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
              stdDeviation: "250",
              result: "effect1_foregroundBlur_39_4267"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ab-shape-s2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
        width: "1252",
        height: "1901",
        viewBox: "0 0 1252 1901",
        fill: "none",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
          opacity: "0.15",
          filter: "url(#filter0_f_39_4265)",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
            cx: "950",
            cy: "950.004",
            r: "450"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 245,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("filter", {
            id: "filter0_f_39_4265",
            x: "-0.00012207",
            y: "0.00402832",
            width: "1900",
            height: "1900",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feFlood", {
              floodOpacity: "0",
              result: "BackgroundImageFix"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feBlend", {
              mode: "normal",
              "in": "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
              stdDeviation: "250",
              result: "effect1_foregroundBlur_39_4265"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "line-shape-1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "images/about/shape1.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "line-shape-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "images/about/shape2.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 9
  }, _this);
};

_s(About, "YHj/6+mF0MrLn3IwxtOkCklU0CI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = About;
/* harmony default export */ __webpack_exports__["default"] = (About);

var _c;

$RefreshReg$(_c, "About");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC9hYm91dC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0SW52aXRlciIsIk9LQ01haW5uZXRQcm92aWRlciIsIkJTQ01haW5uZXRQcm92aWRlciIsIndlYjMiLCJXZWIzIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiQWJvdXQiLCJwcm9wcyIsInVzZVN0YXRlIiwiaW52aXRlckFkZHJlc3MiLCJzZXRJbnZpdGVyQWRkcmVzcyIsImlzSW52aXRlclNldCIsInNldElzSW52aXRlclNldCIsImlzSm9pbmVkIiwic2V0SXNKb2luZWQiLCJpc0lET0FjdGl2ZSIsInNldElzSURPQWN0aXZlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZGVmYXVsdEFjY291bnQiLCJnZXRDb250cmFjdFZhbHVlIiwidXNlRWZmZWN0IiwiY2hlY2tCYWxhbmNlIiwidXNkdENvbnRyYWN0IiwiYmFsYW5jZU9mIiwidGVtcEJhbGFuY2VIZXgiLCJ0ZW1wQmFsYW5jZSIsInV0aWxzIiwiZnJvbVdlaSIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0FsbG93YW5jZSIsImFsbG93YW5jZSIsImNvbnRyYWN0IiwiYWRkcmVzcyIsImFsbG93YW5jZUFtb3VudCIsImNoZWNrQWxsb3dhbmNlQWdhaW4iLCJ2YWx1ZSIsInJlc3VsdCIsInNldFRpbWVvdXQiLCJoYW5kbGVDb250cmlidXRlIiwiZXRoZXJBbW91bnQiLCJldGhlcnMiLCJwYXJzZUV0aGVyIiwibWFrZUlETyIsImdhc0xpbWl0Iiwic3dhbCIsImpvaW5JRE8iLCJiYWxhbmNlIiwiYXBwcm92ZUFtb3VudCIsInRvV2VpIiwiYXBwcm92ZSIsInJlc3VsdDIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInF1ZXJ5IiwiYW5hbHl6ZUxpbmsiLCJ0ZW1wSW52aXRlciIsInVuZGVmaW5lZCIsImNoZWNrU3VtQWRkcmVzcyIsInRvQ2hlY2tzdW1BZGRyZXNzIiwiZXJyIiwiaXNBZGRyZXNzSm9pbmVkIiwidGVtcEpvaW4iLCJ0ZW1wSURPQWN0aXZlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJjdXJzb3IiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBRyw0Q0FBdkI7QUFFQSxJQUFJQyxrQkFBa0IsR0FBRyw4QkFBekI7QUFDQSxJQUFJQyxrQkFBa0IsR0FBRyxtQ0FBekI7QUFDQSxJQUFJQyxJQUFJLEdBQUcsSUFBSUMsMkNBQUosQ0FBUyxJQUFJQSwyQ0FBSSxDQUFDQyxTQUFMLENBQWVDLFlBQW5CLENBQWdDTCxrQkFBaEMsQ0FBVCxDQUFYOztBQUVBLElBQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUN1QkMsc0RBQVEsQ0FBQ1QsY0FBRCxDQUQvQjtBQUFBLE1BQ2RVLGNBRGM7QUFBQSxNQUNFQyxpQkFERjs7QUFBQSxtQkFFbUJGLHNEQUFRLENBQUMsS0FBRCxDQUYzQjtBQUFBLE1BRWRHLFlBRmM7QUFBQSxNQUVBQyxlQUZBOztBQUFBLG1CQUlXSixzREFBUSxDQUFDLEtBQUQsQ0FKbkI7QUFBQSxNQUlkSyxRQUpjO0FBQUEsTUFJSkMsV0FKSTs7QUFBQSxtQkFLaUJOLHNEQUFRLENBQUMsS0FBRCxDQUx6QjtBQUFBLE1BS2RPLFdBTGM7QUFBQSxNQUtEQyxjQUxDOztBQUFBLG1CQU1hUixzREFBUSxDQUFDLEtBQUQsQ0FOckI7QUFBQSxNQU1kUyxTQU5jO0FBQUEsTUFNSEMsWUFORzs7QUFRckIsTUFBSVgsS0FBSyxDQUFDWSxjQUFOLEtBQXlCLElBQTdCLEVBQ0lDLGdCQUFnQjtBQUVwQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pELG9CQUFnQjtBQUNuQixHQUZRLEVBRU4sQ0FBQ2IsS0FBSyxDQUFDWSxjQUFQLENBRk0sQ0FBVDs7QUFJQSxNQUFNRyxZQUFZO0FB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Sko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhGSixlQStGSTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsNkJBQ0k7QUFBSyxXQUFHLEVBQUMseUJBQVQ7QUFBbUMsV0FBRyxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0ZKLGVBa0dJO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw2QkFDSTtBQUFLLFdBQUcsRUFBQyx5QkFBVDtBQUFtQyxXQUFHLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsR0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF3R0gsQ0E1UEQ7O0dBQU0vRCxLO1VBa0hhZ0QscUQ7OztLQWxIYmhELEs7QUE4UFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg4N2M1NzlkZTlkNTQ2MDRiNjY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0J1xyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBkZWZhdWx0SW52aXRlciA9IFwiMHgzRGEyMjYxOEFCZDg3NDYyM2NBNDc5Q0ExRkI0OTY3NDE3NEVBOTcwXCI7XHJcblxyXG5sZXQgT0tDTWFpbm5ldFByb3ZpZGVyID0gJ2h0dHBzOi8vZXhjaGFpbnJwYy5va2V4Lm9yZy8nO1xyXG5sZXQgQlNDTWFpbm5ldFByb3ZpZGVyID0gJ2h0dHBzOi8vYnNjLWRhdGFzZWVkLmJpbmFuY2Uub3JnLyc7XHJcbmxldCB3ZWIzID0gbmV3IFdlYjMobmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihPS0NNYWlubmV0UHJvdmlkZXIpKTtcclxuXHJcbmNvbnN0IEFib3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaW52aXRlckFkZHJlc3MsIHNldEludml0ZXJBZGRyZXNzXSA9IHVzZVN0YXRlKGRlZmF1bHRJbnZpdGVyKVxyXG4gICAgY29uc3QgW2lzSW52aXRlclNldCwgc2V0SXNJbnZpdGVyU2V0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtpc0pvaW5lZCwgc2V0SXNKb2luZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzSURPQWN0aXZlLCBzZXRJc0lET0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGlmIChwcm9wcy5kZWZhdWx0QWNjb3VudCAhPT0gbnVsbClcclxuICAgICAgICBnZXRDb250cmFjdFZhbHVlKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldENvbnRyYWN0VmFsdWUoKVxyXG4gICAgfSwgW3Byb3BzLmRlZmF1bHRBY2NvdW50XSlcclxuXHJcbiAgICBjb25zdCBjaGVja0JhbGFuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRlbXBCYWxhbmNlSGV4ID0gYXdhaXQgcHJvcHMudXNkdENvbnRyYWN0LmJhbGFuY2VPZihwcm9wcy5kZWZhdWx0QWNjb3VudCk7XHJcbiAgICAgICAgbGV0IHRlbXBCYWxhbmNlID0gd2ViMy51dGlscy5mcm9tV2VpKGAke3RlbXBCYWxhbmNlSGV4fWAsICdldGhlcicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTXkgYmFsYW5jZSBpcyBcIiArIHRlbXBCYWxhbmNlKTtcclxuICAgICAgICByZXR1cm4gdGVtcEJhbGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hlY2tBbGxvd2FuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGVja2luZyBBbGxvd2FuY2UuLi5cIik7XHJcbiAgICAgICAgbGV0IGFsbG93YW5jZSA9IGF3YWl0IHByb3BzLnVzZHRDb250cmFjdC5hbGxvd2FuY2UocHJvcHMuZGVmYXVsdEFjY291bnQsIHByb3BzLmNvbnRyYWN0LmFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IGFsbG93YW5jZUFtb3VudCA9IHdlYjMudXRpbHMuZnJvbVdlaShgJHthbGxvd2FuY2V9YCwgJ2V0aGVyJyk7XHJcbiAgICAgICAgcmV0dXJuIGFsbG93YW5jZUFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja0FsbG93YW5jZUFnYWluID0gYXN5bmMgKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNoZWNrQWxsb3dhbmNlKClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkluIGNoZWNrIGFsbG93YW5jZSBhZ2FpbiA6IFwiICsgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCA8IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjaGVja0FsbG93YW5jZUFnYWluKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9LCAzMDAwKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGhhbmRsZUNvbnRyaWJ1dGUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNvbnRyaWJ1dGUgPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBldGhlckFtb3VudDtcclxuICAgICAgICAgICAgZXRoZXJBbW91bnQgPSBldGhlcnMudXRpbHMucGFyc2VFdGhlcihgJHt2YWx1ZX1gKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbiBoYW5kbGUgY29udHJpYnV0ZVwiKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgXHJcbiAgICAgICAgICAgIEludml0ZXIgOiAke2ludml0ZXJBZGRyZXNzfVxyXG4gICAgICAgICAgICBVU0RUIEFtb3VudCA6ICR7ZXRoZXJBbW91bnR9YClcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHByb3BzLmNvbnRyYWN0Lm1ha2VJRE8oXHJcbiAgICAgICAgICAgICAgICBpbnZpdGVyQWRkcmVzcywgZXRoZXJBbW91bnQsIHsgZ2FzTGltaXQ6IFwiMTAwMDAwMFwiIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBzd2FsKFwi6Yyv6KqkXCIsIFwi6KqN6LO85aSx5pWXXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0pvaW5lZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gNTApXHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbChcIuaIkOWKn1wiLCBcIuaIkOWKn+iqjeizvCA1MCBVU0RUXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoXCLmiJDlip9cIiwgXCLmiJDlip/oqo3os7wgMTAwIFVTRFRcIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGpvaW5JRE8gPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpc0pvaW5lZClcclxuICAgICAgICBpZiAocHJvcHMuZGVmYXVsdEFjY291bnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgc3dhbChcIumMr+iqpFwiLCBcIuiri+WFiOmAo+e1kOmMouWMhVwiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0lET0FjdGl2ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgc3dhbChcIumMr+iqpFwiLCBcIklETyDmnKrplovllZ9cIiwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNKb2luZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgc3dhbChcIumMr+iqpFwiLCBcIuaCqOW3suWPg+WKoOmBjklET1wiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gYXdhaXQgY2hlY2tCYWxhbmNlKClcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID4gYmFsYW5jZSkge1xyXG4gICAgICAgICAgICBzd2FsKFwi6Yyv6KqkXCIsIFwi5oKo5rKS5pyJ6Laz5aSg55qEVVNEVFwiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY2hlY2tBbGxvd2FuY2UoKVxyXG4gICAgICAgIGNvbnN0IGFwcHJvdmVBbW91bnQgPSB3ZWIzLnV0aWxzLnRvV2VpKGAke3ZhbHVlfWAsICdldGhlcicpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ID49IHZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQWxsb3dhbmNlICR7cmVzdWx0fWApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBcHByb3ZlQW1vdW50ICR7YXBwcm92ZUFtb3VudH1gKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQWxsb3dhbmNlIGlzIGVub3VnaHQgZm9yICR7dmFsdWV9IFVTRFRgKVxyXG4gICAgICAgICAgICBoYW5kbGVDb250cmlidXRlKHZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQWxsb3dhbmNlIGlzIE5PVCBlbm91Z2h0IGZvciAke3ZhbHVlfSBVU0RUYClcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQyID0gYXdhaXQgcHJvcHMudXNkdENvbnRyYWN0LmFwcHJvdmUocHJvcHMuY29udHJhY3QuYWRkcmVzcywgYXBwcm92ZUFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0MilcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0FsbG93YW5jZUFnYWluKHZhbHVlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICBzd2FsKFwi6Yyv6KqkXCIsIFwi5o6I5qyKVVNEVOWkseaVl1wiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcm91dGVyO1xyXG5cclxuICAgIGNvbnN0IGFuYWx5emVMaW5rID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbnZpdGVyQWRkcmVzcyAhPT0gZGVmYXVsdEludml0ZXIpIHJldHVybjtcclxuICAgICAgICBpZiAoaXNJbnZpdGVyU2V0ID09PSB0cnVlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHRlbXBJbnZpdGVyID0gcXVlcnlbJ2ludml0ZXInXVxyXG5cclxuICAgICAgICBpZiAodGVtcEludml0ZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrU3VtQWRkcmVzcyA9IHdlYjMudXRpbHMudG9DaGVja3N1bUFkZHJlc3ModGVtcEludml0ZXIpXHJcbiAgICAgICAgICAgICAgICBzZXRJbnZpdGVyQWRkcmVzcyhjaGVja1N1bUFkZHJlc3MpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGUgSW52aXRlciBTZXQgdG8gOiBcIiArIGNoZWNrU3VtQWRkcmVzcyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEFkZHJlc3MgOiAke3RlbXBJbnZpdGVyfSBjYW5ub3QgYmUgdHJhbnNmb3JtZWQgaW50byBhIGNoZWNrc3VtIGFkZHJlc3NgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldENvbnRyYWN0VmFsdWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLmNvbnRyYWN0ID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0ZW1wSm9pbiA9IGF3YWl0IHByb3BzLmNvbnRyYWN0LmlzQWRkcmVzc0pvaW5lZChwcm9wcy5kZWZhdWx0QWNjb3VudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgYWRkcmVzcyBoYXMgam9pbmVkPyBcIiArIHRlbXBKb2luKVxyXG4gICAgICAgIHNldElzSm9pbmVkKHRlbXBKb2luKTtcclxuXHJcbiAgICAgICAgbGV0IHRlbXBJRE9BY3RpdmUgPSBhd2FpdCBwcm9wcy5jb250cmFjdC5pc0lET0FjdGl2ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGlkbyBpcyBhY3RpdmU/IFwiICsgdGVtcElET0FjdGl2ZSlcclxuICAgICAgICBzZXRJc0lET0FjdGl2ZSh0ZW1wSURPQWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXplTGluaygpXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtYXJlYSBzZWN0aW9uLXBhZGRpbmdcIiBpZD0nYWJvdXQnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLWFib3V0LWV4cHJpZW5jZS13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1hYm91dC1leHByaWVuY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+SURPPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7lj4PoiIdJRE88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xpZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGRhdGEtY291bnQ9XCIxMDBcIj4xMDA8L3NwYW4+JTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+5pm66IO95ZCI57SEPGJyIC8+6Ieq5YuV5Z+36KGMPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgb2Zmc2V0LWxnLTEgY29sLW1kLTEyIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1hYm91dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1hYm91dC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5MQkIgLSDkuInku6Pov5Tlgq08L2gyPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PuS4ieS7o0lETyBVU0RU5a+m5pmC6L+U5YKtPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLWFib3V0LWZ1bmZhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBkYXRhLWNvdW50PVwiOThcIj42PC9zcGFuPiU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuS4gOS7ozwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gZGF0YS1jb3VudD1cIjkyXCI+Mjwvc3Bhbj4lPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7kuozku6M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGRhdGEtY291bnQ9XCI4OFwiPjE8L3NwYW4+JTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+5LiJ5LujPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PklET+mhjeW6piA1MCAvIDEwMCBVU0RUPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLWFib3V0LWZ1bmZhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaW5uZXJcIiBvbkNsaWNrPXsoKSA9PiBqb2luSURPKDUwKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gZGF0YS1jb3VudD1cIjcyXCI+NTA8L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVTRFQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pbm5lclwiIG9uQ2xpY2s9eygpID0+IGpvaW5JRE8oMTAwKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gZGF0YS1jb3VudD1cIjQzXCI+MTAwPC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5VU0RUPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT4qKiDpu57mk4rkuIrmlrnmjInpiJXnm7TmjqXlj4PliqBJRE8gKio8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYi1zaGFwZVwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjk5NVwiIGhlaWdodD1cIjE0OTVcIiB2aWV3Qm94PVwiMCAwIDk5NSAxNDk1XCIgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBvcGFjaXR5PVwiMC4zXCIgZmlsdGVyPVwidXJsKCNmaWx0ZXIwX2ZfMzlfNDI2NylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjI0Ny41XCIgY3k9XCI3NDcuNVwiIHI9XCIyNDcuNVwiIGZpbGw9XCIjRkZFNTAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJmaWx0ZXIwX2ZfMzlfNDI2N1wiIHg9XCItNTAwXCIgeT1cIjBcIiB3aWR0aD1cIjE0OTVcIiBoZWlnaHQ9XCIxNDk1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzPVwic1JHQlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMFwiIHJlc3VsdD1cIkJhY2tncm91bmRJbWFnZUZpeFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVCbGVuZCBtb2RlPVwibm9ybWFsXCIgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiQmFja2dyb3VuZEltYWdlRml4XCIgcmVzdWx0PVwic2hhcGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjI1MFwiIHJlc3VsdD1cImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMzlfNDI2N1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlsdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYi1zaGFwZS1zMlwiPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEyNTJcIiBoZWlnaHQ9XCIxOTAxXCIgdmlld0JveD1cIjAgMCAxMjUyIDE5MDFcIiBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIG9wYWNpdHk9XCIwLjE1XCIgZmlsdGVyPVwidXJsKCNmaWx0ZXIwX2ZfMzlfNDI2NSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjk1MFwiIGN5PVwiOTUwLjAwNFwiIHI9XCI0NTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpbHRlciBpZD1cImZpbHRlcjBfZl8zOV80MjY1XCIgeD1cIi0wLjAwMDEyMjA3XCIgeT1cIjAuMDA0MDI4MzJcIiB3aWR0aD1cIjE5MDBcIiBoZWlnaHQ9XCIxOTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzPVwic1JHQlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMFwiIHJlc3VsdD1cIkJhY2tncm91bmRJbWFnZUZpeFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVCbGVuZCBtb2RlPVwibm9ybWFsXCIgaW49XCJTb3VyY2VHcmFwaGljXCIgaW4yPVwiQmFja2dyb3VuZEltYWdlRml4XCIgcmVzdWx0PVwic2hhcGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjI1MFwiIHJlc3VsdD1cImVmZmVjdDFfZm9yZWdyb3VuZEJsdXJfMzlfNDI2NVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlsdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLXNoYXBlLTFcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Fib3V0L3NoYXBlMS5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLXNoYXBlLTJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Fib3V0L3NoYXBlMi5wbmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0OyJdLCJzb3VyY2VSb290IjoiIn0=