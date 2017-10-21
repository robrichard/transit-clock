'use strict';

const graphql = require('graphql');
const StopTime = require('./StopTime');
const Service = require('./Service');

module.exports = new graphql.GraphQLObjectType({
    name: 'Trip',
    fields: {
        headsign: {type: graphql.GraphQLString},
        service: {type: Service},
        stops: {
            type: new graphql.GraphQLList(StopTime),
            resolve: root => root.stops.toArray()
        }
    }
});
