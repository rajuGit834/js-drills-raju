import { items } from "./arrays.js";
import {each} from "../solutions/problem1.js";

function cb(val, index){
    return val;
}

const result = each(items, cb);
console.log(result);
