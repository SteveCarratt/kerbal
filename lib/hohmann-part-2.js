/**
 * Created by Steve on 07/12/2015.
 */

var gravitationalConstant = require('../constants/gravitation-constant.js');
var bodies = require('../constants/bodies.js');


module.exports = function hohmannPart2(body, startOrbitalRadius, finalOrbitalRadius){
    "use strict";
    return Math.sqrt((bodies[body].mass * gravitationalConstant) / (bodies[body].radius + finalOrbitalRadius)) *
        (1- Math.sqrt((2* (bodies[body].radius  + startOrbitalRadius))/(bodies[body].radius + startOrbitalRadius+ bodies[body].radius +finalOrbitalRadius)));
};
