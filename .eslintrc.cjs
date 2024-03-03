/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting');
const path = require('node:path');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'object-shorthand': 'off',
    'prettier/prettier': [
      'error',
      {},
      {
        fileInfoOptions: {
          withNodeModules: true
        }
      }
    ],
    'import/no-unresolved': 'off',
    'import/extensions': 'off'
  },
  settings: {
    'import/extensions': ['.ts', '.vue'],
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, './src')}`
    })
  }
};
