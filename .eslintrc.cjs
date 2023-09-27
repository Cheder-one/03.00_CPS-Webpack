// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true, // Разрешает использование глобальных переменных и объектов, которые обычно представлены в браузерной среде.
    es2021: true // Включает поддержку синтаксиса ECMAScript 2021.
  },
  extends: [
    "eslint:recommended", // Использует рекомендованные правила ESLint.
    "plugin:prettier/recommended", // Интегрирует Prettier с ESLint.
    "plugin:import/errors", // Проверяет правила импорта.
    "plugin:import/warnings" // Предупреждения о правилах импорта.
  ],
  ignorePatterns: ["node_modules", "dist", "build"], // Игнорирует файлы и директории при проверке.
  parserOptions: {
    ecmaVersion: "latest", // Использует последний стандарт ECMAScript.
    sourceType: "module" // Поддерживает синтаксис модулей.
  },
  plugins: ["prettier", "import"], // Подключает плагины Prettier и import для дополнительной функциональности.
  rules: {
    "import/no-unresolved": [2, { caseSensitive: false }], // Правило для проверки неразрешенных импортов.
    "import/order": [
      2,
      {
        groups: [
          // Определяет порядок импорта в файлах.
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "always" // Добавляет новые строки между группами импортов.
      }
    ],
    indent: ["error", 2], // Устанавливает правило отступа с размером 2 пробела.
    "linebreak-style": [0, "windows"], // Игнорирует стиль переноса строк (в данном случае, Windows).
    "prettier/prettier": "error", // Вызывает ошибку, если код не соответствует настройкам Prettier.
    // quotes: ['error', 'single'], // Ожидает использование одинарных кавычек для строк.
    // semi: ['error', 'never'] // Ожидает отсутствие точек с запятой в конце выражений.
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    semi: [2, "always"]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js"], // Указывает расширение файлов, которые можно импортировать.
        moduleDirectory: ["node_modules", "src/"] // Пути для поиска модулей при импорте.
      }
    }
  }
};

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "prettier"
//   ],
//   overrides: [],
//   parser: "babel-eslint",
//   parserOptions: {
//     ecmaVersion: "latest",
//     sourceType: "module"
//   },
//   plugins: ["react", "prettier"],
//   rules: {
//     "prettier/prettier": "error",
//     indent: "off",
//     semi: [2, "always"],
//     "space-before-function-paren": [
//       "error",
//       { anonymous: "always", named: "never" }
//     ],
//     quotes: ["error", "double", { allowTemplateLiterals: true }]
//   }
// };
