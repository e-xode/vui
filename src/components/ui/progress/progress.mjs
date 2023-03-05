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
            const value = Math.abs(this.value)
            const min = Math.abs(this.min)
            const max = Math.abs(this.max)
            const percent = Math.round((value / (min + max)) * 100)
            return `${percent}%`
        }
    },
    methods: {
    }
}
