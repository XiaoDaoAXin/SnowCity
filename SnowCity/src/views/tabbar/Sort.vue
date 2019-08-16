    <template>
    <div class="all_sort">
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
        <!-- --------全部分类------------- -->
        <van-row>
            <van-col span="6" style="height:580px; text-align: center;" class="left">
                <div>
                    <p class="father" v-on:click="Tab(index)" v-bind:class="{active:activeIdx===index}" v-for="(item,index) in  all_sort" :key="index">{{item.father}}</p>
                </div>
            </van-col>
            <van-col span="18">
                <div class="sort_item" v-for="(i,inde) in all_sort" :key="inde" v-show="activeIdx===inde">
                    <div class="title">{{(i.children[0]).title}}</div>
                    <van-row class="ul">
                        <van-col class="li" v-for="(t,ind) in (i.children[0]).sorts" :key="ind" span="8">{{t.name}}</van-col>
                    </van-row>
                </div>
            </van-col>
        </van-row>

    </div>
</template>

<script>
export default {
  data() {
    return {
      activeIdx: 0,
      active: "active",
      all_sort: [
        {
          father: "地方农特产",
          children: [
            {
              title: "粮油干货",
              sorts: [
                {
                  name: "粉条",
                  url: ""
                },
                {
                  name: "食用油",
                  url: ""
                },
                {
                  name: "面粉",
                  url: ""
                },
                {
                  name: "盐",
                  url: ""
                },
                {
                  name: "其他",
                  url: ""
                }
              ]
            },
            {
              title: "林海特产",
              sorts: [
                {
                  name: "威武山岭猪",
                  url: ""
                },
                {
                  name: "溜达鸡",
                  url: ""
                },
                {
                  name: "林海山猪",
                  url: ""
                },
                {
                  name: "其他",
                  url: ""
                }
              ]
            }
          ]
        },
        {
          father: "家电数码",
          children: [
            {
              title: "生活电器",
              sorts: [
                {
                  name: "电暖气",
                  url: ""
                },
                {
                  name: "电池",
                  url: ""
                },
                {
                  name: "饮水机",
                  url: ""
                },
                {
                  name: "电熨斗",
                  url: ""
                },
                {
                  name: "吸尘器",
                  url: ""
                }
              ]
            },
            {
              title: "大型家电",
              sorts: [
                {
                  name: "热水器",
                  url: ""
                },
                {
                  name: "烟机",
                  url: ""
                },
                {
                  name: "冰柜",
                  url: ""
                },
                {
                  name: "电视机",
                  url: ""
                },
                {
                  name: "洗衣机",
                  url: ""
                },
                {
                  name: "空调",
                  url: ""
                }
              ]
            }
          ]
        },
        {
          father: "同城服务",
          children: [
            {
              title: "食品",
              sorts: [
                {
                  name: "犟老头烤鹅",
                  url: ""
                },
                {
                  name: "糕点",
                  url: ""
                },
                {
                  name: "申通快递",
                  url: ""
                },
                {
                  name: "其他",
                  url: ""
                }
              ]
            }
          ]
        },
        {
          father: "建材家修",
          children: [
            {
              title: "家庭装修",
              sorts: [
                {
                  name: "布艺",
                  url: ""
                },
                {
                  name: "全屋定制",
                  url: ""
                },
                {
                  name: "门",
                  url: ""
                },
                {
                  name: "装饰装修",
                  url: ""
                },
                {
                  name: "油漆涂料",
                  url: ""
                },
                {
                  name: "窗帘",
                  url: ""
                },
                {
                  name: "墙纸",
                  url: ""
                },
                {
                  name: "日用家",
                  url: ""
                },
                {
                  name: "橱柜衣柜",
                  url: ""
                },
                {
                  name: "照明",
                  url: ""
                },
                {
                  name: "吊顶",
                  url: ""
                }
              ]
            }
          ]
        },
        {
          father: "酒水饮料",
          children: [
            {
              title: "酒水饮料",
              sorts: [
                {
                  name: "弱碱水",
                  url: ""
                },
                {
                  name: "果汁",
                  url: ""
                },
                {
                  name: "西梅酒",
                  url: ""
                },
                {
                  name: "红枣酒",
                  url: ""
                }
              ]
            }
          ]
        }
      ]
    };
  },

  methods: {
    Tab(idx) {
      this.activeIdx = idx;
    }
  }
};
</script>

<style lang="scss">
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
.all_sort {
    margin-top: 10px;
    .left{
        background-color:  #e4e5e6;
    }
  .father {
    height: 49px;
    line-height: 49px;
    font-size: 15px;
    background-color: #e4e5e6;
    border-bottom: 1px solid #c8c7cc;
  }
  .active {
    background-color: #ffffff;
    color: red;
    border: none;
  }

  .sort_item {
    padding: 8px 0px;
    .title {
      height: 23px;
      line-height: 23px;
      font-size: 14px;
      padding-left: 10px;
    }
    .ul {
      overflow: hidden;
      > .li {
        text-align: center;
        padding: 6px 0px;
        // margin-left: 6px;
        color: #666;
        font-size: 14px;
        float: left;
      }
    }
  }
}
</style>
