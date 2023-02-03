import {
    translatable
} from '@/composables/index.mjs'

import langs from '@/doc/views/start/translate/index.mjs'
import components from '@/components.json'

export default {
    name: 'ViewStart',
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
        components () {
            return components.reduce((array, component) => {
                const index = array.findIndex((item) => item.label === component.type)
                if (index === -1) {
                    array.push({
                        label: component.type,
                        value: [component]
                    })
                } else {
                    array[index].value.push(component)
                }
                return array
            }, [])
        }
    },
    methods: {
    }
}
