module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-debugger': 'warn',
    'no-console': 'warn',
    'arrow-parens': [1, 'as-needed'],
    'object-curly-newline': [1, { multiline: true }],
    indent: ['warn', 2, { SwitchCase: 1 }],

    'react/prop-types': 'warn',
    'react/jsx-fragments': 'off'
  }
};
