"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newFunc = exports.Hello = void 0;
var first_js_1 = require("./first.js");
var Hello;
(function (Hello) {
    Hello[Hello["HIGH"] = 0] = "HIGH";
    Hello[Hello["LOW"] = 1] = "LOW";
    Hello[Hello["MEDIUM"] = 2] = "MEDIUM";
})(Hello || (exports.Hello = Hello = {}));
(Hello[1] === "LOW");
console.log(Hello[1]);
console.log((0, first_js_1.default)());
var newFunc = function (name) { return ({ name: name }); };
exports.newFunc = newFunc;
