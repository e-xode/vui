import langs from '@/components/ui/tag/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './tag.constant.mjs'

export default {
    name: 'VuiTag',
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
    },
    methods: {
    }
}
