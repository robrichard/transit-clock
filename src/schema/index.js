'use strict';

const graphql = require('graphql');
const AgencyType = require('./AgencyType');

module.exports = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: {
            agencies: {
                type: new graphql.GraphQLList(AgencyType),
                resolve: root => root.agencies.toArray()
            }
        }
    }),
});
