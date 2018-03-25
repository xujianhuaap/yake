// pages/it_detail/it_detail.js
const selectFlag = require("../../pages/product_list/constants.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    goods: [{
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

      }],
    contents:[
      {
        title: "全部", goods: [{
          id: 1,
          name: "美容",
          price: 30,
          discount_price: 20,
          category: 1,
          img: "../../images/nail_01.jpg",
          title: "全部让生活更美好",

        },
        {
          id: 2,
          name: "美容",
          price: 30,
          discount_price: 20,
          category: 1,
          img: "../../images/nail_02.jpg",
          title: "全部灿烂青春",

        }]},
      {
        title: "美甲", goods: [
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
        ]},
      {
        title: "美容", goods: [{
          id: 1,
          name: "美容",
          price: 30,
          discount_price: 20,
          category: 1,
          img: "../../images/nail_01.jpg",
          title: "美容让生活更美好",

        },
        {
          id: 2,
          name: "美容",
          price: 30,
          discount_price: 20,
          category: 1,
          img: "../../images/nail_02.jpg",
          title: "美容灿烂青春",

        }]},
      {
        title: "美睫", goods: [{
          id: 1,
          name: "美容",
          price: 30,
          discount_price: 20,
          category: 1,
          img: "../../images/nail_01.jpg",
          title: "美睫让生活更美好",

        },
        {
          id: 2,
          name: "美容",
          price: 30,
          discount_price: 20,
          category: 1,
          img: "../../images/nail_02.jpg",
          title: "美睫灿烂青春",

        }]},
      {
        title: "按摩", goods: [{
          id: 1,
          name: "美容",
          price: 30,
          discount_price: 20,
          category: 1,
          img: "../../images/nail_01.jpg",
          title: "按摩让生活更美好",

        },
        {
          id: 2,
          name: "美容",
          price: 30,
          discount_price: 20,
          category: 1,
          img: "../../images/nail_02.jpg",
          title: "按摩灿烂青春",

        }]},
      {
        title: "养生", goods: [{
          id: 1,
          name: "美容",
          price: 30,
          discount_price: 20,
          category: 1,
          img: "../../images/nail_01.jpg",
          title: "养生让生活更美好",

        },
        {
          id: 2,
          name: "美容",
          price: 30,
          discount_price: 20,
          category: 1,
          img: "../../images/nail_02.jpg",
          title: "养生灿烂青春",

        }]},
      {
        title: "纹身", goods: [{
          id: 1,
          name: "美容",
          price: 30,
          discount_price: 20,
          category: 1,
          img: "../../images/nail_01.jpg",
          title: "纹身让生活更美好",

        },
        {
          id: 2,
          name: "美容",
          price: 30,
          discount_price: 20,
          category: 1,
          img: "../../images/nail_02.jpg",
          title: "纹身灿烂青春",

        }]},
      {
        title: "漂唇", goods: [{
          id: 1,
          name: "美容",
          price: 30,
          discount_price: 20,
          category: 1,
          img: "../../images/nail_01.jpg",
          title: "漂唇让生活更美好",

        },
        {
          id: 2,
          name: "美容",
          price: 30,
          discount_price: 20,
          category: 1,
          img: "../../images/nail_02.jpg",
          title: "漂唇灿烂青春",

        }]},
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
     console.log(e)
     if (e != NaN){
       var id = e.currentTarget.id;
       var googs = this.data.contents[id].goods;
       this.setData({
         selected: 1 << id,
         goods:googs,
       })
       
     }
  }
})