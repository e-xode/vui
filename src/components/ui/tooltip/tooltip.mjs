import langs from '@/components/ui/card/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiTooltip',
    mixins: [
        composable
    ],
    props: {
        holder: {
            type: HTMLElement
        },
        icon: {
            type: String
        },
        position: {
            type: String,
            default: 'right'
        },
        text: {
            type: String
        },
        modelValue: {
            type: Boolean
        }
    },
    created () {
        translatable(langs)
        this.$bus.on('outclick', () => {
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
        modelValue (value) {
            if (value) {
                this.setContentPosition()
            }
            this.show = value
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
