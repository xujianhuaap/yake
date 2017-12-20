//index.js
//获取应用实例

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
    
  },
 
 
  onShow: function (options) {
    this.routerBaseUserInfo()
  }
})
