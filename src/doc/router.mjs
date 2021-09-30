import {
    createRouter,
    createWebHistory
} from 'vue-router'

import pageBtn from '@/doc/views/components/button/button.vue'
import pageCard from '@/doc/views/components/card/card.vue'
import pageCode from '@/doc/views/components/code/code.vue'
import pageCols from '@/doc/views/components/cols/cols.vue'
import pageCol from '@/doc/views/components/col/col.vue'
import pageDropdown from '@/doc/views/components/dropdown/dropdown.vue'
import pageFooter from '@/doc/views/components/footer/footer.vue'
import pageHeader from '@/doc/views/components/header/header.vue'
import pageInput from '@/doc/views/components/input/input.vue'
import pageList from '@/doc/views/components/list/list.vue'
import pageNav from '@/doc/views/components/nav/nav.vue'
import pagePage from '@/doc/views/components/page/page.vue'
import pageTab from '@/doc/views/components/tab/tab.vue'
import pageTabs from '@/doc/views/components/tabs/tabs.vue'
import pageTag from '@/doc/views/components/tag/tag.vue'
import pageTags from '@/doc/views/components/tags/tags.vue'

import pageIndex from '@/doc/views/index/index.vue'

const history = createWebHistory()
const routes = [
    {
        component: pageIndex,
        name: 'pageIndex',
        path: '/',
        children: [
            {
                component: pageBtn,
                name: 'pageBtn',
                path: '/btn'
            },
            {
                component: pageCard,
                name: 'pageCard',
                path: '/card'
            },
            {
                component: pageCode,
                name: 'pageCode',
                path: '/code'
            },
            {
                component: pageCol,
                name: 'pageCol',
                path: '/col'
            },
            {
                component: pageCols,
                name: 'pageCols',
                path: '/cols'
            },
            {
                component: pageDropdown,
                name: 'pageDropdown',
                path: '/dropdown'
            },
            {
                component: pageFooter,
                name: 'pageFooter',
                path: '/footer'
            },
            {
                component: pageHeader,
                name: 'pageHeader',
                path: '/header'
            },
            {
                component: pageInput,
                name: 'pageInput',
                path: '/input'
            },
            {
                component: pageList,
                name: 'pageList',
                path: '/list'
            },
            {
                component: pageNav,
                name: 'pageNav',
                path: '/nav'
            },
            {
                component: pagePage,
                name: 'pagePage',
                path: '/page'
            },
            {
                component: pageTab,
                name: 'pageTab',
                path: '/tab'
            },
            {
                component: pageTabs,
                name: 'pageTabs',
                path: '/tabs'
            },
            {
                component: pageTag,
                name: 'pageTag',
                path: '/tag'
            },
            {
                component: pageTags,
                name: 'pageTags',
                path: '/tags'
            }
        ]
    }
]
const router = createRouter({
    history,
    routes
})
export {
    routes,
    router
}
