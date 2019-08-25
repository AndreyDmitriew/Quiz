const getRandomInt = require('./getRandomInt');

function mixArray (input) {
    let result = [];

    let gost = [];
    for (let i = 0; i < input.length; i++) {
        gost.push(i);
    }

    for (let i = 0; i < input.length; i++) {
        let rand = getRandomInt(0, gost.length-1);
        result.push(input[gost[rand]]);
        gost.splice(rand, 1);
    }

    return result;
}

module.exports = mixArray;
