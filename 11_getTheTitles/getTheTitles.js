const getTheTitles = function(obj) {
    let titles = []
    for (let i of obj){
        titles.push(i.title)
    }
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
