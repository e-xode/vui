export default {
    attrs: [
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.footer.doc.tag.icon'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.footer.doc.tag.loading'
        }
    ],
    examples: [
        {
            markup: `
                <vui-footer
                    id="example-footer-1"
                    icon="fa-sharp fa-solid fa-file-arrow-up""
                />
            `,
            props: {
                id: 'example-footer-2',
                icon: 'fa-sharp fa-solid fa-file-arrow-up',
            },
            text: 'page.component.footer.example-1.content'
        }
    ]
}
