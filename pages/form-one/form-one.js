// pages/form-one/form-one.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "item_one": {
      "title": "基本信息",
      "items": [
        { "content": "用人单位", "placeholder": "请填写单位名称" }
      ]
    },
    "item_three": {
      "title": "请选择公司logo图片"
    },
    "codeText": "发送验证码",
    "number": 0,  // 计时器初始化
    "error": "",  // 表单错误校验初始化

    // 上传图片
    files: [{
      url: 'http://mmbiz.qpic.cn/mmbiz_png/VUIF3v9blLsicfV8ysC76e9fZzWgy8YJ2bQO58p43Lib8ncGXmuyibLY7O3hia8sWv25KCibQb7MbJW3Q7xibNzfRN7A/0',
    }, {
      loading: true
    }, {
      error: true
    }],

    // 表单数据
    "line_input_value": "",  // 用人单位数据
    "input_value": ""  // 验证码数据
  },

  onLoad() {
    this.setData({
      selectFile: this.selectFile.bind(this),
      uplaodFile: this.uplaodFile.bind(this)
    })

  },

  // 倒计时
  countdown: function (that) {
    var number = that.data.number;
    if(number == 0) {
      that.setData({
        codeText: "发送验证码"
      })
      return ;
    } else {
      that.setData({
        codeText: "已发送(" + that.data.number + "秒)"
      });
    }
    var time = setTimeout(() => {
      that.setData({
        number: --number
      });
      this.countdown(that);
    }, 1000)
  },

  // 发送验证码
  click: function () {
    // 模仿按钮
    this.setData({
      active: true
    })
    setTimeout(() => {
      this.setData({
        active: false
      })
    }, 200)

    this.data.number = 60;
    this.countdown(this);
  },

  // 验证码即时校验(待填算法)
  input_touch: function (e) {
    // popError('请填写数字');
  },

  // 验证码完成输入
  input_blur: function (e) {
    this.data.input_value = e.detail.value;
  },

  // 表单校验
  next: function () {

    // 公司名称校验
    this.data.line_input_value = this.selectComponent('#line-input').getvalue();
    if (!this.data.line_input_value) {
      this.popError('用人单位未填写');
      return ;
    } else {
      // 待处理
    }
    
    // 验证码校验
    if (!this.data.input_value) {
      this.popError('验证码未填写');
      return ;
    } else {
      // 连接后端
    }

    wx.navigateTo({
      url: '../form-one-one/form-one-one',
    })
  },

  // 警告弹出事件
  popError: function (e) {
    this.setData({
      error: e
    })
  },

  // 组件教程网址：https://developers.weixin.qq.com/miniprogram/dev/extended/weui/uploader.html
  // 上传图片
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  selectFile(files) {
    console.log('files', files)
    // 返回false可以阻止某次文件上传
  },
  uplaodFile(files) {
    console.log('upload files', files)
    // 文件上传的函数，返回一个promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('some error')
      }, 1000)
    })
  },
  uploadError(e) {
    console.log('upload error', e.detail)
  },
  uploadSuccess(e) {
    console.log('upload success', e.detail)
  }
})