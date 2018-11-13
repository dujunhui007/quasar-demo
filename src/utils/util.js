import {
  SessionStorage,
  LocalStorage,
  Notify,
  Dialog,
  Platform
} from 'quasar'
import {
  BigNumber
} from 'bignumber.js'
import moment from 'moment'

// confirm compontent
export const confirm = (conf, cancel = () => {}, confirm = () => {}) => {
  Dialog.create({
      title: conf.title || 'Confirm',
      message: conf.message,
      ok: conf.confirm || 'Agree',
      cancel: conf.cancel || 'Disagree'
    })
    .then(() => {
      confirm()
    })
    .catch(() => {
      cancel()
    })
}
export const prompt = (config, cb = () => {}, cbCancel = () => {}) => {
  Dialog.create({
      title: config.title || 'Prompt',
      message: config.message || '',
      prompt: config.prompt,
      cancel: config.cancel || true,
      color: config.color || 'primary'
    })
    .then(data => {
      cb(data)
    })
    .catch(e => {
      cbCancel(e)
    })
}
// toast components
export const toast = (message, timeout = 1500) => {
  const type = 'positive'
  const color = 'positive'
  const position = 'center'
  Notify.create({
    message,
    type,
    color,
    position,
    timeout
  })
}

export const toastError = (message, timeout = 1500) => {
  const type = 'negative'
  const color = 'negative'
  const position = 'center'

  Notify.create({
    message,
    type,
    color,
    position,
    timeout
  })
}

export const toastWarn = (message, timeout = 1500) => {
  const type = 'warning'
  const color = 'warning'
  const position = 'center'
  Notify.create({
    message,
    type,
    color,
    timeout,
    position
  })
}

export const deCompileContent = value => {
  return JSON.parse(value)
}

export const countDown = (timestamp) => {
  moment.locale('zh-cn')
  return moment(timestamp).endOf('hour').fromNow()
}
// server error message translator
export const translateErrMsg = (t, input) => {
  if (typeof input === 'string') {
    input = input.split(':')
    input = input[input.length - 1]
    var translateMap = [{
        error: 'Failed to verify second signature',
        key: 'ERR_TOAST_SECONDKEY_WRONG'
      },
      {
        error: 'Invalid transaction amount',
        key: 'ERR_TOAST_SECONDKEY_WRONG'
      },
      {
        error: 'Asset not exists',
        key: 'ERR_TOAST_ASSET_NOTEXIST'
      },
      {
        error: 'Insufficient balance',
        key: 'ERR_TOAST_ASSET_INSUFFICIENT'
      },
      {
        error: 'Voting limit exceeded. Maximum is 33 votes per transaction',
        key: 'ERR_TOAST_VOTE_LIMIT'
      },
      {
        error: 'Account is locked',
        key: 'ERR_TOAST_ACCOUNT_ALREADY_LOCKED'
      },
      {
        error: 'Invalid recipient',
        key: 'ERR_TOAST_ACCOUNT_INVALID_RECIPIENT'
      },
      {
        error: 'timestamp',
        key: 'ERR_TOAST_ACCOUNT_INVALID_TIMESTAMP'
      },
      {
        error: 'Have no valid shares of correct choice in this marke',
        key: 'ERR_TOAST_CHOICE_NOT_VALID'
      },
      {
        error: 'Already had been settled',
        key: 'ERR_TOAST_CHOICE_ALREADY_SETTLED'
      },
      {
        error: 'Invalid lock height',
        key: 'Invalid lock height'
      }
    ]

    for (var idx = 0; idx < translateMap.length; idx++) {
      if (input.indexOf(translateMap[idx].error) > -1) {
        toastError(t(translateMap[idx].key))
        // console.log(translateMap[idx].chinese);
        return
      }
    }
    toastError(input)
  }
}

export const setLocal = (key, value) => {
  return LocalStorage.set(key, value)
}
export const getLocal = key => {
  return getCache(key)
}

// get storage (session/local) with different device
export const getStorage = () => {
  return isDesktop() ? SessionStorage : LocalStorage
}
// sessionstorage functions
export const setCache = (key, value) => {
  return getStorage().set(key, value)
}
export const getCache = key => {
  return getStorage().get.item(key)
}
export const removeCache = key => {
  return getStorage().remove(key)
}
// get device is desktop or not
export const isDesktop = () => {
  return Platform.is.desktop
}
export const isCordova = () => {
  return Platform.is.cordova
}
export const countMargin = (len, precision, total) => {
  let mathTotal = BigNumber(total * Math.pow(10, precision))
  let mo = Math.log(len).toFixed(precision) * Math.pow(10, precision)
  return Math.floor((mathTotal / mo).toFixed(precision))
}
export const countTotal = (len, precision) => {
  let preMargin = BigNumber(100)
  let mo = Math.log(len)
  return Number(Math.ceil(preMargin * mo).toFixed(0))
}
