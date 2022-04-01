
let sum2 = (a, b) => {
    return a + b;
};

const divide = (a, b) => {
    if (b === 0) {
        return NaN;
    }
    return a / b;
}

export { sum2, divide };