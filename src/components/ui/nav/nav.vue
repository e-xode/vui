<script>
import langs from '@/components/ui/nav/translate/index.mjs'
import { props } from '@/components/ui/nav/nav.constant.mjs'
import VuiList from '@/components/ui/list/list.vue'

import {
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiNav',
    components: {
        VuiList
    },
    mixins: [
        composable
    ],
    props,
    emits: ['update:modelValue'],
    data () {
        return {
            selected: null
        }
    },
    watch: {
        modelValue (value) {
            this.selected = value
        },
        value (selected) {
            this.selected = selected
        }
    },
    created () {
        translatable(langs)
        if (this.hasModelValue) {
            this.selected = this.modelValue
        } else if (this.hasValue) {
            this.selected = this.value
        }
    },
    methods: {
        onClick (value) {
            if (!this.disabled) {
                this.$emit('update:modelValue', value)
            }
        }
    }
}
</script>
<template>
    <div
        :id="componentId"
        :class="[
            'vui-nav',
            { 'vui-nav--flat' : hasAttribute('flat') },
            $props.class
        ]"
    >
        <slot name="prepend" />
        <vui-list
            v-model="selected"
            class="vui-nav-list"
            :group-id="componentGroupId"
            :disabled="disabled"
            :item-label="itemLabel"
            :item-value="itemValue"
            :items="items"
            :selectable="!disabled"
            @update:model-value="onClick"
        >
            <template
                #item="{
                    index,
                    item,
                    itemValue,
                    itemLabel
                }"
            >
                <slot
                    name="item"
                    :index="index"
                    :item="item"
                    :item-label="itemLabel"
                    :item-value="itemValue"
                >
                    <i
                        v-if="showIcons"
                        :class="[
                            'fa-solid',
                            { 'fa-location-dot': !index },
                            { 'fa-chevron-right': index }
                        ]"
                    />
                    <span
                        v-if="!item.route"
                        class="vui-list-items-item-label-text"
                    >
                        {{ itemValue
                            ? item[itemLabel]
                            : item
                        }}
                    </span>
                    <router-link
                        v-if="item.route"
                        :to="item.route"
                        class="vui-list-items-item-label-text"
                    >
                        {{ itemValue
                            ? item[itemLabel]
                            : item
                        }}
                    </router-link>
                </slot>
            </template>
        </vui-list>
        <slot name="append" />
    </div>
</template>

<style
    lang="scss"
    src="./nav.scss"
/>
