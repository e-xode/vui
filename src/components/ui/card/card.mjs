import langs from '@/components/ui/card/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiCard',
    mixins: [
        composable
    ],
    created () {
        translatable(langs)
    }
}
