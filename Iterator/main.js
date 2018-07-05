// @flow

// IProjectIterator需要實作的方法
interface IProjectIterator {
	hasNext(): boolean;
	next(): IProject;
}

// IProject需要實作的方法
interface IProject {
	add(name: string, num: number, cost: number): void;
	getProjectInfo(): string;
	iterator(): IProjectIterator;
}

// 主要需要實作Iterator， Iterator其實主要就是需要時做hasNext()及next()
class ProjectIterator implements IProjectIterator {
	_projects: IProject[];
	_currentIndex: number;

	constructor(projects: IProject[]) {
		this._projects = projects;
		this._currentIndex = 0; 
	}
	// 是否有下一個物件
	hasNext(): boolean {
		return this._projects.length > this._currentIndex
	}
	// 回傳下一個物件
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

	// 由於Javascript不能多個建構式，所以需要這種方式
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