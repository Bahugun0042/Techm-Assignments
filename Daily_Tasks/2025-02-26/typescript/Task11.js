var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shapes = /** @class */ (function () {
    function Shapes(color) {
        this.color = color;
    }
    Shapes.prototype.draw = function () {
        console.log("Drawing a shape of color ".concat(this.color));
    };
    return Shapes;
}());
var Circles = /** @class */ (function (_super) {
    __extends(Circles, _super);
    function Circles(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circles.prototype.draw = function () {
        console.log("Drawing a circle of color ".concat(this.color, " with radius ").concat(this.radius));
    };
    return Circles;
}(Shapes));
// Example usage
var shape = new Shapes("red");
shape.draw();
var circles = new Circles("blue", 5);
circles.draw();
