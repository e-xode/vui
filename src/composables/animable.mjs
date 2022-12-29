
const animable = {
    inject: ['$bus'],
    data () {
        return {
            toggled: false,
            animating: false
        }
    },
    deactivated () {
        this.$bus.off('outclick')
    },
    created () {
        this.$bus.on('outclick', (identifier) => {
            if (identifier !== this.identifier) {
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
                }, 150)
            }
        },
        blur () {
            this.toggled = false
        },
        focus () {
            this.toggled = true
            this.$bus.emit('outclick', this.identifier)
        },
        onAnimate () {
            this.animate()
            if (!this.toggled) {
                this.focus()
            } else {
                this.blur()
            }
        }
    }
}

export {
    animable
}

