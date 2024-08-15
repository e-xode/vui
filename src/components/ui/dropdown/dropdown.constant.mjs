const props = {
    disableFiltering: {
        type: Boolean,
        default: false
    },
    icon: {
        default: undefined,
        type: String
    },
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
        default: undefined,
        types: [
            Boolean,
            Number,
            Object,
            String,
            null
        ]
    },
    multiple: {
        default: false,
        type: Boolean
    },
    placeholder: {
        types: [
            Boolean,
            Number,
            String
        ]
    },
    value: {
        default: undefined,
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
