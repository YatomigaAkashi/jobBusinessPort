// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:"",
      password:"",
      repassword:"",
      email:"",
      authorization:"",
  },
  //跳转到服务协议
  severice:function(){
    wx.navigateTo({
      url: '../severice/severice',
    })
  },
  //写入姓名
  myname(e){
    this.data.name=e.detail.value
  },
  //验证密码
  mypassword(e) {
     this.data.password= e.detail.value
  },
  judgepassword(e){
    this.data.repassword=e.detail.value
    var data1=this.data.password
    var data2=e.detail.value
    console.log(data1)
    console.log(data2)
    if(data1!=data2){
      wx.showModal({
        title: '错误',
        content: '前后密码不一致',
      })
    }
    if(data1.length<4 || data2.length<4){
      wx.showToast({
        title: '请设置密码长度在4-16位之间',
        icon: 'none',
        duration: 1000
      })
    }
  },
  //验证邮箱
  myemail(e) {
    var email = e.detail.value
    let regEmail = /^[a-z\d_\-\.]+@[a-z\d_\-]+\.[a-z\d_\-]+$/i;
    if(!regEmail.test(email)){
      wx.showModal({
        title: '错误',
        content: '邮箱输入错误',
      })
    }
    else{
      this.data.email = e.detail.value
    }
  },
  //验证授权码
  myauthorization(e) {
    if(e.detail.value!='123456'){
      wx.showModal({
        title: '错误',
        content: '授权码输入错误',
      })
    }
    else{
      this.data.authorization = e.detail.value
    }
  },
submit:function(e){
  var flag=0
  var email = this.data.email
  let regEmail = /^[a-z\d_\-\.]+@[a-z\d_\-]+\.[a-z\d_\-]+$/i;
  if (!regEmail.test(email)) {
    flag=1
  }
  var authorization = this.data.authorization
  if (authorization != '123456') {
    flag=1
  }
  if (this.data.password!=this.data.repassword){
    flag=1
  }
  else if(this.data.password.length<4 || this.data.repassword.length<4){
    flag=1
  }
  if(flag!=0){
    wx.showModal({
      title: '错误提醒',
      content: '以上信息有误，请再次核对信息',
    })
  }
  else{
    wx.request({
      url: 'https://www.ishclass.cn/recruit/login/register',
      method: 'post',
      data: {
        mail:this.data.email,
        password: this.data.password,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'  //默认值  
      },
      success:function(res){
        wx.showToast({
          title: '注册成功',
        })
        setTimeout(function(){
          var pages = getCurrentPages(); // 当前页面
          var beforePage = pages[pages.length - 2]; // 前一个页面
          wx.navigateBack({
            success: function () {
              beforePage.onLoad(); // 执行前一个页面的onLoad方法
            }
          });
        },1500)
        
      }
    })
  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
