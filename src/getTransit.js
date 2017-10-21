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
        resolve(transit);
    });
});


module.exports = function () {
    return promise;
};
