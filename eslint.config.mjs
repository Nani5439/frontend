import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import tanstackQuery from '@tanstack/eslint-plugin-query'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import { defineConfig, globalIgnores } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tailwindcss from 'eslint-plugin-tailwindcss'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default defineConfig([
  globalIgnores(['**/dist', '**/node_modules']),
  {
    extends: fixupConfigRules(
      compat.extends(
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
        'plugin:tailwindcss/recommended',
        'plugin:@tanstack/eslint-plugin-query/recommended'
      )
    ),

    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      react: fixupPluginRules(react),
      'react-hooks': fixupPluginRules(reactHooks),
      import: fixupPluginRules(importPlugin),
      prettier: fixupPluginRules(prettier),
      'simple-import-sort': simpleImportSort,
      tailwindcss: fixupPluginRules(tailwindcss),
      '@tanstack/eslint-plugin-query': fixupPluginRules(tanstackQuery)
    },

    languageOptions: {
      globals: {
        ...globals.browser
      },
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    settings: {
      react: {
        version: '18.2.0'
      },
      // * Settings for eslint-plugin-import
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true
        },
        alias: {
          map: [['@', './src']],
          extensions: ['.ts', '.tsx', '.js', '.jsx']
        }
      }
    },

    rules: {
      // * React rules
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'off',

      // * React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // * TypeScript rules
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',

      // * Import rules
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/no-duplicates': 'error',

      // * Tailwind CSS rules
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'warn',
      'tailwindcss/no-contradicting-classname': 'error'
    }
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],

    languageOptions: {
      parser: tsParser
    },

    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            [String.raw`^react`, String.raw`^@?\w`],
            [String.raw`^(@|components)(/.*|$)`],
            [String.raw`^\u0000`],
            [String.raw`^\.\.(?!/?$)`, String.raw`^\.\./?$`],
            [
              String.raw`^\.\/(?=.*/)(?!/?$)`,
              String.raw`^\.(?!/?$)`,
              String.raw`^\.\/?$`
            ],
            [String.raw`^.+\.?(css)$`]
          ]
        }
      ]
    }
  }
])
