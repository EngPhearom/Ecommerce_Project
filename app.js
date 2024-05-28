const express = require('express');
const upload = require('express-fileupload');
const dotenv = require('dotenv');
dotenv.config({ path : './.env' });

// export admin
const homepageadmin = require('./routes/adminroute/homeroute');
const PageProduct = require('./routes/adminroute/productroute');

// export user
const homepageuser = require('./routes/userroute/homeroute');

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
app.use(homepageadmin);
app.use(PageProduct);

//user
app.use(homepageuser);


app.listen(process.env.PORT);