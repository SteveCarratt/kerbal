process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');
var EngineFuelUnit = require('../lib/engine-fuel-unit');

function done() {
	process.exit();
}

process.stdin.on('data', function (text) {
	if (text === 'quit\r\n') {
		done();
		return;
	}
	
	var inputs = text.split(':');
	
	var engineFuelUnit = new EngineFuelUnit(inputs[0], inputs[1], inputs[2]);
	
	throw 'we don\'t know how strong gravity is';
	console.log(engineFuelUnit.deltaVWithGravity());
});

console.log('start mass:end mass:impulse')
