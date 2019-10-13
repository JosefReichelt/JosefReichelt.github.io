module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "eslint-plugin-import",
        "@typescript-eslint"
    ],
    "rules": {
      'no-console': 0,
      '@typescript-eslint/no-explicit-any': 0,
      'arrow-body-style': 1,
      'import/no-unresolved': [
        2,
        {
          commonjs: true, amd: true
        }
      ],
      'import/named': 2,
      'import/namespace': 2,
      'import/default': 2,
      'import/export': 2,
      'linebreak-style': 0,
      'max-len': 0,
      'import/prefer-default-export': 0,
      'comma-dangle': ['warn', 'only-multiline'],
      'semi': ["error", "always"],
      'no-unused-vars': 1,
    },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }

};