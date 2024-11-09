function userOfMasters(users){
    try{
        if(users === undefined){
            throw new Error ("Pass a valid arguments");
        }
        else if(typeof(users) !== 'object'){
            throw new Error("Your are not passing object");
        }

        const mastersList = [];
        const keyList = Object.keys(users);

        for(let i = 0; i < keyList.length; i++){
            if(users[keyList[i]].qualification === "Masters"){
                mastersList.push(keyList[i]);
            }
        }

        return mastersList;

    }catch(error){
        return error.message();
    }
}

export{
    userOfMasters
};