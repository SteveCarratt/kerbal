var expect = require("chai").expect;
var EngineFuelUnit = require("../lib/engine-fuel-unit.js");

describe("Engine Fuel Unit", function () {
	describe("deltaVWithGravity", function () {
		var tests = [{
				args : [1, 1, 1],
				expected : 0
			}, {
				args : [2, 1, 1],
				expected : 0.69314718056
			}
		];

		tests.forEach(function (test) {
			it('correctly calculates delta v for start mass:' + test.args[0] + ' end mass:' + test.args[1] + ' specific impulse:' + test.args[2], function () {
				var engineFuelUnit = new EngineFuelUnit(test.args[0], test.args[1], test.args[2]);
				var calculationError = Math.abs(engineFuelUnit.deltaVWithGravity(1) - test.expected);
				expect(calculationError).to.below(0.0005);
			});
		});
	});
});
