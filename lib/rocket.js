var fs = require("fs");
var _ = require("lodash");
var EngineFuelUnit = require('./engine-fuel-unit');

function loadPartFromName (partName) {
    return JSON.parse(fs.readFileSync('parts/' + partName + '.json'));
}

module.exports = function Rocket(stageInfo) {
    var parts = _.map(stageInfo.parts, loadPartFromName),
        payload;

    if (stageInfo.payload)
        payload = new Rocket(stageInfo.payload);

    function emptyMass() {
        var fullMassTotal = fullMass();
        var fuelMassTotal = 0;

        parts.forEach(function (part){
            if (part.fuelMass != undefined) {
                fuelMassTotal += part.fuelMass;
            }
        });

        return fullMassTotal - fuelMassTotal;
    }

    function fullMass () {
        var fullMassTotal = 0;
        if (payload)
            fullMassTotal = payload.fullMass();
        parts.forEach(function (part) {
            fullMassTotal += part.totalMass;
        });
        return fullMassTotal;
    }

    function isp() {
        var isp = 0;
        parts.forEach(function (part) {
            if (part.isp != undefined) {
            isp = part.isp.asl
            return
            }
        });
        return isp;
    }

    function deltaV() {
        var rocketEngineFuelUnit = new EngineFuelUnit(fullMass(), emptyMass(), isp());
        return rocketEngineFuelUnit.deltaVWithGravity(9.81)
    }

    function sumDeltaV(currentTotal, stageNum) {
        var stageDeltaV = deltaV();
        currentTotal += stageDeltaV;
        console.log('stage ' + stageNum +': delta-v '+ stageDeltaV + ' total: ' + currentTotal)

        if (payload)
            payload.sumDeltaV(currentTotal, ++stageNum);
    }

    return {fullMass : fullMass,
            emptyMass : emptyMass,
            isp: isp,
            sumDeltaV : sumDeltaV,
    }
}
