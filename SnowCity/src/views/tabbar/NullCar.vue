<template>
    <div class="nullCar">
        <div class="header">
            购物车
        </div>

        <div class="main">
            <p>
                <van-icon name="shopping-cart" />
            </p>
            <p>亲，您的购物车是空的</p>
            <p>
                <van-button @click="toshoping" style="width:90px;height:31px;line-height:31px" type="warning">去购物</van-button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toshoping() {
      this.$router.push({
        name: "home",
        params: {}
      });
    }
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
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
</style>


