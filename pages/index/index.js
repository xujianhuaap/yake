//index.js
//获取应用实例

const constantUtil = require("../../constants/constants.js")
const imgs = require("../../images/imgs.js")
const hasRegister = wx.getStorageSync(constantUtil.key_has_register);
Page({
  data: {
    motto: '雅客打造轻奢美型第一品牌',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    banner:[
      {img: "../../images/nail_01.jpg"},
      { img: "../../images/nail_02.jpg"},
      { img: "../../images/nail_03.jpg"},
    ],
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../product_detail/product_detail'
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
