const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    oldestAge = arr.reduce((accumulator, item, index, array) => {
        if (item.yearOfDeath == undefined) {
            console.log(item.yearOfDeath);
            item.yearOfDeath = currentYear;
            console.log(item.yearOfDeath);
        }
        let age = item.yearOfDeath - item.yearOfBirth;
        if (age > accumulator) {
            accumulator = age;
        }
        return accumulator;
    }, 0)

    oldestPersonIndex = arr.findIndex((item, index, array) => {
        if (item.yearOfDeath - item.yearOfBirth == oldestAge) {
            return true;
        } else return false;
    })

    return arr[oldestPersonIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
