// @flow

interface IProjectIterator {
	hasNext(): boolean;
	next(): IProject;
}

interface IProject {
	add(name: string, num: number, cost: number): void;
	getProjectInfo(): string;
	iterator(): IProjectIterator;
}

// 主要需要實作Iterator
class ProjectIterator implements IProjectIterator {
	_projects: IProject[];
	_currentIndex: number;

	constructor(projects: IProject[]) {
		this._projects = projects;
		this._currentIndex = 0; 
	}

	hasNext(): boolean {
		return this._projects.length > this._currentIndex
	}

	next(): IProject {
		const project: IProject = this._projects[this._currentIndex]
		this._currentIndex++;
		return project;
	}
}

class Project implements IProject {
	_projects: IProject[];
	_name: string;
	_num: number;
	_cost: number;

	constructor(name: ?string, num: ?number, cost: ?number) {
		if (name == null || num == null || cost == null) {
			this._projects = [];
		} else {
			this._name = name;
			this._num = num;
			this._cost = cost;
		}
	}

	add(name: string, num: number, cost: number): void {
		this._projects.push(new Project(name, num, cost));
	}

	getProjectInfo(): string {
		return `計劃名稱: ${this._name}, 計劃人數: ${this._num}人, 計劃花費: ${this._cost} TWD`;
	}
	// 取得Iterator來遍歷
	iterator(): IProjectIterator {
		return new ProjectIterator(this._projects);
	}
}


const project: IProject = new Project();

project.add(`資工之夜`, 10, 1000);
project.add(`資工迎新`, 100, 100000);
project.add(`資工送舊`, 50, 6666);

const projectIter: IProjectIterator = project.iterator();

while (projectIter.hasNext()) {
	let p: IProject = projectIter.next();
	console.log(p.getProjectInfo());
}