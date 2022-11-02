/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 0px 100px;\n}\n\n/* Error Container */\n.error-container {\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n    justify-content: center;\n    row-gap: 8px;\n    background-color: red;\n}\n\n.error-container span {\n    /* border: 3px red solid; */\n    padding: 4px 8px;\n    /* border-radius: 5px; */\n    /* background-color: white; */\n    color: white;\n    font-weight: bold;\n}\n\n/* Form */\n.form-container form {\n    display: flex;\n    flex-direction: column;\n    width: 350px;\n    row-gap: 10px;\n}\n\n.form-container form div {\n    display: flex;\n    flex-direction: column;\n}\n\n.form-container form input {\n    border: 3px solid;\n}\n\n.form-container form input:focus {\n    border-color: black !important;\n}\n\n.form-container form input.valid {\n    border-color: green;\n}\n\n.form-container form input.invalid {\n    border-color: red;\n}", "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA,oBAAoB;AACpB;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,uBAAuB;IACvB,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,2BAA2B;IAC3B,gBAAgB;IAChB,wBAAwB;IACxB,6BAA6B;IAC7B,YAAY;IACZ,iBAAiB;AACrB;;AAEA,SAAS;AACT;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[".form-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 0px 100px;\n}\n\n/* Error Container */\n.error-container {\n    display: flex;\n    flex-direction: column;\n    align-items: left;\n    justify-content: center;\n    row-gap: 8px;\n    background-color: red;\n}\n\n.error-container span {\n    /* border: 3px red solid; */\n    padding: 4px 8px;\n    /* border-radius: 5px; */\n    /* background-color: white; */\n    color: white;\n    font-weight: bold;\n}\n\n/* Form */\n.form-container form {\n    display: flex;\n    flex-direction: column;\n    width: 350px;\n    row-gap: 10px;\n}\n\n.form-container form div {\n    display: flex;\n    flex-direction: column;\n}\n\n.form-container form input {\n    border: 3px solid;\n}\n\n.form-container form input:focus {\n    border-color: black !important;\n}\n\n.form-container form input.valid {\n    border-color: green;\n}\n\n.form-container form input.invalid {\n    border-color: red;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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
        formContainer: null,
        errorContainer: null,
        formElement: null,
        emailElement: null,
        countryElement: null,
        zipCodeElement: null,
        passwordElement: null,
        passwordConElement: null,
        btnSubmitElement: null,
    }

    // Render form and all of its contents
    const render = () => {
        // formContainer
        state.formContainer = createElement('div', document.body, 'form-container');
            // errorContainer : Div
            state.errorContainer = createElement('div', state.formContainer, 'error-container');
            // Form
            state.formElement = createElement('form', state.formContainer);
                // Input : Email
                state.emailElement = renderEmailElement(state.formElement);
                // Input : Country
                state.countryElement = renderCountryElement(state.formElement);
                // Input : Zip Code
                state.zipCodeElement = renderZipCodeElement(state.formElement);
                // Input : Password
                state.passwordElement = renderPasswordElement(state.formElement);
                // Input : Password Confirmation
                state.passwordConElement = renderPasswordConElement(state.formElement);
                // Button : Sumbition
                state.btnSubmitElement = renderBtnSubmitElement(state.formElement);

        update();
    }

    // In > Out : parent > Div
    // render emailDiv, containing label and input to body. 
    // Then return emailDiv
    const renderEmailElement = (parent) => {
        // emailElement
        const emailElement = createElement('div', parent, 'email-element');
            // Label 
            const emailLabel = createElement('label', emailElement);
            emailLabel.textContent = "Email:";

            // Input
            const emailInput = createElement('input', emailElement, null, 'email');
            emailInput.classList.add('invalid');
            emailInput.setAttribute('type', 'email');

        return emailElement;
    }


    // In > Out : > Div
    // render emailDiv, containing label and input to body. 
    // Then return emailDiv
    const renderCountryElement = (parent) => {
        // Element
        const countryElement = createElement('div', parent, 'country-element');
            // Label 
            const countryLabel = createElement('label', countryElement);
            countryLabel.textContent = "Country:";

            // Input
            const countryInput = createElement('input', countryElement, null, 'country');
            countryInput.classList.add('invalid');
            countryInput.setAttribute('min', '1');

        return countryElement;
    }

    // In > Out : > Div
    // render emailDiv, containing label and input to body. 
    // Then return emailDiv
    const renderZipCodeElement = (parent) => {
        // Element
        const zipCodeElement = createElement('div', parent, 'zip-code-element');
            // Label 
            const zipCodeLabel = createElement('label', zipCodeElement);
            zipCodeLabel.textContent = "Zip Code:";

            // Input
            const zipCodeInput = createElement('input', zipCodeElement, null, 'zip-code');
            zipCodeInput.classList.add('invalid');

        return zipCodeElement;
    }

    // In > Out : > Div
    // render emailDiv, containing label and input to body. 
    // Then return emailDiv
    const renderPasswordElement = (parent) => {
        // Element
        const passwordElement = createElement('div', parent, 'zip-code-element');
            // Label 
            const passwordLabel = createElement('label', passwordElement);
            passwordLabel.textContent = "Password:";

            // Input
            const passwordInput = createElement('input', passwordElement, null, 'password');
            passwordInput.classList.add('invalid');
            passwordInput.setAttribute('type', 'password');

        return passwordElement;
    }

    // In > Out : > Div
    // render emailDiv, containing label and input to body. 
    // Then return emailDiv
    const renderPasswordConElement = (parent) => {
        // Element
        const passwordConElement = createElement('div', parent, 'zip-code-element');
            // Label 
            const passwordConLabel = createElement('label', passwordConElement);
            passwordConLabel.textContent = "Password Confirmation:";

            // Input
            const passwordConInput = createElement('input', passwordConElement, null, 'password-confirm');
            passwordConInput.classList.add('invalid');
            passwordConInput.setAttribute('type', 'password');

        return passwordConElement;
    }

    // In > Out : > Div
    // render emailDiv, containing label and input to body. 
    // Then return emailDiv
    const renderBtnSubmitElement = (parent) => {
        const btnSubmit = createElement('button', parent);
        btnSubmit.textContent = "Submit";

        return btnSubmit;
    }

    // Bind functionality (including validation) to form and child elements.
    const update = () => {
        // Get form
        const formElement = document.querySelector('form');

        // List of form inputs
        const inputList = formElement.querySelectorAll('input');

        // Get Email Input
        const emailInput = inputList[0];

        // Get Country Input
        const countryInput = inputList[1];

        // Get Zip Code Input
        const zipCodeInput = inputList[2];

        // Get Password Input
        const passwordInput = inputList[3];

        // Get Password Confirmation Input
        const passwordConInput = inputList[4];

        // Get Submit btn
        const submitBtn = formElement.querySelector('button');

        // Error text Array
        // let errorArray = [];

        // Email Input Validity
        emailInput.addEventListener('keydown', () => {
            if (emailInput.checkValidity()) {
                emailInput.classList.remove('invalid');
                emailInput.classList.add('valid');
            } 
            else {
                emailInput.classList.remove('valid');
                emailInput.classList.add('invalid');

                // if(emailInput.value.length ==- 0) {
                //     errorArray.push("Enter an email");
                // } 
                // else {
                //     errorArray.push("Email is invalid");
                // }
            }
        });

        // Country Input Validity
        countryInput.addEventListener('keydown', () => {
            if (countryInput.checkValidity()) {
                countryInput.classList.remove('invalid');
                countryInput.classList.add('valid');
            } 
            else {
                countryInput.classList.remove('valid');
                countryInput.classList.add('invalid');
                // errorArray.push("Enter a country name");
            }
        });

        // Zip Code Input Validity
        zipCodeInput.addEventListener('keyup', () => {
            if (/^\d+$/.test(zipCodeInput.value)) {
                if (zipCodeInput.value.length == 5) {
                    zipCodeInput.classList.remove('invalid');
                    zipCodeInput.classList.add('valid');
                } 
                else {
                    zipCodeInput.classList.remove('valid');
                    zipCodeInput.classList.add('invalid');
                    // errorArray.push("Zip code must to be 5 digits");
                }
            }  
            else {
                zipCodeInput.classList.remove('valid');
                zipCodeInput.classList.add('invalid');
                // errorArray.push("Enter a zip code with only numbers");
            }
        });

        // Password Input Validity
        passwordInput.addEventListener('keyup', () => {
            // At least 4 words
            let passWordArry = passwordInput.value.trim().split(" ");
            // console.log(passWordArry);
            // console.log(passWordArry.length >= 4);
            if(passWordArry.length >= 4) {
                passwordInput.classList.remove('invalid');
                passwordInput.classList.add('valid');
            } 
            else {
                passwordInput.classList.remove('valid');
                passwordInput.classList.add('invalid');
                // errorArray.push("Enter at least a 4 word passphrase");
            }
        });

        // Password Confirmation
        passwordConInput.addEventListener('keyup', () => {
            if(passwordConInput.value === passwordInput.value) {
                passwordConInput.classList.remove('invalid');
                passwordConInput.classList.add('valid');
            } 
            else {
                passwordConInput.classList.remove('valid');
                passwordConInput.classList.add('invalid');
                // errorArray.push("Passphrase does not match passphrase confirmation");
            }
        });

        // Submit Button
        submitBtn.addEventListener('click', (event) => {
            let formIsValid = emailInput.classList.contains('valid')
                && countryInput.classList.contains('valid')
                && zipCodeInput.classList.contains('valid')
                && passwordInput.classList.contains('valid')
                && passwordConInput.classList.contains('valid');
            if (!formIsValid) {
                event.preventDefault();
                // console.log(errorArray);
                showValidityErrors([emailInput, countryInput, zipCodeInput, passwordInput, passwordConInput]);
            }
        });
    };

    const showValidityErrors = (inputArr) => {
        while(state.errorContainer.firstElementChild) {
            state.errorContainer.removeChild(state.errorContainer.firstElementChild);
        }

        for(let i = 0; i < inputArr.length; i++) {
            if (inputArr[i].classList.contains('invalid')) {
                // Create new span, parent errorContainer
                let inputId = inputArr[i].id;
                const errSpan = createElement('span', state.errorContainer, ['error', `${inputArr[i].id}`]);
                errSpan.textContent = `${inputId} is invalid`;
            }
        }

    };

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");



