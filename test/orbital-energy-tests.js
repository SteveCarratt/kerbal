/**
 * Created by Steve on 03/12/2015.
 */

var expect = require("chai").expect;
var orbitalEnergy = require("../lib/orbital-velocity.js");
var bodies = require('../constants/bodies.js');


describe("orbital energy", function () {
    var tests = [{
        args: [bodies.kerbin.mass, bodies.kerbin.radius + 80000],
        expected: 2278
    },{
            args: [bodies.kerbin.mass, bodies.kerbin.radius],
            expected: 2426
    }
    ];

    tests.forEach(function (test) {
        it('correctly calculates orbital energy for body mass' + test.args[0] + ' orbit radius:' + test.args[1], function () {
            var orbitalEnergyValue = orbitalEnergy.apply({}, test.args);
            console.log('energy: ' + orbitalEnergyValue);
            var calculationError = Math.abs(orbitalEnergyValue - test.expected);
            expect(calculationError).to.below(1);
        });
    });
});
