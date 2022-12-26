import langs from '@/components/html/input/translate/index.mjs'
import { locale } from '@/composables/index.mjs'

export default {
    name: 'VuiInput',
    setup() {
        locale(langs)
        return {}
    },
    props: {
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