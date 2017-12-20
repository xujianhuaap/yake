// pages/third/third.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    languages:[
      {
        name: 'go',
        image: '../../images/go.jpg',
        content: 'go is the web lanuage'
      },
      {
        name: 'java',
        image: '../../images/java.jpg',
        content: 'java is the web  lanuage'
      },
      {
        name: 'js',
        image: '../../images/js.jpg',
        content: 'js is the web front language'
      },
      {
        name: 'python',
        image: '../../images/python.jpg',
        content: 'python is the web lanuage'
      },
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
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: 'IT Languages',
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
  
  },
  clickItem: function(){
    wx.navigateTo({
      url: '../it_detail/it_detail',
    })
  }
})