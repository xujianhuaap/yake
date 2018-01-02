// pages/it_detail/it_detail.js
const selectFlag = require("../../pages/product_detail/constants.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selected: 1,
    contents:[
      {title:"全部"},
      {title: "美甲"},
      {title:"美容"},
      {title: "美睫"},
      {title: "按摩" },
      {title: "养生" },
      {title: "纹身"},
      {title: "漂唇"},
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
  clickItem: function(e){
    //  console.log(e)
     if (e != NaN){
       var id = e.currentTarget.id;
       this.setData({
         selected: 1 << id,
       })
       
     }
  }
})