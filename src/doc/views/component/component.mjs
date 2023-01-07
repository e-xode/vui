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
            const { components, $route } = this
            const item = components.find(({ doc }) => doc.name === $route.name)
            return item
                ? item
                : {}
        },
        components () {
            return components
        }
    },
    methods: {
    },
    components: {
    }
}
