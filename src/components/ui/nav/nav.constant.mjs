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
        type: [
            Boolean,
            Number,
            Object,
            String
        ]
    },
    value: {
        type: [
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
