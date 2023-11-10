const sumAll = function(start, end) {

    if(start<0 || end<0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }

    else {
        let result = 0;
        let firstNumber = Math.min(start, end);
        let lastNumber = Math.max(start, end);

        // Add all the numbers between the two values by traversing through the loop.
        for(firstNumber;firstNumber<=lastNumber;firstNumber++) {
            result += firstNumber;
        }

        return result;
    }
};

// Do not edit below this line
module.exports = sumAll;
