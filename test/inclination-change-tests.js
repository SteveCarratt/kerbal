/**
 * Created by Steve on 07/12/2015.
 */

var expect = require("chai").expect;
var inclinationChange = require("../lib/inclination-change.js");

describe("inclination change", function () {
    var tests = [
        {
            args: [180, 2200],
            expected: 4400
        },
        {
            args: [90, 2200],
            expected: 3112
        }];

    tests.forEach(function (test) {
        it('correctly calculates delta v for speed:' + test.args[0] + ' with angle change:' + test.args[1], function () {
            var calculationError = Math.abs(inclinationChange.apply({}, test.args) - test.expected);
            expect(calculationError).to.below(1);
        });
    });
});
