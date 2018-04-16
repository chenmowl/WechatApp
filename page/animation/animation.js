// page/animation/animation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animData: "",
    flag: false,
    hidden: false,
    showView: true,
    lastX: 0,
    lastY: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    showView: (options.showView == "true" ? true : false)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //实例化一个动画
    this.animation = wx.createAnimation({
      // 动画持续时间，单位ms，默认值 400
      duration: 1000,
      /**
       * http://cubic-bezier.com/#0,0,.58,1  
       *  linear  动画一直较为均匀
       *  ease    从匀速到加速在到匀速
       *  ease-in 缓慢到匀速
       *  ease-in-out 从缓慢到匀速再到缓慢
       * 
       *  http://www.tuicool.com/articles/neqMVr
       *  step-start 动画一开始就跳到 100% 直到动画持续时间结束 一闪而过
       *  step-end   保持 0% 的样式直到动画持续时间结束        一闪而过
       */
      timingFunction: 'ease',
      // 延迟多长时间开始
      delay: 60,
      /**
       * 以什么为基点做动画  效果自己演示
       * left,center right是水平方向取值，对应的百分值为left=0%;center=50%;right=100%
       * top center bottom是垂直方向的取值，其中top=0%;center=50%;bottom=100%
       */
      transformOrigin: 'center center 0',
      success: function (res) {
        console.log(res)
      }
    })
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

  },
  rotate: function (event) {
    //顺时针旋转10度
    //
    this.animation.rotate(180).step()
    this.setData({
      //输出动画
      animData: this.animation.export()
    })
  },
  rotateRevorse: function (event) {
    //顺时针旋转10度
    //
    this.animation.rotate(-180).step()
    this.setData({
      //输出动画
      animData: this.animation.export()
    })
  },
  translateY: function (event) {
    //顺时针旋转10度
    //
    this.data.flag = !this.data.flag
    if (this.data.flag) {
      this.animation.translateY(400).opacity(0.1).step()
    } else {
      this.animation.translateY(0).opacity(1).step()
    }

    this.setData({
      //输出动画
      animData: this.animation.export()
    })
  },
  alpha: function (event) {
    //顺时针旋转10度
    //
    this.animation.opacity(0.5).step()
    this.setData({
      //输出动画
      animData: this.animation.export()
    })
  },

  hidden: function (event) {
    //顺时针旋转10度
    //
    var that = this;
    that.setData({
      // showView: (!that.data.showView),
      hidden: (!that.data.hidden)
    })
  }
})