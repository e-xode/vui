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
        onRoute(name) {
            const route = name === 'ViewStart'
                ? { doc: { name }}
                : components.find(({ name }) => name === name)
            this.$router.push(route.doc)
        }
    }
}
