// pages/forgetcode/forgetcode.js
const app = getApp()
var random = require("../../mock/random.js")
Page({
  data: {
    Random: random,
    email:'',
    password:'',
    repassword:''
  },
  send_verify: function (event) {
    var that = this;
    // console.log(this.data.yangyi)
    // console.log(event.detail.value.phone);
    that.setData({
      email: event.detail.value.email,
    });
    let regEmail = /^[a-z\d_\-\.]+@[a-z\d_\-]+\.[a-z\d_\-]+$/i;
    if (!regEmail.test(this.data.email)) {
      wx.showModal({
        title: '错误',
        content: '邮箱输入错误',
      })
    }
    else{
      wx.request({
       url: 'https://www.ishclass.cn/recruit/login/proof',
       data: {
         mail: this.data.email,
         text:this.data.Random
       },
       method: 'post',
       header: {
         'content-type': 'application/x-www-form-urlencoded'  //默认值  
       },
       success: function (res) {
         console.log(res)
         if(res.data==true){
           wx.showToast({
            title: '发送成功',
            icon: 'success',
            duration: 1500
           })
         }
       }
     })
    }
  },

  register: function (event) {
    var that = this;
    var email=event.detail.value.email
    var password=event.detail.value.password
    var repassword=event.detail.value.repassword
    var code=event.detail.value.verify_code
    var num=this.data.Random
    if(password!=repassword){
      wx.showToast({
        title: '密码前后不一致',
      })
    }
    else if(num!=code){
wx.showToast({
  title: '验证码错误',
})
    }
    else{
     wx.request({
       url: 'https://www.ishclass.cn/recruit/login/passwordchange',
       data: {
         mail: event.detail.value.email,
         newpassword: event.detail.value.password,
       },
      method: 'put',
       header: {
         'content-type': "application/x-www-form-urlencoded" // 默认值 
       },
       success: function (res) {
         console.log(res)
        if (res.data==true) {
          wx.showToast({
            title: '修改成功',
            icon: 'success',
            duration: 1500
          })
          setTimeout(function () {
            wx.navigateBack({
              delta: 1
            })
          }, 1500);
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'success',
            duration: 1500
          })
        }
       }
     })
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})
