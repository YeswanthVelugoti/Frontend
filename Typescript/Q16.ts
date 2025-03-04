function parseJson(jsonString: string): any | null {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error("Error parsing JSON:", error.message);
        return null;
    }
}

// Valid JSON string
const validJson = '{"name": "yeswa", "age": 24}';
console.log("Parsed JSON:", parseJson(validJson)); 

// Invalid JSON string
const invalidJson = '{"name": "yeswa", "age": 25,'; 
console.log("Parsed JSON:", parseJson(invalidJson)); 
