// pages/form-seven/form-seven.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "title": "简历投递",
    "items": [
      { "content": "邮箱", "placeholder": "请输入你的邮箱地址" }
    ],
    "items2": [
      { "content": "链接网址", "placeholder": "请输入网址" }
    ]
  },

  // 提交
  submit: function () {
    this.setData({
      "loading": true
    })
    setTimeout(() => {
      wx.reLaunch({
        url: '../submit-success/submit-success',
      })
    }, 3000)
  },

  // 上传文件
  upload: function () {
    wx.cloud.downloadFile({
      fileID: '', // 文件 ID
      success: res => {
        // 返回临时文件路径
        console.log(res.tempFilePath)
      },
      fail: console.error
    })
  }
})