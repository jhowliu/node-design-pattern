"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Abstract Class
var ABCGradeReport = function () {
        function ABCGradeReport() {
                _classCallCheck(this, ABCGradeReport);
        }

        _createClass(ABCGradeReport, [{
                key: "report",
                value: function report() {
                        throw new Error("Must implement report()");
                }
        }, {
                key: "sign",
                value: function sign(name) {
                        throw new Error("Must implement sign()");
                }
        }]);

        return ABCGradeReport;
}();
// Personal Report


var GradeReport = function (_ABCGradeReport) {
        _inherits(GradeReport, _ABCGradeReport);

        function GradeReport(math, english, science) {
                _classCallCheck(this, GradeReport);

                var _this = _possibleConstructorReturn(this, (GradeReport.__proto__ || Object.getPrototypeOf(GradeReport)).call(this));

                _this._math = math;
                _this._english = english;
                _this._science = science;
                return _this;
        }

        _createClass(GradeReport, [{
                key: "report",
                value: function report() {
                        console.log("\u6211\u7684\u6578\u5B78: " + this._math + "\u5206, \u82F1\u6587: " + this._english + "\u5206, \u81EA\u7136: " + this._science + "\u5206");
                }
        }, {
                key: "sign",
                value: function sign(name) {
                        console.log("\u5BB6\u9577\u7C3D\u540D: " + name);
                }
        }]);

        return GradeReport;
}(ABCGradeReport);

var Decorator = function (_ABCGradeReport2) {
        _inherits(Decorator, _ABCGradeReport2);

        function Decorator(sr) {
                _classCallCheck(this, Decorator);

                var _this2 = _possibleConstructorReturn(this, (Decorator.__proto__ || Object.getPrototypeOf(Decorator)).call(this));

                _this2._sr = sr;
                return _this2;
        }

        _createClass(Decorator, [{
                key: "report",
                value: function report() {
                        this._sr.report();
                }
        }, {
                key: "sign",
                value: function sign(name) {
                        this._sr.sign(name);
                }
        }]);

        return Decorator;
}(ABCGradeReport);

var HighScoreDecorator = function (_Decorator) {
        _inherits(HighScoreDecorator, _Decorator);

        function HighScoreDecorator(sr) {
                _classCallCheck(this, HighScoreDecorator);

                return _possibleConstructorReturn(this, (HighScoreDecorator.__proto__ || Object.getPrototypeOf(HighScoreDecorator)).call(this, sr));
        }

        _createClass(HighScoreDecorator, [{
                key: "reportHighestScore",
                value: function reportHighestScore() {
                        console.log('全班數學最高是90分, 英文是80分, 自然是88分');
                }
        }, {
                key: "report",
                value: function report() {
                        this.reportHighestScore();
                        _get(HighScoreDecorator.prototype.__proto__ || Object.getPrototypeOf(HighScoreDecorator.prototype), "report", this).call(this);
                }
        }]);

        return HighScoreDecorator;
}(Decorator);

var RankDecorator = function (_Decorator2) {
        _inherits(RankDecorator, _Decorator2);

        function RankDecorator(sr) {
                _classCallCheck(this, RankDecorator);

                return _possibleConstructorReturn(this, (RankDecorator.__proto__ || Object.getPrototypeOf(RankDecorator)).call(this, sr));
        }

        _createClass(RankDecorator, [{
                key: "reportRank",
                value: function reportRank() {
                        console.log('名次：30名');
                }
        }, {
                key: "report",
                value: function report() {
                        _get(RankDecorator.prototype.__proto__ || Object.getPrototypeOf(RankDecorator.prototype), "report", this).call(this);
                        this.reportRank();
                }
        }]);

        return RankDecorator;
}(Decorator);

var report = new GradeReport(30, 40, 50);
report = new HighScoreDecorator(report);
report = new RankDecorator(report);

report.report();
report.sign('太爛！拒簽');
