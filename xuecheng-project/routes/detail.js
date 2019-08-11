var express = require('express');
var router = express.Router();
var {
    find,
    update,
    ObjectId
} = require('./mongodb_operate_package');


//根据索引查找商品 返回给详情页
router.get('/hot', async function (req, res, next) {
    let id = req.query.id*1
    console.log(id)
    res.header('Access-Control-Allow-Origin', '*');
    let data = await find('hotShopList', {
        'id':id
    })
    res.json(data);
});

//销量商品排序
router.get('/xiaoliang', async function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    let data = await find('hotShopList',{})
    data.sort({'num': 1})
    res.json(data);
});


module.exports = router;