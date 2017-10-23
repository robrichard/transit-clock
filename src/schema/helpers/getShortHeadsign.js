'use strict';

const stopNameMap = new Map([
    ['33rd via Hoboken', '33rd'],
    ['33rd Street', '33rd'],
    ['Journal Square', 'JSQ'],
    ['World Trade Center', 'WTC'],
    ['Journal Square via Hoboken', 'JSQ'],
    ['Newark', 'NWK']
]);

module.exports = name => stopNameMap.get(name);
