import components from "@/components.json"

export default {
    name: 'LayoutDefault',
    mounted() {
    },
    data() {
        return {
        }
    },
    computed: {
        components () {
            return components
        }
    },
    methods: {
        toggleComponent ({ doc }) {
            this.$router.replace({
                name: doc?.name
            })
        }
    },
    components: {
    }
}
