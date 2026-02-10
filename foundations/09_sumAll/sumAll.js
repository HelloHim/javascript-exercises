const sumAll = function(a, b) {
    counter = 0;
    if ((a < 0) || (b < 0)) return "ERROR";
    if ((Number.isInteger(a) == false) || (Number.isInteger(b) == false)) return "ERROR";
    if (a < b) {
        for (i = a; i <= b; i++) {
            counter += i;
        }
    } else{
        for (i = b; i <= a; i++) {
            counter += i;
        }
    }
    return counter;
};

// Do not edit below this line
module.exports = sumAll;
