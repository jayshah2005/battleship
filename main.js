/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/setup.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/setup.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#setup{
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

#setupGameGameboard{

}

.setupButton{
    position: absolute;
    top: 85%;
    left: 85%;

    font-size: 3rem;

    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/setup.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,OAAO;IACP,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;;AAEA;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;;IAET,eAAe;;IAEf,kBAAkB;AACtB","sourcesContent":["#setup{\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n}\n\n#setupGameGameboard{\n\n}\n\n.setupButton{\n    position: absolute;\n    top: 85%;\n    left: 85%;\n\n    font-size: 3rem;\n\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/startScreen.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/startScreen.css ***!
  \*******************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/ITC_Machine_Font/ITC Machine Bold.ttf */ "./src/assets/ITC_Machine_Font/ITC Machine Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'battleship';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#startScreen{
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50%;

    max-width: fit-content;
    margin: auto;
    box-shadow: 10px 10px lightblue;
    background-color: rgb(251, 167, 10);
}

#startScreenTitle{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'battleship';
}

#startScreenTitle > div {
    position: relative;
    font-size: 4rem;
}

#battleshipLogoImg{
    display: flex;
    width: 20%;
}

#startScreenOptions{
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
}

#startScreenPlayWithFriend{
    display: flex;
    gap:10px;
    flex-direction: column;
    align-items: center;
    
    font-family: 'battleship';

    box-sizing:border-box;
}

#startScreenPlayWithFriend input{
    width: 50%;
    border: 0;
    border-bottom: 1px solid black;
    outline: 0;
    background: transparent;
}


#startScreenPlayAgainstComputer{
    justify-content: center;
    align-self: center;
}


/* CSS */
.button-5 {
display: inline-flex;
  background-clip: padding-box;
  background-color: #fa6400;
  border: 0px;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: 'battleship', system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 2rem;
  justify-content: center;
  margin: 0;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align:auto;
  position: relative;
}

.button-5:hover,
.button-5:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

.button-5:hover {
  transform: translateY(-1px);
}

