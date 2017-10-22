'use strict';

module.exports = function (root, stopName) {
    const stops = root.stopsByName[stopName];
    if (!stops) {
        throw new Error(`invalid stop name: ${stopName}`);
    }

    const items = [];
    for (const stop of stops) {
        const groupBy = {};
        for (const stopTime of getStopTimes(stop, root, {
            nextArriving: 3,
            isActive: true
        })) {
            const name = stopTime._list._trip.headsign;
            groupBy[name] = groupBy[name] || {
                name: getShortHeadsign(name),
                color: stopTime._list._trip.route.color,
                textColor: stopTime._list._trip.route.textColor,
                minutesAway: []
            };
            groupBy[name].minutesAway.push(Math.floor(getMinutesAway(stopTime)));
        }
        Object.keys(groupBy).forEach(name => {
            items.push(groupBy[name]);
        });
    }
    return {items};
};
