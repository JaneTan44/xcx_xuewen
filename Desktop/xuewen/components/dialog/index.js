Component({

  behaviors: [],
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    setDialog: {
      type: Object,
      value: {
        dialogVisible: false, // Boolean 模态框是否隐藏
        maskVisible: true, // Boolean 遮罩层是否隐藏
        dialogType: 'custom', // String 模态框类型 custom fail success
        setTit: {
          visible: false, // Boolean 标题是否隐藏
          title: '标题' // String 蓝色背景标题
        },
        setBtn: {
          visible: true, // Boolean 按钮是否隐藏
          text: '确定', // String 按钮文字
          bg: '#4cb2eb' // String 按钮颜色
        }
      }
    }
  },
  data: {
  }, // 私有数据，可用于模版渲染
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { 
      
     },
    moved: function () { },
    detached: function () { },
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () {
   }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function () { 
    console.log(this.dataset)
   },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { },
  },

  methods: {
    _hideView () {
      this.setData({
        setDialog: {
          dialogVisible: false
        }
      })
    },
    callback () {
      this.triggerEvent('callback')
    }
  }

})