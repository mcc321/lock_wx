Page({
  data: {
    url: 'https://camera.wyt.cloud/?action=stream',
  },
  copyTBL: function(e) {
    var self = this;
    wx.setClipboardData({
      data: self.data.url,
      success: function (res) {
        // self.setData({copyTip:true}),
        wx.showModal({
          title: '提示',
          content: '复制成功',
          success: function (res) {
            if (res.confirm) {
              console.log('确定')
            } else if (res.cancel) {
              console.log('取消')
            }
          }
        })
      }
    });
  }
})