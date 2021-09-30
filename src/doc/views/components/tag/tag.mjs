import { mapGetters } from 'vuex'

export default {
    name: 'page-tag',
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
