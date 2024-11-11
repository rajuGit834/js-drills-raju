import { items } from "./arrays.js";
import {find} from "../solutions/problem4.js";

function cb(currValue, compValue){
    return currValue === compValue;
}

// Case - 1 -> I am passing 5 for finding 5 is exist or not in the array, and it returns true.
console.log(find(items, cb, 5));

// Case - 2 -> I am not passing any compare value it returns undefined.
console.log(find(items, cb));

// Case - 3 -> I am passing 10 as a compare value it returns undefined.
console.log(find(items, cb, 10));