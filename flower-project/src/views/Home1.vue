<template>
  <div class="box">
    <div class="top">
      <!-- --------头部------------- -->
      <van-nav-bar title="" right-text="登录" style="color:'#fff'" left-arrow @click-right="onClickRight">
        <van-icon name="wap-nav" slot="left" size="22px" color="#fff" />
      </van-nav-bar>
      <!-- --------轮播------------- -->
      <van-swipe :autoplay="3000" @change="onChange">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image :src="image" />
        </van-swipe-item>
      </van-swipe>

      <!-- -------标签------------- -->
      <van-row style="text-align:center; height:33px ;color: #232628;" class="biaoqian">
        <van-col class="conpany-info-item" span="7" style="font-size:12px; margin-top:8px">
          <van-icon name="success" />认证龙头企业</van-col>
        <van-col class="conpany-info-item" span="5" style="font-size:12px; margin-top:8px">
          <van-icon name="success" />14年品</van-col>
        <van-col class="conpany-info-item" span="5" style="font-size:12px; margin-top:8px">
          <van-icon name="success" />3小时送</van-col>
        <van-col class="conpany-info-item" span="7" style="font-size:12px; margin-top:8px">
          <van-icon name="success" />最近325880条好</van-col>
      </van-row>

      <!-- -------宫格导航------------- -->
      <van-grid :column-num="5" style="margin-top:10px">
        <van-grid-item v-for="(item,index) in gongge" :key="index" :icon="item.image" :text="item.text" />
      </van-grid>

      <!-- -------选花------------- -->
      <template>
        <div class="select">
          <div class="title">
            <span>一秒选花</span>
          </div>
          <div class="song">
            <van-row gutter="5">
              <van-col :span="8" class="item" style="height:112px" v-for="(item,value) in song" :key="value">
                <van-image :src="item.image" />
                <span class="text">{{item.text}}</span>
              </van-col>
            </van-row>
          </div>
          <div class="zhufu">
            <van-row gutter="5">
              <van-col :span="6" class="item" style="height:112px" v-for="(item,value) in zhufu" :key="value">
                <van-image :src="item.image" />
                <span class="text">{{item.text}}</span>
              </van-col>
            </van-row>
          </div>
          <div class="hot">
            <van-row gutter="5">
              <van-col span="12" class="item1">
                <p class="p1">热销排行</p>
                <p class="p2">集万千宠爱</p>
                <span class="p3">大家都在买</span>
              </van-col>
              <van-col span="12" class="item2">
                <p class="p1">热销排行</p>
                <p class="p2">集万千宠爱</p>
                <span class="p3">大家都在买</span>
              </van-col>
            </van-row>
          </div>
          <div class="xinpin">
            <van-row gutter="5">
              <van-col :span="8" class="item" style="height:112px" v-for="(item,index) in xinpin" :key="index">
                <van-image :src="item.image" />
                <span class="text">{{item.text}}</span>
              </van-col>
            </van-row>
          </div>
        </div>
      </template>

      <!-- -------列表------------- -->
      <div class="list">
        <div class="main">
          <div class="title">送恋人/爱情鲜花</div>
          <van-row gutter="5">
            <van-col :span="12">
             <van-image src="//img01.hua.com/uploadpic/newpic/201801162043054106.jpg" />
            </van-col>
            <van-col :span="12">
              <van-col span="8">span: 8</van-col>
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
    <!-- -------底部导航标签------------ -->
    <van-tabbar v-model="active" active-color="#FF734C">
      <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item icon="bars">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>

  </div>

</template>

