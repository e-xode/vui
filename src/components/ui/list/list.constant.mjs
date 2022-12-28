const props = {
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
    placeholder: {
        type: String
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
