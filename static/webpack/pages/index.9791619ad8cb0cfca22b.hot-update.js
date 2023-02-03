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

  var joinIDO = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(value) {
      var balance;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(isJoined);

              if (!(props.defaultAccount === null)) {
                _context2.next = 4;
                break;
              }

              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "請先連結錢包", "error");
              return _context2.abrupt("return");

            case 4:
              if (!(isIDOActive === false)) {
                _context2.next = 7;
                break;
              }

              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "IDO 未開啟", "error");
              return _context2.abrupt("return");

            case 7:
              if (!(isJoined === true)) {
                _context2.next = 10;
                break;
              }

              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "您已參加過IDO", "error");
              return _context2.abrupt("return");

            case 10:
              _context2.next = 12;
              return checkBalance();

            case 12:
              balance = _context2.sent;
              console.log("The balance is " + balance);

              if (!(value > balance)) {
                _context2.next = 17;
                break;
              }

              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("錯誤", "您沒有足夠的USDT", "error");
              return _context2.abrupt("return");

            case 17:
              setIsJoined(true);
              sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("成功", "".concat(value, " USDT \u6210\u529F\u52A0\u5165 LBB"), "success");
              return _context2.abrupt("return");

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function joinIDO(_x) {
      return _ref2.apply(this, arguments);
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
    var _ref3 = Object(C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
      var tempJoin, tempIDOActive;
      return C_Users_Sam_Lin_OneDrive_A_S_Mazzocchi_WEB_webpageReact_downloadable_elito_dark_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(props.contract === null)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.next = 4;
              return props.contract.isAddressJoined(props.defaultAccount);

            case 4:
              tempJoin = _context3.sent;
              console.log("The address has joined? " + tempJoin);
              setIsJoined(tempJoin);
              _context3.next = 9;
              return props.contract.isIDOActive();

            case 9:
              tempIDOActive = _context3.sent;
              setIsIDOActive(tempIDOActive);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getContractValue() {
      return _ref3.apply(this, arguments);
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
                lineNumber: 98,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: "\u53C3\u8207IDO"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "client",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  "data-count": "100",
                  children: "100"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 37
                }, _this), "%"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                children: ["\u667A\u80FD\u5408\u7D04", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 40
                }, _this), "\u81EA\u52D5\u57F7\u884C"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
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
                lineNumber: 110,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 52
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "\u4E09\u4EE3IDO USDT\u5BE6\u6642\u8FD4\u50AD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
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
                        lineNumber: 118,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 118,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E00\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 119,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
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
                        lineNumber: 124,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E8C\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 125,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
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
                        lineNumber: 130,
                        columnNumber: 49
                      }, _this), "%"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 130,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: "\u4E09\u4EE3"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 131,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: "IDO\u984D\u5EA6 50 / 100 USDT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
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
                      lineNumber: 141,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 141,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "USDT"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
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
                      lineNumber: 147,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                    children: "USDT"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              style: {
                color: 'red'
              },
              children: "** \u9EDE\u64CA\u4E0A\u65B9\u6309\u9215\u76F4\u63A5\u53C3\u52A0IDO **"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
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
            lineNumber: 160,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
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
              lineNumber: 165,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feBlend", {
              mode: "normal",
              "in": "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
              stdDeviation: "250",
              result: "effect1_foregroundBlur_39_4267"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
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
            lineNumber: 175,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
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
              lineNumber: 180,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feBlend", {
              mode: "normal",
              "in": "SourceGraphic",
              in2: "BackgroundImageFix",
              result: "shape"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("feGaussianBlur", {
              stdDeviation: "250",
              result: "effect1_foregroundBlur_39_4265"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
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
        lineNumber: 173,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "line-shape-1",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "images/about/shape1.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "line-shape-2",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "images/about/shape2.png",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hYm91dC9hYm91dC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0SW52aXRlciIsIk9LQ01haW5uZXRQcm92aWRlciIsIkJTQ01haW5uZXRQcm92aWRlciIsIndlYjMiLCJXZWIzIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiQWJvdXQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImludml0ZXJBZGRyZXNzIiwic2V0SW52aXRlckFkZHJlc3MiLCJpc0ludml0ZXJTZXQiLCJzZXRJc0ludml0ZXJTZXQiLCJpc0pvaW5lZCIsInNldElzSm9pbmVkIiwiaXNJRE9BY3RpdmUiLCJzZXRJc0lET0FjdGl2ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNoZWNrQmFsYW5jZSIsInVzZHRDb250cmFjdCIsImJhbGFuY2VPZiIsImRlZmF1bHRBY2NvdW50IiwidGVtcEJhbGFuY2VIZXgiLCJ0ZW1wQmFsYW5jZSIsInV0aWxzIiwiZnJvbVdlaSIsImpvaW5JRE8iLCJ2YWx1ZSIsInN3YWwiLCJiYWxhbmNlIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJxdWVyeSIsImFuYWx5emVMaW5rIiwidGVtcEludml0ZXIiLCJ1bmRlZmluZWQiLCJnZXRDb250cmFjdFZhbHVlIiwiY29udHJhY3QiLCJpc0FkZHJlc3NKb2luZWQiLCJ0ZW1wSm9pbiIsInRlbXBJRE9BY3RpdmUiLCJ1c2VFZmZlY3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImN1cnNvciIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHLDRDQUF2QjtBQUVBLElBQUlDLGtCQUFrQixHQUFHLDhCQUF6QjtBQUNBLElBQUlDLGtCQUFrQixHQUFHLG1DQUF6QjtBQUNBLElBQUlDLElB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QUFBO0FBQUE7QUFBQSxxQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoRkosZUErRkk7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDZCQUNJO0FBQUssV0FBRyxFQUFDLHlCQUFUO0FBQW1DLFdBQUcsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9GSixlQWtHSTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsNkJBQ0k7QUFBSyxXQUFHLEVBQUMseUJBQVQ7QUFBbUMsV0FBRyxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBd0dILENBdExEOztHQUFNM0MsSztVQTRDYTRCLHFEOzs7S0E1Q2I1QixLO0FBd0xTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NzkxNjE5YWQ4Y2IwY2ZjYTIyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcclxuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgZGVmYXVsdEludml0ZXIgPSBcIjB4M0RhMjI2MThBQmQ4NzQ2MjNjQTQ3OUNBMUZCNDk2NzQxNzRFQTk3MFwiO1xyXG5cclxubGV0IE9LQ01haW5uZXRQcm92aWRlciA9ICdodHRwczovL2V4Y2hhaW5ycGMub2tleC5vcmcvJztcclxubGV0IEJTQ01haW5uZXRQcm92aWRlciA9ICdodHRwczovL2JzYy1kYXRhc2VlZC5iaW5hbmNlLm9yZy8nO1xyXG5sZXQgd2ViMyA9IG5ldyBXZWIzKG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoT0tDTWFpbm5ldFByb3ZpZGVyKSk7XHJcblxyXG5jb25zdCBBYm91dCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICBjb25zdCBbaW52aXRlckFkZHJlc3MsIHNldEludml0ZXJBZGRyZXNzXSA9IHVzZVN0YXRlKGRlZmF1bHRJbnZpdGVyKVxyXG4gICAgY29uc3QgW2lzSW52aXRlclNldCwgc2V0SXNJbnZpdGVyU2V0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtpc0pvaW5lZCwgc2V0SXNKb2luZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzSURPQWN0aXZlLCBzZXRJc0lET0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrQmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgdGVtcEJhbGFuY2VIZXggPSBhd2FpdCBwcm9wcy51c2R0Q29udHJhY3QuYmFsYW5jZU9mKHByb3BzLmRlZmF1bHRBY2NvdW50KTtcclxuICAgICAgICBsZXQgdGVtcEJhbGFuY2UgPSB3ZWIzLnV0aWxzLmZyb21XZWkoYCR7dGVtcEJhbGFuY2VIZXh9YCwgJ2V0aGVyJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJNeSBiYWxhbmNlIGlzIFwiICsgdGVtcEJhbGFuY2UpO1xyXG4gICAgICAgIHJldHVybiB0ZW1wQmFsYW5jZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3Qgam9pbklETyA9IGFzeW5jICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlzSm9pbmVkKVxyXG4gICAgICAgIGlmIChwcm9wcy5kZWZhdWx0QWNjb3VudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzd2FsKFwi6Yyv6KqkXCIsIFwi6KuL5YWI6YCj57WQ6Yyi5YyFXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzSURPQWN0aXZlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBzd2FsKFwi6Yyv6KqkXCIsIFwiSURPIOacqumWi+WVn1wiLCBcImVycm9yXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0pvaW5lZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBzd2FsKFwi6Yyv6KqkXCIsIFwi5oKo5bey5Y+D5Yqg6YGOSURPXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJhbGFuY2UgPSBhd2FpdCBjaGVja0JhbGFuY2UoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGJhbGFuY2UgaXMgXCIgKyBiYWxhbmNlKVxyXG5cclxuICAgICAgICBpZiAodmFsdWUgPiBiYWxhbmNlKSB7XHJcbiAgICAgICAgICAgIHN3YWwoXCLpjK/oqqRcIiwgXCLmgqjmspLmnInotrPlpKDnmoRVU0RUXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldElzSm9pbmVkKHRydWUpXHJcbiAgICAgICAgc3dhbChcIuaIkOWKn1wiLCBgJHt2YWx1ZX0gVVNEVCDmiJDlip/liqDlhaUgTEJCYCwgXCJzdWNjZXNzXCIpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHJvdXRlcjtcclxuXHJcbiAgICBjb25zdCBhbmFseXplTGluayA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaW52aXRlckFkZHJlc3MgIT09IGRlZmF1bHRJbnZpdGVyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGlzSW52aXRlclNldCA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB0ZW1wSW52aXRlciA9IHF1ZXJ5WydpbnZpdGVyJ11cclxuXHJcbiAgICAgICAgaWYgKHRlbXBJbnZpdGVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2V0SW52aXRlckFkZHJlc3ModGVtcEludml0ZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBJbnZpdGVyIFNldCB0byA6IFwiICsgdGVtcEludml0ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRDb250cmFjdFZhbHVlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcm9wcy5jb250cmFjdCA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdGVtcEpvaW4gPSBhd2FpdCBwcm9wcy5jb250cmFjdC5pc0FkZHJlc3NKb2luZWQocHJvcHMuZGVmYXVsdEFjY291bnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIGFkZHJlc3MgaGFzIGpvaW5lZD8gXCIgKyB0ZW1wSm9pbilcclxuICAgICAgICBzZXRJc0pvaW5lZCh0ZW1wSm9pbik7XHJcblxyXG4gICAgICAgIGxldCB0ZW1wSURPQWN0aXZlID0gYXdhaXQgcHJvcHMuY29udHJhY3QuaXNJRE9BY3RpdmUoKTtcclxuICAgICAgICBzZXRJc0lET0FjdGl2ZSh0ZW1wSURPQWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXplTGluaygpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocHJvcHMuZGVmYXVsdEFjY291bnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZ2V0Q29udHJhY3RWYWx1ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Byb3BzLmRlZmF1bHRBY2NvdW50XSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndwby1hYm91dC1hcmVhIHNlY3Rpb24tcGFkZGluZ1wiIGlkPSdhYm91dCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IGNvbC1tZC0xMiBjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtZXhwcmllbmNlLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLWFib3V0LWV4cHJpZW5jZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5JRE88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuWPg+iIh0lETzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gZGF0YS1jb3VudD1cIjEwMFwiPjEwMDwvc3Bhbj4lPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7mmbrog73lkIjntIQ8YnIgLz7oh6rli5Xln7fooYw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBvZmZzZXQtbGctMSBjb2wtbWQtMTIgY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLWFib3V0LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BvLWFib3V0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkxCQiAtIOS4ieS7o+i/lOWCrTwvaDI+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+5LiJ5LujSURPIFVTRFTlr6bmmYLov5Tlgq08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtZnVuZmFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGRhdGEtY291bnQ9XCI5OFwiPjY8L3NwYW4+JTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+5LiA5LujPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBkYXRhLWNvdW50PVwiOTJcIj4yPC9zcGFuPiU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuS6jOS7ozwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+PHNwYW4gZGF0YS1jb3VudD1cIjg4XCI+MTwvc3Bhbj4lPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7kuInku6M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+SURP6aGN5bqmIDUwIC8gMTAwIFVTRFQ8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cG8tYWJvdXQtZnVuZmFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pbm5lclwiIG9uQ2xpY2s9eygpID0+IGpvaW5JRE8oNTApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBkYXRhLWNvdW50PVwiNzJcIj41MDwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VVNEVDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCIgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWlubmVyXCIgb25DbGljaz17KCkgPT4gam9pbklETygxMDApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBkYXRhLWNvdW50PVwiNDNcIj4xMDA8L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVTRFQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PioqIOm7nuaTiuS4iuaWueaMiemIleebtOaOpeWPg+WKoElETyAqKjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFiLXNoYXBlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiOTk1XCIgaGVpZ2h0PVwiMTQ5NVwiIHZpZXdCb3g9XCIwIDAgOTk1IDE0OTVcIiBmaWxsPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxnIG9wYWNpdHk9XCIwLjNcIiBmaWx0ZXI9XCJ1cmwoI2ZpbHRlcjBfZl8zOV80MjY3KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMjQ3LjVcIiBjeT1cIjc0Ny41XCIgcj1cIjI0Ny41XCIgZmlsbD1cIiNGRkU1MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpbHRlciBpZD1cImZpbHRlcjBfZl8zOV80MjY3XCIgeD1cIi01MDBcIiB5PVwiMFwiIHdpZHRoPVwiMTQ5NVwiIGhlaWdodD1cIjE0OTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM9XCJzUkdCXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVGbG9vZCBmbG9vZE9wYWNpdHk9XCIwXCIgcmVzdWx0PVwiQmFja2dyb3VuZEltYWdlRml4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUJsZW5kIG1vZGU9XCJub3JtYWxcIiBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiByZXN1bHQ9XCJzaGFwZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMjUwXCIgcmVzdWx0PVwiZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8zOV80MjY3XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFiLXNoYXBlLXMyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTI1MlwiIGhlaWdodD1cIjE5MDFcIiB2aWV3Qm94PVwiMCAwIDEyNTIgMTkwMVwiIGZpbGw9XCJub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGcgb3BhY2l0eT1cIjAuMTVcIiBmaWx0ZXI9XCJ1cmwoI2ZpbHRlcjBfZl8zOV80MjY1KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiOTUwXCIgY3k9XCI5NTAuMDA0XCIgcj1cIjQ1MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlsdGVyIGlkPVwiZmlsdGVyMF9mXzM5XzQyNjVcIiB4PVwiLTAuMDAwMTIyMDdcIiB5PVwiMC4wMDQwMjgzMlwiIHdpZHRoPVwiMTkwMFwiIGhlaWdodD1cIjE5MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM9XCJzUkdCXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVGbG9vZCBmbG9vZE9wYWNpdHk9XCIwXCIgcmVzdWx0PVwiQmFja2dyb3VuZEltYWdlRml4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmZUJsZW5kIG1vZGU9XCJub3JtYWxcIiBpbj1cIlNvdXJjZUdyYXBoaWNcIiBpbjI9XCJCYWNrZ3JvdW5kSW1hZ2VGaXhcIiByZXN1bHQ9XCJzaGFwZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiMjUwXCIgcmVzdWx0PVwiZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8zOV80MjY1XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWx0ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kZWZzPlxyXG4gICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtc2hhcGUtMVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYWJvdXQvc2hhcGUxLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUtc2hhcGUtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYWJvdXQvc2hhcGUyLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==