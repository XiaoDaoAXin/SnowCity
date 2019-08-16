<template>
    <div class="logon">
        <!-- --------头部------------- -->
        <div class="logon_header">
            <van-icon @click="to_sign" class="to_home" style="float:left;color: red;" name="arrow-left" /> 会员注册
        </div>
        <div class="logon_main">
            <div class="form">
                <van-cell-group>
                    <van-field @blur="reg_userName" v-model="username" :error-message="name_error" @focus="clear_tishi" required clearable label="账号" placeholder="请输入您的用户名/手机号" />

                    <van-field v-model="password" :error-message="psw_error" right-icon="eye-o" @click-right-icon="show_psw" :type="this.psw_input_type" label="密码" placeholder="请输入密码" required />
                    <van-field v-model="duanxin_code" center clearable label="短信验证码" placeholder="请输入短信验证码">
                        <van-button @click="catch_dxcode" slot="button" size="small" type="primary">发送验证码</van-button>
                    </van-field>
                </van-cell-group>
            </div>

            <div class="xieyi">
                <van-checkbox @click="if_agree" v-model="checked" checked-color="red"></van-checkbox>
                我已阅读并同意
                <span style="color:red">《会员注册协议》</span>
            </div>

            <div class="sign_btn">
                <van-button @click="logon" style="display: block;width:90%;margin:auto;" type="danger" size="large">注册</van-button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      //同意按钮
      checked: true,
      username: "",
      password: "",
      psw_input_type: "password",
      //短信码
      duanxin_code: "",
      //错误提示
      name_error: "",
      psw_error: "",

      sms: ""
    };
  },
  methods: {
    if_agree() {
      this.checked = !this.checked;
    },
    //点击显示密码
    show_psw() {
      if (this.psw_input_type == "password") {
        this.psw_input_type = "text";
      } else {
        this.psw_input_type = "password";
      }
    },
    //获取验证码
    catch_dxcode() {
      var html = "";
      for (var i = 0; i < 4; i++) {
        html += parseInt(Math.random() * 10); //0-9
      }
      this.duanxin_code = html;
    },
    //验证账号正则和是否存在
    async reg_userName() {
      //   console.log(123);
      //先非空
      if (this.username) {
        let res = await this.$axios.get("http://localhost:3000/reg/username", {
          params: {
            username: this.username
          }
        });
        if (res.data.length == 0) {
          // alert('用户名可用')
        } else {
          this.name_error = "该用户已注册";
        }
      } else {
        this.name_error = "请输入用户名";
      }
    },

    //点击注册
    async logon() {
     
      if (this.username && this.password && this.duanxin_code) {
        //    console.log(123);
        let logon_res = await this.$axios({
          method: "post",
          headers: { "content-type": "application/x-www-form-urlencoded" },//局部更改
          url: "http://localhost:3000/reg/logon",
          data: this.$qs.stringify({
            username: this.username,
            password: this.password
          })
        }).then((data)=>{
            if(data.status == '200'){
                this.$toast('注册成功');
                this.$router.push({
                    name:'sign'
                })
            }
            
        });
      } else {
        this.$toast("请完善信息");
      }
    },

    //清除提示
    clear_tishi() {
      this.name_error = "";
    },
    //点击去登录
    to_sign() {
      this.$router.push({
        name: "sign"
      });
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
.logon {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.logon_header {
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
.logon_main {
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

  .xieyi {
    overflow: hidden;
    padding: 0px 20px;
    margin-top: 30px;
    .forget_psw {
      padding: 0px;
    }
    .van-checkbox {
      float: left;
      width: 30px;
    }
  }
}
</style>


