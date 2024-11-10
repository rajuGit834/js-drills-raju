function createObject(userName, desgination){
    return {
        user: userName,
        desgination: desgination
    };
}

function groupingUsers(users){
    if(users === undefined){
        throw new Error("You are not passing the arguments in function");
    }else if(typeof(users) !== 'object'){
        throw new Error("You are not passing object");
    }

    const userList = [];
    const keyList = Object.keys(users);

    for(let i = 0; i < keyList.length; i++){
        userList.push(createObject(keyList[i], users[keyList[i]].desgination));

    }
    return userList;
}

export{
    groupingUsers
};
