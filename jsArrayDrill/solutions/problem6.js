
function flatten(elements){
    let result = [];

    for(let i = 0; i < elements.length; i++){
        if(Array.isArray(elements[i]))   {
            result = result.concat(flatten(elements[i]));
        }else{
            result.push(elements[i]);
        }
    }
    return result;
}

export{
    flatten
};
