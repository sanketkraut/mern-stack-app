const Data = require('../models/dataModel');

exports.api4Handler = async (req, res) => {
    try {
        const { id, step3 } = req.body;
        const step4 = `${step3}-step4`;
        await Data.findByIdAndUpdate(id, { step4 });
        res.json({ step4, id });
    }
    catch (error) {
        res.status(500).json({ error: 'Server error in API 4' });
    }
};