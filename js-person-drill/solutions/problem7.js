// Write a function that accesses and prints the names and email addresses of individuals aged 25.

function nameAndEmailOfIndividual(arrayOfObjects){
    try{
        if (arrayOfObjects === undefined) {
            throw new Error("You forget to passing the arrrayOfObject");
        } else if (typeof(arrayOfObjects) !== "object") {
            throw new Error("You are not Passing object");
        }
        for(let i = 0; i < arrayOfObjects.length; i++){
            if(arrayOfObjects[i].age === 25){
                console.log(arrayOfObjects[i].name + ' ' + arrayOfObjects[i].email);
            }
        }
    }catch(error){
        console.log(error.message);
    }
}

export{
    nameAndEmailOfIndividual
};