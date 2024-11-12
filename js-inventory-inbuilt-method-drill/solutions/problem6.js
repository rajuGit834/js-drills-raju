function bmwAndAudiCars(inventory){
    try{
        if(inventory === undefined){
            throw new Error ("Pass one valid arguments");
        }
        else if(typeof(inventory) !== 'object'){
            throw new Error("You are not passing object");
        }
    
        return inventory.filter((val) => val.car_make === 'BMW' || val.car_make === 'Audi');
    
    }catch(error){
        return error.message;
    }
}

export{
    bmwAndAudiCars
};