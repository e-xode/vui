import {
    createRouter,
    createWebHistory
} from 'vue-router'

import jsonComponents from '@/components.json'
const modules = import.meta.glob('@/doc/views/component/**/*.vue', { eager: true })

const capitalize = (name) => {
    return name
        .replace(/(^|[\s-])\S/g, (s) => s.toUpperCase())
        .replace(/-/g, '')
}
const history = createWebHistory()
const routes = [
    {
        component: () => import(
            '@/doc/layouts/default/default.vue'
        ),
        name: 'LayoutDefault',
        path: '/',
        children: [
            {
                component: () => import(
                    '@/doc/views/component/component.vue'
                ),
                name: 'ViewComponent',
                path: 'component',
                children: jsonComponents
                    .filter((page) => page.doc)
                    .map((component) => {
                        const name = capitalize(component.doc.name)
                        const key = Object.keys(modules).find((key) =>
                            modules[key].default.name === name
                        )
                        return {
                            component: modules[key].default,
                            path: component.name,
                            name: component.doc.name
                        }
                    })
            },
            {
                component: () => import(
                    '@/doc/views/start/start.vue'
                ),
                name: 'ViewStart',
                path: 'start'
            },
            {
                component: () => import(
                    '@/doc/views/index/index.vue'
                ),
                name: 'ViewIndex',
                path: ''
            }
        ]
    }
]
const router = createRouter({
    history,
    routes
})
export {
    routes,
    router
}
