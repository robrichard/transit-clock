'use strict';

const graphql = require('graphql');
const RouteType = require('./RouteType');
const Trip = require('./Trip');

module.exports = new graphql.GraphQLObjectType({
    name: 'Route',
    fields: {
        color: {type: graphql.GraphQLString},
        longName: {type: graphql.GraphQLString},
        shortName: {type: graphql.GraphQLString},
        textColor: {type: graphql.GraphQLString},
        type: {type: RouteType},
        trips: {
            type: new graphql.GraphQLList(Trip),
            resolve: root => root.trips.toArray()
        }
    }
});
