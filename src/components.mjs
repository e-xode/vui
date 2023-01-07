import mitt from 'mitt'
import { defineComponent } from 'vue'

export default {
    install(app) {
        app.provide('$bus', mitt())
        const modules = import.meta.glob('@/components/**/*.vue', { eager: true })
        Object.keys(modules).forEach((key) => {
            const component = modules[key].default
            app.component(
                component.name,
                defineComponent(component)
            )
        })
    }
}