.button-5:active {
  background-color: #c85000;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
  transform: translateY(0);
}
`, "",{"version":3,"sources":["webpack://./src/startScreen.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAA4D;AAChE;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,WAAW;;IAEX,sBAAsB;IACtB,YAAY;IACZ,+BAA+B;IAC/B,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,aAAa;IACb,OAAO;IACP,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,sBAAsB;IACtB,mBAAmB;;IAEnB,yBAAyB;;IAEzB,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,8BAA8B;IAC9B,UAAU;IACV,uBAAuB;AAC3B;;;AAGA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;;AAGA,QAAQ;AACR;AACA,oBAAoB;EAClB,4BAA4B;EAC5B,yBAAyB;EACzB,WAAW;EACX,qBAAqB;EACrB,2CAA2C;EAC3C,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,wGAAwG;EACxG,eAAe;EACf,uBAAuB;EACvB,SAAS;EACT,qBAAqB;EACrB,qBAAqB;EACrB,iBAAiB;EACjB,yBAAyB;EACzB,0BAA0B;EAC1B,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;EAEE,yBAAyB;EACzB,yCAAyC;AAC3C;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,wCAAwC;EACxC,wBAAwB;AAC1B","sourcesContent":["@font-face {\n    font-family: 'battleship';\n    src: url('./assets/ITC_Machine_Font/ITC\\ Machine\\ Bold.ttf');\n}\n\n#startScreen{\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n    height: 50%;\n\n    max-width: fit-content;\n    margin: auto;\n    box-shadow: 10px 10px lightblue;\n    background-color: rgb(251, 167, 10);\n}\n\n#startScreenTitle{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: 'battleship';\n}\n\n#startScreenTitle > div {\n    position: relative;\n    font-size: 4rem;\n}\n\n#battleshipLogoImg{\n    display: flex;\n    width: 20%;\n}\n\n#startScreenOptions{\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: space-around;\n}\n\n#startScreenPlayWithFriend{\n    display: flex;\n    gap:10px;\n    flex-direction: column;\n    align-items: center;\n    \n    font-family: 'battleship';\n\n    box-sizing:border-box;\n}\n\n#startScreenPlayWithFriend input{\n    width: 50%;\n    border: 0;\n    border-bottom: 1px solid black;\n    outline: 0;\n    background: transparent;\n}\n\n\n#startScreenPlayAgainstComputer{\n    justify-content: center;\n    align-self: center;\n}\n\n\n/* CSS */\n.button-5 {\ndisplay: inline-flex;\n  background-clip: padding-box;\n  background-color: #fa6400;\n  border: 0px;\n  border-radius: .25rem;\n  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  font-family: 'battleship', system-ui,-apple-system,system-ui,\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n  font-size: 2rem;\n  justify-content: center;\n  margin: 0;\n  text-decoration: none;\n  transition: all 250ms;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align:auto;\n  position: relative;\n}\n\n.button-5:hover,\n.button-5:focus {\n  background-color: #fb8332;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;\n}\n\n.button-5:hover {\n  transform: translateY(-1px);\n}\n\n.button-5:active {\n  background-color: #c85000;\n  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;\n  transform: translateY(0);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/ITC_Machine_Font/ITC Machine Bold.ttf */ "./src/assets/ITC_Machine_Font/ITC Machine Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/waterBg.jpg */ "./src/assets/waterBg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'battleship';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

html{
    height: 100%;
}

body{
    background-color: lightgrey;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    display: flex;
    height: 100%;
    margin: 0px;
}

.gameboard{ 
    display: grid;
    grid-template-columns: repeat(9, auto);
    grid-template-rows: repeat(9, auto);
    height: 50vh;
    width: 50vh;
    
}

.box {
    height: auto;
    width: auto;
    background-color: hsl(188, 84%, 50%);
    border: 1px solid black;
}

#game{
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

#currPlayer{
    display: flex;
    position: absolute;
    color: rgb(251, 167, 10);
    font-family: 'battleship';
    letter-spacing: 1px;
    font-size: 1.5rem;

    top: 90%;
}

.playerName{
    font-family: 'battleship';
    font-size: 3rem;
    text-align: center;
}

#randomize{
    background-color: grey;
    letter-spacing: 1px;
}

.ship{
    background-color: grey;
}

.clicked{
    background: transparent;
}

.hit{
    background: rgba(255, 0, 0, 0.5);
}

#winnerText{
    display: flex;
    flex: 1;
    font-family: 'battleship';
    letter-spacing: 1px;
    font-size: 2rem;
    justify-content: center;
    align-self: center;
}

#endScreen{
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50%;

    max-width: fit-content;
    margin: auto;
    box-shadow: 10px 10px lightblue;
    background-color: rgb(251, 167, 10);

    justify-content: center;
}

#endScreenTitle{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'battleship';

    font-size: 3rem;
}


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,4CAA4D;AAChE;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,2BAA2B;IAC3B,yDAA6C;IAC7C,aAAa;IACb,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,YAAY;IACZ,WAAW;;AAEf;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,oCAAoC;IACpC,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,OAAO;IACP,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,wBAAwB;IACxB,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;;IAEjB,QAAQ;AACZ;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,OAAO;IACP,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,WAAW;;IAEX,sBAAsB;IACtB,YAAY;IACZ,+BAA+B;IAC/B,mCAAmC;;IAEnC,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;;IAEzB,eAAe;AACnB","sourcesContent":["@font-face {\n    font-family: 'battleship';\n    src: url('./assets/ITC_Machine_Font/ITC\\ Machine\\ Bold.ttf');\n}\n\nhtml{\n    height: 100%;\n}\n\nbody{\n    background-color: lightgrey;\n    background-image: url('./assets/waterBg.jpg');\n    display: flex;\n    height: 100%;\n    margin: 0px;\n}\n\n.gameboard{ \n    display: grid;\n    grid-template-columns: repeat(9, auto);\n    grid-template-rows: repeat(9, auto);\n    height: 50vh;\n    width: 50vh;\n    \n}\n\n.box {\n    height: auto;\n    width: auto;\n    background-color: hsl(188, 84%, 50%);\n    border: 1px solid black;\n}\n\n#game{\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n}\n\n#currPlayer{\n    display: flex;\n    position: absolute;\n    color: rgb(251, 167, 10);\n    font-family: 'battleship';\n    letter-spacing: 1px;\n    font-size: 1.5rem;\n\n    top: 90%;\n}\n\n.playerName{\n    font-family: 'battleship';\n    font-size: 3rem;\n    text-align: center;\n}\n\n#randomize{\n    background-color: grey;\n    letter-spacing: 1px;\n}\n\n.ship{\n    background-color: grey;\n}\n\n.clicked{\n    background: transparent;\n}\n\n.hit{\n    background: rgba(255, 0, 0, 0.5);\n}\n\n#winnerText{\n    display: flex;\n    flex: 1;\n    font-family: 'battleship';\n    letter-spacing: 1px;\n    font-size: 2rem;\n    justify-content: center;\n    align-self: center;\n}\n\n#endScreen{\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n    height: 50%;\n\n    max-width: fit-content;\n    margin: auto;\n    box-shadow: 10px 10px lightblue;\n    background-color: rgb(251, 167, 10);\n\n    justify-content: center;\n}\n\n#endScreenTitle{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: 'battleship';\n\n    font-size: 3rem;\n}\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/setup.css":
/*!***********************!*\
  !*** ./src/setup.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./setup.css */ "./node_modules/css-loader/dist/cjs.js!./src/setup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/startScreen.css":
/*!*****************************!*\
  !*** ./src/startScreen.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_startScreen_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./startScreen.css */ "./node_modules/css-loader/dist/cjs.js!./src/startScreen.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_startScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_startScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_startScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_startScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/js/objects/gameboard.js":
/*!*************************************!*\
  !*** ./src/js/objects/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/js/objects/ship.js");


class Gameboard{

    
    ships;  // An gameboardArray of objects which contain ships, their starting location and it'a axis
    boardStatus; // Report whether or not all of their ships have been sunk.
    static GAMEBOARD_LENGTH = 9;
    
    /**
     * An 2D array that keeps track of the gameboard. arr[x][y]
     * -2 means nothing is placed on that cell and it has been hit
     * -1 means nothing is placed on that cell
     * 0 means a ship did occupy that space but it was hit there
     * 1-n means a ship is currently occuping that space
    */
    gameboardArr;  

    constructor(){
        this.initalizeBoard();
        this.ships = [];
        this.boardStatus = false;
    }

    receiveAttack(x, y){

        let val = this.gameboardArr[x][y] 
        let validAttack = this.validataAttack(x, y)     

        if(!validAttack) return "Invalid Attack"

        if(val == -1) {
            this.gameboardArr[x][y] = -2
            return false
        } else {
            
            this.ships[this.gameboardArr[x][y] - 1].ship.hit()

            this.#updateBoardStatus()

            this.gameboardArr[x][y] = 0;
            return true;
        }

    }

    #updateBoardStatus(){        
        this.boardStatus = this.ships.reduce((acc, curr) => acc && curr.ship.isSunk(), true)
    }

    validataAttack(x, y){   
        
        let val = this.gameboardArr[x][y]
        
        if(val == -1 || val > 0) return true
        else return false;
        
    }

    /**
     * Checks if given coordinates are valid for ship of a given length
     * @param {gameboardArr} start The gameboardArray of x and y coordinates where we start
     * @param {gameboardArr} end The gameboardArray of x and y coordinates where we end
     * @returns true if the given coordinates are valid
     */
    #coordinatesValidator(start, end){

        // Checks if all coordinates are within the range of valid coordinates
        if (
            start.some(elem => elem >= Gameboard.GAMEBOARD_LENGTH || elem < 0) || 
            end.some(elem => elem >= Gameboard.GAMEBOARD_LENGTH || elem < 0)
        ) return false;    

        return true
    }

    #collisionChecker(start, length, axis){

        let check = false;
        let x = start[0], y = start[1]

        quit:
        while (true) {
            
            if (axis === 'x') {
                if (x - start[0] === length) break quit;
                check = this.gameboardArr[x][y] > 0 ? true : false;
                x++;
            } else {
                if (y - start[1] === length) break quit;
                check = this.gameboardArr[x][y] > 0 ? true : false;                
                y++;
            }            
        }

        return check;
    }

    /**
     * The function places a ship of given length between start and end points
     * @param {gameboardArr} start The gameboardArray of x and y coordinates where we start
     * @param {gameboardArr} end The gameboardArray of x and y coordinates where we end
     * @param {int} length The length of the ship to be placed
     */
    placeShip(start, length, axis){

        let end;

        if(axis == 'x') end = [start[0] + length, start[1]]
        else end = [start[0], start[1] + length]

        if(!this.#coordinatesValidator(start, end)) return 'Invalid - Ship Out of Bounds'
        if(this.#collisionChecker(start, length, axis)) return "Invalid - Ship leads a collision"
 
        let ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(length);

        this.ships.push({
            ship: ship,
            pos: start,
            axis: axis
        })        

        let x = start[0], y = start[1]

        quit:
        while (true) {
            
            if (axis === 'x') {
                if (x - start[0] === length) break quit;
                this.gameboardArr[x][y] = this.ships.length;
                x++;
            } else {
                if (y - start[1] === length) break quit;
                this.gameboardArr[x][y] = this.ships.length;
                y++;

            }            
        }

        return "Ship placed successfully"
    }

    /**
     * Create a 10x10 gameboardArray which will act as the Gameboard
     */
    initalizeBoard(){
        this.gameboardArr = []
        this.ships = []

        for (let i = 0; i < 9; i++) {
            const row = []; // Create a new row
            for (let j = 0; j < 9; j++) {
                row.push(-1)
            }
            this.gameboardArr.push(row); // Add the row to the 2D gameboardArray
        }
    }
}

/***/ }),

/***/ "./src/js/objects/player.js":
/*!**********************************!*\
  !*** ./src/js/objects/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ "./src/js/objects/gameboard.js");


class Player{

    gameboard;

    constructor(){
        this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard()        
    }

}

/***/ }),

/***/ "./src/js/objects/ship.js":
/*!********************************!*\
  !*** ./src/js/objects/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship{
    constructor(length){
        this.length = length;
        this.numOfHits = 0;
        this.sunk = false;
    }

    hit() {
        this.numOfHits++;

        if(this.numOfHits == this.length) this.sunk = true;

        return this.numOfHits;
    }

    isSunk() {
        if(this.numOfHits >= this.length) this.sunk = true

        return this.sunk
    }
}

/***/ }),

/***/ "./src/assets/ITC_Machine_Font/ITC Machine Bold.ttf":
/*!**********************************************************!*\
  !*** ./src/assets/ITC_Machine_Font/ITC Machine Bold.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b8aca8dedb4fb3b3098.ttf";

/***/ }),

/***/ "./src/assets/battleship_img_logo.png":
/*!********************************************!*\
  !*** ./src/assets/battleship_img_logo.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf517523747a3c716524.png";

/***/ }),

/***/ "./src/assets/waterBg.jpg":
/*!********************************!*\
  !*** ./src/assets/waterBg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "338e6c1f83528d0927c6.jpg";

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _startScreen_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startScreen.css */ "./src/startScreen.css");
/* harmony import */ var _setup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup.css */ "./src/setup.css");
/* harmony import */ var _js_objects_player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/objects/player.js */ "./src/js/objects/player.js");
/* harmony import */ var _assets_battleship_img_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/battleship_img_logo.png */ "./src/assets/battleship_img_logo.png");
/* harmony import */ var _js_objects_gameboard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/objects/gameboard.js */ "./src/js/objects/gameboard.js");







let player1;
let player2;
let movePlayed = false; // Tracks if the current player made a valid move
let currPlayer; // Tracks the current player
let againstComputer = true; // Tracks if the game is against a computer
let player2SetUp = false;

 createStartScreen()


function setUp(player1Value, player2Value){
    player1 = {
        name: player1Value,
        board: new _js_objects_gameboard_js__WEBPACK_IMPORTED_MODULE_5__.Gameboard(),
        boardDiv: document.getElementById(player1Value),
    }

    player2 = {
        name: player2Value,
        board: new _js_objects_gameboard_js__WEBPACK_IMPORTED_MODULE_5__.Gameboard(),
        boardDiv: document.getElementById(player2Value),
    }

    createSetUpScreen(player1)
}

/**
 * Initializes a new game by setting up all the variables and the DOM
 * @param {String} player1Value Name of player 1
 * @param {String} player2Value Name of Player 2
 */
function startGame(player1, player2){
    
    createGameBoard(player1.name, player2.name);

    player1.boardDiv = document.getElementById(player1.name);
    player2.boardDiv = document.getElementById(player2.name)
    currPlayer = player1;

    updateCurrentPlayerText(currPlayer)

    player1.boardDiv.addEventListener("click", () => {
        if(movePlayed){
            movePlayed = false
            currPlayer = player1
            updateCurrentPlayerText(currPlayer)
        }
    })

    player2.boardDiv.addEventListener("click", () => {
        if(movePlayed){
            movePlayed = false
            currPlayer = player2
            updateCurrentPlayerText(currPlayer)
            if(againstComputer){
                setTimeout(() => makeMoveAgainst(player1), 100);
            }
        }
    })
}

/**
 * Returns a random move that a player can make
 * @param {player object} player 
 */
function makeMoveAgainst(player){
    let x = Math.floor(Math.random() * 9);
    let y = Math.floor(Math.random() * 9);

    while(!player.board.validataAttack(x, y)){
        x = Math.floor(Math.random() * 9);
        y = Math.floor(Math.random() * 9);
    }

    document.getElementById(player.name + x + y).click()
}

function updateCurrentPlayerText(currPlayer){
    if(document.getElementById("currPlayer") != null){
        let div = document.querySelector("#currPlayer")
        div.innerHTML = currPlayer.name +"'s turn"
    } else {
        let game = document.querySelector("#game")
        let div = document.createElement("div")
        div.id = "currPlayer"
        div.innerHTML = currPlayer.name +"'s turn"

        game.appendChild(div)
    }
}

function createStartScreen() {
    // Create the main start screen container
    const startScreen = document.createElement("div");
    startScreen.id = "startScreen";
    
    // Create the title container
    const startScreenTitle = document.createElement("div");
    startScreenTitle.id = "startScreenTitle";
    
    const logoImg = document.createElement("img");
    logoImg.src = _assets_battleship_img_logo_png__WEBPACK_IMPORTED_MODULE_4__;
    logoImg.alt = "";
    logoImg.id = "battleshipLogoImg";
    
    const titleText = document.createElement("div");
    titleText.textContent = "Battleship";
    
    startScreenTitle.appendChild(logoImg);
    startScreenTitle.appendChild(titleText);
    
    // Create options container
    const startScreenOptions = document.createElement("div");
    startScreenOptions.id = "startScreenOptions";
    
    // Play with a friend section
    const startScreenPlayWithFriend = document.createElement("div");
    startScreenPlayWithFriend.id = "startScreenPlayWithFriend";
    
    const player1Input = document.createElement("input");
    player1Input.type = "text";
    player1Input.name = "player1";
    player1Input.id = "player1";
    player1Input.placeholder = "Player 1";
    
    const player2Input = document.createElement("input");
    player2Input.type = "text";
    player2Input.name = "player2";
    player2Input.id = "player2";
    player2Input.placeholder = "Player 2";
    
    startScreenPlayWithFriend.appendChild(player1Input);
    startScreenPlayWithFriend.appendChild(player2Input);
    
    // Play against computer section
    const startScreenPlayAgainstComputer = document.createElement("div");
    startScreenPlayAgainstComputer.id = "startScreenPlayAgainstComputer";
    startScreenPlayAgainstComputer.textContent = "Against Computer";
    
    const againstComputerCheckbox = document.createElement("input");
    againstComputerCheckbox.type = "checkbox";
    againstComputerCheckbox.id = "againstComputer";
    
    startScreenPlayAgainstComputer.appendChild(againstComputerCheckbox);
    
    // Append options to options container
    startScreenOptions.appendChild(startScreenPlayWithFriend);
    startScreenOptions.appendChild(startScreenPlayAgainstComputer);
    
    // Create start button
    const startGameButton = document.createElement("button");
    startGameButton.id = "startGame";
    startGameButton.classList.add("button-5");
    startGameButton.textContent = "Start!";
    
    // Append everything to the main start screen container
    startScreen.appendChild(startScreenTitle);
    startScreen.appendChild(startScreenOptions);
    startScreen.appendChild(startGameButton);
    
    // Append the start screen to the body or a specific container
    document.body.appendChild(startScreen);

    // Event listener to disable and clear Player 2 input when checkbox is checked
    againstComputerCheckbox.addEventListener("change", function() {
        if (this.checked) {
            player2Input.value = "";
            player2Input.disabled = true;
        } else {
            player2Input.disabled = false;
        }
    });

    // Event listener to remove start screen and save input values
    startGameButton.addEventListener("click", function() {
        let player1Value = player1Input.value || "Player 1";
        let player2Value = player2Input.value || "Player 2";
        againstComputer = againstComputerCheckbox.checked;

        if(againstComputer) player2Value = "Luffy"

        setUp(player1Value, player2Value);
        
        document.body.removeChild(startScreen);
    });
}

function createSetUpScreen(player) {
    // Get the container element
    const body = document.querySelector("body");

    const container = document.createElement("div")
    container.id = "setup"
    body.appendChild(container)

    // Create the setup options div
    const setupOptions = document.createElement("div");
    setupOptions.id = "setupGameOptions";
    container.appendChild(setupOptions);

    // Create the player name div
    const playerNameDiv = document.createElement("div");
    playerNameDiv.classList.add("playerName");
    playerNameDiv.textContent = player.name + " Layout";

    // Create the randomize button
    const randomizeButton = document.createElement("button");
    randomizeButton.classList.add("button-5");
    randomizeButton.id = "randomize";
    randomizeButton.textContent = "Randomize";

    randomizeButton.addEventListener("click", () => {
        initializeBoard(player);
        updateSetupGameBoard(player)
    })

    // Append elements to the parent div
    setupGameOptions.appendChild(playerNameDiv);
    setupGameOptions.appendChild(randomizeButton);


    // Create the game board div
    const gameBoard = document.createElement("div");
    gameBoard.classList.add("gameboard");
    gameBoard.id = "setupGameGameboard";
    
    // Generate 81 boxes dynamically
    for (let x = 0; x < 9; x++) {
        for(let y = 0; y < 9; y ++){
            const box = document.createElement("div");
            box.classList.add("box");
            box.id = `${player.name}${x}${y}`;
            gameBoard.appendChild(box);
        }
    }

    // Append game board to the container
    container.appendChild(gameBoard);

    // Create and append the start button
    const startButton = document.createElement("button");
    startButton.classList.add("button-5", "setupButton");
    startButton.textContent = "Next!";

    startButton.addEventListener("click", () => {        

        document.querySelector("#setup").remove()

        if(!player2SetUp){
            if(againstComputer) {
                initializeBoard(player2)
                startGame(player1, player2);
            }
            else createSetUpScreen(player2)

            player2SetUp = true;
        } else {
            startGame(player1, player2)
        }
    })

    container.appendChild(startButton);

    initializeBoard(player);
    updateSetupGameBoard(player)
}

function updateSetupGameBoard(player){
    const div = document.querySelector("#setupGameboard")
    let gameboard = player.board.gameboardArr;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if(gameboard[i][j] > 0){
                document.getElementById(player.name + i + j).classList = "box ship"
            } else{
                document.getElementById(player.name + i + j).classList = "box"
            }
        }
    }
}

// Creates two new game boards based on player names and removes the preivous boards if any
function createGameBoard(player1Name, player2Name) {

    const existingGame = document.getElementById("game");
    if (existingGame) {
        existingGame.remove();
    }

    const gameContainer = document.createElement("div");
    gameContainer.id = "game";

    function createPlayerBoard(playerName) {
        const playerDiv = document.createElement("div");
        playerDiv.id = playerName;

        const playerNameDiv = document.createElement("div");
        playerNameDiv.classList.add("playerName");
        playerNameDiv.textContent = playerName;

        const gameBoard = document.createElement("div");
        gameBoard.classList.add("gameboard");
        gameBoard.id = "setupGameGameboard";

        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                const box = document.createElement("div");
                box.classList.add("box");
                box.id = `${playerName}${x}${y}`;

                box.addEventListener("click", () => {

                    let playerAttacked = getPlayerNameFromId(box.id)

                    if(playerAttacked == currPlayer) {
                        alert("You can not attack your own board")
                        return
                    }

                    let {x, y} = getArrayElemFromId(box.id);
                    let hit = playerAttacked.board.receiveAttack(x, y)

                    if(hit != "Invalid Attack") {

                        if(hit) {
                            box.classList = "box clicked hit"

                            if(playerAttacked.board.boardStatus) {
                                document.querySelector("#game").remove();
                                displayWinner(currPlayer);
                            }

                        } else{
                            box.classList = "box clicked";
                        }
                        movePlayed = true
                    }
                    else {
                        alert("Please select a valid move!")
                    }
                })

                gameBoard.appendChild(box);
            }
        }

        playerDiv.appendChild(playerNameDiv)
        playerDiv.appendChild(gameBoard);
        return playerDiv;
    }

    gameContainer.appendChild(createPlayerBoard(player1Name));
    gameContainer.appendChild(createPlayerBoard(player2Name));
    document.body.appendChild(gameContainer);
}

// Gets the corresponding coordinates on the gameborad based on the DOM grid box
function getArrayElemFromId(id){
    return {
        x: id.slice(-2, -1),
        y: id.slice(-1)
    }
}

// Gets the player name the DOM grid box belongs to
function getPlayerNameFromId(id){
    return id.slice(0, -2) == player1.name ? player1 : player2
}

function initializeBoard(player){

    let start;
    let length;
    let axis;
    let returnVal;

    player.board.initalizeBoard();

    for(let i = 4; i < 8; i++){
        while(returnVal != "Ship placed successfully"){
            length = i;
            axis = Math.floor(Math.random() *2) == 0 ? "x" : "y";
            start = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)]

            returnVal = player.board.placeShip(start, length, axis);
        }   

        returnVal = "";
    }    
}

function displayWinner(player){
    // Create the main end screen container
    const endScreen = document.createElement("div");
    endScreen.id = "endScreen";

    // Create the title container
    const endScreenTitle = document.createElement("div");
    endScreenTitle.id = "endScreenTitle";

    // Create the logo image
    const logoImg = document.createElement("img");
    logoImg.src = _assets_battleship_img_logo_png__WEBPACK_IMPORTED_MODULE_4__;
    logoImg.alt = "";
    logoImg.id = "battleshipLogoImg";

    // Create the winner text
    const winnerText = document.createElement("div");
    winnerText.textContent = `${player.name} Wins!`;

    // Append elements to the title container
    endScreenTitle.appendChild(logoImg);
    endScreenTitle.appendChild(winnerText);

    // Append everything to the end screen container
    endScreen.appendChild(endScreenTitle);

    // Append the end screen to the body
    document.body.appendChild(endScreen);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLE9BQU87QUFDL0IsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBLDRCQUE0QixXQUFXLEVBQUUsRUFBRSxFQUFFLEVBQUU7O0FBRS9DOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixNQUFNO0FBQy9COztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsNERBQVE7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLGFBQWE7O0FBRTdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9zZXR1cC5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9zdGFydFNjcmVlbi5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvc2V0dXAuY3NzPzkyZTMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9zdGFydFNjcmVlbi5jc3M/MDM4OCIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9qcy9vYmplY3RzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2pzL29iamVjdHMvcGxheWVyLmpzIiwid2VicGFjazovL3Byb2plY3QvLi9zcmMvanMvb2JqZWN0cy9zaGlwLmpzIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI3NldHVwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNzZXR1cEdhbWVHYW1lYm9hcmR7XG5cbn1cblxuLnNldHVwQnV0dG9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDg1JTtcbiAgICBsZWZ0OiA4NSU7XG5cbiAgICBmb250LXNpemU6IDNyZW07XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2V0dXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUzs7SUFFVCxlQUFlOztJQUVmLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjc2V0dXB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2V0dXBHYW1lR2FtZWJvYXJke1xcblxcbn1cXG5cXG4uc2V0dXBCdXR0b257XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA4NSU7XFxuICAgIGxlZnQ6IDg1JTtcXG5cXG4gICAgZm9udC1zaXplOiAzcmVtO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvSVRDX01hY2hpbmVfRm9udC9JVEMgTWFjaGluZSBCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdiYXR0bGVzaGlwJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuI3N0YXJ0U2NyZWVue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNTAlO1xuXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IGxpZ2h0Ymx1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAxNjcsIDEwKTtcbn1cblxuI3N0YXJ0U2NyZWVuVGl0bGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdiYXR0bGVzaGlwJztcbn1cblxuI3N0YXJ0U2NyZWVuVGl0bGUgPiBkaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDRyZW07XG59XG5cbiNiYXR0bGVzaGlwTG9nb0ltZ3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbiNzdGFydFNjcmVlbk9wdGlvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbiNzdGFydFNjcmVlblBsYXlXaXRoRnJpZW5ke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOjEwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIGZvbnQtZmFtaWx5OiAnYmF0dGxlc2hpcCc7XG5cbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG59XG5cbiNzdGFydFNjcmVlblBsYXlXaXRoRnJpZW5kIGlucHV0e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5cbiNzdGFydFNjcmVlblBsYXlBZ2FpbnN0Q29tcHV0ZXJ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG5cbi8qIENTUyAqL1xuLmJ1dHRvbi01IHtcbmRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE2NDAwO1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDIpIDAgMXB4IDNweCAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogJ2JhdHRsZXNoaXAnLCBzeXN0ZW0tdWksLWFwcGxlLXN5c3RlbSxzeXN0ZW0tdWksXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDJyZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIHZlcnRpY2FsLWFsaWduOmF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJ1dHRvbi01OmhvdmVyLFxuLmJ1dHRvbi01OmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiODMzMjtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDAgNHB4IDEycHg7XG59XG5cbi5idXR0b24tNTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmJ1dHRvbi01OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjODUwMDA7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjA2KSAwIDJweCA0cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0YXJ0U2NyZWVuLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qiw0Q0FBNEQ7QUFDaEU7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXOztJQUVYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7SUFFbkIseUJBQXlCOztJQUV6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7OztBQUdBLFFBQVE7QUFDUjtBQUNBLG9CQUFvQjtFQUNsQiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsMkNBQTJDO0VBQzNDLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtFQUNmLHdHQUF3RztFQUN4RyxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix3Q0FBd0M7RUFDeEMsd0JBQXdCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2JhdHRsZXNoaXAnO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvSVRDX01hY2hpbmVfRm9udC9JVENcXFxcIE1hY2hpbmVcXFxcIEJvbGQudHRmJyk7XFxufVxcblxcbiNzdGFydFNjcmVlbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuXFxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IGxpZ2h0Ymx1ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMTY3LCAxMCk7XFxufVxcblxcbiNzdGFydFNjcmVlblRpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ2JhdHRsZXNoaXAnO1xcbn1cXG5cXG4jc3RhcnRTY3JlZW5UaXRsZSA+IGRpdiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4jYmF0dGxlc2hpcExvZ29JbWd7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyMCU7XFxufVxcblxcbiNzdGFydFNjcmVlbk9wdGlvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jc3RhcnRTY3JlZW5QbGF5V2l0aEZyaWVuZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjEwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbiAgICBmb250LWZhbWlseTogJ2JhdHRsZXNoaXAnO1xcblxcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxufVxcblxcbiNzdGFydFNjcmVlblBsYXlXaXRoRnJpZW5kIGlucHV0e1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgb3V0bGluZTogMDtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcblxcblxcbiNzdGFydFNjcmVlblBsYXlBZ2FpbnN0Q29tcHV0ZXJ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcblxcbi8qIENTUyAqL1xcbi5idXR0b24tNSB7XFxuZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhNjQwMDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjAyKSAwIDFweCAzcHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnYmF0dGxlc2hpcCcsIHN5c3RlbS11aSwtYXBwbGUtc3lzdGVtLHN5c3RlbS11aSxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIHZlcnRpY2FsLWFsaWduOmF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5idXR0b24tNTpob3ZlcixcXG4uYnV0dG9uLTU6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiODMzMjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwIDRweCAxMnB4O1xcbn1cXG5cXG4uYnV0dG9uLTU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4uYnV0dG9uLTU6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjODUwMDA7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIC4wNikgMCAycHggNHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL0lUQ19NYWNoaW5lX0ZvbnQvSVRDIE1hY2hpbmUgQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy93YXRlckJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnYmF0dGxlc2hpcCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbmh0bWx7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5nYW1lYm9hcmR7IFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOSwgYXV0byk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSwgYXV0byk7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIHdpZHRoOiA1MHZoO1xuICAgIFxufVxuXG4uYm94IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4OCwgODQlLCA1MCUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4jZ2FtZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jY3VyclBsYXllcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogcmdiKDI1MSwgMTY3LCAxMCk7XG4gICAgZm9udC1mYW1pbHk6ICdiYXR0bGVzaGlwJztcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuXG4gICAgdG9wOiA5MCU7XG59XG5cbi5wbGF5ZXJOYW1le1xuICAgIGZvbnQtZmFtaWx5OiAnYmF0dGxlc2hpcCc7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3JhbmRvbWl6ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5zaGlwe1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG5cbi5jbGlja2Vke1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaGl0e1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xufVxuXG4jd2lubmVyVGV4dHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgZm9udC1mYW1pbHk6ICdiYXR0bGVzaGlwJztcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbiNlbmRTY3JlZW57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG5cbiAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggbGlnaHRibHVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDE2NywgMTApO1xuXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNlbmRTY3JlZW5UaXRsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ2JhdHRsZXNoaXAnO1xuXG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qiw0Q0FBNEQ7QUFDaEU7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHlEQUE2QztJQUM3QyxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixXQUFXOztBQUVmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsaUJBQWlCOztJQUVqQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXOztJQUVYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLG1DQUFtQzs7SUFFbkMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIseUJBQXlCOztJQUV6QixlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2JhdHRsZXNoaXAnO1xcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvSVRDX01hY2hpbmVfRm9udC9JVENcXFxcIE1hY2hpbmVcXFxcIEJvbGQudHRmJyk7XFxufVxcblxcbmh0bWx7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL3dhdGVyQmcuanBnJyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5nYW1lYm9hcmR7IFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg5LCBhdXRvKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSwgYXV0byk7XFxuICAgIGhlaWdodDogNTB2aDtcXG4gICAgd2lkdGg6IDUwdmg7XFxuICAgIFxcbn1cXG5cXG4uYm94IHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDE4OCwgODQlLCA1MCUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2dhbWV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY3VyclBsYXllcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogcmdiKDI1MSwgMTY3LCAxMCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnYmF0dGxlc2hpcCc7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcblxcbiAgICB0b3A6IDkwJTtcXG59XFxuXFxuLnBsYXllck5hbWV7XFxuICAgIGZvbnQtZmFtaWx5OiAnYmF0dGxlc2hpcCc7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jcmFuZG9taXple1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4uc2hpcHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLmNsaWNrZWR7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uaGl0e1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG59XFxuXFxuI3dpbm5lclRleHR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGZvbnQtZmFtaWx5OiAnYmF0dGxlc2hpcCc7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2VuZFNjcmVlbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuXFxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IGxpZ2h0Ymx1ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMTY3LCAxMCk7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jZW5kU2NyZWVuVGl0bGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnYmF0dGxlc2hpcCc7XFxuXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NldHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NldHVwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdGFydFNjcmVlbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdGFydFNjcmVlbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJke1xuXG4gICAgXG4gICAgc2hpcHM7ICAvLyBBbiBnYW1lYm9hcmRBcnJheSBvZiBvYmplY3RzIHdoaWNoIGNvbnRhaW4gc2hpcHMsIHRoZWlyIHN0YXJ0aW5nIGxvY2F0aW9uIGFuZCBpdCdhIGF4aXNcbiAgICBib2FyZFN0YXR1czsgLy8gUmVwb3J0IHdoZXRoZXIgb3Igbm90IGFsbCBvZiB0aGVpciBzaGlwcyBoYXZlIGJlZW4gc3Vuay5cbiAgICBzdGF0aWMgR0FNRUJPQVJEX0xFTkdUSCA9IDk7XG4gICAgXG4gICAgLyoqXG4gICAgICogQW4gMkQgYXJyYXkgdGhhdCBrZWVwcyB0cmFjayBvZiB0aGUgZ2FtZWJvYXJkLiBhcnJbeF1beV1cbiAgICAgKiAtMiBtZWFucyBub3RoaW5nIGlzIHBsYWNlZCBvbiB0aGF0IGNlbGwgYW5kIGl0IGhhcyBiZWVuIGhpdFxuICAgICAqIC0xIG1lYW5zIG5vdGhpbmcgaXMgcGxhY2VkIG9uIHRoYXQgY2VsbFxuICAgICAqIDAgbWVhbnMgYSBzaGlwIGRpZCBvY2N1cHkgdGhhdCBzcGFjZSBidXQgaXQgd2FzIGhpdCB0aGVyZVxuICAgICAqIDEtbiBtZWFucyBhIHNoaXAgaXMgY3VycmVudGx5IG9jY3VwaW5nIHRoYXQgc3BhY2VcbiAgICAqL1xuICAgIGdhbWVib2FyZEFycjsgIFxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5pbml0YWxpemVCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMuYm9hcmRTdGF0dXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKHgsIHkpe1xuXG4gICAgICAgIGxldCB2YWwgPSB0aGlzLmdhbWVib2FyZEFyclt4XVt5XSBcbiAgICAgICAgbGV0IHZhbGlkQXR0YWNrID0gdGhpcy52YWxpZGF0YUF0dGFjayh4LCB5KSAgICAgXG5cbiAgICAgICAgaWYoIXZhbGlkQXR0YWNrKSByZXR1cm4gXCJJbnZhbGlkIEF0dGFja1wiXG5cbiAgICAgICAgaWYodmFsID09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVib2FyZEFyclt4XVt5XSA9IC0yXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zaGlwc1t0aGlzLmdhbWVib2FyZEFyclt4XVt5XSAtIDFdLnNoaXAuaGl0KClcblxuICAgICAgICAgICAgdGhpcy4jdXBkYXRlQm9hcmRTdGF0dXMoKVxuXG4gICAgICAgICAgICB0aGlzLmdhbWVib2FyZEFyclt4XVt5XSA9IDA7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgI3VwZGF0ZUJvYXJkU3RhdHVzKCl7ICAgICAgICBcbiAgICAgICAgdGhpcy5ib2FyZFN0YXR1cyA9IHRoaXMuc2hpcHMucmVkdWNlKChhY2MsIGN1cnIpID0+IGFjYyAmJiBjdXJyLnNoaXAuaXNTdW5rKCksIHRydWUpXG4gICAgfVxuXG4gICAgdmFsaWRhdGFBdHRhY2soeCwgeSl7ICAgXG4gICAgICAgIFxuICAgICAgICBsZXQgdmFsID0gdGhpcy5nYW1lYm9hcmRBcnJbeF1beV1cbiAgICAgICAgXG4gICAgICAgIGlmKHZhbCA9PSAtMSB8fCB2YWwgPiAwKSByZXR1cm4gdHJ1ZVxuICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGdpdmVuIGNvb3JkaW5hdGVzIGFyZSB2YWxpZCBmb3Igc2hpcCBvZiBhIGdpdmVuIGxlbmd0aFxuICAgICAqIEBwYXJhbSB7Z2FtZWJvYXJkQXJyfSBzdGFydCBUaGUgZ2FtZWJvYXJkQXJyYXkgb2YgeCBhbmQgeSBjb29yZGluYXRlcyB3aGVyZSB3ZSBzdGFydFxuICAgICAqIEBwYXJhbSB7Z2FtZWJvYXJkQXJyfSBlbmQgVGhlIGdhbWVib2FyZEFycmF5IG9mIHggYW5kIHkgY29vcmRpbmF0ZXMgd2hlcmUgd2UgZW5kXG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gY29vcmRpbmF0ZXMgYXJlIHZhbGlkXG4gICAgICovXG4gICAgI2Nvb3JkaW5hdGVzVmFsaWRhdG9yKHN0YXJ0LCBlbmQpe1xuXG4gICAgICAgIC8vIENoZWNrcyBpZiBhbGwgY29vcmRpbmF0ZXMgYXJlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgdmFsaWQgY29vcmRpbmF0ZXNcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgc3RhcnQuc29tZShlbGVtID0+IGVsZW0gPj0gR2FtZWJvYXJkLkdBTUVCT0FSRF9MRU5HVEggfHwgZWxlbSA8IDApIHx8IFxuICAgICAgICAgICAgZW5kLnNvbWUoZWxlbSA9PiBlbGVtID49IEdhbWVib2FyZC5HQU1FQk9BUkRfTEVOR1RIIHx8IGVsZW0gPCAwKVxuICAgICAgICApIHJldHVybiBmYWxzZTsgICAgXG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAjY29sbGlzaW9uQ2hlY2tlcihzdGFydCwgbGVuZ3RoLCBheGlzKXtcblxuICAgICAgICBsZXQgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgbGV0IHggPSBzdGFydFswXSwgeSA9IHN0YXJ0WzFdXG5cbiAgICAgICAgcXVpdDpcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIGlmICh4IC0gc3RhcnRbMF0gPT09IGxlbmd0aCkgYnJlYWsgcXVpdDtcbiAgICAgICAgICAgICAgICBjaGVjayA9IHRoaXMuZ2FtZWJvYXJkQXJyW3hdW3ldID4gMCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICB4Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh5IC0gc3RhcnRbMV0gPT09IGxlbmd0aCkgYnJlYWsgcXVpdDtcbiAgICAgICAgICAgICAgICBjaGVjayA9IHRoaXMuZ2FtZWJvYXJkQXJyW3hdW3ldID4gMCA/IHRydWUgOiBmYWxzZTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBmdW5jdGlvbiBwbGFjZXMgYSBzaGlwIG9mIGdpdmVuIGxlbmd0aCBiZXR3ZWVuIHN0YXJ0IGFuZCBlbmQgcG9pbnRzXG4gICAgICogQHBhcmFtIHtnYW1lYm9hcmRBcnJ9IHN0YXJ0IFRoZSBnYW1lYm9hcmRBcnJheSBvZiB4IGFuZCB5IGNvb3JkaW5hdGVzIHdoZXJlIHdlIHN0YXJ0XG4gICAgICogQHBhcmFtIHtnYW1lYm9hcmRBcnJ9IGVuZCBUaGUgZ2FtZWJvYXJkQXJyYXkgb2YgeCBhbmQgeSBjb29yZGluYXRlcyB3aGVyZSB3ZSBlbmRcbiAgICAgKiBAcGFyYW0ge2ludH0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIHNoaXAgdG8gYmUgcGxhY2VkXG4gICAgICovXG4gICAgcGxhY2VTaGlwKHN0YXJ0LCBsZW5ndGgsIGF4aXMpe1xuXG4gICAgICAgIGxldCBlbmQ7XG5cbiAgICAgICAgaWYoYXhpcyA9PSAneCcpIGVuZCA9IFtzdGFydFswXSArIGxlbmd0aCwgc3RhcnRbMV1dXG4gICAgICAgIGVsc2UgZW5kID0gW3N0YXJ0WzBdLCBzdGFydFsxXSArIGxlbmd0aF1cblxuICAgICAgICBpZighdGhpcy4jY29vcmRpbmF0ZXNWYWxpZGF0b3Ioc3RhcnQsIGVuZCkpIHJldHVybiAnSW52YWxpZCAtIFNoaXAgT3V0IG9mIEJvdW5kcydcbiAgICAgICAgaWYodGhpcy4jY29sbGlzaW9uQ2hlY2tlcihzdGFydCwgbGVuZ3RoLCBheGlzKSkgcmV0dXJuIFwiSW52YWxpZCAtIFNoaXAgbGVhZHMgYSBjb2xsaXNpb25cIlxuIFxuICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG5cbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHtcbiAgICAgICAgICAgIHNoaXA6IHNoaXAsXG4gICAgICAgICAgICBwb3M6IHN0YXJ0LFxuICAgICAgICAgICAgYXhpczogYXhpc1xuICAgICAgICB9KSAgICAgICAgXG5cbiAgICAgICAgbGV0IHggPSBzdGFydFswXSwgeSA9IHN0YXJ0WzFdXG5cbiAgICAgICAgcXVpdDpcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGF4aXMgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIGlmICh4IC0gc3RhcnRbMF0gPT09IGxlbmd0aCkgYnJlYWsgcXVpdDtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVib2FyZEFyclt4XVt5XSA9IHRoaXMuc2hpcHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHkgLSBzdGFydFsxXSA9PT0gbGVuZ3RoKSBicmVhayBxdWl0O1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkQXJyW3hdW3ldID0gdGhpcy5zaGlwcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgeSsrO1xuXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gXCJTaGlwIHBsYWNlZCBzdWNjZXNzZnVsbHlcIlxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIDEweDEwIGdhbWVib2FyZEFycmF5IHdoaWNoIHdpbGwgYWN0IGFzIHRoZSBHYW1lYm9hcmRcbiAgICAgKi9cbiAgICBpbml0YWxpemVCb2FyZCgpe1xuICAgICAgICB0aGlzLmdhbWVib2FyZEFyciA9IFtdXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBbXTsgLy8gQ3JlYXRlIGEgbmV3IHJvd1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA5OyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaCgtMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkQXJyLnB1c2gocm93KTsgLy8gQWRkIHRoZSByb3cgdG8gdGhlIDJEIGdhbWVib2FyZEFycmF5XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkLmpzXCJcblxuZXhwb3J0IGNsYXNzIFBsYXllcntcblxuICAgIGdhbWVib2FyZDtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpICAgICAgICBcbiAgICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgU2hpcHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpe1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5udW1PZkhpdHMgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMubnVtT2ZIaXRzKys7XG5cbiAgICAgICAgaWYodGhpcy5udW1PZkhpdHMgPT0gdGhpcy5sZW5ndGgpIHRoaXMuc3VuayA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubnVtT2ZIaXRzO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYodGhpcy5udW1PZkhpdHMgPj0gdGhpcy5sZW5ndGgpIHRoaXMuc3VuayA9IHRydWVcblxuICAgICAgICByZXR1cm4gdGhpcy5zdW5rXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9zdGFydFNjcmVlbi5jc3MnO1xuaW1wb3J0ICcuL3NldHVwLmNzcydcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL2pzL29iamVjdHMvcGxheWVyLmpzXCJcbmltcG9ydCBsb2dvUGF0aCBmcm9tIFwiLi9hc3NldHMvYmF0dGxlc2hpcF9pbWdfbG9nby5wbmdcIjtcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gJy4vanMvb2JqZWN0cy9nYW1lYm9hcmQuanMnO1xuXG5sZXQgcGxheWVyMTtcbmxldCBwbGF5ZXIyO1xubGV0IG1vdmVQbGF5ZWQgPSBmYWxzZTsgLy8gVHJhY2tzIGlmIHRoZSBjdXJyZW50IHBsYXllciBtYWRlIGEgdmFsaWQgbW92ZVxubGV0IGN1cnJQbGF5ZXI7IC8vIFRyYWNrcyB0aGUgY3VycmVudCBwbGF5ZXJcbmxldCBhZ2FpbnN0Q29tcHV0ZXIgPSB0cnVlOyAvLyBUcmFja3MgaWYgdGhlIGdhbWUgaXMgYWdhaW5zdCBhIGNvbXB1dGVyXG5sZXQgcGxheWVyMlNldFVwID0gZmFsc2U7XG5cbiBjcmVhdGVTdGFydFNjcmVlbigpXG5cblxuZnVuY3Rpb24gc2V0VXAocGxheWVyMVZhbHVlLCBwbGF5ZXIyVmFsdWUpe1xuICAgIHBsYXllcjEgPSB7XG4gICAgICAgIG5hbWU6IHBsYXllcjFWYWx1ZSxcbiAgICAgICAgYm9hcmQ6IG5ldyBHYW1lYm9hcmQoKSxcbiAgICAgICAgYm9hcmREaXY6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBsYXllcjFWYWx1ZSksXG4gICAgfVxuXG4gICAgcGxheWVyMiA9IHtcbiAgICAgICAgbmFtZTogcGxheWVyMlZhbHVlLFxuICAgICAgICBib2FyZDogbmV3IEdhbWVib2FyZCgpLFxuICAgICAgICBib2FyZERpdjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxheWVyMlZhbHVlKSxcbiAgICB9XG5cbiAgICBjcmVhdGVTZXRVcFNjcmVlbihwbGF5ZXIxKVxufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGEgbmV3IGdhbWUgYnkgc2V0dGluZyB1cCBhbGwgdGhlIHZhcmlhYmxlcyBhbmQgdGhlIERPTVxuICogQHBhcmFtIHtTdHJpbmd9IHBsYXllcjFWYWx1ZSBOYW1lIG9mIHBsYXllciAxXG4gKiBAcGFyYW0ge1N0cmluZ30gcGxheWVyMlZhbHVlIE5hbWUgb2YgUGxheWVyIDJcbiAqL1xuZnVuY3Rpb24gc3RhcnRHYW1lKHBsYXllcjEsIHBsYXllcjIpe1xuICAgIFxuICAgIGNyZWF0ZUdhbWVCb2FyZChwbGF5ZXIxLm5hbWUsIHBsYXllcjIubmFtZSk7XG5cbiAgICBwbGF5ZXIxLmJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxheWVyMS5uYW1lKTtcbiAgICBwbGF5ZXIyLmJvYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxheWVyMi5uYW1lKVxuICAgIGN1cnJQbGF5ZXIgPSBwbGF5ZXIxO1xuXG4gICAgdXBkYXRlQ3VycmVudFBsYXllclRleHQoY3VyclBsYXllcilcblxuICAgIHBsYXllcjEuYm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYobW92ZVBsYXllZCl7XG4gICAgICAgICAgICBtb3ZlUGxheWVkID0gZmFsc2VcbiAgICAgICAgICAgIGN1cnJQbGF5ZXIgPSBwbGF5ZXIxXG4gICAgICAgICAgICB1cGRhdGVDdXJyZW50UGxheWVyVGV4dChjdXJyUGxheWVyKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIHBsYXllcjIuYm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYobW92ZVBsYXllZCl7XG4gICAgICAgICAgICBtb3ZlUGxheWVkID0gZmFsc2VcbiAgICAgICAgICAgIGN1cnJQbGF5ZXIgPSBwbGF5ZXIyXG4gICAgICAgICAgICB1cGRhdGVDdXJyZW50UGxheWVyVGV4dChjdXJyUGxheWVyKVxuICAgICAgICAgICAgaWYoYWdhaW5zdENvbXB1dGVyKXtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IG1ha2VNb3ZlQWdhaW5zdChwbGF5ZXIxKSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBtb3ZlIHRoYXQgYSBwbGF5ZXIgY2FuIG1ha2VcbiAqIEBwYXJhbSB7cGxheWVyIG9iamVjdH0gcGxheWVyIFxuICovXG5mdW5jdGlvbiBtYWtlTW92ZUFnYWluc3QocGxheWVyKXtcbiAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG5cbiAgICB3aGlsZSghcGxheWVyLmJvYXJkLnZhbGlkYXRhQXR0YWNrKHgsIHkpKXtcbiAgICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGxheWVyLm5hbWUgKyB4ICsgeSkuY2xpY2soKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDdXJyZW50UGxheWVyVGV4dChjdXJyUGxheWVyKXtcbiAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJQbGF5ZXJcIikgIT0gbnVsbCl7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJQbGF5ZXJcIilcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IGN1cnJQbGF5ZXIubmFtZSArXCIncyB0dXJuXCJcbiAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgZ2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZVwiKVxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBkaXYuaWQgPSBcImN1cnJQbGF5ZXJcIlxuICAgICAgICBkaXYuaW5uZXJIVE1MID0gY3VyclBsYXllci5uYW1lICtcIidzIHR1cm5cIlxuXG4gICAgICAgIGdhbWUuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RhcnRTY3JlZW4oKSB7XG4gICAgLy8gQ3JlYXRlIHRoZSBtYWluIHN0YXJ0IHNjcmVlbiBjb250YWluZXJcbiAgICBjb25zdCBzdGFydFNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3RhcnRTY3JlZW4uaWQgPSBcInN0YXJ0U2NyZWVuXCI7XG4gICAgXG4gICAgLy8gQ3JlYXRlIHRoZSB0aXRsZSBjb250YWluZXJcbiAgICBjb25zdCBzdGFydFNjcmVlblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGFydFNjcmVlblRpdGxlLmlkID0gXCJzdGFydFNjcmVlblRpdGxlXCI7XG4gICAgXG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbG9nb0ltZy5zcmMgPSBsb2dvUGF0aDtcbiAgICBsb2dvSW1nLmFsdCA9IFwiXCI7XG4gICAgbG9nb0ltZy5pZCA9IFwiYmF0dGxlc2hpcExvZ29JbWdcIjtcbiAgICBcbiAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcFwiO1xuICAgIFxuICAgIHN0YXJ0U2NyZWVuVGl0bGUuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG4gICAgc3RhcnRTY3JlZW5UaXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICAgIFxuICAgIC8vIENyZWF0ZSBvcHRpb25zIGNvbnRhaW5lclxuICAgIGNvbnN0IHN0YXJ0U2NyZWVuT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3RhcnRTY3JlZW5PcHRpb25zLmlkID0gXCJzdGFydFNjcmVlbk9wdGlvbnNcIjtcbiAgICBcbiAgICAvLyBQbGF5IHdpdGggYSBmcmllbmQgc2VjdGlvblxuICAgIGNvbnN0IHN0YXJ0U2NyZWVuUGxheVdpdGhGcmllbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN0YXJ0U2NyZWVuUGxheVdpdGhGcmllbmQuaWQgPSBcInN0YXJ0U2NyZWVuUGxheVdpdGhGcmllbmRcIjtcbiAgICBcbiAgICBjb25zdCBwbGF5ZXIxSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcGxheWVyMUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBwbGF5ZXIxSW5wdXQubmFtZSA9IFwicGxheWVyMVwiO1xuICAgIHBsYXllcjFJbnB1dC5pZCA9IFwicGxheWVyMVwiO1xuICAgIHBsYXllcjFJbnB1dC5wbGFjZWhvbGRlciA9IFwiUGxheWVyIDFcIjtcbiAgICBcbiAgICBjb25zdCBwbGF5ZXIySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgcGxheWVyMklucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBwbGF5ZXIySW5wdXQubmFtZSA9IFwicGxheWVyMlwiO1xuICAgIHBsYXllcjJJbnB1dC5pZCA9IFwicGxheWVyMlwiO1xuICAgIHBsYXllcjJJbnB1dC5wbGFjZWhvbGRlciA9IFwiUGxheWVyIDJcIjtcbiAgICBcbiAgICBzdGFydFNjcmVlblBsYXlXaXRoRnJpZW5kLmFwcGVuZENoaWxkKHBsYXllcjFJbnB1dCk7XG4gICAgc3RhcnRTY3JlZW5QbGF5V2l0aEZyaWVuZC5hcHBlbmRDaGlsZChwbGF5ZXIySW5wdXQpO1xuICAgIFxuICAgIC8vIFBsYXkgYWdhaW5zdCBjb21wdXRlciBzZWN0aW9uXG4gICAgY29uc3Qgc3RhcnRTY3JlZW5QbGF5QWdhaW5zdENvbXB1dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGFydFNjcmVlblBsYXlBZ2FpbnN0Q29tcHV0ZXIuaWQgPSBcInN0YXJ0U2NyZWVuUGxheUFnYWluc3RDb21wdXRlclwiO1xuICAgIHN0YXJ0U2NyZWVuUGxheUFnYWluc3RDb21wdXRlci50ZXh0Q29udGVudCA9IFwiQWdhaW5zdCBDb21wdXRlclwiO1xuICAgIFxuICAgIGNvbnN0IGFnYWluc3RDb21wdXRlckNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGFnYWluc3RDb21wdXRlckNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgYWdhaW5zdENvbXB1dGVyQ2hlY2tib3guaWQgPSBcImFnYWluc3RDb21wdXRlclwiO1xuICAgIFxuICAgIHN0YXJ0U2NyZWVuUGxheUFnYWluc3RDb21wdXRlci5hcHBlbmRDaGlsZChhZ2FpbnN0Q29tcHV0ZXJDaGVja2JveCk7XG4gICAgXG4gICAgLy8gQXBwZW5kIG9wdGlvbnMgdG8gb3B0aW9ucyBjb250YWluZXJcbiAgICBzdGFydFNjcmVlbk9wdGlvbnMuYXBwZW5kQ2hpbGQoc3RhcnRTY3JlZW5QbGF5V2l0aEZyaWVuZCk7XG4gICAgc3RhcnRTY3JlZW5PcHRpb25zLmFwcGVuZENoaWxkKHN0YXJ0U2NyZWVuUGxheUFnYWluc3RDb21wdXRlcik7XG4gICAgXG4gICAgLy8gQ3JlYXRlIHN0YXJ0IGJ1dHRvblxuICAgIGNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3RhcnRHYW1lQnV0dG9uLmlkID0gXCJzdGFydEdhbWVcIjtcbiAgICBzdGFydEdhbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi01XCIpO1xuICAgIHN0YXJ0R2FtZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU3RhcnQhXCI7XG4gICAgXG4gICAgLy8gQXBwZW5kIGV2ZXJ5dGhpbmcgdG8gdGhlIG1haW4gc3RhcnQgc2NyZWVuIGNvbnRhaW5lclxuICAgIHN0YXJ0U2NyZWVuLmFwcGVuZENoaWxkKHN0YXJ0U2NyZWVuVGl0bGUpO1xuICAgIHN0YXJ0U2NyZWVuLmFwcGVuZENoaWxkKHN0YXJ0U2NyZWVuT3B0aW9ucyk7XG4gICAgc3RhcnRTY3JlZW4uYXBwZW5kQ2hpbGQoc3RhcnRHYW1lQnV0dG9uKTtcbiAgICBcbiAgICAvLyBBcHBlbmQgdGhlIHN0YXJ0IHNjcmVlbiB0byB0aGUgYm9keSBvciBhIHNwZWNpZmljIGNvbnRhaW5lclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RhcnRTY3JlZW4pO1xuXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgdG8gZGlzYWJsZSBhbmQgY2xlYXIgUGxheWVyIDIgaW5wdXQgd2hlbiBjaGVja2JveCBpcyBjaGVja2VkXG4gICAgYWdhaW5zdENvbXB1dGVyQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgcGxheWVyMklucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIHBsYXllcjJJbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwbGF5ZXIySW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRXZlbnQgbGlzdGVuZXIgdG8gcmVtb3ZlIHN0YXJ0IHNjcmVlbiBhbmQgc2F2ZSBpbnB1dCB2YWx1ZXNcbiAgICBzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcGxheWVyMVZhbHVlID0gcGxheWVyMUlucHV0LnZhbHVlIHx8IFwiUGxheWVyIDFcIjtcbiAgICAgICAgbGV0IHBsYXllcjJWYWx1ZSA9IHBsYXllcjJJbnB1dC52YWx1ZSB8fCBcIlBsYXllciAyXCI7XG4gICAgICAgIGFnYWluc3RDb21wdXRlciA9IGFnYWluc3RDb21wdXRlckNoZWNrYm94LmNoZWNrZWQ7XG5cbiAgICAgICAgaWYoYWdhaW5zdENvbXB1dGVyKSBwbGF5ZXIyVmFsdWUgPSBcIkx1ZmZ5XCJcblxuICAgICAgICBzZXRVcChwbGF5ZXIxVmFsdWUsIHBsYXllcjJWYWx1ZSk7XG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHN0YXJ0U2NyZWVuKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2V0VXBTY3JlZW4ocGxheWVyKSB7XG4gICAgLy8gR2V0IHRoZSBjb250YWluZXIgZWxlbWVudFxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250YWluZXIuaWQgPSBcInNldHVwXCJcbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcblxuICAgIC8vIENyZWF0ZSB0aGUgc2V0dXAgb3B0aW9ucyBkaXZcbiAgICBjb25zdCBzZXR1cE9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNldHVwT3B0aW9ucy5pZCA9IFwic2V0dXBHYW1lT3B0aW9uc1wiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXR1cE9wdGlvbnMpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBwbGF5ZXIgbmFtZSBkaXZcbiAgICBjb25zdCBwbGF5ZXJOYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbGF5ZXJOYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXJOYW1lXCIpO1xuICAgIHBsYXllck5hbWVEaXYudGV4dENvbnRlbnQgPSBwbGF5ZXIubmFtZSArIFwiIExheW91dFwiO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSByYW5kb21pemUgYnV0dG9uXG4gICAgY29uc3QgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByYW5kb21pemVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi01XCIpO1xuICAgIHJhbmRvbWl6ZUJ1dHRvbi5pZCA9IFwicmFuZG9taXplXCI7XG4gICAgcmFuZG9taXplQnV0dG9uLnRleHRDb250ZW50ID0gXCJSYW5kb21pemVcIjtcblxuICAgIHJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpbml0aWFsaXplQm9hcmQocGxheWVyKTtcbiAgICAgICAgdXBkYXRlU2V0dXBHYW1lQm9hcmQocGxheWVyKVxuICAgIH0pXG5cbiAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gdGhlIHBhcmVudCBkaXZcbiAgICBzZXR1cEdhbWVPcHRpb25zLmFwcGVuZENoaWxkKHBsYXllck5hbWVEaXYpO1xuICAgIHNldHVwR2FtZU9wdGlvbnMuYXBwZW5kQ2hpbGQocmFuZG9taXplQnV0dG9uKTtcblxuXG4gICAgLy8gQ3JlYXRlIHRoZSBnYW1lIGJvYXJkIGRpdlxuICAgIGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZ2FtZUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJnYW1lYm9hcmRcIik7XG4gICAgZ2FtZUJvYXJkLmlkID0gXCJzZXR1cEdhbWVHYW1lYm9hcmRcIjtcbiAgICBcbiAgICAvLyBHZW5lcmF0ZSA4MSBib3hlcyBkeW5hbWljYWxseVxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgOTsgeCsrKSB7XG4gICAgICAgIGZvcihsZXQgeSA9IDA7IHkgPCA5OyB5ICsrKXtcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImJveFwiKTtcbiAgICAgICAgICAgIGJveC5pZCA9IGAke3BsYXllci5uYW1lfSR7eH0ke3l9YDtcbiAgICAgICAgICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwZW5kIGdhbWUgYm9hcmQgdG8gdGhlIGNvbnRhaW5lclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lQm9hcmQpO1xuXG4gICAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgdGhlIHN0YXJ0IGJ1dHRvblxuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLTVcIiwgXCJzZXR1cEJ1dHRvblwiKTtcbiAgICBzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTmV4dCFcIjtcblxuICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7ICAgICAgICBcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NldHVwXCIpLnJlbW92ZSgpXG5cbiAgICAgICAgaWYoIXBsYXllcjJTZXRVcCl7XG4gICAgICAgICAgICBpZihhZ2FpbnN0Q29tcHV0ZXIpIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplQm9hcmQocGxheWVyMilcbiAgICAgICAgICAgICAgICBzdGFydEdhbWUocGxheWVyMSwgcGxheWVyMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNyZWF0ZVNldFVwU2NyZWVuKHBsYXllcjIpXG5cbiAgICAgICAgICAgIHBsYXllcjJTZXRVcCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFydEdhbWUocGxheWVyMSwgcGxheWVyMilcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuXG4gICAgaW5pdGlhbGl6ZUJvYXJkKHBsYXllcik7XG4gICAgdXBkYXRlU2V0dXBHYW1lQm9hcmQocGxheWVyKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVTZXR1cEdhbWVCb2FyZChwbGF5ZXIpe1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2V0dXBHYW1lYm9hcmRcIilcbiAgICBsZXQgZ2FtZWJvYXJkID0gcGxheWVyLmJvYXJkLmdhbWVib2FyZEFycjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgOTsgaisrKSB7XG4gICAgICAgICAgICBpZihnYW1lYm9hcmRbaV1bal0gPiAwKXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwbGF5ZXIubmFtZSArIGkgKyBqKS5jbGFzc0xpc3QgPSBcImJveCBzaGlwXCJcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwbGF5ZXIubmFtZSArIGkgKyBqKS5jbGFzc0xpc3QgPSBcImJveFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIENyZWF0ZXMgdHdvIG5ldyBnYW1lIGJvYXJkcyBiYXNlZCBvbiBwbGF5ZXIgbmFtZXMgYW5kIHJlbW92ZXMgdGhlIHByZWl2b3VzIGJvYXJkcyBpZiBhbnlcbmZ1bmN0aW9uIGNyZWF0ZUdhbWVCb2FyZChwbGF5ZXIxTmFtZSwgcGxheWVyMk5hbWUpIHtcblxuICAgIGNvbnN0IGV4aXN0aW5nR2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVwiKTtcbiAgICBpZiAoZXhpc3RpbmdHYW1lKSB7XG4gICAgICAgIGV4aXN0aW5nR2FtZS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYW1lQ29udGFpbmVyLmlkID0gXCJnYW1lXCI7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJCb2FyZChwbGF5ZXJOYW1lKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBsYXllckRpdi5pZCA9IHBsYXllck5hbWU7XG5cbiAgICAgICAgY29uc3QgcGxheWVyTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBsYXllck5hbWVEaXYuY2xhc3NMaXN0LmFkZChcInBsYXllck5hbWVcIik7XG4gICAgICAgIHBsYXllck5hbWVEaXYudGV4dENvbnRlbnQgPSBwbGF5ZXJOYW1lO1xuXG4gICAgICAgIGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdhbWVCb2FyZC5jbGFzc0xpc3QuYWRkKFwiZ2FtZWJvYXJkXCIpO1xuICAgICAgICBnYW1lQm9hcmQuaWQgPSBcInNldHVwR2FtZUdhbWVib2FyZFwiO1xuXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgOTsgeCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDk7IHkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJib3hcIik7XG4gICAgICAgICAgICAgICAgYm94LmlkID0gYCR7cGxheWVyTmFtZX0ke3h9JHt5fWA7XG5cbiAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyQXR0YWNrZWQgPSBnZXRQbGF5ZXJOYW1lRnJvbUlkKGJveC5pZClcblxuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXJBdHRhY2tlZCA9PSBjdXJyUGxheWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdSBjYW4gbm90IGF0dGFjayB5b3VyIG93biBib2FyZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQge3gsIHl9ID0gZ2V0QXJyYXlFbGVtRnJvbUlkKGJveC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoaXQgPSBwbGF5ZXJBdHRhY2tlZC5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYoaGl0ICE9IFwiSW52YWxpZCBBdHRhY2tcIikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihoaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0ID0gXCJib3ggY2xpY2tlZCBoaXRcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocGxheWVyQXR0YWNrZWQuYm9hcmQuYm9hcmRTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNnYW1lXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5V2lubmVyKGN1cnJQbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QgPSBcImJveCBjbGlja2VkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlUGxheWVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgdmFsaWQgbW92ZSFcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBsYXllckRpdi5hcHBlbmRDaGlsZChwbGF5ZXJOYW1lRGl2KVxuICAgICAgICBwbGF5ZXJEaXYuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkKTtcbiAgICAgICAgcmV0dXJuIHBsYXllckRpdjtcbiAgICB9XG5cbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVBsYXllckJvYXJkKHBsYXllcjFOYW1lKSk7XG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQbGF5ZXJCb2FyZChwbGF5ZXIyTmFtZSkpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRhaW5lcik7XG59XG5cbi8vIEdldHMgdGhlIGNvcnJlc3BvbmRpbmcgY29vcmRpbmF0ZXMgb24gdGhlIGdhbWVib3JhZCBiYXNlZCBvbiB0aGUgRE9NIGdyaWQgYm94XG5mdW5jdGlvbiBnZXRBcnJheUVsZW1Gcm9tSWQoaWQpe1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGlkLnNsaWNlKC0yLCAtMSksXG4gICAgICAgIHk6IGlkLnNsaWNlKC0xKVxuICAgIH1cbn1cblxuLy8gR2V0cyB0aGUgcGxheWVyIG5hbWUgdGhlIERPTSBncmlkIGJveCBiZWxvbmdzIHRvXG5mdW5jdGlvbiBnZXRQbGF5ZXJOYW1lRnJvbUlkKGlkKXtcbiAgICByZXR1cm4gaWQuc2xpY2UoMCwgLTIpID09IHBsYXllcjEubmFtZSA/IHBsYXllcjEgOiBwbGF5ZXIyXG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVCb2FyZChwbGF5ZXIpe1xuXG4gICAgbGV0IHN0YXJ0O1xuICAgIGxldCBsZW5ndGg7XG4gICAgbGV0IGF4aXM7XG4gICAgbGV0IHJldHVyblZhbDtcblxuICAgIHBsYXllci5ib2FyZC5pbml0YWxpemVCb2FyZCgpO1xuXG4gICAgZm9yKGxldCBpID0gNDsgaSA8IDg7IGkrKyl7XG4gICAgICAgIHdoaWxlKHJldHVyblZhbCAhPSBcIlNoaXAgcGxhY2VkIHN1Y2Nlc3NmdWxseVwiKXtcbiAgICAgICAgICAgIGxlbmd0aCA9IGk7XG4gICAgICAgICAgICBheGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoyKSA9PSAwID8gXCJ4XCIgOiBcInlcIjtcbiAgICAgICAgICAgIHN0YXJ0ID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KV1cblxuICAgICAgICAgICAgcmV0dXJuVmFsID0gcGxheWVyLmJvYXJkLnBsYWNlU2hpcChzdGFydCwgbGVuZ3RoLCBheGlzKTtcbiAgICAgICAgfSAgIFxuXG4gICAgICAgIHJldHVyblZhbCA9IFwiXCI7XG4gICAgfSAgICBcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdpbm5lcihwbGF5ZXIpe1xuICAgIC8vIENyZWF0ZSB0aGUgbWFpbiBlbmQgc2NyZWVuIGNvbnRhaW5lclxuICAgIGNvbnN0IGVuZFNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW5kU2NyZWVuLmlkID0gXCJlbmRTY3JlZW5cIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgdGl0bGUgY29udGFpbmVyXG4gICAgY29uc3QgZW5kU2NyZWVuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVuZFNjcmVlblRpdGxlLmlkID0gXCJlbmRTY3JlZW5UaXRsZVwiO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBsb2dvIGltYWdlXG4gICAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbG9nb0ltZy5zcmMgPSBsb2dvUGF0aDtcbiAgICBsb2dvSW1nLmFsdCA9IFwiXCI7XG4gICAgbG9nb0ltZy5pZCA9IFwiYmF0dGxlc2hpcExvZ29JbWdcIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgd2lubmVyIHRleHRcbiAgICBjb25zdCB3aW5uZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3aW5uZXJUZXh0LnRleHRDb250ZW50ID0gYCR7cGxheWVyLm5hbWV9IFdpbnMhYDtcblxuICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byB0aGUgdGl0bGUgY29udGFpbmVyXG4gICAgZW5kU2NyZWVuVGl0bGUuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG4gICAgZW5kU2NyZWVuVGl0bGUuYXBwZW5kQ2hpbGQod2lubmVyVGV4dCk7XG5cbiAgICAvLyBBcHBlbmQgZXZlcnl0aGluZyB0byB0aGUgZW5kIHNjcmVlbiBjb250YWluZXJcbiAgICBlbmRTY3JlZW4uYXBwZW5kQ2hpbGQoZW5kU2NyZWVuVGl0bGUpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBlbmQgc2NyZWVuIHRvIHRoZSBib2R5XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbmRTY3JlZW4pO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==