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
    modelValue: {
        default: undefined,
        types: [
            Boolean,
            Number,
            Object,
            String
        ]
    },
    showIcons: {
        type: Boolean,
        default: true
    },
    value: {
        default: undefined,
        types: [
            Boolean,
            Number,
            Object,
            String
        ]
    }
}

export {
    props
}
