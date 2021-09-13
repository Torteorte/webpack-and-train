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

eval("const burgerNav = document.querySelector('.burger-nav');\r\nconst navList = document.querySelector('.side-nav');\r\n\r\nfunction toggleBurger() {\r\n   burgerNav.classList.toggle('open');\r\n   navList.classList.toggle(\"hidden-nav\");\r\n}\r\n\r\nburgerNav.addEventListener('click', function (e) {\r\n   e.preventDefault();\r\n   toggleBurger();\r\n})\r\n\r\ndocument.addEventListener('click', function (event) {\r\n   const target = event.target;\r\n   const its_menu = target === burgerNav || burgerNav.contains(target);\r\n   const its_btnMenu = target === navList;\r\n   const menu_is_active = burgerNav.classList.contains('open');\r\n\r\n   if (!its_menu && !its_btnMenu && menu_is_active) {\r\n      toggleBurger(event);\r\n   }\r\n})\r\n\r\nconst buttonsMenus = document.querySelectorAll('.info-button');\r\nconst searhLabel = document.querySelector('.button-for-search').querySelector('label');\r\nsearhLabel.onclick = function () {\r\n   search.classList.toggle('open')\r\n}\r\n\r\nfor (const button of buttonsMenus) {\r\n   const infoContainer = button.closest('li').querySelector('.info-container')\r\n\r\n   button.addEventListener('click', toggleMenu)\r\n\r\n   function toggleMenu() {\r\n      button.classList.toggle('active-drop')\r\n      if (button.firstChild === searhLabel) { return }\r\n      else { infoContainer.classList.toggle('open') }\r\n\r\n   }\r\n\r\n   document.addEventListener('click', function (event) {\r\n      const target = event.target\r\n      const its_menu = target === button || button.contains(target)\r\n      const its_btnMenu = target.closest(\".info-container\") === infoContainer\r\n      const menu_is_active = button.classList.contains('active-drop')\r\n\r\n      if (!its_menu && !its_btnMenu && menu_is_active) {\r\n         toggleMenu()\r\n      }\r\n   })\r\n}\r\n\r\nconst formSearch = document.querySelector('.header-form');\r\nconst inputSearch = formSearch.querySelector('.header-search-input');\r\nconst visibleDiv = formSearch.querySelector('.search-container');\r\n\r\nformSearch.addEventListener('focus', function () {\r\n   visibleDiv.classList.add('visible')\r\n}, true)\r\n\r\ndocument.addEventListener('click', function (event) {\r\n   if (event.target.closest(\".search-container\") === visibleDiv || event.target === inputSearch) return\r\n   visibleDiv.classList.remove('visible')\r\n})\n\n//# sourceURL=webpack://newweb/./src/dropDown.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _dropDown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropDown.js */ \"./src/dropDown.js\");\n/* harmony import */ var _dropDown_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dropDown_js__WEBPACK_IMPORTED_MODULE_1__);\n__webpack_require__(/*! normalize.css/normalize.css */ \"./node_modules/normalize.css/normalize.css\");\r\n\r\n\r\n\r\n\r\nconst userAlexLogin = \"567@mail.deu\";\r\nconst userAlexPassword = \"456\";\r\n\r\nconst form = document.querySelector('#login-form');\r\nconst email = document.querySelector('#login-email');\r\nconst password = document.querySelector('#login-password');\r\nconst invalidTextEmail = document.querySelector('.validate-email');\r\nconst invalidTextPassword = document.querySelector('.validate-password');\r\n\r\nif (form) {\r\n   form.addEventListener('submit', function (event) {\r\n      event.preventDefault();\r\n      invalidTextEmail.textContent = '';\r\n      invalidTextPassword.textContent = '';\r\n\r\n      invalidLogin(event);\r\n\r\n      if (!email.validity.valid) {\r\n         showError();\r\n      }\r\n      // document.location.href = './indexUser.html'\r\n   });\r\n}\r\n\r\nfunction showError() {\r\n   if (email.validity.valueMissing) {\r\n      invalidTextEmail.textContent = 'Введите email адрес';\r\n   } else if (email.validity.typeMismatch) {\r\n      invalidTextEmail.textContent = 'Это поле не является email адресом';\r\n   }\r\n}\r\n\r\nfunction invalidLogin(event) {\r\n   const emailValue = email.value;\r\n   const passwordValue = password.value;\r\n\r\n   email.classList.remove(\"invalid\");\r\n   password.classList.remove(\"invalid\");\r\n\r\n   if (emailValue !== userAlexLogin) {\r\n      invalidTextEmail.textContent = 'Неверный email';\r\n      email.classList.add(\"invalid\");\r\n   } else if (passwordValue !== userAlexPassword) {\r\n      invalidTextPassword.textContent = 'Неверный пароль';\r\n      password.classList.add(\"invalid\");\r\n   } else {\r\n      document.location.href = './indexUser.html';\r\n   }\r\n}\r\n\r\nconst achievementsTime = document.querySelector(\"#achievements-time\")\r\n\r\nlet dateNow = new Date()\r\nachievementsTime.textContent = `Время ${formatDate(dateNow)}`\r\n\r\nfunction formatDate(date) {\r\n\r\n   let hours = date.getHours();\r\n   if (hours < 10) hours = '0' + hours;\r\n\r\n   let minutes = date.getMinutes();\r\n   if (minutes < 10) minutes = '0' + minutes;\r\n\r\n   return `${hours}:${minutes}`\r\n}\n\n//# sourceURL=webpack://newweb/./src/index.js?");

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