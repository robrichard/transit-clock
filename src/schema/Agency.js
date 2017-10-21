'use strict';

const graphql = require('graphql');
const Route = require('./Route');

module.exports = new graphql.GraphQLObjectType({
    name: 'Agency',
    fields: {
        language: {type: graphql.GraphQLString},
        name: {type: graphql.GraphQLString},
        routes: {
            type: new graphql.GraphQLList(Route),
            resolve: root => root.routes.toArray()
        },
        timezone: {type: graphql.GraphQLString},
        url: {type: graphql.GraphQLString},
    }
});
