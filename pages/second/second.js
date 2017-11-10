// pages/second/second.js
const map = wx.createMapContext('map')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 113.324520,
    latitude: 23.099994,
    controls: [{
      id: 1,
      iconPath: '../../images/ic_third.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    markers: [{
      iconPath: "../../images/ic_third.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }]
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
    wx.getSetting({
      success: res => {
        if (res.authSetting["scope.userLocation"]) {
          wx.getLocation({
            type: 'gcj02',
            success: function (res) {
              that.setData({
                longitude: res.longitude,
                latitude: res.latitude,
                markers: [{
                  iconPath: "../../images/ic_third.png",
                  id: 0,
                  latitude: res.latitude,
                  longitude: res.longitude,
                  width: 50,
                  height: 50,
                  callout:{
                    display: 'ALWAYS',
                    content: "oh",
                    color: "black",
                    bgColor: "yellow",
                    fontSize: 20
                  }
                }],
              })
              console.log("lontitue", res.longitude)
              console.log("latitudfe", res.latitude)
              // wx.openLocation({
              //   latitude: res.latitude,
              //   longitude: res.longitude,
              // })

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
  
  },
  clickMap: function(){
      console.log("longitude","unkonwn")
  }
})