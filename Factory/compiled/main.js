'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Abstract Car
var ABCVehicle = function () {
	function ABCVehicle(brand, model, price, maxSpeed) {
		_classCallCheck(this, ABCVehicle);

		this._model = model;
		this._brand = brand;
		this._price = price;
		this._maxSpeed = maxSpeed;
	}

	_createClass(ABCVehicle, [{
		key: 'info',
		value: function info() {
			console.log('===================');
			console.log('Model: ' + this._model + '\nBrand: ' + this._brand + '\nMax Speed: ' + this._maxSpeed + '\nPrice: $' + this._price);
		}
	}]);

	return ABCVehicle;
}();

var Car = function (_ABCVehicle) {
	_inherits(Car, _ABCVehicle);

	function Car(brand, model, price, maxSpeed) {
		_classCallCheck(this, Car);

		return _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this, brand, model, price, maxSpeed));
	}

	return Car;
}(ABCVehicle);

// Abstract Factory


var ABCFactory = function () {
	function ABCFactory() {
		_classCallCheck(this, ABCFactory);
	}

	_createClass(ABCFactory, [{
		key: 'createVehicle',
		value: function createVehicle(type) {
			throw new Error('Must implement createCar()');
		}
	}]);

	return ABCFactory;
}();

// javascript doesn't have class.getName() like Java.


var CarFactory = function (_ABCFactory) {
	_inherits(CarFactory, _ABCFactory);

	function CarFactory() {
		_classCallCheck(this, CarFactory);

		return _possibleConstructorReturn(this, (CarFactory.__proto__ || Object.getPrototypeOf(CarFactory)).apply(this, arguments));
	}

	_createClass(CarFactory, [{
		key: 'createVehicle',
		value: function createVehicle(type) {
			switch (type) {
				case 'X5':
					return new Car('BMW', 'X5', 3000000, 299);
				case 'Ferrari 812':
					return new Car('Ferrari', 'Ferrari 812', 10000000, 499);
				case 'X6':
					return new Car('BMW', 'X6', 5000000, 399);
				default:
					throw new Error('There is no ' + type + ' car.');
			}
		}
	}]);

	return CarFactory;
}(ABCFactory);

// create a car factory 


var factory = new CarFactory();

// create the products(cars here)
var x5 = factory.createVehicle('X5');
x5.info();

var ferrari = factory.createVehicle('Ferrari 812');
ferrari.info();

var x6 = factory.createVehicle('X6');
x6.info();
