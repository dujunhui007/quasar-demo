/* eslint-disable */
import AschJs from 'asch-js'
import moment from 'moment'
import _ from 'lodash'
import {
  convertFee
} from './asch'
import marked from 'marked'

const filters = {
  t: (value, t) => {
    return t(value)
  },
  fee: (fee, precision = 8) => {
    if (_.isNaN(Number(fee))) return '0'
    return convertFee(fee, precision)
  },
  time: value => {
    return AschJs.utils.format.fullTimestamp(value)
  },
  date: value => {
    return moment(AschJs.utils.format.fullTimestamp(value)).format('YYYY/MM/DD')
  },
  unit: (value, t) => {
    if (value < 10000) {
      return value
    }
    if (value >= 10000 && value < 100000000) {
      return value / 10000 + t('DAPP_MILLION')
    } else {
      return value / 100000000 + t('DAPP_BILLION')
    }
  },
  jparse: (value, arg, isHeight, arg2) => {
    // Transfer to
    // const obj = eval('(' + value + ')')
    if (!value) {
      return 'N/A'
    }
    const obj = JSON.parse(value)
    if (isHeight) {
      return Number(obj[arg]) / 8640
    }
    if (arg2) {
      return obj[arg][arg2]
    }
    return obj[arg]
  },
  height2Date: (endHeight, height, timestamp) => {
    let times = AschJs.utils.format.fullTimestamp(timestamp)
    let diff = (endHeight - height) * 10000
    times = new Date(times).getTime() + diff 
    return moment(times).format('YYYY/MM/DD HH:mm:ss')
  },
  formatTimestamp: (timestamp) => {
    let time = new Date(timestamp).getTime()
    return moment(time).format('YYYY/MM/DD HH:mm:ss')
  }
}
export default filters
