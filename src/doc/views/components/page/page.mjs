import { mapGetters } from 'vuex'

export default {
    name: 'page-page',
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
