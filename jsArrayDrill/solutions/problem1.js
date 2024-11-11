function each(elements, cb){
    const result = [];
    for(let i = 0; i < elements.length; i++){
        const val = cb(elements[i], i);
        result.push(val);
    }
    return result;
}

export{
    each,
};


