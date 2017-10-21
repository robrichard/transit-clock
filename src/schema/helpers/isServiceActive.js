'use strict';

const moment = require('moment');

module.exports = function (service) {
    const now = moment();

    if (!service.start || !service.end) {
        return false;
    }

    const isActiveDayOfWeek = service.days[now.format('dddd').toLowerCase()] > 0;

    const start = moment(service.start, 'YYYYMMDD');
    const end = moment(service.end, 'YYYYMMDD');

    return isActiveDayOfWeek && now.isAfter(start) && now.isBefore(end);
};
