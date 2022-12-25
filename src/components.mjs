import mitt from 'mitt'
import { defineAsyncComponent  as component } from 'vue'
import components from '@/components.json'

export default {
    install(app) {
        app.config.globalProperties.$bus = mitt()
        components.forEach(({ name, path }) => {
            app.component(
                name,
                component(() => import(/* @vite-ignore */path))
            )
        })
    }
}
