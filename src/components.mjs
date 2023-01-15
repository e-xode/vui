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
            const component = jsonComponents.find((c) => c.path === path)
            console.log(component)
            if (component) {
                app.component(
                    component.name,
                    defineAsyncComponent(modules[path])
                )
            }
        }
    }
}
