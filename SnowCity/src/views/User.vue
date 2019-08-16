<template>
    <div class="user">
        <div class="user-header">
            <van-icon class="user-setting bbc-icon bbc-icon-setting" name="setting" />
            <a href="http://www.mdjec.com/wap/member-setting.html"></a>
            <div class="box-display user-logined">
                <a class="user-name" href="http://www.mdjec.com/wap/member-detail.html">您好，{{userName}}
                    <i class="bbc-icon bbc-icon-forward"></i>
                </a><br>
                <span class="member-level">
                    <i class="bbc-icon bbc-icon-member-level"></i> 普通会员</span>
            </div>
        </div>
        <section class="section-white">
            <div class="section-title user-title">
                <div class="title-txt">
                    <van-icon class="user-icon bbc-icon bbc-icon-list user-order" name="todo-list" /> 我的订单
                </div>
                <div class="more-link">
                    <a href="http://www.mdjec.com/wap/trade-list.html">查看全部订单</a>
                    <i class="bbc-icon bbc-icon-forward"></i>
                </div>
            </div>
            <div class="box-display content-vertical-padded user-orders fontS">
                <a class="box-item-flex1 content-center" href="http://www.mdjec.com/wap/trade-list.html?s=1">
                    <van-icon class="bbc-icon bbc-icon-package" name="paid" /> <br>待付款</a>
                <a class="box-item-flex1 content-center" href="http://www.mdjec.com/wap/trade-list.html?s=2">
                    <van-icon class="bbc-icon bbc-icon-package" name="credit-pay" /><br>待发货</a>
                <a class="box-item-flex1 content-center" href="http://www.mdjec.com/wap/trade-list.html?s=3">
                    <van-icon class="bbc-icon bbc-icon-package" name="gift-card-o" /><br>待收货</a>
                <a class="box-item-flex1 content-center" href="http://www.mdjec.com/wap/trade-list.html?s=4">
                    <van-icon class="bbc-icon bbc-icon-package" name="smile-o" /><br>待评价</a>
                <a class="box-item-flex1 content-center" href="http://www.mdjec.com/wap/canceled.html">
                    <van-icon class="bbc-icon bbc-icon-package" name="clock-o" /><br>已取消</a>
            </div>
        </section>
        <section class="section-white">
            <div class="section-title user-title">
                <div class="title-txt">
                    <van-icon class="user-icon bbc-icon bbc-icon-list user-order" name="gold-coin" /> 我的资产
                </div>
                <div class="checkin">
                    <button type="button" class="shopex-btn shopex-btn-warning bbc-btn-warning bbc-btn-sm checkin" data-pointnum="5">今日签到</button>
                    <button type="button" class="shopex-btn bbc-btn-sm checkedin font-red" style="display:none;">已签到</button>
                </div>
            </div>
            <div class="box-display content-vertical-padded user-">
                <a class="box-item-flex1 content-center shopex-col-xs-4" href="http://www.mdjec.com/wap/memeber-hongbaoList.html">
                    <em>￥0.00</em><br>
                    <span class="font-gray-20 fontS">红包</span>
                </a>
                <a class="box-item-flex1 content-center shopex-col-xs-4" href="http://www.mdjec.com/wap/member-voucher-list.html">
                    <em>0</em>张<br>
                    <span class="font-gray-20 fontS">购物券</span>
                </a>
                <a class="box-item-flex1 content-center shopex-col-xs-4" href="http://www.mdjec.com/wap/member-couponList.html">
                    <em>0</em>张<br>
                    <span class="font-gray-20 fontS">优惠券</span>
                </a>
                <a class="box-item-flex1 content-center shopex-col-xs-4" href="http://www.mdjec.com/wap/mypoint.html">
                    <em>5</em><br>
                    <span class="font-gray-20 fontS">积分</span>
                </a>
            </div>
        </section>
        <section class="section-white">
            <ul class="shopex-table-view">
                <li class="shopex-table-view-cell">
                    <a class="shopex-navigate-right" href="http://www.mdjec.com/wap/member-aftersales-list.html">
                        <van-icon class="user-icon bbc-icon bbc-icon-history user-returns" name="clock-o" /> 退换货记录</a>
                </li>
                <li class="shopex-table-view-cell">
                    <a class="shopex-navigate-right" href="http://www.mdjec.com/wap/member-security.html">
                        <van-icon style="color:green"  class="user-icon bbc-icon bbc-icon-history user-returns" name="lock" /> 安全中心
                    </a>
                </li>
                <li class="shopex-table-view-cell">
                    <a class="shopex-navigate-right" href="http://www.mdjec.com/wap/member-collectitems.html">
                         <van-icon style="color:green"  class="user-icon bbc-icon bbc-icon-history user-returns" name="star" /> 我的收藏</a>
                </li>
                <li class="shopex-table-view-cell">
                    <a class="shopex-navigate-right" href="http://www.mdjec.com/wap/member-rate-index.html">
                        <van-icon style="color:green"  class="user-icon bbc-icon bbc-icon-history user-returns" name="lock" /> 我的评价</a>
                </li>
                <li class="shopex-table-view-cell">
                    <a class="shopex-navigate-right" href="http://www.mdjec.com/wap/complaints-list.html">
                         <van-icon style="color:green"  class="user-icon bbc-icon bbc-icon-history user-returns" name="lock" /> 我的投诉</a>
                </li>
            </ul>
        </section>
    </div>
