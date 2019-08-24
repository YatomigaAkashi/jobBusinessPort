// pages/item/item.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    itemData: "",
    moneymin: "",
    moneymax: "",
    datef: "",
    datel: "",
    region: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取本地存储数据
    var that=this;
    wx.getStorage({
      key: 'diaries',
      success: function(res) {
        var message = res.data.find((e) => e.id == options.var1);
        that.setData({
          id: options.var1,
          itemData: message,
        })
        if (message.salary != "") {
          that.setData({
            moneymin: message.salary.split("--")[0] + "人民币",
            moneymax: message.salary.split("--")[1] + "人民币",
          })
        }
        if (message.recruittime != "") {
          that.setData({
            datef: message.recruittime.split("--")[0],
            datel: message.recruittime.split("--")[1],
          })
        }
        if (message.workplace != "") {
          that.setData({
            region: message.workplace.split(","),
          })
        }
      },
    })
  },

  // 跳转工作选择
  lookjob: function (e) {
    this.data.position = app.globalData.position
    wx.navigateTo({
      url: '../jobselect/jobselect?var1=' + this.data.id,
    })
  },

  // 邮箱验证
  email(e) {
    var email = e.detail.value
    let regEmail = /^[a-z\d_\-\.]+@[a-z\d_\-]+\.[a-z\d_\-]+$/i;
    if (!regEmail.test(email)) {
      wx.showModal({
        title: '错误',
        content: '邮箱输入错误',
      })
    }
    else {
      this.data.email = e.detail.value
    }
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      datef: e.detail.value
    })
  },
  bindDateChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      datel: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  // 发起修改请求
  update: function(e) {
    var value = e.detail.value;
    console.log(value);
    // 提交审核
    if (value.company == "" || value.contact == "" || value.firstdata == "" || value.lastdata == "" || app.globalData.position == "" || value.moneymin == "" || value.moneymax == "") {
      wx.showToast({
        title: '信息填写不完整',
        icon: 'fail',
        duration: 1500
      })
    }
    else {
      var that=this;
      this.data.position = app.globalData.position
      wx.request({
        url: 'https://www.ishclass.cn/recruit/recruit/add',
        method: 'post',
        data: {
          id: that.data.id,
          _method: "update",
          usermail: app.globalData.email,
          company: value.company,
          job: app.globalData.position,
          salary: value.moneymin + '--' + value.moneymax,
          workplace: value.workplace.join(','),
          recruittime: value.firstdata + '--' + value.lastdata,
          companymail: value.contact,
          partytime: value.setion_time,
          partyplace: value.setion_address,
        },
        header: {
          'content-type': "application/x-www-form-urlencoded" // 默认值 
        },
        success: function (res) {
          if (res.data == true) {
            wx.showToast({
              title: '修改成功',
              icon: 'success',
              duration: 1500
            })
            wx.reLaunch({
              url: '../enquire/enquire'
            })
          }
          else {
            wx.showToast({
              title: '请重新发布',
              icon: 'fail',
              duration: 1500
            })
          }
        },
      })
    }
  },

  // 发起删除请求
  delete: function() {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否删除该项',
      success(res) {

        console.log(that),
        wx.request({
          url: 'https://www.ishclass.cn/recruit/recruit/add',
          method: 'post',
          data: {
            id: that.data.id,
            _method: "delete"
          },
          header: {
            'content-type': "application/x-www-form-urlencoded" // 默认值 
          },
          success: function (res) {
            if (res.data == true) {
              wx.showToast({
                title: '删除成功',
                icon: 'success',
                duration: 1500
              })
              wx.reLaunch({
                url: '../enquire/enquire'
              })

            }
            else {
              wx.showToast({
                title: '删除失败',
                icon: 'fail',
                duration: 1500
              })
            }
          },
        })
      }
    })
  }
})