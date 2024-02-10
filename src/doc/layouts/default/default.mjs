import components from '@/components.json'

export default {
    name: 'LayoutDefault',
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
                value: list[key].map((item) => ({
                    ...item,
                    label: item.name,
                    value: item.name,
                    route: item.name
                }))
            }))
        }
    },
    watch: {
        '$route' ({ name }) {
            this.component = null
            const component = components.find(({ doc }) => doc.name === name)
            if (component) {
                this.component = {
                    label: component.name,
                    value: component.name
                }
            }
        }
    }
}
