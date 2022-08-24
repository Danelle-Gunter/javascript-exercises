const palindromes = function (str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z]/g, "");
    
    for (let i = 0; i < cleanStr.length/2 ; i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false;
        }
    }

    return true;
    // const reverseStr = cleanStr.split('').reverse().join('');
    // return reverseStr == cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
