function carDetailsOfId33(inventory){
    try{
        if(inventory === undefined){
            throw new Error ("Pass a valid arguments");
        }
        else if(typeof(inventory) !== 'object'){
            throw new Error("You are not passing object");
        }
    
        for(let i = 0; i < inventory.length; i++){
            if(inventory[i].id === 33){
                return inventory[i];
            }
        }
        return "no any car is availabe which id is 33";
    }catch(error){
        return error.message;
    }
}

export{
    carDetailsOfId33
};