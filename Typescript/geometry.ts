namespace Geometry {
    export function calculateArea(radius: number): number {
        return Math.PI * radius * radius;
    }
}
//To complie , bcz we used namespace->  tsc --outFile main.js --module amd geometry.ts main.ts