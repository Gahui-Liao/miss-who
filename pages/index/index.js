// index.js
// 获取应用实例，可以获取到全局变量数据
const app = getApp()

Page({
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    navHeight: app.globalData.navHeight,
    searchMarginTop: app.globalData.searchMarginTop,
    searchHeight: app.globalData.searchHeight,
    searchWidth: app.globalData.searchWidth,
    tabCur: 0,
    scrollLeft: 0,
    tabNames: [
      "热门",
      "推荐"
    ]
  },
  // 事件处理函数
  publishBindTap() {
    console.log("跳转至发布页面");
    wx.redirectTo({
      url: '../publish/publish'
    })
  },
  mineBindTap() {
    wx.redirectTo({
      url: '../mine/mine',
    })
  },
  tabSelectBindTap(e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },

  detailBIndTap(e) {
    wx.redirectTo({
      url: '../detail/detail',
    })
  },
  onLoad() {
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#000000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    });
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  }
})