const express = require('express');
const { GetAllResort,GetDataSingle} = require('../controller/product_resort.controller');

const router = express.Router();

router.get('/', GetAllResort);
router.get('/:id', GetDataSingle);
module.exports = router;