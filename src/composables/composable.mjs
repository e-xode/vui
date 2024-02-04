const composable = {
    inject: ['$bus'],
    props: {
        class: {
            type: String
        },
        id: {
            type: String
        },
        groupId: {
            type: String
        },
        layout: {
            type: String,
            default: 'default'
        },
        loading: {
            type: Boolean
        },
        name: {
            type: String
        }
    },
    deactivated () {
        this.$bus.off('outclick')
    },
    created () {
        this.uuid = this.newId()
    },
    data () {
        return {
            uuid: null
        }
    },
    computed: {
        componentId () {
            return this.id
                ? this.id
                : this.uuid
        },
        componentGroupId () {
            return this.groupId
                ? this.groupId
                : this.uuid
        },
        hasModelValue () {
            return typeof this.modelValue !== 'undefined'
        },
        hasValue () {
            return typeof this.value !== 'undefined'
        }
    },
    methods: {
        hasAttribute (tag) {
            return Object.keys(this.$attrs).find((attr) => attr === tag)
        },
        hasProp (tag) {
            return typeof this[tag] !== 'undefined'
        },
        newId () {
            return Math.random().toString(36).slice(-6)
        }
    }
}

export {
    composable
}

