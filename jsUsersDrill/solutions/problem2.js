function livesInGermany(users){
    try{
        if(users === undefined){
            throw new Error("You are not passing any arguments");
        }else if(typeof(users) !== 'object'){
            throw new Error("You are not passing the object");
        }
        const keyList = Object.keys(users);
        const germanyUserList = [];

        for(let i = 0; i < keyList.length; i++){
            if(users[keyList[i]].nationality === 'Germany'){
                germanyUserList.push(keyList[i]);
            }
        }

        return germanyUserList;

    }catch(error){
        return error.message;
    }
}

export{
    livesInGermany
};