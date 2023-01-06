# VUI, Yet another Vue Library

[![e-xode](https://circleci.com/gh/e-xode/v-ui/tree/master.svg?style=svg&circle-token=cdf12a2f57f64449cce76bf10cf7d0e768e686c9)](https://circleci.com/gh/e-xode/v-ui/?branch=master&circle-token=cdf12a2f57f64449cce76bf10cf7d0e768e686c9)

VUI is an open Vue library that focus to provide easy and quick implementation for developpers.

## Features
- Native ehanced html components: button, table, form, input, header, footer, ...
- UI and layout components: dropdown, list, modal, card, page, tooltip, grid, ...
- Integrates fontawesome-free Icons library
- Documentation and unit tests

Online documentation and demo are available [here](https://vui.e-xode.net/)

## Get started

Install first dependency:
```sh
npm install -s v-ui
```

In your Vue application:
```javascript
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import vui from 'vui'

const main = createApp(App)
main.use(vui)
main.use(new createI18n({
    legacy: false,
    locale: 'en',
    messages: { en: [] }
}))
```

Note: The current version of VUI works only with vue-i18n and option legacy = false (translations are components isolated)

## Develop and customize vui sources
```sh
copy .env_sample .env
```
Optional: Edit .env file and update values according to your config

### Run with docker
```sh
docker-compose up
```

### Run local Node / NPM
```sh
npm install
npm run dev
```
( Version of node currenlty supported: 19.3 )
