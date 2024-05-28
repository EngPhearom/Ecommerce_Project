const con = require('../../config/database');

const HomeUser = (req, res) =>{
    res.render('./userview/index', {title : 'HomePage'});
}

module.exports = HomeUser;