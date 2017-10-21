'use strict';

const graphql = require('graphql');

module.exports = new graphql.GraphQLEnumType({
    name: 'RouteType',
    values: {
        TRAM: {
            value: '0',
            description: "Tram, Streetcar, Light rail. Any light rail or street level system within a metropolitan area."
        },
        METRO: {
            value: '1',
            description: "Subway, Metro. Any underground rail system within a metropolitan area."
        },
        RAIL: {
            value: '2',
            description: "Rail. Used for intercity or long-distance travel."
        },
        BUS: {
            value: '3',
            description: "Bus. Used for short- and long-distance bus routes."
        },
        FERRY: {
            value: '4',
            description: "Ferry. Used for short- and long-distance boat service."
        },
        CABLE_CAR: {
            value: '5',
            description: "Cable car. Used for street-level cable cars where the cable runs beneath the car."
        },
        GONDOLA: {
            value: '6',
            description: "Gondola, Suspended cable car. Typically used for aerial cable cars where the car is suspended from the cable."
        },
        FUNICULAR: {
            value: '7',
            description: "Funicular. Any rail system designed for steep inclines."
        },
    }
});
