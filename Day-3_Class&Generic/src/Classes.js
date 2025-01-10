// 기본 문법
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
// class 클래스 이름 {
//     필드
//     메서드
// }
var Continent = /** @class */ (function () {
    function Continent(name) {
        this.continentName = name;
    }
    Continent.prototype.getContinentName = function () {
        return this.continentName;
    };
    return Continent;
}());
var Country = /** @class */ (function (_super) {
    __extends(Country, _super);
    function Country(continentName, name, capital) {
        var _this = _super.call(this, continentName) || this;
        _this.name = name;
        _this.capital = capital;
        return _this;
    }
    Country.prototype.getInfo = function () {
        return "".concat(this.name, ", ").concat(this.capital, ", ").concat(this.getContinentName());
    };
    return Country;
}(Continent));
var country = new Country("Asia", "South Korea", "Busan");
// country.name = "South Korea";
// country.capital = "Busan";
console.log(country.getInfo());
