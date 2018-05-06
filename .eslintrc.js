/* eslint-env node */

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended', 'google'
  ],
  env: {
    'browser': false,
    'node': true,
    'es6': true
  },
  globals: {
    'rootRequire': 'off'
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'space-before-function-paren': ['error', { 'anonymous': 'never', 'named': 'never' }],
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': 'error',
    'indent': ['error', 2, {
      'VariableDeclarator': {
        'var': 2,
        'let': 2,
        'const': 3
      },
      'SwitchCase': 1,
      'MemberExpression': 'off'
    }],
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_.+' }],
    'semi-style': ['error', 'last'],
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'max-statements-per-line': ['error', { 'max': 2 }],
    'operator-linebreak': ['error', 'after'],
    'new-cap': ['error', {
      'capIsNewExceptions': [
        'Fastify'
      ]
    }],
    'comma-dangle': 'off',
    'camelcase': 'error',
    'no-eval': 'error',
    'one-var': 'off'
  }
};
