var express = require('express');
var router = express.Router();
var {
    find,
    update,
    ObjectId
} = require('./mongodb_operate_package');

// 解析请求体的模块
// var bodyParser = require('body-parser');
// var app = express();
// // 该app对象调用其他模块来去处理请求和响应
// // app.use全局使用
// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// app.use((req, res, next) => {
//     // 全局添加
//     res.append('Access-Control-Allow-Origin', '*');
//     next();
// })
/* GET users listing. */
// app.get('/', async (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     let data = await find('newList', {

//     })
//     // console.log(data)
//     res.json(data);
// })

router.post("/changeStatus", async (req, res, next) => {
    // res.header('Access-Control-Allow-Origin', '');
    const param = req.body.status.replace('')
    const index = req.body.index.replace('')
    console.log(param,index)
    let result = await update("newList", index,param)
    res.json(result);
})
//热门商品数据
router.get('/hotshoplist', async function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    let data = await find('hotShopList', {

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

//筛选商品
router.get('/shaixuan', async function (req, res, next) {
    //调用正则对象
    let shaixuan_data= new RegExp(req.query.shaixuan);
    // console.log(shaixuan_data)
    res.header('Access-Control-Allow-Origin', '*');
    let search_data = await find('hotShopList', {
        'dec':shaixuan_data,
    })
    // console.log(search_data)
    res.json(search_data);
});

//修改序号
router.get('/changeXuhao', async function (req, res, next) {
    var new_huohao = req.query.huohao+'';
    var new_xuhao = req.query.xuhao*1;
    // console.log(new_huohao,new_xuhao)
    res.header('Access-Control-Allow-Origin', '*');
    await update('newList',{'huohao':new_huohao },{'xuhao':new_xuhao },async data=>{
        //返回新数据
        let changeHuohao_data = await find('newList', {

        })
        res.json(changeHuohao_data);
    })

});

module.exports = router;