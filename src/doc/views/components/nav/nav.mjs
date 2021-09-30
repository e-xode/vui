import { mapGetters } from 'vuex'


export default {
    name: 'page-nav',
    mounted() {},
    data() {
        return {
            items: [
                { value: 'item-1' },
                { value: 'item-2' },
                { value: 'item-3' }
            ],
            code: `
                <v-list
                    :disabled="false"
                    :items="[]"
                    :onclick="(option) => {}"
                />
            `,
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
