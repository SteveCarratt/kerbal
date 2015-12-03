/**
 * Created by Steve on 03/12/2015.
 */

var expect = require("chai").expect;
var orbitalEnergy = require("../lib/orbital-energy.js");

describe("kinetic energy", function () {
    var tests = [{
        args: [5.2915793E22, 400, 600000 + 80000],
        expected: -735800
    },{
            args: [5.2915793E1022, 400, 600000],
            expected: -3337040
    }
    ];

    tests.forEach(function (test) {
        it('correctly calculates orbital energy for body mass' + test.args[0] + ' object mass:' + test.args[1] + ' at semi-major axis:' + test.args[2], function () {
            var calculationError = Math.abs(orbitalEnergy.apply({}, test.args) - test.expected);
            expect(calculationError).to.below(1);
        });
    });
});
