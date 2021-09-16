module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'semistandard',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:cypress/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/prop-types': 0,
    'no-underscore-dangle': ['error', { allow: ['_self', '_ref'] }],
    'space-before-function-paren': ['error', 'always'],
    camelcase: ['warn', { ignoreDestructuring: true, properties: 'never', allow: ['app_id'] }],
    'quote-props': ['error', 'as-needed', { numbers: true }],
    'no-new-func': 'off',
    'prefer-regex-literals': 'off',
    'multiline-ternary': ['error', 'never'],
    'import/no-named-as-default': 0
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': 'webpack'
  }
};
