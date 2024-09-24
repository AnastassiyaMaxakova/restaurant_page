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

    contactSection.appendChild(title);

    contactSection.appendChild(createH3Element('Customer Service'));
    contactSection.appendChild(customerTitle);

    contactSection.appendChild(createH3Element("Media Contacts"));
    contactSection.appendChild(createPElement("Email: press@coffeeshop.shop"));
    contactSection.appendChild(createPElement("Phone: +1234 567 890"));

    contactSection.appendChild(createH3Element("Our Address"));
    contactSection.appendChild(createPElement("1124 Pike St."));

    return contactSection;
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
    aboutInfo.textContent = "We serve a range of coffee made from the finest coffee beans, roasted right here, and our baristas really know their beans.With their superior technical knowledge and a passion for making amazing coffee they will make you the perfect cup of coffee."

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




const buttons = document.querySelectorAll('button');

function setActiveBtn(button){
    buttons.forEach((button)=> {
        if (button !== this) {
            button.classList.remove('active');
        }
    });
    button.classList.add('active');
}

function a(button){
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
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    
    buttons.forEach((button)=>{
        button.addEventListener("click", (e) => {
            if (e.target.id === "homeBtn") {

                (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
            } 
            else if (e.target.id === "menuBtn") {
                (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
            } 
            else if (e.target.id === "contactBtn") {
                (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
            }
        });
});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startWebpage);

/*
homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeBtn);
    loadHomeSection();
});

menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeBtn);
    loadMenuSection();
});

contactBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveButton(homeBtn);
    loadContactSection();
});
*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7QUNuRGpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDbEM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsVUFBVTtBQUMvQyx1QkFBdUIsVUFBVTs7QUFFakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENVO0FBQ0E7QUFDTTs7QUFFOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLG9EQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixvREFBZTtBQUMvQjtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFlO0FBQy9CO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQWtCO0FBQ2xDO0FBQ0EsU0FBUztBQUNULENBQUM7QUFDRDs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7O1VDakVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTndDOztBQUV4Qyx1REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy93ZWJwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVDb250YWN0U2VjdGlvbigpIHtcbiAgICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Qtc2VjdGlvbicpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xuXG4gICAgY29uc3QgY3VzdG9tZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjdXN0b21lclRpdGxlLnRleHRDb250ZW50ID0gJ0lmIHlvdSBoYXZlIGdlbmVyYWwgcXVlc3Rpb25zIG9yIGNvbmNlcm5zIGFib3V0IENvZmZlZVNob3AsIHBsZWFzZSBjb250YWN0IG91ciBDdXN0b21lciBDb250YWN0IENlbnRlciAnO1xuXG4gICAgY29uc3QgY3VzdG9tZXJTZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGN1c3RvbWVyU2VyTGluay5ocmVmID0gJyMnO1xuICAgIGN1c3RvbWVyU2VyTGluay5pbm5lckhUTUwgPSAnY3VzdG9tZXJzZXJ2aWNlLmNvZmZlZXNob3Auc2hvcCc7XG5cbiAgICBjdXN0b21lclRpdGxlLmFwcGVuZENoaWxkKGN1c3RvbWVyU2VyTGluayk7XG5cbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVIM0VsZW1lbnQoJ0N1c3RvbWVyIFNlcnZpY2UnKSk7XG4gICAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY3VzdG9tZXJUaXRsZSk7XG5cbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVIM0VsZW1lbnQoXCJNZWRpYSBDb250YWN0c1wiKSk7XG4gICAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlUEVsZW1lbnQoXCJFbWFpbDogcHJlc3NAY29mZmVlc2hvcC5zaG9wXCIpKTtcbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVQRWxlbWVudChcIlBob25lOiArMTIzNCA1NjcgODkwXCIpKTtcblxuICAgIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZUgzRWxlbWVudChcIk91ciBBZGRyZXNzXCIpKTtcbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVQRWxlbWVudChcIjExMjQgUGlrZSBTdC5cIikpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RTZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIM0VsZW1lbnQoZGVzY3JpcHRpb24pe1xuICAgIGNvbnN0IGgzRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDNFbGVtLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgICByZXR1cm4gaDNFbGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQRWxlbWVudChkZXNjcmlwdGlvbil7XG4gICAgY29uc3QgcEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcEVsZW0udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICAgIHJldHVybiBwRWxlbTtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3RTZWN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdFNlY3Rpb24oKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0U2VjdGlvbjsiLCJmdW5jdGlvbiBjcmVhdGVIb21lU2VjdGlvbigpe1xuICAgIGNvbnN0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1zZWN0aW9uXCIpO1xuXG4gICAgY29uc3QgYWJvdXRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWJvdXRJbmZvLnRleHRDb250ZW50ID0gXCJXZSBzZXJ2ZSBhIHJhbmdlIG9mIGNvZmZlZSBtYWRlIGZyb20gdGhlIGZpbmVzdCBjb2ZmZWUgYmVhbnMsIHJvYXN0ZWQgcmlnaHQgaGVyZSwgYW5kIG91ciBiYXJpc3RhcyByZWFsbHkga25vdyB0aGVpciBiZWFucy5XaXRoIHRoZWlyIHN1cGVyaW9yIHRlY2huaWNhbCBrbm93bGVkZ2UgYW5kIGEgcGFzc2lvbiBmb3IgbWFraW5nIGFtYXppbmcgY29mZmVlIHRoZXkgd2lsbCBtYWtlIHlvdSB0aGUgcGVyZmVjdCBjdXAgb2YgY29mZmVlLlwiXG5cbiAgICBjb25zdCBjb2ZmZWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvZmZlZUltZy5jbGFzc0xpc3QuYWRkKCdob21lLWltZycpXG4gICAgY29mZmVlSW1nLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9jb2ZmZWUtYW5pbWF0ZWQtZ2lmLTUuZ2lmXCI7XG4gICAgY29mZmVlSW1nLmFsdCA9IFwiQ29mZmVlIEN1cFwiXG5cbiAgICBjb25zdCBvcmRlckluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBvcmRlckluZm8udGV4dENvbnRlbnQgPSBcIlZpc2l0IHVzIG9yIFwiO1xuXG4gICAgY29uc3Qgb3JkZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgb3JkZXJMaW5rLmhyZWYgPSBcIiNcIjtcbiAgICBvcmRlckxpbmsuaW5uZXJIVE1MID0gXCJPcmRlciBPbmxpbmVcIjtcblxuICAgIG9yZGVySW5mby5hcHBlbmRDaGlsZChvcmRlckxpbmspO1xuXG4gICAgaG9tZVNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXRJbmZvKTtcbiAgICBob21lU2VjdGlvbi5hcHBlbmRDaGlsZChjb2ZmZWVJbWcpO1xuICAgIGhvbWVTZWN0aW9uLmFwcGVuZENoaWxkKG9yZGVySW5mbyk7XG4gICAgXG4gICAgXG4gICAgcmV0dXJuIGhvbWVTZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBsb2FkSG9tZVNlY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lU2VjdGlvbigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWVTZWN0aW9uOyIsIlxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSxpbWFnZU5hbWUpe1xuICAgIGNvbnN0IG1lbnVJdGVtQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51SXRlbUJveC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcblxuICAgIGNvbnN0IGl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGl0ZW1JbWFnZS5zcmMgPSBgLi4vc3JjL2ltYWdlcy8ke2ltYWdlTmFtZX0ud2VicGA7XG4gICAgaXRlbUltYWdlLmFsdCA9IGAke2ltYWdlTmFtZX1gO1xuXG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBtZW51SXRlbUJveC5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xuICAgIG1lbnVJdGVtQm94LmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICBcbiAgICByZXR1cm4gbWVudUl0ZW1Cb3g7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVTZWN0aW9uKCkge1xuICAgIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKTtcblxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdBbWVyaWNhbm8nLCdhbWVyaWNhbm8nKSk7XG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0NhcHB1Y2Npbm8nLCdjYXBwdWNjaW5vJykpO1xuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdFc3ByZXNzbyBDb24gUGFubmEnLCdlc3ByZXNzb19jb25fcGFubmEnKSk7XG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0xhdHRlJywnbGF0dGUnKSk7XG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0xhdmVuZGVyIExhdHRlJywnbGF2ZW5kZXJfbGF0dGUnKSk7XG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ01hY2NoaWF0bycsJ21hY2NoaWF0bycpKTtcblxuICAgIHJldHVybiBtZW51U2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnVTZWN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudVNlY3Rpb24oKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51U2VjdGlvbjsiLCJpbXBvcnQgbG9hZEhvbWVTZWN0aW9uIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBsb2FkTWVudVNlY3Rpb24gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGxvYWRDb250YWN0U2VjdGlvbiBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcblxuZnVuY3Rpb24gc2V0QWN0aXZlQnRuKGJ1dHRvbil7XG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pPT4ge1xuICAgICAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGEoYnV0dG9uKXtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pPT4ge1xuICAgICAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0V2VicGFnZSgpe1xuICAgIHNldEFjdGl2ZUJ0bihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKSk7XG4gICAgbG9hZEhvbWVTZWN0aW9uKCk7XG4gICAgXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pPT57XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJob21lQnRuXCIpIHtcblxuICAgICAgICAgICAgICAgIGxvYWRIb21lU2VjdGlvbigpXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwibWVudUJ0blwiKSB7XG4gICAgICAgICAgICAgICAgbG9hZE1lbnVTZWN0aW9uKCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwiY29udGFjdEJ0blwiKSB7XG4gICAgICAgICAgICAgICAgbG9hZENvbnRhY3RTZWN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xufSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXJ0V2VicGFnZTtcblxuLypcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihob21lQnRuKTtcbiAgICBsb2FkSG9tZVNlY3Rpb24oKTtcbn0pO1xuXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ0bik7XG4gICAgbG9hZE1lbnVTZWN0aW9uKCk7XG59KTtcblxuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgc2V0QWN0aXZlQnV0dG9uKGhvbWVCdG4pO1xuICAgIGxvYWRDb250YWN0U2VjdGlvbigpO1xufSk7XG4qLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHN0YXJ0V2VicGFnZSBmcm9tIFwiLi93ZWJwYWdlLmpzXCI7XG5cbnN0YXJ0V2VicGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9