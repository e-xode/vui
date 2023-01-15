# VUI, Yet another Vue Library

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/e-xode/vui/tree/master.svg?style=svg&circle-token=d8353b320a36159da949b935eba5cbdb41502a60)](https://dl.circleci.com/status-badge/redirect/gh/e-xode/vui/tree/master)

VUI is an open Vue library that focus to quickly implements and customize rich web components for Vue.js.

## Features
- Provides web components with minimum functionalities and easy customization
- 3 components types: Html (button, input, table, ...), U.I ( card, dropdown, modal, ...) and layout (vui-grid, vui-grid-item)
- Styles and layouts allow CSS overrides (no inline definitions, no !importants, ...)
- Integrates fontawesome-free Icons library
- Provided with documentation and unit tests

Online documentation and demo are available [here](https://vui.e-xode.net/)

## Get started

Install first dependency:
```sh
npm install -s @e-xode/vui
```

### setup vui in your vue app
In your Vue application:
```javascript
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import vui from '@e-xode/vui'

const main = createApp(App)
main.use(vui)
main.use(new createI18n({
    legacy: false,
    locale: 'en',
    messages: { en: [] }
}))
```

### load vui style
```scss
@import "@e-xode/vui/dist/style.css";
```

### load @fontawesome icons
```scss
@import "@fortawesome/fontawesome-free/css/all.css";
```

Note: The current version of VUI works only with vue-i18n and option legacy = false (translations are components isolated)

## Run & develop vui sources
```sh
copy .env_sample .env
```
Optional: Edit .env file and update values according to your config

### with docker
```sh
docker-compose up
```

### local Node / NPM
```sh
npm install
npm run dev
```
( Version of node currently supported: 19.3 )
