function lastCarOfInventory(inventory){
    try{
        if(inventory === undefined){
            throw new Error ("Pass a valid arguments");
        }
        else if(typeof(inventory) !== 'object'){
            throw new Error("You are not passing object");
        }

        return inventory[inventory.length - 1];
        
    }catch(error){
        return error.message;
    }
}

export{
    lastCarOfInventory
};