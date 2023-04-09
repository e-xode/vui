import langs from '@/components/ui/card/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './tooltip.constant.mjs'

export default {
    name: 'VuiTooltip',
    mixins: [
        composable
    ],
    props,
    created () {
        translatable(langs)
        if (this.hasModelValue) {
            this.show = this.modelValue
        } else if (this.hasValue) {
            this.show = this.value
        }
        this.$bus.on('outclick', () => {
            this.$emit('update:value', false)
            this.$emit('update:modelValue', false)
            this.show = false
        })
    },
    watch: {
        holder: {
            handler(element) {
                this.setPosition(element)
            },
            deep: true
        },
        modelValue (show) {
            if (show) {
                this.setContentPosition()
            }
            this.show = show
        },
        value (show) {
            if (show) {
                this.setContentPosition()
            }
            this.show = show
        }
    },
    mounted () {
        this.setPosition(this.holder)
    },
    data () {
        return {
            dimension: {
                content: {
                },
                holder: {
                }
            },
            show: false
        }
    },
    computed: {
        display () {
            return this.show
                ? 'block'
                : 'none'
        },
        left () {
            const { content, holder } = this.dimension
            switch (this.position) {
                case 'left':
                    return holder.left - (content.width + 15)
                case 'bottom':
                case 'top': {
                    const diff = content.width - holder.width
                    return holder.left - (diff / 2)
                }
                case 'right':
                default:
                    return holder.right + 15
            }

        },
        top () {
            const { content, holder } = this.dimension
            switch (this.position) {
                case 'bottom':
                    return holder.top + holder.height + 15
                case 'top':
                    return holder.top - content.height - 15
                case 'left':
                case 'right':
                default:
                    return holder.top - (holder.height / 2)
            }
        }
    },
    methods: {
        setContentPosition () {
            this.$nextTick(() => {
                const { tooltip } = this.$refs
                this.dimension.content = tooltip.getBoundingClientRect()
            })
        },
        setPosition (element) {
            if (element) {
                this.dimension.holder = element.getBoundingClientRect()
            }
        }
    }
}
