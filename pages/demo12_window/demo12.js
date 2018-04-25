// pages/demo12_window/demo12.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
  },
  showMyToast:function(){
    wx.showToast({
      title: '添加购物车成功',
      duration: 1500
    })
  },
  showMyLoading:function(){
    wx.showLoading({
      title: '正在加载中',
      duration:2000
    })
  },
  showMyActionSheet:function(){
    wx.showActionSheet({
      itemList: ['edit','share','cancel'],
      success:function(result){
        console.log(result);
      },
      fail:function(result){
        console.log("fail"+result);
      }
    })
  }
})