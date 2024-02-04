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
    emits: ['update:modelValue'],
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
            this.active = tab
            this.$emit('update:modelValue', this.active)
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

<style
    lang="scss"
    src="./tabs.scss"
/>
