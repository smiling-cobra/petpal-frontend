module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:svelte/recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
  },
  rules: {},
};
