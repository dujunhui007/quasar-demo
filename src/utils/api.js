import axios from './axiosWrap'
import {
  urls
} from './constants'
// import {
//   createInTransfer
// } from '../utils/asch'

const json2url = json => {
  var arr = []
  var str = ''
  for (var i in json) {
    str = i + '=' + json[i]
    arr.push(str)
  }
  return arr.join('&')
}

const fetch = (url, data, method, postHeaders) => {
  // TODO test api
  url = url.url
  for (let k in data) {
    if (url.indexOf(':' + k) !== -1) {
      url = url.replace(':' + k, data[k])
      delete data[k]
    }
  }

  // let realUrl = urls.server.caos + url
  let realUrl = urls.server[process.env.NODE_ENV] + url
  let type = method.toLowerCase()
  let res = {}
  if (type === 'get') {
    res = axios.get(realUrl + '?' + json2url(data))
  } else if (type === 'post') {
    res = axios.post(realUrl, data, postHeaders)
  } else if (type === 'put') {
    res = axios.put(realUrl, data, postHeaders)
  }
  return res
}

const api = {}

api.getAccount = params => {
  return fetch(urls.userApi, params, 'get')
}

// api.deposit = params => {
//   return createInTransfer(urls.dappId[process.env.NODE_ENV], 'koumei.KMC', params.amount, params.secret, params.secondPassword || '')
// }

export default api
