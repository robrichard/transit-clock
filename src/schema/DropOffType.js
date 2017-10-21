'use strict';

const graphql = require('graphql');

module.exports = new graphql.GraphQLEnumType({
    name: 'DropOff',
    values: {
        REGULAR: {
            value: 0,
            description: "Regularly scheduled drop off"
        },
        NOT_AVAILABLE: {
            value: 1,
            description: "No drop off available"
        },
        MUST_PHONE: {
            value: 2,
            description: "Must phone agency to arrange drop off"
        },
        MUST_COORDINATE: {
            value: 3,
            description: "Must coordinate with driver to arrange drop off"
        }
    }
});
