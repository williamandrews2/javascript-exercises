const removeFromArray = function(array, ...theArgs) {
    
    const args = Array.from(theArgs);

    let arrayLength = array.length;
    
    for(let i=0;i<args.length; i++){
        let index = array.indexOf(args[i]);

        // Check to see if the value exists (exists if index is 0 or greater.)
        if(index>-1) {
            array.splice(index, 1);
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
