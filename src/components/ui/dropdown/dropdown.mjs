import langs from '@/components/ui/dropdown/translate/index.mjs'
import {
    animated,
    locale,
    uuid
} from '@/composables/index.mjs'

export default {
    name: 'VuiDropdown',
    mixins: [
        animated,
        uuid
    ],
    setup() {
        locale(langs)
        return {}
    },
    props: {
        disabled: {
            type: Boolean
        },
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
    },
    data () {
        return {
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
        onClick () {
            if (!this.disabled) {
                this.onToggle()
                this.$emit('click')
            }
        },
        toggleItem (selected) {
            this.selected = selected
            this.$emit('input', selected)
            this.blur()
        }
    },
    components: {
    }
}
