/**
 * Created by Steve on 07/12/2015.
 */

var gravitationalConstant = require('../constants/gravitation-constant.js');


module.exports = function hohmannPart2(bodyMass, startOrbitalRadius, finalOrbitalRadius){
    "use strict";
    return Math.sqrt((bodyMass * gravitationalConstant) / (finalOrbitalRadius)) *
        (1- Math.sqrt((2*startOrbitalRadius)/(startOrbitalRadius+finalOrbitalRadius)));
};
