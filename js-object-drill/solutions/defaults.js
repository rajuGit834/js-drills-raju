
function defaults(obj, defaultProps) {
    for(let key in defaultProps){
        if(obj[key] === undefined){
            obj[key] = defaultProps[key];
        }
    }
    return obj;
}

export{
    defaults
};
  