'use strict';

const graphql = require('graphql');
const Agency = require('./Agency');
const Stop = require('./Stop');
const getStopTimes = require('./helpers/getStopTimes');
const getMinutesAway = require('./helpers/getMinutesAway');
const getShortHeadsign = require('./helpers/getShortHeadsign');

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
            },
            displayBoard: {
                type: require('./DisplayBoard'),
                args: {
                    stopName: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)}
                },
                resolve: (root, {stopName}) => {
                    const stops = root.stopsByName[stopName];
                    if (!stops) {
                        throw new Error(`invalid stop name: ${stopName}`);
                    }

                    const items = [];
                    for (const stop of stops) {
                        const groupBy = {};
                        for (const stopTime of getStopTimes(stop, root, {
                            nextArriving: 3,
                            isActive: true
                        })) {
                            const name = getShortHeadsign(stopTime._list._trip.headsign);
                            groupBy[name] = groupBy[name] || {
                                name: name,
                                color: stopTime._list._trip.route.color,
                                textColor: stopTime._list._trip.route.textColor,
                                minutesAway: []
                            };
                            groupBy[name].minutesAway.push(Math.floor(getMinutesAway(stopTime)));
                        }
                        Object.keys(groupBy).forEach(name => {
                            items.push(groupBy[name]);
                        });
                    }
                    return {items};
                }
            }
        }
    })
});
