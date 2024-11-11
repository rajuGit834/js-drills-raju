function limitFunctionCallCount(cb, n) {
    let count = 0;
  
    return function() {
      if (count < n) {
        count++;
        return cb(count);
      } else {
        return null;
      }
    };
}

export{
    limitFunctionCallCount
};