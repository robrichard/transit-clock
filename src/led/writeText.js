'use strict';

const LedMatrix = require("node-rpi-rgb-led-matrix-adafruit");
const BDF = require('bdf');
const path = require('path');
const matrix = new LedMatrix(32, 2);

const font = new BDF;
font.loadSync(path.resolve(__dirname, './5x7.bdf'));

function toArray(obj) {
    const array = [];
    for (const key of Object.keys(obj)) {
        const number = Number(key);
        if (!Number.isNaN(number)) {
            array[number] = obj[key];
        }
    }
    return array;
}

module.exports = function writeText(text, left, top, r, g, b) {
    // matrix.clear();
    const buffer = font.writeText(text);
    toArray(buffer).forEach((row, yIndex) => {
        row.forEach((pixel, xIndex) => {
            if (pixel === 1) {
                matrix.setPixel(xIndex + left, yIndex + top, r, g, b);
            } else {
                matrix.setPixel(xIndex + left, yIndex + top, 0, 0, 0);
            }
        });
    });
};
