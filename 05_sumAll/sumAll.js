const sumAll = function(num1, num2) {
    if (!(typeof num1 === 'number') || !(typeof num2 === 'number') || 
        num1 <= 0 || num2 <= 0){
            return 'ERROR'
    }

    if(num1 > num2){
        let tempNum = num1;
        num1 = num2;
        num2 = tempNum;
    }
    num1 = num1 - 1;
    //gauss summation with 1 to smaller number-1  not included.
    return (num2*(num2+1) - num1*(num1+1))/2
};

// Do not edit below this line
module.exports = sumAll;
