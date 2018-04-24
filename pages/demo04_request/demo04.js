// pages/demo04_request/demo04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:1,
    userList:[]
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
  loadData:function(){
    console.log('btn is tapped');
    wx.request({
      url:'http://jsonplaceholder.typicode.com/users',
      success:(result)=>{
        console.log(result.data);
        //将数据保存在data中的userList
        this.setData({
          userList:result.data
        })
      }
    })
  },
  Increment:function(){
    //希望将data中的count做一个自增的操作
    //在页面类中 如何读取data的值
    let nowCount = this.data.count;
    nowCount++;
    //在页面类中 如何修改data的值
    this.setData({
      count:nowCount
    })
  }
})