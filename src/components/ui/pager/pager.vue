<script>
import langs from '@/components/ui/pager/translate/index.mjs'
import { props } from './pager.constant.mjs'
import VuiNav from '@/components/ui/nav/nav.vue'
import VuiButton from '@/components/html/button/button.vue'

import {
    animable,
    composable,
    translatable
} from '@/composables/index.mjs'


export default {
    name: 'VuiPager',
    components: {
        VuiButton,
        VuiNav
    },
    mixins: [
        animable,
        composable
    ],
    props,
    emits: ['update:model-value'],
    data() {
        return {
            page: 1
        }
    },
    computed: {
        isLast () {
            return this.page === this.last
        },
        last () {
            return Math.ceil(this.count / this.size)
        },
        pages () {
            if (this.last) {
                const items = [...Array.from({ length: this.last }, (_, i) => i + 1)]
                const l = items.slice(0, this.page)
                const r = items.slice(this.page, items.length)
                return [
                    ...l.slice(-(r.length > 2 ? 2 : 2 + (2 - r.length))),
                    ...r.slice(0, l.length > 2 ? 2 : 2 + (2 - l.length))
                ]
            }
            return []
        }
    },
    watch: {
        modelValue (value) {
            this.page = value
        },
        value (value) {
            this.page = value
        }
    },
    created () {
        translatable(langs)
        if (this.hasModelValue) {
            this.page = this.modelValue
        } else if (this.hasValue) {
            this.page = this.value
        }
    },
    methods: {
        onFirst() {
            if (!this.disabled && this.page > 1) {
                this.page = 1
                this.onPage()
            }
        },
        onLast() {
            if (!this.disabled && !this.isLast) {
                this.page = this.last
                this.onPage()
            }
        },
        onNext () {
            if (!this.disabled && !this.isLast) {
                this.page++
                this.onPage()
            }
        },
        onPrevious() {
            if (!this.disabled && this.page > 1) {
                this.page--
                this.onPage()
            }
        },
        onPage () {
            const { page, $route = {} } = this
            this.$emit('update:model-value', page)
            if (this.route && $route.query?.page !== page) {
                this.$router.push({
                    ...this.route,
                    query: {
                        ...this.route.query,
                        page
                    }
                })
            }
        }
    }
}
</script>

<template>
    <div
        :id="componentId"
        :class="['vui-pager', $props.class]"
    >
        <slot name="prepend" />
        <div class="vui-pager-content">
            <slot name="first">
                <vui-button
                    v-bind="$attrs"
                    :disabled="page === 1"
                    icon="fa-solid fa-angles-left"
                    class="vui-button--first"
                    @click="onFirst"
                />
            </slot>
            <slot name="previous">
                <vui-button
                    v-bind="$attrs"
                    :disabled="page === 1"
                    icon="fa-solid fa-chevron-left"
                    class="vui-button--previous"
                    @click="onPrevious"
                />
            </slot>
            <slot name="pages">
                <div
                    :class="[
                        'ellipse',
                        { visible: last > 4 && (page + 2) > 4 }
                    ]"
                >
                    ...
                </div>
                <vui-nav
                    v-model="page"
                    v-bind="$attrs"
                    :flat="hasAttribute('flat')"
                    :items="pages"
                    :show-icons="false"
                    @update:model-value="onPage"
                />
                <div
                    :class="[
                        'ellipse',
                        { visible: last > 4 && (page + 2) < last }
                    ]"
                >
                    ...
                </div>
            </slot>
            <slot name="next">
                <vui-button
                    v-bind="$attrs"
                    :disabled="isLast"
                    icon="fa-solid fa-chevron-right"
                    class="vui-button--next"
                    @click="onNext"
                />
            </slot>
            <slot name="previous">
                <vui-button
                    v-bind="$attrs"
                    :disabled="isLast"
                    icon="fa-solid fa-angles-right"
                    class="vui-button--last"
                    @click="onLast"
                />
            </slot>
        </div>
        <slot name="append" />
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.vui-pager {
    .vui-pager-content {
        display: flex;
        justify-content: space-between;

        .vui-button.vui-button--first,
        .vui-button.vui-button--next {
            margin-right: .25rem;
        }

        .ellipse {
            padding: 0 .75rem;
            line-height: 2rem;
            text-align: center;
            opacity: 0;

            &.visible {
                opacity: 1;
            }
        }
    }
}
</style>
