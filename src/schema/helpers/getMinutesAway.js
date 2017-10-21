'use strict';

const moment = require('moment');

module.exports = function (stopTime) {
    const now = moment();
    const arrival = moment(stopTime.arrival, 'HH:mm:ss');
    const duration = moment.duration(arrival.diff(moment()));
    const asMinutes = duration.asMinutes();
    if (asMinutes < 0) {
        return moment.duration(arrival.diff(now.subtract(1, 'day'))).asMinutes();
    } else {
        return asMinutes
    }
};
