
function map(elements, cb){
    const result = [];
    for(let i = 0; i < elements.length; i++){
        result.push(cb(elements[i], cb));
    }
    return result;
}


export{
    map
};