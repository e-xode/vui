import langs from '@/components/ui/list/translate/index.mjs'
import { props } from '@/components/ui/list/list.constant.mjs'

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
    props,
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
