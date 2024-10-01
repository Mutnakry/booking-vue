const express = require('express');
const { Blobuilding} = require('../controller/Building.controller');
const router = express.Router();

router.get('/', Blobuilding);
module.exports = router;