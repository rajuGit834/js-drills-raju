// Implement a loop to access and print the ages of all individuals in the dataset.

function ageOfAllIndividual(arrayOfObjects){
    
    try{
        const ageList = [];
        if (arrayOfObjects === undefined) {
            throw new Error("You forget to passing the arrrayOfObject");
        } else if (typeof(arrayOfObjects) !== "object") {
           throw new Error("You are not Passing object");
        }
        for(let i = 0; i < arrayOfObjects.length; i++){
            ageList.push(arrayOfObjects[i].age);
        }
        return ageList;
    }catch(error){
        return error.message;
    }
    
}

export{
    ageOfAllIndividual
};