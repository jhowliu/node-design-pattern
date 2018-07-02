'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// abstract class 
var ABCEmployee = function () {
	// unique id for delete
	function ABCEmployee(name, position, department, salary) {
		_classCallCheck(this, ABCEmployee);

		this._id = (0, _v2.default)();
		this._name = name;
		this._department = department;
		this._position = position;
		this._salary = salary;
	}

	_createClass(ABCEmployee, [{
		key: 'getInfo',
		value: function getInfo() {
			console.log('\u54E1\u5DE5\u7DE8\u865F: ' + this._id + '\n\u59D3\u540D: ' + this._name + '\n\u8077\u4F4D: ' + this._position + '\n\u90E8\u9580: ' + this._department + '\n\u85AA\u8CC7: $' + this._salary + ' USD');
		}
	}, {
		key: 'id',
		get: function get() {
			return this._id;
		}
	}, {
		key: 'name',
		get: function get() {
			return this._name;
		}
	}]);

	return ABCEmployee;
}();

var Developer = function (_ABCEmployee) {
	_inherits(Developer, _ABCEmployee);

	function Developer(name, position, department, salary) {
		_classCallCheck(this, Developer);

		return _possibleConstructorReturn(this, (Developer.__proto__ || Object.getPrototypeOf(Developer)).call(this, name, position, department, salary));
	}

	return Developer;
}(ABCEmployee);

var TeamLeader = function (_ABCEmployee2) {
	_inherits(TeamLeader, _ABCEmployee2);

	function TeamLeader(name, position, department, salary) {
		_classCallCheck(this, TeamLeader);

		var _this2 = _possibleConstructorReturn(this, (TeamLeader.__proto__ || Object.getPrototypeOf(TeamLeader)).call(this, name, position, department, salary));

		_this2._subordinates = [];
		return _this2;
	}

	_createClass(TeamLeader, [{
		key: 'addSubordinates',
		value: function addSubordinates(employee) {
			this._subordinates.push(employee);
		}
	}, {
		key: 'removeSubordinates',
		value: function removeSubordinates(employee) {
			var index = this._subordinates.findIndex(function (e, _) {
				return e.id === employee.id;
			});
			console.log('\n' + employee.name + '\u592A\u6DF7\u4E86\uFF0C\u6545\u88AB\u96E2\u8077\n');
			this._subordinates.splice(index, 1);
		}
	}, {
		key: 'getSubordinatesInfo',
		value: function getSubordinatesInfo() {
			console.log(this._name + '\u5E95\u4E0B\u7684\u54E1\u5DE5:');
			this._subordinates.forEach(function (e, _) {
				console.log('=======================');
				e.getInfo();
			});
		}
	}]);

	return TeamLeader;
}(ABCEmployee);

var Peter = new Developer('Peter', 'Software Developer', 'Backend Team', 3000);
var Jack = new Developer('Jack', 'Data Engineer', 'Backend Team', 3000);

var Claude = new TeamLeader('Claude', 'PM', 'Backend Team', 999999);

Claude.addSubordinates(Peter);
Claude.addSubordinates(Jack);

Claude.getInfo();
Claude.getSubordinatesInfo();

Claude.removeSubordinates(Jack);
Claude.getSubordinatesInfo();
