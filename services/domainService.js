const Domain = require('../models/domainModel');

exports.saveDomain = async (domainData) => {
    const domain = new Domain(domainData);
    return await domain.save();
};

exports.fetchAllDomains = async () => {
    return await Domain.find();
};
