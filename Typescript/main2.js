var Geometry;
(function (Geometry) {
    function calculateArea(radius) {
        return Math.PI * radius * radius;
    }
    Geometry.calculateArea = calculateArea;
})(Geometry || (Geometry = {}));
var radius = 5;
var area = Geometry.calculateArea(radius);
console.log("Area of the circle: ".concat(area.toFixed(2)));
