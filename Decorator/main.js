// @flow


// Abstract Class
class ABCGradeReport {
        report(): void {
                throw new Error("Must implement report()");
        }

        sign(name: string): void {
                throw new Error("Must implement sign()");
        }
}
// Personal Report
class GradeReport extends ABCGradeReport {
        _math: number;
        _english: number;
        _science: number;

        constructor(math: number, english: number, science: number): void {
                super();
                this._math = math;
                this._english = english;
                this._science = science;
        }

        report(): void {
                console.log(`我的數學: ${this._math}分, 英文: ${this._english}分, 自然: ${this._science}分`)
        }

        sign(name: string): void {
                console.log(`家長簽名: ${name}`)
        }
}

class Decorator extends ABCGradeReport {
        _sr: ABCGradeReport;

        constructor(sr: ABCGradeReport): void {
                super();
                this._sr = sr;
        }

        report(): void {
                this._sr.report();
        }

        sign(name: string): void {
                this._sr.sign(name);
        }
}

class HighScoreDecorator extends Decorator {
        constructor(sr: ABCGradeReport): void {
                super(sr);
        }

        reportHighestScore(): void {
                console.log('全班數學最高是90分, 英文是80分, 自然是88分');
        }

        report(): void {
                this.reportHighestScore();
                super.report();
        }
}

class RankDecorator extends Decorator {
        constructor(sr: ABCGradeReport): void {
                super(sr);
        }

        reportRank(): void {
                console.log('名次：30名');
        }

        report(): void {
                super.report();
                this.reportRank();
        }
}

let report: ABCGradeReport = new GradeReport(30, 40, 50);
report = new HighScoreDecorator(report);
report = new RankDecorator(report);

report.report();
report.sign('太爛！拒簽')