/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/journal-webfont.woff2 copy */ "./fonts/journal-webfont.woff2 copy"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/journal-webfont.woff copy */ "./fonts/journal-webfont.woff copy"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/lemon_milk/LEMONMILK-Light.otf */ "./fonts/lemon_milk/LEMONMILK-Light.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../imG/louis-hansel-u13IpYtZ9I8-unsplash.jpg */ "./imG/louis-hansel-u13IpYtZ9I8-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: customFont;
    letter-spacing: 2px;
}

:root {
    --centering-padding: 0 25vw;
    --faded-white: rgba(255, 255, 255, 0.7);
    --selected-white: rgba(255, 255, 255, 0.85);
    --button-border-radius: 10px;
    --title-font-size: clamp(3vw, 3.5rem, 6vw); 
    --subtitle-font-size: clamp(1vw, 1.5rem, 2vw); 
    --dirty-orange: rgba(196, 137, 28, 0.8);
}

@font-face {
    font-family: customFont;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
}

@font-face {
    font-family: lemonMilk;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('otf');
}

body {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}), linear-gradient(rgb(133, 237, 255), rgb(255, 201, 255));
    background-size: cover;
    padding: var(--centering-padding);
}

div#content {
    min-height: 100vh;
}

nav.navbar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0 3vw;
    gap: 3vw;
    align-items: center;
}

button {
    outline: none;
    background-color: var(--faded-white);
    border-style: none;
    outline: none;
    border-radius: var(--button-border-radius) var(--button-border-radius) 0 0;
    padding: 1vh 3vw;
    font-size: calc(0.7 * var(--title-font-size));
    position: relative;
    cursor: pointer;
    /* width: clamp(9vw, 200px, 12vw) */
}

button.selected::after, button.selected::before {
    --size: var(--button-border-radius);
    content: "";
    position: absolute;
    width: var(--size);
    height: var(--size);
    background-image: radial-gradient(circle at 100% 100%, transparent calc(var(--size) + 0.2px), var(--selected-white) var(--size));
}

button::after {
    bottom: 0;
    left: 100%;
    rotate: -90deg;
}

button::before {
    bottom: 0;
    right: 100%;
    rotate: 180deg;
}

button:hover {
    color: rgb(198, 147, 46);
    background-color: var(--selected-white);
}

header > h1 {
        font-size: 6rem;
        font-weight: 900;
        letter-spacing: 10px;
        color: white;
        text-align: center;
        padding: 3vh 0;
}

.selected {
    background-color: var(--selected-white);
}

.main-page-container {
    padding: 2rem 3rem;
    height: 100vh;
    background-color: var(--selected-white);
    border-radius: calc(2 * var(--button-border-radius));
}

/* Home page */

.title-container h1, .opening-hours h1 {
    font-size: var(--title-font-size);
    color: var(--dirty-orange);
}

.introduction {
    margin-bottom: 4vh;
    > h2 {
        font-size: var(--subtitle-font-size);
        font-family: cursive;
        font-weight: 200;
    }
}

.opening-hours ul {
    list-style-type: none;
}

.opening-hours ul li {
    font-size: var(--subtitle-font-size);
    margin: 2vh 0;
    font-family: cursive;
}

.svg {
    height: var(--title-font-size);
    aspect-ratio: 1;
}

.svg:hover {
    cursor: pointer;
    filter: invert(55%) sepia(100%) hue-rotate(-10deg) saturate(2);
}

.footer {
    display: flex;
    align-items: center;
}

.footer h1 {
    flex: 3; 
    font-size: var(--title-font-size);
    color: var(--dirty-orange);
}

.footer .signs-container {
    flex: 1 1 0;
    display: flex;
    gap: 3px;
    align-items: center;

    > img:first-child {
        height: calc(var(--title-font-size) * 1.2);
    }
}

/* menu page */

ul.starters, ul.mains, ul.coffee {
    display: flex;
    flex-direction: column;
    gap: 3vh;
}

ul.mains {
    margin: 2vh 0;
}

li.food-item {
    list-style: none;
    display: flex;
    flex-direction: column;
}

li > .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.name {
    font-size: calc(var(--subtitle-font-size) + 0.4rem);
    color: var(--dirty-orange);
    font-weight: 900;
}

.price, .description {
    font-size: calc(var(--subtitle-font-size));
}

.feedback-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 3rem;
}

.feedback-container {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-rows: repeat(3, 1fr);
    gap: 10vh;
}

.account-info p.account {
    color: rgb(199, 154, 70);
    font-size: var(--title-font-size);
}

.account-info {
    min-width: 10vw;
}

