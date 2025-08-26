// ESLint v9の新しい設定形式（Flat Config）
import js from '@eslint/js';
// import prettier from 'eslint-config-prettier';
// import prettierPlugin from 'eslint-plugin-prettier';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
// import react from 'eslint-plugin-react';
// import reactHooks from 'eslint-plugin-react-hooks';

export default [
  // JavaScript基本設定（ESLint推奨ルールを適用）
  js.configs.recommended,
  
  // TypeScript用の設定
  {
    // 対象ファイルを指定（TypeScriptファイルのみ）
    files: ['**/*.{ts,tsx}'],
    
    // 言語パーサーの設定
    languageOptions: {
      parser: typescriptParser,        // TypeScriptパーサーを使用
      parserOptions: {
        ecmaVersion: 2021,             // ECMAScript 2021の機能を使用
        sourceType: 'module',          // ES Modulesを使用
        ecmaFeatures: {
          jsx: true,                   // JSX構文を有効化
        },
      },
      globals: {
        process: "readonly",
        console: "false",
      },
    },
    
    // 使用するプラグインを登録
    plugins: {
      '@typescript-eslint': typescriptEslint,  // TypeScript用ルール
    //   'prettier': prettierPlugin,              // Prettier統合
    //   'react': react,                          // React用ルール
    //   'react-hooks': reactHooks,               // React Hooks用ルール
    },
    
    // 適用するルールの設定
    rules: {
      // TypeScriptの推奨ルールを適用
      ...typescriptEslint.configs.recommended.rules,
      
      // Prettierのフォーマット違反をエラーとして扱う
    //   'prettier/prettier': 'error',
      
      // 未使用変数をエラー扱い（_で始まる変数は除外）
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      
      // React 17+では不要なルールを無効化
    //   'react/react-in-jsx-scope': 'off',
    //   'react/prop-types': 'off',
      
      // React Hooks関連のルール
    //   'react-hooks/rules-of-hooks': 'error',        // Hooksの呼び出しルールを強制
    //   'react-hooks/exhaustive-deps': 'warn',        // useEffectの依存配列をチェック

        
    },
    
    // React関連の設定
    // settings: {
    //   react: {
    //     version: 'detect',          // Reactバージョンを自動検出
    //     runtime: 'automatic',       // React 17+の新JSX Transformを使用
    //   },
    // },
  },
  
  // Prettier設定（必ず最後に配置してフォーマット競合を回避）
//   prettier,
];