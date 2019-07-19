// pages/mine/login.js
var app = getApp();
Page({
  data: {
    phone: '',//电话号
    password: '',//密码
    authorizat_code:''//授权码
  },
  // 获取输入账号
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  //输入授权码
authorization_code:function(e){
  this.setData({
    authorizat_code:e.detail.value
  })
},
  // 登录
  login: function () {
    // 暂时用这个跳转接口，等后面接后台
    wx.navigateTo({
      url: '../enquire/enquire',
    });
    // if (this.data.phone.length == 0 || this.data.password.length == 0) {
    //   wx.showToast({
    //     title: '用户名和密码不能为空',
    //     icon: 'none',
    //     duration: 1500
    //   })
    // } else{
    //   console.log('账号为: ', this.data.phone);
    //   console.log('密码为: ', this.data.password);
    //   var that = this;
      
      // wx.request({
      //   url: 'https://www.ishclass.cn/backend2.0/login/login',
      //   method: 'GET',
      //   data: {
      //      stuid: this.data.phone,  //这里是发送给服务器的参数（参数名：参数值）
      //      password:this.data.password,
      //   },
      //   header: {
      //     'content-type': 'application/json'  //这里注意POST请求content-type是小写，大写会报错    
      //   },
      //   success: function (res) {
      //       console.log('返回值是'+res.data)
      //       if (res.data == 3) {
      //         app.globalData.userInfo = that.data.phone
      //         console.log('用户是' + app.globalData.userInfo)
      //         if (app.globalData.userInfo.substr(1,1)!='7'){
      //           wx.showModal({
      //             title:'温馨提示',
      //             content: '留级生的成绩排名有误，请咨询辅导员或用学生账号登陆教务系统查询',
      //             success: function (res) {
      //               if (res.confirm) {
      //                 console.log('用户点击确定')
      //                 wx.showToast({
      //                   title: '学生端登陆成功',
      //                   icon: 'success',
      //                   duration: 1500
      //                 })
      //                 wx.switchTab({
      //                   url: "/pages/interaction/interaction"
      //                 })
      //               } else if (res.cancel) {
      //                 console.log('用户点击取消')
      //               }
      //             }
      //           })
      //         } else {
      //           wx.showToast({
      //             title: '学生端登陆成功',
      //             icon: 'success',
      //             duration: 1500
      //           })
      //           wx.switchTab({
      //             url: "/pages/interaction/interaction"
      //           })
      //         }
      //       } else if(res.data == -1){
      //         app.globalData.userInfo = that.data.phone
      //         console.log('用户是' + app.globalData.userInfo)
      //         wx.showToast({
      //           title: '用户名或密码错误',
      //           icon: 'none',
      //           duration: 2000
      //         })
      //       } else if (res.data == 2) {
      //         app.globalData.userInfo = that.data.phone
      //         console.log('用户是' + app.globalData.userInfo)
      //         wx.showToast({
      //           title: '班长端登陆成功',
      //           icon: 'success',
      //           duration: 1500
      //         })
      //         wx.showModal({
      //           title: '温馨提示',
      //           content: '班长端暂未完全开发，将自动跳转至学生端',
      //           success: function (res) {
      //             if (res.confirm) {
      //               console.log('用户点击确定')
      //               wx.showToast({
      //                 title: '学生端登陆成功',
      //                 icon: 'success',
      //                 duration: 1500
      //               })
      //               wx.switchTab({
      //                 url: "/pages/interaction/interaction"
      //               })
      //             } else if (res.cancel) {
      //               console.log('用户点击取消')
      //             }
      //           }
      //         })
      //       } else if (res.data == 1) {
      //         app.globalData.userInfo = that.data.phone
      //         console.log('用户是' + app.globalData.userInfo)
      //         wx.showToast({
      //           title: '教师端登陆成功',
      //           icon: 'success',
      //           duration: 1500
      //         })
      //         wx.redirectTo({
      //           url: '/pages/teacher/interaction'
      //         })
      //       }
        },
        register_account:function(){
        wx.navigateTo({
          url: '../register/register',
        })
       },
       code:function(){
         wx.navigateTo({
           url: '../forgetcode/forgetcode',
         })
       }
      // });
  // }}
  
})
