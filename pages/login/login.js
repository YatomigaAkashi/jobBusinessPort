var app = getApp();
Page({
  data: {
    phone: '',//此处的phone为登录时的邮箱账号，懒得改了
    password: '',//密码
  },
  // 获取输入账号
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
    app.globalData.email=e.detail.value
  },

  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function () {
    // 暂时用这个跳转接口，等后面接后台
    // wx.redirectTo({
    //   url: '../enquire/enquire',
    // });
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '用户名和密码不能为空',
        icon: 'none',
        duration: 1500
      })
    } else{
      var that = this;
      wx.request({
        url: 'https://www.ishclass.cn/recruit/login/login',
        method:'GET',
        data:{
          mail:this.data.phone,
          password:this.data.password,
        },
        header: {
          'content-type': 'application/json'  //默认值  
         },
         success:function(res){
           if (res.data!=true){
             wx.showModal({
               title: '提示',
               content: '请检查邮箱和密码是否正确，或邮箱是否注册',
             })
           }
           else{
             wx.redirectTo({
               url: '../enquire/enquire',
            });
           }
        }
      })
    } 
         },  
})
