import Vue from "vue"
//全局引入vue-router
import VueRouter from 'vue-router'

//安装路由
Vue.use(VueRouter)

//引入路由组件
import Tabbar from "../views/Tabbar"
//热门商品列表页 同步加载
// import HotShopList from "../views/list/HotShopList"
//懒加载
const HotShopList = () => import('../views/list/HotShopList')
import Home from '../views/tabbar/Home'

//详情页
const Detail = () => import('../views/Detail')

//空购物车页
const NullCar = () => import('../views/tabbar/NullCar')

//购物车页
const HasCar = () => import('../views/tabbar/HasCar')


//商品分类页面组件
import Sort from '../views/tabbar/Sort'

//定义路由组件
const routes = [{
        name: "tabbar",
        path: "/",
        component: Tabbar,
        children: [{
                name: 'home',
                path: "Home",
                component: Home,
            }, {
                name: 'sort',
                path: "Sort",
                component: Sort,
            },
            //空购物车页
            {
                name: 'nullcar',
                path: "NullCar",
                component: NullCar,
            },
            //购物车页
            {
                name: 'hascar',
                path: "HasCar",
                component: HasCar,
            }
        ]
    },
    //热门商品列表页
    {
        name: 'hotshoplist',
        path: "/HotShopList",
        component: HotShopList,
    },
    //详情页
    {
        name: 'detail',
        path: "/Detail/:id",
        component: Detail,
    },


]


//生成路由是咧
const router = new VueRouter({
    routes
})

//推出组件
export default router