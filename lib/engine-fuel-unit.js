module.exports = function EngineFuelUnit(startMass, endMass, specificImpulse) {
	var self = this;

	function deltaVWithGravity(gravity) {
		var effectiveExhaustVelocity = gravity * specificImpulse;

		return effectiveExhaustVelocity * Math.log(startMass / endMass);
	}

	return {
		deltaVWithGravity : deltaVWithGravity
	}
}
