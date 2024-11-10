function sortingCarModels(inventory){
    try{
        if(inventory === undefined){
            throw new Error ("Pass one valid arguments");
        }
        else if(typeof(inventory) !== 'object'){
            throw new Error("You are not passing object");
        }

        const carModelList = [];

        for(let i = 0; i < inventory.length; i++){
            carModelList.push(inventory[i].car_model);
        }

        return carModelList;

    }catch(error){
        return error.message;
    }
}

export{
    sortingCarModels
};

