var expect = require("chai").expect;
var Rocket = require("../lib/rocket.js");

describe("Rocket", function () {
    var tests = [
    { name: 'basic rocket', args: [{parts: ["mk-1-command-pod"]}], expected : {fullMass : 0.84}  },
    { name: 'two part rocket', args: [{parts: ["mk-1-command-pod"], payload: {parts: ["fl-t100"]}}], expected : {fullMass : 0.84 +  0.5625} }
		];

	describe("fullMass", function () {

		tests.forEach(function (test) {
			it('correctly calculates fullMass for ' + test.name, function () {
			    var rocket = new Rocket(test.args[0]);

				expect(rocket.fullMass()).to.equal(test.expected.fullMass);
			});
		});
	});
});
