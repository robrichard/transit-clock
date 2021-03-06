'use strict';

const path = require('path');
const Transit = require('transportation');
const transit = new Transit();

const promise = new Promise((resolve, reject) => {
    transit.importGTFS(path.resolve(__dirname, '../data/path-nj-us'), function (err) {
        if (err) {
            reject(err);
            return;
        }
        const stopTimesByStopId = {};
        const stopsByName = {};

        for (const agency of transit.agencies.toArray()) {
            for (const route of agency.routes.toArray()) {
                for (const trip of route.trips.toArray()) {
                    for (const stopTime of trip.stops.toArray()) {
                        stopTimesByStopId[stopTime._stopId] = stopTimesByStopId[stopTime._stopId] || [];
                        stopTimesByStopId[stopTime._stopId].push(stopTime);
                    }
                }
            }
        }
        for (const stop of transit.stops.toArray()) {
            stopsByName[stop.name] = stopsByName[stop.name] || [];
            stopsByName[stop.name].push(stop);
        }

        resolve({
            transit,
            stopTimesByStopId,
            stopsByName
        });
    });

});


module.exports = function () {
    return promise;
};
