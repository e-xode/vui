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
            String,
            null
        ]
    },
    placeholder: {
        type: [
            Boolean,
            Number,
            String
        ]
    },
    value: {
        default: undefined,
        type: [
            Boolean,
            Object,
            Number,
            String,
            null
        ]
    }
}

export {
    props
}
