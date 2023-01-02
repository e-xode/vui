import components from "@/components.json"

export default {
    name: 'LayoutDefault',
    mounted() {
    },
    data () {
        return {
            component: null
        }
    },
    computed: {
        components () {
            const list = components.reduce((list, component) => {
                list[component.type].push(component)
                return list
            }, { html: [], layout:[], ui: [] })
            return Object.keys(list).map((key) => ({
                label: this.$t(`component.header.dropdown.components.${key}`),
                path: list[key]
            }))
        }
    },
    methods: {
        home () {
            this.component = null
            this.$router.push({
                name: 'ViewIndex'
            })
        },
        toggleComponent (component) {
            this.component = component
            this.$router.replace({
                name: component.doc?.name
            })
        }
    },
    components: {
    }
}
