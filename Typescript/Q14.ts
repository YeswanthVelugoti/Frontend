// Class Decorator Function
function LogOnInstantiation(constructor: Function) {
    console.log(`Class ${constructor.name} is instantiated.`);
}

// Applying the decorator to the User class
@LogOnInstantiation
class User {
    constructor(public name: string, public age: number) {
        console.log(`User ${this.name}, Age: ${this.age} created.`);
    }
}

// Creating an instance of User
const user21 = new User("king", 25);



