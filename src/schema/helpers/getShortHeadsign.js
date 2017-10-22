'use strict';

const abbreviations = {
    '33rd via Hoboken': '33rd',
    '33rd Street': '33rd',
    'Journal Square': 'JSQ',
    'World Trade Center': 'WTC',
    'Journal Square via Hoboken': 'JSQ',
    'Newark': 'NWK'
};

module.exports = name => abbreviations[name];
