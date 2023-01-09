export default {
    attrs: [
        {
            tag: 'col-xs',
            type: 'Number',
            text: 'page.component.grid.doc.tag.col-xs'
        },
        {
            tag: 'col-sm',
            type: 'Number',
            text: 'page.component.grid.doc.tag.col-sm'
        },
        {
            tag: 'col-md',
            type: 'Number',
            text: 'page.component.grid.doc.tag.col-md'
        },
        {
            tag: 'col-xl',
            type: 'Number',
            text: 'page.component.grid.doc.tag.col-xl'
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
                    <vui-grid-unit>
                        <p>Col 1 content</p>
                    </vui-grid-unit>
                    <vui-grid-unit>
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
