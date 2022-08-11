const removeFromArray = function(...args) {
    // first element will be the array
    const array = args[0];
    // newArray will store the array with the items taken away
    const newArray = [];
    
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
