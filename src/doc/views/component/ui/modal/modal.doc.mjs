export default {
    attrs: [
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.card.doc.tag.loading'
        }
    ],
    examples: [
        {
            markup: `
                <vui-modal
                    id="example-card-1"
                    loading="isLoading"
                />
            `,
            props: {
                id: 'example-modal-1'
            }
        }
    ]
}
