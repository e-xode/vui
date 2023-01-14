export default {
    attrs: [
    ],
    examples: [
        {
            markup: `
                <vui-modal
                    id="vui-modal-1"
                    :onClose="onClose"
                    :showHeaderClose="true"
                    :showFooterClose="true"
                    :visible="isVisible"
                >
                    <template #header>
                        My modal title
                    </template>
                    <template #body>
                        My modal content
                    </template>
                    <template #footer>
                        My modal footer
                    </template>
                </vui-modal>
            `,
            props: {
                id: 'vui-modal-1',
                showHeaderClose: true,
                showFooterClose: true
            }
        }
    ],
    props: [
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.modal.doc.prop.loading'
        },
        {
            tag: 'onClose',
            type: 'Boolean',
            text: 'page.component.modal.doc.prop.onClose'
        },
        {
            tag: 'onOpen',
            type: 'Boolean',
            text: 'page.component.modal.doc.prop.onOpen'
        },
        {
            tag: 'showFooter',
            type: 'Boolean',
            text: 'page.component.modal.doc.prop.showFooter'
        },
        {
            tag: 'showFooterClose',
            type: 'Boolean',
            text: 'page.component.modal.doc.prop.showFooterClose'
        },
        {
            tag: 'showHeader',
            type: 'Boolean',
            text: 'page.component.modal.doc.prop.showHeader'
        },
        {
            tag: 'showHeaderClose',
            type: 'Boolean',
            text: 'page.component.modal.doc.prop.showHeaderClose'
        },
        {
            tag: 'visible',
            type: 'Boolean',
            text: 'page.component.modal.doc.prop.visible'
        }
    ],
    slots: [
        {
            name: '#header',
            text: 'page.component.modal.doc.slot.header'
        },
        {
            name: '#body',
            text: 'page.component.modal.doc.slot.body'
        },
        {
            name: '#footer',
            text: 'page.component.modal.doc.slot.footer'
        }
    ]
}
