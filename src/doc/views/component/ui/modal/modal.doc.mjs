export default {
    attrs: [
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.modal.doc.tag.loading'
        },
        {
            tag: 'onClose',
            type: 'Boolean',
            text: 'page.component.modal.doc.tag.onClose'
        },
        {
            tag: 'onOpen',
            type: 'Boolean',
            text: 'page.component.modal.doc.tag.onOpen'
        },
        {
            tag: 'showFooter',
            type: 'Boolean',
            text: 'page.component.modal.doc.tag.showFooter'
        },
        {
            tag: 'showFooterClose',
            type: 'Boolean',
            text: 'page.component.modal.doc.tag.showFooterClose'
        },
        {
            tag: 'showHeader',
            type: 'Boolean',
            text: 'page.component.modal.doc.tag.showHeader'
        },
        {
            tag: 'showHeaderClose',
            type: 'Boolean',
            text: 'page.component.modal.doc.tag.showHeaderClose'
        },
        {
            tag: 'visible',
            type: 'Boolean',
            text: 'page.component.modal.doc.tag.visible'
        }
    ],
    examples: [
        {
            markup: `
                <vui-modal
                    id="example-modal-1"
                    loading="isLoading"
                    :onClose="onClose"
                    :showHeaderClose="true"
                    :showFooterClose="true"
                    :visible="isVisible"
                >
                <p>My modal content</p>
                </vui-modal>
            `,
            props: {
                id: 'example-modal-1',
                showHeaderClose: true,
                showFooterClose: true
            }
        }
    ]
}
