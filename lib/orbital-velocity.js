/**
 * Created by Steve on 03/12/2015.
 */
var gravitationalConstant = require('../constants/gravitation-constant.js');
var bodies = require('../constants/bodies.js');

module.exports = function orbitalEnergy(body, craftRadius, apoapsis) {
    return Math.sqrt(
        (gravitationalConstant * bodies[body].mass) *
        ((2 / (craftRadius + bodies[body].radius)) - (1 / (apoapsis + bodies[body].radius)))
    );
};