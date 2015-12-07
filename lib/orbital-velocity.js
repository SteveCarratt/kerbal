
/**
 * Created by Steve on 03/12/2015.
 */
var gravitationalConstant = require('../constants/gravitation-constant.js');

module.exports = function orbitalEnergy(bodyMass, orbitRadius) {
    return Math.sqrt((gravitationalConstant * bodyMass) / orbitRadius);
};