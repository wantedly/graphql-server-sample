const projects = require( "../assets/projects.json" );

const getProjects = async () => {
  return projects;
}

const getProjectById = async (id) => {
  const foundProject = projects.find(p => p.id.to_s === id.to_s)
  return foundProject;
}

module.exports = {
  getProjects,
  getProjectById,
};
