const animated = {
    data () {
        return {
            toggled: false,
            animating: false
        }
    },
    deactivated () {
        this.$bus.off('outclick')
    },
    beforeCreate () {
        this.$bus.on('outclick', (uuid) => {
            console.log(['outclik', uuid, this.uuid])
            if (uuid !== this.uuid) {
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
            this.$bus.emit('outclick', this.uuid)
        },
        onToggle () {
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
    animated
}

