import langs from '@/components/ui/modal/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiModal',
    mixins: [
        composable
    ],
    setup() {
        translatable(langs)
        return {}
    },
    props: {
        loading: {
            type: Boolean
        },
        onClose: {
            type: Function
        },
        onOpen: {
            type: Function
        },
        showFooter: {
            type: Boolean
        },
        showFooterClose: {
            type: Boolean
        },
        showHeader: {
            type: Boolean
        },
        showHeaderClose: {
            type: Boolean
        },
        title: {
            type: String
        },
        visible: {
            type: Boolean
        }
    },
    mounted() {
    },
    data() {
        return {
        }
    },
    computed: {
        isHeaderVisible () {
            return !!this.$slots.header ||
                this.showHeader ||
                this.showHeaderClose
        },
        isFooterVisible () {
            return !!this.$slots.footer ||
                this.showFooter ||
                this.showFooterClose
        }
    },
    methods: {
    }
}
