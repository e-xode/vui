import { defineAsyncComponent } from 'vue'
import mitt from 'mitt'

import jsonComponents from '@/components.json'

export default {
    install(app) {
        app.provide('$bus', mitt())
        const modules = import.meta.glob('@/components/**/*.vue', {
            import: 'default'
        })
        for (const path in modules) {
            const { name } = jsonComponents.find((c) => c.path === path)
            app.component(
                name,
                defineAsyncComponent(modules[path])
            )
        }
    }
}
