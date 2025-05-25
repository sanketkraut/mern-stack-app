const Data = require('../models/dataModel');

exports.api1Handler = async (req, res) => {
    try {
        const { input } = req.body;
        const step1 = `${input}-step1`;
        const data = new Data({ input, step1 });
        await data.save();
        res.json({ step1, id: data._id });
    } catch (error) {
        res.status(500).json({ error: 'Server error in API 1' });
    }
};