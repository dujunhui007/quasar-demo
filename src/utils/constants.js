// model alike
const I18N_OPT = [{
    label: '中文简体',
    value: 'zh'
  },
  {
    label: 'English',
    value: 'en'
  }
]

// const STATE_MAP = {
//   1: 'CHARGE',
//   2: 'WITHDRAW',
//   3: 'TRANSFER',
//   4: 'SETNICK',
//   1000: 'LAUNCH_MARKET',
//   1001: 'DEAL',
//   1002: 'CLEAR_DEAL',
//   1003: 'REVEAL',
//   1004: 'APPEAL',
//   1005: 'VERDICT',
//   1006: 'COMMENT',
//   1007: 'STATE_CHANGE'
// }

const host = {
  development: 'http://47.75.26.200:8192',
  production: 'http://47.75.26.200:8192'
}
// const dappId = {
//   development: '91a9aeeaa6609ebd73afc7c542eec02e7510c23a65d2e1db2840c46f74f67ceb',
//   production: '91a9aeeaa6609ebd73afc7c542eec02e7510c23a65d2e1db2840c46f74f67ceb'
// }

const urls = {
  host,
  // dappId,
  // server: {
  //   development: `${host.development}/api/dapps/${dappId.development}`,
  //   production: `${host.production}/api/dapps/${dappId.production}`
  // },

  mainUserBalanceApi: {
    url: '/api/uia/balances/'
  }
  // 区分 local 与 mainnet 的请求头参数
  // magics: {
  //   development: '5f5b3cf5',
  //   production: '5f5b3cf5'
  // }
}

export {
  I18N_OPT,
  urls
  // MARKET_STATE,
  // SELECTION_MAP,
}
