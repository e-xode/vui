import mitt from 'mitt'
import { defineAsyncComponent } from 'vue'

import jsonComponents from '@/components.json'

export default {
    install(app) {
        app.provide('$bus', mitt())
        const modules = import.meta.glob('@/components/**/*.vue')
        for (const path in modules) {
            const component = jsonComponents.find((c) => c.path === path)
            app.component(
                component.name,
                defineAsyncComponent(modules[path])
            )
        }
    }
}
