/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/userInfoForm.js":
/*!*************************************!*\
  !*** ./src/scripts/userInfoForm.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userInfoForm": () => (/* binding */ userInfoForm)
/* harmony export */ });
// Steps :
    // 1) Add structure (html)
    // 2) Add Styling (css)
    // 3) Add Functionality
        // Validation

// Form
    // Input : Email
    // Input : Country
    // Input : Zip Code
    // Input : Password
    // Input : Password Confirmation
    // Button : Sumbition

const userInfoForm = () => {
    const state = {
        form: null,
        emailInput: null,
        countryInput: null,
        zipCodeInput: null,
        passwordInput: null,
        passwordConInput: null,
        btnSubmit: null,
    }

    // Render form and all of its contents
    const render = () => {
        // Form
        state.form = createElement('form', document.body);
            // Input : Email
            state.emailInput = createElement('input', state.form);
            // Input : Country
            state.countryInput = createElement('input', state.form);
            // Input : Zip Code
            state.zipCodeInput = createElement('input', state.form);
            // Input : Password
            state.passwordInput = createElement('input', state.form);
            // Input : Password Confirmation
            state.passwordConInput = createElement('input', state.form);
            // Button : Sumbition
            state.btnSubmit = createElement('button', state.form);

        update();
    }

    // Bind functionality (including validation) to form and child elements.
    const update = () => {
        
    }

    // Create html element from inputs
    // In > Out: String, Object, String, String
    // In > Out: type, parent, class, id
    const createElement = (type, parent, clss = null, id = null) => {
        const element = document.createElement(type);
        parent.appendChild(element);
        if (clss !== null) {
        if (Array.isArray(clss)) {
            for (let i = 0; i < clss.length; i++) {
            element.classList.add(clss[i]);
            }
        } else {
            element.classList.add(clss);
        }
        }
        if (id !== null) {
        element.setAttribute("id", id);
        }
        return element;
    };

    return Object.assign(
        state,
        {render}
    );
}

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_userInfoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/userInfoForm */ "./src/scripts/userInfoForm.js");


console.log((0,_scripts_userInfoForm__WEBPACK_IMPORTED_MODULE_0__.userInfoForm)());
let formObject = (0,_scripts_userInfoForm__WEBPACK_IMPORTED_MODULE_0__.userInfoForm)();

formObject.render();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlCQUFpQjtBQUM3QztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7VUMzRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vRDs7QUFFcEQsWUFBWSxtRUFBWTtBQUN4QixpQkFBaUIsbUVBQVk7O0FBRTdCLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlci1pbmZvLWZvcm0vLi9zcmMvc2NyaXB0cy91c2VySW5mb0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdXNlci1pbmZvLWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlci1pbmZvLWZvcm0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VzZXItaW5mby1mb3JtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdXNlci1pbmZvLWZvcm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2VyLWluZm8tZm9ybS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdGVwcyA6XG4gICAgLy8gMSkgQWRkIHN0cnVjdHVyZSAoaHRtbClcbiAgICAvLyAyKSBBZGQgU3R5bGluZyAoY3NzKVxuICAgIC8vIDMpIEFkZCBGdW5jdGlvbmFsaXR5XG4gICAgICAgIC8vIFZhbGlkYXRpb25cblxuLy8gRm9ybVxuICAgIC8vIElucHV0IDogRW1haWxcbiAgICAvLyBJbnB1dCA6IENvdW50cnlcbiAgICAvLyBJbnB1dCA6IFppcCBDb2RlXG4gICAgLy8gSW5wdXQgOiBQYXNzd29yZFxuICAgIC8vIElucHV0IDogUGFzc3dvcmQgQ29uZmlybWF0aW9uXG4gICAgLy8gQnV0dG9uIDogU3VtYml0aW9uXG5cbmV4cG9ydCBjb25zdCB1c2VySW5mb0Zvcm0gPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIGZvcm06IG51bGwsXG4gICAgICAgIGVtYWlsSW5wdXQ6IG51bGwsXG4gICAgICAgIGNvdW50cnlJbnB1dDogbnVsbCxcbiAgICAgICAgemlwQ29kZUlucHV0OiBudWxsLFxuICAgICAgICBwYXNzd29yZElucHV0OiBudWxsLFxuICAgICAgICBwYXNzd29yZENvbklucHV0OiBudWxsLFxuICAgICAgICBidG5TdWJtaXQ6IG51bGwsXG4gICAgfVxuXG4gICAgLy8gUmVuZGVyIGZvcm0gYW5kIGFsbCBvZiBpdHMgY29udGVudHNcbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIC8vIEZvcm1cbiAgICAgICAgc3RhdGUuZm9ybSA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCBkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgICAgIC8vIElucHV0IDogRW1haWxcbiAgICAgICAgICAgIHN0YXRlLmVtYWlsSW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHN0YXRlLmZvcm0pO1xuICAgICAgICAgICAgLy8gSW5wdXQgOiBDb3VudHJ5XG4gICAgICAgICAgICBzdGF0ZS5jb3VudHJ5SW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHN0YXRlLmZvcm0pO1xuICAgICAgICAgICAgLy8gSW5wdXQgOiBaaXAgQ29kZVxuICAgICAgICAgICAgc3RhdGUuemlwQ29kZUlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBzdGF0ZS5mb3JtKTtcbiAgICAgICAgICAgIC8vIElucHV0IDogUGFzc3dvcmRcbiAgICAgICAgICAgIHN0YXRlLnBhc3N3b3JkSW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHN0YXRlLmZvcm0pO1xuICAgICAgICAgICAgLy8gSW5wdXQgOiBQYXNzd29yZCBDb25maXJtYXRpb25cbiAgICAgICAgICAgIHN0YXRlLnBhc3N3b3JkQ29uSW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHN0YXRlLmZvcm0pO1xuICAgICAgICAgICAgLy8gQnV0dG9uIDogU3VtYml0aW9uXG4gICAgICAgICAgICBzdGF0ZS5idG5TdWJtaXQgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBzdGF0ZS5mb3JtKTtcblxuICAgICAgICB1cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBCaW5kIGZ1bmN0aW9uYWxpdHkgKGluY2x1ZGluZyB2YWxpZGF0aW9uKSB0byBmb3JtIGFuZCBjaGlsZCBlbGVtZW50cy5cbiAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBodG1sIGVsZW1lbnQgZnJvbSBpbnB1dHNcbiAgICAvLyBJbiA+IE91dDogU3RyaW5nLCBPYmplY3QsIFN0cmluZywgU3RyaW5nXG4gICAgLy8gSW4gPiBPdXQ6IHR5cGUsIHBhcmVudCwgY2xhc3MsIGlkXG4gICAgY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBwYXJlbnQsIGNsc3MgPSBudWxsLCBpZCA9IG51bGwpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgaWYgKGNsc3MgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2xzcykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xzcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsc3NbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsc3MpO1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkICE9PSBudWxsKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHtyZW5kZXJ9XG4gICAgKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7dXNlckluZm9Gb3JtfSBmcm9tICcuL3NjcmlwdHMvdXNlckluZm9Gb3JtJztcblxuY29uc29sZS5sb2codXNlckluZm9Gb3JtKCkpO1xubGV0IGZvcm1PYmplY3QgPSB1c2VySW5mb0Zvcm0oKTtcblxuZm9ybU9iamVjdC5yZW5kZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=