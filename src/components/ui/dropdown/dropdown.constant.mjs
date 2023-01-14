const props = {
    disabled: {
        type: Boolean
    },
    items: {
        type: Array,
        required: true
    },
    itemLabel: {
        type: String
    },
    itemValue: {
        type: String
    },
    modelValue: {
        type: [Object, Number, String, null]
    },
    placeholder: {
        type: String
    },
    value: {
        type: [Object, Number, String, null]
    }
}

export {
    props
}
