function identity(value) {
    return value;
}
var s1 = identity("Hello");
var n1 = identity(42);
console.log("String result:", s1);
console.log("Number result:", n1);
