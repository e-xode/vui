const props = {
    checked: {
        types: [
            Boolean,
            String,
            Number,
            null
        ]
    },
    checkedValue: {
        default: true,
        types: [
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
        default: false,
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
