module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['react'],
  rules: {
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
