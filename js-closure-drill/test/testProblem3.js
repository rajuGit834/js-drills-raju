import {cacheFunction} from "../solutions/problem3.js";

function add(a, b){
    return a + b;
}

const result = cacheFunction(add);
console.log(result(11, 12));
console.log(result(10, 12));