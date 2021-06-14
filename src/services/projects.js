const projects = require("../assets/projects.json");

const getProjects = async () => {
  return projects;
};

const getProjectById = async (id) => {
  const foundProject = projects.find((p) => {
    return p.id.toString() === id.toString();
  });
  return foundProject;
};

module.exports = {
  getProjects,
  getProjectById,
};
