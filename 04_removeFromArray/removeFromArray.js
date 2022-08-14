const removeFromArray = function(arr, ...valToRem) {
    for (let val of valToRem){
        let index = arr.indexOf(val);
        if (index !== -1){
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
