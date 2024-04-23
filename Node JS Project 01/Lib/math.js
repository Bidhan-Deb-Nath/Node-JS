const math = {};
math.get_random_number = (min, max) => {
    let minimum = min;
    let maximum = max;
    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

module.exports = math;