let formObject = (0,_scripts_userInfoForm__WEBPACK_IMPORTED_MODULE_0__.userInfoForm)();

formObject.render();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSx5RkFBeUYsZUFBZTtBQUN4Ryx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7OztVQzlUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FvRDtBQUN6Qjs7QUFFM0IsaUJBQWlCLG1FQUFZOztBQUU3QixvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZXItaW5mby1mb3JtLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly91c2VyLWluZm8tZm9ybS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdXNlci1pbmZvLWZvcm0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly91c2VyLWluZm8tZm9ybS8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly91c2VyLWluZm8tZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly91c2VyLWluZm8tZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdXNlci1pbmZvLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdXNlci1pbmZvLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdXNlci1pbmZvLWZvcm0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly91c2VyLWluZm8tZm9ybS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3VzZXItaW5mby1mb3JtLy4vc3JjL3NjcmlwdHMvdXNlckluZm9Gb3JtLmpzIiwid2VicGFjazovL3VzZXItaW5mby1mb3JtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3VzZXItaW5mby1mb3JtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3VzZXItaW5mby1mb3JtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91c2VyLWluZm8tZm9ybS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3VzZXItaW5mby1mb3JtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXNlci1pbmZvLWZvcm0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3VzZXItaW5mby1mb3JtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweCAxMDBweDtcXG59XFxuXFxuLyogRXJyb3IgQ29udGFpbmVyICovXFxuLmVycm9yLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5lcnJvci1jb250YWluZXIgc3BhbiB7XFxuICAgIC8qIGJvcmRlcjogM3B4IHJlZCBzb2xpZDsgKi9cXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogRm9ybSAqL1xcbi5mb3JtLWNvbnRhaW5lciBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgZm9ybSBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgZm9ybSBpbnB1dCB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgZm9ybSBpbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIGZvcm0gaW5wdXQudmFsaWQge1xcbiAgICBib3JkZXItY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgZm9ybSBpbnB1dC5pbnZhbGlkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUEsU0FBUztBQUNUO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDBweCAxMDBweDtcXG59XFxuXFxuLyogRXJyb3IgQ29udGFpbmVyICovXFxuLmVycm9yLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5lcnJvci1jb250YWluZXIgc3BhbiB7XFxuICAgIC8qIGJvcmRlcjogM3B4IHJlZCBzb2xpZDsgKi9cXG4gICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogRm9ybSAqL1xcbi5mb3JtLWNvbnRhaW5lciBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICByb3ctZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgZm9ybSBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgZm9ybSBpbnB1dCB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgZm9ybSBpbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIGZvcm0gaW5wdXQudmFsaWQge1xcbiAgICBib3JkZXItY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgZm9ybSBpbnB1dC5pbnZhbGlkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gU3RlcHMgOlxuICAgIC8vIDEpIEFkZCBzdHJ1Y3R1cmUgKGh0bWwpXG4gICAgLy8gMikgQWRkIFN0eWxpbmcgKGNzcylcbiAgICAvLyAzKSBBZGQgRnVuY3Rpb25hbGl0eVxuICAgICAgICAvLyBWYWxpZGF0aW9uXG5cbi8vIEZvcm1cbiAgICAvLyBJbnB1dCA6IEVtYWlsXG4gICAgLy8gSW5wdXQgOiBDb3VudHJ5XG4gICAgLy8gSW5wdXQgOiBaaXAgQ29kZVxuICAgIC8vIElucHV0IDogUGFzc3dvcmRcbiAgICAvLyBJbnB1dCA6IFBhc3N3b3JkIENvbmZpcm1hdGlvblxuICAgIC8vIEJ1dHRvbiA6IFN1bWJpdGlvblxuXG5leHBvcnQgY29uc3QgdXNlckluZm9Gb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICBmb3JtQ29udGFpbmVyOiBudWxsLFxuICAgICAgICBlcnJvckNvbnRhaW5lcjogbnVsbCxcbiAgICAgICAgZm9ybUVsZW1lbnQ6IG51bGwsXG4gICAgICAgIGVtYWlsRWxlbWVudDogbnVsbCxcbiAgICAgICAgY291bnRyeUVsZW1lbnQ6IG51bGwsXG4gICAgICAgIHppcENvZGVFbGVtZW50OiBudWxsLFxuICAgICAgICBwYXNzd29yZEVsZW1lbnQ6IG51bGwsXG4gICAgICAgIHBhc3N3b3JkQ29uRWxlbWVudDogbnVsbCxcbiAgICAgICAgYnRuU3VibWl0RWxlbWVudDogbnVsbCxcbiAgICB9XG5cbiAgICAvLyBSZW5kZXIgZm9ybSBhbmQgYWxsIG9mIGl0cyBjb250ZW50c1xuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgLy8gZm9ybUNvbnRhaW5lclxuICAgICAgICBzdGF0ZS5mb3JtQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgZG9jdW1lbnQuYm9keSwgJ2Zvcm0tY29udGFpbmVyJyk7XG4gICAgICAgICAgICAvLyBlcnJvckNvbnRhaW5lciA6IERpdlxuICAgICAgICAgICAgc3RhdGUuZXJyb3JDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBzdGF0ZS5mb3JtQ29udGFpbmVyLCAnZXJyb3ItY29udGFpbmVyJyk7XG4gICAgICAgICAgICAvLyBGb3JtXG4gICAgICAgICAgICBzdGF0ZS5mb3JtRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCBzdGF0ZS5mb3JtQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICAvLyBJbnB1dCA6IEVtYWlsXG4gICAgICAgICAgICAgICAgc3RhdGUuZW1haWxFbGVtZW50ID0gcmVuZGVyRW1haWxFbGVtZW50KHN0YXRlLmZvcm1FbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvLyBJbnB1dCA6IENvdW50cnlcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb3VudHJ5RWxlbWVudCA9IHJlbmRlckNvdW50cnlFbGVtZW50KHN0YXRlLmZvcm1FbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvLyBJbnB1dCA6IFppcCBDb2RlXG4gICAgICAgICAgICAgICAgc3RhdGUuemlwQ29kZUVsZW1lbnQgPSByZW5kZXJaaXBDb2RlRWxlbWVudChzdGF0ZS5mb3JtRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgLy8gSW5wdXQgOiBQYXNzd29yZFxuICAgICAgICAgICAgICAgIHN0YXRlLnBhc3N3b3JkRWxlbWVudCA9IHJlbmRlclBhc3N3b3JkRWxlbWVudChzdGF0ZS5mb3JtRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgLy8gSW5wdXQgOiBQYXNzd29yZCBDb25maXJtYXRpb25cbiAgICAgICAgICAgICAgICBzdGF0ZS5wYXNzd29yZENvbkVsZW1lbnQgPSByZW5kZXJQYXNzd29yZENvbkVsZW1lbnQoc3RhdGUuZm9ybUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIC8vIEJ1dHRvbiA6IFN1bWJpdGlvblxuICAgICAgICAgICAgICAgIHN0YXRlLmJ0blN1Ym1pdEVsZW1lbnQgPSByZW5kZXJCdG5TdWJtaXRFbGVtZW50KHN0YXRlLmZvcm1FbGVtZW50KTtcblxuICAgICAgICB1cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBJbiA+IE91dCA6IHBhcmVudCA+IERpdlxuICAgIC8vIHJlbmRlciBlbWFpbERpdiwgY29udGFpbmluZyBsYWJlbCBhbmQgaW5wdXQgdG8gYm9keS4gXG4gICAgLy8gVGhlbiByZXR1cm4gZW1haWxEaXZcbiAgICBjb25zdCByZW5kZXJFbWFpbEVsZW1lbnQgPSAocGFyZW50KSA9PiB7XG4gICAgICAgIC8vIGVtYWlsRWxlbWVudFxuICAgICAgICBjb25zdCBlbWFpbEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwYXJlbnQsICdlbWFpbC1lbGVtZW50Jyk7XG4gICAgICAgICAgICAvLyBMYWJlbCBcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsTGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIGVtYWlsRWxlbWVudCk7XG4gICAgICAgICAgICBlbWFpbExhYmVsLnRleHRDb250ZW50ID0gXCJFbWFpbDpcIjtcblxuICAgICAgICAgICAgLy8gSW5wdXRcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIGVtYWlsRWxlbWVudCwgbnVsbCwgJ2VtYWlsJyk7XG4gICAgICAgICAgICBlbWFpbElucHV0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2VtYWlsJyk7XG5cbiAgICAgICAgcmV0dXJuIGVtYWlsRWxlbWVudDtcbiAgICB9XG5cblxuICAgIC8vIEluID4gT3V0IDogPiBEaXZcbiAgICAvLyByZW5kZXIgZW1haWxEaXYsIGNvbnRhaW5pbmcgbGFiZWwgYW5kIGlucHV0IHRvIGJvZHkuIFxuICAgIC8vIFRoZW4gcmV0dXJuIGVtYWlsRGl2XG4gICAgY29uc3QgcmVuZGVyQ291bnRyeUVsZW1lbnQgPSAocGFyZW50KSA9PiB7XG4gICAgICAgIC8vIEVsZW1lbnRcbiAgICAgICAgY29uc3QgY291bnRyeUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwYXJlbnQsICdjb3VudHJ5LWVsZW1lbnQnKTtcbiAgICAgICAgICAgIC8vIExhYmVsIFxuICAgICAgICAgICAgY29uc3QgY291bnRyeUxhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCBjb3VudHJ5RWxlbWVudCk7XG4gICAgICAgICAgICBjb3VudHJ5TGFiZWwudGV4dENvbnRlbnQgPSBcIkNvdW50cnk6XCI7XG5cbiAgICAgICAgICAgIC8vIElucHV0XG4gICAgICAgICAgICBjb25zdCBjb3VudHJ5SW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIGNvdW50cnlFbGVtZW50LCBudWxsLCAnY291bnRyeScpO1xuICAgICAgICAgICAgY291bnRyeUlucHV0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgIGNvdW50cnlJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsICcxJyk7XG5cbiAgICAgICAgcmV0dXJuIGNvdW50cnlFbGVtZW50O1xuICAgIH1cblxuICAgIC8vIEluID4gT3V0IDogPiBEaXZcbiAgICAvLyByZW5kZXIgZW1haWxEaXYsIGNvbnRhaW5pbmcgbGFiZWwgYW5kIGlucHV0IHRvIGJvZHkuIFxuICAgIC8vIFRoZW4gcmV0dXJuIGVtYWlsRGl2XG4gICAgY29uc3QgcmVuZGVyWmlwQ29kZUVsZW1lbnQgPSAocGFyZW50KSA9PiB7XG4gICAgICAgIC8vIEVsZW1lbnRcbiAgICAgICAgY29uc3QgemlwQ29kZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwYXJlbnQsICd6aXAtY29kZS1lbGVtZW50Jyk7XG4gICAgICAgICAgICAvLyBMYWJlbCBcbiAgICAgICAgICAgIGNvbnN0IHppcENvZGVMYWJlbCA9IGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywgemlwQ29kZUVsZW1lbnQpO1xuICAgICAgICAgICAgemlwQ29kZUxhYmVsLnRleHRDb250ZW50ID0gXCJaaXAgQ29kZTpcIjtcblxuICAgICAgICAgICAgLy8gSW5wdXRcbiAgICAgICAgICAgIGNvbnN0IHppcENvZGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgemlwQ29kZUVsZW1lbnQsIG51bGwsICd6aXAtY29kZScpO1xuICAgICAgICAgICAgemlwQ29kZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcblxuICAgICAgICByZXR1cm4gemlwQ29kZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gSW4gPiBPdXQgOiA+IERpdlxuICAgIC8vIHJlbmRlciBlbWFpbERpdiwgY29udGFpbmluZyBsYWJlbCBhbmQgaW5wdXQgdG8gYm9keS4gXG4gICAgLy8gVGhlbiByZXR1cm4gZW1haWxEaXZcbiAgICBjb25zdCByZW5kZXJQYXNzd29yZEVsZW1lbnQgPSAocGFyZW50KSA9PiB7XG4gICAgICAgIC8vIEVsZW1lbnRcbiAgICAgICAgY29uc3QgcGFzc3dvcmRFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgcGFyZW50LCAnemlwLWNvZGUtZWxlbWVudCcpO1xuICAgICAgICAgICAgLy8gTGFiZWwgXG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZExhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCBwYXNzd29yZEVsZW1lbnQpO1xuICAgICAgICAgICAgcGFzc3dvcmRMYWJlbC50ZXh0Q29udGVudCA9IFwiUGFzc3dvcmQ6XCI7XG5cbiAgICAgICAgICAgIC8vIElucHV0XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZElucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCBwYXNzd29yZEVsZW1lbnQsIG51bGwsICdwYXNzd29yZCcpO1xuICAgICAgICAgICAgcGFzc3dvcmRJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICBwYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdwYXNzd29yZCcpO1xuXG4gICAgICAgIHJldHVybiBwYXNzd29yZEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gSW4gPiBPdXQgOiA+IERpdlxuICAgIC8vIHJlbmRlciBlbWFpbERpdiwgY29udGFpbmluZyBsYWJlbCBhbmQgaW5wdXQgdG8gYm9keS4gXG4gICAgLy8gVGhlbiByZXR1cm4gZW1haWxEaXZcbiAgICBjb25zdCByZW5kZXJQYXNzd29yZENvbkVsZW1lbnQgPSAocGFyZW50KSA9PiB7XG4gICAgICAgIC8vIEVsZW1lbnRcbiAgICAgICAgY29uc3QgcGFzc3dvcmRDb25FbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgcGFyZW50LCAnemlwLWNvZGUtZWxlbWVudCcpO1xuICAgICAgICAgICAgLy8gTGFiZWwgXG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZENvbkxhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCBwYXNzd29yZENvbkVsZW1lbnQpO1xuICAgICAgICAgICAgcGFzc3dvcmRDb25MYWJlbC50ZXh0Q29udGVudCA9IFwiUGFzc3dvcmQgQ29uZmlybWF0aW9uOlwiO1xuXG4gICAgICAgICAgICAvLyBJbnB1dFxuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRDb25JbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgcGFzc3dvcmRDb25FbGVtZW50LCBudWxsLCAncGFzc3dvcmQtY29uZmlybScpO1xuICAgICAgICAgICAgcGFzc3dvcmRDb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICBwYXNzd29yZENvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdwYXNzd29yZCcpO1xuXG4gICAgICAgIHJldHVybiBwYXNzd29yZENvbkVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gSW4gPiBPdXQgOiA+IERpdlxuICAgIC8vIHJlbmRlciBlbWFpbERpdiwgY29udGFpbmluZyBsYWJlbCBhbmQgaW5wdXQgdG8gYm9keS4gXG4gICAgLy8gVGhlbiByZXR1cm4gZW1haWxEaXZcbiAgICBjb25zdCByZW5kZXJCdG5TdWJtaXRFbGVtZW50ID0gKHBhcmVudCkgPT4ge1xuICAgICAgICBjb25zdCBidG5TdWJtaXQgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBwYXJlbnQpO1xuICAgICAgICBidG5TdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuXG4gICAgICAgIHJldHVybiBidG5TdWJtaXQ7XG4gICAgfVxuXG4gICAgLy8gQmluZCBmdW5jdGlvbmFsaXR5IChpbmNsdWRpbmcgdmFsaWRhdGlvbikgdG8gZm9ybSBhbmQgY2hpbGQgZWxlbWVudHMuXG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgICAvLyBHZXQgZm9ybVxuICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxuICAgICAgICAvLyBMaXN0IG9mIGZvcm0gaW5wdXRzXG4gICAgICAgIGNvbnN0IGlucHV0TGlzdCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbiAgICAgICAgLy8gR2V0IEVtYWlsIElucHV0XG4gICAgICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBpbnB1dExpc3RbMF07XG5cbiAgICAgICAgLy8gR2V0IENvdW50cnkgSW5wdXRcbiAgICAgICAgY29uc3QgY291bnRyeUlucHV0ID0gaW5wdXRMaXN0WzFdO1xuXG4gICAgICAgIC8vIEdldCBaaXAgQ29kZSBJbnB1dFxuICAgICAgICBjb25zdCB6aXBDb2RlSW5wdXQgPSBpbnB1dExpc3RbMl07XG5cbiAgICAgICAgLy8gR2V0IFBhc3N3b3JkIElucHV0XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBpbnB1dExpc3RbM107XG5cbiAgICAgICAgLy8gR2V0IFBhc3N3b3JkIENvbmZpcm1hdGlvbiBJbnB1dFxuICAgICAgICBjb25zdCBwYXNzd29yZENvbklucHV0ID0gaW5wdXRMaXN0WzRdO1xuXG4gICAgICAgIC8vIEdldCBTdWJtaXQgYnRuXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuXG4gICAgICAgIC8vIEVycm9yIHRleHQgQXJyYXlcbiAgICAgICAgLy8gbGV0IGVycm9yQXJyYXkgPSBbXTtcblxuICAgICAgICAvLyBFbWFpbCBJbnB1dCBWYWxpZGl0eVxuICAgICAgICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZW1haWxJbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgICAgICBlbWFpbElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICBlbWFpbElucHV0LmNsYXNzTGlzdC5hZGQoJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZW1haWxJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZCcpO1xuICAgICAgICAgICAgICAgIGVtYWlsSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYoZW1haWxJbnB1dC52YWx1ZS5sZW5ndGggPT0tIDApIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgZXJyb3JBcnJheS5wdXNoKFwiRW50ZXIgYW4gZW1haWxcIik7XG4gICAgICAgICAgICAgICAgLy8gfSBcbiAgICAgICAgICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgZXJyb3JBcnJheS5wdXNoKFwiRW1haWwgaXMgaW52YWxpZFwiKTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvdW50cnkgSW5wdXQgVmFsaWRpdHlcbiAgICAgICAgY291bnRyeUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY291bnRyeUlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgICAgIGNvdW50cnlJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgY291bnRyeUlucHV0LmNsYXNzTGlzdC5hZGQoJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY291bnRyeUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgICAgICAgICAgICAgY291bnRyeUlucHV0LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAvLyBlcnJvckFycmF5LnB1c2goXCJFbnRlciBhIGNvdW50cnkgbmFtZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gWmlwIENvZGUgSW5wdXQgVmFsaWRpdHlcbiAgICAgICAgemlwQ29kZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKC9eXFxkKyQvLnRlc3QoemlwQ29kZUlucHV0LnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICh6aXBDb2RlSW5wdXQudmFsdWUubGVuZ3RoID09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgemlwQ29kZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgemlwQ29kZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3ZhbGlkJyk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgemlwQ29kZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgIHppcENvZGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVycm9yQXJyYXkucHVzaChcIlppcCBjb2RlIG11c3QgdG8gYmUgNSBkaWdpdHNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB6aXBDb2RlSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQnKTtcbiAgICAgICAgICAgICAgICB6aXBDb2RlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIC8vIGVycm9yQXJyYXkucHVzaChcIkVudGVyIGEgemlwIGNvZGUgd2l0aCBvbmx5IG51bWJlcnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFBhc3N3b3JkIElucHV0IFZhbGlkaXR5XG4gICAgICAgIHBhc3N3b3JkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBBdCBsZWFzdCA0IHdvcmRzXG4gICAgICAgICAgICBsZXQgcGFzc1dvcmRBcnJ5ID0gcGFzc3dvcmRJbnB1dC52YWx1ZS50cmltKCkuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocGFzc1dvcmRBcnJ5KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhc3NXb3JkQXJyeS5sZW5ndGggPj0gNCk7XG4gICAgICAgICAgICBpZihwYXNzV29yZEFycnkubGVuZ3RoID49IDQpIHtcbiAgICAgICAgICAgICAgICBwYXNzd29yZElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgICAgICBwYXNzd29yZElucHV0LmNsYXNzTGlzdC5hZGQoJ3ZhbGlkJyk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmRJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZCcpO1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIC8vIGVycm9yQXJyYXkucHVzaChcIkVudGVyIGF0IGxlYXN0IGEgNCB3b3JkIHBhc3NwaHJhc2VcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFBhc3N3b3JkIENvbmZpcm1hdGlvblxuICAgICAgICBwYXNzd29yZENvbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYocGFzc3dvcmRDb25JbnB1dC52YWx1ZSA9PT0gcGFzc3dvcmRJbnB1dC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkQ29uSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIHBhc3N3b3JkQ29uSW5wdXQuY2xhc3NMaXN0LmFkZCgndmFsaWQnKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXNzd29yZENvbklucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkJyk7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmRDb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgLy8gZXJyb3JBcnJheS5wdXNoKFwiUGFzc3BocmFzZSBkb2VzIG5vdCBtYXRjaCBwYXNzcGhyYXNlIGNvbmZpcm1hdGlvblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU3VibWl0IEJ1dHRvblxuICAgICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtSXNWYWxpZCA9IGVtYWlsSW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2YWxpZCcpXG4gICAgICAgICAgICAgICAgJiYgY291bnRyeUlucHV0LmNsYXNzTGlzdC5jb250YWlucygndmFsaWQnKVxuICAgICAgICAgICAgICAgICYmIHppcENvZGVJbnB1dC5jbGFzc0xpc3QuY29udGFpbnMoJ3ZhbGlkJylcbiAgICAgICAgICAgICAgICAmJiBwYXNzd29yZElucHV0LmNsYXNzTGlzdC5jb250YWlucygndmFsaWQnKVxuICAgICAgICAgICAgICAgICYmIHBhc3N3b3JkQ29uSW5wdXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd2YWxpZCcpO1xuICAgICAgICAgICAgaWYgKCFmb3JtSXNWYWxpZCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3JBcnJheSk7XG4gICAgICAgICAgICAgICAgc2hvd1ZhbGlkaXR5RXJyb3JzKFtlbWFpbElucHV0LCBjb3VudHJ5SW5wdXQsIHppcENvZGVJbnB1dCwgcGFzc3dvcmRJbnB1dCwgcGFzc3dvcmRDb25JbnB1dF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hvd1ZhbGlkaXR5RXJyb3JzID0gKGlucHV0QXJyKSA9PiB7XG4gICAgICAgIHdoaWxlKHN0YXRlLmVycm9yQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvckNvbnRhaW5lci5yZW1vdmVDaGlsZChzdGF0ZS5lcnJvckNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaW5wdXRBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpbnB1dEFycltpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgc3BhbiwgcGFyZW50IGVycm9yQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0SWQgPSBpbnB1dEFycltpXS5pZDtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJTcGFuID0gY3JlYXRlRWxlbWVudCgnc3BhbicsIHN0YXRlLmVycm9yQ29udGFpbmVyLCBbJ2Vycm9yJywgYCR7aW5wdXRBcnJbaV0uaWR9YF0pO1xuICAgICAgICAgICAgICAgIGVyclNwYW4udGV4dENvbnRlbnQgPSBgJHtpbnB1dElkfSBpcyBpbnZhbGlkYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIC8vIENyZWF0ZSBodG1sIGVsZW1lbnQgZnJvbSBpbnB1dHNcbiAgICAvLyBJbiA+IE91dDogU3RyaW5nLCBPYmplY3QsIFN0cmluZywgU3RyaW5nXG4gICAgLy8gSW4gPiBPdXQ6IHR5cGUsIHBhcmVudCwgY2xhc3MsIGlkXG4gICAgY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBwYXJlbnQsIGNsc3MgPSBudWxsLCBpZCA9IG51bGwpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgaWYgKGNsc3MgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2xzcykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xzcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsc3NbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsc3MpO1xuICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkICE9PSBudWxsKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHtyZW5kZXJ9XG4gICAgKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge3VzZXJJbmZvRm9ybX0gZnJvbSAnLi9zY3JpcHRzL3VzZXJJbmZvRm9ybSc7XG5pbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcblxubGV0IGZvcm1PYmplY3QgPSB1c2VySW5mb0Zvcm0oKTtcblxuZm9ybU9iamVjdC5yZW5kZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=