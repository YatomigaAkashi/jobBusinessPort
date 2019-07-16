// pages/release/release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maxlength: 200,
    cursorSpacing: 100,
    value: {},
  },

  // POST请求
  bindSubmit: function(e) {
    var _this=this;
    this.data.value=e.detail.value;
    wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址
      data: this.data.value,
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        _this.upCue(true);
      },
      fail() {
        _this.upCue(false);
      },
    })
  },

  // 提交后弹出对话窗口
  upCue: function (result) {
    var news;
    if (result) {
      news = "提交成功";
    } else {
      news = "提交失败";
    }
    wx.showModal({
      title: "提交结果",
      content: news,
      success(res) {
        if (res.confirm) {
          console.log("跳转");
          wx.navigateBack({
            delta: 1
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
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