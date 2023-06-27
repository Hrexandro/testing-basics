//A calculator object that contains functions for the basic operations:
// add, subtract, divide, and multiply. Each of these functions
//should take two numbers and return the correct calculation.

function calculator(operation, a, b){
    let result = null

    if (operation === 'addition'){
        result = Number(a) + Number(b);
    } else if (operation === 'subtraction'){
        result = Number(a) - Number(b);
    } else if (operation === 'division'){
        result = Number(a) / Number(b);
    } else if (operation === 'multiplication'){
        result = Number(a) * Number(b);
    }

    return Math.round(result*100000000000000)/100000000000000
}

module.exports = calculator;