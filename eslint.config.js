import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },

  
  // Le serveur Express (server/) tourne en Node, pas dans le navigateur :
  // `process`, `console`, etc. y sont légitimes. Ce bloc est appliqué après
  // le bloc générique ci-dessus et le remplace pour ces fichiers précis.
  {
    files: ['server/**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  // Fichiers de config Node en CommonJS (`module.exports`), comme
  // tailwind.config.js ou postcss.config.js.
  {
    files: ['tailwind.config.js', 'postcss.config.js'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
      sourceType: 'commonjs',
    },
  },
  // Fichiers de config Node en ESM (`import`/`export default`), comme
  // vite.config.js.
  {
    files: ['vite.config.js'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,
      sourceType: 'module',
    },
  },
])