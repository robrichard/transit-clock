'use strict';

const graphql = require('graphql');
const Agency = require('./Agency');
const Stop = require('./Stop');

module.exports = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: {
            agencies: {
                type: new graphql.GraphQLList(Agency),
                resolve: root => root.agencies.toArray()
            },
            stops: {
                type: new graphql.GraphQLList(Stop),
                resolve: root => root.stops.toArray()
            }
        }
    }),
});
