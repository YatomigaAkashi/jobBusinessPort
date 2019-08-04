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
//这个地方先判断，再写入数据库
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
