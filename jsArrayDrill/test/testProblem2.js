import { items } from "./arrays.js";
import {map} from "../solutions/problem2.js"

function cb(val){
    return val * 2;
}

const result = map(items, cb);
console.log(result);

