// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "title": "请填写时间",
    "items": [
      // { "value": "第一个选项", "url": "../enquire/enquire", "select": "默认值"},
      // { "value": "第二个选项", "url": "../login/login", "select": "默认值"},
      // { "value": "第三个选项", "url": "../release/release", "select": "默认值"},
      // { "value": "第四个选项", "url": "../enquire/enquire", "select": "默认值"},
      { "value": "第一个选项", "content": "起始时间", "type": "text", "value": "格式为xx-xx-xx"},
      { "value": "第二个选项", "content": "终止时间", "type": "text", "value": "格式为xx-xx-xx"},
    ]
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