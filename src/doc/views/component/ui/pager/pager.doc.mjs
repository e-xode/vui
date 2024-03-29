export default {
    attrs: [
    ],
    examples: [
        {
            markup: `
                <vui-pager
                    id="vui-page-1"
                    :count="9"
                    :size="25"
                />
            `,
            props: {
                id: 'example-pager-1',
                count: 9,
                size: 25
            },
            modelValue: 1
        },
        {
            markup: `
                <vui-pager
                    id="vui-page-2"
                    :count="100"
                    :size="10"
                    :value="5"
                />
            `,
            props: {
                id: 'example-pager-2',
                count: 100,
                size: 10
            },
            modelValue: 5
        },
        {
            markup: `
                <vui-pager
                    flat
                    id="vui-page-3"
                    :count="100"
                    :size="10"
                    :value="1"
                />
            `,
            props: {
                flat: true,
                id: 'example-pager-3',
                count: 100,
                size: 10
            },
            modelValue: 1
        }
    ],
    props: [
        {
            tag: 'count',
            type: 'Number',
            text: 'page.component.pager.doc.prop.count'
        },
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.pager.doc.prop.disabled'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.pager.doc.prop.loading'
        },
        {
            tag: 'size',
            type: 'Number',
            text: 'page.component.pager.doc.prop.loading'
        },
        {
            tag: 'value',
            type: '[Object, Number, String]',
            text: 'page.component.pager.doc.prop.value'
        },
        {
            tag: 'v-model',
            type: '[Object, Number, String]',
            text: 'page.component.pager.doc.prop.v-model'
        }
    ],
    slots: [
        {
            name: 'first',
            text: 'page.component.pager.doc.slot.first'
        },
        {
            name: 'previous',
            text: 'page.component.pager.doc.slot.previous'
        },
        {
            name: 'next',
            text: 'page.component.pager.doc.slot.next'
        },
        {
            name: 'last',
            text: 'page.component.pager.doc.slot.last'
        }
    ]
}
