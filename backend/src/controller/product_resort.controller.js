const db = require('../DB/db');



exports.getCategory=async(req,res)=>{
    const { page = 1, limit = 15, search = '' } = req.query;
    const offset = (page - 1) * limit;

    const sql = `
      SELECT SQL_CALC_FOUND_ROWS * FROM category
      WHERE names LIKE ?
      LIMIT ? OFFSET ?
    `;

    db.query(sql, [`%${search}%`, parseInt(limit), parseInt(offset)], (err, results) => {
        if (err) return res.status(500).json({ error: err });

        db.query('SELECT FOUND_ROWS() as total', (err, totalResults) => {
            if (err) return res.status(500).json({ error: err });
            const total = totalResults[0].total;
            res.status(200).json({ data: results, total });
        });
    });
}

exports.GetAllResort = async (req, res) => {
    try {
        const sql = 'select *  FROM resort';
        db.query(sql, (err, results) => {
           return res.json(results);
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.GetDataSingle = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = 'select *  FROM resort where id =?';
        db.query(sql,[id], (err, results) => {
           return res.json(results);
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};