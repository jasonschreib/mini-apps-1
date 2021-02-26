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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Board_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Board.jsx */ \"./client/src/components/Board.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  var _super = _createSuper(App);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      //state of the game board - row5 refers to the top and row0 refers to the bottom\n      board: [{\n        row0: [0, 0, 0, 0, 0, 0, 0]\n      }, {\n        row1: [0, 0, 0, 0, 0, 0, 0]\n      }, {\n        row2: [0, 0, 0, 0, 0, 0, 0]\n      }, {\n        row3: [0, 0, 0, 0, 0, 0, 0]\n      }, {\n        row4: [0, 0, 0, 0, 0, 0, 0]\n      }, {\n        row5: [0, 0, 0, 0, 0, 0, 0]\n      }],\n      current: 1\n    };\n    _this.handleClickOnBoard = _this.handleClickOnBoard.bind(_assertThisInitialized(_this));\n    return _this;\n  } //function to handle clicks on the board\n\n\n  _createClass(App, [{\n    key: \"handleClickOnBoard\",\n    value: function handleClickOnBoard(col) {\n      console.log('Clicked on column', col);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(_components_Board_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n        board: this.state.board,\n        handleClick: this.handleClickOnBoard\n      }));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));\n\n//# sourceURL=webpack://challenge_4/./client/src/app.jsx?");

/***/ }),

/***/ "./client/src/components/Board.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Board.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Row_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Row.jsx */ \"./client/src/components/Row.jsx\");\n\n\nvar Board = function Board(props) {\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"div\", null, \"Hello from React\"), /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    contents: props.board[0].row0,\n    handleClick: props.handleClick\n  }), /*#__PURE__*/React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    contents: props.board[1].row1,\n    handleClick: props.handleClick\n  }), /*#__PURE__*/React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    contents: props.board[2].row2,\n    handleClick: props.handleClick\n  }), /*#__PURE__*/React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    contents: props.board[3].row3,\n    handleClick: props.handleClick\n  }), /*#__PURE__*/React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    contents: props.board[4].row4,\n    handleClick: props.handleClick\n  }), /*#__PURE__*/React.createElement(_Row_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    contents: props.board[5].row5,\n    handleClick: props.handleClick\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n//# sourceURL=webpack://challenge_4/./client/src/components/Board.jsx?");

/***/ }),

/***/ "./client/src/components/Circle.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Circle.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Circle = function Circle(props) {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    onClick: props.handleClick,\n    className: \"space\"\n  }, console.log('IN CIRCLE', props), props.element);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Circle);\n\n//# sourceURL=webpack://challenge_4/./client/src/components/Circle.jsx?");

/***/ }),

/***/ "./client/src/components/Row.jsx":
/*!***************************************!*\
  !*** ./client/src/components/Row.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Circle_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Circle.jsx */ \"./client/src/components/Circle.jsx\");\n\n\nvar Row = function Row(props) {\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(_Circle_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    element: props.contents[0],\n    handleClick: function handleClick() {\n      return props.handleClick(0);\n    }\n  }), /*#__PURE__*/React.createElement(_Circle_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    element: props.contents[1]\n  }), /*#__PURE__*/React.createElement(_Circle_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    element: props.contents[2]\n  }), /*#__PURE__*/React.createElement(_Circle_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    element: props.contents[3]\n  }), /*#__PURE__*/React.createElement(_Circle_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    element: props.contents[4]\n  }), /*#__PURE__*/React.createElement(_Circle_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    element: props.contents[5]\n  }), /*#__PURE__*/React.createElement(_Circle_jsx__WEBPACK_IMPORTED_MODULE_0__.default, {\n    element: props.contents[6]\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);\n\n//# sourceURL=webpack://challenge_4/./client/src/components/Row.jsx?");

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