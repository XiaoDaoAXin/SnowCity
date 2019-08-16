<template>
    <div class="detail">
        <div class="header">
            <div class="left" @click="to_hotShopList">
                <van-icon name="arrow-left" />
            </div>
            <div class="right">
                <van-icon name="weapp-nav" />
            </div>
        </div>

        <div class="main" style="background-color:#eee">
            <!-- --------轮播------------- -->
            <van-image width="100%" height="288" :src="this.image" />

            <!-- -------弹出框------------ -->
            <!-- <van-action-sheet v-model="show" :actions="actions" @select="onSelect" /> -->

            <!-- --------信息------------- -->
            <div class="xinxi">
                <div class="deci">{{this.data.dec}}</div>
                <div class="bottom">
                    <span class="price">￥{{this.data.price}}</span>
                    <span class="num">已有{{this.data.num}}人购买</span>
                </div>
            </div>
            <!-- --------选择数量------------- -->
            <van-row style="background-color:#fff;text-align:center ; border-bottom:1px solid #bbb;height:45px; line-height:45px;margin-top:10px;">
                <van-col style="color:gray" span="4">已选</van-col>
                <van-col style="text-align:left" span="16">请选择数量
                </van-col>
                <van-col span="4">
                    <van-icon name="arrow" /></van-col>
            </van-row>
            <van-row style="background-color:#fff;text-align:center ; height:45px; line-height:45px;">
                <van-col style="color:gray；text-ailgn:left" span="6">图文详情</van-col>
                <van-col style="text-align:left" span="14"></van-col>
                <van-col span="4">
                    <van-icon name="arrow" /></van-col>
            </van-row>

            <div class="dicc">
                <div class="left">
                    <p>评价晒单</p>
                    <p>好评0人</p>
                </div>
                <div class="right">
                    <van-icon name="arrow" />
                </div>
            </div>

            <div class="img">
                <img src="http://www.mdjec.com/images/26/53/20/1ad29ebbed41e2a06425c6e2ec7e34bdb592035a.jpg" alt="">
                <span>雪城汇活动店铺多品类</span>
            </div>

            <div class="shoucang">
                <div class="left">
                    <van-icon name="star" /> 收藏店铺
                </div>
                <div class="right">
                    <van-icon name="send-gift" /> 进入店铺
                </div>
            </div>

          

        </div>

        <!-- -------加入购物车------------ -->
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" />
            <van-goods-action-icon info="" icon="cart-o" text="购物车" />
            <van-goods-action-icon icon="shop-o" text="店铺" />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>

    </div>
</template>

<script>
export default {
  data() {
    return {
      //拿到列表页传过来的索引
      id: this.$route.params.id,
      data: null,
      image: "",
    };
  },

  methods: {
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      Toast(item.name);
    },
    to_hotShopList(){
      this.$router.push({
        name:'hotshoplist'
      })
    }
  },

  async created() {
    this.id = this.$route.params.id;
    //初始化页面
    let data = await this.$axios.get("http://localhost:3000/detail/hot", {
      params: {
        id: this.id
      }
    });
    // console.log(data);
    this.data = data.data[0];
    this.image = this.data.img;
    // console.log(this.image);
  }
};
</script>

<style lang="scss" >
.header {
  width: 90%;
  height: 43px;
  //   background-color: #bbffaa;
  background-color: none !important;
  margin: auto;
  margin-top: 20px;
  margin-left: 18px;
  position: fixed;
  overflow: hidden;
  padding: 0px;
  z-index: 10;
  border: none;
  .left {
    float: left;
    width: 40px;
    height: 40px;
    background-color: black;
    border-radius: 50%;
    opacity: 0.5;
    color: #cccccc;

    .van-icon {
      font-size: 25px;
      margin-top: 7px;
    }
  }
  .right {
    width: 40px;
    height: 40px;
    background-color: black;
    border-radius: 50%;
    opacity: 0.5;
    color: #cccccc;
    float: right;
    .van-icon {
      font-size: 25px;
      margin-top: 7px;
    }
  }
}
.xinxi {
  background-color: #fff;
  padding: 20px 10px 20px 10px;
  .deci {
    width: 80%;
    // height: 45px;
    font-size: 17px;
    line-height: 1.5;
    color: #333;
  }
  .bottom {
    height: 28px;
    .price {
      float: left;
      font-size: 20px;
      color: red;
      line-height: 28px;
    }
    .num {
      float: right;
      line-height: 28px;
      color: gray;
    }
  }
}
.dicc {
  margin-top: 10px;
  padding: 10px 10px;
  overflow: hidden;
  background-color: #fff;
  .left {
    float: left;
    p {
      &:nth-child(1) {
        color: red;
        font-size: 16px;
        line-height: 1.4;
      }
      &:nth-child(2) {
        font-size: 14px;
        line-height: 1.4;
      }
    }
  }
  .right {
    float: right;
    line-height: 40px;
    margin-right: 12px;
  }
}
.img {
  background-color: #fff;
  padding: 10px 10px;

  > img {
    display: inline-block;
    width: 60px;
    height: 60px;
    vertical-align: middle;
  }
  > span {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
  }
}
.main {
  margin-bottom: 50px;
  margin-top: 0px;
  padding-top: 0px;
}
.shoucang {
  padding: 10px;
  overflow: hidden;
  background-color: #fff;
  font-size: 16px;
  .left {
    width: 47%;
    float: left;
    height: 35px;
    line-height: 35px;
    border: 1px solid #ea2329;
    color: #ea2329;
    border-radius: 5px;
    text-align: center;
  }
  .right {
    width: 47%;
    float: left;
    height: 35px;
    line-height: 35px;
    border: 1px solid #ea2329;
    color: #ea2329;
    border-radius: 5px;
    text-align: center;
    margin-left: 10px;
  }
}
</style>


