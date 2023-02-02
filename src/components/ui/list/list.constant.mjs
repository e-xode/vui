const props = {
    disabled: {
        type: Boolean
    },
    keyword: {
        type: String,
        default: null
    },
    items: {
        type: Array,
        required: true
    },
    itemLabel: {
        type: String
    },
    itemValue: {
        type: String
    },
    selectable: {
        type: Boolean
    },
    title: {
        type: String
    },
    value: {
        types: [
            Number,
            Object,
            String
        ]
    }
}
export {
    props
}
