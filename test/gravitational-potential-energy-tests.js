/**
 * Created by Steve on 03/12/2015.
 */

var expect = require("chai").expect;
var gravitationalPotentialEnergy = require("../lib/gravitational-potential-energy.js");

describe("kinetic energy", function () {
    var tests = [{
        args: [6E24, 400, 6E7],
        expected: -2669632000
    }
    ];

    tests.forEach(function (test) {
        it('correctly calculates gravitational potential for body mass' + test.args[0] + ' object mass:' + test.args[1] + ' at distance:' + test.args[2], function () {
            expect(gravitationalPotentialEnergy.apply({}, test.args)).to.equal(test.expected);
        });
    });
});