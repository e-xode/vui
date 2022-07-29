import { mapGetters } from 'vuex'

export default {
    name: 'page-cols',
    mounted() {
    },
    data() {
        return {
            code: `
                <v-cols cols="2">
                    <v-col>col1</v-col>
                    <v-col>col2</v-col>
                </v-cols>
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
