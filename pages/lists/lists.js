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

  // 跳转详情页
  goContent: function (e) {
    wx.navigateTo({
      url: '../content/content?e=e',
    })
  },

  // 删除操作
  delete: function (e) {
    let that = this;
    wx.showModal({
      title: '警告',
      content: '是否要删除该项',
      success(res) {
        if (res.confirm) {
          console.log('确认删除')
        } else if (res.cancel) {
          console.log('取消删除');
          let data = App.touch._touchstart(e, that.data.lists);
          that.setData({
            lists: data
          })
        }
      }
    })
  },

  // 修改操作
  update: function (e) {
    wx.redirectTo({
      url: '../form-one/form-one',
    })
  },

  touchstart: function (e) {
    //开始触摸时 重置所有删除
    if (!this.data.Model) {
      let data = App.touch._touchstart(e, this.data.lists) //将修改过的list setData
      this.setData({
        lists: data
      })
    }
  },

  //滑动事件处理
  touchmove: function (e) {
    let data = App.touch._touchmove(e, this.data.lists, 'id');//将修改过的list setData
    this.setData({
      lists: data
    })
  },
})