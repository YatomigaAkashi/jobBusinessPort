// components/commit-btn/commit-btn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: String,
    form_type: String,
    url: String
  },

  methods: {
    click: function () {
      if (this.data.form_type === "navigateTo") {
        wx.navigateTo({
          url: this.data.url,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      } else if (this.data.form_type === "navigateBack") {
        wx.navigateBack({
          delta: 2
        })
      } else if (this.data.form_type === "reLaunch") {
        wx.reLaunch({
          url: this.data.url,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      }
    }
  }
})
