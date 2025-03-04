function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    }
    catch (error) {
        console.error("Error parsing JSON:", error.message);
        return null;
    }
}
// Valid JSON string
var validJson = '{"name": "yeswa", "age": 24}';
console.log("Parsed JSON:", parseJson(validJson));
// Invalid JSON string
var invalidJson = '{"name": "yeswa", "age": 25,';
console.log("Parsed JSON:", parseJson(invalidJson));
