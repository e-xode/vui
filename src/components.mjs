import { defineAsyncComponent } from 'vue'
import mitt from 'mitt'

import jsonComponents from '@/components.json'

export default {
    install(app) {
        app.provide('$bus', mitt())
        const modules = import.meta.glob('@/components/**/*.vue', {
            import: 'default'
        })
        for (const _path in modules) {
            const path = _path.substring(2)
            const component = jsonComponents.find((c) => c.path === path)
            if (component) {
                app.component(
                    component.name,
                    defineAsyncComponent(modules[_path])
                )
            }
        }
    }
}
