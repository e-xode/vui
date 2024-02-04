const props = {
    disabled: {
        type: Boolean
    },
    modelValue: {
        default: undefined,
        type: [
            Boolean,
            String,
            Number,
            null
        ]
    },
    maxlength: {
        type: Number
    },
    name: {
        type: String
    },
    placeholder: {
        default: null,
        type: [
            Boolean,
            String,
            Number,
            null
        ]
    },
    type: {
        type: String,
        default: 'text'
    },
    value: {
        default: undefined,
        type: [
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
