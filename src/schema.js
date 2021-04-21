const { GraphQLSchema } = require("graphql");
const { QueryType } = require("./types/QueryType");

const schema = new GraphQLSchema({
  query: QueryType,
});

module.exports = {
  schema,
};
