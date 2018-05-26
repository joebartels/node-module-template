/* eslint-env node */

module.exports = {
  root: true,

  // https://eslint.org/docs/user-guide/configuring#specifying-parser
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'script',
    ecmaFeatures: {
      impliedStrict: true
    }
  },


  extends: [
    'eslint:recommended',
    'google'
  ],

  // https://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    'browser': false,
    'node': true,
    'es6': true
  },
  globals: {
    'rootRequire': 'off'
  },
  rules: {
    // single line rules
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'comma-dangle': 'off',
    'camelcase': 'error',
    'max-statements-per-line': ['error', { 'max': 2 }],
    'no-eval': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_.+' }],
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', 'never'],
    'operator-linebreak': ['error', 'after'],
    'prefer-const': 'error',
    'semi-style': ['error', 'last'],

    // multiline rules
    'indent': ['error', 2, {
      'SwitchCase': 1,
      'MemberExpression': 'off'
    }],

    'max-len': ['error', {
      'code': 80,
      'comments': 100,
      'ignoreTemplateLiterals': true,
      'ignoreRegExpLiterals': true,
    }],

    'new-cap': ['error', {
      'capIsNewExceptions': [
        'Fastify'
      ]
    }],

    'quotes': ['error', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],

    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never'
    }],
  },
  'overrides': [
    {
      'files': ['*-test.js'],
      'rules': {
        'max-len': 'off'
      }
    }
  ]
};
