const projectService = require('../services/projectService');

exports.createProject = async (req, res) => {
    try {
        const projectData = req.body;
        const project = await projectService.saveProject(projectData);
        res.status(201).json({ message: 'Project created successfully', data: project });
    } catch (error) {
        res.status(500).json({ message: 'Error creating project', error: error.message });
    }
};


exports.getAllProjects = async (req, res) => {
    try {
        const projects = await projectService.fetchAllProjects();
        res.status(200).json({ data: projects });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects', error: error.message });
    }
};
