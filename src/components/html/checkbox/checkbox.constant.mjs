const props = {
    checked: {
        default: undefined,
        type: Boolean
    },
    checkedValue: {
        default: undefined,
        types: [
            Boolean,
            String,
            Number,
            null
        ]
    },
    icon: {
        type: String,
        default: 'fa-solid fa-square'
    },
    iconChecked: {
        type: String,
        default: 'fa-solid fa-square-check'
    },
    modelValue: {
        default: undefined,
        types: [
            Boolean,
            String,
            Number,
            null
        ]
    },
    name: {
        default: undefined,
        type: String
    },
    text: {
        default: undefined,
        type: String
    },
    uncheckedValue: {
        default: undefined,
        types: [
            Boolean,
            String,
            Number,
            null
        ]
    },
    value: {
        default: undefined,
        types: [
            Boolean,
            String,
            Number,
            null
        ]
    }
}

export {
    props
}
