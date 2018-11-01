Page({

  /**
   * 页面的初始数据
   */
  data: {
    heroList:[],
    skinList:[],
    bannerList:[],
    newList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url:"http://127.0.0.1:3000/loginMini/herolist",
      success:(res)=>{
        var row = [];
        var index = Math.floor(Math.random()*(res.data.length-3));
        row=res.data.slice(index,index+3);
        this.setData({
          heroList:row
        })
      }
    })
    wx.request({
      url:"http://127.0.0.1:3000/loginMini/skinlist",
      success:(res)=>{
        var row = [];
        var index = Math.floor(Math.random()*(res.data.length-3));
        row=res.data.slice(index,index+3);
        var news = [];
        news.push(res.data[11])
        news.push(res.data[10])
        news.push(res.data[12])
        this.setData({
          skinList:row,
          newList:news
        })
      }
    })
    wx.request({
      url:"http://127.0.0.1:3000/loginMini/bannerlist",
      success:(res)=>{
        this.setData({
          bannerList:res.data
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