export default {
    attrs: [
    ],
    examples: [
        {
            markup: `
                <vui-button
                    @click="isVisible=!isVisible"
                >
                    <vui-tooltip
                        v-model="isVisible"
                        icon="fa-solid fa-message"
                        position="right"
                    >
                        <span>Tooltip right position</span>
                    </vui-tooltip>
                </vui-button>
            `,
            props: {
                id: 'vui-tooltip-1',
                icon: 'fa-solid fa-message',
                text: 'page.component.tooltip.text',
                position: 'right'
            },
            button: 'page.component.tooltip.button.show-right'
        },
        {
            markup: `
                <vui-button
                    @click="isVisible=!isVisible"
                >
                    <vui-tooltip
                        v-model="isVisible"
                        icon="fa-solid fa-message"
                        position="top"
                        text="Tooltip top position"
                    />
            </vui-button>
            `,
            props: {
                id: 'vui-tooltip-2',
                icon: 'fa-solid fa-message',
                text: 'page.component.tooltip.text',
                position: 'top'
            },
            button: 'page.component.tooltip.button.show-top'
        },
        {
            markup: `
                <vui-button
                    @click="isVisible=!isVisible"
                >
                    <vui-tooltip
                        v-model="isVisible"
                        icon="fa-solid fa-message"
                        position="bottom"
                    >
                        <span>Tooltip bottom position</span>
                    </vui-tooltip>
                </vui-button>
            `,
            props: {
                id: 'vui-tooltip-3',
                icon: 'fa-solid fa-message',
                text: 'page.component.tooltip.text',
                position: 'bottom'
            },
            button: 'page.component.tooltip.button.show-bottom'
        },
        {
            markup: `
                <vui-button
                    @click="isVisible=!isVisible"
                >
                    <vui-tooltip
                        v-model="isVisible"
                        icon="fa-solid fa-message"
                        position="left"
                    >
                        <span>Tooltip left position</span>
                    </vui-tooltip>
                </vui-button>
            `,
            props: {
                id: 'vui-tooltip-4',
                icon: 'fa-solid fa-message',
                text: 'page.component.tooltip.text',
                position: 'left'
            },
            button: 'page.component.tooltip.button.show-left'
        }
    ],
    props: [
        {
            tag: 'holder',
            type: 'String',
            text: 'page.component.tooltip.doc.prop.holder'
        },
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.tooltip.doc.prop.icon'
        },
        {
            tag: 'position',
            type: 'String',
            text: 'page.component.tooltip.doc.prop.position'
        },
        {
            tag: 'text',
            type: 'String',
            text: 'page.component.tooltip.doc.prop.text'
        },
        {
            tag: 'v-model',
            type: 'String',
            text: 'page.component.tooltip.doc.prop.v-model'
        }
    ],
    slots: [
        {
            name: 'default',
            text: 'page.component.tooltip.doc.slot.default'
        }
    ]
}
