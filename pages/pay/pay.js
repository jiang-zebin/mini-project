// pages/pay/pay.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buyList:[],
    district:""
  },
  goToPay(){
    wx.showLoading({
      title: '支付中...',
    })
    setTimeout(function () {
      wx.hideLoading();
      wx.showToast({
        title:"支付成功"
      })
      setTimeout(()=>{
        wx.hideToast();
        wx.switchTab({
          url:"/pages/index/index"
        })
      },1000)
    }, 2000)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:"http://127.0.0.1:3000/loginMini/addbuylist?id="+app.globalData.userId+"&pids="+options.pids,
      success:(res)=>{
        this.setData({
          buyList:res.data,
          district:options.district
        })
      }
    })
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