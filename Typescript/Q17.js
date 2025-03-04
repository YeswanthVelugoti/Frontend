function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero");
    }
    return numerator / denominator;
}
console.log("Result:", divideNumbers(10, 2));
try {
    console.log("Result:", divideNumbers(10, 0));
}
catch (error) {
    console.error("Error:", error.message);
}
