'use strict';

const graphql = require('graphql');
const getStopTimes = require('./helpers/getStopTimes');

module.exports = new graphql.GraphQLObjectType({
    name: 'Stop',
    fields: () => ({
        name: {type: graphql.GraphQLString},
        lat: {type: graphql.GraphQLFloat},
        lon: {type: graphql.GraphQLFloat},
        stopTimes: {
            type: new graphql.GraphQLList(require('./StopTime')),
            args: {
                nextArriving: {type: graphql.GraphQLInt},
                isActive: {type: graphql.GraphQLBoolean}
            },
            resolve: (stop, args, context, {rootValue}) => {
                return getStopTimes(stop, rootValue, args);
            }
        }
    })
});
