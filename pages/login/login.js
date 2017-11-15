1// pages/login/login.js

const constantsUtils = require('../../constants/constants.js');


Page({
  /**
   * 页面的初始数据
   */
  data: {
   title: '用户登录',
  },
  bindTapOfToChinesePic: function () {
    // wx.request({
    //   url: "https://baidu.com",
    // })
    // wx.redirectTo({
    //   url: 'https://baidu.com',
    // })
    wx.request({
      url: "https://news.baidu.com/",
      header: {
      },
      data: {
        
      },
      method: "get",
      succes: function(res){
        console.log("login",res)
      }
    })
    wx.setStorageSync(constantsUtils.key_has_register, true)
    wx.redirectTo({
      url: '../chinese_pic/chinese_pic',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: this.data.title,
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
    wx.showToast({
      title: 'this is login',
      icon: 'success',
      duration: 400,
    })
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