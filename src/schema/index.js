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
                resolve: root => root.transit.agencies.toArray()
            },
            stops: {
                type: new graphql.GraphQLList(Stop),
                args: {
                    stopIds: {type: new graphql.GraphQLList(graphql.GraphQLString)}
                },
                resolve: (root, args) => {
                    if (args.stopIds) {
                        return args.stopIds.map(id => root.transit.stops[id]);
                    } else {
                        return root.transit.stops.toArray();
                    }
                }
            }
        }
    }),
});
