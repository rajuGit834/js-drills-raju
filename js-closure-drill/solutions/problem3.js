function cacheFunction(cb){
    const cache = {};

    return function (...args){
        let key = JSON.stringify(args);
        if(cache.hasOwnProperty(key)){
            return cache[key];
        }else{ 
            const result = cb(...args);
            cache[key] = result;
            return result;
        }
    }
}

export{
    cacheFunction
};