const Project = require('../models/projectModel');

exports.saveProject = async (projectData) => {
    const project = new Project(projectData);
    return await project.save();
};

exports.fetchAllProjects = async () => {
    return await Project.find();
};
