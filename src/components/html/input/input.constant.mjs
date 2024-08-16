const props = {
    icon: {
        default: undefined,
        type: String
    },
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
    prependIcon: {
        default: undefined,
        type: String
    },
    type: {
        default: 'text',
        type: String
    },
    value: {
        default: undefined,
        types: [
            Boolean,
            Number,
            String,
            null
        ]
    },
    withIcon: {
        default: true,
        type: Boolean
    }
}

export {
    props
}
