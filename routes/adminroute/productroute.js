const express = require('express');
const route = express.Router();

// Export Route
const ControllerProduct = require('../../controllers/admincontroller/productcontroller');

// Read Product
route.get('/product', ControllerProduct.PageProduct);

// Create 
route.get('/product/create', ControllerProduct.ButtonCreateProduct);
route.post('/product/create', ControllerProduct.CreateProduct);

// Edit
route.get('/product/edit/:id', ControllerProduct.ButtonEditProduct);
route.post('/product/edit/:id', ControllerProduct.UpdateProduct);

// Delete
route.get('/product/delete/:id', ControllerProduct.DeleteProduct);

module.exports = route;