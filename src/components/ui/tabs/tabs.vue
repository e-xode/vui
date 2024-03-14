<script>
import langs from '@/components/ui/tabs/translate/index.mjs'
import {
    composable,
    translatable
} from '@/composables/index.mjs'

import { props } from './tabs.constant.mjs'

export default {
    name: 'VuiTabs',
    mixins: [
        composable
    ],
    props,
    emits: ['update:model-value'],
    data () {
        return {
            active: null
        }
    },
    computed: {
        tabs () {
            return this.items.map((item) => ({
                ...item,
                $$id: this.newId()
            }))
        }
    },
    watch: {
        modelValue (tab) {
            this.active = tab
        },
        value (tab) {
            this.active = tab
        }
    },
    created () {
        translatable(langs)
        if (this.hasModelValue) {
            this.active = this.modelValue
        } else if (this.hasValue) {
            this.active = this.value
        } else if (this.items?.length) {
            const tab = this.items[0]
            this.active = tab[this.itemValue]
        }
    },
    methods: {
        toggle (tab) {
            if (!this.disabled) {
                this.active = tab
                this.$emit('update:model-value', this.active)
            }
        }
    }
}
</script>

<template>
    <div
        :id="componentId"
        :class="['vui-tabs', $props.class]"
    >
        <slot name="prepend" />
        <div class="vui-tabs-tabs">
            <div
                v-for="tab in tabs"
                :key="tab.$$id"
                :class="[
                    'vui-tabs-tabs-tab',
                    { 'vui-tabs-tabs-tab--with-icon': icon },
                    { 'vui-tabs-tabs-tab--active': tab[itemValue] === active }
                ]"
                @click="() => toggle(tab[itemValue])"
            >
                <i
                    v-if="icon"
                    :class="['vui-tabs-tabs-tab-icon', icon]"
                />
                <span class="label">
                    {{ tab[itemLabel] }}
                </span>
            </div>
        </div>
        <div class="vui-tabs-slots">
            <template
                v-for="(tab, index) in items"
                :key="`slot-${tab.$$id}`"
            >
                <slot
                    v-if="tab[itemValue] === active"
                    :name="tab[itemValue]"
                    :index="index"
                />
            </template>
        </div>
        <slot name="append" />
    </div>
</template>

<style lang="scss">
@import "@/scss/import.scss";

.vui-tabs {
    .vui-tabs-tabs {
        display: flex;
        padding: .5rem 0;

        .vui-tabs-tabs-tab {
            position: relative;
            padding: .5rem;
            border: 1px solid $vui-color-grey-light;
            cursor: pointer;

            &:not(:first-of-type) {
                margin-left: 1rem;
            }
            &.vui-tabs-tabs-tab--with-icon {
                .label {
                    padding-left: 2rem;
                }
            }
            &.vui-tabs-tabs-tab--active {
                border-color: $vui-color-green;

                .vui-tabs-tabs-tab-icon:before {
                    color: $vui-color-green;
                }
                .label {
                    color: $vui-color-green;
                }
            }

            .vui-tabs-tabs-tab-icon {
                position: absolute;
                top: .5rem;
                left: .75rem;
                font-size: 1.1rem;
                margin-right: .75rem;

                &:before {
                    color: $vui-color-grey-dark;
                }
            }
        }
    }

    .vui-tabs-slots {
        padding: 1rem;
        border: 1px solid $vui-color-grey-light;
    }
}
</style>
