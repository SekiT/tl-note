module.exports = {
  extends: 'eslint-config-airbnb-base',
  env: {
    browser: true,
  },
  settings: {
    // Resolve aliased imports
    'import/resolver': {
      alias: [
        ['@', './src'],
      ],
    },
  },
  rules: {
    // We use devDependencies in rollup-config, which is not included in eslint-config-airbnb-base
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['rollup-config.js'],
      optionalDependencies: false,
    }],
  },
};
