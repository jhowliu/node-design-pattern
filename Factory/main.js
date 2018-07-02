// @flow

// Abstract Car
class ABCVehicle {
	_model: string;
	_brand: string;
	_price: number;
	_maxSpeed: number;

	constructor(brand: string, model: string, price: number, maxSpeed: number): void {
		this._model = model;
		this._brand = brand;
		this._price = price;
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

// Abstract Factory
class ABCFactory {
	createVehicle(type: string): ABCVehicle {
		throw new Error('Must implement createCar()');
	}
}

// javascript doesn't have class.getName() like Java.
class CarFactory extends ABCFactory {
	createVehicle(type: string): ABCVehicle {
		switch (type) {
			case 'X5': 
				return new Car('BMW', 'X5', 3000000, 299)
			case 'Ferrari 812':
				return new Car('Ferrari', 'Ferrari 812', 10000000, 499);
			case 'X6':
				return new Car('BMW', 'X6', 5000000, 399);
			default:
				throw new Error(`There is no ${type} car.`)
		}
	}
}

// create a car factory 
const factory: ABCFactory = new CarFactory();

// create the products(cars here)
const x5: ABCVehicle = factory.createVehicle('X5');
x5.info();

const ferrari: ABCVehicle = factory.createVehicle('Ferrari 812');
ferrari.info();

const x6: ABCVehicle = factory.createVehicle('X6');
x6.info();
