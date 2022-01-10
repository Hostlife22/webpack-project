module.exports = {
  extends: ['eslint-config-airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-console': 1,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 0,
  },
  env: {
    browser: true,
  },
}
