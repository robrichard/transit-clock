'use strict';

const graphql = require('graphql');
const moment = require('moment');
const isServiceActive = require('./helpers/isServiceActive');

function resolve(field) {
    return field > 0;
}

module.exports = new graphql.GraphQLObjectType({
    name: 'Service',
    fields: () => ({
        start: {type: graphql.GraphQLString},
        end: {type: graphql.GraphQLString},
        isActive: {type: graphql.GraphQLBoolean, resolve: isServiceActive},
        days: {type: new graphql.GraphQLObjectType({
            name: 'ServiceDays',
            fields: {
                monday: {
                    type: graphql.GraphQLBoolean,
                    resolve: root => resolve(root.monday)
                },
                tuesday: {
                    type: graphql.GraphQLBoolean,
                    resolve: root => resolve(root.tuesday)
                },
                wednesday: {
                    type: graphql.GraphQLBoolean,
                    resolve: root => resolve(root.wednesday)
                },
                thursday: {
                    type: graphql.GraphQLBoolean,
                    resolve: root => resolve(root.thursday)
                },
                friday: {
                    type: graphql.GraphQLBoolean,
                    resolve: root => resolve(root.friday)
                },
                saturday: {
                    type: graphql.GraphQLBoolean,
                    resolve: root => resolve(root.saturday)
                },
                sunday: {
                    type: graphql.GraphQLBoolean,
                    resolve: root => resolve(root.sunday)
                }
            }
        })},
    })
});
