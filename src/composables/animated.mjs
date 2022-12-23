const animated = {
    data() {
        return {
            animation: false
        }
    },
    methods: {
        animate () {
            if (!this.animation) {
                this.animation = true
                setTimeout(() => {
                    this.animation = false
                }, 100)
            }
        }
    }
}

export {
    animated
}

