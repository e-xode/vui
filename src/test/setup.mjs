import mitt from 'mitt'
import { createI18n } from 'vue-i18n'
import {
    RouterViewStub,
    RouterLinkStub
} from '@vue/test-utils'

export default {
    global: {
        plugins: [
            createI18n({
                legacy: false,
                missingWarn: false,
                fallbackWarn: false
            })
        ],
        provide: {
            $bus: mitt()
        },
        mocks: {
        },
        stubs: {
            RouterLink: RouterLinkStub,
            RouterView: RouterViewStub,
            'vui-list': true
        },
        directives: {
        }
    }
}
