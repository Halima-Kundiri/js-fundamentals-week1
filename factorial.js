function numberAnalyzer(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(numberAnalyzer(5));
console.log(numberAnalyzer(-1));