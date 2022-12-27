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
                fallbackWarn: false,
                silentTranslationWarn: true
            })
        ],
        provide: {
            $bus: mitt()
        },
        mocks: {
            $route: {
                params: {},
                query: {}
            },
            $router: {
                push: jest.fn(),
                replace: jest.fn()
            },
            $t: (str) => str
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
