/**
 * Created by Steve on 03/12/2015.
 */

var gravitationalConstant = require('../constants/gravitation-constant.js');

module.exports = function gravitationalPotentialEnergy(celestialBodyMass, objectMass, radialDistance) {
    return -(gravitationalConstant * celestialBodyMass * objectMass) / radialDistance
};
