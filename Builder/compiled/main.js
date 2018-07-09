"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function () {
	function Car(engine, wheel, model) {
		_classCallCheck(this, Car);

		this._engine = engine;
		this._wheel = wheel;
		this._model = model;
	}

	_createClass(Car, [{
		key: "toString",
		value: function toString() {
			console.log("\u724C\u5B50: " + this._model + "\n\u8F2A\u80CE: " + this._wheel + "\n\u5F15\u64CE: " + this._engine);
		}
	}, {
		key: "engine",
		get: function get() {
			return this._engine;
		}
	}, {
		key: "wheel",
		get: function get() {
			return this._wheel;
		}
	}, {
		key: "model",
		get: function get() {
			return this._model;
		}
	}]);

	return Car;
}();

// abstract class


var ABCCarBuilder = function () {
	function ABCCarBuilder(model) {
		_classCallCheck(this, ABCCarBuilder);

		this._model = model;
	}

	_createClass(ABCCarBuilder, [{
		key: "buildCar",
		value: function buildCar() {
			return new Car(this._engine, this._wheel, this._model);
		}
	}, {
		key: "wheel",
		set: function set(wheel) {
			this._wheel = wheel;
		}
	}, {
		key: "engine",
		set: function set(engine) {
			this._engine = engine;
		}
	}]);

	return ABCCarBuilder;
}();

var BMWCarBuilder = function (_ABCCarBuilder) {
	_inherits(BMWCarBuilder, _ABCCarBuilder);

	function BMWCarBuilder() {
		_classCallCheck(this, BMWCarBuilder);

		return _possibleConstructorReturn(this, (BMWCarBuilder.__proto__ || Object.getPrototypeOf(BMWCarBuilder)).call(this, "BMW"));
	}

	return BMWCarBuilder;
}(ABCCarBuilder);

var BENZCarBuilder = function (_ABCCarBuilder2) {
	_inherits(BENZCarBuilder, _ABCCarBuilder2);

	function BENZCarBuilder() {
		_classCallCheck(this, BENZCarBuilder);

		return _possibleConstructorReturn(this, (BENZCarBuilder.__proto__ || Object.getPrototypeOf(BENZCarBuilder)).call(this, "BenZ"));
	}

	return BENZCarBuilder;
}(ABCCarBuilder);

var BMWBuilder = new BMWCarBuilder();
var BenZbuilder = new BENZCarBuilder();

console.log('\n=======製造一台BMW X5=======');
BMWBuilder.engine = "X5 \u6A19\u6E96\u5F15\u64CE";
BMWBuilder.wheel = "X5 \u6A19\u6E96\u8F2A\u80CE";
var x5 = BMWBuilder.buildCar();
x5.toString();

console.log('\n=======製造一台BMW X5年度版=======');
BMWBuilder.engine = "X5 \u5E74\u5EA6\u7248\u5F15\u64CE";
BMWBuilder.wheel = "X5 \u5E74\u5EA6\u7248\u8F2A\u80CE";
var x5Year = BMWBuilder.buildCar();
x5Year.toString();

console.log('\n=======製造一台BenZ C300=======');
BenZbuilder.engine = "C300 \u6A19\u6E96\u5F15\u64CE";
BenZbuilder.wheel = "C300 \u6A19\u6E96\u8F2A\u80CE";
var c300 = BenZbuilder.buildCar();
c300.toString();
