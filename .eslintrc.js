module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue'
  ],
  rules: {
    'no-console': 'off',
    'prettier/prettier': 'warn'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
