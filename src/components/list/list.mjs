import langs from '@/components/form/translate/index.mjs'
import { locale } from '@/composables/index.mjs'

export default {
    name: 'VuiList',
    setup () {
        locale(langs)
        return {}
    },
    props: {
        items: {
            type: Array,
            required: true
        },
        itemLabel: {
            type: String
        },
        itemValue: {
            type: String
        },
        title: {
            type: String
        },
        value: {
            type: Object
        }
    },
    mounted () {
        if (this.value) {
            this.selected = this.value
        }
    },
    watch: {
        value(selected) {
            this.selected = selected
        }
    },
    data () {
        return {
            selected: {}
        }
    },
    computed: {
    },
    methods: {
        onClick (selected) {
            this.selected = selected
            this.$emit('set', selected)
        }
    },
    components: {
    }
}
