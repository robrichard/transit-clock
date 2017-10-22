'use strict';

const graphql = require('graphql');

module.exports = new graphql.GraphQLObjectType({
    name: 'DisplayBoard',
    fields: () => ({
        items: {type: new graphql.GraphQLList(
            new graphql.GraphQLObjectType({
                name: 'DisplayBoardListItem',
                fields: {
                    name: {type: graphql.GraphQLString},
                    color: {type: graphql.GraphQLString},
                    textColor: {type: graphql.GraphQLString},
                    minutesAway: {type: new graphql.GraphQLList(graphql.GraphQLInt)},
                }
            })
        )}
    })
});
