import { mapGetters } from 'vuex'

export default {
    name: 'page-dropdown',
    mounted() {
    },
    data() {
        return {
            code: `
                <v-dropdown
                    :onchange="() => {}"
                    :items="[
                        { value: 'item-1' },
                        { value: 'item-2' },
                        { value: 'item-3' },
                    ]"
                />
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
