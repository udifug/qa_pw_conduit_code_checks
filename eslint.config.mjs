import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  {
    ignores: [
      '**/node_modules/*',
      'playwright.config.js',
      '**/playwright-report/**',
    ],
  },
  { languageOptions: { globals: globals.node } },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      js,
      playwright,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...playwright.configs['flat/recommended'].rules,
      'no-unused-vars': ['error', { argsIgnorePattern: '^page$' }],
      'playwright/expect-expect': 'off',
      ...eslintConfigPrettier.rules,
    },
  },
]);
