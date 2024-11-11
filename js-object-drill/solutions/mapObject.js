import {keys} from "../solutions/keys.js"
function mapObject(obj, cb) {
    const key = keys(obj);
    const result = [];

    for(let i = 0; i < key.length; i++){
        result.push(cb(key[i]));
    }
    return result;
}

export{
    mapObject
};