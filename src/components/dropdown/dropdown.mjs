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
            type: String,
            required: true,
        },
        itemValue: {
            type: String,
            required: true
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
        toggleItem (item) {
            this.selected = item
            this.$emit('set', item)
        }
    },
    components: {
    }
}
