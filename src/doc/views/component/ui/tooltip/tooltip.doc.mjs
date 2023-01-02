export default {
    attrs: [
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.tooltip.doc.tooltip.icon'
        }
    ],
    examples: [
        {
            markup: `
                <vui-tooltip
                    id="example-tooltip-1"
                    icon="fa-solid fa-message"
                >
                    <span>My content tooltip</span>
                </vui-tooltip>
            `,
            props: {
                id: 'example-tooltip-1',
                icon: 'fa-solid fa-message',
                text: 'page.component.tooltip.text-1'
            }
        },
        {
            markup: `
                <vui-tooltip
                    id="example-tooltip-2",
                    icon="fa-solid fa-message"
                    text="My content tooltip"
                />
            `,
            props: {
                id: 'example-tooltip-2',
                icon: 'fa-solid fa-message',
                text: 'page.component.tooltip.text-2'
            }
        }
    ]
}
