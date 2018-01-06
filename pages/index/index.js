//index.js
//获取应用实例

const constantUtil = require("../../constants/constants.js")
const imgs = require("../../images/imgs.js")
const hasRegister = wx.getStorageSync(constantUtil.key_has_register);
Page({
  data: {
    album_animation_1:{
      index:0,
      animation:{},
    },
    album_animation_2: {
      index: 0,
      animation: {},
    },
    album_animation_3: {
      index: 0,
      animation: {},
    },
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
  bindTapOfNextPic: function(){
  
     var album_1_index = this.data.album_animation_1.index;
     var album_2_index = this.data.album_animation_2.index;
     var album_3_index = this.data.album_animation_3.index;
     
     var album_1_latest_index = this.getAlbumAnimationIndex(album_1_index,1);
     var album_2_latest_index = this.getAlbumAnimationIndex(album_2_index, 1);
     var album_3_latest_index = this.getAlbumAnimationIndex(album_3_index, 1);

     var album_1 = this.getAlbumAnimationType(album_1_index, 1);
     var album_2 = this.getAlbumAnimationType(album_2_index, 1);
     var album_3 = this.getAlbumAnimationType(album_3_index, 1);

     var album_1_ani = this.createAlbumAnimation(album_1)
     var album_2_ani = this.createAlbumAnimation(album_2)
     var album_3_ani = this.createAlbumAnimation(album_3)

     var z_index_1 = album_1_latest_index == 0?3:1;
     var z_index_2 = album_2_latest_index == 0 ?3:1;
     var z_index_3 = album_3_latest_index == 0 ? 3:1;
     this.setData({
       album_animation_1: {index: album_1_latest_index,animation:album_1_ani,z_index:z_index_1},
       album_animation_2: { index: album_2_latest_index, animation: album_2_ani,z_index:z_index_2 },
       album_animation_3: { index: album_3_latest_index, animation: album_3_ani,z_index:z_index_3},
     })
  },
  bindTapOfPreviousPic: function(){
    var album_1_index = this.data.album_animation_1.index;
    var album_2_index = this.data.album_animation_2.index;
    var album_3_index = this.data.album_animation_3.index;

    var album_1_latest_index = this.getAlbumAnimationIndex(album_1_index, -1);
    var album_2_latest_index = this.getAlbumAnimationIndex(album_2_index, -1);
    var album_3_latest_index = this.getAlbumAnimationIndex(album_3_index, -1);

    var album_1 = this.getAlbumAnimationType(album_1_index, -1);
    var album_2 = this.getAlbumAnimationType(album_2_index, -1);
    var album_3 = this.getAlbumAnimationType(album_3_index, -1);

    var album_1_ani = this.createAlbumAnimation(album_1)
    var album_2_ani = this.createAlbumAnimation(album_2)
    var album_3_ani = this.createAlbumAnimation(album_3)

    var z_index_1 = album_1_latest_index == 0 ? 3 : 1;
    var z_index_2 = album_2_latest_index == 0 ? 3 : 1;
    var z_index_3 = album_3_latest_index == 0 ? 3 : 1;
    this.setData({
      album_animation_1: { index: album_1_latest_index, animation: album_1_ani, z_index: z_index_1 },
      album_animation_2: { index: album_2_latest_index, animation: album_2_ani, z_index: z_index_2 },
      album_animation_3: { index: album_3_latest_index, animation: album_3_ani, z_index: z_index_3 },
    })
  },
  onLoad: function () {
    
  },
 
 
  onShow: function (options) {
    var album_1_ani = this.createAlbumAnimation("left")
    var album_3_ani = this.createAlbumAnimation("right")
    this.setData({
      album_animation_1: { index: -1, animation: album_1_ani,z_index:1},
      album_animation_2: { index: 0, animation: {},z_index:2 },
      album_animation_3: { index: 1, animation: album_3_ani,z_index:1},
    })
  },

  createAlbumAnimation: function(position){
    
    var translateX =0;
    var translateZ = 0;
    var rotateY = 0;
    var opacity =0;
    if (position === 'out_right'){
        translateX = -130
        translateZ = 0.8
        rotateY = -45
        opacity = 0
        // 不可见
    }else if(position === 'out_left'){
      translateX = 130
      translateZ = 0.8
      rotateY = 45
      opacity = 0
    } else if(position ===  'right'){
      translateX = 130
      translateZ = 0.8
      rotateY = -45
      opacity = 1
    }else if(position === 'left'){
      translateX = -130
      translateZ = 0.8
      rotateY = 45
      opacity = 1
    }else{
      translateX = 0
      translateZ = 1
      rotateY = 0
      opacity = 1
    }
    var outLeft = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease',
      opacity: opacity,
    })
    outLeft.translateX(translateX).scale(translateZ).rotateY(-rotateY)
    return outLeft.step();
  },
  getAlbumAnimationType: function(currentIndex,direct){
      if(direct == 1){
          if(currentIndex == -1){
            return 'other'
          }else if(currentIndex == 0){
            return 'right'
          }else if (currentIndex == 1){
            return 'out_right'
          }
      }else if(direct == -1){
        if (currentIndex == -1) {
          return 'out_left'
        } else if (currentIndex == 0) {
          return 'left'
        } else if (currentIndex == 1) {
          return 'other'
        }
      }
  },
  getAlbumAnimationIndex: function (currentIndex, direct) {
    if (direct == 1) {
      if (currentIndex == -1) {
        return 0
      } else if (currentIndex == 0) {
        return 1
      } else if (currentIndex == 1) {
        return -1
      }
    } else if (direct == -1) {
      if (currentIndex == -1) {
        return 1
      } else if (currentIndex == 0) {
        return -1
      } else if (currentIndex == 1) {
        return 0
      }
    }
  }
})
