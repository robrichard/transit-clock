'use strict';
const getMinutesAway = require('./getMinutesAway');
const isServiceActive = require('./isServiceActive');
const getShortHeadsign = require('./getShortHeadsign');

module.exports = function (stop, rootValue, {isActive, nextArriving}) {
    let stopTimes = rootValue.stopTimesByStopId[stop.id];

    if (isActive) {
        stopTimes = (stopTimes || []).filter(s => isServiceActive(s._list._trip.service));
    }

    if (nextArriving) {
        stopTimes = stopTimes.sort((a, b) => {
            return getMinutesAway(a) - getMinutesAway(b);
        });

        const groupBy = {};
        for (const stopTime of stopTimes) {
            if (stopTime._list) {
                const name = getShortHeadsign(stopTime._list._trip.headsign);
                groupBy[name] = groupBy[name] || [];
                if (groupBy[name].length < nextArriving) {
                    groupBy[name].push(stopTime);
                }
            }
        }

        stopTimes = [].concat(...Object.keys(groupBy).map(k => groupBy[k]));
    }


    return stopTimes;
};
