import langs from '@/components/html/table/translate/index.mjs'
import {
    animable,
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiTable',
    mixins: [
        animable,
        composable
    ],
    props: {
        disabled: {
            type: Boolean
        },
        headers: {
            type: Array
        },
        itemLabel: {
            type: String,
            default: 'label'
        },
        itemValue: {
            type: String,
            default: 'value'
        },
        items: {
            type: Array,
            required: true
        }
    },
    created () {
        translatable(langs)
    },
    data () {
        return {
        }
    },
    computed: {
        rows () {
            return this.items.map((item) => ({
                ...item,
                $$id: this.newId()
            }))
        }
    },
    methods: {
    }
}
