import pluginJs from '@eslint/js';
import playwright from 'eslint-plugin-playwright';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    rules: {
      'no-console': 'warning',
      arrowParens: ['error', 'always'],
      singleQuote: ['error', 'always'],
      'prefer-arrow-callback': 'error',
    },
    ...playwright.configs['flat/recommended'],
    files: ['tests/**'],
  },
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
