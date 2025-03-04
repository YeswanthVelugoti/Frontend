var Geometry;
(function (Geometry) {
    function calculateArea(radius) {
        return Math.PI * radius * radius;
    }
    Geometry.calculateArea = calculateArea;
})(Geometry || (Geometry = {}));
define("mathOperations", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.add = add;
    function add(a, b) {
        return a + b;
    }
});
define("main", ["require", "exports", "mathOperations"], function (require, exports, mathOperations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var result = (0, mathOperations_1.add)(10, 20);
    console.log("Sum: ".concat(result));
});
