export default {
    attrs: [

    ],
    examples: [
        {
            markup: `
                <vui-button
                    id="example-button-1",
                    :disabled="disabled"
                    onClick="onClick"
                    type="button"
                />
            `,
            props: {
                id: 'example-button-1',
                icon: 'fa-sharp fa-solid fa-file-arrow-up',
            },
            slot: `page.component.button.click`,
            title: 'page.component.button.example-1'
        },
        {
            markup: `
                <vui-button
                    id="example-button-1",
                    :disabled="disabled"
                    onClick="onClick"
                    type="submit"
                />
            `,
            props: {
                id: 'example-button-2',
                icon: 'fa-sharp fa-solid fa-file-arrow-up',
            },
            slot: 'page.component.button.click',
            title: 'page.component.button.example-2'
        },
        {
            markup: `
                <vui-button
                    id="example-button-1",
                    :disabled="true"
                    onClick="onClick"
                    type="submit"
                />
            `,
            props: {
                id: 'example-button-3',
                icon: 'fa-sharp fa-solid fa-file-arrow-up',
                disabled: true
            },
            slot: 'page.component.button.not-clickable',
            title: 'page.component.button.example-3'
        }
    ]
}
