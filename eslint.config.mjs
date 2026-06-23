import globals from 'globals';
import pluginJs from '@eslint/js';
import playwright from 'eslint-plugin-playwright';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.node } },
  {
    ...pluginJs.configs.recommended,
    ...playwright.configs['flat/recommended'],
    rules: {
      ...pluginJs.configs.recommended.rules,
      'no-unused-vars': 'error',
      'max-len': [
        'error',
        {
          code: 80,
          comments: 80,
        },
      ],
      ...playwright.configs['flat/recommended'].rules,
      'playwright/expect-expect': 'off',
    },
    ignores: [
      '**/node_modules/*',
      'playwright.config.js',
      '**/playwright-report/**',
    ],
  },
];
