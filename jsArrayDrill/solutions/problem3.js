function reduce(elements, cb, startingValue){
    let accumlator = startingValue !== undefined ? startingValue : elements[0];
    let index = startingValue !== undefined ? 0 : 1;
    
    for(let i = index; i < elements.length; i++){
        accumlator = cb(accumlator, elements[i]);
    }
    return accumlator;
}

export{
    reduce
};

