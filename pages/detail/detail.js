// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:null,
    rmb:'',
    heroList:[],
    skinList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:"http://127.0.0.1:3000/loginMini/detail?pid="+options.pid,
      success:(res)=>{
        this.setData({
          product:res.data[0],
          rmb:(parseInt(res.data[0].price)/100).toFixed(2)
        })
      }
    })
    wx.request({
      url:"http://127.0.0.1:3000/loginMini/tips?hero_type="+options.hero_type,
      success:(res)=>{
        var rowhero = [];
        var rowskin = [];
        for(var i=0;i<res.data.length;i++){
          if(res.data[i].type=="hero"){
            rowhero.push(res.data[i])
          }else{
            rowskin.push(res.data[i])
          }
        }
        this.setData({
          heroList:rowhero,
          skinList:rowskin
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