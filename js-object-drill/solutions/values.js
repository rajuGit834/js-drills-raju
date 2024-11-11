function values(obj){
    let value = [];

    if(typeof(obj) != 'object'){
        return [];
    }

    for(let val in obj){
        value.push(obj[val]);
    }
    return value;
}

export{
    values
};