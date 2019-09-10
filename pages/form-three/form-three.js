// pages/form-three/form-three.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "item_one": {
      "title": "薪资类型",
      "items": [
        { "value": "年薪", "checked": "true" },
        { "value": "月薪" }
      ]
    },
    "item_two": {
      "title": "薪资区间",
      "items": [
        { "content": "最低", "type": "number", "placeholder": "请输入数字" },
        { "content": "最高", "type": "number", "placeholder": "请输入数字" },
      ]
    },
    // 滑块
    "isMonth": true,
    "slider": "15",
    "title": "请选择月份数"
  },

  bindchanging: function (e) {
    if (e.detail.value !== this.data.slider) {
      this.setData({
        slider: e.detail.value
      })
    }
  }
})