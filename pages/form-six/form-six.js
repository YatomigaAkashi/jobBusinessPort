// pages/form-six/form-six.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "item_one": {
      "title": "宣讲会时间",
      "items": [
        { "value": "日期",}
      ]
    },
    "item_two": {
      "title": "详细地址",
      "items": [
        { "content": "起始时间", "type": "text", "placeholder": "分/时" },
        { "content": "结束时间", "type": "text", "placeholder": "分/时" },
      ]
    },
    "item_three": {
      "title": "宣讲会地点",
      "items": [
        { "value": "选择地区" }
      ]
    },
    "item_four": {
      "items": [
        { "isTextarea": true, "placeholder": "填写详细地址" },
      ]
    }
  },
})