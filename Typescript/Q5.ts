function identity<T>(value: T): T {
    return value;
}

const s1 = identity<string>("Hello");
const n1 = identity<number>(42);

console.log("String result:", s1);
console.log("Number result:", n1);
