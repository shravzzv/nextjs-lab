import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import pluginJest from 'eslint-plugin-jest'
import pluginPlaywright from 'eslint-plugin-playwright'
import pluginCypress from 'eslint-plugin-cypress'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
    plugins: { jest: pluginJest },
    rules: {
      ...pluginJest.configs.recommended.rules,
    },
  },

  {
    files: ['e2e/**/*.{ts,tsx}'],
    extends: [pluginPlaywright.configs['flat/recommended']],
  },

  {
    files: ['cypress/**/*.js'],
    extends: [pluginCypress.configs.recommended],
    rules: {
      'cypress/no-unnecessary-waiting': 'off',
    },
  },

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',

    // ignore jest coverage
    'coverage/**',
  ]),
])

export default eslintConfig

// todo: read https://eslint.org/docs/latest/use/configure/configuration-files to clearly understand this file
