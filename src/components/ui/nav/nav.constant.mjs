const props = {
    disabled: {
        type: Boolean
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
    modelValue: {
        default: undefined,
        type: [
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
        type: [
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
