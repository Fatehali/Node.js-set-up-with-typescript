import first, {} from './first.js';

export enum Hello {
    HIGH=5,
    LOW,
    MEDIUM=7,
}

console.log(Hello[1] === "LOW")

console.log(Hello[1])
console.log(first());
console.log("new update");

export let newFunc = (name: string) => ({ name });