</template>


<script>
export default {
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    getCookie(key) {
      //获取cookie值
      var cookies = document.cookie; //name=malin; pwd=123456
      var arr = cookies.split("; "); //['name=malin','pwd=123456']
      for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split("="); //['name','malin'
        if (key == arr2[0]) {
          return arr2[1];
        }
      }
    },

    set_userInfo() {}
  },

  created() {
    this.userName = this.getCookie("userName");
  }
};
</script>


<style lang="scss">
body {
  font-family: "Hiragino Sans GB", "STHeiti", "Microsoft Yahei", Helvetica;
  -webkit-font-smoothing: antialiased;
  -webkit-overflow-scrolling: touch;
  font-size: 1rem;
  background-color: #efeff4;
}
.user-header {
  position: relative;
  background: url(../assets/2.png);
  background-size: cover;
  color: #fff;
  .user-setting {
    position: absolute;
    left: auto;
    top: 1rem;
    right: 1rem;
    bottom: auto;
    display: block;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.3);
    padding: 0.2rem;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.2rem;
    line-height: 1;
  }
  .user-logined {
    height: 10rem;
    text-align: center;
    font-size: 1.08rem;
    color: #fff;
  }
  .user-name {
    display: inline-block;
    padding-top: 2.5rem;
    color: #fff;
  }
  .member-level {
    display: inline-block;
    border-radius: 0.2rem;
    font-size: 0.7rem;
    background: rgba(255, 255, 255, 0.3);
    padding: 0.2rem 0.4rem;
    margin-top: 1rem;
  }
  .user-logined {
    height: 10rem;
    text-align: center;
    font-size: 1.08rem;
  }
}
.section-white {
  border-bottom: 1px solid #e4e5e6;
  background: #fff;
  margin-bottom: 10px;
  .user-title {
    border-bottom: 1px solid #efefef;
  }
  .section-title {
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    padding: 0.75rem 1rem;
    font-size: 0.99rem;
    .title-txt {
      -webkit-box-flex: 2;
      max-width: 70%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      .user-icon {
        border-radius: 0.3rem;
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.25rem;
        font-size: 1.08rem;
        color: #fff;
        text-align: center;
        line-height: 1.5rem;
        .user-order {
          background: #f89d81;
        }
      }
    }
    .more-link {
      display: block;
      -webkit-box-flex: 1;
      text-align: right;
      font-size: 0.9rem;
      color: #666;
      .bbc-icon {
        font-size: 0.9rem;
        vertical-align: middle;
      }
      a {
        color: #333;
      }
    }
  }
  .user-orders .bbc-icon {
    font-size: 180%;
    // position: relative;
  }
  .user-orders {
    margin-top: 0.5rem;
    .bbc-icon {
      display: inline-block;
      height: 26px;
      color: #333;
      width: 26px;
      font-size: 180%;
      z-index: 15;
    }
  }
  .content-vertical-padded {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .box-display {
    display: flex;
    text-align: center;
    color: #333;
  }
  .box-item-flex1 {
    flex: 1;
    color: #333;
  }
  .user-order {
    background: #f89d81;
  }
  .bbc-btn-sm {
    font-size: 0.7rem;
    padding: 0.4rem;
    line-height: 0.6rem;
  }
  .bbc-btn-warning {
    background: #ea2329;
    border-color: #ea2329;
    margin: 0;
  }
  .shopex-btn-warning,
  .shopex-btn-yellow {
    color: #fff;
    background-color: #f0ad4e;
    border: 1px solid #f0ad4e;
  }
  .shopex-table-view {
    position: relative;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
    .shopex-table-view-cell {
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      border-bottom: 1px solid #e4e5e6;
    }
    .shopex-table-view-cell {
      position: relative;
      padding: 0.7rem 1rem;
      overflow: hidden;
      -webkit-touch-callout: none;
      > a:not(.shopex-btn) {
        position: relative;
        display: block;
        padding: inherit;
        margin: -11px -15px;
        overflow: hidden;
        color: inherit;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #000;
        .shopex-navigate-right:after,
        .shopex-push-left:after,
        .shopex-push-right:after {
          position: absolute;
          top: 50%;
          display: inline-block;
          font-family: Muiicons;
          font-size: inherit;
          line-height: 1;
          color: #bbb;
          text-decoration: none;
          -webkit-font-smoothing: antialiased;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
        }
      }
    }
  }

  element.style {
  }
  .user-icon.user-returns {
    background: #83d3f3;
  }
  .user-icon.user-returns {
    background: #83d3f3;
  }
  .user-icon {
    border-radius: 0.3rem;
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.25rem;
    font-size: 1.08rem;
    color: #fff;
    text-align: center;
    line-height: 1.5rem;
  }
}
</style>


