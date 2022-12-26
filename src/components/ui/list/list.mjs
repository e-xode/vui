import langs from '@/components/ui/list/translate/index.mjs'
import {
    locale,
    uuid
} from '@/composables/index.mjs'

export default {
    name: 'VuiList',
    mixins: [
        uuid
    ],
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
            types: [
                Number,
                Object,
                String
            ]
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
            selected: null
        }
    },
    computed: {
    },
    methods: {
        isSelected (item) {
            const { itemValue, selected } = this
            return itemValue && selected
                ? selected[itemValue] === item[itemValue]
                : selected === item
        },
        onClick (selected) {
            this.selected = selected
            this.$emit('input', selected)
        }
    },
    components: {
    }
}
