const uuid = {
    created () {
        this.uuid = Math.random().toString(36).slice(-6)
    },
    data () {
        return {
            uuid: null
        }
    }
}

export {
    uuid
}