.feedback {
    display: flex;
    align-items: center;
    gap: 1vw;
    border-style: double;
    border-color: var(--dirty-orange);
    border-radius: 30px;
    border-width: 0.5rem;
    padding: 1rem 2rem;
    & img {
        border-radius: 50%;
        height: 6vh;
        width: 6vh;
    }
    & p {
        font-size: calc(var(--subtitle-font-size)*1.2);
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;IAC3B,uCAAuC;IACvC,2CAA2C;IAC3C,4BAA4B;IAC5B,0CAA0C;IAC1C,6CAA6C;IAC7C,uCAAuC;AAC3C;;AAEA;IACI,uBAAuB;IACvB;0DACuD;AAC3D;;AAEA;IACI,sBAAsB;IACtB,0DAA+D;AACnE;;AAEA;IACI,4GAAsH;IACtH,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,cAAc;IACd,QAAQ;IACR,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,kBAAkB;IAClB,aAAa;IACb,0EAA0E;IAC1E,gBAAgB;IAChB,6CAA6C;IAC7C,kBAAkB;IAClB,eAAe;IACf,mCAAmC;AACvC;;AAEA;IACI,mCAAmC;IACnC,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,gIAAgI;AACpI;;AAEA;IACI,SAAS;IACT,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,wBAAwB;IACxB,uCAAuC;AAC3C;;AAEA;QACQ,eAAe;QACf,gBAAgB;QAChB,oBAAoB;QACpB,YAAY;QACZ,kBAAkB;QAClB,cAAc;AACtB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,uCAAuC;IACvC,oDAAoD;AACxD;;AAEA,cAAc;;AAEd;IACI,iCAAiC;IACjC,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;IAClB;QACI,oCAAoC;QACpC,oBAAoB;QACpB,gBAAgB;IACpB;AACJ;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,8DAA8D;AAClE;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,OAAO;IACP,iCAAiC;IACjC,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,aAAa;IACb,QAAQ;IACR,mBAAmB;;IAEnB;QACI,0CAA0C;IAC9C;AACJ;;AAEA,cAAc;;AAEd;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,mDAAmD;IACnD,0BAA0B;IAC1B,gBAAgB;AACpB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,kCAAkC;IAClC,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,iCAAiC;AACrC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,oBAAoB;IACpB,iCAAiC;IACjC,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB;QACI,kBAAkB;QAClB,WAAW;QACX,UAAU;IACd;IACA;QACI,8CAA8C;IAClD;AACJ","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: customFont;\n    letter-spacing: 2px;\n}\n\n:root {\n    --centering-padding: 0 25vw;\n    --faded-white: rgba(255, 255, 255, 0.7);\n    --selected-white: rgba(255, 255, 255, 0.85);\n    --button-border-radius: 10px;\n    --title-font-size: clamp(3vw, 3.5rem, 6vw); \n    --subtitle-font-size: clamp(1vw, 1.5rem, 2vw); \n    --dirty-orange: rgba(196, 137, 28, 0.8);\n}\n\n@font-face {\n    font-family: customFont;\n    src: url(../fonts/journal-webfont.woff2\\ copy) format('woff2'),\n    url(../fonts/journal-webfont.woff\\ copy) format('woff');\n}\n\n@font-face {\n    font-family: lemonMilk;\n    src: url(../fonts/lemon_milk/LEMONMILK-Light.otf) format('otf');\n}\n\nbody {\n    background: url(../imG/louis-hansel-u13IpYtZ9I8-unsplash.jpg), linear-gradient(rgb(133, 237, 255), rgb(255, 201, 255));\n    background-size: cover;\n    padding: var(--centering-padding);\n}\n\ndiv#content {\n    min-height: 100vh;\n}\n\nnav.navbar {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 0 3vw;\n    gap: 3vw;\n    align-items: center;\n}\n\nbutton {\n    outline: none;\n    background-color: var(--faded-white);\n    border-style: none;\n    outline: none;\n    border-radius: var(--button-border-radius) var(--button-border-radius) 0 0;\n    padding: 1vh 3vw;\n    font-size: calc(0.7 * var(--title-font-size));\n    position: relative;\n    cursor: pointer;\n    /* width: clamp(9vw, 200px, 12vw) */\n}\n\nbutton.selected::after, button.selected::before {\n    --size: var(--button-border-radius);\n    content: \"\";\n    position: absolute;\n    width: var(--size);\n    height: var(--size);\n    background-image: radial-gradient(circle at 100% 100%, transparent calc(var(--size) + 0.2px), var(--selected-white) var(--size));\n}\n\nbutton::after {\n    bottom: 0;\n    left: 100%;\n    rotate: -90deg;\n}\n\nbutton::before {\n    bottom: 0;\n    right: 100%;\n    rotate: 180deg;\n}\n\nbutton:hover {\n    color: rgb(198, 147, 46);\n    background-color: var(--selected-white);\n}\n\nheader > h1 {\n        font-size: 6rem;\n        font-weight: 900;\n        letter-spacing: 10px;\n        color: white;\n        text-align: center;\n        padding: 3vh 0;\n}\n\n.selected {\n    background-color: var(--selected-white);\n}\n\n.main-page-container {\n    padding: 2rem 3rem;\n    height: 100vh;\n    background-color: var(--selected-white);\n    border-radius: calc(2 * var(--button-border-radius));\n}\n\n/* Home page */\n\n.title-container h1, .opening-hours h1 {\n    font-size: var(--title-font-size);\n    color: var(--dirty-orange);\n}\n\n.introduction {\n    margin-bottom: 4vh;\n    > h2 {\n        font-size: var(--subtitle-font-size);\n        font-family: cursive;\n        font-weight: 200;\n    }\n}\n\n.opening-hours ul {\n    list-style-type: none;\n}\n\n.opening-hours ul li {\n    font-size: var(--subtitle-font-size);\n    margin: 2vh 0;\n    font-family: cursive;\n}\n\n.svg {\n    height: var(--title-font-size);\n    aspect-ratio: 1;\n}\n\n.svg:hover {\n    cursor: pointer;\n    filter: invert(55%) sepia(100%) hue-rotate(-10deg) saturate(2);\n}\n\n.footer {\n    display: flex;\n    align-items: center;\n}\n\n.footer h1 {\n    flex: 3; \n    font-size: var(--title-font-size);\n    color: var(--dirty-orange);\n}\n\n.footer .signs-container {\n    flex: 1 1 0;\n    display: flex;\n    gap: 3px;\n    align-items: center;\n\n    > img:first-child {\n        height: calc(var(--title-font-size) * 1.2);\n    }\n}\n\n/* menu page */\n\nul.starters, ul.mains, ul.coffee {\n    display: flex;\n    flex-direction: column;\n    gap: 3vh;\n}\n\nul.mains {\n    margin: 2vh 0;\n}\n\nli.food-item {\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n}\n\nli > .top {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.name {\n    font-size: calc(var(--subtitle-font-size) + 0.4rem);\n    color: var(--dirty-orange);\n    font-weight: 900;\n}\n\n.price, .description {\n    font-size: calc(var(--subtitle-font-size));\n}\n\n.feedback-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    padding: 3rem;\n}\n\n.feedback-container {\n    display: grid;\n    height: 100%;\n    width: 100%;\n    grid-template-rows: repeat(3, 1fr);\n    gap: 10vh;\n}\n\n.account-info p.account {\n    color: rgb(199, 154, 70);\n    font-size: var(--title-font-size);\n}\n\n.account-info {\n    min-width: 10vw;\n}\n\n.feedback {\n    display: flex;\n    align-items: center;\n    gap: 1vw;\n    border-style: double;\n    border-color: var(--dirty-orange);\n    border-radius: 30px;\n    border-width: 0.5rem;\n    padding: 1rem 2rem;\n    & img {\n        border-radius: 50%;\n        height: 6vh;\n        width: 6vh;\n    }\n    & p {\n        font-size: calc(var(--subtitle-font-size)*1.2);\n    }\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/feedback.js":
/*!*************************!*\
  !*** ./src/feedback.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFeedbackPage: () => (/* binding */ createFeedbackPage)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _img_panda1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/panda1.jpg */ "./img/panda1.jpg");
/* harmony import */ var _img_panda2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/panda2.jpg */ "./img/panda2.jpg");
/* harmony import */ var _img_panda3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/panda3.jpg */ "./img/panda3.jpg");





class Feedback {
    constructor(account, title, comment, icon) {
        this.account = account;
        this.title = title;
        this.comment = comment;
        this.icon = icon;
    }

    createFeedback() {
        const feedback = document.createElement('div');
        const img = document.createElement('img');
        const accountInfo = document.createElement('div');
        const account = document.createElement('p');
        const title = document.createElement('p');
        const comment = document.createElement('p');

        feedback.classList.add('feedback');
        accountInfo.classList.add('account-info');
        account.classList.add('account');

        // link image
        img.src = this.icon;

        account.textContent = this.account;
        title.textContent = this.title;
        comment.textContent = this.comment;

        accountInfo.appendChild(account);
        accountInfo.appendChild(title);

        feedback.appendChild(img);
        feedback.appendChild(accountInfo);
        feedback.appendChild(comment);

        return feedback
    }
}

function createFeedbackPage() {
    const mainPageContainer = document.createElement('div');
    const feedbackWrapper = document.createElement('div');
    const feedbackContainer = document.createElement('div');

    mainPageContainer.classList.add("main-page-container");
    feedbackWrapper.classList.add("feedback-wrapper");
    feedbackContainer.classList.add("feedback-container");
    
    const pooh = new Feedback("@pooh", "Honey Bear", "-- Hearty Meals!", _img_panda1_jpg__WEBPACK_IMPORTED_MODULE_1__);
    const tigger = new Feedback("@tigger", "Friendly Friend", "-- Fantastic Food!", _img_panda2_jpg__WEBPACK_IMPORTED_MODULE_2__);
    const panpan = new Feedback("@panpan", "Curtsy Panda", "-- Simply Delicious!", _img_panda3_jpg__WEBPACK_IMPORTED_MODULE_3__);

    feedbackContainer.appendChild(pooh.createFeedback());
    feedbackContainer.appendChild(tigger.createFeedback());
    feedbackContainer.appendChild(panpan.createFeedback());
    feedbackWrapper.appendChild(feedbackContainer);
    mainPageContainer.appendChild(feedbackWrapper);

    return mainPageContainer
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHomePage: () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _svg_facebook_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../svg/facebook-svgrepo-com.svg */ "./svg/facebook-svgrepo-com.svg");
/* harmony import */ var _svg_instagram_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/instagram-svgrepo-com.svg */ "./svg/instagram-svgrepo-com.svg");
/* harmony import */ var _svg_twitter_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/twitter-svgrepo-com.svg */ "./svg/twitter-svgrepo-com.svg");





