// pages/addressSelector/addressSelector.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "items": [{ value: '北京市' },
    { value: '天津市' },
    { value: '上海市' },
    { value: '重庆市' },
    { value: '河北省' },
    { value: '山西省' },
    { value: '辽宁省' },
    { value: '吉林省' },
    { value: '黑龙江省' },
    { value: '江苏省' },
    { value: '浙江省' },
    { value: '安徽省' },
    { value: '福建省' },
    { value: '江西省' },
    { value: '山东省' },
    { value: '河南省' },
    { value: '湖北省' },
    { value: '湖南省' },
    { value: '广东省' },
    { value: '海南省' },
    { value: '四川省' },
    { value: '贵州省' },
    { value: '云南省' },
    { value: '陕西省' },
    { value: '甘肃省' },
    { value: '青海省' },
    { value: '台湾省' },
    { value: '内蒙古自治区' },
    { value: '广西壮族自治区' },
    { value: '西藏自治区' },
    { value: '宁夏回族自治区' },
    { value: '新疆维吾尔自治区' },
    { value: '香港特别行政区' },
    { value: '澳门特别行政区' }]
  },

  jump: function (e) {
    wx.navigateBack({
      delta: 1,
      url: ''
    })
  },

  myevent: function (e) {
    if (e.detail.value.value == "其他" && !e.detail.value.checked) {
      this.setData({
        "pop": true
      })
    }
    app.globalData.checkValue = e.detail.value.value; // 注意结束清除
  },
})