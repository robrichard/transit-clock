'use strict';

const graphql = require('graphql');

module.exports = new graphql.GraphQLEnumType({
    name: 'PickUpType',
    values: {
        REGULAR: {
            value: 0,
            description: "Regularly scheduled pickup"
        },
        NOT_AVAILABLE: {
            value: 1,
            description: "No pickup available"
        },
        MUST_PHONE: {
            value: 2,
            description: "Must phone agency to arrange pickup"
        },
        MUST_COORDINATE: {
            value: 3,
            description: "Must coordinate with driver to arrange pickup"
        }
    }
});
