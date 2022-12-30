export default {
    attrs: [
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.card.doc.tag.icon'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.card.doc.tag.loading'
        }
    ],
    examples: [
        {
            markup: `
                <vui-card
                    id="example-card-1"
                    icon="fa-sharp fa-solid fa-file-arrow-up""
                />
            `,
            props: {
                id: 'example-card-2',
                icon: 'fa-sharp fa-solid fa-file-arrow-up',
            },
            body: 'page.component.card.example-1.content',
            header: 'page.component.card.example-1.title',
            footer: 'page.component.card.example-1.footer'
        }
    ]
}
