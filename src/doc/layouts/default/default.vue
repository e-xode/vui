<script>
import components from '@/components.json'

export default {
    name: 'LayoutDefault',
    data () {
        return {
            component: null
        }
    },
    computed: {
        components () {
            const list = components.reduce((list, component) => {
                list[component.type].push(component)
                return list
            }, { html: [], layout:[], ui: [] })
            return Object.keys(list).map((key) => ({
                label: this.$t(`component.header.dropdown.components.${key}`),
                value: list[key].map((item) => ({
                    ...item,
                    label: item.name,
                    value: item.name,
                    route: { name: item.doc.name }
                }))
            }))
        }
    },
    watch: {
        '$route' ({ name }) {
            this.component = null
            const component = components.find(({ doc }) => doc.name === name)
            if (component) {
                this.component = {
                    label: component.name,
                    value: component.name
                }
            }
        }
    }
}
</script>

<template>
    <vui-page class="layout-default">
        <template #header>
            <vui-header>
                <router-link
                    class="home"
                    :to="{ name: 'ViewIndex' }"
                >
                    {{ $t('component.header.home') }}
                </router-link>
                <vui-dropdown
                    v-model="component"
                    :items="components"
                    item-label="label"
                    item-value="value"
                    :placeholder="$t('component.header.dropdown.components')"
                />
            </vui-header>
        </template>
        <template #body>
            <router-view />
        </template>
        <template #footer>
            <vui-footer>
                <span class="copyright">
                    {{ $t(('component.footer.copyright')) }}
                    <a href="https://www.e-xode.net">
                        www.e-xode.net
                    </a>
                </span>
            </vui-footer>
        </template>
    </vui-page>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.vui-page.layout-default {
    max-width: 1299px;
    min-height: calc(100vh - 2rem);
    margin: 0 auto;

    > .vui-page-header {
        padding: 0;

        .vui-header {
            display: flex;
            justify-content: space-between;
            background-color: $vui-color-green-light;

            .home {
                position: relative;
                padding-left: 1.5rem;
                line-height: 2.1rem;
                color: $vui-color-green-dark;
                cursor: pointer;

                &:before {
                    @include vui-glyph-solid;
                    position: absolute;
                    top: 0;
                    left: 0;
                    content: '\f015';
                }
            }
        }
    }

    > .vui-page-footer {

        .vui-footer {

            .copyright {
                font-size: .9rem;

                a {
                    font-size: inherit;
                    border-bottom: 1px solid $vui-color-blue;
                }
            }
        }
    }
}
</style>
