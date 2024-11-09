// Implement a loop to access and log the city and country of each individual in the dataset.

function cityAndCountryOfEach(arrayOfObjects){
    try{
        if (arrayOfObjects === undefined) {
            throw new Error("You forget to passing the arrrayOfObject");
        } else if (typeof(arrayOfObjects) !== "object") {
            throw new Error("You are not Passing object");
        }
        for(let i = 0; i < arrayOfObjects.length; i++){
            console.log(arrayOfObjects[i].city + ' ' + arrayOfObjects[i].country);
        }
    }catch(error){
        console.log(error.message);
    }
}

export{
    cityAndCountryOfEach
};