const fibonacci = function(x) {

    x = Number(x);

    if (x < 0) return "OOPS";

    switch (x) {
        case 0:
            return 0;
            break;
        case 1:
            return 1;
            break;
        case 2:
            return 1;
            break;
        case 3:
            return 2;
        case false:
            return "OOPS";
    }

    let a = 1;
    let b = 2;
    let c = 3;

    for (i = 3; i < x; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
