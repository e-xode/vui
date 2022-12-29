const composable = {
    props: {
        id: {
            type: String
        },
        loading: {
            type: Boolean
        }
    },
    beforeCreate () {
    },
    created () {
        this.uuid = Math.random().toString(36).slice(-6)
    },
    data () {
        return {
            uuid: null
        }
    },
    computed: {
        identifier () {
            return this.id
                ? this.id
                : this.uuid
        }
    }
}

export {
    composable
}

