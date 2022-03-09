const palindromes = function (string) {
    let clearString = ""
    for (let i = 0; i < string.length; i++){
        if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 123){
            clearString += string.charAt(i);
        }
    }
    const array = clearString.split("")
    const reversed = array.slice(0).reverse()

    if (array.join("").toLocaleLowerCase() === reversed.join("").toLocaleLowerCase()){
        return true
    }else{
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
