module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-return-assign': 'off',
  },
};
