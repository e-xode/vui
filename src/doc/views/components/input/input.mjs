import { mapGetters } from 'vuex'

export default {
    name: 'page-input',
    mounted() {
    },
    data() {
        return {
            code: `
            `
        }
    },
    computed: {
        ...mapGetters({
            user: 'user/getItem'
        })
    },
    components: {
    }
}
