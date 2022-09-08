const fibonacci = function(elemPos) {
    elemPos = parseInt(elemPos); //convert str to int
    if (elemPos < 1) {
        return "OOPS" //negative num case
    }
    
    let elemVal = 1;
    let temp = 0;
    
    //index starts at 1 not 0.
    for(let i = 1; i < elemPos; i++){
        elemVal += temp;
        temp = elemVal - temp; //set to the pre Val
    }
    return elemVal;
};

// Do not edit below this line
module.exports = fibonacci;
