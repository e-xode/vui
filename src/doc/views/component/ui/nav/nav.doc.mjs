export default {
    examples: [
        {
            markup: `
                <vui-nav
                    :items=[
                        { label: "label 1", value: "value 1" },
                        { label: "label 2", value: "value 2" }
                    ]
                    item-label="label"
                    item-value="value"
                />
            `,
            props: {
                disabled: false,
                id: 'vui-nav-1',
                items: [
                    {
                        label: 'Label 1',
                        value: 'value 1'
                    },
                    {
                        label: 'Label 2',
                        value: 'value 2'
                    }
                ],
                itemLabel: 'label',
                itemValue: 'value'
            },
            title: 'page.component.nav.text-1'
        },
        {
            markup: `
                <vui-nav
                    :items=[
                        { label: "label 1", value: "value 1", route: { name : "routeName" } },
                        { label: "label 2", value: "value 2", route: { name : "routeName" } },
                        { label: "label 3", disabled: true  }
                    ]
                    item-label="label"
                    item-value="value"
                />
            `,
            props: {
                disabled: false,
                id: 'vui-nav-2',
                items: [
                    {
                        label: 'Label 3',
                        value: 'value 3',
                        route: { name: 'ViewIndex' }
                    },
                    {
                        label: 'Label 4',
                        value: 'value 4',
                        route: { name: 'ViewIndex' }
                    },
                    {
                        label: 'Label 5',
                        disabled: true
                    }
                ],
                itemLabel: 'label',
                itemValue: 'value'
            },
            title: 'page.component.nav.text-2'
        }
    ],
    props: [
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.nav.doc.prop.disabled'
        },
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.nav.doc.prop.icon'
        },
        {
            tag: 'item-label',
            type: 'String',
            text: 'page.component.nav.doc.prop.item-label'
        },
        {
            tag: 'item-value',
            type: 'String',
            text: 'page.component.nav.doc.prop.item-value'
        },
        {
            tag: 'items',
            type: 'String',
            text: 'page.component.nav.doc.prop.items'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.nav.doc.prop.loading'
        },
        {
            tag: 'value',
            type: '[Object, Number, String]',
            text: 'page.component.nav.doc.prop.value'
        },
        {
            tag: 'v-model',
            type: '[Object, Number, String]',
            text: 'page.component.nav.doc.prop.v-model'
        }
    ],
    slots: [
        {
            name: 'group-item',
            text: 'page.component.nav.doc.slot.group-item'
        },
        {
            name: 'item',
            text: 'page.component.nav.doc.slot.item'
        },
        {
            name: 'placeholder',
            text: 'page.component.nav.doc.slot.placeholder'
        }
    ]
}
