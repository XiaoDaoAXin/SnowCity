var express = require('express');
var router = express.Router();
var {
    find,
    insert ,
    update,
    ObjectId
} = require('./mongodb_operate_package');


//添加商品
router.get('/addshop', async function (req, res, next) {
    let id = req.query.id * 1
    // console.log(id)
    res.header('Access-Control-Allow-Origin', '*');
    let findRes = await find('hotShopList',{
        id:id
    })
    // console.log(findRes)
    let data = await insert('car', findRes)
    res.json(data);
});

//查询购物车内商品
router.get('/shops', async function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    let SearchData = await find('car',{})
    res.json(SearchData);
});


module.exports = router;