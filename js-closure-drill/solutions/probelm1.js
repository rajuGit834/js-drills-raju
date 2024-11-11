function counterFactory() {
    let counter = 0;
    return {
       increment : function(){
            return ++counter;
        },
        decrement : function(){
            return --counter;
        }
    }
}

export{
    counterFactory
};

