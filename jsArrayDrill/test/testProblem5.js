import { items } from "./arrays.js";
import {filter} from "../solutions/problem5.js"

// i make callback function for check value is odd or not
function cb(val){
    return val % 2 === 1 ? true : false;
}

console.log(filter(items, cb));