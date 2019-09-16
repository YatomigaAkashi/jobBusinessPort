// components/line-check/line-check.js
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
        let newData = this.properties.items.map(currentValue => {
          if (currentValue.value === options.mark.item.value) {
            this.triggerEvent('myevent', { 'value': currentValue }, { bubbles: true });
            if (currentValue.checked == true) {
              currentValue.checked = false;
            } else {
              currentValue.checked = true;
            }
          }
          return currentValue;
        });
        this.setData({
          "items": newData
        })
    },

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
