const reverseString = function(word) {
    let initialString = word.split("");
    let reverseStringArray = initialString.reverse();
    let reversedWord = reverseStringArray.join("");
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
