// page/list/list.js
var request = require("../../utils/utils.js").requestJson;
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    this.refreshPage();
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

  },

  refreshPage: function () {
    // 这里把网络请求方法封装了一层
    let url = 'https://park.big2333.com/index.php';
    let data = { m: 'List', a: 'red_list', page: 1, count: 10, userid: 1, name: ''};
    request(url, data,'GET',
      function (res) {
        that.setData({
          list: res.data.list
        });
        // console.log(res.data)
      },
      function(res){
        console.log("fail")
      }
    )
  }

  // refreshPage: function () {
  //   wx.request({
  //     url: 'https://park.big2333.com/index.php',
  //     data: {
  //       m: 'List',
  //       a: 'red_list',
  //       page: 1,
  //       count: 10,
  //       userid: 1,
  //       name: ''
  //     },
  //     method: 'GET',
  //     header: {
  //       'content-type': 'application/json'
  //     },
  //     success: function (res) {
  //       that.setData({
  //         list: res.data.list
  //       })
  //     }
  //   })
  // }


})