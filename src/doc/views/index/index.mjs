import { mapGetters } from 'vuex'
import routes from '@/components.json'

export default {
    name: 'index',
    mounted() {
    },
    data() {
        return {
            code: `
            `,
            routes
        }
    },
    computed: {
        ...mapGetters({
            user: 'user/getItem'
        }),
        navItems() {
            return [
                {
                    label: this.$t('page.index.nav.home'),
                    value: 'pageIndex'
                }
            ]
        }
    },
    methods: {

    },
    components: {
    }
}
