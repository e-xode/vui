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
            String,
            null
        ]
    },
    placeholder: {
        types: [
            Boolean,
            Number,
            String
        ]
    },
    value: {
        types: [
            Boolean,
            Object,
            Number,
            String,
            null
        ]
    }
}

export {
    props
}
