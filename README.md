# VUI, Yet another Vue Library

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/e-xode/vui/tree/master.svg?style=svg&circle-token=d8353b320a36159da949b935eba5cbdb41502a60)](https://dl.circleci.com/status-badge/redirect/gh/e-xode/vui/tree/master)

VUI is an open source UI library focusing on providing customizable web components for Vue.js.

## Features
- 3 families of web components: Html (button, input, ...), UI ( card, dropdown, ...) and layout ( grid, responsive ) focusing on functionalities and quick customization.
- Styles and layouts allow easy CSS overriding (no inline definitions, no !importants, ...).
- Compatible with server rendering ( SSR ).
- Integrates fontawesome-free Icons library.
- Provides documentation and tests.

Online documentation and demo are available [here](https://vui.e-xode.net/)

## Get started

Install first dependency:
```sh
npm install -s @e-xode/vui
```

### use vui in your vue app
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
@font-face {
    font-family: 'Font Awesome 5 Brands';
    font-style: normal;
    font-weight: 400;
    src:
    url('@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2') format('woff2'),
    url('@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf') format('truetype')
}
@font-face {
    font-family: 'Font Awesome 5 Regular';
    font-style: normal;
    font-weight: 400;
    src:
    url('@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2') format('woff2'),
    url('@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf') format('truetype')
}
@font-face {
    font-family: 'Font Awesome 5 Solid';
    font-style: normal;
    font-weight: 900;
    src:
    url('@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2') format('woff2'),
    url('@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf') format('truetype')
}
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

### or local with Node / NPM
```sh
npm install
npm run dev
```
( Version of node currently supported: 19.3 )
