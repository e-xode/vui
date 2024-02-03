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
    maxlength: {
        type: Number
    },
    name: {
        type: String
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
