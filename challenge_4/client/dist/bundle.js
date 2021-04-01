/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/app.jsx":
/*!****************************!*\
  !*** ./client/src/app.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Board_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Board.jsx */ \"./client/src/components/Board.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      //state of the game board - row5 refers to the top and row0 refers to the bottom\n      board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],\n      currentPlayer: 1\n    };\n    _this.handleClickOnBoard = _this.handleClickOnBoard.bind(_assertThisInitialized(_this));\n    return _this;\n  } //function to handle clicks on the board\n\n\n  _createClass(App, [{\n    key: \"handleClickOnBoard\",\n    value: function handleClickOnBoard(col) {\n      console.log('Clicked on column', col); //change the state to reflect the click on the column\n      //check the column that was passed in\n      //if the element at row5, col is a zero\n\n      if (this.state.board[5][col] === 0) {\n        console.log('IN HERE FIRST');\n        var newState = this.state.board.slice(); //then change it to a 1 or 2 depending on which player's turn it is\n\n        newState[5][col] = this.state.currentPlayer;\n        this.setState({\n          board: newState\n        }); //test for a tie - if testForTie function is true\n\n        if (this.testForTie()) {\n          //invoke the alertOfTie function\n          this.alertOfTie(); //test for a win -\n        } else if (this.testForWin()) {\n          this.alertOfWin();\n        } //invoke function to change current player\n\n\n        this.changePlayer(); //otherwise if the element at ro4, col is a zero\n      } else if (this.state.board[4][col] === 0) {\n        console.log('IN HERE');\n\n        var _newState = this.state.board.slice(); //then change it to a 1 or 2 depending on which player's turn it is\n\n\n        _newState[4][col] = this.state.currentPlayer;\n        this.setState({\n          board: _newState\n        }); //test for a tie - if testForTie function is true\n\n        if (this.testForTie()) {\n          //invoke the alertOfTie function\n          this.alertOfTie(); //test for a win -\n        } else if (this.testForWin()) {\n          this.alertOfWin();\n        } //invoke function to change current player\n\n\n        this.changePlayer(); //otherwise if the element at row3, col is a zero\n      } else if (this.state.board[3][col] === 0) {\n        var _newState2 = this.state.board.slice(); //then change it to a 1 or 2 depending on which player's turn it is\n\n\n        _newState2[3][col] = this.state.currentPlayer;\n        this.setState({\n          board: _newState2\n        }); //test for a tie - if testForTie function is true\n\n        if (this.testForTie()) {\n          //invoke the alertOfTie function\n          this.alertOfTie(); //test for a win -\n        } else if (this.testForWin()) {\n          this.alertOfWin();\n        } //invoke function to change current player\n\n\n        this.changePlayer(); //otherwise if the element at row2, col is a zero\n      } else if (this.state.board[2][col] === 0) {\n        var _newState3 = this.state.board.slice(); //then change it to a 1 or 2 depending on which player's turn it is\n\n\n        _newState3[2][col] = this.state.currentPlayer;\n        this.setState({\n          board: _newState3\n        }); //test for a tie - if testForTie function is true\n\n        if (this.testForTie()) {\n          //invoke the alertOfTie function\n          this.alertOfTie(); //test for a win -\n        } else if (this.testForWin()) {\n          this.alertOfWin();\n        } //invoke function to change current player\n\n\n        this.changePlayer(); //otherwise if the element at row1, col is a zero\n      } else if (this.state.board[1][col] === 0) {\n        var _newState4 = this.state.board.slice(); //then change it to a 1 or 2 depending on which player's turn it is\n\n\n        _newState4[1][col] = this.state.currentPlayer;\n        this.setState({\n          board: _newState4\n        }); //test for a tie - if testForTie function is true\n\n        if (this.testForTie()) {\n          //invoke the alertOfTie function\n          this.alertOfTie(); //test for a win -\n        } else if (this.testForWin()) {\n          this.alertOfWin();\n        } //invoke function to change current player\n\n\n        this.changePlayer(); //otherwise if the element at row0, col is a zero\n      } else if (this.state.board[0][col] === 0) {\n        var _newState5 = this.state.board.slice(); //then change it to a 1 or 2 depending on which player's turn it is\n\n\n        _newState5[0][col] = this.state.currentPlayer;\n        this.setState({\n          board: _newState5\n        }); //test for a tie - if testForTie function is true\n\n        if (this.testForTie()) {\n          //invoke the alertOfTie function\n          this.alertOfTie(); //test for a win -\n        } else if (this.testForWin()) {\n          this.alertOfWin();\n        } //invoke function to change current player\n\n\n        this.changePlayer(); //otherwise, alert the user a piece cannot be added there\n      } else {\n        //TODO: alert the user\n        console.log('Piece cannot be added there');\n      }\n    } //function to test for a tie - pass in the state of the board\n\n  }, {\n    key: \"testForTie\",\n    value: function testForTie(board) {\n      //tie occurs if all spaces are filled and no win has been detected\n      //create bool for allSpacesFilled - starts as true\n      var allSpacesFilled = true; //iterate over the board state\n\n      for (var i = 0; i < board.length; i++) {\n        for (var j = 0; j < board[0].length; j++) {\n          //if a space on the board is a 0\n          if (board[i][j] === 0) {\n            //change allSpacesFilled to false\n            allSpacesFilled = false; //return allSpacesFilled\n\n            return allSpacesFilled;\n          }\n        }\n      } //if allSpacesFilled var is true and no win detected\n\n\n      if (allSpacesFilled && !testForWin) {\n        //return allSpaces filled\n        return allSpacesFilled;\n      }\n    } //function to alert user that there was a tie in the game\n\n  }, {\n    key: \"alertOfTie\",\n    value: function alertOfTie() {\n      //TODO: create an alert box that pops up signifying a tie\n      console.log('There is a tie');\n    } //function to test for win in game for the current player\n    //pass in the board state as an input\n\n  }, {\n    key: \"testForWin\",\n    value: function testForWin(board) {\n      //iterate over the state of the board\n      for (var i = 0; i < board.length; i++) {\n        for (var j = 0; j < board[0].length; j++) {\n          //if the current item is a value that matches the currentPlayer in state\n          if (board[i][j] === this.state.currentPlayer) {\n            //test for row win - if current value and next 3 vals all match currentPlayer in state\n            if (board[i][j + 1] === this.state.currentPlayer && board[i][j + 2] === this.state.currentPlayer && board[i][j + 3] === this.state.currentPlayer) {\n              //return true\n              return true;\n            } //test for column win - if current value and next 3 vals in the same col all match currentPlayer in state\n            else if (board[i + 1][j] === this.state.currentPlayer && board[i + 2][j] === this.state.currentPlayer && board[i + 3][j] === this.state.currentPlayer) {\n                //return true\n                return true;\n              } //test for major diagonal win - if current value and next 3 vals in diag all match currentPlayer in state\n              else if (board[i + 1][j + 1] === this.state.currentPlayer && board[i + 2][j + 2] === this.state.currentPlayer && board[i + 3][j + 3] === this.state.currentPlayer) {\n                  //return true\n                  return true;\n                } //test for minor diag win - if current value and next 3 vals in diag all match currentPlayer in state\n                else if (board[i - 1][j + 1] === this.state.currentPlayer && board[i - 2][j + 2] === this.state.currentPlayer && board[i - 3][j + 3] === this.state.currentPlayer) {\n                    //return trues\n                    return true;\n                  }\n          }\n        }\n      } //catch all = return false\n\n\n      return false;\n    } //function to alert user that there was a win in the game\n\n  }, {\n    key: \"alertOfWin\",\n    value: function alertOfWin() {\n      //create an alert box that pops up signifying the user that won\n      console.log('There is a winner: Player ' + this.state.currentPlayer);\n    } //change the currentPlayer\n\n  }, {\n    key: \"changePlayer\",\n    value: function changePlayer() {\n      //if the currentPlayer is a 1\n      if (this.state.currentPlayer === 1) {\n        //then change it to 2\n        this.setState({\n          currentPlayer: 2\n        }); //if the currentPlayer is a 2\n      } else if (this.state.currentPlayer === 2) {\n        //then change it to a 1\n        this.setState({\n          currentPlayer: 1\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(_components_Board_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n        board: this.state.board,\n        handleClick: this.handleClickOnBoard\n      }));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  testForTie: testForTie,\n  testForWin: testForWin\n});\n\n//# sourceURL=webpack://challenge_4/./client/src/app.jsx?");

