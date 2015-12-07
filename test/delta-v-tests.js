/**
 * Created by Steve on 07/12/2015.
 */


var expect = require("chai").expect;
var deltaV = require("../lib/delta-v.js");

describe("delta-v", function () {
    var tests = [{
        args: [1, 2],
        expected: 1
    },
        {
            args: [4, 2],
            expected: 2
        }
    ];

    tests.forEach(function (test) {
        it('correctly calculates energy mass:' + test.args[0] + ' velocity:' + test.args[1], function () {
            expect(deltaV.apply({}, test.args)).to.equal(test.expected);
        });
    });
});
