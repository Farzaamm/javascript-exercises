const findTheOldest = function(people) {
    let oldest = 0
    let oldestPerson = {}
    for (let i of people){
        if (!i.yearOfDeath){
            i.yearOfDeath = new Date().getFullYear()
        }
        let age = i.yearOfDeath - i.yearOfBirth
        if (age > oldest){
            oldest = age
            oldestPerson = i
        }
    }
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
