// pages/coursetory/index.js
const util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "test",
    setDialog: {},
    imgArr: [
      'http://cdn.52xuewen.com/activity/static/20181028/card_01.jpg',
      'http://cdn.52xuewen.com/activity/static/20181028/card_02.jpg',
      'http://cdn.52xuewen.com/activity/static/20181028/card_03.jpg',
      'http://cdn.52xuewen.com/activity/static/20181028/card_04.jpg',
      'http://cdn.52xuewen.com/activity/static/20181028/card_05.jpg',
      'http://cdn.52xuewen.com/activity/static/20181028/card_06.jpg',
      'http://cdn.52xuewen.com/activity/static/20181028/card_07.jpg',
      'http://cdn.52xuewen.com/activity/static/20181028/card_08.jpg'
    ]
  },
  //事件处理函数
  register () {
    // this.setData({
    //   setDialog: {
    //     dialogVisible: true, // Boolean 模态框是否隐藏
    //     maskVisible: true, // Boolean 遮罩层是否隐藏
    //     dialogType: 'custom', // String 模态框类型 custom alert
    //     setTit: {
    //       visible: true, // Boolean 标题是否隐藏
    //       title: '企业注册' // String 蓝色背景标题
    //     },
    //     setBtn: {
    //       text: '立即注册', // String 按钮文字
    //     }
    //   }
    // })
    // wx.navigateTo({
    //   url: './personalReg'
    // })
    this.setData({
      setDialog: {
        dialogVisible: true, // Boolean 模态框是否隐藏
        maskVisible: true, // Boolean 遮罩层是否隐藏
        dialogType: 'custom', // String 模态框类型 custom alert
        setTit: {
          visible: true, // Boolean 标题是否隐藏
          title: '企业注册' // String 蓝色背景标题
        },
        setBtn: {
          visible: true, // Boolean 按钮是否隐藏
          text: '立即注册', // String 按钮文字
          bg: '#4cb2eb' // String 按钮颜色
        }
      }
    })
  },
  submit () {
    this.setData({
      setDialog: {
        dialogVisible: false
      }
    })
  },
  /**
   * 提交表单数据并校验
   */
  formSubmit: function (e) {
    var form = e.detail.value
    if (!form.co_name) {
      console.log('公司名称不能为空')
    }
    if (!form.co_contacts) {
      console.log('联系人姓名不能为空')
    }
    if (!form.co_number) {
      console.log('手机号不能为空')
      // return this.$console('手机号不能为空')
    } else if (!form.co_number.match(/^[1][3-9]{1}\d{9}$/)) {
      console.log('手机号码不正确')
    }
    if (!form.code) {
      console.log('验证码不能为空')
    }
    if (!form.card) {
      console.log('卡号不能为空')
    }

  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let checkTimeready = wx.getStorageSync('store_time')
    // if (!checkTimeready) { util.storeTime() }
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