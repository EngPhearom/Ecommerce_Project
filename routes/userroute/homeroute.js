const express = require('express');
const HomeUser = require('../../controllers/usercontroller/homecontroller');

const route = express.Router();

route.get('/', HomeUser)

module.exports = route;