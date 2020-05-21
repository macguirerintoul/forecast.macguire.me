module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue',
    "plugin:nuxt/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  rules: {
    'prettier/prettier': 'warn'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
