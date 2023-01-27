module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-danger': 0,
    'no-return-assign': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    camelcase: 0,
  },
};
