/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://newweb/./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://newweb/./src/scss/app.scss?");

/***/ }),

/***/ "./src/dropDown.js":
/*!*************************!*\
  !*** ./src/dropDown.js ***!
  \*************************/
/***/ (() => {

eval("const burgerNav = document.querySelector('.burger-nav');\r\nconst navList = document.querySelector('.side-nav');\r\n\r\nfunction toggleBurger() {\r\n   burgerNav.classList.toggle('open');\r\n   navList.classList.toggle(\"hidden-nav\");\r\n}\r\n\r\nburgerNav.addEventListener('click', function (e) {\r\n   e.preventDefault();\r\n   toggleBurger();\r\n})\r\n\r\ndocument.addEventListener('click', function (event) {\r\n   const target = event.target;\r\n   const its_menu = target === burgerNav || burgerNav.contains(target);\r\n   const its_btnMenu = target === navList;\r\n   const menu_is_active = burgerNav.classList.contains('open');\r\n\r\n   if (!its_menu && !its_btnMenu && menu_is_active) {\r\n      toggleBurger(event);\r\n   }\r\n})\r\n\r\n\r\n\r\nconst buttonsMenus = document.querySelectorAll('.info-button');\r\n\r\nfor (const button of buttonsMenus) {\r\n\r\n   const infoContainer = button.closest('li').querySelector('.info-container')\r\n\r\n   button.addEventListener('click', toggleMenu)\r\n\r\n   function toggleMenu() {\r\n      button.classList.toggle('active-drop')\r\n      infoContainer.classList.toggle('open')\r\n   }\r\n\r\n   document.addEventListener('click', function (event) {\r\n      const target = event.target\r\n      const its_menu = target === button || button.contains(target)\r\n      const its_btnMenu = target.closest(\".info-container\") === infoContainer\r\n      const menu_is_active = button.classList.contains('active-drop')\r\n\r\n      if (!its_menu && !its_btnMenu && menu_is_active) {\r\n         toggleMenu()\r\n      }\r\n   })\r\n}\n\n//# sourceURL=webpack://newweb/./src/dropDown.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _dropDown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropDown.js */ \"./src/dropDown.js\");\n/* harmony import */ var _dropDown_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dropDown_js__WEBPACK_IMPORTED_MODULE_1__);\n__webpack_require__(/*! normalize.css/normalize.css */ \"./node_modules/normalize.css/normalize.css\");\r\n\r\n\r\n\n\n//# sourceURL=webpack://newweb/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;