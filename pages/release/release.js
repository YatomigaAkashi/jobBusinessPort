// pages/release/release.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maxlength: 200,
    cursorSpacing: 100,
    datef: '2019-09-01',
    datel: '2019-09-01',
    value: {},
    region: ['陕西省', '西安市', '长安区'],
    customItem: '全部',
    email:'',
    name:'',
    position:''
  },
lookjob:function(e){
 this.data. position=app.globalData.position
wx.navigateTo({
  url: '../jobselect/jobselect',
})
},
  // POST请求
  formSubmit: function(e) {
    this.data.position = app.globalData.position
    wx.request({
      url: 'https://www.ishclass.cn/recruit/recruit/add',
      method: 'post',
      data:{
        usermail:app.globalData.email,
        company:e.detail.value.company,
        job: app.globalData.position,
        salary:e.detail.value.moneymin+'--'+e.detail.value.moneymax,
        workplace: e.detail.value.workplace.join(','),
        recruittime:e.detail.value.firstdata+'--'+e.detail.value.lastdata,
        companymail:e.detail.value.contact,
        partytime:e.detail.value.setion_time,
        partyplace:e.detail.value.setion_address,
      },
      header: {
        'content-type': "application/x-www-form-urlencoded" // 默认值 
      },
      success:function(res){
        if(res.data==true){
          wx.showToast({
            title: '修改成功',
            icon: 'success',
            duration: 1500
          })
          wx.reLaunch({
            url: '../enquire/enquire'
          })
          
        }
        else{
          wx.showToast({
            title: '请重新发布',
            icon: 'fail',
            duration: 1500
          })
        }
      },
    })
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
  //验证邮箱
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
   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
})
