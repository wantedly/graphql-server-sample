const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
} = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  description: "ユーザー",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "ユーザーのID",
      resolve: (obj) => obj.id,
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: "ユーザー名",
      resolve: (obj) => obj.name,
    },
    avatarUrl: {
      type: GraphQLString,
      description: "アバター画像URL",
      resolve: (obj) => obj.avatarUrl,
    },
  }),
});

module.exports = {
  UserType,
};
