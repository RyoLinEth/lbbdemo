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

  console.log(props);

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
              _context5.next = 5;
              return props.contract.makeIDO(inviterAddress, etherAmount, {
                gasLimit: "1000000"
              });

            case 5:
              result = _context5.sent;

              if (!result) {
                sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "認購失敗", "error");
              } else {
                setIsJoined(true);
                if (value === 50) sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("成功", "成功認購 50 USDT", "success");
                if (value === 100) sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("成功", "成功認購 100 USDT", "success");
              }

              _context5.next = 12;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](1);
              console.log(_context5.t0);

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 9]]);
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
      setInviterAddress(tempInviter);
      console.log("The Inviter Set to : " + tempInviter);
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
              setIsIDOActive(tempIDOActive);

            case 11:
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
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (props.defaultAccount !== null) {
      getContractValue();
    }
  }, [props.defaultAccount]);
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
                lineNumber: 159,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "\u53C3\u8207IDO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "client",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  "data-count": "100",
                  children: "100"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
                  columnNumber: 37
                }, _this), "%"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["\u667A\u80FD\u5408\u7D04", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 40
                }, _this), "\u81EA\u52D5\u57F7\u884C"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
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
                lineNumber: 171,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 52
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "\u4E09\u4EE3IDO USDT\u5BE6\u6642\u8FD4\u50AD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
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
                        lineNumber: 179,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E00\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 180,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
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
                        lineNumber: 185,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E8C\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 186,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
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
                        lineNumber: 191,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 191,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E09\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 192,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "IDO\u984D\u5EA6 50 / 100 USDT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
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
                      lineNumber: 202,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "USDT"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
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
                      lineNumber: 208,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 208,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "USDT"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 209,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 207,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              style: {
                color: 'red'
              },
              children: "** \u9EDE\u64CA\u4E0A\u65B9\u6309\u9215\u76F4\u63A5\u53C3\u52A0IDO **"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
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
            lineNumber: 221,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
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
              lineNumber: 226,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feBlend", {
              mode: "normal",
              "in": "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
              stdDeviation: "250",
              result: "effect1_foregroundBlur_39_4267"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
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
            lineNumber: 236,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 235,
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
              lineNumber: 241,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feBlend", {
              mode: "normal",
              "in": "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
              stdDeviation: "250",
              result: "effect1_foregroundBlur_39_4265"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "line-shape-1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "images/about/shape1.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "line-shape-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "images/about/shape2.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 153,
    columnNumber: 9
  }, _this);
};

