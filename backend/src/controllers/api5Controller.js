const Data = require('../models/dataModel');

exports.api5Handler = async (req, res) => {
    try {
        const { id, step4 } = req.body;
        const step5 = `${step4}-step5`;
        await Data.findByIdAndUpdate(id, { step5 });
        res.json({ finalOutput: step5, id });
    }
    catch (error) {
        res.status(500).json({ error: 'Server error in API 5' });
    }
};