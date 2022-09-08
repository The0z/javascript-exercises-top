const findTheOldest = function(arr) { 


    return arr.reduce(function(prevPerson, currPerson){
        let prevAge = CheckAge(prevPerson);
        let currAge = CheckAge(currPerson);
        
        if (prevAge > currAge){
            return prevPerson;
        } else {
            return currPerson;
        }

    });
    
};

function CheckAge(obj){
    if(!obj.yearOfDeath){
        const today = new Date()
        return today.getFullYear() - obj.yearOfBirth;
    }
    return obj.yearOfDeath - obj.yearOfBirth;
}


// Do not edit below this line
module.exports = findTheOldest;
