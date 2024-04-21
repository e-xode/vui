
# Vui, Another Vuejs U.I Library

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![CircleCI](https://dl.circleci.com/status-badge/img/gh/e-xode/vui/tree/master.svg?style=svg&circle-token=d8353b320a36159da949b935eba5cbdb41502a60)](https://dl.circleci.com/status-badge/redirect/gh/e-xode/vui/tree/master) [![Coverage Status](https://coveralls.io/repos/github/e-xode/vui/badge.svg?branch=master)](https://coveralls.io/github/e-xode/vui?branch=master) ![NPM Version](https://img.shields.io/npm/v/%40e-xode%2Fvui?color=green)

  VUI is an open source UI library providing customizable web components for Vue.js.

## Features

- 3 types of web components: Html, UI, and layout, written in a way to provide simple implementation and easy customization. **24 components are available** in the current release.
- Styles and layouts allow easy CSS overriding (no inline definitions, no messy !importants, ...).
- Compatible with server rendering ( [SSR](https://vuejs.org/guide/scaling-up/ssr.html) ).
- Integrates fontawesome-free Icons library.
- Provides documentation and tests.

Online documentation and live demo are available [here](https://vui.e-xode.net/)

Package and releases are available on [NPM](https://www.npmjs.com/package/@e-xode/vui)

## Get started

Install first the library:

```sh
npm  install -s  @e-xode/vui
```

### use vui in your vue app

In your Vue application:

```javascript
import { createApp } from  'vue'
import { createI18n } from  'vue-i18n'
import App from  './App.vue'
import vui from  '@e-xode/vui'

const main =  createApp(App)
main.use(vui)
main.use(new  createI18n({
    legacy: false,
    locale: 'en',
    messages: { en: [] }
}))
```

Notes:

- The current version of VUI works only with vue-i18n and option **legacy = false** (translations are components isolated)
- Version of node currently supported: 21

### load vui style

```scss
@import  "@e-xode/vui/dist/style.css";
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

## Run & develop vui sources

```sh
copy  .env_sample  .env
```

Optional: edit .env file content and update values according to your config

### with docker

```sh
docker-compose  up
```

### or local with Node / NPM

```sh
npm  install
npm  run  dev
```
