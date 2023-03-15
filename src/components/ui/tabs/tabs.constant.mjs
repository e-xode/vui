const props = {
    items: {
        type: Array,
        required: true
    },
    itemLabel: {
        type: String,
        default: 'label'
    },
    itemValue: {
        type: String,
        default: 'value'
    },
    modelValue: {
        type: String
    },
    value: {
        type: String
    }
}

export {
    props
}
