// @flow
import uuid from 'uuid/v4';
// abstract class 
class ABCEmployee {
	_id: string; // unique id for delete
	_name: string;
	_salary: number;
	_position: string;
	_department: string;

	constructor(name: string, position: string, department: string, salary: number): void {
		this._id = uuid();
		this._name = name;
		this._department = department;
		this._position = position;
		this._salary = salary;
	}

	get id(): string {
		return this._id;
	}

	get name(): string {
		return this._name;
	}

	getInfo(): void {
		console.log(`員工編號: ${this._id}\n姓名: ${this._name}\n職位: ${this._position}\n部門: ${this._department}\n薪資: $${this._salary} USD`);
	}
}

class Developer extends ABCEmployee {
	constructor(name: string, position: string, department: string, salary: number): void {
		super(name, position, department, salary);
	}
}

class TeamLeader extends ABCEmployee {
	_subordinates: ABCEmployee[];
	constructor(name: string, position: string, department: string, salary: number): void {
		super(name, position, department, salary);
		this._subordinates = [];
	}

	addSubordinates(employee: ABCEmployee): void {
		this._subordinates.push(employee);
	}

	removeSubordinates(employee: ABCEmployee): void {
		const index = this._subordinates.findIndex((e, _) => e.id === employee.id)
		console.log(`\n${employee.name}太混了，故被離職\n`)
		this._subordinates.splice(index, 1);
	}

	getSubordinatesInfo(): void {
		console.log(`${this._name}底下的員工:`);
		this._subordinates.forEach((e, _) => {
			console.log(`=======================`);
			e.getInfo();
		});
	}
}


const Peter = new Developer('Peter', 'Software Developer', 'Backend Team', 3000);
const Jack = new Developer('Jack', 'Data Engineer', 'Backend Team', 3000);

const Claude = new TeamLeader('Claude', 'PM', 'Backend Team', 999999);

Claude.addSubordinates(Peter);
Claude.addSubordinates(Jack);

Claude.getInfo();
Claude.getSubordinatesInfo();

Claude.removeSubordinates(Jack)
Claude.getSubordinatesInfo();