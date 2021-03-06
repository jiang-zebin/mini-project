// pages/product-search/product-search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heroList:[],
    skinList:[]
  },
  searchProduct(e){
    wx.request({
      url:"http://127.0.0.1:3000/loginMini/pname?pname="+e.detail.value,
      success:(res)=>{
        var hero=[];
        var skin=[];
        for(var i = 0;i<res.data.length;i++){
          if(res.data[i].type=="hero"){
            hero=hero.concat(res.data[i])
          }else{
            skin=skin.concat(res.data[i])
          }
        }
        this.setData({
          heroList:hero,
          skinList:skin
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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