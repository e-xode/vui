const props = {
    autoclose: {
        type: Boolean,
        default: true
    },
    disabled: {
        type: Boolean
    },
    expanded: {
        type: Boolean,
        default: false
    },
    keyword: {
        type: String,
        default: null
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
    selectable: {
        type: Boolean
    },
    title: {
        type: String
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
