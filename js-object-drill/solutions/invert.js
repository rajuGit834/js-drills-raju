import {keys} from "../solutions/keys.js"

function invert(obj){
    const key = keys(obj);
    const result = {};

    for(let i = 0; i < key.length; i++){
        result[key[i]] = obj[key[i]];
    }

    return result;
}

export{
    invert
};