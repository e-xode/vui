const props = {
    headers: {
        type: Array,
        default: () => []
    },
    itemLabel: {
        type: String,
        default: 'label'
    },
    itemValue: {
        type: String,
        default: 'value'
    },
    items: {
        type: Array,
        default: () => [],
        required: true
    }
}

export {
    props
}
