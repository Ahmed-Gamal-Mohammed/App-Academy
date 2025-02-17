const isFive = (num) => num === 5;

const isOdd = (num) => {
    if (isNaN(num)) throw new Error;
    else {
        return num % 2 !== 0;
    }
}

const myRange = (min, max, step = 1) => {
    let results = [];
    for (let i = min; i <= max; i += step) {
        results.push(i);
    }
    return results;
}

module.exports = { isFive, isOdd, myRange };
