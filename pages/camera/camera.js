
const app = getApp()
Page({
  data: {
  },
  onLoad:function(){
    wx.request({
      url: 'https://www.wyt.cloud/wx_auth/camera',
      method: "POST",//指定请求方式，默认get
      header: { "Cookie": app.globalData.cookie },
      success: function (res) {
        app.globalData.url = res.data.url
        app.globalData.get_url = true
      }
    })
  },
  copyTBL: function() {
    if (app.globalData.get_url && app.globalData.url) {
      wx.setClipboardData({
        data: app.globalData.url,
        success: function (res) {
          // self.setData({copyTip:true}),
          wx.showModal({
            title: '提示',
            content: '复制成功',
          })
        }
      });
    } else {
      wx.showModal({
        title: '提示',
        content: '权限不足',
      })
    }
  }
})