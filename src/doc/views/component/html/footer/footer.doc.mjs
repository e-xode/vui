export default {
    attrs: [
    ],
    examples: [
        {
            markup: `
                <vui-footer>
                    My footer content
                </vui-footer>
            `,
            props: {
                id: 'example-footer-2',
                icon: 'fa-sharp fa-solid fa-file-arrow-up',
            },
            text: 'page.component.footer.text'
        }
    ],
    props: [
    ],
    slots: [
        {
            name: 'default',
            text: 'page.component.footer.doc.slot.default'
        }
    ]
}
