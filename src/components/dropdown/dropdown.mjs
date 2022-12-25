import langs from '@/components/dropdown/translate/index.mjs'
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
    mounted() {
        this.$bus.on('outclick', () => {
            if (this.open) {
                this.animate()
            }
            this.open = false
        })
    },
    data() {
        return {
            open: false,
            selected: {}
        }
    },
    computed: {
        getValue () {
            return this.selected[this.itemValue]
                ? this.selected[this.itemLabel]
                : this.getPlaceholder
        },
        getPlaceholder () {
            return this.placeholder
                ? this.placeholder
                : this.$t('placeholder')
        }
    },
    methods: {
        toggle () {
            this.open = !this.open
            this.animate()
        },
        toggleItem (selected) {
            this.selected = selected
            this.$emit('set', selected)
        }
    },
    components: {
    }
}
