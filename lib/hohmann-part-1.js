/**
 * Created by Steve on 07/12/2015.
 */

var gravitationalConstant = require('../constants/gravitation-constant.js');


module.exports = function gohmannPart1(bodyMass, startOrbitalRadius, finalOrbitalRadius){
    "use strict";
    return Math.sqrt((bodyMass * gravitationalConstant) / (startOrbitalRadius)) *
        (Math.sqrt((2*finalOrbitalRadius)/(startOrbitalRadius+finalOrbitalRadius))-1);
};
