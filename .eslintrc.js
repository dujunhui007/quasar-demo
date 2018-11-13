module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['standard'],
  // required to lint *.vue files
  plugins: ['html', 'import'],
  globals: {
    cordova: true,
    DEV: true,
    PROD: true,
    __THEME: true
  },
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    // "comma-dangle": ["error", "never"],
    'indent': 0,
    'arrow-parens': 0,
    'one-var': 0,
    'import/first': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-alert': "error",
    'no-console': "error",
    // 'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  }
}
