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
            this.triggerEvent('myevent', { 'value': currentValue }, { bubbles: true });
            currentValue.checked = "true";
          }
          return currentValue;
        });
        this.setData({
          "items": newData
        })
      }
    },

    // 显示数据
    onshow: function (value, e) {
      let newData = this.properties.items.map(currentValue => {
        if (currentValue.value === value) {
          currentValue.show = e;
        }
        return currentValue;
      });
      this.setData({
        "items": newData
      })
    }
  }
})
