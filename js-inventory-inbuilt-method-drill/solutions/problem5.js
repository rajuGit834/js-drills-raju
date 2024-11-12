import {carYears} from "../solutions/problem4.js"
function oldCars(inventory){
    try{
        if(inventory === undefined){
            throw new Error ("Pass one valid arguments");
        }
        else if(typeof(inventory) !== 'object'){
            throw new Error("You are not passing object");
        }
    
        return carYears(inventory).filter((val) => val < 2000);
    }catch(error){
        return error.message;
    }
}

export{
    oldCars
};