// pages/second/second.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [
      {
        id: 1,
        name: "美甲",
        price: 30,
        discount_price: 20,
        category: 1,
        img: "../../images/nail_01.jpg",
        title: "美甲让生活更美好",

      },
      {
        id: 2,
        name: "美甲",
        price: 30,
        discount_price: 20,
        category: 1,
        img: "../../images/nail_02.jpg",
        title: "美甲灿烂青春",

      },
      {
        id: 3,
        name: "美甲",
        price: 30,
        discount_price: 20,
        category: 1,
        img: "../../images/nail_03.jpg",
        title: "美甲夺目世界",

      },
      {
        id: 4,
        name: "美甲",
        price: 30,
        discount_price: 20,
        category: 1,
        img: "../../images/nail_04.jpg",
        title: "美甲夺目世界",

      }
    ]
  
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
      this.mapCtx = wx.createMapContext('map');
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
})