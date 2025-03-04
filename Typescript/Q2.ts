let age: number = 25;
let isActive: boolean = true;

function getUserInfo(age: number, isActive: boolean): string {
    return `His age is ${age} years old and is currently ${isActive ? "active" : "inactive"}.`;
}

console.log(getUserInfo(age, isActive));
