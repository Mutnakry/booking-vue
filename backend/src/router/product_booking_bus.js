const express = require('express');
const { booking_cus} = require('../controller/product-booking_bus');

const router = express.Router();

router.post('/', booking_cus);
module.exports = router;