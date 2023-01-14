export default {
    attrs: [

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
                        Col 1 content
                    </vui-grid-unit>
                    <vui-grid-unit>
                        Col 2 content
                    </vui-grid-unit>
                </vui-grid>
            `,
            props: {
                colMd: 2,
                colSm: 1
            },
            gridid: 'vui-grid-1'
        }
    ],
    props: [
        {
            tag: 'col-xs',
            type: 'Number',
            text: 'page.component.grid.doc.prop.col-xs'
        },
        {
            tag: 'col-sm',
            type: 'Number',
            text: 'page.component.grid.doc.prop.col-sm'
        },
        {
            tag: 'col-md',
            type: 'Number',
            text: 'page.component.grid.doc.prop.col-md'
        },
        {
            tag: 'col-xl',
            type: 'Number',
            text: 'page.component.grid.doc.prop.col-xl'
        }
    ],
    slots: [
    ]
}
