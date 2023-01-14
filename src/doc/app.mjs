import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import vui from '@/components.mjs'
import { router } from '@/doc/router.mjs'
import { en, fr } from '@/doc/translate/index.mjs'

import App from '@/doc/app.vue'

export default function buildApp() {
    const app = createApp(App)
    app.use(router)
    app.use(vui)
    app.use(new createI18n({
        legacy: false,
        locale: 'en',
        messages: { en, fr }
    }))
    return { app, router }
}
