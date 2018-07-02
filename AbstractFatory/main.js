// @flow

// Abstract Class
class ABCVehicle {
	_brand: string;
	_model: string;
	_price: number;
	_maxSpeed: number;
	constructor(brand: string, model: string, price: number, maxSpeed: number): void {
		this._brand = brand;
		this._price = price;
		this._model = model;
		this._maxSpeed = maxSpeed;
	}

	info(): void {
		console.log(`===================`)
		console.log(`Model: ${this._model}\nBrand: ${this._brand}\nMax Speed: ${this._maxSpeed}\nPrice: $${this._price}`)
	}
}

class Car extends ABCVehicle {
	constructor(brand: string, model: string, price:number, maxSpeed: number):void {
		super(brand, model, price, maxSpeed);
	}
}

class Bike extends ABCVehicle {
	constructor(brand: string, model: string, price:number, maxSpeed: number):void {
		super(brand, model, price, maxSpeed);
	}
}

class ABCFactory {
	createVehicle(type: string): ABCVehicle {
		throw new Error('Must implement createVehicle()');
	}
}

class BikeFactory extends ABCFactory {
	createVehicle(type: string): ABCVehicle {
		switch (type) {
			case 'CB1100RS':
				return new Bike('Honda', 'CB1100RS', 528000, 188);
			default:
				throw new Error(`There is no ${type} bike.`)
		}
	}
}

// javascript doesn't have class.getName() like Java.
class CarFactory extends ABCFactory {
	createVehicle(type: string): ABCVehicle {
		switch (type) {
			case 'X5': 
				return new Car('BMW', 'X5', 3000000, 299)
			case 'Ferrari 812':
				return new Car('Ferrari', 'Ferrari 812', 10000000, 399);
			default:
				throw new Error(`There is no ${type} car.`)
		}
	}
}

// create a car factory 
const carFactory: ABCFactory = new CarFactory();
const bikeFactory: ABCFactory = new BikeFactory();

const x5: ABCVehicle = carFactory.createVehicle('X5');
x5.info();

const ferrari812: ABCVehicle = carFactory.createVehicle('Ferrari 812');
ferrari812.info();

const cb1100rs: ABCVehicle = bikeFactory.createVehicle('CB1100RS')
cb1100rs.info();