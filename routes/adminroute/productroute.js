const express = require('express');
const { DataProduct, FormProduct }= require('../../controllers/admincontroller/productcontroller');

const route = express.Router();

route.get('/product', DataProduct);
route.get('/addproduct', FormProduct)

module.exports = route;