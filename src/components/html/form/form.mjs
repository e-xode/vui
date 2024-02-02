import langs from '@/components/html/form/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiForm',
    mixins: [
        composable
    ],
    created () {
        translatable(langs)
    }
}
