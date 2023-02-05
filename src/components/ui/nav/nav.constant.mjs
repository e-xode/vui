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
            Boolean,
            Number,
            Object,
            String
        ]
    },
    value: {
        types: [
            Boolean,
            Number,
            Object,
            String
        ]
    }
}

export {
    props
}
