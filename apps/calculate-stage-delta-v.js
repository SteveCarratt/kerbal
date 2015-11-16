var fs = require("fs");
var Rocket = require("../lib/rocket");
process.stdin.resume();
process.stdin.setEncoding('utf8');

function done() {
	process.exit();
}
process.stdin.on('data', function (text) {
var rocket1 = JSON.parse(fs.readFileSync('rockets/'+text.trim()+'.json'));

var rocket = new Rocket(rocket1);

rocket.sumDeltaV(0, 1);

done();
});
