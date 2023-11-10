const leapYears = function(year) {

    // Check to see if year if divisble by 4.
    if(year%4==0 && year%100!=0) return true;
    if(year%100==0 && year%400==0) return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
