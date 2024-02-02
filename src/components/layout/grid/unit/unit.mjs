import langs from '@/components/layout/grid/unit/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiGridUnit',
    mixins: [
        composable
    ],
    props: {
        col: {
            types: [String, Number]
        }
    },
    created () {
        translatable(langs)
    }
}
