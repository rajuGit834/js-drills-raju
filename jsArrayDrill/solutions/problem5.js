function filter(elements, cb){
    const result = [];

    for(let i = 0; i < elements.length; i++){
        const bool = cb(elements[i]);
        if(bool){
            result.push(elements[i]);
        }
    }
    return result;
}

export{
    filter
};