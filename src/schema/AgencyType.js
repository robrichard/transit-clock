'use strict';

const graphql = require('graphql');

module.exports = new graphql.GraphQLObjectType({
    name: 'Agency',
    fields: {
        language: {type: graphql.GraphQLString},
        name: {type: graphql.GraphQLString},
        timezone: {type: graphql.GraphQLString},
        url: {type: graphql.GraphQLString},
    }
});
