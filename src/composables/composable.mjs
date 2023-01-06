const composable = {
    inject: ['$bus'],
    props: {
        id: {
            type: String
        },
        groupId: {
            type: String
        },
        loading: {
            type: Boolean
        }
    },
    deactivated () {
        this.$bus.off('outclick')
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
        componentId () {
            return this.id
                ? this.id
                : this.uuid
        },
        componentGroupId () {
            return this.groupId
                ? this.groupId
                : this.uuid
        }
    }
}

export {
    composable
}

