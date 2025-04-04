enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

function getColorName(color: Color): string {
    return `Color is ${color}.`;
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Green));
console.log(getColorName(Color.Blue));
