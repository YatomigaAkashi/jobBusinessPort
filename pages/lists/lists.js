// pages/list/lists.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "lists": [
      { "job": "UI工程师", "time": "2018年11月11日发布", "id": "1" },
      { "job": "UI工程师", "time": "2018年11月11日发布", "id": "2" }
    ]
  },

  touchstart: function (e) {
    //开始触摸时 重置所有删除
    let data = App.touch._touchstart(e, this.data.lists) //将修改过的list setData
    this.setData({
      lists: data
    })
  },

  //滑动事件处理
  touchmove: function (e) {
    let data = App.touch._touchmove(e, this.data.lists, 'id')//将修改过的list setData
    this.setData({
      lists: data
    })
  },
})