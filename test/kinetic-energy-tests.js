/**
 * Created by Steve on 03/12/2015.
 */

var expect = require("chai").expect;
var kineticEnergy = require("../lib/kinetic-energy.js");

describe("kinetic energy", function () {
    var tests = [{
        args: [1, 4],
        expected: 8
    }, {
        args: [2, 3],
        expected: 9
    }
    ];

    tests.forEach(function (test) {
        it('correctly calculates energy mass:' + test.args[0] + ' velocity:' + test.args[1], function () {
            expect(kineticEnergy.apply({}, test.args)).to.equal(test.expected);
        });
    });
});