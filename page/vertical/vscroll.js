// page/vertical/vscroll.js
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    toView: 'yellow',
    scrollTop: 100,
    color: ['red', 'yellow', 'blue', 'green', 'gray']
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    console.log(e)
  },
  tap: function (e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.data.toview = 'blue';
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }
})