// pages/cart/cart.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    district:["艾欧尼亚","祖安","战争学院","雷瑟守备"],
    index:0,
    cartlist:[],
    checkAll:false,
    priceAll:0,
    rmbAll:0,
    count:0
  },
  getCartList(){
    wx.request({
      url:"http://127.0.0.1:3000/loginMini/getcart?id="+app.globalData.userId,
      success:(res)=>{
        for(var i=0;i<res.data.length;i++){
          res.data[i].checked=false;
        }
        this.setData({
          cartlist:res.data
        })
      }
    })
  },
  //选择大区
  districtChange:function(e){
    this.setData({
      index:e.detail.value
    })
  },
  //购物车列表项被选中时触发
  selectOne:function(e){
    var index=e.target.dataset.id;
    this.data.cartlist[index].checked=!this.data.cartlist[index].checked;
    if(this.data.cartlist[index].checked){
      this.data.priceAll+=parseInt(this.data.cartlist[index].price);
      this.data.rmbAll=parseInt(this.data.rmbAll)+parseInt(this.data.cartlist[index].rmb);
      this.data.count+=1;
    }else{
      this.data.priceAll-=parseInt(this.data.cartlist[index].price);
      this.data.rmbAll=parseInt(this.data.rmbAll)-parseInt(this.data.cartlist[index].rmb);
      this.data.count-=1;
    }
    var sum=0;
    for(var i=0;i<this.data.cartlist.length;i++){
      sum+=parseInt(this.data.cartlist[i].price);
    }
    if(this.data.priceAll==sum){
      this.data.checkAll=true;
    }else{
      this.data.checkAll=false;
    }
    this.setData({
      cartlist:this.data.cartlist,
      checkAll:this.data.checkAll,
      priceAll:this.data.priceAll,
      rmbAll:this.data.rmbAll.toFixed(2),
      count:this.data.count
    });
  },
  //全选打勾、计算金额
  selectAll:function(){
    var sum=0;
    if(this.data.checkAll==false){
      for(var i=0;i<this.data.cartlist.length;i++){
        sum+=parseInt(this.data.cartlist[i].price);
        this.data.cartlist[i].checked=true;
        this.data.priceAll=parseInt(sum);
        this.data.rmbAll=(parseInt(sum)/100).toFixed(2);
      }
      this.data.count=this.data.cartlist.length;
    }else{
      for(var i=0;i<this.data.cartlist.length;i++){
        this.data.cartlist[i].checked=false;
      }
      this.data.priceAll=0;
      this.data.rmbAll=0;
      this.data.count=0;
    }
    this.setData({
      cartlist:this.data.cartlist,
      checkAll:!this.data.checkAll,
      priceAll:this.data.priceAll,
      rmbAll:this.data.rmbAll,
      count:this.data.count
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCartList()
    
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
    this.getCartList()
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