// pages/form-four/form-four.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "item_two": {
      "title": "工作地点",
      "items": [
        { "value": "国内" },
        { "value": "国际" }
      ]
    }
    // "item_three": {
    //   "title": "详细地址",
    //   "items": [
    //     { "value": "选择地区",   },
    //   ]
    // }
  },

 // 组件通信
  myevent: function (e) {
    if (e.detail.value.value == "国内") {
      wx.navigateTo({
        url: '../addressSelector/addressSelector',
      })
    }
  },

  onShow () {
    this.checkValue = app.globalData.checkValue;
    // 改变子组件的值
    this.selectComponent('#line-check').onshow('国内', this.checkValue);
  }
})