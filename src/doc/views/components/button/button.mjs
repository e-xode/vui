import { mapGetters } from 'vuex'

export default {
    name: 'page-btn',
    mounted() {
    },
    data() {
        return {
            code: `<v-btn>button</v-btn>`
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
