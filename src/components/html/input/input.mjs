import langs from '@/components/html/input/translate/index.mjs'
import {
    locale,
    uuid
} from '@/composables/index.mjs'

export default {
    name: 'VuiInput',
    mixins: [
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
        placeholder: {
            type: String,
            default: null
        },
        type: {
            type: String,
            required: true
        },
        modelValue: {
            type: [String, Number, null],
            required: true,
        }
    },
    mounted() {
    },
    data() {
        return {
        }
    },
    computed: {
        placeholderValue () {
            return this.placeholder
                ? this.placeholder
                : this.$t('component.input.placeholder')
        }
    },
    methods: {
        onInput ($e) {
            const { value } = $e.target
            this.$emit('update:modelValue', value)
        }
    },
    components: {
    }
}
