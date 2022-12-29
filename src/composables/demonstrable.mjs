import { h } from 'vue'
import hljs from 'highlight.js'

const demonstrable = {
    methods: {
        render (component, values) {
            return values.examples.map(example => ({
                ...example,
                component: h(component, example.props),
                highlighted: hljs.highlight(
                    example.markup,
                    { language: 'html' }
                ).value
            }))
        }
    }
}
export {
    demonstrable
}
