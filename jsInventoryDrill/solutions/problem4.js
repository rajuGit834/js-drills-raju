function carYears(inventory){
    try{
        if(inventory === undefined){
            throw new Error ("Pass one valid arguments");
        }
        else if(typeof(inventory) !== 'object'){
            throw new Error("You are not passing object");
        }
    
        const carYearList = [];
    
        for(let i = 0; i < inventory.length; i++){
            carYearList.push(inventory[i].car_year);
        }
    
        return carYearList;
    
    }catch(error){
        return error.message;
    }
}

export{
    carYears
};