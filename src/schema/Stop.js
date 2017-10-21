'use strict';

const graphql = require('graphql');

module.exports = new graphql.GraphQLObjectType({
    name: 'Stop',
    fields: {
        name: {type: graphql.GraphQLString},
        lat: {type: graphql.GraphQLFloat},
        lon: {type: graphql.GraphQLFloat}
    }
});
