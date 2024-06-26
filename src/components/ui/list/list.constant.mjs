const props = {
    autoclose: {
        type: Boolean,
        default: true
    },
    disableFiltering: {
        type: Boolean,
        default: false
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
        types: [
            Boolean,
            Number,
            Object,
            String
        ]
    },
    multiple: {
        default: false,
        type: Boolean
    },
    selectable: {
        type: Boolean
    },
    title: {
        type: String
    },
    value: {
        default: undefined,
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