<script>
export default {
  data() {
    return {
      //底部导航标签高亮索引
      active: 0,
      images: [
        "https://img02.hua.com/slider/18_birthday_m.jpg",
        "https://img02.hua.com/slider/18_shizizuo_m.jpg",
        "https://img02.hua.com/slider/18_youflower_m.jpg"
      ],
      song: [
        {
          image: "https://img02.hua.com/m/home/img/m_home_use_love.png?0718",
          router: "",
          text: "送恋人"
        },
        {
          image: "https://img02.hua.com/m/home/img/m_home_use_parent.png?0718",
          router: "",
          text: "送长辈"
        },
        {
          image: "https://img02.hua.com/m/home/img/m_home_use_friend.png?0718",
          router: "",
          text: "送朋友"
        }
      ],
      //---------------祝福--------------
      zhufu: [
        {
          image:
            "https://img02.hua.com/m/home/img/m_home_use_birthday.png?0718",
          router: "",
          text: "生日祝福"
        },
        {
          image: "https://img02.hua.com/m/home/img/m_home_use_profess.png?0718",
          router: "",
          text: "表白求婚"
        },
        {
          image:
            "https://img02.hua.com/m/home/img/m_home_use_business.png?0718",
          router: "",
          text: "开业商户"
        },
        {
          image:
            "https://img02.hua.com/m/home/img/m_home_use_anniversary.png?0718",
          router: "",
          text: "周年纪念"
        }
      ],
      //---------------新品--------------
      xinpin: [
        {
          image:
            "https://img02.hua.com/m/home/img/m_home_category_new.png?0718",
          router: "",
          text: "新品来袭"
        },
        {
          image:
            "https://img02.hua.com/m/home/img/m_home_category_quality.png?0718",
          router: "",
          text: "品味之选"
        },
        {
          image:
            "https://img02.hua.com/m/home/img/m_home_category_you.png?0718",
          router: "",
          text: "设计师甄选"
        }
      ],
      gongge: [
        {
          image: "https://img02.hua.com/m/home/img/m_home_category_flower.png",
          text: "鲜花",
          router: ""
        },
        {
          image: "https://img02.hua.com/m/home/img/m_home_category_ppf.png",
          text: "永生花",
          router: ""
        },
        {
          image: "https://img02.hua.com/m/home/img/m_home_category_cake.png",
          text: "蛋糕",
          router: ""
        },
        {
          image: "https://img02.hua.com/m/home/img/m_home_category_gift.png",
          text: "礼品",
          router: ""
        },
        {
          image:
            "https://img02.hua.com/m/home/img/m_home_category_chocolate.png",
          text: "巧克力",
          router: ""
        }
      ]
    };
  },

  methods: {
    onClickRight() {
      // console.log('登录')
    },

    //轮播触发事件
    onChange(index) {
      // console.log('当前 Swipe 索引：' + index);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.top {
  margin-bottom: 60px;
}
.van-nav-bar {
  overflow: hidden;
}
.van-nav-bar {
  background-color: rgb(67, 84, 72);
}
.van-nav-bar__text {
  color: #fff;
}
.van-nav-bar__title {
  width: 139px;
  height: 18px;
  margin-top: 14px;
  margin-left: 118px;
  background-image: url(https://m.hua.com/content/vue/login/static/img/m_hualogo.png);
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
}
.conpany-info > .conpany-info-item:before {
  content: "\e666";
  font-family: "iconfont" !important;
  font-size: 1rem;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #435448;
  margin-right: 2px;
  vertical-align: bottom;
}
.van-grid-item__content {
  padding: 0px;
}
.van-grid-item__text {
  color: #232628;
}
.select {
  .title {
    padding: 15px 10px;
    box-sizing: border-box;
    span {
      border-left: 2px solid black;
      padding-left: 10px;
      color: #232628;
      font-size: 14px;
    }
  }
  .song,
  .zhufu {
    padding: 0px 10px;
    .item {
      position: relative;
      .text {
        display: inline-block;
        width: 100%;
        font-size: 12px;
        text-align: center;
        position: absolute;
        top: 10px;
        left: 0px;
        z-index: 10;
      }
    }
  }
  .zhufu {
    margin-top: 15px;
  }
  .hot {
    padding: 0px 10px;

    .item1 {
      padding: 20px 20px;
      border: 1px solid #e9ecf0;
      height: 174px;
      background-image: url(https://img02.hua.com/m/home/img/m_home_ranklist.png?0718);
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    .item2 {
      padding: 20px 20px;
      border: 1px solid #e9ecf0;
      border-left: none;
      height: 174px;
      background-image: url(https://img02.hua.com/m/home/img/m_home_special.png?0718);
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    p {
      margin-left: 10px;
      line-height: 1.3;
    }
    .p1 {
      font-size: 14px;
      color: #232628;
    }
    .p2 {
      font-size: 0.78571429rem;
      color: #71797f;
    }
    .p3 {
      margin-left: 10px;
      display: inline-block;
      border-radius: 2rem;
      background: #ff734c;
      padding: 0.07142857rem 0.42857143rem;
      color: #fff;
      font-size: 0.71428571rem;
      margin-top: 45px;
    }
  }
  .xinpin {
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 0px 10px;
    .item {
      position: relative;
      // height: 112px;
      box-sizing: border-box;
      span {
        display: inline-block;
        width: 110px;
        height: 24px;
        line-height: 24px;
        position: absolute;
        bottom: -8px;
        left: 2px;
        font-size: 10px;
        background: rgba(35, 38, 40, 0.8);
        color: #fff;
        text-align: center;
      }
    }
  }
}
.list {
  padding-top: 5px;
  background: #e9ecf0;
  .main {
    margin-top: 5px;
    padding: 0px 10px;
    background-color: #fff;
    .title {
      background-color: #fff;
      text-align: center;
      font-size: 18px;
      color: #232628;
      padding: 15px 0px;
    }
  }
}
</style>

