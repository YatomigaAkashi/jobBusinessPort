// pages/item/item.js
var item = require("../../mock/item.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "item_data": "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(options);
  },

  getData: function(options) {
    this.setData({
      "item_data": item[options.id]
    })
  },
})