const express = require('express');
const routeadmin = require('./routes/adminroute/homeroute');
const routeuser = require('./routes/userroute/homeroute');
const routeproduct = require('./routes/adminroute/productroute');

const app = express();

// register ejs
app.set('view engine', 'ejs');

// register css
app.use(express.static('public'));

// register javascript
app.use(express.urlencoded({extended : true}));

//admin
app.use(routeadmin);
app.use(routeproduct);

//uder
app.use(routeuser)


app.listen(3000);