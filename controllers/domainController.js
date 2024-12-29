const domainService = require('../services/domainService');

exports.createDomain = async (req, res) => {
    try {
        const domainData = req.body;
        const domain = await domainService.saveDomain(domainData);
        res.status(201).json({ message: 'Domain created successfully', data: domain });
    } catch (error) {
        res.status(500).json({ message: 'Error creating domain', error: error.message });
    }
};


exports.getAllDomains = async (req, res) => {
    try {
        const domains = await domainService.fetchAllDomains();
        res.status(200).json({ data: domains });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching domains', error: error.message });
    }
};
