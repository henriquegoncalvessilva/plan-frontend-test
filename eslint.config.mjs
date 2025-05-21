import { defineConfig, globalIgnores } from 'eslint/config'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import react from 'eslint-plugin-react'
import importHelpers from 'eslint-plugin-import-helpers'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  {
    extends: compat.extends(
      'next/core-web-vitals',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'eslint:recommended',
    ),

    plugins: {
      '@typescript-eslint': typescriptEslint,
      react,
      'import-helpers': importHelpers,
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },

    rules: {
      indent: ['error', 2, { SwitchCase: 1 }],
      'prettier/prettier': 'error',
      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
        },
      ],

      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],

      semi: ['error', 'never'],
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/display-name': 'off',
      'react/prop-types': 'off',

      'import-helpers/order-imports': [
        'error',
        {
          newlinesBetween: 'always',
          groups: [
            '/^react/',
            'module',
            '/^@/',
            ['parent', 'sibling', 'index'],
          ],

          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],

      '@typescript-eslint/no-empty-interface': [
        'error',
        {
          allowSingleExtends: true,
        },
      ],
    },
  },
  globalIgnores([
    'node_modules',
    '.next/',
    'public/',
    '.vscode/',
    '.prettierrc.js',
    'eslint.config.mjs',
  ]),
])