/***/ }),

/***/ "./client/src/components/Board.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Board.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Row_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Row.jsx */ \"./client/src/components/Row.jsx\");\n\n\nvar Board = function Board(props) {\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"div\", null, \"Hello from React\"), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    contents: props.board[0],\n    handleClick: props.handleClick\n  }), /*#__PURE__*/React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    contents: props.board[1],\n    handleClick: props.handleClick\n  }), /*#__PURE__*/React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    contents: props.board[2],\n    handleClick: props.handleClick\n  }), /*#__PURE__*/React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    contents: props.board[3],\n    handleClick: props.handleClick\n  }), /*#__PURE__*/React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    contents: props.board[4],\n    handleClick: props.handleClick\n  }), /*#__PURE__*/React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    contents: props.board[5],\n    handleClick: props.handleClick\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n//# sourceURL=webpack://challenge_4/./client/src/components/Board.jsx?");

/***/ }),

/***/ "./client/src/components/Circle.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Circle.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Circle = function Circle(props) {\n  //conditonal rendering of different color circle based on click\n  var player = props.element;\n  return /*#__PURE__*/React.createElement(\"div\", null, function () {\n    if (player === 0) {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        onClick: props.handleClick,\n        className: \"defaultCircle\"\n      });\n    } else if (player === 1) {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        onClick: props.handleClick,\n        className: \"redCircle\"\n      });\n    } else {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        onClick: props.handleClick,\n        className: \"yellowCircle\"\n      });\n    }\n  }()); // return (\n  //   <div onClick={props.handleClick} className='defaultCircle'>\n  //     </div>\n  // )\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Circle);\n\n//# sourceURL=webpack://challenge_4/./client/src/components/Circle.jsx?");

