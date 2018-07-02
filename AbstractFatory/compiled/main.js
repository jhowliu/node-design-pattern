'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Abstract Class
var ABCVehicle = function () {
	function ABCVehicle(brand, model, price, maxSpeed) {
		_classCallCheck(this, ABCVehicle);

		this._brand = brand;
		this._price = price;
		this._model = model;
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

var Bike = function (_ABCVehicle2) {
	_inherits(Bike, _ABCVehicle2);

	function Bike(brand, model, price, maxSpeed) {
		_classCallCheck(this, Bike);

		return _possibleConstructorReturn(this, (Bike.__proto__ || Object.getPrototypeOf(Bike)).call(this, brand, model, price, maxSpeed));
	}

	return Bike;
}(ABCVehicle);

var ABCFactory = function () {
	function ABCFactory() {
		_classCallCheck(this, ABCFactory);
	}

	_createClass(ABCFactory, [{
		key: 'createVehicle',
		value: function createVehicle(type) {
			throw new Error('Must implement createVehicle()');
		}
	}]);

	return ABCFactory;
}();

var BikeFactory = function (_ABCFactory) {
	_inherits(BikeFactory, _ABCFactory);

	function BikeFactory() {
		_classCallCheck(this, BikeFactory);

		return _possibleConstructorReturn(this, (BikeFactory.__proto__ || Object.getPrototypeOf(BikeFactory)).apply(this, arguments));
	}

	_createClass(BikeFactory, [{
		key: 'createVehicle',
		value: function createVehicle(type) {
			switch (type) {
				case 'CB1100RS':
					return new Bike('Honda', 'CB1100RS', 528000, 188);
				default:
					throw new Error('There is no ' + type + ' bike.');
			}
		}
	}]);

	return BikeFactory;
}(ABCFactory);

// javascript doesn't have class.getName() like Java.


var CarFactory = function (_ABCFactory2) {
	_inherits(CarFactory, _ABCFactory2);

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
					return new Car('Ferrari', 'Ferrari 812', 10000000, 399);
				default:
					throw new Error('There is no ' + type + ' car.');
			}
		}
	}]);

	return CarFactory;
}(ABCFactory);

// create a car factory 


var carFactory = new CarFactory();
var bikeFactory = new BikeFactory();

var x5 = carFactory.createVehicle('X5');
x5.info();

var ferrari812 = carFactory.createVehicle('Ferrari 812');
ferrari812.info();

var cb1100rs = bikeFactory.createVehicle('CB1100RS');
cb1100rs.info();
