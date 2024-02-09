<script>
import { props } from './table.constant.mjs'
import langs from '@/components/html/table/translate/index.mjs'
import {
    animable,
    composable,
    translatable
} from '@/composables/index.mjs'

export default {
    name: 'VuiTable',
    mixins: [
        animable,
        composable
    ],
    props,
    created () {
        translatable(langs)
    },
    methods: {
        leaf (value, path) {
            return path.split('.').reduce((v, e) => v[e], value)
        }
    }
}
</script>

<template>
    <div
        :id="componentId"
        :class="['vui-table', $props.class]"
    >
        <slot name="prepend" />
        <table>
            <thead>
                <tr>
                    <slot
                        v-for="(header, index) in headers"
                        :key="`table-${componentId}-header--${index}`"
                        :name="`header.${header[itemValue]}`"
                        :item="header"
                        :item-label="itemLabel"
                        :item-value="itemValue"
                        :index="index"
                    >
                        <th :class="header.class">
                            {{ header[itemLabel] }}
                        </th>
                    </slot>
                </tr>
            </thead>
            <tbody>
                <slot
                    v-for="(item, index) in items"
                    :key="`table-${componentId}-item--${index}`"
                    :index="index"
                    :item="item"
                    :item-label="itemLabel"
                    :item-value="itemValue"
                >
                    <tr>
                        <slot
                            v-for="(header, i) in headers"
                            :key="`table-${componentId}-item-td--${i}`"
                            :name="`item.${header[itemValue]}`"
                            :index="i"
                            :item="item"
                            :item-label="itemLabel"
                            :item-value="itemValue"
                        >
                            <td
                                :data-label="header.label"
                                :class="header.class"
                            >
                                {{ leaf(item, header.value) }}
                            </td>
                        </slot>
                    </tr>
                </slot>
            </tbody>
        </table>
        <slot name="append" />
    </div>
</template>

<style
    lang="scss"
    src="./table.scss"
/>
