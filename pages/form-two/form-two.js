// pages/form-two/form-two.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "item_one": {
      "title": "学历选择",
      "items": [
        { "value": "本科", "checked": "true" },
        { "value": "硕士" },
        { "value": "博士" }
      ]
    },
    "item_two": {
      "title": "请输入招聘人数",
      "items": [
        { "content": "招聘人数",  "type": "number", "placeholder": "请输入数字"},
      ]
    }
  },
})