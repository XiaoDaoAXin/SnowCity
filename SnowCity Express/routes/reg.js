var express = require('express');
var router = express.Router();
var {
    find,
    update,
    insert,
    ObjectId
} = require('./mongodb_operate_package');

//查询用户名是否存在
router.get('/username', async function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    var username = req.query.username;
    let data = await find('nameinfo', {
        'name':username
    })
    // console.log(data)
    res.json(data);
});

//注册新用户
router.post('/logon', async function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    var objdata = {
        "name": req.body.username,
        "psw": req.body.password
    }
    let if_data = await insert('nameinfo', objdata)
    // console.log(if_data)
    res.json(if_data);
});


//登录验证
router.post('/sign', async function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    var objdata = {
        "name": req.body.username,
        "psw": req.body.password
    }
    let sign_data = await find('nameinfo', objdata)
    // console.log(sign_data)
    res.json(sign_data);
});

module.exports = router;