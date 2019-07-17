// pages/enquire/enquire.js
var diaries = require("../../mock/list.js")  // mock模拟

Page({

  /**
   * 页面的初始数据
   */
  data: {
    diaries: diaries.data.diaries // 需要网络请求
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var _this = this;
    // wx.request({
    //   url: 'test.php', // 请求当前所有项目信息
    //   data: "", // 请求信息
    //   method: "GET",
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     _this.setData.diaries = res.data; // 接收返回值
    //   },
    //   fail() {
    //     console.log("连接失败");
    //   },
    // })
  }
})