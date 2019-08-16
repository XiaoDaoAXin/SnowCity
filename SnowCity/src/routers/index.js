import Vue from "vue"

import axios from 'axios'
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

//登路页
const Sign = () => import('../views/Sign')

//用户页
const User = () => import('../views/User')

//登路页
const Logon = () => import('../views/Logon')


//商品分类页面组件
import Sort from '../views/tabbar/Sort'



//定义路由组件
const routes = [{
        name: "tabbar",
        path: "/",
        component: Tabbar,
        children: [{
                name: 'home',
                path: "/",
                component: Home,
            }, {
                name: 'sort',
                path: "sort",
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
            },
            //用户页
            {
                name: 'user',
                path: "User",
                component: User,
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
    //登录页
    {
        name: 'sign',
        path: "/Sign",
        component: Sign,
    },
    //注册页
    {
        name: 'logon',
        path: "/Logon",
        component: Logon,
    },
    //用户页
    {
        name: 'user',
        path: "/User",
        component: User,
    },

    //首页的重定向
    {
        path: "/",
        redirect: {
            name: 'home'
        }
    },


]


//生成路由是咧
const router = new VueRouter({
    routes
})

// 全局前置守卫

// 要进入路由，都要先通过这个守卫
//获取cookie
function getCookie(key) {
    var cookies = document.cookie; //name=malin; pwd=123456
    var arr = cookies.split('; '); //['name=malin','pwd=123456']
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('='); //['name','malin'
        if (key == arr2[0]) {
            return arr2[1];
        }
    }
}


router.beforeEach(async (to, from, next) => {
    let isLogin = null;
    let user = getCookie('userName')
    if (user) {
        isLogin = 1
    }

    // 如果你没登陆你就进sign
    // 如果你登陆 next

    // 如果你登陆了你就next
    // 或者你就要去登陆页，你也可以next

    // 如果你是首页，详情页，登录页或者你登陆了，都可以进去，否则不给你进去
    // if (isLogin || to.name === 'sign' || to.name === 'sort' || to.name === 'detail' ||
    //     to.name === 'home' || to.name === 'hascar' || to.name === 'nullcar' || to.name === 'hotshoplist' ||
    //     to.name === 'logon') {
    //     next()
    // } else {
    //     // 编程式导航
    //     router.push({
    //         name: 'sign'
    //     })
    // }
    if (to.name === 'user') {
        if (isLogin) {
            next()
        } else {
            // 编程式导航
            router.push({
                name: 'sign'
            })
        }
    } else {
        next()
    }

})

//推出组件
export default router