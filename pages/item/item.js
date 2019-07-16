// pages/item/item.js
var mock = require("../../mock/item.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    information: mock.data,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(options);
  },

  getData: function(options) {
    var item_data = this.data.information[options.id];
    this.setData({
      "job": item_data.job,
      "require": item_data.require,
      "content": item_data.content,
      "address": item_data.address,
      "treatment": item_data.treatment,
      "contact": item_data.contact,
      "nickname": item_data.nickname,
    })
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