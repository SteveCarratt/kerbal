
/**
 * Created by Steve on 03/12/2015.
 */
var gravitationalConstant = require('../constants/gravitation-constant.js');

module.exports = function orbitalEnergy(bodyMass, objectMass, semiMajorAxis) {
    return - gravitationalConstant * ((bodyMass + objectMass) / (2 * semiMajorAxis));
};