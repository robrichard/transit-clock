'use strict';

const graphql = require('graphql');
const getMinutesAway = require('./helpers/getMinutesAway');
const isServiceActive = require('./helpers/isServiceActive');

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
            resolve: (root, {nextArriving, isActive}, context, {rootValue}) => {
                let stopTimes = rootValue.stopTimesByStopId[root.id];

                if (isActive) {
                    stopTimes = stopTimes.filter(s => isServiceActive(s._list._trip.service));
                }

                if (nextArriving) {
                    stopTimes = stopTimes.sort((a, b) => {
                        return getMinutesAway(a) - getMinutesAway(b);
                    }).filter((e, i) => i < nextArriving);
                }


                return stopTimes;
            }
        }
    })
});
