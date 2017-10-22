'use strict';

const graphql = require('graphql');
const DropOffType = require('./DropOffType');
const PickUpType = require('./PickUpType');
const Stop = require('./Stop');
const moment = require('moment');
const getMinutesAway = require('./helpers/getMinutesAway');

module.exports = new graphql.GraphQLObjectType({
    name: 'StopTime',
    fields: () => ({
        arrival: {type: graphql.GraphQLString},
        arrivalMinutes: {
            type: graphql.GraphQLString,
            resolve: root => getMinutesAway(root)
        },
        departure: {type: graphql.GraphQLString},
        distance: {type: graphql.GraphQLFloat},
        dropoffType: {type: DropOffType},
        pickupType: {type: PickUpType},
        stop: {type: Stop},
        trip: {
            type: require('./Trip'),
            resolve: root => root._list ? root._list._trip : null
        }
    })
});
