const removeFromArray = function(arr, ...arrOfArgs) {
    filteredArray = [];
    for (i = 0; i < arr.length; i++) {
        sameElementfound = false;
        for (j = 0; j < arrOfArgs.length; j++) {
            if (arr[i] === arrOfArgs[j]) {
                sameElementfound = true;
            }
        }
        if (sameElementfound == false) {
            filteredArray.push(arr[i]);
        }
    }
    console.log(filteredArray);
    return filteredArray;
}

// Do not edit below this line
module.exports = removeFromArray;
