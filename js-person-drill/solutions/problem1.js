
function emailAddressOfAll(arrayOfObjects){
    
    try{
        const emailAddresses = [];
        if(arrayOfObjects === undefined) {
            throw new Error("You forget to passing the arrrayOfObject");
        }else if(typeof(arrayOfObjects) !== 'object'){
            throw new Error("You are not Passing object");
        }
        for(let i=0; i<arrayOfObjects.length; i++){
            emailAddresses.push(arrayOfObjects[i].email);
        }
        return emailAddresses;
    }catch(error){
        return error.message;
    }
}

export{
    emailAddressOfAll
};