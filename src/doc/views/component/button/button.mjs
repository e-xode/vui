import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import VuiButton from '@/components/html/button/button.vue'
import langs from '@/doc/views/component/button/translate/index.mjs'
import doc from '@/doc/views/component/button/button.doc.mjs'

export default {
    name: 'ViewButton',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {
        }
    },
    mounted () {
        this.buttons = doc.examples.map(({ props }) => ({
            id: props.id
        }))
    },
    data () {
        return {
            buttons: []
        }
    },
    computed: {
        examples () {
            return this.render(VuiButton, doc)
        }
    },
    methods: {
        isLoading (id) {
            const button = this.buttons.find((button) => button.id === id )
            return button.loading
        },
        onClick (id) {
            const { buttons } = this
            this.buttons = buttons.map((button) => {
                return button.id === id
                    ? { ...button, loading: !button.loading }
                    : button
            })
        },
    },
    components: {
    }
}
