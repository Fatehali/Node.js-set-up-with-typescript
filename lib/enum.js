import first from './first.js';
export var Hello;
(function (Hello) {
    Hello[Hello["HIGH"] = 5] = "HIGH";
    Hello[Hello["LOW"] = 6] = "LOW";
    Hello[Hello["MEDIUM"] = 7] = "MEDIUM";
})(Hello || (Hello = {}));
console.log(Hello[1] === "LOW");
console.log(Hello[1]);
console.log(first());
console.log("new update");
export let newFunc = (name) => ({ name });
