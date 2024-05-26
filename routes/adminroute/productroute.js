const express = require('express');
const { DataProduct, FormProduct, GetDataProduct, DeleteProduct, EditDataProduct, FormEditProduct }= require('../../controllers/admincontroller/productcontroller');

const route = express.Router();

route.get('/product', DataProduct);
route.get('/addproduct', FormProduct);
route.post('/addproduct', GetDataProduct);
route.get('/deleteproduct/:id', DeleteProduct);
route.get('/editproduct/:id', EditDataProduct);
route.get('/formeditproduct', FormEditProduct);

module.exports = route;