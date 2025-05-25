const Data = require('../models/dataModel');

exports.api2Handler = async (req, res) => {
    try {
        const { id, step1 } = req.body;
        const step2 = `${step1}-step2`;
        await Data.findByIdAndUpdate(id, { step2 });
        res.json({ step2, id });
    } catch (error) {
        res.status(500).json({ error: 'Server error in API 2' });
    }
};