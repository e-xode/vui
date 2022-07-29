import { mapGetters } from 'vuex'

export default {
    name: 'page-tabs',
    mounted() {
    },
    data() {
        return {
            code: `
            <v-tabs>
                <v-tab>tab1</v-tab>
                <v-tab>tab2</v-tab>
            </v-tabs>
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
