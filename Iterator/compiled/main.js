"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProjectIterator = function () {
	function ProjectIterator(projects) {
		_classCallCheck(this, ProjectIterator);

		this._projects = projects;
		this._currentIndex = 0;
	}

	_createClass(ProjectIterator, [{
		key: "hasNext",
		value: function hasNext() {
			return this._projects.length > this._currentIndex;
		}
	}, {
		key: "next",
		value: function next() {
			var project = this._projects[this._currentIndex];
			this._currentIndex++;
			return project;
		}
	}]);

	return ProjectIterator;
}();

var Project = function () {
	function Project(name, num, cost) {
		_classCallCheck(this, Project);

		if (name == null || num == null || cost == null) {
			this._projects = [];
		} else {
			this._name = name;
			this._num = num;
			this._cost = cost;
		}
	}

	_createClass(Project, [{
		key: "add",
		value: function add(name, num, cost) {
			this._projects.push(new Project(name, num, cost));
		}
	}, {
		key: "getProjectInfo",
		value: function getProjectInfo() {
			return "\u8A08\u5283\u540D\u7A31: " + this._name + ", \u8A08\u5283\u4EBA\u6578: " + this._num + "\u4EBA, \u8A08\u5283\u82B1\u8CBB: " + this._cost + " TWD";
		}
	}, {
		key: "iterator",
		value: function iterator() {
			return new ProjectIterator(this._projects);
		}
	}]);

	return Project;
}();

var project = new Project();

project.add("\u8CC7\u5DE5\u4E4B\u591C", 10, 1000);
project.add("\u8CC7\u5DE5\u8FCE\u65B0", 100, 100000);
project.add("\u8CC7\u5DE5\u9001\u820A", 50, 6666);

var projectIter = project.iterator();

while (projectIter.hasNext()) {
	var p = projectIter.next();
	console.log(p.getProjectInfo());
}
