const db = require('../DB/db');

// exports.booking_cus=async(req,res)=>{
//     console.log(req.body); // Log the request body
//     const { startfrom, endfrom, startDate, endDate } = req.body;
//     if (!startDate || !endDate || !startfrom || !endfrom) {
//         return res.status(400).json({ error: 'Both startDate, endDate, startfrom, and endfrom are required' });
//     }
//     const sql = "SELECT * FROM product_booking_bus WHERE `from_start` = ? AND `from_to` = ? AND `dob` BETWEEN ? AND ?";

//     // Make sure to include the `startfrom` and `endfrom` parameters in the query
//     db.query(sql, [startfrom, endfrom, startDate, endDate], (err, results) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: 'Internal Server Error' });
//         }

//         res.json(results);
//     });
// }


exports.booking_cus=async(req,res)=>{
    console.log(req.body); // Log the request body
    const { startfrom, endfrom, startDate } = req.body;
    if (!startDate || !startfrom || !endfrom) {
        return res.status(400).json({ error: 'Both startDate, endDate, startfrom, and endfrom are required' });
    }
    const sql = "SELECT * FROM product_booking_bus WHERE `from_start` = ? AND `from_to` = ? AND `dob`= ?";

    // Make sure to include the `startfrom` and `endfrom` parameters in the query
    db.query(sql, [startfrom, endfrom, startDate], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        res.json(results);
    });
}

// exports.booking_cus = async (req, res) => {
//     console.log(req.body); // Log the request body
//     const { startfrom, endfrom, startDate, endDate } = req.body;

//     if (!startDate || !endDate || !startfrom || !endfrom) {
//         return res.status(400).json({ error: 'Both startDate, endDate, startfrom, and endfrom are required' });
//     }

//     // Adjusted SQL query with proper BETWEEN syntax
//     const sql = "SELECT * FROM product_booking_bus WHERE `from_start` = ? AND `from_to` = ? AND `dob` BETWEEN ? AND ?";

//     // Use the parameters in the correct order for the query
//     db.query(sql, [startfrom, endfrom, startDate, endDate], (err, results) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: 'Internal Server Error' });
//         }

//         res.json(results);
//     });
// }
