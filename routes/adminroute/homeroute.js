const express = require('express');
const HomeAdmin = require('../../controllers/admincontroller/homecontroller');

const route = express.Router();

route.get('/admin',HomeAdmin)

module.exports = route;