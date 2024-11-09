
function nameAndCityOfTheIndividual(arrayOfObjects){
    try{
        if (arrayOfObjects === undefined) {
            throw new Error("You forget to passing the arrrayOfObject");
        } else if (typeof(arrayOfObjects) !== "object") {
           throw new Error("You are not Passing object");
        }
        return arrayOfObjects[3].name + ' ' + arrayOfObjects[3].city;
    }catch(error){
        return error.messagge;
    }
}

export{
    nameAndCityOfTheIndividual
};