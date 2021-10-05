# trixCode-ver2# Проект ///


### _used technology_

![HTML5](https://img.icons8.com/color/50/000000/html-5--v1.png) | ![CSS3](https://img.icons8.com/color/48/000000/css3.png) | ![JS](https://img.icons8.com/color/48/000000/javascript--v1.png) | ![JS](https://img.icons8.com/color/48/000000/nodejs.png) | ![WebPack](https://img.icons8.com/color/48/000000/webpack.png)




## Запуск

1. Установить зависимости:
```bash
  # or npm i
  yarn
```

2. Запустить dev-сервер:
```bash
  # or npm run dev
  yarn dev
```
Сервер, запущенный на 3030 порту(default), должен автоматически открыться в браузере. Если вам нужно поменять порт, сделайте это в package.json, в секции `scripts` => `dev`

## Тесты
Для тестирования используется фреймворк `jest`

Для запуска тестов существуют 2 команды: `yarn test` для запуска тестов в watch-режиме и `yarn test:ci` для запуска тестов в CI

## Сборка production-билда

1. Установить зависимости:
```bash
  # or npm i
  yarn
```

2. Запустить сборку:
```bash
  # or npm run build
  yarn build
```

3. После этого собранная статика будет находиться в папке `dist`
