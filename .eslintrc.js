module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: ['prettier'],
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'prettier/vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'prettier/prettier': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
