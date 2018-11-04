// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'',
    selectHero:'All',
    selectPrice:'',
    heroList:[]
  },
  changeType(e){
    if(this.data.type==e.target.dataset.type){
      var type=''
    }else{
      var type=e.target.dataset.type
    }
    this.setData({
      type:type
    })
  },
  selectHero(e){
    this.setData({
      selectHero:e.target.dataset.hero
    })
    this.getList()
  },
  selectPrice(e){
    this.setData({
      selectPrice:e.target.dataset.price
    })
    this.getList();
  },
  getList(){
    wx.request({
      url:"http://127.0.0.1:3000/hero/type?hero_type="+this.data.selectHero+"&price="+this.data.selectPrice,
      success:(res)=>{
        this.setData({
          heroList:res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
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