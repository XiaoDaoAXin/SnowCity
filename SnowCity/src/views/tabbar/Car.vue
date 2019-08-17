<template>
  <div class="car">
    <div
      v-show="!CarIfNull"
      class="nullCar"
    >
      <div class="header">
        购物车
      </div>

      <div class="main">
        <p>
          <van-icon name="shopping-cart" />
        </p>
        <p>亲，您的购物车是空的</p>
        <p>
          <van-button
            @click="toshoping"
            style="width:90px;height:31px;line-height:31px"
            type="warning"
          >去购物</van-button>
        </p>
      </div>
    </div>

    <div
      v-show="CarIfNull"
      class="hascar"
    >
      <div class="header">
        购物车
      </div>
      <ul class="goods_list">
        <li>
          <van-checkbox-group v-model="result">
            <div
              class="thumbnail"
              v-for="(item,index) in carData"
              :key="index"
            >
              <div class="shopex-checkbox bbc-checkbox shop-item-checkbox">
                <label><input
                    type="hidden"
                    name="cart_id[2920]"
                    value="0"
                  ></label>

                <van-checkbox
                  :key="index"
                  :name="item"
                  checked-color="red"
                >
                </van-checkbox>
              </div>
              <div class="thumb-img">
                <a href=""><img
                    :src="item.img"
                    alt=""
                  ></a>
              </div>
              <div class="caption">
                <div class="order-goods-info">
                  <div class="order-goods-title">
                    <a href="">{{item.dec}}</a>
                  </div>
                  <div class="order-goods-sku"></div>
                  <div class="order-goods-price"><mark style="backgroundColor:none;text-align:center;">
                      ￥{{item.price}} </mark></div>
                  <div class="order-goods-num-control">
                    <div
                      style="margin-right: 20px; margin-top:10px;"
                      class="shopex-numbox bbc-numbox"
                      data-numbox-min="1"
                      data-numbox-max="1000"
                    >
                      <button
                        style="width:28px;backgroundcolor:none;text-align:center;"
                        class="shopex-btn shopex-btn-numbox-minus"
                        type="button"
                      >-</button>
                      <input
                        id="test"
                        name="cart_num[2920]"
                        class="action-modify shopex-input-numbox"
                        type="number"
                        value="1"
                        style="width:32px;text-align:center"
                      >
                      <button
                        style="width:28px;backgroundcolor:none;"
                        class="shopex-btn shopex-btn-numbox-plus"
                        type="button"
                      >+</button>
                    </div>
                    <div
                      class="bbc-numbox shoex-numbox-txt"
                      style="display:none;"
                    >x<span>3</span></div>
                  </div>
                </div>
              </div>
            </div>
          </van-checkbox-group>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      //判断是否为空
      CarIfNull: false,
      //购物车数据
      carData: [],
      checked: true,
      result: ["a", "b"]
    };
  },
  methods: {
    toshoping() {
      this.$router.push({
        name: "home",
        params: {}
      });
    }
  },

  async created() {
    let data = await this.$axios.get("http://localhost:3000/car/shops");

    if (data.data.length > 0) {
      this.CarIfNull = true;
    }
    // console.log(data.data);
    this.carData = data.data;
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
}
a {
  color: #666;
  display: inline-block;
}
img {
  display: inline-block;
}
.header {
  padding: 0px 12px;
  height: 47px;
  text-align: center;
  background-color: #fff;
  line-height: 47px;
  border: none;
  font-size: 20px;
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 580px;
  margin: 0px;
  padding: 0px;

  p {
    &:nth-child(1) {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      background-color: #dadada;
      font-size: 50px;
      line-height: 102px;
      text-align: center;
      color: #fff;
      margin-bottom: 15px;
    }
    &:nth-child(2) {
      font-size: 14px;
      color: #999;
      margin-bottom: 15px;
    }
  }
}
.shopex-btn {
  background-color: #f9f9f9;
  border: 1px solid #cccccc;
}
.shopex-input-numbox {
  border: 1px solid #cccccc;
}
.hascar {
  .goods_list {
    > li {
      position: relative;

      padding-bottom: 0.2rem;
      background: #fff;
      padding: 1rem 0;
      border-top: 1px dashed #e4e5e6;
      border-bottom: 1px dashed #e4e5e6;
      .shopex-checkbox {
        margin-left: 10px;
      }
      .thumbnail {
        // padding: 0px 10px;
        margin-bottom: 15px;
        display: -webkit-box;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        width: 100%;
        .shopex-checkbox {
          // position: relative;
          input[type="checkbox"] {
            width: 1.6rem;
            height: 1.6rem;
            -webkit-appearance: none;
            outline: 0 !important;
            width: 28px;
            border: 0;
            display: inline-block;
            margin-top: 38px;
            // margin-left: 5px;
            line-height: 1;
            height: 1.8rem;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            background-color: transparent;
            z-index: 20;
            border: 1px solid gray;
            border-radius: 50%;
          }
        }
        .thumb-img {
          display: -webkit-box;
          position: relative;
          -webkit-box-align: center;
          -webkit-box-pack: center;
          width: 30%;
          background: #f8f8f8;
          border-radius: 0;
          margin-right: 0.75rem;
          img {
            display: block;
            height: 100%;
            width: 100%;
          }
          > a {
            color: #666;
            // position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
          }
        }
        .caption {
          -webkit-box-flex: 1;
          display: -webkit-box;
          .order-goods-info {
            -webkit-box-flex: 1;
            .order-goods-title {
              font-size: 0.85714rem;
              line-height: 1.4;
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .order-goods-sku {
              font-size: 0.7rem;
              color: #666;
              padding-top: 0.2rem;
            }
            .cart-list .order-goods-price {
              font-size: 0.9rem !important;
            }
          }
        }
      }
      .order-goods-num-control {
        // position: absolute;

        bottom: 1rem;
      }
      mark {
        background: transparent;
        color: #ea2329;
      }
    }
  }
}
</style>


