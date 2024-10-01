const db = require('../DB/db');


exports.Blobuilding = async (req, res) => {
    try {
        const sql = 'select *  FROM building';
        db.query(sql, (err, results) => {
           return res.json(results);
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
