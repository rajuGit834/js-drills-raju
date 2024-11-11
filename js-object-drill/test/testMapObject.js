import { testObject } from "../solutions/objects.js";
import { mapObject } from "../solutions/mapObject.js";

function cb(key){
    return testObject[key];
}

// CASE 2 -> passing object and get values of objects as output
console.log(mapObject(testObject, cb));

// CASE 2 -> passing the array instead of object rit will return null [] 
console.log(mapObject(testObject, cb));
