/**
 * Created by Steve on 03/12/2015.
 */

var expect = require("chai").expect;
var orbitalEnergy = require("../lib/orbital-velocity.js");


describe("orbital energy", function () {
    var tests = [
        {
            args: ["kerbin", 80000, 80000],
            expected: 2278
        }, {
            args: ["kerbin", 0, 0],
            expected: 2426
        }, {
            args: ["kerbin", 40000, 120000000],
            expected: 3318
        }
    ];

    tests.forEach(function (test) {
        it('correctly calculates orbital velocity for body' + test.args[0] + ' craft radius:' + test.args[1] + ' orbit apoapsis:' + test.args[2], function () {
            var orbitalVelocity = orbitalEnergy.apply({}, test.args);
            console.log('energy: ' + orbitalVelocity);
            var calculationError = Math.abs(orbitalVelocity - test.expected);
            expect(calculationError).to.below(1);
        });
    });
});
