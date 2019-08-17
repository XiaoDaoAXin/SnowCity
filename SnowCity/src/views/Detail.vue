<template>
  <div class="detail">
    <div class="header">
      <div
        class="left"
        @click="to_hotShopList"
      >
        <van-icon name="arrow-left" />
      </div>
      <div class="right">
        <van-icon name="weapp-nav" />
      </div>
    </div>

    <div
      class="main"
      style="background-color:#eee"
    >
      <!-- --------轮播------------- -->
      <van-image
        width="100%"
        height="288"
        :src="this.image"
      />

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
      <div @click="showControl">
        <van-row style="background-color:#fff;text-align:center ; border-bottom:1px solid #bbb;height:45px; line-height:45px;margin-top:10px;">
          <van-col
            style="color:gray"
            span="4"
          >已选</van-col>
          <van-col
            style="text-align:left"
            span="16"
          >请选择数量
          </van-col>
          <van-col span="4">
            <van-icon name="arrow" />
          </van-col>
        </van-row>
      </div>
      <van-row style="background-color:#fff;text-align:center ; height:45px; line-height:45px;">
        <van-col
          style="color:gray；text-ailgn:left"
          span="6"
        >图文详情</van-col>
        <van-col
          style="text-align:left"
          span="14"
        ></van-col>
        <van-col span="4">
          <van-icon name="arrow" />
        </van-col>
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
        <img
          src="http://www.mdjec.com/images/26/53/20/1ad29ebbed41e2a06425c6e2ec7e34bdb592035a.jpg"
          alt=""
        >
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
      <van-goods-action-icon
        icon="chat-o"
        text="客服"
      />
      <van-goods-action-icon
        info=""
        icon="cart-o"
        text="购物车"
        @click="onClickIcon"
      />
      <van-goods-action-icon
        icon="shop-o"
        text="店铺"
      />
      <van-goods-action-button
        @click="onClickButton"
        type="warning"
        text="加入购物车"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
      />
    </van-goods-action>

    <!-- -------选择数量弹出框------------ -->
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :hide-stock="sku.hide_stock"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />

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
      //选择数量弹出框
      selectedNum: 3,
      show: false,

      sku: {
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            v: [
              {
                id: "1215",
                name: "标准",
                imgUrl: ""
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 888, // skuId，下单时后端需要
            price: "", // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },

      goods: {
        title: "测试商品",
        // 默认商品 sku 缩略图
        picture: ""
      }
    };
  },

  methods: {
    //显示数量弹出框
    showControl() {
      this.show = !this.show;
    },
    //点击加入购物车按钮
    onClickIcon() {
      console.log(123);
      this.$router.push({
        name: 'car'
      });
    },
    //点击加入购物车按钮
    onClickButton() {
      this.show = !this.show;
    },

    //点击购买
    onBuyClicked() {
      console.log("Buy");
    },
    async onAddCartClicked() {
      console.log(this.id);
      await this.$axios
        .get("http://localhost:3000/car/addshop", {
          params: {
            id: Number(this.id)
          }
        })
        .then(data => {
          if (data.statusText == "OK") {
            this.$toast("加入成功");
          }
        });
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      Toast(item.name);
    },
    to_hotShopList() {
      this.$router.push({
        name: "hotshoplist"
      });
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
    this.sku.list[0].price = this.data.price * 100;
    this.goods.picture = this.data.img;
    // (this.sku.tree.v[0]).imgUrl = this.data.img;
    // console.log(this.image);
  }
};
</script>

<style lang="scss" scoped>
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

.van-popup {
  height: auto;
  .van-sku-body {
    // max-height: 100px !important;
    // .van-sku-group-container,
    // .van-cell-group {
    //   display: none;
    // }
  }
}
</style>


