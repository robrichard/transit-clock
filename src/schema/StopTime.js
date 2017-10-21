'use strict';

const graphql = require('graphql');
const DropOffType = require('./DropOffType');
const PickUpType = require('./PickUpType');
const Stop = require('./Stop');

module.exports = new graphql.GraphQLObjectType({
    name: 'StopTime',
    fields: {
        arrival: {type: graphql.GraphQLString},
        departure: {type: graphql.GraphQLString},
        distance: {type: graphql.GraphQLFloat},
        dropoffType: {type: DropOffType},
        pickupType: {type: PickUpType},
        stop: {type: Stop}
    }
});
