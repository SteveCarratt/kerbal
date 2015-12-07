/**
 * Created by Steve on 07/12/2015.
 */

var gravitationalConstant = require('../constants/gravitation-constant.js');
var bodies = require('../constants/bodies.js');


module.exports = function gohmannPart1(body, startOrbitalRadius, finalOrbitalRadius){
    "use strict";
    var deltaV = Math.sqrt((bodies[body].mass * gravitationalConstant) / (bodies[body].radius + startOrbitalRadius)) *
        (Math.sqrt((2*(bodies[body].radius +finalOrbitalRadius))/(bodies[body].radius + startOrbitalRadius + bodies[body].radius +finalOrbitalRadius))-1);
    return Math.abs(deltaV);
};
