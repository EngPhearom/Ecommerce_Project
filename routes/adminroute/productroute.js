const express = require('express');
const { DataProduct, FormProduct, GetDataProduct, DeleteProduct }= require('../../controllers/admincontroller/productcontroller');

const route = express.Router();

route.get('/product', DataProduct);
route.get('/addproduct', FormProduct);
route.post('/addproduct', GetDataProduct);
route.get('/deleteproduct/:id', DeleteProduct);

module.exports = route;