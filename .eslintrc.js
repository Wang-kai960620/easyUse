module.exports = {
  // 设定当前目录为eslint根目录
  root: true,
  // 设定eslint的env
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", 'prettier'],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    // 工程里面用了最新react-jsx模式 所以要加这个
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
  },
  rules: {
    'react/display-name': 'off',
    'no-console': 'warn',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
