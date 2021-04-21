const { GraphQLObjectType, GraphQLSchema } = require("graphql");

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "TODO",
  fields: () => ({
    query: {
      type: QueryType,
      resolve: (...args) => args,
    },
  }),
});

const schema = new GraphQLSchema({
  query: QueryType,
});

module.exports = {
  schema,
};
