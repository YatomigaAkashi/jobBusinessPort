// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatar: "../../images/icons/enquire.png", // 网络获取
      nickname: "姓名",
      meta: '信息',
    }
  },
  
  touchAdd: function () {
    wx.navigateTo({
      url: '../release/release',
    })
  }
})