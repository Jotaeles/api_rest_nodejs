const express = require('express');
const router = express.Router();

const { 
    getProduct,
    AddProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products');

router.route('/')
    .get(getProduct)
    .post(AddProduct);

router.route('/:id')
    .put(updateProduct)
    .delete(deleteProduct);

module.exports = router;