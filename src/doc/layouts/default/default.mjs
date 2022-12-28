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
            return components
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
