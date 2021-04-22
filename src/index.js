const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./schema");
const cors = require("cors");

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
