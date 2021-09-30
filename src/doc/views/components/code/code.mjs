import { mapGetters } from 'vuex'

export default {
    name: 'page-code',
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
