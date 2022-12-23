import langs from '@/components/form/translate/index.mjs'
import { locale } from '@/composables/index.mjs'

export default {
    name: 'VuiList',
    setup() {
        locale(langs)
        return {}
    },
    props: {
        items: {
            type: Array,
            required: true
        },
        itemLabel: {
            type: String,
            required: true
        },
        itemValue: {
            type: String,
            required: true
        },
        title: {
            type: String
        }
    },
    mounted() {
    },
    data() {
        return {
            selected: {}
        }
    },
    computed: {
    },
    methods: {
        onClick (item) {
            this.selected = item
            this.$emit('set', item)
            console.log(this.selected)
        }
    },
    components: {
    }
}
