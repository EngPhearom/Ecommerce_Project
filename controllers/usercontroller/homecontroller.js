const con = require('../../config/database');

const HomeUser = (req, res) =>{
    con.query('SELECT * FROM `tbl_product`', (err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.render('./userview/index', {title : 'HomePage', result});
        }
    })
}

module.exports = HomeUser;