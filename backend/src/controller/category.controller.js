const db = require('../DB/db');

exports.createcategory=async(req,res)=>{
    const { names} = req.body;
    const sql = "insert into category (names) values (?) ";
    db.query(sql,[names],(err,results)=>{
        if(err){
            return res.status(500).send('Error')
        }
        // res.status(500).send('successfull')
        return res.json(results)
    })
}

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

exports.DeleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = 'delete  FROM category where id=?';
        db.query(sql,[id], (err, results) => {
           return res.json(results);
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.getdatasingsle = async (req, res) => {
    try {
        const id = req.params.id;
        const sql = 'select *  FROM category where id=?';
        db.query(sql,[id], (err, results) => {
           return res.json(results[0]);
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.UpdateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const { names} = req.body;
        const sql = 'update category set names=? where id=?';
        db.query(sql,[names,id], (err, results) => {
           return res.json(results);
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};