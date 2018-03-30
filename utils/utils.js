function requestJson(url, data, method, callback) {
  wx.request({
    url: url,
    data: data,
    method: method,
    header: {
      'content-type': 'application/json'
    },
    success: callback
  })
}

function requestJson(url, data, method, successFun, failFun) {
  wx.request({
    url: url,
    data: data,
    method: method,
    header: {
      'content-type': 'application/json'
    },
    success: successFun,
    fail: failFun
  })
}

module.exports = {
  requestJson: requestJson
}