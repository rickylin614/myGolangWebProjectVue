// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    // 'standard'
    'eslint:recommended' //使用eslint推薦規範
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-console": "off", // 開發中 允許console
    "no-unused-vars": [2, {
      'vars': 'all',
      'args': 'none'
    }],
    "vue/max-attributes-per-line": [2, { //設定每屬性模式
      "singleline": 10, //當行設定屬性 最多十項屬性
      "multiline": { //多行設定屬性 每行一項屬性
        "max": 1,
        "allowFirstLine": false
      }
    }]
  }
}
