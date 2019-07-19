// pages/enquire/enquire.js
const app = getApp()
var diaries = require("../../mock/list.js")  // mock模拟

Page({

  /**
   * 页面的初始数据
   */
  data: {
    diaries: diaries.data.diaries ,// 需要网络请求
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
     menulist: [
      {
        "id": "1",
        "url": "../../images/menu/top.png",
        "title": "顶部",
      },
      {
        "id": "2",
        "url": "../../images/menu/add.png",
        "title": "发布",
      },
    ],
    mainmodel: {
      "url": "../../images/menu/home.png",
      "title": "菜单",
    }
  
  },
  menuItemClick: function (res) {
    console.log(res);
    //获取点击事件的信息
    let clickInfo = res.detail.iteminfo
    console.log(clickInfo);
    // 根据不同类型进行判别处理
    //事件的处理 代码

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    /**
     * 这个地方加载界面，显示是否已经发布过信息
     */
    // var _this = this;
    // wx.request({
    //   url: 'test.php', // 请求当前所有项目信息
    //   data: "", // 请求信息
    //   method: "GET",
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     _this.setData.diaries = res.data; // 接收返回值
    //   },
    //   fail() {
    //     console.log("连接失败");
    //   },
    // })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
