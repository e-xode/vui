const props = {
    disabled: {
        type: Boolean
    },
    modelValue: {
        types: [
            Boolean,
            String,
            Number,
            null
        ]
    },
    name: {
        type: String
    },
    maxlength: {
        type: Number
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
