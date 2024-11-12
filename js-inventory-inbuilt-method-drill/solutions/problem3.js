function sortingCarModels(inventory){
    try{
        if(inventory === undefined){
            throw new Error ("Pass one valid arguments");
        }
        else if(typeof(inventory) !== 'object'){
            throw new Error("You are not passing object");
        }

        return inventory.map((val) =>  val.car_model);

    }catch(error){
        return error.message;
    }
}

export{
    sortingCarModels
};

