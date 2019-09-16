// components/line-input/line-input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "title": String,
    "items": Array
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
    revalue: function (e) {
      this.data.value = e.detail.value;
    },
    getvalue: function (e) {
      return this.data.value;
    }
  }
})
