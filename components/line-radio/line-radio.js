// components/reradio/line-radio.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "title": String,
    "items": Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 触摸点击触发选中改变
    click: function (options) {
      if (options.mark.checked !== "true") {
        let newData = this.properties.items.map(currentValue => {
          currentValue.checked = "";
          if (currentValue.value === options.mark.item.value) {
            currentValue.checked = "true";
          }
          return currentValue;
        });
        this.setData({
          "items": newData
        })
      }
    }
  }
})
