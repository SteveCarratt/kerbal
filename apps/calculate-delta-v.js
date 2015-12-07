/**
 * Created by Steve on 07/12/2015.
 */

var flightPlan = require('../lib/flight-plan.js');
var _ = require('lodash');

var plan = flightPlan([
    {
        "type": "launch",
        "body": "kerbin"
    },
    {
        "type": "adjust-orbit",
        "apoapsis": 120000,
        "periapsis": 100000
    },
    {
        "type": "adjust-orbit",
        "apoapsis": 120000,
        "periapsis": 37000
    }]
);
console.log(plan);
var totalDeltaV = _.sum(plan, function (section) {
    return section.deltaVUsed;
});

console.log(totalDeltaV);
