const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} = require("graphql");
const {
  getProjects,
  getProjectById,
  searchProjectsByKeyword,
} = require("../services/projects");
const { ProjectType } = require("./ProjectType");

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    projects: {
      type: new GraphQLList(ProjectType),
      description: "募集一覧を返すクエリ",
      args: {
        keyword: {
          type: GraphQLString,
        },
      },
      resolve: async (_, args) => {
        if (!args.keyword) {
          const projects = await getProjects();
          return projects;
        }
        const matched = await searchProjectsByKeyword(args.keyword);
        return matched;
      },
    },
    project: {
      type: ProjectType,
      description: "募集IDから募集を返すクエリ",
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: async (_, args) => {
        const project = await getProjectById(args.id);
        if (!project) {
          throw new Error("募集が見つかりませんでした");
        }
        return project;
      },
    },
  }),
});

module.exports = {
  QueryType,
};
