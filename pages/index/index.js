//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    iv: '',
    encryptedData: '',
    code: '',
  },
  //事件处理函数
  bindViewTap: function () {
    wx.request({
      url: 'https://www.wyt.cloud/wx_auth/wx_login',
      method: "POST",//指定请求方式，默认get
      data: { "code": app.globalData.code, "encrypted_data": app.globalData.encryptedData, "iv": app.globalData.iv },
      success: function (res) {
        console.log(res.data)
      }
    });
    wx.switchTab({
      url: '../main/main'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo && app.globalData.iv && app.globalData.encryptedData && app.globalData.code) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      this.setData({
        iv: app.globalData.iv,
        hasUserInfo: true
      })
      this.setData({
        encryptedData: app.globalData.encryptedData,
        hasUserInfo: true
      })
      this.setData({
        code: app.globalData.code,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        this.setData({
          iv: app.globalData.iv,
          hasUserInfo: true
        })
        this.setData({
          encryptedData: app.globalData.encryptedData,
          hasUserInfo: true
        })
        this.setData({
          code: app.globalData.code,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          app.globalData.code = res.code
          app.globalData.iv = res.iv
          app.globalData.encryptedData = res.encryptedData
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          this.setData({
            iv: app.globalData.iv,
            hasUserInfo: true
          })
          this.setData({
            encryptedData: app.globalData.encryptedData,
            hasUserInfo: true
          })
          this.setData({
            code: app.globalData.code,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