_s(About, "cg/yFzoey1g2i2TuzUvUxQ4ZMUo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC9hYm91dC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0SW52aXRlciIsIk9LQ01haW5uZXRQcm92aWRlciIsIkJTQ01haW5uZXRQcm92aWRlciIsIndlYjMiLCJXZWIzIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiQWJvdXQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImludml0ZXJBZGRyZXNzIiwic2V0SW52aXRlckFkZHJlc3MiLCJpc0ludml0ZXJTZXQiLCJzZXRJc0ludml0ZXJTZXQiLCJpc0pvaW5lZCIsInNldElzSm9pbmVkIiwiaXNJRE9BY3RpdmUiLCJzZXRJc0lET0FjdGl2ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNoZWNrQmFsYW5jZSIsInVzZHRDb250cmFjdCIsImJhbGFuY2VPZiIsImRlZmF1bHRBY2NvdW50IiwidGVtcEJhbGFuY2VIZXgiLCJ0ZW1wQmFsYW5jZSIsInV0aWxzIiwiZnJvbVdlaSIsImNoZWNrQWxsb3dhbmNlIiwiYWxsb3dhbmNlIiwiY29udHJhY3QiLCJhZGRyZXNzIiwiYWxsb3dhbmNlQW1vdW50IiwiY2hlY2tBbGxvd2FuY2VBZ2FpbiIsInZhbHVlIiwicmVzdWx0Iiwic2V0VGltZW91dCIsImhhbmRsZUNvbnRyaWJ1dGUiLCJldGhlckFtb3VudCIsImV0aGVycyIsInBhcnNlRXRoZXIiLCJtYWtlSURPIiwiZ2FzTGltaXQiLCJzd2FsIiwiam9pbklETyIsImJhbGFuY2UiLCJhcHByb3ZlQW1vdW50IiwidG9XZWkiLCJhcHByb3ZlIiwicmVzdWx0MiIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwicXVlcnkiLCJhbmFseXplTGluayIsInRlbXBJbnZpdGVyIiwidW5kZWZpbmVkIiwiZ2V0Q29udHJhY3RWYWx1ZSIsImlzQWRkcmVzc0pvaW5lZCIsInRlbXBKb2luIiwidGVtcElET0FjdGl2ZSIsInVzZUVm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O0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0dILENBblBEOztHQUFNNUQsSztVQXlHYThDLHFEOzs7S0F6R2I5QyxLO0FBcVBTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMGIwZDU5ZWUxZWNiZTZiMDUzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgZGVmYXVsdEludml0ZXIgPSBcIjB4M0RhMjI2MThBQmQ4NzQ2MjNjQTQ3OUNBMUZCNDk2NzQxNzRFQTk3MFwiO1xyXG5cclxubGV0IE9LQ01haW5uZXRQcm92aWRlciA9ICdodHRwczovL2V4Y2hhaW5ycGMub2tleC5vcmcvJztcclxubGV0IEJTQ01haW5uZXRQcm92aWRlciA9ICdodHRwczovL2JzYy1kYXRhc2VlZC5iaW5hbmNlLm9yZy8nO1xyXG5sZXQgd2ViMyA9IG5ldyBXZWIzKG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoT0tDTWFpbm5ldFByb3ZpZGVyKSk7XHJcblxyXG5jb25zdCBBYm91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICBjb25zdCBbaW52aXRlckFkZHJlc3MsIHNldEludml0ZXJBZGRyZXNzXSA9IHVzZVN0YXRlKGRlZmF1bHRJbnZpdGVyKVxyXG4gICAgY29uc3QgW2lzSW52aXRlclNldCwgc2V0SXNJbnZpdGVyU2V0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtpc0pvaW5lZCwgc2V0SXNKb2luZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzSURPQWN0aXZlLCBzZXRJc0lET0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrQmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgdGVtcEJhbGFuY2VIZXggPSBhd2FpdCBwcm9wcy51c2R0Q29udHJhY3QuYmFsYW5jZU9mKHByb3BzLmRlZmF1bHRBY2NvdW50KTtcclxuICAgICAgICBsZXQgdGVtcEJhbGFuY2UgPSB3ZWIzLnV0aWxzLmZyb21XZWkoYCR7dGVtcEJhbGFuY2VIZXh9YCwgJ2V0aGVyJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNeSBiYWxhbmNlIGlzIFwiICsgdGVtcEJhbGFuY2UpO1xyXG4gICAgICAgIHJldHVybiB0ZW1wQmFsYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGVja0FsbG93YW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIEFsbG93YW5jZS4uLlwiKTtcclxuICAgICAgICBsZXQgYWxsb3dhbmNlID0gYXdhaXQgcHJvcHMudXNkdENvbnRyYWN0LmFsbG93YW5jZShwcm9wcy5kZWZhdWx0QWNjb3VudCwgcHJvcHMuY29udHJhY3QuYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3QgYWxsb3dhbmNlQW1vdW50ID0gd2ViMy51dGlscy5mcm9tV2VpKGAke2FsbG93YW5jZX1gLCAnZXRoZXInKTtcclxuICAgICAgICByZXR1cm4gYWxsb3dhbmNlQW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoZWNrQWxsb3dhbmNlQWdhaW4gPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY2hlY2tBbGxvd2FuY2UoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW4gY2hlY2sgYWxsb3dhbmNlIGFnYWluIDogXCIgKyByZXN1bHQpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0IDwgdmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGNoZWNrQWxsb3dhbmNlQWdhaW4odmFsdWUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0sIDMwMDApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgaGFuZGxlQ29udHJpYnV0ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ29udHJpYnV0ZSA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGV0aGVyQW1vdW50O1xyXG4gICAgICAgICAgICBldGhlckFtb3VudCA9IGV0aGVycy51dGlscy5wYXJzZUV0aGVyKGAke3ZhbHVlfWApO1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHByb3BzLmNvbnRyYWN0Lm1ha2VJRE8oXHJcbiAgICAgICAgICAgICAgICBpbnZpdGVyQWRkcmVzcywgZXRoZXJBbW91bnQsIHsgZ2FzTGltaXQ6IFwiMTAwMDAwMFwiIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBzd2FsKFwi6Yyv6KqkXCIsIFwi6KqN6LO85aSx5pWXXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0pvaW5lZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gNTApXHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbChcIuaIkOWKn1wiLCBcIuaIkOWKn+iqjeizvCA1MCBVU0RUXCIsIFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoXCLmiJDlip9cIiwgXCLmiJDlip/oqo3os7wgMTAwIFVTRFRcIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGpvaW5JRE8gPSBhc3luYyAodmFsdWUpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpc0pvaW5lZClcclxuICAgICAgICBpZiAocHJvcHMuZGVmYXVsdEFjY291bnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgc3dhbChcIumMr+iqpFwiLCBcIuiri+WFiOmAo+e1kOmMouWMhVwiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0lET0FjdGl2ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgc3dhbChcIumMr+iqpFwiLCBcIklETyDmnKrplovllZ9cIiwgXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNKb2luZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgc3dhbChcIumMr+iqpFwiLCBcIuaCqOW3suWPg+WKoOmBjklET1wiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiYWxhbmNlID0gYXdhaXQgY2hlY2tCYWxhbmNlKClcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID4gYmFsYW5jZSkge1xyXG4gICAgICAgICAgICBzd2FsKFwi6Yyv6KqkXCIsIFwi5oKo5rKS5pyJ6Laz5aSg55qEVVNEVFwiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY2hlY2tBbGxvd2FuY2UoKVxyXG4gICAgICAgIGNvbnN0IGFwcHJvdmVBbW91bnQgPSB3ZWIzLnV0aWxzLnRvV2VpKGAke3ZhbHVlfWAsICdldGhlcicpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ID49IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQWxsb3dhbmNlICR7cmVzdWx0fWApXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBcHByb3ZlQW1vdW50ICR7YXBwcm92ZUFtb3VudH1gKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQWxsb3dhbmNlIGlzIGVub3VnaHQgZm9yICR7dmFsdWV9IFVTRFRgKVxyXG4gICAgICAgICAgICBoYW5kbGVDb250cmlidXRlKHZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQWxsb3dhbmNlIGlzIE5PVCBlbm91Z2h0IGZvciAke3ZhbHVlfSBVU0RUYClcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQyID0gYXdhaXQgcHJvcHMudXNkdENvbnRyYWN0LmFwcHJvdmUocHJvcHMuY29udHJhY3QuYWRkcmVzcywgYXBwcm92ZUFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0MilcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0FsbG93YW5jZUFnYWluKHZhbHVlKTtcclxuICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICBzd2FsKFwi6Yyv6KqkXCIsIFwi5o6I5qyKVVNEVOWkseaVl1wiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcm91dGVyO1xyXG5cclxuICAgIGNvbnN0IGFuYWx5emVMaW5rID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbnZpdGVyQWRkcmVzcyAhPT0gZGVmYXVsdEludml0ZXIpIHJldHVybjtcclxuICAgICAgICBpZiAoaXNJbnZpdGVyU2V0ID09PSB0cnVlKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHRlbXBJbnZpdGVyID0gcXVlcnlbJ2ludml0ZXInXVxyXG5cclxuICAgICAgICBpZiAodGVtcEludml0ZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZXRJbnZpdGVyQWRkcmVzcyh0ZW1wSW52aXRlcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIEludml0ZXIgU2V0IHRvIDogXCIgKyB0ZW1wSW52aXRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldENvbnRyYWN0VmFsdWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb3BzLmNvbnRyYWN0ID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0ZW1wSm9pbiA9IGF3YWl0IHByb3BzLmNvbnRyYWN0LmlzQWRkcmVzc0pvaW5lZChwcm9wcy5kZWZhdWx0QWNjb3VudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgYWRkcmVzcyBoYXMgam9pbmVkPyBcIiArIHRlbXBKb2luKVxyXG4gICAgICAgIHNldElzSm9pbmVkKHRlbXBKb2luKTtcclxuXHJcbiAgICAgICAgbGV0IHRlbXBJRE9BY3RpdmUgPSBhd2FpdCBwcm9wcy5jb250cmFjdC5pc0lET0FjdGl2ZSgpO1xyXG4gICAgICAgIHNldElzSURPQWN0aXZlKHRlbXBJRE9BY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5emVMaW5rKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5kZWZhdWx0QWNjb3VudCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBnZXRDb250cmFjdFZhbHVlKClcclxuICAgICAgICB9XHJcbiAgICB9LCBbcHJvcHMuZGVmYXVsdEFjY291bnRdKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLWFib3V0LWFyZWEgc2VjdGlvbi1wYWRkaW5nXCIgaWQ9J2Fib3V0Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLW1kLTEyIGNvbC1zbS0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1hYm91dC1leHByaWVuY2Utd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtZXhwcmllbmNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPklETzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+5Y+D6IiHSURPPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBkYXRhLWNvdW50PVwiMTAwXCI+MTAwPC9zcGFuPiU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuaZuuiDveWQiOe0hDxiciAvPuiHquWLleWft+ihjDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IG9mZnNldC1sZy0xIGNvbC1tZC0xMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+TEJCIC0g5LiJ5Luj6L+U5YKtPC9oMj48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT7kuInku6NJRE8gVVNEVOWvpuaZgui/lOWCrTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1hYm91dC1mdW5mYWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gZGF0YS1jb3VudD1cIjk4XCI+Njwvc3Bhbj4lPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7kuIDku6M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGRhdGEtY291bnQ9XCI5MlwiPjI8L3NwYW4+JTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+5LqM5LujPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBkYXRhLWNvdW50PVwiODhcIj4xPC9zcGFuPiU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuS4ieS7ozwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5JRE/poY3luqYgNTAgLyAxMDAgVVNEVDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1hYm91dC1mdW5mYWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCIgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWlubmVyXCIgb25DbGljaz17KCkgPT4gam9pbklETyg1MCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGRhdGEtY291bnQ9XCI3MlwiPjUwPC9zcGFuPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5VU0RUPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIiBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaW5uZXJcIiBvbkNsaWNrPXsoKSA9PiBqb2luSURPKDEwMCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGRhdGEtY291bnQ9XCI0M1wiPjEwMDwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VVNEVDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Kiog6bue5pOK5LiK5pa55oyJ6YiV55u05o6l5Y+D5YqgSURPICoqPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWItc2hhcGVcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCI5OTVcIiBoZWlnaHQ9XCIxNDk1XCIgdmlld0JveD1cIjAgMCA5OTUgMTQ5NVwiIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgb3BhY2l0eT1cIjAuM1wiIGZpbHRlcj1cInVybCgjZmlsdGVyMF9mXzM5XzQyNjcpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIyNDcuNVwiIGN5PVwiNzQ3LjVcIiByPVwiMjQ3LjVcIiBmaWxsPVwiI0ZGRTUwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlsdGVyIGlkPVwiZmlsdGVyMF9mXzM5XzQyNjdcIiB4PVwiLTUwMFwiIHk9XCIwXCIgd2lkdGg9XCIxNDk1XCIgaGVpZ2h0PVwiMTQ5NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVycz1cInNSR0JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUZsb29kIGZsb29kT3BhY2l0eT1cIjBcIiByZXN1bHQ9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlQmxlbmQgbW9kZT1cIm5vcm1hbFwiIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cIkJhY2tncm91bmRJbWFnZUZpeFwiIHJlc3VsdD1cInNoYXBlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCIyNTBcIiByZXN1bHQ9XCJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzM5XzQyNjdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpbHRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWItc2hhcGUtczJcIj5cclxuICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxMjUyXCIgaGVpZ2h0PVwiMTkwMVwiIHZpZXdCb3g9XCIwIDAgMTI1MiAxOTAxXCIgZmlsbD1cIm5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZyBvcGFjaXR5PVwiMC4xNVwiIGZpbHRlcj1cInVybCgjZmlsdGVyMF9mXzM5XzQyNjUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCI5NTBcIiBjeT1cIjk1MC4wMDRcIiByPVwiNDUwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWx0ZXIgaWQ9XCJmaWx0ZXIwX2ZfMzlfNDI2NVwiIHg9XCItMC4wMDAxMjIwN1wiIHk9XCIwLjAwNDAyODMyXCIgd2lkdGg9XCIxOTAwXCIgaGVpZ2h0PVwiMTkwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVycz1cInNSR0JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUZsb29kIGZsb29kT3BhY2l0eT1cIjBcIiByZXN1bHQ9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZlQmxlbmQgbW9kZT1cIm5vcm1hbFwiIGluPVwiU291cmNlR3JhcGhpY1wiIGluMj1cIkJhY2tncm91bmRJbWFnZUZpeFwiIHJlc3VsdD1cInNoYXBlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCIyNTBcIiByZXN1bHQ9XCJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzM5XzQyNjVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpbHRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS1zaGFwZS0xXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9hYm91dC9zaGFwZTEucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS1zaGFwZS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9hYm91dC9zaGFwZTIucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiXSwic291cmNlUm9vdCI6IiJ9