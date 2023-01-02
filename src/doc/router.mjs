import {
    createRouter,
    createWebHistory
} from 'vue-router'

import components from '@/components.json'

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
                children: components.filter((page) => page.doc)
                    .map((component) => ({
                        component: () => import(/* @vite-ignore */component.doc.path),
                        path: component.name,
                        name: component.doc.name
                    }))
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
