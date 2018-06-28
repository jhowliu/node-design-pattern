'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Abstract Car
var ABCCar = function () {
	function ABCCar() {
		_classCallCheck(this, ABCCar);
	}

	_createClass(ABCCar, [{
		key: 'info',
		value: function info() {
			throw new Error('Must implement info().');
		}
	}]);

	return ABCCar;
}();

var X5 = function (_ABCCar) {
	_inherits(X5, _ABCCar);

	function X5() {
		_classCallCheck(this, X5);

		var _this = _possibleConstructorReturn(this, (X5.__proto__ || Object.getPrototypeOf(X5)).call(this));

		_this._brand = 'BMW';
		_this._price = 100000;
		_this._maxSpeed = 300;
		return _this;
	}

	_createClass(X5, [{
		key: 'info',
		value: function info() {
			console.log('======================');
			console.log('Model: X5\nBrand: ' + this._brand + '\nMax Speed: ' + this._maxSpeed + '\nPrice: $' + this._price);
		}
	}]);

	return X5;
}(ABCCar);

var X6 = function (_ABCCar2) {
	_inherits(X6, _ABCCar2);

	function X6() {
		_classCallCheck(this, X6);

		var _this2 = _possibleConstructorReturn(this, (X6.__proto__ || Object.getPrototypeOf(X6)).call(this));

		_this2._brand = 'BMW';
		_this2._price = 150000;
		_this2._maxSpeed = 400;
		return _this2;
	}

	_createClass(X6, [{
		key: 'info',
		value: function info() {
			console.log('======================');
			console.log('Model: X6\nBrand: ' + this._brand + '\nMax Speed: ' + this._maxSpeed + '\nPrice: $' + this._price);
		}
	}]);

	return X6;
}(ABCCar);

var Ferrari812 = function (_ABCCar3) {
	_inherits(Ferrari812, _ABCCar3);

	function Ferrari812() {
		_classCallCheck(this, Ferrari812);

		var _this3 = _possibleConstructorReturn(this, (Ferrari812.__proto__ || Object.getPrototypeOf(Ferrari812)).call(this));

		_this3._brand = 'Ferrari';
		_this3._price = 9999999;
		_this3._maxSpeed = 600;
		return _this3;
	}

	_createClass(Ferrari812, [{
		key: 'info',
		value: function info() {
			console.log('======================');
			console.log('Model: Ferrari 812\nBrand: ' + this._brand + '\nMax Speed: ' + this._maxSpeed + '\nPrice: $' + this._price);
		}
	}]);

	return Ferrari812;
}(ABCCar);

// Abstract Factory


var ABCCarFactory = function () {
	function ABCCarFactory() {
		_classCallCheck(this, ABCCarFactory);
	}

	_createClass(ABCCarFactory, [{
		key: 'createCar',
		value: function createCar(type) {
			throw new Error('Must implement createCar()');
		}
	}]);

	return ABCCarFactory;
}();

// javascript doesn't have class.getName() like Java.


var CarFactory = function (_ABCCarFactory) {
	_inherits(CarFactory, _ABCCarFactory);

	function CarFactory() {
		_classCallCheck(this, CarFactory);

		return _possibleConstructorReturn(this, (CarFactory.__proto__ || Object.getPrototypeOf(CarFactory)).apply(this, arguments));
	}

	_createClass(CarFactory, [{
		key: 'createCar',
		value: function createCar(type) {
			switch (type) {
				case 'X5':
					return new X5();
				case 'X6':
					return new X6();
				case 'Ferrari 812':
					return new Ferrari812();
				default:
					throw new Error('There is no ' + type + ' car.');
			}
		}
	}]);

	return CarFactory;
}(ABCCarFactory);

// create a car factory 


var factory = new CarFactory();

// create the products(cars here)
var x5 = factory.createCar('X5');
x5.info();

var ferrari = factory.createCar('Ferrari 812');
ferrari.info();

var x6 = factory.createCar('X6');
x6.info();
