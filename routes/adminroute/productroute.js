const express = require('express');

const ControllerProduct = require('../../controllers/admincontroller/productcontroller');
const route = express.Router();

route.get('/product', ControllerProduct.PageProduct);

// Create 
route.get('/buttoncreateproduct', ControllerProduct.ButtonCreateProduct);
route.post('/createproduct', ControllerProduct.CreateProduct);

module.exports = route;