function createMainPage() {
    const mainPageContainer = document.createElement('div');
    const titleContainer = document.createElement('div');
    const title = document.createElement('h1');
    const bodyContainer = document.createElement('div');
    const introduction = document.createElement('div');
    const h2intro = document.createElement('h2');
    const openingHours = document.createElement('div');
    const openingHoursTitle = document.createElement('h1');
    const list = document.createElement('ul');
    const mon = document.createElement('li');
    const tues = document.createElement('li');
    const wed = document.createElement('li');
    const thurs = document.createElement('li');
    const fri = document.createElement('li');
    const sat = document.createElement('li');
    const sun = document.createElement('li');

    mainPageContainer.classList.add('main-page-container');
    titleContainer.classList.add('title-container');
    title.classList.add('title');
    bodyContainer.classList.add('body-container');
    introduction.classList.add('introduction');
    openingHours.classList.add('opening-hours');
    openingHoursTitle.classList.add('title');
    list.classList.add('list');
    mon.classList.add('item')
    tues.classList.add('item')
    wed.classList.add('item')
    thurs.classList.add('item')
    fri.classList.add('item')
    sat.classList.add('item')
    sun.classList.add('item')

    title.textContent = "Welcome to the Breakfast Bar";
    h2intro.textContent = "Opened in 1955. Only the best breakfasts are served here.";
    openingHoursTitle.textContent = "Opening Hours:";
    mon.textContent = "Monday: Closed";
    tues.textContent = "Tuesday: 0900-1200";
    wed.textContent = "Wednesday: 0900-1200";
    thurs.textContent = "Thursday: 0900-1200";
    fri.textContent = "Friday: 0900-1200";
    sat.textContent = "Saturday: 0900-1200";
    sun.textContent = "Sunday: 0900-1200";

    list.appendChild(mon);
    list.appendChild(tues);
    list.appendChild(wed);
    list.appendChild(thurs);
    list.appendChild(fri);
    list.appendChild(sat);
    list.appendChild(sun);
    openingHours.appendChild(openingHoursTitle);
    openingHours.appendChild(list);

    introduction.appendChild(h2intro);
    bodyContainer.appendChild(introduction);
    bodyContainer.appendChild(openingHours);

    titleContainer.appendChild(title);
    mainPageContainer.appendChild(titleContainer);
    mainPageContainer.appendChild(bodyContainer);

    return mainPageContainer
}

function createFooter() {
    const footer = document.createElement('div');
    const h1 = document.createElement('h1');
    const signs = document.createElement('div');
    const fb = document.createElement('img');
    const instagram = document.createElement('img');
    const twitter = document.createElement('img');

    fb.src = _svg_facebook_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__;
    instagram.src = _svg_instagram_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__;
    twitter.src = _svg_twitter_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__;
    fb.alt = "Facebook svg";
    instagram.alt = "Instagram svg";
    twitter.alt = "Twitter svg";

    footer.classList.add('footer');
    signs.classList.add('signs-container');
    fb.classList.add('svg');
    instagram.classList.add('svg');
    twitter.classList.add('svg');

    h1.textContent = "Find us!";

    signs.appendChild(fb);
    signs.appendChild(instagram);
    signs.appendChild(twitter);
    footer.appendChild(h1);
    footer.appendChild(signs);
    
    return footer
}

function createHomePage() {
    const element = createMainPage();
    const footer = createFooter();
    element.appendChild(footer);
    return element
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenu: () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");


class Fooditem {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    createFoodItem() {
        const item = document.createElement('li');
        const topDiv = document.createElement('div');
        const nameP = document.createElement('p');
        const priceP = document.createElement('p');
        const descriptionP = document.createElement('p');

        item.classList.add("food-item");
        topDiv.classList.add('top');
        nameP.classList.add('name');
        priceP.classList.add('price');
        descriptionP.classList.add('description');
        
        nameP.textContent = this.name;
        priceP.textContent = this.price;
        descriptionP.textContent = this.description;
        
        topDiv.appendChild(nameP);
        topDiv.appendChild(priceP);
        
        item.appendChild(topDiv);
        item.appendChild(descriptionP);

        return item
    }
}

function createMenu() {
    const mainPageContainer = document.createElement('div');
    const starters = document.createElement('ul');
    const mains = document.createElement('ul');
    const coffee = document.createElement('ul');

    // add classes to all elements
    mainPageContainer.classList.add("main-page-container");
    starters.classList.add("starters");
    mains.classList.add("mains");
    coffee.classList.add("coffee");

    // create food-item
    const fries = new Fooditem("Truffle Fries", 12, "Potato Fries, White Truffle Oil, Grated Parmesan");
    const salad = new Fooditem("Bar's Salad", 12, "Mesclun Avocado, Cherry Tomato, Pumpkin seeds, Baby Corn, Sesame Dressing");
    const grain = new Fooditem("Salmon Grain Bowl", 15, "Quinoa, Miso Salmon, Furikake, Hanjuku Egg, Roasted Sesame Dressing");
    const breakfast = new Fooditem("Bar's Breakfast", 20, "Light Buttered Sourdough, Tater Tots, Bacon Steak, Pork Sausages, Scrambled Eggs");
    const rigatoni = new Fooditem("Spicy Tomato Crab Rigatoni", 20, "Rigatoni, Blue Swimmer Crab, Tomato Sauce, White Wine, Garlic, Parmesan");
    const sandwich = new Fooditem("Grilled Cheese Sandwich", 15, "Buttered Sourdough, Cheddar, Bacon Steak, Mustard, Caramelised Onions");
    const affogato = new Fooditem("Bar's Affogato", 10, "Espresso, Chocolate Sauce and Cookkies & Cream Ice Cream");
    const coldbrew = new Fooditem("Specialty Cold Brew", 8, "Seasonal");

    // append food-items to ul
    starters.appendChild(fries.createFoodItem());
    starters.appendChild(salad.createFoodItem());
    starters.appendChild(grain.createFoodItem());

    mains.appendChild(breakfast.createFoodItem());
    mains.appendChild(rigatoni.createFoodItem());
    mains.appendChild(sandwich.createFoodItem());

    coffee.appendChild(affogato.createFoodItem());
    coffee.appendChild(coldbrew.createFoodItem());

    // append ul to mainpagecontainer
    mainPageContainer.appendChild(starters);
    mainPageContainer.appendChild(mains);
    mainPageContainer.appendChild(coffee);

    return mainPageContainer
}



/***/ }),

/***/ "./fonts/journal-webfont.woff copy":
/*!*****************************************!*\
  !*** ./fonts/journal-webfont.woff copy ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7830c7cd1683d2fcb566.woff copy";

/***/ }),

/***/ "./fonts/journal-webfont.woff2 copy":
/*!******************************************!*\
  !*** ./fonts/journal-webfont.woff2 copy ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d54dab98b7658a8ba1bb.woff2 copy";

/***/ }),

/***/ "./fonts/lemon_milk/LEMONMILK-Light.otf":
/*!**********************************************!*\
  !*** ./fonts/lemon_milk/LEMONMILK-Light.otf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "febd30d6f2b77941893c.otf";

/***/ }),

/***/ "./imG/louis-hansel-u13IpYtZ9I8-unsplash.jpg":
/*!***************************************************!*\
  !*** ./imG/louis-hansel-u13IpYtZ9I8-unsplash.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9197e834946b040a5e98.jpg";

/***/ }),

/***/ "./img/panda1.jpg":
/*!************************!*\
  !*** ./img/panda1.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c6c7b5e73b9426bc07d.jpg";

/***/ }),

/***/ "./img/panda2.jpg":
/*!************************!*\
  !*** ./img/panda2.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67bedf24db866d48ee92.jpg";

/***/ }),

/***/ "./img/panda3.jpg":
/*!************************!*\
  !*** ./img/panda3.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b22e0771196646cd9937.jpg";

/***/ }),

