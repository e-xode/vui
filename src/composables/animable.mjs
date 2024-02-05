const options = {
    duration: 125
}
const animable = {
    data () {
        return {
            toggled: false,
            animating: false
        }
    },
    created () {
        this.$bus.on('outclick', (groupId) => {
            if (this.toggled && this.componentGroupId !== groupId) {
                this.blur()
            }
        })
    },
    methods: {
        animate () {
            if (!this.animating) {
                this.animating = true
                setTimeout(() => {
                    this.animating = false
                }, options.duration)
            }
        },
        blur () {
            this.toggled = false
        },
        focus () {
            this.toggled = true
            this.$bus.emit('outclick', this.componentGroupId)
        },
        onAnimate (open = null) {
            this.animate()
            if (open || (open === null  && !this.toggled)) {
                this.focus()
            } else {
                this.blur()
            }
        }
    }
}

export {
    animable,
    options
}

