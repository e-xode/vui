import {
    demonstrable,
    translatable
} from '@/composables/index.mjs'

import langs from '@/doc/views/component/button/translate/index.mjs'
import { examples } from '@/doc/views/component/button/button.examples.mjs'

export default {
    name: 'ViewButton',
    mixins: [demonstrable],
    setup () {
        translatable(langs)
        return {
        }
    },
    mounted () {
    },
    data () {
        return {
            test: 1
        }
    },
    computed: {
        examples () {
            return this.nodes(examples)
        }
    },
    methods: {
        onClick () {
            console.log('onClick1')
            this.test = 2
        },
    },
    components: {
    }
}
