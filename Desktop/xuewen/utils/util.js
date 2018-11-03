const CryptoJS = require('../static/js/aes.js')
const config = require('../config/index.js')
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
//加密
const aesEncrypt = (plaintext) => {
  try {
    var encrypted = CryptoJS.AES.encrypt(
      plaintext,
      CryptoJS.enc.Utf8.parse(config.AesConf.key), {
        mode: CryptoJS.mode.CBC,
        iv: CryptoJS.enc.Utf8.parse(config.AesConf.iv),
        // PKCS#7 with 8-byte block size
        padding: CryptoJS.pad.Pkcs7
      }
    )
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64)
  } catch (error) {
    console.log('Encryption exception in encrypt(): ' + error.message)
  }
}
// 解密
const aesDecrypt = (ciphertext) => {
  try {
    var decrypted = CryptoJS.AES.decrypt(
      ciphertext,
      CryptoJS.enc.Utf8.parse(config.AesConf.key), {
        mode: CryptoJS.mode.CBC,
        iv: CryptoJS.enc.Utf8.parse(config.AesConf.iv),
        // PKCS#7 with 8-byte block size
        padding: CryptoJS.pad.Pkcs7
      }
    )
    return decrypted.toString(CryptoJS.enc.Utf8)
  } catch (error) {
    console.log('Encryption exception in decrypt(): ' + error.message)
  }
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const ran = (m) => {
  m = m > 13 ? 13 : m
  var num = new Date().getTime()
  return num.toString().substring(13 - m)
}

const extend = (destination, source) => {
  for (var property in source) {
    destination[property] = source[property]
  }
  return destination
}

const storeTime = () => {
  console.log(1)
  let obj = {
    url: '/api/time',
    data: {},
    header: getHeader({
      token: wx.getStorageSync('token')
    }),
    method: 'get',
    success: (res) => {
      const prt = Date.parse(new Date())
      const pre = parseInt(res.data.ms) - parseInt(prt)
      wx.setStorageSync('store_time', pre)
    }
  }
  http(obj)
}

const getHeader = o => {
  let headerAess = {
    'content-type': 'application/x-www-form-urlencoded;charset = UTF-8;',
    'sign': '',
    'type': 'ios',
    'did': ran(9),
    'os': '1.0.0',
    'model': '',
    'time': '',
    'token': ''
  }
  let _Dr = Date.parse(new Date())
  let _Ds = wx.getStorageSync('store_time')
  let pre = parseInt(_Dr) + parseInt(_Ds)
  headerAess.type = !o.type ? headerAess.type : o.type
  headerAess.did = o.did ? o.did : ran(18)
  let sign = {
    type: headerAess.type,
    did: headerAess.did,
    time: pre.toString()
  }
  let obj = {
    time: sign.time,
    token: o !== undefined ? o.token : '',
    sign: aesEncrypt(JSON.stringify(sign))
  }
  let arr = extend(headerAess, obj)
  return arr
}

const http = obj => {
  wx.request({
    url: config.apiDomain + obj.url,
    data: obj.data,
    header: obj.header,
    method: obj.method,
    success(res) {
      obj.success(res.data)
    },
    fail(err) {
      console.log('complete:' + err)
    },
    complete(res) {
      console.log('complete:' + res)
    }
  })
}

module.exports = {
  formatTime: formatTime,
  getHeader: getHeader,
  http: http,
  storeTime: storeTime
}