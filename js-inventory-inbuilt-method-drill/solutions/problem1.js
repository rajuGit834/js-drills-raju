function carDetailsOfId33(inventory){
    try{
        if(inventory === undefined){
            throw new Error ("Pass a valid arguments");
        }
        else if(typeof(inventory) !== 'object'){
            throw new Error("You are not passing object");
        }
    
        return inventory.filter((val) => val.id === 33);

    }catch(error){
        return error.message;
    }
}

export{
    carDetailsOfId33
};