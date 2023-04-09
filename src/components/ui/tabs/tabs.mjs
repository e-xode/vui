import langs from '@/components/ui/tabs/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './tabs.constant.mjs'

export default {
    name: 'VuiTabs',
    mixins: [
        composable
    ],
    props,
    created () {
        translatable(langs)
        if (this.hasModelValue) {
            this.active = this.modelValue
        } else if (this.hasValue) {
            this.active = this.value
        } else if (this.items?.length) {
            const tab = this.items[0]
            this.active = tab[this.itemValue]
        }
    },
    watch: {
        modelValue (tab) {
            this.active = tab
        },
        value (tab) {
            this.active = tab
        }
    },
    data () {
        return {
            active: null
        }
    },
    computed: {
        tabs () {
            return this.items.map((item) => ({
                ...item,
                $$id: this.newId()
            }))
        }
    },
    methods: {
        toggle (tab) {
            this.active = tab
            this.$emit('update:value', this.active)
            this.$emit('update:modelValue', this.active)
        }
    }
}
