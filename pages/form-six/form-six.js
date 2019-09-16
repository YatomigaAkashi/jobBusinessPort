// pages/form-six/form-six.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "item_one": {
      "title": "宣讲会时间",
    },
    "item_two": {
      "items": [
        { "content": "起始时间", "type": "text", "placeholder": "分/时" },
        { "content": "结束时间", "type": "text", "placeholder": "分/时" },
      ]
    },
    "item_three": {
      "title": "宣讲会地点",
      "items": [
        { "value": "建议接外部地图api" }
      ]
    },
    "item_four": {
      "items": [
        { "isTextarea": true, "placeholder": "填写详细地址" },
      ]
    },
    "loading": false
  },



  datechange: function (e) {
    this.setData({
      date: e.detail.value
    })
  }
})