import { items } from "./arrays.js";
import {reduce} from "../solutions/problem3.js"

function cb (accumlator, currentValue){
    return accumlator + currentValue;
}

// CASE - 1 Passing startingValue as 0 the output is 20
console.log(reduce(items, cb, 0));

// CASE - 2 Passing startingValue as 10 the output is 30
console.log(reduce(items, cb, 10));

// CASE - 3 Passing empty the array and startingValue as 0 the output is 0
console.log(reduce([], cb, 0));

// CASE - 3 Passing empty the array and startingValue as 10 the output is 10
console.log(reduce([], cb, 10));
