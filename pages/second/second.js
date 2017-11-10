// pages/second/second.js
const map = wx.createMapContext('map')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 113.324520,
    latitude: 23.099994,
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
    var that = this;
    wx.showToast({
      title: '' + that.data.longitude,
    })
    wx.getSetting({
      success: res => {
        if (res.authSetting["scope.userLocation"]) {
          wx.getLocation({
            type: 'wgs84',
            success: function (res) {
              that.setData({
                longitude: res.longitude,
                latitude: res.latitude
              })
              console.log("lontitue", res.longitude)
              console.log("latitudfe", res.latitude)
              wx.openLocation({
                latitude: res.latitude,
                longitude: res.longitude,
              })
            },
          })
        } else {
          wx.authorize({
            scope: 'scope.userLocation',
            fail() {
              wx.openSetting({

              })
            }
          })
        }
      }
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