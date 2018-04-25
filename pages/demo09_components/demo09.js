// pages/demo09_components/demo09.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList:[
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
    ],
    nowPercent:0,
    timer:null
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
  // control progress change
  startDownload: function(){
    let tmpTimer = setInterval(()=>{
      let percent = this.data.nowPercent;
      percent+=10;
      console.log(percent);
      if(percent>100){
        clearInterval(this.data.timer)
      };
      this.setData({
        nowPercent:percent
      })
    },100);
    this.setData({
      timer:tmpTimer
    })
  },
  getInfo:function(result){
    //将getInfo方法，绑定给bindgetuserinfo
    console.log(result);
  }
})