// pages/main/main.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },
  onLock: function () {
    wx.request({
      url: 'https://www.wyt.cloud/wx_auth/condition',
      method: "POST",//指定请求方式，默认get
      data: { "condition": "on" },
      success: function (res) {
        if (res.info == "success") {
          wx.showToast({
            title: '成功',
            icon: 'succes',
            duration: 1000,
            mask: true
          })
        } else {
          wx.showToast({
            title: '权限不足',
            icon: 'fail',
            duration: 1000,
            mask: true
          })
        }
      }
    });
  },

  offLock: function () {
    wx.request({
      url: 'https://www.wyt.cloud/wx_auth/condition',
      method: "POST",//指定请求方式，默认get
      data: { "condition": "off" },
      success: function (res) {
        if (res.info == "success") {
          wx.showToast({
            title: '成功',
            icon: 'succes',
            duration: 1000,
            mask: true
          })
        } else {
          wx.showToast({
            title: '权限不足',
            icon: 'fail',
            duration: 1000,
            mask: true
          })
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
})


