function carYears(inventory){
    try{
        if(inventory === undefined){
            throw new Error ("Pass one valid arguments");
        }
        else if(typeof(inventory) !== 'object'){
            throw new Error("You are not passing object");
        }
    
        return inventory.map((year) => year.car_year);
    }catch(error){
        return error.message;
    }
}

export{
    carYears
};