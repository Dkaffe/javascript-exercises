const sumAll = function(num1, num2) {
    // Confirm function input
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    // Store the sum of missing numbers for iteration
    let missingNumbers = num2 - num1;

    // In case bigger num first reverse order
    if(num1 > num2) {
        missingNumbers = num1 - num2;
    }

    // Add inbetween values to the sum
    let sum = num1 + num2;
    for (missingNumbers; missingNumbers > 1; missingNumbers--) {
        sum += missingNumbers;
    }

    // return the sum of all ints
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
