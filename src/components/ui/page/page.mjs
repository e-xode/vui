import langs from '@/components/ui/page/translate/index.mjs'
import {
    animable,
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiPage',
    mixins: [
        animable,
        composable
    ],
    created () {
        translatable(langs)
    },
    methods: {
        outclick ()  {
            this.$bus.emit('outclick', this.componentGroupId)
        }
    }
}
