function hobbiesAndAgeOfAllPersons(arrayOfObjects){
    const hobbiesAndAges = [];
    try{
        if(arrayOfObjects === undefined) {
            throw new Error("You forget to passing the arrrayOfObject");
        }else if(typeof(arrayOfObjects) !== 'object'){
            throw new Error("You are not Passing object");
        }
        for(let i = 0; i < arrayOfObjects.length; i++){
            if(arrayOfObjects[i].age == 30){
                hobbiesAndAges.push(arrayOfObjects[i].hobbies);
            }
        }
    }catch(error){
        return error.message;
    }
    return hobbiesAndAges;
}

export{
    hobbiesAndAgeOfAllPersons
};