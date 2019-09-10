// pages/form-one/form-one.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item_one: {
      "title": "招聘岗位",
      "items": [
        { "url": "../form-one-one/form-one-one", "value": "请选择工作岗位", "select": ""}
      ]
    },
    item_two: {
      "title": "请输入岗位介绍",
      "items": [
        { "content": "请输入文字内容", "isTextarea": "true", "placeholder": "请输入文字"}
      ]
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