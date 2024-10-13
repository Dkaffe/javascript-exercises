const leapYears = function(year) {
    // Algorithm to determine if a year is a leap year
    // In summary: Years divisible by 4 are leap years,
    // unless they are divisible by 100 but not by 400.
    if (year % 4 == 0 && (!(year % 100 == 0) || year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
