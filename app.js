// app.js
App({
  onLaunch() {
    wx.getSystemInfo({
      success: e => {
        // colorui自定义导航栏所需要的全局数据
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;

        // 自定义导航栏搜索框所需要的数据
        let statusBarHeight = e.statusBarHeight; // 状态栏高度
        this.globalData.statusBarHeight = statusBarHeight;
        console.log("statusBarHeight==>" + statusBarHeight);
        let res = wx.getMenuButtonBoundingClientRect(); // 右上角胶囊的坐标数据，单位为px
        console.log(res);
        let {
          top,
          bottom,
          width,
          height,
          left,
          right
        } = res;
        this.globalData.navHeight = (height + statusBarHeight + ((top - statusBarHeight) * 2));
        console.log("navHeight==>" + this.globalData.navHeight);
        this.globalData.searchMarginTop = top; // 上边界位置
        console.log("searchMarginTop==>" + this.globalData.searchMarginTop);
        this.globalData.searchHeight = height; // 与胶囊按钮同高
        console.log("searchHeight==>" + this.globalData.searchHeight);
        this.globalData.searchWidth = right - width; // 胶囊按钮右边坐标 - 胶囊按钮宽度 = 按钮左边可使用宽度
      }
    });
    console.log("本地缓存数据");
    console.log(wx.getStorageSync('userInfo'));
    // 如果已经授权登录过
    if (!wx.getStorageSync("userInfo")) {
      wx.reLaunch({
        url: '/pages/login/login',
      });
      wx.showToast({
        title: '请先登录哦~',
        icon: 'none',
        duration: 2000,
        mask: true
      });
    };
  },
  globalData: {
    login: false
  }
})