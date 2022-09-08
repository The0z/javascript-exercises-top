const palindromes = function (str) {
    str = str.toLowerCase(); //Remove any capitalization
    str = str.replace(/\W|_/g, ''); //Replace all punctuation regEx with nothing.
    str = str.replace(/\s+/g, ''); //Replace all space with nothing.

    let arr = str.split('');

    //Compare the left and right most end of the array
    //Then move inwards from both left and right.
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] != arr[arr.length - i - 1]){
            return false;
        } 
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
