Page({

  /**
   * 页面的初始数据
   */
  data: {
    taste: ['高级软件工程师', '软件工程师', '软件研发工程师', '需求工程师', '系统架构设计师', '系统分析员', '数据库开发工程师', 'ERP技术/开发应用', '互联网软件工程师', '手机软件开发工程师', '嵌入式软件开发', '移动互联网开发', 'WEB前端开发','语音/视频/图形开发','用户界面（UI)设计','用户体验设计','网页设计/制作/美工','游戏设计/开发','游戏策划','游戏界面设计','系统集成工程师','算法工程师','仿真应用工程师','计算机辅助设计师','网站架构设计师','ios开发工程师','Android开发工程师','Java开发工程师','PHP开发工程师','C语言开发工程师','脚本开发工程师','高级硬件工程师','硬件工程师','嵌入式硬件开发','其他'] 
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
