import components from '@/components.json'

export default {
    name: 'ViewComponent',
    mounted() {
    },
    data() {
        return {
        }
    },
    computed: {
        component () {
            const { components, $route } = this
            const item = components.find(({ doc }) => doc.name === $route.name)
            return item
                ? item
                : {}
        },
        components () {
            return components
        }
    },
    methods: {
    },
    components: {
    }
}
