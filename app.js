const express = require('express');
const upload = require('express-fileupload');
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

// register file
app.use(upload());

//admin
app.use(routeadmin);
app.use(routeproduct);

//uder
app.use(routeuser)


app.listen(3000);