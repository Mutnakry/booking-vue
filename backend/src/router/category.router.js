const express = require('express');
const { createcategory,getCategory ,DeleteCategory,UpdateCategory,getdatasingsle} = require('../controller/category.controller');

const router = express.Router();

router.post('/', createcategory);
router.get('/', getCategory);
router.delete('/:id', DeleteCategory);
router.put('/:id', UpdateCategory);
router.get('/:id', getdatasingsle);
module.exports = router;