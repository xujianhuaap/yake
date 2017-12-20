//index.js
//获取应用实例
const app = getApp()
const constantUtil = require("../../constants/constants.js")
const hasRegister = wx.getStorageSync(constantUtil.key_has_register);
Page({
  data: {
    motto: '自古谁人初见月，明月到底照何人。',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    banner:[
      {img:"../../pages/index/images/banner_1.png"},
      { img: "../../pages/index/images/banner_2.png"},
      { img: "../../pages/index/images/banner_3.png"},
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindTapOfToLogin: function(){
    wx.navigateTo({
      url: '../login/login',
    })
  },
  routerBaseUserInfo: function(){
    if (!wx.getStorageSync(constantUtil.key_has_register)) {
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
 
  onShow: function (options) {
    this.routerBaseUserInfo()
  }
})
