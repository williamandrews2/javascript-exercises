const repeatString = function(word, num) {
    if(num>=0){
        let str = '';
        for(let i=0;i<num;i++) {
            str += word;
        }
    return str;
    }
    
    else {
        return "ERROR";
    }
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
