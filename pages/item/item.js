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
  }
})