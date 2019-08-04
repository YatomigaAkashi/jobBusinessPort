// pages/release/release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maxlength: 200,
    cursorSpacing: 100,
    datef: '2019-09-01',
    datel: '2019-09-01',
    value: {},
    region: ['陕西省', '西安市', '长安区'],
    customItem: '全部'
  },

  // POST请求
  bindSubmit: function(e) {
    console.log(e);
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
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      datef: e.detail.value
    })
  },
  bindDateChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      datel: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
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
  }
})
