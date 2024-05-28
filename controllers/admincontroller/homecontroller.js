const con = require('../../config/database');

const HomePgae = (req, res) =>{
    res.render('./adminview/index');
}

module.exports = HomePgae;