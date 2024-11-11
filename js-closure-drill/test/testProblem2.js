import { limitFunctionCallCount } from "../solutions/problem2.js";

function cb(count){
    return `Callback function is returning ${count} times`;
}

const result = limitFunctionCallCount(cb, 4);

console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());  