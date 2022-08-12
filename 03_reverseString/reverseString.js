const reverseString = function(str) {
    let arr = str.split('');
    let revStr = '';

    for(let i = arr.length-1; i >= 0; i--) {
        revStr = revStr + arr[i].toString();
    } 
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
