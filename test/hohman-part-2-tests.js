/**
 * Created by Steve on 07/12/2015.
 */


var expect = require("chai").expect;
var hohmannPart2 = require("../lib/hohmann-part-2.js");
var kerbinMass = require('../constants/kerbin-mass.js');
var kerbinRadius = require('../constants/kerbin-radius.js');

describe("hohmann part 2", function () {
    var tests = [{
        args: [kerbinMass, kerbinRadius + 100000, kerbinRadius + 200000],
        expected: 71.23
    }];

    tests.forEach(function (test) {
        it('correctly calculates delta v for bodymass:' + test.args[0] + ' with radius 1:' + test.args[1]  + ' and radius 2:' + test.args[0], function () {
            var calculationError = Math.abs(hohmannPart2.apply({}, test.args) - test.expected);
            expect(calculationError).to.below(1);
        });
    });
});