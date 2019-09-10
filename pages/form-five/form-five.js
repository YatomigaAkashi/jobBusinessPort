// pages/form-five/form-five.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "item_one": {
      "title": "联系方式",
      "items": [
        { "value": "邮箱", "checked": "true" },
        { "value": "电话" },
        { "value": "微信群" }
      ]
    },
    "item_two": {
      "title": "信息填写",
      "items": [
        { "content": "XXXX", "type": "text", "placeholder": "请填写具体联系方式" },
      ]
    }
  },

})