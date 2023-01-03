export default {
    attrs: [
        {
            tag: 'holder',
            type: 'String',
            text: 'page.component.tooltip.doc.holder.icon'
        },
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.tooltip.doc.tooltip.icon'
        },
        {
            tag: 'position',
            type: 'String',
            text: 'page.component.tooltip.doc.position.icon'
        },
        {
            tag: 'text',
            type: 'String',
            text: 'page.component.tooltip.doc.text.icon'
        },
        {
            tag: 'visible',
            type: 'String',
            text: 'page.component.tooltip.doc.visible.icon'
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
                text: 'page.component.tooltip.button.show-right',
                position: 'right'
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
                text: 'page.component.tooltip.button.show-top',
                position: 'top'
            }
        }
    ]
}
