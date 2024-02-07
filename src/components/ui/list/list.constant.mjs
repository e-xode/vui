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
        type: [
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
        default: undefined,
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
