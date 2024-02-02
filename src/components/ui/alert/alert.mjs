import langs from '@/components/ui/alert/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './alert.constant.mjs'

export default {
    name: 'VuiAlert',
    mixins: [
        composable
    ],
    props,
    created () {
        translatable(langs)
    }
}
