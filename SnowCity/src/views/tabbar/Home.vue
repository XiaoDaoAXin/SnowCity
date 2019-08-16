<template>
    <div class="scroll_top">
        <!-- --------头部------------- -->
        <div class="header">
            <van-row>
                <van-col span="4">
                    <van-image style="width:31px; height:31px;" class="image" src="http://www.mdjec.com/images/56/9e/70/4de9d201070d93c8f36e3d087a55171628b873d8.png" />
                </van-col>
                <van-col span="16">
                    <input type="text" placeholder="寻找感兴趣的商品">
                </van-col>
                <van-col span="4">
                    <span class="login">登录</span>
                </van-col>
            </van-row>
        </div>
        <!-- --------轮播------------- -->
        <van-swipe :autoplay="3000" @change="onChange">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <van-image style="height:165px" :src="image" />
            </van-swipe-item>
        </van-swipe>

        <!-- -------宫格导航------------- -->
        <van-grid :column-num="4" style="margin-top:10px">
            <van-grid-item :to="item.router" v-for="(item,index) in gongge" :key="index" :icon="item.image" :text="item.text" />
        </van-grid>

        <!-- ------main----------- -->
        <div class="main">
            <van-image style="height:165px" src="http://www.mdjec.com/images/dd/47/b3/0a37b8fa201133d2ce868dadd4cbb8d8fb58fd35.jpg" />

            <div class="nongchan main_item">
                <div class="title">
                    <span>农产品专区</span>
                    <span>查看更多></span>
                </div>
                <van-row>
                    <van-col span="16">
                        <div class="top">
                            <van-image style="height:71px" src="http://www.mdjec.com/images/88/04/68/bf8c4d74bae335e6ac46d8d9a2d69169a535c361.jpg" />
                        </div>
                        <van-row>
                            <van-col span="12">
                                <van-image style="height:152px" src="http://www.mdjec.com/images/96/8b/98/9d7a4d120be29eceb67f29c4596fc82cf4694767.jpg" />
                            </van-col>
                            <van-col span="12">
                                <van-image style="height:152px" src="http://www.mdjec.com/images/4b/8d/ee/74fd2292f15af35bc6e817f0cf7ec3f21879676e.jpg" />
                            </van-col>
                        </van-row>
                    </van-col>
                    <van-col span="8">
                        <van-image style="height:223px" src="http://www.mdjec.com/images/39/e0/f4/f2ed128ae0f7735b122d4f5865cdacde2a0ddfee.jpg" />
                    </van-col>
                </van-row>
            </div>
            <div class="jinxuan main_item">
                <div class="title">
                    <span>店铺精选</span>
                    <span>查看更多></span>
                </div>
                <van-row>
                    <van-col span="16">
                        <div class="top">
                            <van-image style="height:71px" src="http://www.mdjec.com/images/90/c3/e2/0cccbe5c2cb65fe9b974975c404b8cf2c3e942b5.jpg" />
                        </div>
                        <van-row>
                            <van-col span="12">
                                <van-image style="height:152px" src="http://www.mdjec.com/images/27/70/c4/3a5a926011f77eeb8e89b1cc1b46727fe39bcfe0.jpg" />
                            </van-col>
                            <van-col span="12">
                                <van-image style="height:152px" src="http://www.mdjec.com/images/94/3a/f6/9d0fc9b4ff0d62de2dab7475c52e547ac491f8f4.jpg" />
                            </van-col>
                        </van-row>
                    </van-col>
                    <van-col span="8">
                        <van-image style="height:223px" src="http://www.mdjec.com/images/18/69/48/7675a722785a728bad25a7b6654eff19f9af4259.jpg" />
                    </van-col>
                </van-row>
            </div>
            <div class="xianshi main_item">
                <div class="title">
                    <span>限时活动</span>
                    <span>查看更多></span>
                </div>
                <van-row>
                    <van-col span="12">
                        <van-image style="height:234px" src="http://www.mdjec.com/images/d6/da/af/3ceac47efaf103b79e5db26d4e6c7495679a5a20.jpg" />
                    </van-col>
                    <van-col span="12">
                        <van-image style="height:234px" src="http://www.mdjec.com/images/69/39/22/31045007beb54b6fa11ca3880c590588ed591aba.jpg" />
                    </van-col>
                </van-row>
            </div>
            <div class="hotShop main_item">
                <div class="title">
                    <span>热卖商品</span>
                    <span>查看更多></span>
                </div>
                <van-row>
                    <van-col span="8">
                        <van-image style="height:223px" src="http://www.mdjec.com/images/3a/3e/fd/254fc5c20e59ba0058296ead46b696aecc6a500b.jpg" />
                    </van-col>
                    <van-col span="16">
                        <div class="top">
                            <van-image style="height:71px" src="http://www.mdjec.com/images/9d/2f/f9/97ec1aae8ade5a71ecf7614c76c8077768b564cd.jpg" />
                        </div>
                        <van-row>
                            <van-col span="12">
                                <van-image style="height:152px" src="http://www.mdjec.com/images/db/1d/58/c47dca96c9be2635f956cf249b61e4bb8c8b20dd.jpg" />
                            </van-col>
                            <van-col span="12">
                                <van-image style="height:152px" src="http://www.mdjec.com/images/77/66/82/4148b1abab717379a694b5d6e39efe74528caf2f.jpg" />
                            </van-col>
                        </van-row>
                    </van-col>
                </van-row>
            </div>
            <div class="hotSigle main_item">
                <div class="title">
                    <span>热卖单品</span>
                    <span>查看更多></span>
                </div>
                <van-row>
                    <van-col span="8">
                        <van-image style="height:223px" src="http://www.mdjec.com/images/48/35/d0/b0a9fcdfc5807a11c57db3beca2a7e9e65af00a4.jpg" />
                    </van-col>
                    <van-col span="16">
                        <div class="top">
                            <van-image style="height:71px" src="http://www.mdjec.com/images/bc/86/5a/86039f7e8ffe0912f4194a0b3840cabc56d1436f.jpg" />
                        </div>
                        <van-row>
                            <van-col span="12">
                                <van-image style="height:152px" src="http://www.mdjec.com/images/a7/ef/50/381ec98de7f17b4445970233815e1e254d83bc53.jpg" />
                            </van-col>
                            <van-col span="12">
                                <van-image style="height:152px" src="http://www.mdjec.com/images/20/6a/e6/245dc31a04be661990fc7fbdc53ced7062fe0962.jpg" />
                            </van-col>
                        </van-row>
                    </van-col>
                </van-row>
            </div>
            <div class="tongcheng main_item">
                <div class="title">
                    <span>同城服务</span>
                    <span>查看更多></span>
                </div>
                <van-row>
                    <van-col span="16">
                        <div class="top">
                            <van-image style="height:71px" src="http://www.mdjec.com/images/87/09/97/e00b3274b375c1e0c4a12a43a7977cf6d2d60fef.jpg" />
                        </div>
                        <van-row>
                            <van-col span="12">
                                <van-image style="height:152px" src="http://www.mdjec.com/images/09/f2/be/27dc3dba14394c481467f4c793f8ab27810fc9ce.jpg" />
                            </van-col>
                            <van-col span="12">
                                <van-image style="height:152px" src="http://www.mdjec.com/images/90/3e/74/7c4270a191368dcf41017ba49b5108746b3ad231.jpg" />
                            </van-col>
                        </van-row>
                    </van-col>
                    <van-col span="8">
                        <van-image style="height:223px" src="http://www.mdjec.com/images/e4/9e/89/39e81325c13f0425eb1cab27f6fb959534725086.jpg" />
                    </van-col>
                </van-row>
            </div>

            <div class="sort">
                <div class="title">
                    <span>商品分类</span>
                    <span>查看更多></span>
                </div>
                <div class="content">
                    <van-row gutter="15" class="sort_item" v-for="(item,index) in sort" :key="index">
                        <van-col span="12">
                            <span>{{item.one.text}}</span>
                            <img :src="item.one.image" alt="">
                        </van-col>
                        <van-col span="12">
                            <span>{{item.two.text}}</span>
                            <img :src="item.two.image" alt="">
                        </van-col>
                    </van-row>
                </div>

            </div>
        </div>

        <!-- ------页脚---------- -->
        <div class="footer">
            &nbsp;Copyright&nbsp;©&nbsp;2017 -2019 雪城汇Mdjec.com 版权所有&nbsp;
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "http://www.mdjec.com/images/ae/35/fe/0ab2e0c1f1d41315f16996b71cbec6e6c72c3632.jpg",
        "http://www.mdjec.com/images/e1/a1/0b/d994ef79a63acbec17b52e1ed4c1f911a73df837.jpg",
        "http://www.mdjec.com/images/25/81/7f/4ab4ca7fa964d695ab3bb4ff85f2f7611cb4f4f5.jpg",
        "http://www.mdjec.com/images/b4/a7/61/ba7b73fe9fe329f221b9381b2e4df7dad9eb2203.jpg",
        "http://www.mdjec.com/images/b4/a7/61/ba7b73fe9fe329f221b9381b2e4df7dad9eb2203.jpg",
        "http://www.mdjec.com/images/ad/74/9f/412ce1d2500b52206d925bf889fbb8ef7492858d.jpg",
        "http://www.mdjec.com/images/24/1f/64/d9e7aef19adb743bda16a337da48847846376827.jpg",
        "http://www.mdjec.com/images/0d/2b/f6/20d7398c9bc3b7b0454f7855ad21334a2bd777a4.jpg"
      ],
      gongge: [
        {
          image:
            "http://www.mdjec.com/images/63/89/7d/1fa95e79ef9de68e429a96d84ef8123718b5e644.jpg",
          text: "热卖商品",
          router: "/HotShopList"
        },
        {
          image:
            "http://www.mdjec.com/images/52/6d/94/066a38371dd3802618b642e3725a0f16efded9eb.jpg",
          text: "推荐分类",
          router: "sort"
        },
        {
          image:
            "http://www.mdjec.com/images/bb/bb/94/a417a74e727c0e43ed7e7490e4d32b3cffc91893.jpg",
          text: "会员中心",
          router: "user"
        },
        {
          image:
            "http://www.mdjec.com/images/ee/62/c9/caa93c312d5294b88283c86caa5768775c2a9298.jpg",
          text: "购物车",
          router: "shopCar"
        },
        {
          image:
            "http://www.mdjec.com/images/ac/86/c9/0f9649ebb312610cb25f2fd361fdfdef5dd1dd9b.jpg",
          text: "家电数码",
          router: ""
        },
        {
          image:
            "http://www.mdjec.com/images/12/2d/71/21d756f490631e77d2c210af95183ac1625c70a8.jpg",
          text: "进口食品",
          router: ""
        },
        {
          image:
            "http://www.mdjec.com/images/06/3b/9b/65998f3807079739cd53ef301377295fac0f38be.jpg",
          text: "特色旅游",
          router: ""
        },
        {
          image:
            "http://www.mdjec.com/images/26/53/20/1ad29ebbed41e2a06425c6e2ec7e34bdb592035a.jpg",
          text: "同城服务",
          router: ""
        }
      ],
      sort: [
        {
          one: {
            image:
              "http://www.mdjec.com/images/05/66/f1/184f3a880b644f999e28422a93c4343a804959f0.jpg",
            text: "各种米类",
            router: ""
          },
          two: {
            image:
              "http://www.mdjec.com/images/48/b8/c1/a5e1741bf9f9576cd2a4fe11d071013e0e862ba8.jpg",
            text: "杂粮豆类",
            router: ""
          }
        },
        {
          one: {
            image:
              "http://www.mdjec.com/images/e4/49/ee/2ac3ffd61ee5ce7b2ba6c3302aee66709d8cec83.jpg",
            text: "蘑菇菌类",
            router: ""
          },
          two: {
            image:
              "http://www.mdjec.com/images/d1/26/17/c0ab9ce73164047d0f7b2487ea2ad382a1a64ebb.jpg",
            text: "休闲食品",
            router: ""
          }
        },
        {
          one: {
            image:
              "http://www.mdjec.com/images/05/5d/62/51b0050909c4011a5111efdd1d55708860a9f5a2.jpg",
            text: "酒水饮料",
            router: ""
          },
          two: {
            image:
              "http://www.mdjec.com/images/16/e9/a8/8e09f9c23ac760fcc8a5ee6d1c6bd45432bef1d9.jpg",
            text: "美容洗护",
            router: ""
          }
        },

        {
          one: {
            image:
              "http://www.mdjec.com/images/12/33/26/6155fa22195da9ac563cffe4b34ae09bee57666f.jpg",
            text: "数码家电",
            router: ""
          },
          two: {
            image:
              "http://www.mdjec.com/images/7d/b2/88/d9c5fe5273b5c9c66e50d1301ffc13abc3c15d14.png",
            text: "日用洁具",
            router: ""
          }
        }
      ]
    };
  },

  methods: {
       //轮播触发事件
    onChange(index) {
      // console.log('当前 Swipe 索引：' + index);
    }
  }
};
</script>

