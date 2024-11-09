function videoGameIntrestedUsers(users){
    try{
        if(users === undefined){
            throw new Error ("Pass a valid arguments");
        }
        else if(typeof(users) !== 'object'){
            throw new Error("Your are not passing object");
        }

        const videoGameIntrestedUsersList = [];
        const userListKey = Object.keys(users);
        for(let i = 0; i < userListKey.length; i++){
            if(users[userListKey[i]].interests[0].includes("Video Games")){
                videoGameIntrestedUsersList.push(userListKey[i]);
            }
        }

        return videoGameIntrestedUsersList;

    }catch(error){
        return error.message;
    }
}

export{
    videoGameIntrestedUsers
};