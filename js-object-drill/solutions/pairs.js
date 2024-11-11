import {keys} from "../solutions/keys.js";

function pairs(obj){
    const key = keys(obj);
    const result = [];

    for(let i = 0; i < key.length; i++){
        result.push([key[i], obj[key[i]]]);
    }
    return result;
}

export{
    pairs
};