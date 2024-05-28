const express = require('express');
const HomePgae = require('../../controllers/admincontroller/homecontroller');
const route = express.Router();

route.get('/admin', HomePgae);

module.exports = route;