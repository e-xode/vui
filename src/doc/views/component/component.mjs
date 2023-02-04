import {
    translatable
} from '@/composables/index.mjs'

import langs from '@/doc/views/component/translate/index.mjs'
import components from '@/components.json'

export default {
    name: 'ViewComponent',
    created () {
        translatable(langs)
    },
    mounted() {
    },
    data() {
        return {
        }
    },
    computed: {
        component () {
            const { $route } = this
            return components.find(({ doc }) => doc.name === $route.name)
        },
        components () {
            return components
        }
    },
    methods: {
        onRoute(component) {
            const route = component.name === 'ViewStart'
                ? { doc: { name: component.name }}
                : components.find(({ name }) => name === component.name)
            this.$router.push(route.doc)
        }
    }
}
