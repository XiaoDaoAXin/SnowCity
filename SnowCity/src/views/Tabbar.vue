<template>
  <div class="box">
   

    <!-- 把路由组件缓存到内存里面 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!-- -------底部导航标签------------ -->
    <van-tabbar :route="true" v-model="active" active-color="orange">
      <van-tabbar-item 
       :icon="item.icon" 
       v-for="(item,index) in  tabbarsItems" 
        @click="navTo(item.url)"
       :key="index">{{item.title}}</van-tabbar-item>
    </van-tabbar>

  </div>
</template>
<script>
export default {
  data() {
    return {
      //底部导航标签高亮索引
      active: 0,
    tabbarsItems: [
        {
          title: "首页",
          // 路由名字
          url: "home",
          // 图标
          icon: "wap-home"
        },
        {
          title: "分类",
          url: "sort",
          icon: "bars"
        },
        {
          title: "购物车",
          url: "nullcar",
          icon: "shopping-cart-o"
        }
        ,
        {
          title: "会员",
          url: "user",
          icon: "user-o"
        }
      ]
    };
  },

  methods: {
   //编程式导航
   navTo(name){
     this.$router.push({
       name
     })
   }
  }
};
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

.scroll_top {
  margin-bottom: 60px;
}
.header {
  height: 48px;
  border-bottom: 1px solid #e4e5e6;
  padding: 8px;
  box-sizing: border-box;
  text-align: center;
  .image {
    display: inline-block;
    width: 31px;
    height: 31px;
  }
  input {
    width: 100%;
    height: 32px;
    color: #e4e5e6;
    text-align: center;
    font-size: 14px;
    border: 1px solid #e4e5e6;
    border-radius: 6px;
  }
  .login {
    color: red;
    line-height: 32px;
    cursor: pointer;
  }
}
.van-grid-item {
  // margin-top: 28px;
  //   height: 90px;
  text-align: center;
  .van-icon {
    margin-right: 28px;
  }
  .van-grid-item__content {
    padding: 0px;
  }
  .van-image__img {
    display: inline-block;
    width: 55px;
    height: 55px;
  }
}

.main {
  background-color: #eeeeee;
  margin-top: 10px;
  padding-top: 10px;
  overflow: hidden;
  .main_item {
    margin-bottom: 10px;
  }
  //   .nongchan,
  //   .jinxuan{
  //       margin-top: 10px;
  //   }
  .top {
    height: 71px;
  }
  .title {
    padding: 12px 16px;
    overflow: hidden;
    background-color: #fff;
    > span:nth-child(1) {
      float: left;
    }
    > span:nth-child(2) {
      float: right;
      cursor: pointer;
    }
  }
  .sort {
    .content {
      padding: 0px 10px;
      padding-bottom: 10px;
      background-color: #fff;
      .row {
        margin-bottom: 15px;
      }
      .van-col {
        padding: 0px 16px;
        height: 48px;
        line-height: 48px;
        border: 1px solid #e4e5e6;
        background: #f5f5f8;
        border-color: #dadadd;
        color: #66656b;
        font-size: 15px;
      }
      .sort_item {
        margin-bottom: 5px;
        img {
          width: 46px;
          height: 46px;
          float: right;
        }
      }
    }
  }
}
.footer {
  height: 50px;
  line-height: 50px;
  color: #bbb;
  font-size: 12px;
  text-align: center;
}
</style>

