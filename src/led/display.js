'use strict';

const writeText = require('./writeText');
const getDisplayBoard = require('../schema/helpers/getDisplayBoard');
const getRootValue = require('../getRootValue');

const root = getRootValue();

setInterval(() => {
    const {items} = getDisplayBoard(root, 'Grove Street');
    items.forEach(({name, minutesAway}) => {
        writeText(`${name} ${minutesAway.join(' ')}`);
    });
}, 1000);

