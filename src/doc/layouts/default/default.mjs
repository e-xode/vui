import components from '@/components.json'

export default {
    name: 'LayoutDefault',
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
                    value: item.name
                }))
            }))
        }
    },
    methods: {
        toggleComponent ({ doc }) {
            this.$router.push({ name: doc.name  })
        }
    }
}
