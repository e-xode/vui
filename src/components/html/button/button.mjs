import langs from '@/components/html/button/translate/index.mjs'
import {
    animable,
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './button.constant.mjs'

export default {
    name: 'VuiButton',
    mixins: [
        animable,
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
    },
    methods: {
        onClick () {
            if (!this.disabled) {
                this.onAnimate()
            }
        }
    }
}
