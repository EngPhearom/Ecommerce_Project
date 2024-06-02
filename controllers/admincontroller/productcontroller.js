const con = require('../../config/database');
const fs = require('fs');

const PageProduct = (req, res) =>{
    var sql = "SELECT `id`, `product_name`, `discription`, `price`, `image` FROM `tbl_product`";
    con.query(sql, (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.render('./adminview/product', {result});
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
    file.mv('./public/adminpublic/img/' + namefile, (err) =>{
        if(err){
            console.log(err);
        }
    })
    var sql = "INSERT INTO `tbl_product`(`product_name`, `discription`, `price`, `image`) VALUES (?,?,?,?)";
    var body = req.body;
    var arr = [body.pname,body.dis,body.price,namefile];
    con.query(sql, arr, (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/product');
        }
    })
}

const ButtonEditProduct = (req, res) =>{
    var sql = "SELECT * FROM `tbl_product` WHERE id = ?";
    con.query(sql, [req.params.id], (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result)
            res.render('./adminview/formeditproduct', {result});
        }
    })
}

const UpdateProduct = (req, res) =>{
    var file = req.files;
    if(file == null){
        var sql = "UPDATE `tbl_product` SET `product_name`=?,`discription`=?,`price`=? WHERE id = ?";
        var body = req.body;
        var arr = [body.pname,body.dis,body.price,req.params.id];
        con.query(sql, arr, (err, result) =>{
            if(err){
                console.log(err);
            }
            else{
                console.log(result);
                res.redirect('/product');
            }
        })
    }
    else{
        con.query('SELECT `image` FROM `tbl_product` WHERE id = ?', [req.params.id], (err, result) =>{
            if(err){
                console.log(err);
            }
            fs.unlink('./public/adminpublic/img/' + result[0].image, (err) =>{
                if(err){
                    console.log(err);
                }
            });
        });

        var file = req.files.file;
        var date = new Date;
        var namefile = date.getTime() + file.name;
        file.mv('./public/adminpublic/img/' + namefile, (err) =>{
            if(err){
                console.log(err);
            }
        })
        var mysql = "UPDATE `tbl_product` SET `product_name`=?,`discription`=?,`price`=?,`image`=? WHERE id = ?";
        var body = req.body;
        var myarr = [body.pname,body.dis,body.price,namefile,req.params.id];
        con.query(mysql, myarr, (err, result) =>{
            if(err){
                console.log(err);
            }
            else{
                console.log(result);
                res.redirect('/product');
            }
        })
    }
}

const DeleteProduct = (req, res) =>{
    con.query('SELECT `image` FROM `tbl_product` WHERE id = ?', [req.params.id], (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            fs.unlink('./public/adminpublic/img/' + result[0].image, (err) =>{
                if(err){
                    console.log(err);
                }
            })
        }
    })
    var sql = "DELETE FROM `tbl_product` WHERE id = ?";
    con.query(sql, [req.params.id], (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/product');
        }
    })
}

module.exports = {
    PageProduct,
    ButtonCreateProduct,
    CreateProduct,
    ButtonEditProduct,
    UpdateProduct,
    DeleteProduct
};