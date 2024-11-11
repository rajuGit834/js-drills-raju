function keys(obj){
    if(typeof(obj) !== 'object'){
        return [];
    }
    let keys = [];

    for(let key in obj){
        keys.push(key);
    }
    return keys;
}

export{
    keys
};
