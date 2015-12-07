/**
 * Created by Steve on 07/12/2015.
 */

module.exports = function inclinationChange(deltaDegrees, velocity) {
    "use strict";
    return 2 * velocity * Math.sin((deltaDegrees * Math.PI / 180) / 2);
};