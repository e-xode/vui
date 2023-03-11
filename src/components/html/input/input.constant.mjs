const props = {
    disabled: {
        type: Boolean
    },
    placeholder: {
        default: null,
        types: [
            Boolean,
            String,
            Number,
            null
        ]
    },
    type: {
        type: String,
        required: true
    },
    modelValue: {
        types: [
            Boolean,
            String,
            Number,
            null
        ]
    },
    value: {
        types: [
            Boolean,
            String,
            Number,
            null
        ]
    }
}

export {
    props
}
