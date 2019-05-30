module.exports = {
  extends: ['airbnb', 'prettier'],
  rules: {
    'func-names': 'off',
    'prettier/prettier': 'error',
    singleQuote: true
  },
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  settings: {}
}
