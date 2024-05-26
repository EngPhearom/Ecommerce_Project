const con = require('../../config/database');
const fs = require('fs');

const DataProduct = (req, res) =>{
    con.query('SELECT * FROM `tbl_product`', (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.render('./adminview/product', {result});
        }
    })
}

const FormProduct = (req, res) =>{
    res.render('./adminview/formproduct');
}

const GetDataProduct = (req, res) =>{
    console.log(req.body);
    console.log(req.files);
    let file = req.files.file;
    let datetime = new Date();
    let namefile = datetime.getTime() + file.name;
    file.mv('./public/adminpublic/img/' + namefile, (err) =>{
        if(err){
            console.log(err);
        }
    });
    let body = req.body;
    let arr = [body.panme,body.dis,body.price,namefile]
    con.query('INSERT INTO `tbl_product`(`product_name`, `discription`, `price`, `image`) VALUES (?,?,?,?)', arr, (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.redirect('/product');
        }
    })
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
            res.redirect('/product');
        }
    })

    con.query('DELETE FROM `tbl_product` WHERE id = ?', [req.params.id], (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/product');
        }
    })
}

const EditDataProduct = (req, res) =>{
    con.query('SELECT * FROM `tbl_product` WHERE id = ?', [req.params.id], (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            // console.log(result);
            res.redirect('/formeditproduct');
        }
    })
}

const FormEditProduct = (req, res) =>{
    res.render('./adminview/formeditproduct');
}

// const UpdateProduct = (req, res) =>{
//     let file = req.files;
//     res.redirect('/product');
// }

module.exports = {
    DataProduct,
    FormProduct,
    GetDataProduct,
    DeleteProduct,
    EditDataProduct,
    FormEditProduct,
    // UpdateProduct,
};