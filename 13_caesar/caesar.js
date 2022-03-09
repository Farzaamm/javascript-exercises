const caesar = function(string, shift) {
    let cipher = ""
    for (let i = 0; i < string.length; i++){
        let charCode = string.charCodeAt(i)
        if (charCode > 64 && charCode < 91){ //if it's a capital letter 65-90
            let newChar = String.fromCharCode(charCode + shift)
            while (newChar.charCodeAt(0) > 90){
                newChar = String.fromCharCode(newChar.charCodeAt(0) - 26)
                }
            while (newChar.charCodeAt(0) < 65){
                newChar = String.fromCharCode(newChar.charCodeAt(0) + 26)
                }
            cipher += newChar
        }else if(charCode > 96 && charCode < 123){ // if it's a small letter 97-122
            let newChar = String.fromCharCode(charCode + shift)
            while (newChar.charCodeAt(0) > 122){
                newChar = String.fromCharCode(newChar.charCodeAt(0) - 26)
                }
            while (newChar.charCodeAt(0) < 97){
                newChar = String.fromCharCode(newChar.charCodeAt(0) + 26)
                }
            cipher += newChar
        }else{
            cipher += string.charAt(i)
        }
    }
    return cipher
};

// Do not edit below this line
module.exports = caesar;
