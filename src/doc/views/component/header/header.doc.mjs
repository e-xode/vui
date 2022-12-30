export default {
    attrs: [
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.header.doc.tag.icon'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.header.doc.tag.loading'
        }
    ],
    examples: [
        {
            markup: `
                <vui-header
                    id="example-header-1"
                    icon="fa-sharp fa-solid fa-file-arrow-up""
                />
            `,
            props: {
                id: 'example-header-2',
                icon: 'fa-sharp fa-solid fa-file-arrow-up',
            },
            text: 'page.component.header.example-1.content'
        }
    ]
}
