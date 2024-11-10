function oldCars(inventory){
    try{
        if(inventory === undefined){
            throw new Error ("Pass one valid arguments");
        }
        else if(typeof(inventory) !== 'object'){
            throw new Error("You are not passing object");
        }
    
        const oldCarList = [];
    
        for(let i = 0; i < inventory.length; i++){
            if(inventory[i].car_year < 2000){
                oldCarList.push(inventory[i]);
            }
        }
    
        return oldCarList;
    
    }catch(error){
        return error.message;
    }
}

export{
    oldCars
};