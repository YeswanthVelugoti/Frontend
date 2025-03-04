// Property Decorator to validate email
function ValidateEmail(target: any, propertyKey: string) {
    let value: string;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    Object.defineProperty(target, propertyKey, {
        get: function () {
            return value;
        },
        set: function (newValue: string) {
            if (!emailRegex.test(newValue)) {
                throw new Error(`Invalid email format for property "${propertyKey}": ${newValue}`);
            }
            value = newValue;
        },
        enumerable: true,
        configurable: true
    });
}

// Applying the decorator to the User class
class Uuser {
    
    @ValidateEmail
    email: string;

    constructor(email: string) {
        this.email = email;
    }
}

// Valid email
const user1 = new Uuser("y@gmail.com");
console.log("User created successfully:", user1.email);

// Invalid email (throws error)
const user2 = new Uuser("invalid-email");
