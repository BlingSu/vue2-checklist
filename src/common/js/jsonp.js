import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  // 如果url小于0 没有问号就添加一个 否则就是&
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  // 返回一个promise
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  // 如果url有 第一个&去掉 否则为空
  return url ? url.substring(1) : ''
}
