/**
 * Created by Steve on 07/12/2015.
 */

var _ = require('lodash'),
    hohmannPart1 = require("../lib/hohmann-part-1.js"),
    hohmannPart2 = require("../lib/hohmann-part-2.js");

var postLaunchState = {
    "kerbin": {
        "parentBody": "kerbin",
        "deltaVUsed": 4700,
        "apoapsis": 100000,
        "periapsis": 100000
    }
};

var sectionHandlers = {
    "launch": function (section, craftState) {
        "use strict";
        return postLaunchState[section.body];
    },
    "adjust-orbit": function (section, craftState) {
        "use strict";
        var burn1DeltaV = hohmannPart1(craftState.parentBody, craftState.apoapsis, section.apoapsis);
        var burn2DeltaV = hohmannPart2(craftState.parentBody, craftState.periapsis, section.periapsis);

        craftState.deltaVUsed = burn1DeltaV + burn2DeltaV;
        craftState.apoapsis = section.apoapsis;
        craftState.periapsis = section.periapsis;
        return craftState;
    },
    "adjust-inclination" : function(){

    }
};

module.exports = function generateFlightPlan(plan, craftState) {
    var thisSection = plan[0];

    craftState = craftState || {};

    craftState = sectionHandlers[thisSection.type](thisSection, _.clone(craftState));

    var rest = _.rest(plan);

    if (rest.length > 0) {
        var flightPlan = generateFlightPlan(rest, craftState);
        flightPlan.push(craftState);
        return flightPlan;
    } else {
        return [craftState];
    }
};
