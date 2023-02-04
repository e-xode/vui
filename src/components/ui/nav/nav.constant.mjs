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
        types: [
            Number,
            Object,
            String
        ]
    },
    value: {
        types: [
            Number,
            Object,
            String
        ]
    }
}

export {
    props
}
