// @flow

interface ICar {
}

class Car implements ICar {
	_model: string
	_engine: string;
	_wheel: string;
	constructor(engine: string, wheel: string, model: string): void {
		this._engine = engine;
		this._wheel = wheel;
		this._model = model;
	}

	get engine() {
		return this._engine;
	}

	get wheel() {
		return this._wheel;
	}

	get model() {
		return this._model;
	}

	toString(): void {
		console.log(`牌子: ${this._model}\n輪胎: ${this._wheel}\n引擎: ${this._engine}`);
	}
}

// abstract class
class ABCCarBuilder {
	_wheel: string;
	_engine: string;
	_model: string;

	constructor(model: string): void {
		this._model = model;
	}

	buildCar(): ICar {
		return new Car(this._engine, this._wheel, this._model);
	}
	// Builder pattern特色可以自定義輪胎跟引擎
	set wheel(wheel: string) {
		this._wheel = wheel;
	}

	set engine(engine: string) {
		this._engine = engine;
	}
}

class BMWCarBuilder extends ABCCarBuilder {
	constructor(): void {
		super("BMW");
	}
}

class BENZCarBuilder extends ABCCarBuilder {
	constructor(): void {
		super("BenZ");
	}
}

const BMWBuilder: ABCCarBuilder = new BMWCarBuilder(); 
const BenZbuilder: ABCCarBuilder = new BENZCarBuilder();

console.log('\n=======製造一台BMW X5=======');
BMWBuilder.engine = `X5 標準引擎`;
BMWBuilder.wheel = `X5 標準輪胎`;
const x5: ICar = BMWBuilder.buildCar();
x5.toString();

console.log('\n=======製造一台BMW X5年度版=======');
BMWBuilder.engine = `X5 年度版引擎`;
BMWBuilder.wheel = `X5 年度版輪胎`;
const x5Year: ICar = BMWBuilder.buildCar();
x5Year.toString();

console.log('\n=======製造一台BenZ C300=======');
BenZbuilder.engine = `C300 標準引擎`;
BenZbuilder.wheel = `C300 標準輪胎`;
const c300: ICar = BenZbuilder.buildCar();
c300.toString();
