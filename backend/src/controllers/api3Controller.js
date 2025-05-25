const Data = require('../models/dataModel');

exports.api3Handler = async (req, res) => {
    try {
        const { id, step2 } = req.body;
        const step3 = `${step2}-step3`;
        await Data.findByIdAndUpdate(id, { step3 });
        res.json({ step3, id });
    }
    catch (error) {
        res.status(500).json({ error: 'Server error in API 3' });
    }
};