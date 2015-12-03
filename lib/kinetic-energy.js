/**
 * Created by Steve on 03/12/2015.
 */

module.exports = function kineticEnergy(mass, velocity) {
    var velocityComponent = Math.pow(velocity, 2);
    return (mass * velocityComponent) / 2;
};

