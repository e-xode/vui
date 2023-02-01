const props = {
    disabled: {
        type: Boolean
    },
    placeholder: {
        type: String,
        default: null
    },
    type: {
        type: String,
        required: true
    },
    modelValue: {
        type: [String, Number, null],
        required: false
    },
    value: {
        type: [String, Number, null],
        required: false
    }
}

export {
    props
}
