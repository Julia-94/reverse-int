module.exports = function reverse (n) {
    const arrayNum = Array.from(String(Math.abs(n)));
    const arrayNumReverse = arrayNum.reverse();
    const result = arrayNumReverse.join('') * 1;
    return result;
}
