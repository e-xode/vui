import { toRaw, ref, toRef } from 'vue'
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
    setup () {
        translatable(langs)
        return {}
    },
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
        visible: {
            type: Boolean
        }
    },
    watch: {
        holder(element) {
            this.setPosition(element)
        },
        visible(value) {
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
                content: {},
                holder: {}
            },
            show: false
        }
    },
    computed: {
        display () {
            return this.show
                ? 'block'
                : 'hidden'
        },
        left () {
            const { holder } = this.dimension
            switch (this.position) {
                case 'top':
                    return holder.left
                case 'right':
                default:
                    return holder.left + holder.width + 25
            }

        },
        top () {
            const { holder } = this.dimension
            switch (this.position) {
                case 'top':
                    return holder.top - holder.height - 10
                case 'right':
                default:
                    return holder.top + 1
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
