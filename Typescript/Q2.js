var age = 25;
var isActive = true;
function getUserInfo(age, isActive) {
    return "His age is ".concat(age, " years old and is currently ").concat(isActive ? "active" : "inactive", ".");
}
console.log(getUserInfo(age, isActive));
