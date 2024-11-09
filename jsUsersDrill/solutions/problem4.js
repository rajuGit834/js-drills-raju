function createObject(userName, desgination){
    return {
        user: userName,
        desgination: desgination
    };
}

function groupingUsers(users){
    
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
