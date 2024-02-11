const props = {
    checked: {
        default: undefined,
        type: Boolean
    },
    checkedValue: {
        default: undefined,
        types: [
            Boolean,
            String,
            Number,
            null
        ]
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
    name: {
        type: String
    },
    uncheckedValue: {
        default: undefined,
        types: [
            Boolean,
            String,
            Number,
            null
        ]
    },
    value: {
        default: undefined,
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
