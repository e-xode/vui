<script>
import {
    translatable
} from '@/composables/index.mjs'

import langs from '@/doc/views/component/translate/index.mjs'
import components from '@/components.json'

export default {
    name: 'ViewComponent',
    computed: {
        component () {
            const { $route } = this
            return components.find(({ doc }) => doc.name === $route.name)
        },
        components () {
            return components
        }
    },
    created () {
        translatable(langs)
    },
    methods: {
        onRoute(name) {
            const route = name === 'ViewStart'
                ? { doc: { name }}
                : components.find(({ name }) => name === name)
            this.$router.push(route.doc)
        }
    }
}
</script>

<template>
    <div class="view-component">
        <vui-nav
            flat
            item-label="label"
            item-value="name"
            :items="[
                {
                    label: $t('page.component.nav.start'),
                    name: 'ViewStart'
                },
                {
                    label: component.label,
                    name: component.name
                }
            ]"
            :value="component"
            @update:model-value="onRoute"
        />
        <div class="h1">
            <h1>
                <i class="fa-brands fa-vuejs" />
                {{ $t('page.component.h1') }}
                <span
                    v-if="component"
                    class="view-component-name"
                >
                    {{ component.label }}
                </span>
            </h1>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.view-component {
    > .vui-nav {
        padding-left: 1rem;
    }

    > .h1 {
        padding: 1rem;

        h1 {
            position: relative;
            padding: 2rem 0 .5rem 2rem;

            i {
                position: absolute;
                top: 1.9rem;
                left: 0;
                color: $vui-color-green;
                font-size: 1.5rem;
                font-weight: 900;
            }

            .view-component-name {
                font-size: 1.15rem;
                font-weight: 600;
            }
        }
    }

    .vui-grid {

        .vui-grid-unit.api-options {

            .vui-table {
                table {
                    width: 100%;
                }
            }

            h2 {
                &:not(:first-of-type) {
                    margin-top: 2rem;
                }
            }
        }
    }

    .highlighted-code {
        margin: .5rem 0 2rem 0;
        white-space: pre-wrap;
        font-size: .85rem;
        background-color: lighten($vui-color-grey-light, 10%);
        border: 1px solid $vui-color-grey;
        border-radius: .25rem;

        .hljs-attr,
        .hljs-name,
        .hljs-tag,
        .hljs-string {
            font-size: .85rem;
        }
    }
}
</style>
