function bmwAndAudiCars(inventory){
    try{
        if(inventory === undefined){
            throw new Error ("Pass one valid arguments");
        }
        else if(typeof(inventory) !== 'object'){
            throw new Error("You are not passing object");
        }
    
        const onlyBmwAndAudiCarList = [];
    
        for(let i = 0; i < inventory.length; i++){
            if(inventory[i].car_make === 'BMW' || inventory[i].car_make === 'Audi'){
                onlyBmwAndAudiCarList.push(inventory[i]);
            }
        }
    
        return onlyBmwAndAudiCarList;
    
    }catch(error){
        return error.message;
    }
}

export{
    bmwAndAudiCars
};