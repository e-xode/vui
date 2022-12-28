import { h, resolveComponent } from 'vue'
import hljs from 'highlight.js'

const demonstrable = {
    methods: {
        nodes (values) {
            return values.map(({ attrs, props, slot, tag, title }) => {
                const markup = Object.keys(attrs).reduce((markup, key) =>
                    `${markup} \n \t ${key}="${attrs[key]}"`
                , '')
                return {
                    title,
                    vnode: h(
                        resolveComponent(tag),
                        props,
                        () =>  slot
                    ),
                    highlighted: hljs.highlight(
                        `<${tag} ${markup} \n />`,
                        { language: 'html' }
                    ).value
                }
            })
        }
    }
}
export {
    demonstrable
}
