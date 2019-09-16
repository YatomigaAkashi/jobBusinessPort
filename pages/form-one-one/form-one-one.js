// pages/form-one-one/form-one-one.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "title": "职业选择",
    "items": [
      { "value": "研发" },
      { "value": "测试" },
      { "value": "产品" },
      { "value": "管理" },
      { "value": "销售" },
      { "value": "其他" }
    ],
    "pop": false,  // 是否弹窗
    "other": false,  // 其他项是否选中
    "error": "",  // 表单错误校验初始化
    "input": {
      "items": [
        { "content": "具体职位", "placeholder": "请填写职位名称" }
      ]
    },

    // 表单数据
    "check_value": []
  },

  // 获取点击坐标
  click: function (e) {
    this.setData({
      "touchX": e.detail.x,
      "touchY": e.detail.y * 2 + 100
    })
  },

  // 弹出输入框&&获取选取值
  myevent: function (e) {
    var value = e.detail.value; 
    if (value.value == "其他" && !value.checked) {
      this.setData({
        "pop": true,
        "other": true
      })
    } else {
      this.setData({
        "other": false
      })
    }
    this.data.checkValue = value.value;

    // 添加
    if (value.value != '其他' && !value.checked) {
      this.data.check_value.push(value.value);
    } else if (this.data.check_value.find(item => item == value.value)) {
      var index = this.data.check_value.findIndex(item => item == value.value);
      this.data.check_value.splice(index, 1);
    }
  },

  // 关闭对话框&&获取other输入值
  unpop: function (e) {
    this.setData({
      "pop": false
    })

    // 获取子组件的输入值
    var reinputValue = this.selectComponent('#line-input').getvalue();
    // 改变子组件的值
    this.selectComponent('#line-check').onshow(this.data.checkValue, reinputValue);

    // 添加
    var value = reinputValue;
    var checked = this.data.other;
    if (value && checked) {
      this.data.check_value.push(value);
    } else if (this.data.check_value.find(item => item == value)) {
      var index = this.data.check_value.findIndex(item => item == value);
      this.data.check_value.splice(index, 1);
    }
  },

  input_pop: function (e) {
    console.log(e);
  },

   // 表单校验
  next: function () {

    // 验证码校验
    if (this.data.check_value.length === 0) {
      this.popError('未选择职业');
      return;
    } else {
      // 其他验证方式
    }

    wx.navigateTo({
      url: '../form-two/form-two',
    })
  },

  // 警告弹出事件
  popError: function (e) {
    this.setData({
      error: e
    })
    console.log(this.data.error);
  },
})