/***/ "./svg/facebook-svgrepo-com.svg":
/*!**************************************!*\
  !*** ./svg/facebook-svgrepo-com.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44d8e564ccb8204ba68e.svg";

/***/ }),

/***/ "./svg/instagram-svgrepo-com.svg":
/*!***************************************!*\
  !*** ./svg/instagram-svgrepo-com.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0dd482fa842bd7851f54.svg";

/***/ }),

/***/ "./svg/twitter-svgrepo-com.svg":
/*!*************************************!*\
  !*** ./svg/twitter-svgrepo-com.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cee0d28be1d5d02d6375.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _feedback_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback.js */ "./src/feedback.js");





function restaurantPage() {
    const content = document.querySelector("#content");
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const feedback = document.querySelector("#feedback");

    const resetPage = (element) => {
        element.textContent = "";
    }

    const resetButton = () => {
        home.classList.remove("selected");
        menu.classList.remove("selected");
        feedback.classList.remove("selected");
    }

    const displayHome = () => {
        resetPage(content);
        const homepage = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();
        content.appendChild(homepage);
    }

    const displayMenu = () => {
        resetPage(content);
        const menu = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenu)();
        content.appendChild(menu);
    }

    const displayFeedback = () => {
        resetPage(content);
        const feedback = (0,_feedback_js__WEBPACK_IMPORTED_MODULE_3__.createFeedbackPage)();
        content.appendChild(feedback);
    }

    home.addEventListener("click", (e) => {
        resetButton();
        e.target.classList.add("selected");
        displayHome();
    });
    
    menu.addEventListener("click", (e) => {
        resetButton();
        e.target.classList.add("selected");
        displayMenu();
    });

    feedback.addEventListener("click", (e) => {
        resetButton();
        e.target.classList.add("selected");
        displayFeedback();
    });

    displayHome();
}

restaurantPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDhJQUFzRDtBQUNsRyw0Q0FBNEMsNElBQXFEO0FBQ2pHLDRDQUE0QyxzSkFBMEQ7QUFDdEcsNENBQTRDLGdLQUErRDtBQUMzRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xELFVBQVUsbUNBQW1DO0FBQzdDOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcs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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsd0RBQWM7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFVO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixnRUFBa0I7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ZlZWRiYWNrLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9qb3VybmFsLXdlYmZvbnQud29mZjIgY29weVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL2pvdXJuYWwtd2ViZm9udC53b2ZmIGNvcHlcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9sZW1vbl9taWxrL0xFTU9OTUlMSy1MaWdodC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9pbUcvbG91aXMtaGFuc2VsLXUxM0lwWXRaOUk4LXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogY3VzdG9tRm9udDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG46cm9vdCB7XG4gICAgLS1jZW50ZXJpbmctcGFkZGluZzogMCAyNXZ3O1xuICAgIC0tZmFkZWQtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAtLXNlbGVjdGVkLXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xuICAgIC0tYnV0dG9uLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLS10aXRsZS1mb250LXNpemU6IGNsYW1wKDN2dywgMy41cmVtLCA2dncpOyBcbiAgICAtLXN1YnRpdGxlLWZvbnQtc2l6ZTogY2xhbXAoMXZ3LCAxLjVyZW0sIDJ2dyk7IFxuICAgIC0tZGlydHktb3JhbmdlOiByZ2JhKDE5NiwgMTM3LCAyOCwgMC44KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IGN1c3RvbUZvbnQ7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd3b2ZmMicpLFxuICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3dvZmYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IGxlbW9uTWlsaztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBmb3JtYXQoJ290ZicpO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSksIGxpbmVhci1ncmFkaWVudChyZ2IoMTMzLCAyMzcsIDI1NSksIHJnYigyNTUsIDIwMSwgMjU1KSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwYWRkaW5nOiB2YXIoLS1jZW50ZXJpbmctcGFkZGluZyk7XG59XG5cbmRpdiNjb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxubmF2Lm5hdmJhciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIHBhZGRpbmc6IDAgM3Z3O1xuICAgIGdhcDogM3Z3O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYWRlZC13aGl0ZSk7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnV0dG9uLWJvcmRlci1yYWRpdXMpIHZhcigtLWJ1dHRvbi1ib3JkZXItcmFkaXVzKSAwIDA7XG4gICAgcGFkZGluZzogMXZoIDN2dztcbiAgICBmb250LXNpemU6IGNhbGMoMC43ICogdmFyKC0tdGl0bGUtZm9udC1zaXplKSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvKiB3aWR0aDogY2xhbXAoOXZ3LCAyMDBweCwgMTJ2dykgKi9cbn1cblxuYnV0dG9uLnNlbGVjdGVkOjphZnRlciwgYnV0dG9uLnNlbGVjdGVkOjpiZWZvcmUge1xuICAgIC0tc2l6ZTogdmFyKC0tYnV0dG9uLWJvcmRlci1yYWRpdXMpO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiB2YXIoLS1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTAwJSAxMDAlLCB0cmFuc3BhcmVudCBjYWxjKHZhcigtLXNpemUpICsgMC4ycHgpLCB2YXIoLS1zZWxlY3RlZC13aGl0ZSkgdmFyKC0tc2l6ZSkpO1xufVxuXG5idXR0b246OmFmdGVyIHtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMTAwJTtcbiAgICByb3RhdGU6IC05MGRlZztcbn1cblxuYnV0dG9uOjpiZWZvcmUge1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMTAwJTtcbiAgICByb3RhdGU6IDE4MGRlZztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDE5OCwgMTQ3LCA0Nik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0ZWQtd2hpdGUpO1xufVxuXG5oZWFkZXIgPiBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAzdmggMDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3RlZC13aGl0ZSk7XG59XG5cbi5tYWluLXBhZ2UtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAycmVtIDNyZW07XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3RlZC13aGl0ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogY2FsYygyICogdmFyKC0tYnV0dG9uLWJvcmRlci1yYWRpdXMpKTtcbn1cblxuLyogSG9tZSBwYWdlICovXG5cbi50aXRsZS1jb250YWluZXIgaDEsIC5vcGVuaW5nLWhvdXJzIGgxIHtcbiAgICBmb250LXNpemU6IHZhcigtLXRpdGxlLWZvbnQtc2l6ZSk7XG4gICAgY29sb3I6IHZhcigtLWRpcnR5LW9yYW5nZSk7XG59XG5cbi5pbnRyb2R1Y3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDR2aDtcbiAgICA+IGgyIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWJ0aXRsZS1mb250LXNpemUpO1xuICAgICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICB9XG59XG5cbi5vcGVuaW5nLWhvdXJzIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5vcGVuaW5nLWhvdXJzIHVsIGxpIHtcbiAgICBmb250LXNpemU6IHZhcigtLXN1YnRpdGxlLWZvbnQtc2l6ZSk7XG4gICAgbWFyZ2luOiAydmggMDtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbn1cblxuLnN2ZyB7XG4gICAgaGVpZ2h0OiB2YXIoLS10aXRsZS1mb250LXNpemUpO1xuICAgIGFzcGVjdC1yYXRpbzogMTtcbn1cblxuLnN2Zzpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZpbHRlcjogaW52ZXJ0KDU1JSkgc2VwaWEoMTAwJSkgaHVlLXJvdGF0ZSgtMTBkZWcpIHNhdHVyYXRlKDIpO1xufVxuXG4uZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb290ZXIgaDEge1xuICAgIGZsZXg6IDM7IFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGl0bGUtZm9udC1zaXplKTtcbiAgICBjb2xvcjogdmFyKC0tZGlydHktb3JhbmdlKTtcbn1cblxuLmZvb3RlciAuc2lnbnMtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxIDEgMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogM3B4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICA+IGltZzpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS10aXRsZS1mb250LXNpemUpICogMS4yKTtcbiAgICB9XG59XG5cbi8qIG1lbnUgcGFnZSAqL1xuXG51bC5zdGFydGVycywgdWwubWFpbnMsIHVsLmNvZmZlZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogM3ZoO1xufVxuXG51bC5tYWlucyB7XG4gICAgbWFyZ2luOiAydmggMDtcbn1cblxubGkuZm9vZC1pdGVtIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxubGkgPiAudG9wIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmFtZSB7XG4gICAgZm9udC1zaXplOiBjYWxjKHZhcigtLXN1YnRpdGxlLWZvbnQtc2l6ZSkgKyAwLjRyZW0pO1xuICAgIGNvbG9yOiB2YXIoLS1kaXJ0eS1vcmFuZ2UpO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5wcmljZSwgLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IGNhbGModmFyKC0tc3VidGl0bGUtZm9udC1zaXplKSk7XG59XG5cbi5mZWVkYmFjay13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDNyZW07XG59XG5cbi5mZWVkYmFjay1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gICAgZ2FwOiAxMHZoO1xufVxuXG4uYWNjb3VudC1pbmZvIHAuYWNjb3VudCB7XG4gICAgY29sb3I6IHJnYigxOTksIDE1NCwgNzApO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGl0bGUtZm9udC1zaXplKTtcbn1cblxuLmFjY291bnQtaW5mbyB7XG4gICAgbWluLXdpZHRoOiAxMHZ3O1xufVxuXG4uZmVlZGJhY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDF2dztcbiAgICBib3JkZXItc3R5bGU6IGRvdWJsZTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWRpcnR5LW9yYW5nZSk7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXItd2lkdGg6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgJiBpbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGhlaWdodDogNnZoO1xuICAgICAgICB3aWR0aDogNnZoO1xuICAgIH1cbiAgICAmIHAge1xuICAgICAgICBmb250LXNpemU6IGNhbGModmFyKC0tc3VidGl0bGUtZm9udC1zaXplKSoxLjIpO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMsMkNBQTJDO0lBQzNDLDRCQUE0QjtJQUM1QiwwQ0FBMEM7SUFDMUMsNkNBQTZDO0lBQzdDLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QjswREFDdUQ7QUFDM0Q7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsMERBQStEO0FBQ25FOztBQUVBO0lBQ0ksNEdBQXNIO0lBQ3RILHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGNBQWM7SUFDZCxRQUFRO0lBQ1IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDBFQUEwRTtJQUMxRSxnQkFBZ0I7SUFDaEIsNkNBQTZDO0lBQzdDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnSUFBZ0k7QUFDcEk7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsdUNBQXVDO0FBQzNDOztBQUVBO1FBQ1EsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixjQUFjO0FBQ3RCOztBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsb0RBQW9EO0FBQ3hEOztBQUVBLGNBQWM7O0FBRWQ7SUFDSSxpQ0FBaUM7SUFDakMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCO1FBQ0ksb0NBQW9DO1FBQ3BDLG9CQUFvQjtRQUNwQixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsOERBQThEO0FBQ2xFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxpQ0FBaUM7SUFDakMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixRQUFRO0lBQ1IsbUJBQW1COztJQUVuQjtRQUNJLDBDQUEwQztJQUM5QztBQUNKOztBQUVBLGNBQWM7O0FBRWQ7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbURBQW1EO0lBQ25ELDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGtDQUFrQztJQUNsQyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEI7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFVBQVU7SUFDZDtJQUNBO1FBQ0ksOENBQThDO0lBQ2xEO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IGN1c3RvbUZvbnQ7XFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1jZW50ZXJpbmctcGFkZGluZzogMCAyNXZ3O1xcbiAgICAtLWZhZGVkLXdoaXRlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICAgIC0tc2VsZWN0ZWQtd2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XFxuICAgIC0tYnV0dG9uLWJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIC0tdGl0bGUtZm9udC1zaXplOiBjbGFtcCgzdncsIDMuNXJlbSwgNnZ3KTsgXFxuICAgIC0tc3VidGl0bGUtZm9udC1zaXplOiBjbGFtcCgxdncsIDEuNXJlbSwgMnZ3KTsgXFxuICAgIC0tZGlydHktb3JhbmdlOiByZ2JhKDE5NiwgMTM3LCAyOCwgMC44KTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBjdXN0b21Gb250O1xcbiAgICBzcmM6IHVybCguLi9mb250cy9qb3VybmFsLXdlYmZvbnQud29mZjJcXFxcIGNvcHkpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgdXJsKC4uL2ZvbnRzL2pvdXJuYWwtd2ViZm9udC53b2ZmXFxcXCBjb3B5KSBmb3JtYXQoJ3dvZmYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBsZW1vbk1pbGs7XFxuICAgIHNyYzogdXJsKC4uL2ZvbnRzL2xlbW9uX21pbGsvTEVNT05NSUxLLUxpZ2h0Lm90ZikgZm9ybWF0KCdvdGYnKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IHVybCguLi9pbUcvbG91aXMtaGFuc2VsLXUxM0lwWXRaOUk4LXVuc3BsYXNoLmpwZyksIGxpbmVhci1ncmFkaWVudChyZ2IoMTMzLCAyMzcsIDI1NSksIHJnYigyNTUsIDIwMSwgMjU1KSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHBhZGRpbmc6IHZhcigtLWNlbnRlcmluZy1wYWRkaW5nKTtcXG59XFxuXFxuZGl2I2NvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubmF2Lm5hdmJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIHBhZGRpbmc6IDAgM3Z3O1xcbiAgICBnYXA6IDN2dztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmFkZWQtd2hpdGUpO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJ1dHRvbi1ib3JkZXItcmFkaXVzKSB2YXIoLS1idXR0b24tYm9yZGVyLXJhZGl1cykgMCAwO1xcbiAgICBwYWRkaW5nOiAxdmggM3Z3O1xcbiAgICBmb250LXNpemU6IGNhbGMoMC43ICogdmFyKC0tdGl0bGUtZm9udC1zaXplKSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAvKiB3aWR0aDogY2xhbXAoOXZ3LCAyMDBweCwgMTJ2dykgKi9cXG59XFxuXFxuYnV0dG9uLnNlbGVjdGVkOjphZnRlciwgYnV0dG9uLnNlbGVjdGVkOjpiZWZvcmUge1xcbiAgICAtLXNpemU6IHZhcigtLWJ1dHRvbi1ib3JkZXItcmFkaXVzKTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEwMCUgMTAwJSwgdHJhbnNwYXJlbnQgY2FsYyh2YXIoLS1zaXplKSArIDAuMnB4KSwgdmFyKC0tc2VsZWN0ZWQtd2hpdGUpIHZhcigtLXNpemUpKTtcXG59XFxuXFxuYnV0dG9uOjphZnRlciB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMTAwJTtcXG4gICAgcm90YXRlOiAtOTBkZWc7XFxufVxcblxcbmJ1dHRvbjo6YmVmb3JlIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMTAwJTtcXG4gICAgcm90YXRlOiAxODBkZWc7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiByZ2IoMTk4LCAxNDcsIDQ2KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0ZWQtd2hpdGUpO1xcbn1cXG5cXG5oZWFkZXIgPiBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDZyZW07XFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAzdmggMDtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0ZWQtd2hpdGUpO1xcbn1cXG5cXG4ubWFpbi1wYWdlLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDJyZW0gM3JlbTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0ZWQtd2hpdGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKDIgKiB2YXIoLS1idXR0b24tYm9yZGVyLXJhZGl1cykpO1xcbn1cXG5cXG4vKiBIb21lIHBhZ2UgKi9cXG5cXG4udGl0bGUtY29udGFpbmVyIGgxLCAub3BlbmluZy1ob3VycyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGl0bGUtZm9udC1zaXplKTtcXG4gICAgY29sb3I6IHZhcigtLWRpcnR5LW9yYW5nZSk7XFxufVxcblxcbi5pbnRyb2R1Y3Rpb24ge1xcbiAgICBtYXJnaW4tYm90dG9tOiA0dmg7XFxuICAgID4gaDIge1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1zdWJ0aXRsZS1mb250LXNpemUpO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICAgICAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICB9XFxufVxcblxcbi5vcGVuaW5nLWhvdXJzIHVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ub3BlbmluZy1ob3VycyB1bCBsaSB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tc3VidGl0bGUtZm9udC1zaXplKTtcXG4gICAgbWFyZ2luOiAydmggMDtcXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxufVxcblxcbi5zdmcge1xcbiAgICBoZWlnaHQ6IHZhcigtLXRpdGxlLWZvbnQtc2l6ZSk7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG59XFxuXFxuLnN2Zzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNTUlKSBzZXBpYSgxMDAlKSBodWUtcm90YXRlKC0xMGRlZykgc2F0dXJhdGUoMik7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIGgxIHtcXG4gICAgZmxleDogMzsgXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGl0bGUtZm9udC1zaXplKTtcXG4gICAgY29sb3I6IHZhcigtLWRpcnR5LW9yYW5nZSk7XFxufVxcblxcbi5mb290ZXIgLnNpZ25zLWNvbnRhaW5lciB7XFxuICAgIGZsZXg6IDEgMSAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDNweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgPiBpbWc6Zmlyc3QtY2hpbGQge1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXRpdGxlLWZvbnQtc2l6ZSkgKiAxLjIpO1xcbiAgICB9XFxufVxcblxcbi8qIG1lbnUgcGFnZSAqL1xcblxcbnVsLnN0YXJ0ZXJzLCB1bC5tYWlucywgdWwuY29mZmVlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzdmg7XFxufVxcblxcbnVsLm1haW5zIHtcXG4gICAgbWFyZ2luOiAydmggMDtcXG59XFxuXFxubGkuZm9vZC1pdGVtIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxubGkgPiAudG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1zdWJ0aXRsZS1mb250LXNpemUpICsgMC40cmVtKTtcXG4gICAgY29sb3I6IHZhcigtLWRpcnR5LW9yYW5nZSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5wcmljZSwgLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKHZhcigtLXN1YnRpdGxlLWZvbnQtc2l6ZSkpO1xcbn1cXG5cXG4uZmVlZGJhY2std3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDNyZW07XFxufVxcblxcbi5mZWVkYmFjay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBnYXA6IDEwdmg7XFxufVxcblxcbi5hY2NvdW50LWluZm8gcC5hY2NvdW50IHtcXG4gICAgY29sb3I6IHJnYigxOTksIDE1NCwgNzApO1xcbiAgICBmb250LXNpemU6IHZhcigtLXRpdGxlLWZvbnQtc2l6ZSk7XFxufVxcblxcbi5hY2NvdW50LWluZm8ge1xcbiAgICBtaW4td2lkdGg6IDEwdnc7XFxufVxcblxcbi5mZWVkYmFjayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXZ3O1xcbiAgICBib3JkZXItc3R5bGU6IGRvdWJsZTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kaXJ0eS1vcmFuZ2UpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBib3JkZXItd2lkdGg6IDAuNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgICAmIGltZyB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBoZWlnaHQ6IDZ2aDtcXG4gICAgICAgIHdpZHRoOiA2dmg7XFxuICAgIH1cXG4gICAgJiBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1zdWJ0aXRsZS1mb250LXNpemUpKjEuMik7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBwZDEgZnJvbSBcIi4uL2ltZy9wYW5kYTEuanBnXCI7XG5pbXBvcnQgcGQyIGZyb20gXCIuLi9pbWcvcGFuZGEyLmpwZ1wiO1xuaW1wb3J0IHBkMyBmcm9tIFwiLi4vaW1nL3BhbmRhMy5qcGdcIjtcblxuY2xhc3MgRmVlZGJhY2sge1xuICAgIGNvbnN0cnVjdG9yKGFjY291bnQsIHRpdGxlLCBjb21tZW50LCBpY29uKSB7XG4gICAgICAgIHRoaXMuYWNjb3VudCA9IGFjY291bnQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5jb21tZW50ID0gY29tbWVudDtcbiAgICAgICAgdGhpcy5pY29uID0gaWNvbjtcbiAgICB9XG5cbiAgICBjcmVhdGVGZWVkYmFjaygpIHtcbiAgICAgICAgY29uc3QgZmVlZGJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IGFjY291bnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgIGZlZWRiYWNrLmNsYXNzTGlzdC5hZGQoJ2ZlZWRiYWNrJyk7XG4gICAgICAgIGFjY291bnRJbmZvLmNsYXNzTGlzdC5hZGQoJ2FjY291bnQtaW5mbycpO1xuICAgICAgICBhY2NvdW50LmNsYXNzTGlzdC5hZGQoJ2FjY291bnQnKTtcblxuICAgICAgICAvLyBsaW5rIGltYWdlXG4gICAgICAgIGltZy5zcmMgPSB0aGlzLmljb247XG5cbiAgICAgICAgYWNjb3VudC50ZXh0Q29udGVudCA9IHRoaXMuYWNjb3VudDtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuICAgICAgICBjb21tZW50LnRleHRDb250ZW50ID0gdGhpcy5jb21tZW50O1xuXG4gICAgICAgIGFjY291bnRJbmZvLmFwcGVuZENoaWxkKGFjY291bnQpO1xuICAgICAgICBhY2NvdW50SW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgZmVlZGJhY2suYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgZmVlZGJhY2suYXBwZW5kQ2hpbGQoYWNjb3VudEluZm8pO1xuICAgICAgICBmZWVkYmFjay5hcHBlbmRDaGlsZChjb21tZW50KTtcblxuICAgICAgICByZXR1cm4gZmVlZGJhY2tcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZlZWRiYWNrUGFnZSgpIHtcbiAgICBjb25zdCBtYWluUGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZlZWRiYWNrV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZlZWRiYWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBtYWluUGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1wYWdlLWNvbnRhaW5lclwiKTtcbiAgICBmZWVkYmFja1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImZlZWRiYWNrLXdyYXBwZXJcIik7XG4gICAgZmVlZGJhY2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZlZWRiYWNrLWNvbnRhaW5lclwiKTtcbiAgICBcbiAgICBjb25zdCBwb29oID0gbmV3IEZlZWRiYWNrKFwiQHBvb2hcIiwgXCJIb25leSBCZWFyXCIsIFwiLS0gSGVhcnR5IE1lYWxzIVwiLCBwZDEpO1xuICAgIGNvbnN0IHRpZ2dlciA9IG5ldyBGZWVkYmFjayhcIkB0aWdnZXJcIiwgXCJGcmllbmRseSBGcmllbmRcIiwgXCItLSBGYW50YXN0aWMgRm9vZCFcIiwgcGQyKTtcbiAgICBjb25zdCBwYW5wYW4gPSBuZXcgRmVlZGJhY2soXCJAcGFucGFuXCIsIFwiQ3VydHN5IFBhbmRhXCIsIFwiLS0gU2ltcGx5IERlbGljaW91cyFcIiwgcGQzKTtcblxuICAgIGZlZWRiYWNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHBvb2guY3JlYXRlRmVlZGJhY2soKSk7XG4gICAgZmVlZGJhY2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGlnZ2VyLmNyZWF0ZUZlZWRiYWNrKCkpO1xuICAgIGZlZWRiYWNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhbnBhbi5jcmVhdGVGZWVkYmFjaygpKTtcbiAgICBmZWVkYmFja1dyYXBwZXIuYXBwZW5kQ2hpbGQoZmVlZGJhY2tDb250YWluZXIpO1xuICAgIG1haW5QYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZlZWRiYWNrV3JhcHBlcik7XG5cbiAgICByZXR1cm4gbWFpblBhZ2VDb250YWluZXJcbn1cblxuXG5leHBvcnQgeyBjcmVhdGVGZWVkYmFja1BhZ2UgfSIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGZic3ZnIGZyb20gXCIuLi9zdmcvZmFjZWJvb2stc3ZncmVwby1jb20uc3ZnXCI7XG5pbXBvcnQgaW5zdGFzdmcgZnJvbSBcIi4uL3N2Zy9pbnN0YWdyYW0tc3ZncmVwby1jb20uc3ZnXCI7XG5pbXBvcnQgdHdpdHRlcnN2ZyBmcm9tIFwiLi4vc3ZnL3R3aXR0ZXItc3ZncmVwby1jb20uc3ZnXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5QYWdlKCkge1xuICAgIGNvbnN0IG1haW5QYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGludHJvZHVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgyaW50cm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IG9wZW5pbmdIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG9wZW5pbmdIb3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBjb25zdCBtb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHR1ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IHdlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgdGh1cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGZyaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3Qgc2F0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBzdW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gICAgbWFpblBhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1wYWdlLWNvbnRhaW5lcicpO1xuICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWNvbnRhaW5lcicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgYm9keUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2R5LWNvbnRhaW5lcicpO1xuICAgIGludHJvZHVjdGlvbi5jbGFzc0xpc3QuYWRkKCdpbnRyb2R1Y3Rpb24nKTtcbiAgICBvcGVuaW5nSG91cnMuY2xhc3NMaXN0LmFkZCgnb3BlbmluZy1ob3VycycpO1xuICAgIG9wZW5pbmdIb3Vyc1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgbGlzdC5jbGFzc0xpc3QuYWRkKCdsaXN0Jyk7XG4gICAgbW9uLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKVxuICAgIHR1ZXMuY2xhc3NMaXN0LmFkZCgnaXRlbScpXG4gICAgd2VkLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKVxuICAgIHRodXJzLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKVxuICAgIGZyaS5jbGFzc0xpc3QuYWRkKCdpdGVtJylcbiAgICBzYXQuY2xhc3NMaXN0LmFkZCgnaXRlbScpXG4gICAgc3VuLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKVxuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gdGhlIEJyZWFrZmFzdCBCYXJcIjtcbiAgICBoMmludHJvLnRleHRDb250ZW50ID0gXCJPcGVuZWQgaW4gMTk1NS4gT25seSB0aGUgYmVzdCBicmVha2Zhc3RzIGFyZSBzZXJ2ZWQgaGVyZS5cIjtcbiAgICBvcGVuaW5nSG91cnNUaXRsZS50ZXh0Q29udGVudCA9IFwiT3BlbmluZyBIb3VyczpcIjtcbiAgICBtb24udGV4dENvbnRlbnQgPSBcIk1vbmRheTogQ2xvc2VkXCI7XG4gICAgdHVlcy50ZXh0Q29udGVudCA9IFwiVHVlc2RheTogMDkwMC0xMjAwXCI7XG4gICAgd2VkLnRleHRDb250ZW50ID0gXCJXZWRuZXNkYXk6IDA5MDAtMTIwMFwiO1xuICAgIHRodXJzLnRleHRDb250ZW50ID0gXCJUaHVyc2RheTogMDkwMC0xMjAwXCI7XG4gICAgZnJpLnRleHRDb250ZW50ID0gXCJGcmlkYXk6IDA5MDAtMTIwMFwiO1xuICAgIHNhdC50ZXh0Q29udGVudCA9IFwiU2F0dXJkYXk6IDA5MDAtMTIwMFwiO1xuICAgIHN1bi50ZXh0Q29udGVudCA9IFwiU3VuZGF5OiAwOTAwLTEyMDBcIjtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobW9uKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKHR1ZXMpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQod2VkKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKHRodXJzKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGZyaSk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChzYXQpO1xuICAgIGxpc3QuYXBwZW5kQ2hpbGQoc3VuKTtcbiAgICBvcGVuaW5nSG91cnMuYXBwZW5kQ2hpbGQob3BlbmluZ0hvdXJzVGl0bGUpO1xuICAgIG9wZW5pbmdIb3Vycy5hcHBlbmRDaGlsZChsaXN0KTtcblxuICAgIGludHJvZHVjdGlvbi5hcHBlbmRDaGlsZChoMmludHJvKTtcbiAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKGludHJvZHVjdGlvbik7XG4gICAgYm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVuaW5nSG91cnMpO1xuXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIG1haW5QYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgICBtYWluUGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2R5Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBtYWluUGFnZUNvbnRhaW5lclxufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHNpZ25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBpbnN0YWdyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCB0d2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBmYi5zcmMgPSBmYnN2ZztcbiAgICBpbnN0YWdyYW0uc3JjID0gaW5zdGFzdmc7XG4gICAgdHdpdHRlci5zcmMgPSB0d2l0dGVyc3ZnO1xuICAgIGZiLmFsdCA9IFwiRmFjZWJvb2sgc3ZnXCI7XG4gICAgaW5zdGFncmFtLmFsdCA9IFwiSW5zdGFncmFtIHN2Z1wiO1xuICAgIHR3aXR0ZXIuYWx0ID0gXCJUd2l0dGVyIHN2Z1wiO1xuXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgIHNpZ25zLmNsYXNzTGlzdC5hZGQoJ3NpZ25zLWNvbnRhaW5lcicpO1xuICAgIGZiLmNsYXNzTGlzdC5hZGQoJ3N2ZycpO1xuICAgIGluc3RhZ3JhbS5jbGFzc0xpc3QuYWRkKCdzdmcnKTtcbiAgICB0d2l0dGVyLmNsYXNzTGlzdC5hZGQoJ3N2ZycpO1xuXG4gICAgaDEudGV4dENvbnRlbnQgPSBcIkZpbmQgdXMhXCI7XG5cbiAgICBzaWducy5hcHBlbmRDaGlsZChmYik7XG4gICAgc2lnbnMuYXBwZW5kQ2hpbGQoaW5zdGFncmFtKTtcbiAgICBzaWducy5hcHBlbmRDaGlsZCh0d2l0dGVyKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoaDEpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChzaWducyk7XG4gICAgXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5mdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlTWFpblBhZ2UoKTtcbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgcmV0dXJuIGVsZW1lbnRcbn1cblxuZXhwb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5jbGFzcyBGb29kaXRlbSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGNyZWF0ZUZvb2RJdGVtKCkge1xuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgdG9wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG5hbWVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwcmljZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJmb29kLWl0ZW1cIik7XG4gICAgICAgIHRvcERpdi5jbGFzc0xpc3QuYWRkKCd0b3AnKTtcbiAgICAgICAgbmFtZVAuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICAgICAgICBwcmljZVAuY2xhc3NMaXN0LmFkZCgncHJpY2UnKTtcbiAgICAgICAgZGVzY3JpcHRpb25QLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIFxuICAgICAgICBuYW1lUC50ZXh0Q29udGVudCA9IHRoaXMubmFtZTtcbiAgICAgICAgcHJpY2VQLnRleHRDb250ZW50ID0gdGhpcy5wcmljZTtcbiAgICAgICAgZGVzY3JpcHRpb25QLnRleHRDb250ZW50ID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgXG4gICAgICAgIHRvcERpdi5hcHBlbmRDaGlsZChuYW1lUCk7XG4gICAgICAgIHRvcERpdi5hcHBlbmRDaGlsZChwcmljZVApO1xuICAgICAgICBcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZCh0b3BEaXYpO1xuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUCk7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgbWFpblBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzdGFydGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgY29uc3QgbWFpbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IGNvZmZlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICAvLyBhZGQgY2xhc3NlcyB0byBhbGwgZWxlbWVudHNcbiAgICBtYWluUGFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFpbi1wYWdlLWNvbnRhaW5lclwiKTtcbiAgICBzdGFydGVycy5jbGFzc0xpc3QuYWRkKFwic3RhcnRlcnNcIik7XG4gICAgbWFpbnMuY2xhc3NMaXN0LmFkZChcIm1haW5zXCIpO1xuICAgIGNvZmZlZS5jbGFzc0xpc3QuYWRkKFwiY29mZmVlXCIpO1xuXG4gICAgLy8gY3JlYXRlIGZvb2QtaXRlbVxuICAgIGNvbnN0IGZyaWVzID0gbmV3IEZvb2RpdGVtKFwiVHJ1ZmZsZSBGcmllc1wiLCAxMiwgXCJQb3RhdG8gRnJpZXMsIFdoaXRlIFRydWZmbGUgT2lsLCBHcmF0ZWQgUGFybWVzYW5cIik7XG4gICAgY29uc3Qgc2FsYWQgPSBuZXcgRm9vZGl0ZW0oXCJCYXIncyBTYWxhZFwiLCAxMiwgXCJNZXNjbHVuIEF2b2NhZG8sIENoZXJyeSBUb21hdG8sIFB1bXBraW4gc2VlZHMsIEJhYnkgQ29ybiwgU2VzYW1lIERyZXNzaW5nXCIpO1xuICAgIGNvbnN0IGdyYWluID0gbmV3IEZvb2RpdGVtKFwiU2FsbW9uIEdyYWluIEJvd2xcIiwgMTUsIFwiUXVpbm9hLCBNaXNvIFNhbG1vbiwgRnVyaWtha2UsIEhhbmp1a3UgRWdnLCBSb2FzdGVkIFNlc2FtZSBEcmVzc2luZ1wiKTtcbiAgICBjb25zdCBicmVha2Zhc3QgPSBuZXcgRm9vZGl0ZW0oXCJCYXIncyBCcmVha2Zhc3RcIiwgMjAsIFwiTGlnaHQgQnV0dGVyZWQgU291cmRvdWdoLCBUYXRlciBUb3RzLCBCYWNvbiBTdGVhaywgUG9yayBTYXVzYWdlcywgU2NyYW1ibGVkIEVnZ3NcIik7XG4gICAgY29uc3QgcmlnYXRvbmkgPSBuZXcgRm9vZGl0ZW0oXCJTcGljeSBUb21hdG8gQ3JhYiBSaWdhdG9uaVwiLCAyMCwgXCJSaWdhdG9uaSwgQmx1ZSBTd2ltbWVyIENyYWIsIFRvbWF0byBTYXVjZSwgV2hpdGUgV2luZSwgR2FybGljLCBQYXJtZXNhblwiKTtcbiAgICBjb25zdCBzYW5kd2ljaCA9IG5ldyBGb29kaXRlbShcIkdyaWxsZWQgQ2hlZXNlIFNhbmR3aWNoXCIsIDE1LCBcIkJ1dHRlcmVkIFNvdXJkb3VnaCwgQ2hlZGRhciwgQmFjb24gU3RlYWssIE11c3RhcmQsIENhcmFtZWxpc2VkIE9uaW9uc1wiKTtcbiAgICBjb25zdCBhZmZvZ2F0byA9IG5ldyBGb29kaXRlbShcIkJhcidzIEFmZm9nYXRvXCIsIDEwLCBcIkVzcHJlc3NvLCBDaG9jb2xhdGUgU2F1Y2UgYW5kIENvb2traWVzICYgQ3JlYW0gSWNlIENyZWFtXCIpO1xuICAgIGNvbnN0IGNvbGRicmV3ID0gbmV3IEZvb2RpdGVtKFwiU3BlY2lhbHR5IENvbGQgQnJld1wiLCA4LCBcIlNlYXNvbmFsXCIpO1xuXG4gICAgLy8gYXBwZW5kIGZvb2QtaXRlbXMgdG8gdWxcbiAgICBzdGFydGVycy5hcHBlbmRDaGlsZChmcmllcy5jcmVhdGVGb29kSXRlbSgpKTtcbiAgICBzdGFydGVycy5hcHBlbmRDaGlsZChzYWxhZC5jcmVhdGVGb29kSXRlbSgpKTtcbiAgICBzdGFydGVycy5hcHBlbmRDaGlsZChncmFpbi5jcmVhdGVGb29kSXRlbSgpKTtcblxuICAgIG1haW5zLmFwcGVuZENoaWxkKGJyZWFrZmFzdC5jcmVhdGVGb29kSXRlbSgpKTtcbiAgICBtYWlucy5hcHBlbmRDaGlsZChyaWdhdG9uaS5jcmVhdGVGb29kSXRlbSgpKTtcbiAgICBtYWlucy5hcHBlbmRDaGlsZChzYW5kd2ljaC5jcmVhdGVGb29kSXRlbSgpKTtcblxuICAgIGNvZmZlZS5hcHBlbmRDaGlsZChhZmZvZ2F0by5jcmVhdGVGb29kSXRlbSgpKTtcbiAgICBjb2ZmZWUuYXBwZW5kQ2hpbGQoY29sZGJyZXcuY3JlYXRlRm9vZEl0ZW0oKSk7XG5cbiAgICAvLyBhcHBlbmQgdWwgdG8gbWFpbnBhZ2Vjb250YWluZXJcbiAgICBtYWluUGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydGVycyk7XG4gICAgbWFpblBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbnMpO1xuICAgIG1haW5QYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvZmZlZSk7XG5cbiAgICByZXR1cm4gbWFpblBhZ2VDb250YWluZXJcbn1cblxuZXhwb3J0IHsgY3JlYXRlTWVudSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlRmVlZGJhY2tQYWdlIH0gZnJvbSBcIi4vZmVlZGJhY2suanNcIjtcblxuZnVuY3Rpb24gcmVzdGF1cmFudFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVcIik7XG4gICAgY29uc3QgZmVlZGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWRiYWNrXCIpO1xuXG4gICAgY29uc3QgcmVzZXRQYWdlID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGhvbWUuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgZmVlZGJhY2suY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc3BsYXlIb21lID0gKCkgPT4ge1xuICAgICAgICByZXNldFBhZ2UoY29udGVudCk7XG4gICAgICAgIGNvbnN0IGhvbWVwYWdlID0gY3JlYXRlSG9tZVBhZ2UoKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChob21lcGFnZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzcGxheU1lbnUgPSAoKSA9PiB7XG4gICAgICAgIHJlc2V0UGFnZShjb250ZW50KTtcbiAgICAgICAgY29uc3QgbWVudSA9IGNyZWF0ZU1lbnUoKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNwbGF5RmVlZGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIHJlc2V0UGFnZShjb250ZW50KTtcbiAgICAgICAgY29uc3QgZmVlZGJhY2sgPSBjcmVhdGVGZWVkYmFja1BhZ2UoKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChmZWVkYmFjayk7XG4gICAgfVxuXG4gICAgaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgcmVzZXRCdXR0b24oKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgICBkaXNwbGF5SG9tZSgpO1xuICAgIH0pO1xuICAgIFxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHJlc2V0QnV0dG9uKCk7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgZGlzcGxheU1lbnUoKTtcbiAgICB9KTtcblxuICAgIGZlZWRiYWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICByZXNldEJ1dHRvbigpO1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIGRpc3BsYXlGZWVkYmFjaygpO1xuICAgIH0pO1xuXG4gICAgZGlzcGxheUhvbWUoKTtcbn1cblxucmVzdGF1cmFudFBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==