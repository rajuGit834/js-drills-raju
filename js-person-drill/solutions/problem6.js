// Create a function to retrieve and display the first hobby of each individual in the dataset.

function firstHobbyOfIndividual(arrayOfObjects){
    try{
        const firstHobbyList = [];
        if (arrayOfObjects === undefined) {
            throw new Error("You forget to passing the arrrayOfObject");
        } else if (typeof(arrayOfObjects) !== "object") {
            throw new Error("You are not Passing object");
        }
        for(let i = 0; i < arrayOfObjects.length; i++){
            firstHobbyList.push(arrayOfObjects[i].hobbies[0]);
        }
        return firstHobbyList;
    }catch(error){
        return error.message;
    }
}

export{
    firstHobbyOfIndividual
};