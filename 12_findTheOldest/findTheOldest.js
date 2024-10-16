const findTheOldest = function(arr) {
    return arr.reduce((oldest, person) => {
        // Handle if yearOfDeath is missing (person is still alive)
        const currentYear = new Date().getFullYear();
        const yearOfDeath = person.yearOfDeath || currentYear;

        // Calculate the person & oldest age
        const personAge = yearOfDeath - person.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        
        return personAge > oldestAge ? person : oldest;
    }, arr[0])
};

// Do not edit below this line
module.exports = findTheOldest;
