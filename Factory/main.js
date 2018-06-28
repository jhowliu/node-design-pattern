// @flow

// Abstract Car
class ABCCar {
	_brand: string;
	_price: number;
	_maxSpeed: number;
	info(): void {
		throw new Error('Must implement info().');
	}
}

class X5 extends ABCCar {
	constructor(): void {
		super();
		this._brand = 'BMW';
		this._price = 100000;
		this._maxSpeed = 300;
	}

	info(): void {
		console.log(`======================`)
		console.log(`Model: X5\nBrand: ${this._brand}\nMax Speed: ${this._maxSpeed}\nPrice: $${this._price}`)
	}
}

class X6 extends ABCCar {
	constructor(): void {
		super();
		this._brand = 'BMW';
		this._price = 150000;
		this._maxSpeed = 400;
	}

	info(): void {
		console.log(`======================`)
		console.log(`Model: X6\nBrand: ${this._brand}\nMax Speed: ${this._maxSpeed}\nPrice: $${this._price}`)
	}
}

class Ferrari812 extends ABCCar {
	constructor(): void {
		super();
		this._brand = 'Ferrari';
		this._price = 9999999;
		this._maxSpeed = 600;
	}

	info(): void {
		console.log(`======================`)
		console.log(`Model: Ferrari 812\nBrand: ${this._brand}\nMax Speed: ${this._maxSpeed}\nPrice: $${this._price}`)
	}
}

// Abstract Factory
class ABCCarFactory {
	createCar(type: string): ABCCar {
		throw new Error('Must implement createCar()');
	}
}

// javascript doesn't have class.getName() like Java.
class CarFactory extends ABCCarFactory {
	createCar(type: string): ABCCar {
		switch (type) {
			case 'X5': 
				return new X5();
			case 'X6':
				return new X6();
			case 'Ferrari 812':
				return new Ferrari812();
			default:
				throw new Error(`There is no ${type} car.`)
		}
	}
}

// create a car factory 
const factory: ABCCarFactory = new CarFactory();

// create the products(cars here)
const x5: ABCCar = factory.createCar('X5');
x5.info();

const ferrari: ABCCar = factory.createCar('Ferrari 812');
ferrari.info();

const x6: ABCCar = factory.createCar('X6');
x6.info();
