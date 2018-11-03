// pages/activity/giftcard/personalReg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 提交表单数据并校验
   */
  formSubmit: function (e) {
    var form = e.detail.value
    if (!form.phone) {
      console.log('手机号不能为空')
      // return this.$console('手机号不能为空')
    } else if (!form.phone.match(/^[1][3-9]{1}\d{9}$/)) {
      console.log('手机号码不正确')
    }
    if (!form.code) {
      console.log('验证码不能为空')
    }
    if (!form.password) {
      console.log('密码不能为空')
    }
    if (!form.password) {
      console.log('确认密码不能为空')
    } else if (!surePwd) {
      console.log('确认密码不能为空')
    } else if (form.password !== this.surePwd) {
      console.log('两次密码不一致')
    }
    
  },
  formReset: function () {
    console.log('form发生了reset事件')
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

  }
})