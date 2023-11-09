const reverseString = function(word) {
    let str = "";
    let wordLength = word.length;
    for(let i = wordLength-1; i>=0;i--){
        str += word.charAt(i);
    }
    return str;
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
