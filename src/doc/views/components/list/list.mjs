import { mapGetters } from 'vuex'


export default {
    name: 'page-list',
    mounted() {},
    data() {
        return {
            items: [
                { value: 'item-1' },
                { value: 'item-2' },
                { value: 'item-3' }
            ],
            list1: `
                <v-list
                    :disabled="false"
                    :items="[]"
                    :onclick="(option) => {}"
                />
            `,
            list2: `
                <v-list
                    :disabled="true"
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
