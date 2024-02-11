const props = {
    modelValue: {
        default: undefined,
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
        default: 'text'
    },
    value: {
        default: undefined,
        types: [
            Boolean,
            Number,
            String,
            null
        ]
    }
}

export {
    props
}
