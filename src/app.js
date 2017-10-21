'use strict';

const express = require('express');
const graphqlHTTP = require('express-graphql');
const Schema = require('./schema/index');
const getRootValue = require('./getRootValue');
const {formatError} = require('graphql/')
const app = express();

app.use('/graphql', graphqlHTTP(async (request, response, graphQLParams) => ({
    schema: Schema,
    rootValue: await getRootValue(),
    formatError: e => {
        console.error(e);
        return formatError(e);
    },
    graphiql: true
})));

const port = process.env.NODE_PORT || 4567;

const server = app.listen(port, function () {
    console.log(`listening on http://localhost:${server.address().port}`);
});
