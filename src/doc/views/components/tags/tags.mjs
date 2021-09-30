import { mapGetters } from 'vuex'

export default {
    name: 'page-tags',
    mounted() {
    },
    data() {
        return {
            items: [
                { value: 'tag1' },
                { value: 'tag2' }
            ],
            code: `
            <v-tags>
                <v-tag>tag1</v-tag>
                <v-tag>tag2</v-tag>
            </v-tags>
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
