import { createRouter, createWebHistory } from 'vue-router'
import jsonComponents from '@/components.json'

const modules = import.meta.glob('@/doc/views/component/**/*.vue')
const history = createWebHistory()
const childrens = []

for (const path in modules) {
    const component = jsonComponents.find(({ doc }) => doc.path === path)
    if (component) {
        childrens.push({
            component: modules[path](),
            path: component.name,
            name: component.doc.name
        })
    }
}

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
                children: childrens
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
