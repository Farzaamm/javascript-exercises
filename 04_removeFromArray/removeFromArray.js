const removeFromArray = function() {
    let argsArray = []
    for (let i of arguments){
        argsArray.push(i)
    }
    let array = argsArray[0]
    let removables = argsArray.slice(1)

    let filteredArray = array
    for (i of removables){
        filteredArray = filteredArray.filter((el) => el !== i)
    }
    return filteredArray

};

// Do not edit below this line
module.exports = removeFromArray;
