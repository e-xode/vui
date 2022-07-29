import { mapGetters } from 'vuex'

export default {
    name: 'page-col',
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
