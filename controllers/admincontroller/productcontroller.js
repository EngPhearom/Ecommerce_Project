const con = require('../../config/database');

const PageProduct = (req, res) =>{
    var sql = "SELECT `id`, `product_name`, `discription`, `price`, `image` FROM `tbl_product`";
    con.query(sql, (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.render('./adminview/product');
        }
    })
};

const ButtonCreateProduct = (req, res) =>{
    res.render('./adminview/formproduct');
}

const CreateProduct = (req, res) =>{
    var file = req.files.file;
    var date = new Date;
    var namefile = date.getTime() + file.name;
    file.mv('./adminpublic/img/' + namefile, (err) =>{
        if(err){
            console.log(err);
        }
    })
    var sql = "INSERT INTO `tbl_product` (`product_name`, `discription`, `price`, `image`) VALUES (?,?,?,?)";
    var body = req.body;
    var arr = [body.pname,body.dis,body.price,namefile];
    con.query(sql, arr, (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.redirct('/product');
        }
    })
}

module.exports = {
    PageProduct,
    ButtonCreateProduct,
    CreateProduct
};