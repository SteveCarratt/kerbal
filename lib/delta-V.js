/**
 * Created by Steve on 07/12/2015.
 */

module.exports = function deltaV(energy, objectMass) {
    return Math.sqrt((2 * energy)/ objectMass);
};
