const props = {
    checked: {
        default: undefined,
        type: Boolean
    },
    checkedValue: {
        default: undefined,
        type: [
            Boolean,
            String,
            Number,
            null
        ]
    },
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
    name: {
        default: undefined,
        type: String
    },
    uncheckedValue: {
        default: undefined,
        type: [
            Boolean,
            String,
            Number,
            null
        ]
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
