// pages/second/second.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 113.324520,
    latitude: 23.099994,
    scale:15,
    controls: [
      {
      id: 1,
      iconPath: '../../pages/second/images/ic_zoom_large.png',
      position: {
        left: 0,
        top: 30,
        width: 30,
        height: 30
      },
      clickable: true
    },
    {
      id: 2,
      iconPath: '../../pages/second/images/ic_zoom_small.png',
      position: {
          left: -2,
          top: 60,
          width: 30,
          height: 30
      },
      clickable: true
    }
    ],
    markers: [{
      iconPath: "../../pages/second/images/ic_current_pos.png",
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
      this.mapCtx = wx.createMapContext('map');
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
                  iconPath: "../../pages/second/images/ic_current_pos.png",
                  id: 0,
                  latitude: res.latitude,
                  longitude: res.longitude,
                  width: 40,
                  height: 40,
                  callout:{
                    display: 'BYCLICK',//By
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
  },
  clickControls: function(e){
    var scale = this.data.scale
    if (e.controlId == 2){
        if (scale >3){
          scale--;
        }
    }else if (e.controlId == 1) {
        if (scale <17){
            scale++;
        }
    }
    this.setData({
      scale: scale
    })
  },
})