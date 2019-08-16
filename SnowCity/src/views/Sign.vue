<template>
  <div class="sign">
    <!-- --------头部------------- -->
    <div class="sign_header">
      <van-icon @click="to_home" class="to_home" style="float:left;color: red;" name="arrow-left" /> 会员登录
    </div>
    <div class="sign_main">
      <div class="form">
        <van-cell-group>
          <van-field v-model="username" required clearable label="账号" placeholder="请输入您的用户名/手机号" />

          <van-field v-model="password" right-icon="eye-o" @click-right-icon="show_psw" :type="this.psw_input_type" label="密码" placeholder="请输入密码" required />
        </van-cell-group>
      </div>

      <div class="forget_psw">
        忘记密码
      </div>

      <div class="sign_btn">
        <van-button @click="sign" style="display: block;width:90%;margin:auto;" type="danger" size="large">登录</van-button>
      </div>

      <div class="logon_btn">
        <van-button @click="to_logon" style="display: block;width:90%;background-color:#fff;margin:auto;margin-top:10px" size="large">快速注册</van-button>
      </div>

      <div class="other_login">
        <p>使用其他账号</p>
        <div class="qq">
          <p>
            <van-icon class="icon" class-prefix="my-icon" name="QQ1" />
          </p>
          <p>
            QQ登录
          </p>
        </div>
        <div class="wx">
          <p>
            <van-icon class="icon" class-prefix="my-icon" name="weixin2" />
          </p>
          <p>
            微信登录
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      psw_input_type: "password"
    };
  },
  methods: {
    to_home() {
      this.$router.push({
        name: "home"
      });
    },

    //点击显示密码
    show_psw() {
      if (this.psw_input_type == "password") {
        this.psw_input_type = "text";
      } else {
        this.psw_input_type = "password";
      }
    },
    //点击去注册
    to_logon() {
      this.$router.push({
        name: "logon"
      });
    },
    //设置cookie
    setCookie(key, val, iDay) {
      //key：键名；val：键值；iDay：失效时间
      var now = new Date();
      now.setDate(now.getDate() + iDay);
      document.cookie =
        key + "=" + val + ";expires=" + now.toUTCString() + ";path=/"; //设置一个站点内的文件可以共享此cookie
    },
    //点击登录
    sign() {
      console.log(123);
      if (this.username && this.password) {
        //    console.log(123);
        let sign_res = this.$axios({
          method: "post",
          headers: { "content-type": "application/x-www-form-urlencoded" }, //局部更改
          url: "http://localhost:3000/reg/sign",
          data: this.$qs.stringify({
            username: this.username,
            password: this.password
          })
        })
          .then(data => {
            console.log(data);
            if (data.status == 200) {
              this.$toast("登录成功");
              this.setCookie('userName',this.username,7)
              this.$router.push({
                name: "user"
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        this.$toast("请完善信息");
      }
    }
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  width: 100%;
}
body {
  max-width: 750px;
}
.sign {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.sign_header {
  height: 47px;
  line-height: 47px;
  text-align: center;
  background-color: #fff;
  font-size: 20px;
  padding: 0px 10px;
  .to_home {
    font-size: 30px;
    color: red;
    line-height: 47px;
  }
}
.sign_main {
  height: 620px;
  background-color: #efeff4;

  .form {
    margin-top: 40px;
  }
  .forget_psw {
    height: 20px;
    line-height: 20px;
    text-align: right;
    padding: 0px 20px;
    margin-top: 20px;
    color: red;
    font-size: 14px;
  }
  .sign_btn {
    margin-top: 50px;
    color: #fff;
    .van-button {
      font-size: 16px;
      line-height: 41px;
      height: 41px;
    }
  }
  .logon_btn {
    font-size: 16px;
    line-height: 41px;
    .van-button {
      font-size: 16px;
      line-height: 41px;
      height: 41px;
    }
  }

  .other_login {
    margin-top: 50px;
    padding: 12px 16px;
    text-align: center;
    color: #666;
    overflow: hidden;
    > p {
      font-size: 14px;
      margin-bottom: 30px;
    }
    .qq {
      float: left;
      width: 50%;
      font-size: 14px;
      color: #999;
    }
    .wx {
      float: right;
      width: 50%;
      font-size: 14px;
      color: #999;
    }
    .icon {
      font-size: 38px;
    }
  }
}
</style>