/***/ }),

/***/ "./client/src/components/Row.jsx":
/*!***************************************!*\
  !*** ./client/src/components/Row.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Space_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Space.jsx */ \"./client/src/components/Space.jsx\");\n\n\nvar Row = function Row(props) {\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    element: props.contents[0],\n    handleClick: function handleClick() {\n      return props.handleClick(0);\n    }\n  }), /*#__PURE__*/React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    element: props.contents[1],\n    handleClick: function handleClick() {\n      return props.handleClick(1);\n    }\n  }), /*#__PURE__*/React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    element: props.contents[2],\n    handleClick: function handleClick() {\n      return props.handleClick(2);\n    }\n  }), /*#__PURE__*/React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    element: props.contents[3],\n    handleClick: function handleClick() {\n      return props.handleClick(3);\n    }\n  }), /*#__PURE__*/React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    element: props.contents[4],\n    handleClick: function handleClick() {\n      return props.handleClick(4);\n    }\n  }), /*#__PURE__*/React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    element: props.contents[5],\n    handleClick: function handleClick() {\n      return props.handleClick(5);\n    }\n  }), /*#__PURE__*/React.createElement(_Space_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    element: props.contents[6],\n    handleClick: function handleClick() {\n      return props.handleClick(6);\n    }\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);\n\n//# sourceURL=webpack://challenge_4/./client/src/components/Row.jsx?");

/***/ }),

/***/ "./client/src/components/Space.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Space.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Circle_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Circle.jsx */ \"./client/src/components/Circle.jsx\");\n\n\nvar Space = function Space(props) {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    onClick: props.handleClick,\n    className: \"space\"\n  }, console.log('IN Space', props.element), /*#__PURE__*/React.createElement(_Circle_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    element: props.element\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Space);\n\n//# sourceURL=webpack://challenge_4/./client/src/components/Space.jsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./client/src/app.jsx");
/******/ 	
/******/ })()
;