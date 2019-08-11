<template>
    <div class="detail">
        <van-sticky class="fixed_top">
            <!-- --------头部------------- -->
            <div class="header">
                <van-row>
                    <van-col span="4" style="text-align:left;color:red">
                        <router-link to="/home">
                            <van-icon style="margin:5px 0px 0px 5px;" class="returnHome" size="24px" name="arrow-left" />
                        </router-link>
                    </van-col>
                    <van-col span="16">
                        <input class="search" type="text" placeholder="寻找感兴趣的商品" v-model="search" @change="change">
                    </van-col>
                    <van-col span="4">
                        <span class="login" @click="shaiXuan">筛选</span>
                    </van-col>
                </van-row>
            </div>
            <!-- -------排序按钮------------- -->
            <div class="contorl">
                <van-tabs v-model="active" line-width="0px" title-active-color="red" @click="onClick">
                    <van-tab style="font-size: 20px;" v-for="(item,index) in controlBtns" :key="index" :title="item.text"></van-tab>
                </van-tabs>
            </div>
        </van-sticky>

        <div class="list">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getShopList">
                <van-card @click="go_to_detail(item)"  v-for="(item,index) in shopList" :key="index" :num="`已有${item.num}人购买`" :price="item.price" :title="item.dec" :thumb="item.img" />
            </van-list>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      //商品索引
      id: null,
      detail: "detail",
      //搜索输入
      search: "",
      activeIdx: 0,
      active: "active",
      controlBtns: [
        {
          text: "综合",
          ability: ""
        },
        {
          text: "销量",
          ability: ""
        },
        {
          text: "价格",
          ability: ""
        },
        {
          text: "最新",
          ability: ""
        }
        // {
        //   text: `宫格`,
        //   ability: ""
        // }
      ],
      //列表
      list: [],
      loading: false,
      finished: false,
      shopList: [],
      shopList1: [
        {
          img:
            "http://www.mdjec.com/images/08/a7/75/e8af1774acd4c0f31b03e0ddc9bf9ae2b30be191.jpg_m.jpg",
          dec: "东北黑木耳干货小碗耳无根肉厚土特产原产包装",
          price: "128.00",
          num: 0,
          url: ""
        },
        {
          img:
            "http://www.mdjec.com/images/89/32/4b/0d6ac3d711500b4ae9a921f7eca0e96feb2461c7.jpg_m.jpg",
          dec: "艾米东北特产  兴禄商贸  中等  木耳  500g装",
          price: "120.00",
          num: 0,
          url: ""
        },
        {
          img:
            "http://www.mdjec.com/images/72/f0/c1/b7a7b803e93a269a583551b48ef33d3da77a7fcf.jpg_m.jpg",
          dec: "艾米东北特产  兴禄商贸  优等  木耳  500g装        ",
          price: "150.00",
          num: 0,
          url: ""
        },
        {
          img:
            "http://www.mdjec.com/images/00/61/dc/527a9f2370c1e38c27fc2802cbbea188a8a1aefd.jpg_m.jpg",
          dec: "森都 山城 秋木耳 200g ",
          price: "32.00",
          num: 15,
          url: ""
        },
        {
          img:
            "http://www.mdjec.com/images/85/fc/98/cd7c0f8235b90fa491d946a8089c3dcb93c6c171.jpg_m.jpg",
          dec: "光明食用菌专业合作社 海麟玉品 木耳 塑料袋 250g装",
          price: "35.00",
          num: 18,
          url: ""
        },
        {
          img:
            "http://www.mdjec.com/images/70/34/72/e1a70354902a27fa398da3c44bd71ceca00cbcfd.jpg_m.jpg",
          dec: "光明食用菌专业合作社 海麟玉品 木耳 塑料袋 250g装",
          price: "72.00",
          num: 18,
          url: ""
        },
        {
          img:
            "http://www.mdjec.com/images/f1/30/08/bf17b3491d00c1af25cfe7a839d41ddb54a1c91e.jpg_m.jpg",
          dec: "长白云上 木耳脆片 多种口味 ",
          price: "44.00",
          num: 25,
          url: ""
        },
        {
          img:
            "http://www.mdjec.com/images/d5/6e/45/7af6dae28d757d70df137567157502775dd07632.jpg_m.jpg",
          dec: "长白云上 木耳脆片巧克力口味  ",
          price: "44.00",
          num: 25,
          url: ""
        },
        {
          img:
            "http://www.mdjec.com/images/2e/5e/85/8e6003c52546e5556d36cd74d0494f3f7138ce03.jpg_m.jpg",
          dec: "宝源参茸  黑木耳  500g",
          price: "60.00",
          num: 33,
          url: ""
        },
        {
          img:
            "http://www.mdjec.com/images/c1/8f/18/76f137971459164e30ae405eb0fd83d718841b3d.jpg_m.jpg",
          dec: "宝源参茸  黑木耳  500g",
          price: "50.00",
          num: 36,
          url: ""
        },
        {
          img:
            "http://www.mdjec.com/images/dd/eb/25/dd146dc92167e4d22d93de023139580d03eace47.jpg_m.jpg",
          dec: "宝源参茸 东北山珍 秋木耳 一盒 200g        ",
          price: "30.00",
          num: 36,
          url: ""
        },
        {
          img:
            "http://www.mdjec.com/images/f6/b3/81/f7c6a8f90e35c4c477f25db92189b9b433b60780.jpg_m.jpg",
          dec: "海鑫松茸 木段木耳",
          price: "145.00",
          num: 30,
          url: ""
        },
        {
          img:
            "http://www.mdjec.com/images/68/0a/1b/e53f920ad94ae1581ec5114bb9aed876a259e2ea.jpg_m.jpg",
          dec: "海鑫松茸 秋木耳 普通 ",
          price: "45.00",
          num: 21,
          url: ""
        },
        {
          img:
            "http://www.mdjec.com/images/87/d5/ef/b832112b910348d04954dc5964c0c7f74a7b8b26.gif_m.gif",
          dec: "海鑫松茸 东北秋木耳 A级",
          price: "80.00",
          num: 21,
          url: ""
        },
        {
          img:
            "http://www.mdjec.com/images/55/b2/fe/14af7dfe6f76c2db27ae4787e75340842e789d0d.jpg_m.jpg",
          dec: "北味 手选山木耳（礼盒装）",
          price: "198.00",
          num: 21,
          url: ""
        },
        {
          img:
            "http://www.mdjec.com/images/43/f5/83/1bedfe1e0200005012d0cc888562c8b24e4329cd.jpg_m.jpg",
          dec: "北味 即食黑木耳 礼盒装  零食 即食木耳",
          price: "188.00",
          num: 21,
          url: ""
        }
      ]
    };
  },

  methods: {
    Tab(idx) {
      this.activeIdx = idx;
      console.log(123);
    },
    //获取商品数据
    async getShopList() {
      //   this.$toast({
      //     mask: true,
      //     message: "加载中..."
      //   });
      // 获取商店信息
      let poilist = await this.$axios.get(
        "http://localhost:3000/list/hotShopList"
      );
      this.shopList = [...this.shopList, ...poilist.data];
      // 加载状态结束
      this.loading = false;
      //   this.$toast.clear();
      // 数据全部加载完成
      if (this.shopList.length >= 15) {
        this.finished = true;
      }
    },

    //筛选商品
    change() {
      // console.log(this.search);
    },
    async shaiXuan() {
      let sx_list = await this.$axios.get(
        "http://localhost:3000/list/shaixuan",
        {
          params: {
            shaixuan: this.search
          }
        }
      );
      this.shopList = sx_list.data;
    },

    //点击排序 有问题
    async onClick(name, title) {
      this.$toast(title);
      if (title == "销量") {
        let xlList = await this.$axios.get(
          "http://localhost:3000/list/xiaoliang"
        );
        console.log(xlList.data);
      }
    },
    //跳转到详情页
    go_to_detail(item) {
        //拿到商品索引
        this.id = item.id
        // console.log(this.id)
      // 编程式导航
      this.$router.push({
        name: this.detail,
        params:{
            id:this.id
        }
      });
    },

    
  },

  async created() {
    //初始化调用一次商品列表加载
    this.getShopList();
    this.$toast.clear();
  }
};
</script>

<style lang="scss">
.fixed_top {
  height: 92px;
  background-color: #fff;
}
.header {
  background-color: #fff;
  .search {
    color: gray;
  }
}
.contorl {
  background-color: #fff;
  .item {
    line-height: 44px;
    height: 44px;
  }
  .active {
    color: red;
  }
  .van-ellipsis {
    font-size: 16px;
  }
}
.list {
  .van-card {
    padding: 0px;
  }
  .van-card__thumb {
    margin-left: 5px;
  }
  .van-card__price {
    font-size: 15px;
  }
  .van-card__content {
    height: 108px;
    margin-left: 20px;
    margin-right: 5px;
  }
  .van-image__img {
    display: inline-block;
    width: 108px !important ;
    height: 108px !important ;
  }
  .van-card__title {
    height: 50px;
    width: 80%;
    line-height: 1.3;
    font-size: 15px;
    max-height: 56px;
  }
  .van-card__num {
    margin-right: 10px;
  }
}
</style>
