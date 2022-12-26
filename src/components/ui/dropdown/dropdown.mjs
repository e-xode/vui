import langs from '@/components/ui/dropdown/translate/index.mjs'
import {
    animated,
    locale
} from '@/composables/index.mjs'

export default {
    name: 'VuiDropdown',
    mixins: [animated],
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
            type: String
        },
        itemValue: {
            type: String
        },
        placeholder: {
            type: String
        }
    },
    mounted () {
        this.$bus.on('outclick', () => {
            if (this.open) {
                this.animate()
            }
            this.open = false
        })
    },
    data () {
        return {
            open: false,
            selected: null
        }
    },
    computed: {
        placeholderValue () {
            const { itemLabel, selected } = this
            if (selected) {
                return itemLabel
                    ? selected[itemLabel]
                    : selected
            }
            return this.placeholderLabel
        },
        placeholderLabel () {
            return this.placeholder
                ? this.placeholder
                : this.$t('placeholder')
        }
    },
    methods: {
        onToggle () {
            this.open = !this.open
            this.animate()
        },
        toggleItem (selected) {
            this.selected = selected
            this.$emit('input', selected)
        }
    },
    components: {
    }
}
