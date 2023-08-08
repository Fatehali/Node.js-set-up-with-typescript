import first, {} from './first.js';

export enum Hello {
    HIGH,
    LOW,
    MEDIUM,
}

(Hello[1] === "LOW")

console.log(Hello[1])
console.log(first());

export let newFunc = (name: string) => ({ name });

