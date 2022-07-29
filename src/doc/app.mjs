import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import moment from 'moment'
import mitt from 'mitt'

import vui from '@/components.mjs'
import { router } from '@/doc/router.mjs'
import store from '@/doc/store.mjs'
import { en, fr } from '@/doc/translate/index.mjs'

import App from '@/doc/app.vue'

export default function buildApp() {
    const app = createApp(App)
    const emitter = mitt()
    const i18n = new createI18n({
        locale: 'en',
        messages: { en, fr }
    })

    app.config.globalProperties.emit = (...args) => emitter.emit(...args)
    app.config.globalProperties.on = (...args) => emitter.on(...args)
    app.config.globalProperties.off = (...args) => emitter.off(...args)
    app.config.globalProperties.moment = moment

    app.use(router)
    app.use(store)
    app.use(i18n)
    app.use(vui)

    return { app, router, store }
}
