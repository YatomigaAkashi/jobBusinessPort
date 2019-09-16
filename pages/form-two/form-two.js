// pages/form-two/form-two.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "item_one": {
      "title": "学历选择",
      "items": [
        { "value": "本科" },
        { "value": "硕士" },
        { "value": "博士" }
      ]
    },
    "item_two": {
      "title": "请输入招聘人数",
      "items": [
        { "content": "招聘人数",  "type": "number", "placeholder": "请输入数字"},
      ]
    },

    // 表单数据
    check_value: [],
    input_value: ""
  },

  //  check校验
  myevent: function (e) {
    var value = e.detail.value;

    // 添加
    if (value.value != '其他' && !value.checked) {
      this.data.check_value.push(value.value);
    } else if (this.data.check_value.find(item => item == value.value)) {
      var index = this.data.check_value.findIndex(item => item == value.value);
      this.data.check_value.splice(index, 1);
    }
  },

  // 表单校验
  next: function () {
    console.log(this.data);

    // 验证码校验
    if (!this.data.check_value.length === 0) {
      this.popError('学历未选择');
      return;
    } else {
      // 连接后端
    }

    // input校验
    this.data.input_value = this.selectComponent('#line-input').getvalue();
    if (!this.data.input_value) {
      this.popError('招聘人数未填写');
      return;
    } else {
      // 待处理
    }

    wx.navigateTo({
      url: "../form-three/form-three"
    })
  },

  // 警告弹出事件
  popError: function (e) {
    this.setData({
      error: e
    })
  },
})