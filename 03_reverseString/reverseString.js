const reverseString = function(string) {
    // take the string and make it into an array
    let arrayString = string.split("");
    let revStr = "";
    // reverse the array
    // then attach a string version of the last letters
    for (let i = arrayString.length - 1; i >= 0; i--) {
        revStr += arrayString[i].toString();
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
