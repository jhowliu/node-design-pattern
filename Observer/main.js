// @flow

// Obsersable (Abstract Class)
class Obsersable {
	_observers: Observer[];

	addObserver(observer: Observer): void {
		this._observers.push(observer);
	}

	removeObserver(observer: Observer): void {
		const index = this._observers.findIndex((o, ix) => o.id == observer.id);
		this._observers.splice(index, 1);
	}

	notify(): void {
		this._observers.forEach((o, _) => o.update());
	}
}

class Target extends Obsersable {
	constructor(): void {
		super()
		this._observers = []
	}

	doSomething(): void {
		this.notify();
	}
}

interface IObserver {
	update(): void;
}

class Observer implements IObserver {
	// used to remove, because js cannot find object by class name.
	id: string; 
	constructor(id: string): void {
		this.id = id;
	}

	update(): void {
		console.log(`REPORT: Target is doing something.`);
		this.report();
	}

	report(): void {
		console.log(`${this.id}: Report target activity to Master.`);
	}
}

const victim: Obsersable = new Target();
const spy1: Observer = new Observer("Spy 1");
const spy2: Observer = new Observer('Spy 2');

victim.addObserver(spy1);
victim.addObserver(spy2);

victim.doSomething();