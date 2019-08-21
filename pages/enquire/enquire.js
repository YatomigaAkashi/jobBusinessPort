// pages/enquire/enquire.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    diaries:[],// 需要网络请求
    userInfo: {},
    hasUserInfo: false,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
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
          that.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    /**
     * 这个地方加载界面，显示是否已经发布过信息
     */
    var that = this;
    wx.request({
      url: 'https://www.ishclass.cn/recruit/recruit/getOne', // 请求当前所有项目信息
      method: "GET",
      data: {
        usermail:app.globalData.email
      }, // 请求信息
      
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
      
        //var x=res.data
        for(let i=0;i<res.data.length;i++){
          res.data[i].job=res.data[i].job.split(",")
          // console.log(xs)
        }
      //   x=x.split(",")
      //    console.log(x)
        if(res.data.length>0){
        console.log(res.data)
          that.setData({
            diaries:res.data
          })
        }
      },
      fail() {
        console.log("连接失败");
      },
    })
    // console.log(that.data.diaries)
  },
  getUserInfo: function (e) {
    
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  // 跳转发布界面
  goToRelease() {
    console.log(this.data.diaries)
    wx.navigateTo({
      url: '../release/release',
    })
  },
  //下拉刷新监听函数
  _onPullDownRefresh: function () {
    console.log("akashi");
    setTimeout(() => {
      const colors = this._generateColors(20);
      this.setData({
        colors,
        refreshing: false,
      });
    }, 2000);
  },

  //加载更多监听函数
  _onLoadmore: function () {
    setTimeout(() => {
      if (this.data.colors.length == 80) {
        this.setData({ nomore: true })
      } else {
        const colors = this._generateColors(20);
        this.setData({ colors: [...this.data.colors, ...colors] });
      }
    }, 1000);
  },

  _onScroll: function (e) {
  },
})
