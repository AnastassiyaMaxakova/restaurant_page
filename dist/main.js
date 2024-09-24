/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContactSection() {
    const contactSection = document.createElement('div');
    contactSection.classList.add('contact-section');

    const title = document.createElement('h2');
    title.textContent = 'Contact Us';

    const customerTitle = document.createElement('p');
    customerTitle.textContent = 'If you have general questions or concerns about CoffeeShop, please contact our Customer Contact Center ';

    const customerSerLink = document.createElement('a');
    customerSerLink.href = '#';
    customerSerLink.innerHTML = 'customerservice.coffeeshop.shop';

    customerTitle.appendChild(customerSerLink);

    const mediaInfo = document.createElement('h3');
    mediaInfo.textContent = 'Media Contacts';

    const mediaEmail = document.createElement('p');
    mediaEmail.textContent = 'Email: press@coffeeshop.shop';

    const mediaPhone = document.createElement('p');
    mediaPhone.textContent = 'Phone: +1234 567 890';

    const addressInfo = document.createElement('h3');
    addressInfo.textContent = 'Our Address';

    const address = document.createElement('p');
    address.textContent = '1124 Pike St.';

    contactSection.appendChild(title);

    contactSection.appendChild(createH3Element('Customer Service'));
    contactSection.appendChild(customerTitle);

    contactSection.appendChild(createH3Element("Media Contacts"));
    contactSection.appendChild(createPElement("Email: press@coffeeshop.shop"));
    contactSection.appendChild(createPElement("Phone: +1234 567 890"));

    contactSection.appendChild(createH3Element("Our Address"));
    contactSection.appendChild(createPElement("1124 Pike St."));

}

function createH3Element(description){
    const h3Elem = document.createElement('h3');
    h3Elem.textContent = description;

    return h3Elem;
}

function createPElement(description){
    const pElem = document.createElement('p');
    pElem.textContent = description;

    return pElem;
}

function loadContactSection() {
    const content = document.getElementById("content");
    content.textContent = '';
    content.appendChild(createContactSection());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactSection);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHomeSection(){
    const homeSection = document.createElement("div");
    homeSection.classList.add("home-section");

    const aboutInfo = document.createElement("p");
    aboutInfo.textContent = "We serve a range of coffee made from the finest coffee beans, roasted right here in Cape Coral, and our baristas really know their beans.With their superior technical knowledge and a passion for making amazing coffee they will make you the perfect cup of coffee."

    const coffeeImg = document.createElement("img");
    coffeeImg.classList.add('home-img')
    coffeeImg.src = "../src/images/coffee-animated-gif-5.gif";
    coffeeImg.alt = "Coffee Cup"

    const orderInfo = document.createElement("p");
    orderInfo.textContent = "Visit us or ";

    const orderLink = document.createElement("a");
    orderLink.href = "#";
    orderLink.innerHTML = "Order Online";

    orderInfo.appendChild(orderLink);

    homeSection.appendChild(aboutInfo);
    homeSection.appendChild(coffeeImg);
    homeSection.appendChild(orderInfo);
    
    
    return homeSection;
}

function loadHomeSection() {
    const content = document.getElementById("content");
    content.textContent = '';
    content.appendChild(createHomeSection());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomeSection);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function createMenuItem(name,imageName){
    const menuItemBox = document.createElement("div");
    menuItemBox.classList.add('menu-item');

    const itemImage = document.createElement('img');
    itemImage.src = `../src/images/${imageName}.webp`;
    itemImage.alt = `${imageName}`;

    const itemName = document.createElement("p");
    itemName.textContent = name;

    menuItemBox.appendChild(itemImage);
    menuItemBox.appendChild(itemName);
    
    return menuItemBox;
}

function createMenuSection() {
    const menuSection = document.createElement("div");
    menuSection.classList.add('menu-section');

    menuSection.appendChild(createMenuItem('Americano','americano'));
    menuSection.appendChild(createMenuItem('Cappuccino','cappuccino'));
    menuSection.appendChild(createMenuItem('Espresso Con Panna','espresso_con_panna'));
    menuSection.appendChild(createMenuItem('Latte','latte'));
    menuSection.appendChild(createMenuItem('Lavender Latte','lavender_latte'));
    menuSection.appendChild(createMenuItem('Macchiato','macchiato'));

    return menuSection;
}

function loadMenuSection() {
    const content = document.getElementById("content");
    content.textContent = '';
    content.appendChild(createMenuSection());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuSection);

