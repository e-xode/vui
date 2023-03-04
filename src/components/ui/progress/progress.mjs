import langs from '@/components/ui/progress/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './progress.constant.mjs'

export default {
    name: 'VuiProgress',
    mixins: [
        composable
    ],
    props,
    created () {
        translatable(langs)
    },
    mounted () {
    },
    data () {
        return {
        }
    },
    computed: {
        width () {
            const full = Math.round(Math.abs(this.max) - Math.abs(this.min))
            const percent =  Math.round(full * Math.abs(this.value) / 100)
            return `${percent}%`
        }
    },
    methods: {
    }
}
