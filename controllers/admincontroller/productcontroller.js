const con = require('../../config/database');

const DataProduct = (req, res) =>{
    res.render('./adminview/product');
}

const FormProduct = (req, res) =>{
   res.render('./adminview/formproduct'); 
}

module.exports = {
    DataProduct,
    FormProduct
};