/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




function setActiveBtn(button){
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button)=> {
        if (button !== this) {
            button.classList.remove('active');
        }
    });
    button.classList.add('active');
}

function startWebpage(){
    setActiveBtn(document.querySelector('button'));
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startWebpage);

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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage.js */ "./src/webpage.js");


(0,_webpage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsa0JBQWtCOzs7Ozs7Ozs7Ozs7OztBQ2pFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNsQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DLHVCQUF1QixVQUFVOztBQUVqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q1U7QUFDQTtBQUNNOztBQUU5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksb0RBQWU7QUFDbkI7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7O1VDcEIzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ053Qzs7QUFFeEMsdURBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvd2VicGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdFNlY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXNlY3Rpb24nKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IFVzJztcblxuICAgIGNvbnN0IGN1c3RvbWVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY3VzdG9tZXJUaXRsZS50ZXh0Q29udGVudCA9ICdJZiB5b3UgaGF2ZSBnZW5lcmFsIHF1ZXN0aW9ucyBvciBjb25jZXJucyBhYm91dCBDb2ZmZWVTaG9wLCBwbGVhc2UgY29udGFjdCBvdXIgQ3VzdG9tZXIgQ29udGFjdCBDZW50ZXIgJztcblxuICAgIGNvbnN0IGN1c3RvbWVyU2VyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjdXN0b21lclNlckxpbmsuaHJlZiA9ICcjJztcbiAgICBjdXN0b21lclNlckxpbmsuaW5uZXJIVE1MID0gJ2N1c3RvbWVyc2VydmljZS5jb2ZmZWVzaG9wLnNob3AnO1xuXG4gICAgY3VzdG9tZXJUaXRsZS5hcHBlbmRDaGlsZChjdXN0b21lclNlckxpbmspO1xuXG4gICAgY29uc3QgbWVkaWFJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtZWRpYUluZm8udGV4dENvbnRlbnQgPSAnTWVkaWEgQ29udGFjdHMnO1xuXG4gICAgY29uc3QgbWVkaWFFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZWRpYUVtYWlsLnRleHRDb250ZW50ID0gJ0VtYWlsOiBwcmVzc0Bjb2ZmZWVzaG9wLnNob3AnO1xuXG4gICAgY29uc3QgbWVkaWFQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZWRpYVBob25lLnRleHRDb250ZW50ID0gJ1Bob25lOiArMTIzNCA1NjcgODkwJztcblxuICAgIGNvbnN0IGFkZHJlc3NJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBhZGRyZXNzSW5mby50ZXh0Q29udGVudCA9ICdPdXIgQWRkcmVzcyc7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnMTEyNCBQaWtlIFN0Lic7XG5cbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVIM0VsZW1lbnQoJ0N1c3RvbWVyIFNlcnZpY2UnKSk7XG4gICAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY3VzdG9tZXJUaXRsZSk7XG5cbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVIM0VsZW1lbnQoXCJNZWRpYSBDb250YWN0c1wiKSk7XG4gICAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlUEVsZW1lbnQoXCJFbWFpbDogcHJlc3NAY29mZmVlc2hvcC5zaG9wXCIpKTtcbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVQRWxlbWVudChcIlBob25lOiArMTIzNCA1NjcgODkwXCIpKTtcblxuICAgIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZUgzRWxlbWVudChcIk91ciBBZGRyZXNzXCIpKTtcbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVQRWxlbWVudChcIjExMjQgUGlrZSBTdC5cIikpO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUgzRWxlbWVudChkZXNjcmlwdGlvbil7XG4gICAgY29uc3QgaDNFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoM0VsZW0udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICAgIHJldHVybiBoM0VsZW07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBFbGVtZW50KGRlc2NyaXB0aW9uKXtcbiAgICBjb25zdCBwRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwRWxlbS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gICAgcmV0dXJuIHBFbGVtO1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdFNlY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0U2VjdGlvbigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3RTZWN0aW9uOyIsImZ1bmN0aW9uIGNyZWF0ZUhvbWVTZWN0aW9uKCl7XG4gICAgY29uc3QgaG9tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJob21lLXNlY3Rpb25cIik7XG5cbiAgICBjb25zdCBhYm91dEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhYm91dEluZm8udGV4dENvbnRlbnQgPSBcIldlIHNlcnZlIGEgcmFuZ2Ugb2YgY29mZmVlIG1hZGUgZnJvbSB0aGUgZmluZXN0IGNvZmZlZSBiZWFucywgcm9hc3RlZCByaWdodCBoZXJlIGluIENhcGUgQ29yYWwsIGFuZCBvdXIgYmFyaXN0YXMgcmVhbGx5IGtub3cgdGhlaXIgYmVhbnMuV2l0aCB0aGVpciBzdXBlcmlvciB0ZWNobmljYWwga25vd2xlZGdlIGFuZCBhIHBhc3Npb24gZm9yIG1ha2luZyBhbWF6aW5nIGNvZmZlZSB0aGV5IHdpbGwgbWFrZSB5b3UgdGhlIHBlcmZlY3QgY3VwIG9mIGNvZmZlZS5cIlxuXG4gICAgY29uc3QgY29mZmVlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb2ZmZWVJbWcuY2xhc3NMaXN0LmFkZCgnaG9tZS1pbWcnKVxuICAgIGNvZmZlZUltZy5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvY29mZmVlLWFuaW1hdGVkLWdpZi01LmdpZlwiO1xuICAgIGNvZmZlZUltZy5hbHQgPSBcIkNvZmZlZSBDdXBcIlxuXG4gICAgY29uc3Qgb3JkZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgb3JkZXJJbmZvLnRleHRDb250ZW50ID0gXCJWaXNpdCB1cyBvciBcIjtcblxuICAgIGNvbnN0IG9yZGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIG9yZGVyTGluay5ocmVmID0gXCIjXCI7XG4gICAgb3JkZXJMaW5rLmlubmVySFRNTCA9IFwiT3JkZXIgT25saW5lXCI7XG5cbiAgICBvcmRlckluZm8uYXBwZW5kQ2hpbGQob3JkZXJMaW5rKTtcblxuICAgIGhvbWVTZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0SW5mbyk7XG4gICAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQoY29mZmVlSW1nKTtcbiAgICBob21lU2VjdGlvbi5hcHBlbmRDaGlsZChvcmRlckluZm8pO1xuICAgIFxuICAgIFxuICAgIHJldHVybiBob21lU2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gbG9hZEhvbWVTZWN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZVNlY3Rpb24oKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lU2VjdGlvbjsiLCJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsaW1hZ2VOYW1lKXtcbiAgICBjb25zdCBtZW51SXRlbUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW1Cb3guY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICBjb25zdCBpdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpdGVtSW1hZ2Uuc3JjID0gYC4uL3NyYy9pbWFnZXMvJHtpbWFnZU5hbWV9LndlYnBgO1xuICAgIGl0ZW1JbWFnZS5hbHQgPSBgJHtpbWFnZU5hbWV9YDtcblxuICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gICAgbWVudUl0ZW1Cb3guYXBwZW5kQ2hpbGQoaXRlbUltYWdlKTtcbiAgICBtZW51SXRlbUJveC5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgXG4gICAgcmV0dXJuIG1lbnVJdGVtQm94O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51U2VjdGlvbigpIHtcbiAgICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9uJyk7XG5cbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnQW1lcmljYW5vJywnYW1lcmljYW5vJykpO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdDYXBwdWNjaW5vJywnY2FwcHVjY2lubycpKTtcbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnRXNwcmVzc28gQ29uIFBhbm5hJywnZXNwcmVzc29fY29uX3Bhbm5hJykpO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdMYXR0ZScsJ2xhdHRlJykpO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdMYXZlbmRlciBMYXR0ZScsJ2xhdmVuZGVyX2xhdHRlJykpO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdNYWNjaGlhdG8nLCdtYWNjaGlhdG8nKSk7XG5cbiAgICByZXR1cm4gbWVudVNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51U2VjdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVTZWN0aW9uKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudVNlY3Rpb247IiwiaW1wb3J0IGxvYWRIb21lU2VjdGlvbiBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgbG9hZE1lbnVTZWN0aW9uIGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBsb2FkQ29udGFjdFNlY3Rpb24gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuXG5mdW5jdGlvbiBzZXRBY3RpdmVCdG4oYnV0dG9uKXtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbik9PiB7XG4gICAgICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRXZWJwYWdlKCl7XG4gICAgc2V0QWN0aXZlQnRuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpKTtcbiAgICBsb2FkSG9tZVNlY3Rpb24oKVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdGFydFdlYnBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc3RhcnRXZWJwYWdlIGZyb20gXCIuL3dlYnBhZ2UuanNcIjtcblxuc3RhcnRXZWJwYWdlKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==