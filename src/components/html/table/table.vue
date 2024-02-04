<script>
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
    props: {
        disabled: {
            type: Boolean
        },
        headers: {
            type: Array,
            default: () => []
        },
        itemLabel: {
            type: String,
            default: 'label'
        },
        itemValue: {
            type: String,
            default: 'value'
        },
        items: {
            type: Array,
            required: true
        }
    },
    computed: {
        rows () {
            return this.items.map((item) => ({
                ...item,
                $$id: this.newId()
            }))
        }
    },
    created () {
        translatable(langs)
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
                        v-for="(th, a) in headers"
                        :key="`table-${componentId}-header--${a}`"
                        :name="`header.${th[itemValue]}`"
                        :item="th"
                        :item-label="itemLabel"
                        :item-value="itemValue"
                        :index="a"
                    >
                        <th>
                            {{ th[itemLabel] }}
                        </th>
                    </slot>
                </tr>
            </thead>
            <tbody>
                <slot
                    v-for="(tr, b) in rows"
                    :key="tr.$$id"
                    :index="b"
                    :item="tr"
                    :item-label="itemLabel"
                    :item-value="itemValue"
                    name="item"
                >
                    <tr>
                        <slot
                            v-for="(td, c) in headers"
                            :key="`table-${componentId}-item-td--${c}`"
                            :name="`item.${td[itemValue]}`"
                            :index="c"
                            :item="tr"
                            :item-label="itemLabel"
                            :item-value="itemValue"
                        >
                            <td
                                :data-label="headers[c].label"
                                :class="td.class"
                            >
                                {{ tr[td[itemValue]] }}
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
