'use strict';

const graphql = require('graphql');
const StopTime = require('./StopTime');

module.exports = new graphql.GraphQLObjectType({
    name: 'Trip',
    fields: {
        headsign: {type: graphql.GraphQLString},
        stops: {
            type: new graphql.GraphQLList(StopTime),
            resolve: root => root.stops.toArray()
        }
    }
});
