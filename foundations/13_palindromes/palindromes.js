const palindromes = function (str) {
    const cleanString = str.replace(/[\p{P}\p{S}\s]/gu, '');
    strArr = cleanString.toLowerCase().split("");
    return strArr.reduce((accumulator, item, index, array) => {
        if (accumulator == false) return false;
        if (item !== array.at(accumulator)) {
            return false;
        } else {
            accumulator--
            if (accumulator + array.length == -1) {
                return true;
            } else {
                return accumulator
            }
        }
    }, -1)
};

// Do not edit below this line
module.exports = palindromes;
