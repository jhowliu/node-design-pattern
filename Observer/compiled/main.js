"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Obsersable (Abstract Class)
var Obsersable = function () {
	function Obsersable() {
		_classCallCheck(this, Obsersable);
	}

	_createClass(Obsersable, [{
		key: "addObserver",
		value: function addObserver(observer) {
			this._observers.push(observer);
		}
	}, {
		key: "removeObserver",
		value: function removeObserver(observer) {
			var index = this._observers.findIndex(function (o, ix) {
				return o.id == observer.id;
			});
			this._observers.splice(index, 1);
		}
	}, {
		key: "notify",
		value: function notify() {
			this._observers.forEach(function (o, _) {
				return o.update();
			});
		}
	}]);

	return Obsersable;
}();

var Observer = function () {
	// used to remove

	function Observer(id) {
		_classCallCheck(this, Observer);

		this.id = id;
	}

	_createClass(Observer, [{
		key: "update",
		value: function update() {
			console.log("REPORT: Target is doing something.");
			this.report();
		}
	}, {
		key: "report",
		value: function report() {
			console.log(this.id + ": Report target activity to Master.");
		}
	}]);

	return Observer;
}();

var Target = function (_Obsersable) {
	_inherits(Target, _Obsersable);

	function Target() {
		_classCallCheck(this, Target);

		var _this = _possibleConstructorReturn(this, (Target.__proto__ || Object.getPrototypeOf(Target)).call(this));

		_this._observers = [];
		return _this;
	}

	_createClass(Target, [{
		key: "doSomething",
		value: function doSomething() {
			this.notify();
		}
	}]);

	return Target;
}(Obsersable);

var victim = new Target();
var spy1 = new Observer("Spy 1");
var spy2 = new Observer('Spy 2');

victim.addObserver(spy1);
victim.addObserver(spy2);

victim.doSomething();
