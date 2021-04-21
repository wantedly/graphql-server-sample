const { GraphQLList, GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLID } = require("graphql");
const { UserType } = require("./UserType");

const ProjectType = new GraphQLObjectType({
  name: "Project",
  description: '募集',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "募集のID",
      resolve: obj => obj.id,
    },
    imageUrlSmall: {
      type: GraphQLString,
      description: "画像URL（一覧表示用）",
      resolve: obj => obj.imageUrlSmall,
    },
    imageUrlLarge: {
      type: GraphQLString,
      description: "画像URL（詳細画面用）",
      resolve: obj => obj.imageUrlLarge,
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: "タイトル",
      resolve: obj => obj.title,
    },
    whatDescription: {
      type: new GraphQLNonNull(GraphQLString),
      description: "なにをやっているのか",
      resolve: obj => obj.whatDescription,
    },
    whyDescription: {
      type: new GraphQLNonNull(GraphQLString),
      description: "なぜやっているのか",
      resolve: obj => obj.whyDescription,
    },
    howDescription: {
      type: new GraphQLNonNull(GraphQLString),
      description: "どうやるのか",
      resolve: obj => obj.howDescription,
    },
    staffs: {
      type: new GraphQLList(UserType),
      description: "募集に紐づくメンバー",
      resolve: obj => obj.staffs,
    }
  })
});

module.exports = {
  ProjectType,
};
