/**
 * Created by Steve on 07/12/2015.
 */

var kerbinMass = require('../constants/kerbin-mass.js');
var kerbinRadius = require('../constants/kerbin-radius.js');
var hohmannPart1 = require('../lib/hohmann-part-1.js');
var hohmannPart2 = require('../lib/hohmann-part-1.js');

var orbitRadius = 80000;
var orbitRadius2 = 100000;

var burn1 = hohmannPart1(kerbinMass, kerbinRadius + orbitRadius, kerbinRadius + orbitRadius2);
var burn2 = hohmannPart2(kerbinMass, kerbinRadius + orbitRadius, kerbinRadius + orbitRadius2);


console.log(burn1);
console.log(burn2);