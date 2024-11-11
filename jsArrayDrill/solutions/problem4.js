
function find(elements, cb, compValue){
    if(compValue === undefined) return undefined;
    
    for(let i = 0; i < elements.length; i++){
        if(cb(elements[i], compValue)) return true;
    }
    return false;
}

export{
    find
};