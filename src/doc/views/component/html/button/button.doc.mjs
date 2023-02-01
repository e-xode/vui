export default {
    attrs: [
    ],
    examples: [
        {
            markup: `
                <vui-button
                    :disabled="disabled"
                    type="button"
                >
                    Default button
                </vui-button>
            `,
            props: {
                id: 'vui-button-1',
                icon: 'fa-sharp fa-solid fa-file-arrow-up'
            },
            text: 'page.component.button.default'
        },
        {
            markup: `
                <vui-button
                    icon="fa-sharp fa-solid fa-bug"
                    layout="error",
                    text="Error submit button"
                    type="submit"
                />
            `,
            props: {
                id: 'vui-button-2',
                icon: 'fa-sharp fa-solid fa-bug',
                text: 'page.component.button.error',
                layout: 'error'
            }
        },
        {
            markup: `
                <vui-button
                    icon="fa-sharp fa-solid fa-check"
                    text="submit button"
                    type="submit"
                />
            `,
            props: {
                id: 'vui-button-3',
                icon: 'fa-sharp fa-solid fa-check',
                text: 'page.component.button.success',
                layout: 'success'
            }
        },
        {
            markup: `
                <vui-button
                    icon="fa-sharp fa-solid fa-warning"
                    text="submit button"
                    type="submit"
                />
            `,
            props: {
                id: 'vui-button-4',
                icon: 'fa-sharp fa-solid fa-warning',
                text: 'page.component.button.warning',
                layout: 'warning'
            }
        },
        {
            markup: `
                <vui-button
                    icon="fa-sharp fa-solid fa-file-arrow-up"
                    :disabled="true"
                    text="disabled button"
                    type="submit"
                />
            `,
            props: {
                id: 'vui-button-5',
                icon: 'fa-sharp fa-solid fa-file-arrow-up',
                text: 'page.component.button.disabled',
                disabled: true
            }
        }
    ],
    props: [
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.button.doc.prop.disabled'
        },
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.button.doc.prop.icon'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.button.doc.prop.loading'
        },
        {
            tag: 'type',
            type: 'String',
            text: 'page.component.button.doc.prop.type'
        }
    ],
    slots: [
        {
            name: 'default',
            text: 'page.component.button.doc.slot.default'
        }
    ]
}
