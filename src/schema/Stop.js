'use strict';

const graphql = require('graphql');
const moment = require('moment');
const getMinutesAway = require('./helpers/getMinutesAway');

module.exports = new graphql.GraphQLObjectType({
    name: 'Stop',
    fields: () => ({
        name: {type: graphql.GraphQLString},
        lat: {type: graphql.GraphQLFloat},
        lon: {type: graphql.GraphQLFloat},
        stopTimes: {
            type: new graphql.GraphQLList(require('./StopTime')),
            args: {
                nextArriving: {type: graphql.GraphQLInt}
            },
            resolve: (root, {nextArriving}, context, {rootValue}) => {
                const stopTimes = rootValue.stopTimesByStopId[root.id];

                if (nextArriving) {
                    const now = moment();
                    return stopTimes.sort((a, b) => {
                        return getMinutesAway(a) - getMinutesAway(b);
                    }).filter((e, i) => i < nextArriving);
                }

                return stopTimes;
            }
        }
    })
});
