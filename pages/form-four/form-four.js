// pages/form-four/form-four.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "item_one": {
      "title": "单位",
      "items": [
        { "content": "发布单位", "type": "text", "placeholder": "请填写名称"},
        { "content": "用人单位", "type": "text", "placeholder": "请填写名称"}
      ]
    },
    "item_two": {
      "title": "工作地点",
      "items": [
        { "value": "国内", "checked": true},
        { "value": "国际", }
      ]
    },
    "item_three": {
      "title": "详细地址",
      "items": [
        { "value": "选择地区",   },
      ]
    },
    "item_four": {
      "items": [
        {"isTextarea": true, "placeholder": "请填写详细地址"}
      ]
    }
  },
})