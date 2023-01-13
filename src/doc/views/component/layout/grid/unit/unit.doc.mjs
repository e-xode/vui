export default {
    attrs: [
        {
            tag: 'col',
            type: 'Number',
            text: 'page.component.grid-unit.doc.tag.col'
        }
    ],
    examples: [
        {
            markup: `
                <vui-grid
                    id="example-grid-1"
                    col-md="2"
                    col-sm="1"
                >
                    <vui-grid-unit
                        col="30"
                    >
                        <p>Col 1 content</p>
                    </vui-grid-unit>
                    <vui-grid-unit
                        col="70"
                    >
                        <p>Col 2 content</p>
                    </vui-grid-unit>
                </vui-grid>
            `,
            props: {
                colMd: 2,
                colSm: 1
            },
            gridid: 'vui-grid-1'
        }
    ]
}
